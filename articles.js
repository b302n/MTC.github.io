// articles.js - Storie dei membri e gestione popup

// Dati dei membri (storie dettagliate)
const membersData = {
  mara: {
    name: 'Mara J.',
    role: 'vocals, guitar',
    bio: `<p>Mara ha fondato la band nel 2014 dopo anni di esperienze soliste in caffè deserti. La sua voce eterea e i testi malinconici sono il cuore emotivo di Velvet Echoes. Influenzata da Mazzy Star e Slowdive, scrive canzoni che parlano di notti insonni e luci al neon.</p>
          <p>Oltre alla musica, è appassionata di fotografia in bianco e nero e cura l'immagine visiva della band.</p>`,
    avatarId: 'avatar1'  // riferimento all'ID nell'HTML
  },
  sol: {
    name: 'Sol R.',
    role: 'bass, synth',
    bio: `<p>Sol è il motore ritmico e la mente sperimentale. Cresciuto ascoltando krautrock e post-punk, ha trasformato il basso in una texture liquida. I suoi synth analogici aggiungono strati di calore distorsione.</p>
          <p>Prima di unirsi alla band, costruiva pedali effetti nel suo garage. È anche un abile sound engineer e produce i dischi del gruppo.</p>`,
    avatarId: 'avatar2'
  },
  eliot: {
    name: 'Eliot W.',
    role: 'guitar, noises',
    bio: `<p>Eliot è il chitarrista silenzioso, capace di creare paesaggi sonori con loop e feedback. Autodidatta, ha imparato a suonare ascoltando dischi dei Sonic Youth e My Bloody Valentine.</p>
          <p>Oltre alla chitarra, si occupa delle parti visive durante i concerti e colleziona vecchi registratori a nastro. La sua ricerca del suono "sporco ma intimo" definisce l'estetica della band.</p>`,
    avatarId: 'avatar3'
  }
};

// Elementi del DOM
const modalOverlay = document.getElementById('memberModal');
const modalClose = document.getElementById('modalClose');
const modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');

// Funzione per aprire il modale
function openModal(memberKey) {
  const member = membersData[memberKey];
  if (!member) return;

  // Imposta l'avatar: prendi l'immagine di sfondo dall'avatar corrispondente
  const avatarElement = document.getElementById(member.avatarId);
  if (avatarElement) {
    const bgImage = window.getComputedStyle(avatarElement).backgroundImage;
    modalAvatar.style.backgroundImage = bgImage;
  } else {
    // Fallback
    modalAvatar.style.backgroundImage = 'none';
    modalAvatar.style.backgroundColor = '#2c2c34';
  }

  modalName.textContent = member.name;
  modalRole.textContent = member.role;
  modalBio.innerHTML = member.bio;

  // Mostra il modale con fade in
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // impedisce lo scroll sotto
}

// Funzione per chiudere il modale
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = ''; // ripristina scroll
}

// Event listener sulle card dei membri
document.querySelectorAll('.member-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const memberKey = card.dataset.member; // 'mara', 'sol', 'eliot'
    if (memberKey) {
      openModal(memberKey);
    }
  });
});

// Chiudi al click sul pulsante X
modalClose.addEventListener('click', closeModal);

// Chiudi al click sullo sfondo (overlay)
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Chiudi con il tasto ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

console.log('📖 articles.js caricato - popup interattivo pronto');
