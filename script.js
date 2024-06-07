document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('music');
  if (music) {
    music.addEventListener('canplay', music.play);
    document.addEventListener('click', () => {
      music.play();
      document.removeEventListener('click', arguments.callee);
    });
  }

  if (document.getElementById('map')) {
    initMap();
  }


  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    menuToggle.addEventListener('touchstart', () => navLinks.classList.toggle('active'));
  }

  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 128);
  });
});

function initMap() {
  const map = L.map('map').setView([50.34484076841697, 20.403919425863336], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([50.34484076841697, 20.403919425863336], {
    alt: "Młody Garage - Drożejowice 110/5, Skalbmierz 28-530"
  }).addTo(map)
   .bindPopup('Młody Garage<br>Drożejowice 110/5, Skalbmierz 28-530')
   .openPopup();
}
