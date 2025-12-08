// Smooth navbar behavior on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(26, 26, 26, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all art cards
document.querySelectorAll('.art-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Make featured art cards clickable
const featuredArtworks = [
    { id: 1, title: "Geometric Harmony" },
    { id: 2, title: "Azure Dreams" },
    { id: 3, title: "Whispered Textures" },
    { id: 4, title: "Urban Reflections" },
    { id: 5, title: "Ethereal Flow" },
    { id: 6, title: "Silent Dialogue" }
];

document.addEventListener('DOMContentLoaded', () => {
    const artCards = document.querySelectorAll('.art-card');
    artCards.forEach((card, index) => {
        if (featuredArtworks[index]) {
            card.onclick = () => {
                window.location.href = `product.html?id=${featuredArtworks[index].id}`;
            };
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // --- Configuración ---
    const numFlakes = 50;      // Cantidad de copos
    const sizeFlakeMin = 10;   // Tamaño mínimo px
    const sizeFlakeMax = 20;   // Tamaño máximo px
    const flakeChars = ['❄', '✻', '✼', '✽']; // Formas de los copos

    // --- Lógica (No tocar) ---
    // Si quieres que NO salga en una pagina específica, descomenta las lineas de abajo:
    // if (window.location.href.includes('contacto.html')) return;

    for (let i = 0; i < numFlakes; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';

        // Posición horizontal aleatoria
        flake.style.left = Math.random() * 100 + 'vw';

        // Velocidad aleatoria (entre 2 y 5 segundos)
        flake.style.animationDuration = Math.random() * 3 + 2 + 's';

        // Tamaño aleatorio
        flake.style.fontSize = Math.random() * (sizeFlakeMax - sizeFlakeMin) + sizeFlakeMin + 'px';

        // Carácter aleatorio
        flake.textContent = flakeChars[Math.floor(Math.random() * flakeChars.length)];

        document.body.appendChild(flake);
    }
});