// Product detail page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find artwork
    const artwork = artworks.find(art => art.id === productId);

    if (!artwork) {
        // Redirect to catalog if artwork not found
        window.location.href = 'catalog.html';
        return;
    }

    // Update page title
    document.getElementById('page-title').textContent = `${artwork.title} - ONO Galería`;

    // Render product content
    renderProduct(artwork);

    // Add navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(26, 26, 26, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

function renderProduct(artwork) {
    const productContent = document.getElementById('product-content');

    // Create multiple images for gallery (using same image with different styling)
    const galleryImages = [
        artwork.image,
        artwork.image,
        artwork.image,
        artwork.image
    ];

    // Check if 3D model is available
    const has3DModel = artwork.model3d && artwork.model3d !== '';

    productContent.innerHTML = `
        <!-- Left Column: Image/3D Gallery -->
        <div class="product-gallery">
            ${has3DModel ? `
            <!-- View Toggle Buttons -->
            <div class="view-toggle">
                <button class="toggle-btn active" id="btn-2d" onclick="toggleView('2d')">Vista 2D</button>
                <button class="toggle-btn" id="btn-3d" onclick="toggleView('3d')">Vista 3D</button>
            </div>
            ` : ''}
            
            <!-- 2D Gallery -->
            <div class="gallery-2d-wrapper" id="gallery-2d">
                <button class="fullscreen-btn" onclick="openImageFullscreen()" title="Ver en pantalla completa">⛶</button>
                <div class="main-image-wrapper">
                    <img src="${artwork.image}" alt="${artwork.title}" class="main-image" id="main-image">
                </div>
                <div class="thumbnail-gallery">
                    ${galleryImages.map((img, index) => `
                        <div class="thumbnail-wrapper ${index === 0 ? 'active' : ''}" onclick="changeImage('${img}', ${index})">
                            <img src="${img}" alt="${artwork.title} vista ${index + 1}" class="thumbnail-image">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${has3DModel ? `
            <!-- 3D Model Viewer -->
            <div class="viewer-3d-wrapper" id="viewer-3d">
                <button class="fullscreen-btn" onclick="open3DFullscreen()" title="Ver modelo 3D en pantalla completa">⛶</button>
                <model-viewer
                    id="model-viewer-element"
                    src="${artwork.model3d}"
                    alt="${artwork.title} - Modelo 3D"
                    camera-controls
                    touch-action="pan-y"
                    disable-zoom="false"
                    auto-rotate
                    auto-rotate-delay="3000"
                    rotation-per-second="30deg"
                    interaction-prompt="none"
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    shadow-intensity="1"
                    environment-image="neutral"
                    exposure="1"
                    shadow-softness="0.5"
                    loading="eager"
                    camera-orbit="0deg 75deg 105%"
                    min-camera-orbit="auto auto auto"
                    max-camera-orbit="auto auto auto"
                    min-field-of-view="10deg"
                    max-field-of-view="90deg">
                    <div slot="progress-bar" style="display: none;"></div>
                </model-viewer>
                <div class="model-viewer-controls">
                    <div class="control-item">🖱️ <strong>Arrastrar:</strong> Rotar en todos los ángulos</div>
                    <div class="control-item">✌️ <strong>Click derecho + Arrastrar:</strong> Mover vertical/horizontal</div>
                    <div class="control-item">🔍 <strong>Rueda del mouse:</strong> Zoom in/out</div>
                    <div class="control-item">📱 <strong>Móvil - 1 dedo:</strong> Rotar | <strong>2 dedos:</strong> Mover y zoom</div>
                </div>
            </div>
            ` : ''}
        </div>
        
        <!-- Right Column: Product Info -->
        <div class="product-info">
            <h1 class="product-title">${artwork.title}</h1>
            <p class="product-artist">${artwork.artist} · ${artwork.year}</p>
            
            <div class="product-description">
                <p>${artwork.description}</p>
            </div>
            
            <button class="btn-inquiry btn-whatsapp" onclick="handleWhatsAppInquiry('${artwork.title}', '${artwork.artist}')">
                <span class="whatsapp-icon">📱</span> Consultar por WhatsApp
            </button>
        </div>
        
        <!-- Fullscreen Overlay -->
        <div id="fullscreen-overlay" class="fullscreen-overlay" onclick="closeFullscreen(event)">
            <button class="fullscreen-close" onclick="closeFullscreen(event)">×</button>
            <div class="fullscreen-content" id="fullscreen-content"></div>
        </div>
    `;

    // Add error handling for model-viewer
    if (has3DModel) {
        setTimeout(() => {
            const modelViewer = document.getElementById('model-viewer-element');
            if (modelViewer) {
                modelViewer.addEventListener('error', (event) => {
                    console.error('Error loading 3D model:', event);
                    const viewerWrapper = document.getElementById('viewer-3d');
                    if (viewerWrapper) {
                        viewerWrapper.innerHTML = `
                            <div style="padding: 2rem; text-align: center; color: #666;">
                                <p>⚠️ No se pudo cargar el modelo 3D</p>
                                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Verifica que el archivo existe en: ${artwork.model3d}</p>
                            </div>
                        `;
                    }
                });

                modelViewer.addEventListener('load', () => {
                    console.log('3D model loaded successfully');
                });
            }
        }, 100);
    }
}

// Change main image when thumbnail clicked
function changeImage(imageSrc, index) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageSrc;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail-wrapper').forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Toggle between 2D and 3D view
function toggleView(view) {
    const gallery2D = document.getElementById('gallery-2d');
    const viewer3D = document.getElementById('viewer-3d');
    const btn2D = document.getElementById('btn-2d');
    const btn3D = document.getElementById('btn-3d');

    if (view === '3d') {
        gallery2D.classList.add('hidden');
        viewer3D.classList.add('active');
        btn2D.classList.remove('active');
        btn3D.classList.add('active');
    } else {
        gallery2D.classList.remove('hidden');
        viewer3D.classList.remove('active');
        btn2D.classList.add('active');
        btn3D.classList.remove('active');
    }
}

// Open image in fullscreen
function openImageFullscreen() {
    const mainImage = document.getElementById('main-image');
    const overlay = document.getElementById('fullscreen-overlay');
    const content = document.getElementById('fullscreen-content');

    if (mainImage && overlay && content) {
        content.innerHTML = `<img src="${mainImage.src}" alt="${mainImage.alt}">`;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Open 3D model in fullscreen
function open3DFullscreen() {
    const modelViewer = document.getElementById('model-viewer-element');
    const overlay = document.getElementById('fullscreen-overlay');
    const content = document.getElementById('fullscreen-content');

    if (modelViewer && overlay && content) {
        const modelClone = modelViewer.cloneNode(true);
        modelClone.id = 'fullscreen-model-viewer';
        modelClone.style.width = '95vw';
        modelClone.style.height = '95vh';

        content.innerHTML = '';
        content.appendChild(modelClone);
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close fullscreen
function closeFullscreen(event) {
    if (event) {
        event.stopPropagation();
    }

    const overlay = document.getElementById('fullscreen-overlay');
    const content = document.getElementById('fullscreen-content');

    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (content) {
        content.innerHTML = '';
    }
}

// ESC key to close fullscreen
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeFullscreen();
    }
});

// Handle WhatsApp inquiry
function handleWhatsAppInquiry(title, artist) {
    // WhatsApp number (replace with actual gallery WhatsApp number)
    const phoneNumber = '527771202775'; // Format: country code + number (no + or spaces)

    // Pre-filled message
    const message = `Hola, estoy interesado/a en la obra "${title}" de ${artist}. ¿Podrían proporcionarme más información sobre su disponibilidad?`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp Web URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new window
    window.open(whatsappURL, '_blank');
}
