const card = document.querySelector('.business-card');
const cardStage = document.querySelector('.card-stage');
const formatButtons = document.querySelectorAll('.format-switch [data-format]');
const pageShell = document.querySelector('.page-shell');
const themeButtons = document.querySelectorAll('.theme-switch [data-theme]');

function flipCard() {
  const isFlipped = card.classList.toggle('is-flipped');
  card.setAttribute('aria-pressed', String(isFlipped));
  card.setAttribute('aria-label', isFlipped ? 'Show front of business card' : 'Show back of business card');
  document.querySelector('.flip-hint').lastChild.textContent = isFlipped ? ' Tap to return to the front' : ' Tap the card to flip';
}

card.addEventListener('click', (event) => {
  if (event.target.closest('a')) return;
  flipCard();
});
card.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    flipCard();
  }
});

function setFormat(format) {
  cardStage.dataset.format = format;
  formatButtons.forEach((item) => {
    const isActive = item.dataset.format === format;
    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });
}

setFormat(window.matchMedia('(max-width: 650px)').matches ? 'portrait' : 'landscape');

formatButtons.forEach((button) => {
  button.addEventListener('click', () => setFormat(button.dataset.format));
});

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const { theme } = button.dataset;
    pageShell.dataset.theme = theme;
    themeButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
  });
});
