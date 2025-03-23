document.addEventListener("DOMContentLoaded", function () {
  // Effet d'apparition des services
  const serviceBoxes = document.querySelectorAll(".service-box");
  let debounceTimer;

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    serviceBoxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom && !box.classList.contains("visible")) {
        setTimeout(() => {
          box.classList.add("visible");
        }, index * 150); // Délai progressif
      }
    });
  }

  function debounceScroll() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(revealOnScroll, 10);
  }

  window.addEventListener("scroll", debounceScroll);
  revealOnScroll(); // Appel initial au chargement

  // Fonctionnalité du menu hamburger
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav.menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});