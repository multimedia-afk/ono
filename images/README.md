# ONO Gallery - Image Storage

This folder contains all artwork images used throughout the gallery website.

## Folder Structure

```
images/
└── artworks/
    ├── Portada.webp (Hero background)
    ├── art1.jpg
    ├── art2.jpg
    ├── art3.jpg
    └── [your uploaded artwork images]
```

## How to Add New Artwork Images

1. **Place your images** in the `images/artworks/` folder
2. **Supported formats**: JPG, PNG, WEBP
3. **Recommended size**: At least 1200px on the longest side for quality
4. **Naming**: Use descriptive names (e.g., `geometric-harmony.jpg`)

## Updating the Database

After adding images, update the `artwork-data.js` file:

```javascript
{ 
    id: 1, 
    title: "Your Artwork Title", 
    artist: "Artist Name", 
    year: 2024, 
    image: "images/artworks/your-image.jpg",  // ← Update this path
    description: "..." 
}
```

The `image` path should be relative to the root directory where `index.html` is located.
