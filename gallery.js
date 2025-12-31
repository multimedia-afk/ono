// Gallery page pagination and card generation
const ITEMS_PER_PAGE = 12;
let currentPage = 1;
let activeCollection = ''; // Active collection filter

// Get filtered artworks based on active collection
function getFilteredArtworks() {
    if (!activeCollection) {
        return artworks;
    }
    return artworks.filter(artwork => artwork.theme === activeCollection);
}

// Calculate total pages
const totalPages = Math.ceil(artworks.length / ITEMS_PER_PAGE);

// Render artwork cards
function renderGallery(page = 1) {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    // Get filtered artworks
    const filteredArtworks = getFilteredArtworks();

    // Calculate total pages for filtered results
    const totalFilteredPages = Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE);

    // Calculate start and end indices
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageArtworks = filteredArtworks.slice(startIndex, endIndex);

    // Clear grid
    galleryGrid.innerHTML = '';

    // Generate cards
    pageArtworks.forEach(artwork => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.onclick = () => {
            window.location.href = `product.html?id=${artwork.id}`;
        };

        card.innerHTML = `
            <div class="art-image-wrapper">
                <img src="${artwork.image}" alt="${artwork.title}" class="art-image">
            </div>
            <div class="art-info">
                <h3 class="art-title">${artwork.title}</h3>
                <p class="art-meta">${artwork.artist} · ${artwork.year}</p>
            </div>
        `;

        galleryGrid.appendChild(card);
    });

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render pagination
function renderPagination() {
    const paginationDiv = document.getElementById('pagination');
    if (!paginationDiv) return;

    paginationDiv.innerHTML = '';

    // Recalculate total pages based on filtered artworks
    const filteredArtworks = getFilteredArtworks();
    const totalPages = Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE);

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.className = 'pagination-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderGallery(currentPage);
            renderPagination();
        }
    };
    paginationDiv.appendChild(prevBtn);

    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page + ellipsis if needed
    if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.textContent = '1';
        firstBtn.className = 'pagination-btn';
        firstBtn.onclick = () => {
            currentPage = 1;
            renderGallery(currentPage);
            renderPagination();
        };
        paginationDiv.appendChild(firstBtn);

        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.className = 'pagination-ellipsis';
            paginationDiv.appendChild(ellipsis);
        }
    }

    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = 'pagination-btn';
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.onclick = () => {
            currentPage = i;
            renderGallery(currentPage);
            renderPagination();
        };
        paginationDiv.appendChild(pageBtn);
    }

    // Last page + ellipsis if needed
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.className = 'pagination-ellipsis';
            paginationDiv.appendChild(ellipsis);
        }

        const lastBtn = document.createElement('button');
        lastBtn.textContent = totalPages;
        lastBtn.className = 'pagination-btn';
        lastBtn.onclick = () => {
            currentPage = totalPages;
            renderGallery(currentPage);
            renderPagination();
        };
        paginationDiv.appendChild(lastBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.className = 'pagination-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderGallery(currentPage);
            renderPagination();
        }
    };
    paginationDiv.appendChild(nextBtn);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Update collection counts
    updateCollectionCounts();

    // Check for collection parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const collectionFromURL = urlParams.get('collection');
    if (collectionFromURL) {
        activeCollection = collectionFromURL;
        updateActiveCollectionUI();
    }

    renderGallery(currentPage);
    renderPagination();

    // Add collection filter event listeners
    const collectionCards = document.querySelectorAll('.theme-card');
    collectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const collection = card.dataset.collection;
            activeCollection = collection;
            currentPage = 1; // Reset to first page when filtering

            // Update active state
            updateActiveCollectionUI();

            // Re-render gallery with filtered results
            renderGallery(currentPage);
            renderPagination();
        });
    });

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

// Update collection counts
function updateCollectionCounts() {
    const collectionCounts = {};

    // Count artworks for each collection
    artworks.forEach(artwork => {
        const collection = artwork.theme || 'Uncategorized';
        collectionCounts[collection] = (collectionCounts[collection] || 0) + 1;
    });

    // Update count displays
    document.getElementById('count-all').textContent = `${artworks.length} artworks`;
    if (collectionCounts['Abstract']) {
        document.getElementById('count-abstract').textContent = `${collectionCounts['Abstract']} artworks`;
    }
    if (collectionCounts['Portrait']) {
        document.getElementById('count-portrait').textContent = `${collectionCounts['Portrait']} artworks`;
    }
    if (collectionCounts['Textual']) {
        document.getElementById('count-textual').textContent = `${collectionCounts['Textual']} artworks`;
    }
    if (collectionCounts['Surrealist']) {
        document.getElementById('count-surrealist').textContent = `${collectionCounts['Surrealist']} artworks`;
    }
    if (collectionCounts['Gestural']) {
        document.getElementById('count-gestural').textContent = `${collectionCounts['Gestural']} artworks`;
    }
}

// Update active collection UI
function updateActiveCollectionUI() {
    const collectionCards = document.querySelectorAll('.theme-card');
    collectionCards.forEach(card => {
        if (card.dataset.collection === activeCollection) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}
