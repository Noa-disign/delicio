document.addEventListener('DOMContentLoaded', () => {
  // Injecte le bouton menu toggle au début du body
  const headerHTML = `
    <div class="menu-toggle" id="menuToggle" aria-expanded="false" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Sélectionne menuToggle et nav **après** l'injection
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('nav');

  function toggleMenu() {
    const isActive = nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);

    if (isActive) {
      const firstLink = nav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      menuToggle.focus();
    }
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Fermer menu au clic hors menu
  document.addEventListener('click', (e) => {
    if (
      nav.classList.contains('active') &&
      !nav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
      menuToggle.focus();
    }
  });

  // Fermer menu avec Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
      menuToggle.focus();
    }
  });
});
