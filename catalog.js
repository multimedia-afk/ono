// Catalog page pagination and card generation
const ITEMS_PER_PAGE = 12;
let currentPage = 1;
let activeTheme = ''; // Active theme filter

// Get filtered artworks based on active theme
function getFilteredArtworks() {
    if (!activeTheme) {
        return artworks;
    }
    return artworks.filter(artwork => artwork.theme === activeTheme);
}

// Calculate total pages
const totalPages = Math.ceil(artworks.length / ITEMS_PER_PAGE);

// Render artwork cards
function renderCatalog(page = 1) {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;

    // Get filtered artworks
    const filteredArtworks = getFilteredArtworks();

    // Calculate total pages for filtered results
    const totalFilteredPages = Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE);

    // Calculate start and end indices
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageArtworks = filteredArtworks.slice(startIndex, endIndex);

    // Clear grid
    catalogGrid.innerHTML = '';

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

        catalogGrid.appendChild(card);
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
    prevBtn.textContent = 'Anterior';
    prevBtn.className = 'pagination-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderCatalog(currentPage);
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
            renderCatalog(currentPage);
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
            renderCatalog(currentPage);
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
            renderCatalog(currentPage);
            renderPagination();
        };
        paginationDiv.appendChild(lastBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Siguiente';
    nextBtn.className = 'pagination-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderCatalog(currentPage);
            renderPagination();
        }
    };
    paginationDiv.appendChild(nextBtn);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Update theme counts
    updateThemeCounts();

    // Check for theme parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const themeFromURL = urlParams.get('theme');
    if (themeFromURL) {
        activeTheme = themeFromURL;
        updateActiveThemeUI();
    }

    renderCatalog(currentPage);
    renderPagination();

    // Add theme filter event listeners
    const themeCards = document.querySelectorAll('.theme-card');
    themeCards.forEach(card => {
        card.addEventListener('click', () => {
            const theme = card.dataset.theme;
            activeTheme = theme;
            currentPage = 1; // Reset to first page when filtering

            // Update active state
            updateActiveThemeUI();

            // Re-render catalog with filtered results
            renderCatalog(currentPage);
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

// Update theme counts
function updateThemeCounts() {
    const themeCounts = {};

    // Count artworks for each theme
    artworks.forEach(artwork => {
        const theme = artwork.theme || 'Sin tema';
        themeCounts[theme] = (themeCounts[theme] || 0) + 1;
    });

    // Update count displays
    document.getElementById('count-all').textContent = `${artworks.length} obras`;
    if (themeCounts['Abstracto']) {
        document.getElementById('count-abstracto').textContent = `${themeCounts['Abstracto']} obras`;
    }
    if (themeCounts['Retrato']) {
        document.getElementById('count-retrato').textContent = `${themeCounts['Retrato']} obras`;
    }
    if (themeCounts['Textual']) {
        document.getElementById('count-textual').textContent = `${themeCounts['Textual']} obras`;
    }
    if (themeCounts['Surrealista']) {
        document.getElementById('count-surrealista').textContent = `${themeCounts['Surrealista']} obras`;
    }
    if (themeCounts['Gestual']) {
        document.getElementById('count-gestual').textContent = `${themeCounts['Gestual']} obras`;
    }
}

// Update active theme UI
function updateActiveThemeUI() {
    const themeCards = document.querySelectorAll('.theme-card');
    themeCards.forEach(card => {
        if (card.dataset.theme === activeTheme) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}
