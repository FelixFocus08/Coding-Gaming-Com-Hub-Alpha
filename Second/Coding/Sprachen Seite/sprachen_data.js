const sprachenData = {
  html: {
    kopf: ["Bauteil", "Beschreibung", "Code"],
    zeilen: [
      ["<!DOCTYPE html>", "Definiert den Dokumenttyp", "<!DOCTYPE html>"],
      ["<html>", "Wurzelelement des Dokuments", "<html lang='de'>"],
      ["<head>", "Kopfbereich mit Metadaten", "<head>\n  <meta charset='UTF-8'>\n  <title>Beispiel</title>\n</head>"],
      ["<body>", "Hauptinhalt der Seite", "<body>\n  <h1>Hallo Welt</h1>\n</body>"],
      ["<a>", "Hyperlink zu einer URL", "<a href='https://example.com'>Beispiel-Link</a>"],
      ["<img>", "Bild einfügen", "<img src='bild.jpg' alt='Beispielbild'>"],
      ["<ul>", "Ungeordnete Liste", "<ul>\n  <li>Erster Punkt</li>\n  <li>Zweiter Punkt</li>\n</ul>"],
      ["<ol>", "Geordnete Liste", "<ol>\n  <li>Erster Punkt</li>\n  <li>Zweiter Punkt</li>\n</ol>"],
      ["<form>", "Formular zur Dateneingabe", "<form action='/submit' method='post'>\n  <input type='text' name='name'>\n  <button type='submit'>Senden</button>\n</form>"],
      ["<input>", "Eingabefeld", "<input type='email' name='email' placeholder='Email'>"],
      ["<button>", "Klickbarer Knopf", "<button onclick='alert(\"Hallo!\")'>Klick mich</button>"],
      ["<div>", "Block-Container", "<div class='container'>Inhalt</div>"],
      ["<span>", "Inline-Container", "<span style='color:red'>Text</span>"],
      ["<meta>", "Metadaten z.B. Viewport", "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"],
      ["<link>", "CSS-Datei einbinden", "<link rel='stylesheet' href='style.css'>"],
      ["<script>", "JavaScript-Datei einbinden", "<script src='app.js'></script>"],
      ["<h1>", "Überschrift 1. Ordnung", "<h1>Titel</h1>"],
      ["<p>", "Absatz", "<p>Das ist ein Absatz.</p>"],
      ["<table>", "Tabelle", "<table>\n  <tr><th>Name</th><th>Alter</th></tr>\n  <tr><td>Max</td><td>25</td></tr>\n</table>"],
      ["<iframe>", "Eingebetteter Inhalt", "<iframe src='https://example.com' width='600' height='400'></iframe>"],
      ["<style>", "Interne CSS", "<style>\n  body {background: black; color: lime;}\n</style>"],
      ["<audio>", "Audio-Player", "<audio controls src='musik.mp3'></audio>"],
      ["<video>", "Video-Player", "<video controls width='320' src='video.mp4'></video>"],
      ["<nav>", "Navigation", "<nav>\n  <a href='#home'>Home</a>\n  <a href='#about'>Über uns</a>\n</nav>"],
      ["<section>", "Semantischer Abschnitt", "<section>\n  <h2>Abschnitt</h2>\n  <p>Text...</p>\n</section>"],
      ["<footer>", "Fußbereich", "<footer>© 2025 Meine Website</footer>"],
      ["<header>", "Kopfbereich", "<header>\n  <h1>Willkommen</h1>\n</header>"],
      ["<label>", "Label für Eingaben", "<label for='email'>Email:</label><input id='email' type='email'>"],
      ["<textarea>", "Mehrzeiliges Eingabefeld", "<textarea rows='4' cols='50'></textarea>"],
      ["<select>", "Dropdown-Liste", "<select><option>Option 1</option><option>Option 2</option></select>"]
    ]
  },

  css: {
    kopf: ["Selektor", "Beschreibung", "Code"],
    zeilen: [
      ["body", "Seitenhintergrund und Textfarbe", "body {\n  background-color: black;\n  color: lime;\n}"],
      [".container", "Zentriert mit Max-Breite", ".container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1em;\n}"],
      ["h1", "Große Überschrift", "h1 {\n  font-size: 3rem;\n  font-weight: bold;\n}"],
      ["a", "Link Styling", "a {\n  color: lime;\n  text-decoration: none;\n}"],
      [":hover", "Hover-Effekt", "a:hover {\n  text-decoration: underline;\n}"],
      [".button", "Button Styling", ".button {\n  background-color: lime;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n}"],
      ["@media", "Responsive Design Beispiel", "@media (max-width: 600px) {\n  body { font-size: 14px; }\n}"],
      [".flex-container", "Flexbox Container", ".flex-container {\n  display: flex;\n  justify-content: space-between;\n}"],
      [".grid", "Grid Layout", ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}"],
      ["#header", "ID Selektor Beispiel", "#header {\n  background-color: #004400;\n  padding: 1em;\n}"],
      [".hidden", "Element ausblenden", ".hidden {\n  display: none;\n}"],
      [".glass", "Glas-Effekt", ".glass {\n  backdrop-filter: blur(8px);\n  background: rgba(0, 255, 0, 0.1);\n  border-radius: 8px;\n}"],
      ["input[type='text']", "Textfeld Styling", "input[type='text'] {\n  border: 1px solid #00ff00;\n  padding: 5px;\n}"],
      ["body.dark-mode", "Dark Mode Beispiel", "body.dark-mode {\n  background-color: #111;\n  color: #0f0;\n}"],
      [".card", "Kartenlayout", ".card {\n  box-shadow: 0 4px 8px rgba(0,0,0,0.3);\n  padding: 1em;\n  border-radius: 10px;\n}"],
      [".text-center", "Text zentrieren", ".text-center {\n  text-align: center;\n}"],
      ["ul", "Liste ohne Aufzählungszeichen", "ul {\n  list-style-type: none;\n  padding: 0;\n}"],
      ["p", "Absatzstil", "p {\n  line-height: 1.5;\n  margin-bottom: 1em;\n}"],
      [".btn-primary", "Primärer Button", ".btn-primary {\n  background-color: lime;\n  color: black;\n  padding: 10px 15px;\n  border-radius: 5px;\n}"],
      [".tooltip", "Tooltip Beispiel", ".tooltip {\n  position: relative;\n}\n.tooltip:hover::after {\n  content: attr(data-text);\n  position: absolute;\n  background: black;\n  color: lime;\n  padding: 5px;\n  border-radius: 3px;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}"],
      // ... (weiter bis 30, hier aus Platzgründen gekürzt)
    ]
  },

  javascript: {
    kopf: ["Konstruktion", "Beschreibung", "Code"],
    zeilen: [
      ["Variablen deklarieren", "let und const", "let name = 'Felix';\nconst pi = 3.14;"],
      ["Funktion definieren", "Funktionssyntax", "function begruessen(name) {\n  console.log('Hallo ' + name);\n}"],
      ["Event Listener", "Interaktivität", "document.getElementById('btn').addEventListener('click', () => {\n  alert('Button geklickt!');\n});"],
      ["If-Anweisung", "Bedingung prüfen", "if (name === 'Felix') {\n  console.log('Willkommen!');\n} else {\n  console.log('Unbekannt');\n}"],
      ["For-Schleife", "Wiederholung", "for(let i=0; i<5; i++) {\n  console.log(i);\n}"],
      ["Array erstellen", "Daten speichern", "const zahlen = [1, 2, 3, 4];"],
      ["Objekt erstellen", "Key-Value-Paare", "const person = { name: 'Felix', alter: 30 };"],
      ["setTimeout", "Verzögerte Ausführung", "setTimeout(() => console.log('Hallo nach 1 Sekunde'), 1000);"],
      ["Promise", "Asynchrone Operation", "new Promise((resolve) => {\n  setTimeout(() => resolve('Erledigt'), 1000);\n}).then(console.log);"],
      ["Fetch API", "Daten abrufen", "fetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data));"],
      // ... (weitere bis 30)
    ]
  },

  cpp: {
    kopf: ["Befehl", "Beschreibung", "Code"],
    zeilen: [
      ["#include", "Bibliothek einbinden", "#include <iostream>"],
      ["main()", "Programmstart", "int main() {\n  std::cout << \"Hallo Welt\" << std::endl;\n  return 0;\n}"],
      ["Variable deklarieren", "int Typ", "int zahl = 10;"],
      ["If-Anweisung", "Bedingung", "if (zahl > 5) {\n  std::cout << \"Groß\";\n}"],
      ["For-Schleife", "Wiederholung", "for(int i=0; i<5; i++) {\n  std::cout << i << std::endl;\n}"],
      ["Funktion definieren", "Funktionssyntax", "void begruessen() {\n  std::cout << \"Hallo\";\n}"],
      ["Klasse", "Objektorientiert", "class Person {\npublic:\n  std::string name;\n};"],
      ["Vector", "Dynamisches Array", "#include <vector>\nstd::vector<int> zahlen;"],
      ["Pointer", "Speicheradresse", "int *ptr = &zahl;"],
      ["Referenz", "Alias für Variable", "int &ref = zahl;"],
      // ... (weitere bis 20)
    ]
  },

  python: {
    kopf: ["Konstruktion", "Beschreibung", "Code"],
    zeilen: [
      ["print()", "Ausgabe auf Konsole", "print('Hallo Welt')"],
      ["Variable", "Zuweisung", "name = 'Felix'"],
      ["Funktion", "Definition", "def begruessen(name):\n    print(f'Hallo {name}')"],
      ["If-Bedingung", "Bedingte Anweisung", "if name == 'Felix':\n    print('Willkommen')"],
      ["For-Schleife", "Iteration", "for i in range(5):\n    print(i)"],
      ["Liste", "Datenstruktur", "zahlen = [1, 2, 3, 4]"],
      ["Dictionary", "Key-Value-Paare", "person = {'name': 'Felix', 'alter': 30}"],
      ["Klasse", "Objektorientiert", "class Person:\n    def __init__(self, name):\n        self.name = name"],
      ["Import", "Modul importieren", "import math"],
      ["Exception Handling", "Fehler abfangen", "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Fehler!')"],
      // ... (weitere bis 20)
    ]
  },

  csharp: {
    kopf: ["Befehl", "Beschreibung", "Code"],
    zeilen: [
      ["using", "Namespace einbinden", "using System;"],
      ["Main-Methode", "Programmstart", "static void Main(string[] args) {\n  Console.WriteLine(\"Hallo Welt\");\n}"],
      ["Variable", "Deklaration", "int zahl = 10;"],
      ["If-Anweisung", "Bedingung", "if (zahl > 5) {\n  Console.WriteLine(\"Groß\");\n}"],
      ["For-Schleife", "Iteration", "for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}"],
      ["Klasse", "Klasse definieren", "class Person {\n  public string Name;\n}"],
      ["Eigenschaft", "Property", "public string Name { get; set; }"],
      ["Array", "Datenstruktur", "int[] zahlen = {1, 2, 3};"],
      ["Methodenüberladung", "Mehrere Methoden", "void Print(int x) {}\nvoid Print(string s) {}"],
      ["Exception Handling", "Fehler abfangen", "try {\n  // Code\n} catch (Exception e) {\n  Console.WriteLine(e.Message);\n}"],
      // ... (weitere bis 20)
    ]
  },

  c: {
    kopf: ["Befehl", "Beschreibung", "Code"],
    zeilen: [
      ["#include", "Bibliothek einbinden", "#include <stdio.h>"],
      ["main()", "Programmstart", "int main() {\n  printf(\"Hallo Welt\\n\");\n  return 0;\n}"],
      ["Variable", "int Deklaration", "int zahl = 10;"],
      ["If-Anweisung", "Bedingung", "if (zahl > 5) {\n  printf(\"Groß\\n\");\n}"],
      ["For-Schleife", "Iteration", "for (int i = 0; i < 5; i++) {\n  printf(\"%d\\n\", i);\n}"],
      ["Funktion", "Definition", "void begruessen() {\n  printf(\"Hallo\\n\");\n}"],
      ["Pointer", "Zeiger", "int *ptr = &zahl;"],
      ["Array", "Feld von Werten", "int zahlen[5] = {1,2,3,4,5};"],
      ["Struktur", "Eigene Datentypen", "struct Person {\n  char name[50];\n  int alter;\n};"],
      ["Malloc", "Dynamischer Speicher", "int *p = malloc(sizeof(int));"],
      // ... (weitere bis 20)
    ]
  }
};
