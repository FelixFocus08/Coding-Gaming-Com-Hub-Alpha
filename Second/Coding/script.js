// Scroll Spy: Aktiven Menüpunkt je nach Scrollposition setzen
const sections = document.querySelectorAll("main .section");
const navLinks = document.querySelectorAll(".navbar-link");

function onScroll() {
  let scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach((section, idx) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[idx].classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
