document.addEventListener('DOMContentLoaded', () => {
  // Sidebar Show/Hide
  const sidebar = document.querySelector('.sidebar');
  window.showSidebar = () => {
    sidebar.classList.add('show');
    sidebar.querySelector('.glass-close-button').focus();
  };
  window.hideSidebar = () => {
    sidebar.classList.remove('show');
    document.querySelector('.menuButton').focus();
  };

  // Dropdown aria-expanded toggeln
  document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      const submenu = btn.nextElementSibling;
      if (submenu) submenu.style.display = expanded ? 'none' : 'block';
    });
  });

  // Settings Panel Toggle
  const settingsPanel = document.getElementById('settings-panel');
  window.toggleSettingsPanel = () => {
    settingsPanel.classList.toggle('show');
    if (settingsPanel.classList.contains('show')) {
      settingsPanel.focus();
      showToast('Einstellungen geöffnet');
    } else {
      showToast('Einstellungen geschlossen');
    }
  };

  // Dark/Light Mode Toggle
  const modeBtn = document.getElementById('mode-btn');
  function updateModeBtnIcon() {
    if (document.body.classList.contains('dark-mode')) {
      modeBtn.textContent = '🌙 Dark Mode';
    } else {
      modeBtn.textContent = '☀️ Light Mode';
    }
  }

  modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    updateModeBtnIcon();
    showToast(`Modus gewechselt zu ${document.body.classList.contains('dark-mode') ? 'Dunkel' : 'Hell'}`);
  });

  updateModeBtnIcon();

  // Toast Notification Queue
  let toastTimeout;
  window.showToast = (message, duration = 3000) => {
    clearTimeout(toastTimeout);
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  };

  // Smooth Scroll & Highlight bei internen Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
        targetElem.classList.add('highlight');
        setTimeout(() => {
          targetElem.classList.remove('highlight');
        }, 1500);
      }
    });
  });

  // Scroll-To-Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollTopBtn.blur();
  });

  // Sprachumschalter Deutsch / Englisch
  const langToggleBtn = document.getElementById('langToggleBtn');
  let currentLang = 'de';

  langToggleBtn.addEventListener('click', () => {
    if (currentLang === 'de') {
      currentLang = 'en';
      langToggleBtn.textContent = 'English 🇬🇧';
      translateToEnglish();
      showToast('Language switched to English');
    } else {
      currentLang = 'de';
      langToggleBtn.textContent = 'Deutsch 🇩🇪';
      translateToGerman();
      showToast('Sprache auf Deutsch gewechselt');
    }
  });

  function translateToEnglish() {
    document.querySelector('h1').textContent = 'Welcome to Gaming & Coding Hub';
    document.querySelector('p').textContent = 'Discover exciting games and create cool projects!';
    document.querySelector('#gaming h2').textContent = 'Gaming World';
    document.querySelector('#coding h2').textContent = 'Coding Section';
    document.querySelector('#projects h2').textContent = 'Projects & News';
    document.querySelector('#apps h2').textContent = 'Our Web Apps';

    // Navigation
    document.querySelector('a.logo').textContent = 'Gaming & Coding';
    document.querySelector('a[href="#gaming"]').textContent = '🎮 Gaming';
    document.querySelector('a[href="#coding"]').textContent = '💻 Coding';
    document.querySelector('a[href="#projects"]').textContent = '📂 Projects';
    document.querySelector('a[href="#about"]').textContent = 'ℹ️ About Us';
    document.querySelector('a[href="#forum"]').textContent = '💬 Forum';

    // Dropdown Untermenüs - Gaming
    const gamingSub = document.querySelectorAll('ul[aria-label="Gaming Untermenü"] li a');
    if (gamingSub.length === 4) {
      gamingSub[0].textContent = 'New Releases';
      gamingSub[1].textContent = 'Reviews';
      gamingSub[2].textContent = 'Tournaments';
      gamingSub[3].textContent = 'Community';
    }
    // Dropdown Untermenüs - Coding
    const codingSub = document.querySelectorAll('ul[aria-label="Coding Untermenü"] li a');
    if (codingSub.length === 4) {
      codingSub[0].textContent = 'Projects';
      codingSub[1].textContent = 'Tutorials';
      codingSub[2].textContent = 'Tools';
      codingSub[3].textContent = 'Tips';
    }
  }

  function translateToGerman() {
    document.querySelector('h1').textContent = 'Willkommen im Gaming & Coding Hub';
    document.querySelector('p').textContent = 'Entdecke spannende Games und entwickle coole Projekte!';
    document.querySelector('#gaming h2').textContent = 'Gaming-Welt';
    document.querySelector('#coding h2').textContent = 'Coding-Bereich';
    document.querySelector('#projects h2').textContent = 'Projekte & Neuigkeiten';
    document.querySelector('#apps h2').textContent = 'Unsere Webanwendungen';

    // Navigation
    document.querySelector('a.logo').textContent = 'Gaming & Coding';
    document.querySelector('a[href="#gaming"]').textContent = '🎮 Gaming';
    document.querySelector('a[href="#coding"]').textContent = '💻 Coding';
    document.querySelector('a[href="#projects"]').textContent = '📂 Projekte';
    document.querySelector('a[href="#about"]').textContent = 'ℹ️ Über uns';
    document.querySelector('a[href="#forum"]').textContent = '💬 Forum';

    // Dropdown Untermenüs - Gaming
    const gamingSub = document.querySelectorAll('ul[aria-label="Gaming Untermenü"] li a');
    if (gamingSub.length === 4) {
      gamingSub[0].textContent = 'Neue Releases';
      gamingSub[1].textContent = 'Reviews';
      gamingSub[2].textContent = 'Turniere';
      gamingSub[3].textContent = 'Community';
    }
    // Dropdown Untermenüs - Coding
    const codingSub = document.querySelectorAll('ul[aria-label="Coding Untermenü"] li a');
    if (codingSub.length === 4) {
      codingSub[0].textContent = 'Projekte';
      codingSub[1].textContent = 'Tutorials';
      codingSub[2].textContent = 'Tools';
      codingSub[3].textContent = 'Tipps';
    }
  }
});
