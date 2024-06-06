document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('music');
    if (music) {
        music.addEventListener('canplay', function() {
            music.play();
        });

        document.addEventListener('click', function() {
            music.play();
            document.removeEventListener('click', arguments.callee);
        });
    }

    if (document.getElementById('map')) {
        initMap();
    }

    scrollToHome();
});

function initMap() {
    const map = L.map('map').setView([50.344967549322014, 20.403671418800883], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([50.344967549322014, 20.403671418800883]).addTo(map)
       .bindPopup('Młody Garage<br>Drożejowice 110/5, Skalbmierz 28-530')
       .openPopup();
}

function scrollToHome() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

window.onload = function() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 128) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};
