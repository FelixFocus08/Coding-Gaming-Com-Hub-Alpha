// Dark/Light Mode Toggle mit LocalStorage

const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

function updateToggleButtonText() {
  toggleBtn.textContent = body.classList.contains('light-mode') ? '🌙 Dunkelmodus' : '☀️ Hellmodus';
}

// Initial Zustand aus LocalStorage laden
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
} else {
  body.classList.remove('light-mode');
}
updateToggleButtonText();

// Klick-Event
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  updateToggleButtonText();
});
