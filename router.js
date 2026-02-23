// Versione aggiornata di router.js
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

function activatePage(pageId) {
  // Nascondi tutte le pagine (display: none)
  pages.forEach(page => {
    page.classList.remove('active');
    // Forza il reflow per far ripartire l'animazione (opzionale)
    void page.offsetHeight;
  });

  // Mostra la pagina target
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Aggiorna i link attivi
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === pageId) {
      link.classList.add('active');
    }
  });

  // Opzionale: aggiorna l'hash senza scattare
  history.pushState(null, null, `#${pageId}`);
}

  // Ascolta i click sui link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Blocca qualsiasi comportamento di default
      const pageId = link.dataset.page;
      if (pageId) {
        activatePage(pageId);
      }
    });
  });

  // Gestione iniziale in base all'hash (se presente)
  const initialHash = window.location.hash.substring(1) || 'home';
  if (document.getElementById(initialHash)) {
    activatePage(initialHash);
  } else {
    activatePage('home');
  }

  // Gestione tasto indietro/avanti del browser
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1) || 'home';
    if (document.getElementById(hash)) {
      activatePage(hash);
    }
  });
});
