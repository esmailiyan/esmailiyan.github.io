const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
navLinks.addEventListener('click', (event) => { if (event.target.matches('a')) { navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); } });
document.getElementById('year').textContent = new Date().getFullYear();
