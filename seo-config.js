// SEO Configuration for ONO Gallery
// Edit this file to update SEO data across all pages

const seoConfig = {
    // Global site settings
    site: {
        name: "ONO Art Gallery",
        url: "https://www.onogallery.com", // UPDATE THIS with your actual domain
        logo: "https://www.onogallery.com/logo1b.PNG", // UPDATE THIS with full URL
        language: "en",
        locale: "en_US",
        twitterHandle: "@onogallery" // UPDATE THIS with your Twitter handle
    },

    // Default fallback values
    defaults: {
        author: "ONO Art Gallery",
        image: "https://www.onogallery.com/images/artworks/obra1.jpg", // Default share image
        imageAlt: "ONO Contemporary Art Gallery"
    },

    // Page-specific SEO data
    pages: {
        home: {
            title: "ONO - Contemporary Art Gallery",
            description: "ONO is a contemporary art gallery dedicated to presenting exceptional works by emerging and established artists. Discover our curated collection of modern art.",
            keywords: "art gallery, contemporary art, artworks, Alfredo Cano Briceño, art collection, Mexico gallery, modern art",
            image: "https://www.onogallery.com/images/artworks/obra1.jpg",
            imageAlt: "ONO Art Gallery - Contemporary Art",
            type: "website"
        },

        catalog: {
            title: "Full Catalog - ONO Art Gallery",
            description: "Explore our complete collection of contemporary art. ONO presents exceptional works by emerging and established artists, organized by themes and styles.",
            keywords: "art catalog, available works, buy art, complete collection, abstract art, portraits, textual art",
            image: "https://www.onogallery.com/images/artworks/pintura3.jpg",
            imageAlt: "Contemporary Art Catalog - ONO Gallery",
            type: "website"
        },

        about: {
            title: "About - ONO Art Gallery",
            description: "Learn more about ONO Art Gallery, our mission, vision, and artist Alfredo Cano Briceño. Discover our history and commitment to contemporary art.",
            keywords: "about, art gallery, Alfredo Cano Briceño, gallery mission, artistic vision, contemporary art Mexico",
            image: "https://www.onogallery.com/logo1b.PNG",
            imageAlt: "ONO Art Gallery - About Us",
            type: "website"
        },

        product: {
            titleTemplate: "{artworkTitle} - {artistName} | ONO Gallery",
            descriptionTemplate: "{description}",
            type: "product"
        }
    },

    // Organization Schema
    organization: {
        "@context": "https://schema.org",
        "@type": "ArtGallery",
        "name": "ONO Art Gallery",
        "url": "https://www.onogallery.com",
        "logo": "https://www.onogallery.com/logo1b.PNG",
        "description": "Contemporary art gallery dedicated to presenting exceptional works by emerging and established artists",
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
