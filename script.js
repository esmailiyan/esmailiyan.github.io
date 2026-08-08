const printButton = document.querySelector('[data-print]');

if (printButton) {
  printButton.addEventListener('click', () => window.print());
}
