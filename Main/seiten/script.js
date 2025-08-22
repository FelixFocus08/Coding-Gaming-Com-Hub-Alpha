// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Scroll-basierte Fade-In-Animationen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".app-card, section").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Button-Klick Animation (optional für alle Links)
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
      link.classList.add("clicked");
      setTimeout(() => link.classList.remove("clicked"), 300);
    });
  });
});
