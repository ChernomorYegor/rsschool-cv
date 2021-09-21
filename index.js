// Menu
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');

function toggleMenu() {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
  body.classList.toggle('lock');
}

function closeMenu() {
  menu.classList.remove('active');
  menuToggle.classList.remove('active');
  body.classList.remove('lock');
}

menuToggle.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);