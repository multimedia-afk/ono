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

    // Initialize footer logo based on current theme
    updateFooterLogo();
});

// Footer logo swap based on theme (cross-browser compatible)
function updateFooterLogo() {
    const footerLogo = document.getElementById('footer-logo');
    if (footerLogo) {
        // Check for dark-mode class or system preference  
        const isDarkMode = document.body.classList.contains('dark-mode') ||
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
        footerLogo.src = isDarkMode ? 'logo1b.PNG' : 'logo1g.PNG';
    }
}

// Listen for system dark mode changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFooterLogo);
}

// Update logo when theme toggle exists
const themeToggle = document.querySelector('[data-theme-toggle]') || document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        setTimeout(updateFooterLogo, 50);
    });
}