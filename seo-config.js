// SEO Configuration for ONO Gallery
// Edit this file to update SEO data across all pages

const seoConfig = {
    // Global site settings
    site: {
        name: "ONO Galería de Arte",
        url: "https://www.onogallery.com", // UPDATE THIS with your actual domain
        logo: "https://www.onogallery.com/logo1b.PNG", // UPDATE THIS with full URL
        language: "es",
        locale: "es_MX",
        twitterHandle: "@onogallery" // UPDATE THIS with your Twitter handle
    },

    // Default fallback values
    defaults: {
        author: "ONO Galería de Arte",
        image: "https://www.onogallery.com/images/artworks/obra1.jpg", // Default share image
        imageAlt: "ONO Contemporary Art Gallery"
    },

    // Page-specific SEO data
    pages: {
        home: {
            title: "ONO - Galería de Arte Contemporáneo",
            description: "ONO es una galería de arte contemporáneo dedicada a presentar obras excepcionales de artistas emergentes y establecidos. Descubre nuestra colección curada de arte moderno.",
            keywords: "galería de arte, arte contemporáneo, obras de arte, Alfredo Cano Briceño, colección de arte, galería México, arte moderno",
            image: "https://www.onogallery.com/images/artworks/obra1.jpg",
            imageAlt: "Galería de Arte ONO - Arte Contemporáneo",
            type: "website"
        },

        catalog: {
            title: "Catálogo Completo - ONO Galería de Arte",
            description: "Explora nuestra colección completa de arte contemporáneo. ONO presenta obras excepcionales de artistas emergentes y establecidos, organizadas por temas y estilos.",
            keywords: "catálogo de arte, obras disponibles, comprar arte, colección completa, arte abstracto, retratos, arte textual",
            image: "https://www.onogallery.com/images/artworks/pintura3.jpg",
            imageAlt: "Catálogo de Arte Contemporáneo - ONO Gallery",
            type: "website"
        },

        about: {
            title: "Acerca de - ONO Galería de Arte",
            description: "Conoce más sobre ONO Galería de Arte, nuestra misión, visión y el artista Alfredo Cano Briceño. Descubre nuestra historia y compromiso con el arte contemporáneo.",
            keywords: "acerca de, galería de arte, Alfredo Cano Briceño, misión galería, visión artística, arte contemporáneo México",
            image: "https://www.onogallery.com/logo1b.PNG",
            imageAlt: "ONO Galería de Arte - Acerca de Nosotros",
            type: "website"
        },

        product: {
            titleTemplate: "{artworkTitle} - {artistName} | ONO Galería",
            descriptionTemplate: "{description}",
            type: "product"
        }
    },

    // Organization Schema
    organization: {
        "@context": "https://schema.org",
        "@type": "ArtGallery",
        "name": "ONO Galería de Arte",
        "url": "https://www.onogallery.com",
        "logo": "https://www.onogallery.com/logo1b.PNG",
        "description": "Galería de arte contemporáneo dedicada a presentar obras excepcionales de artistas emergentes y establecidos",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "MX",
            "addressLocality": "México" // UPDATE with actual city
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+52-777-120-2775",
            "contactType": "customer service",
            "email": "claudia@backyou.com.mx"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = seoConfig;
}
