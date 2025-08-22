// chatbot.js

let intents = [];
let model;
let vocabulary = [];
let trainingData = [];
let outputData = [];

const chatBox = document.getElementById("chat-box");
const inputField = document.getElementById("user-input");
const faqList = document.getElementById("faq-list");

async function loadIntents() {
  const response = await fetch('intents.json');
  intents = await response.json();
  buildVocabulary();
  await trainModel();
  console.log("Modell fertig trainiert.");
}

function buildVocabulary() {
  const wordsSet = new Set();
  intents.forEach(intent => {
    intent.examples.forEach(example => {
      example.toLowerCase().split(/\W+/).forEach(word => {
        if(word) wordsSet.add(word);
      });
    });
  });
  vocabulary = Array.from(wordsSet);
}

function textToVector(text) {
  text = text.toLowerCase();
  const vector = new Array(vocabulary.length).fill(0);
  text.split(/\W+/).forEach(word => {
    const index = vocabulary.indexOf(word);
    if (index >= 0) vector[index] = 1;
  });
  return vector;
}

function prepareTrainingData() {
  trainingData = [];
  outputData = [];
  intents.forEach((intent, idx) => {
    intent.examples.forEach(example => {
      trainingData.push(textToVector(example));
      const outputRow = new Array(intents.length).fill(0);
      outputRow[idx] = 1;
      outputData.push(outputRow);
    });
  });
}

async function trainModel() {
  prepareTrainingData();
  const xs = tf.tensor2d(trainingData);
  const ys = tf.tensor2d(outputData);

  model = tf.sequential();
  model.add(tf.layers.dense({inputShape: [vocabulary.length], units: 8, activation: 'relu'}));
  model.add(tf.layers.dense({units: intents.length, activation: 'softmax'}));

  model.compile({optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy']});

  await model.fit(xs, ys, {epochs: 100});

  xs.dispose();
  ys.dispose();
}

async function predictIntent(text) {
  if (!model) return null;
  const input = tf.tensor2d([textToVector(text)]);
  const prediction = model.predict(input);
  const scores = prediction.dataSync();
  input.dispose();
  prediction.dispose();
  let maxScore = 0;
  let maxIndex = 0;
  scores.forEach((score, i) => {
    if (score > maxScore) {
      maxScore = score;
      maxIndex = i;
    }
  });
  if (maxScore < 0.5) return null;
  return intents[maxIndex];
}

async function getResponse(text) {
  // Erst einfache Keyword-Suche
  let response = null;
  for (const intent of intents) {
    for (const example of intent.examples) {
      if (text.toLowerCase().includes(example.toLowerCase())) {
        response = intent.response;
        break;
      }
    }
    if(response) break;
  }
  // Wenn nichts, TensorFlow.js-Modell nutzen
  if (!response) {
    const intent = await predictIntent(text);
    if (intent) response = intent.response;
    else response = "Stelle deine Frage bitte etwas genauer – ich bin bereit!";
  }
  return response;
}

function appendMessage(sender, text) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const input = inputField.value.trim();
  if (!input) return;
  appendMessage("Du", input);
  const response = await getResponse(input);
  appendMessage("Bot", response);
  speak(response);
  inputField.value = "";
}

function startSpeechRecognition() {
  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    alert("Spracherkennung wird nicht unterstützt.");
    return;
  }
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new Recognition();
  recognition.lang = "de-DE";
  recognition.start();
  recognition.onresult = event => {
    const speech = event.results[0][0].transcript;
    inputField.value = speech;
    sendMessage();
  };
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  speechSynthesis.speak(utterance);
}

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("speech-btn").addEventListener("click", startSpeechRecognition);
document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

const faqs = {
  coding: ["Wie starte ich mit HTML?", "Was ist CSS?", "Wie funktioniert JavaScript?"],
  gaming: ["Was sind gute PC-Spiele?", "Gibt es neue Releases?", "Was ist Crossplay?"],
  allgemein: ["Wer bist du?", "Was kannst du?", "Wie funktioniert das?"]
};

function showFAQ(category) {
  faqList.innerHTML = "";
  faqs[category].forEach(q => {
    const p = document.createElement("p");
    p.textContent = q;
    p.onclick = () => {
      inputField.value = q;
      sendMessage();
    };
    faqList.appendChild(p);
  });
}

document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => showFAQ(btn.dataset.category));
});

window.addEventListener('load', loadIntents);

async function getResponseBackend(text) {
  try {
    const res = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({text})
    });
    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error("Fehler bei Backend-Anfrage:", error);
    return "Es gab ein Problem mit dem Server.";
  }
}
