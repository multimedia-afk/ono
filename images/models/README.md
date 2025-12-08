# 3D Models for Artworks

This folder contains 3D models (.glb or .gltf files) for the gallery artworks.

## Supported Formats

- **GLB** (recommended): Binary GLTF format - single file, optimized
- **GLTF**: JSON-based 3D format with external assets

## How to Add 3D Models

### 1. Create or Convert Your 3D Model

You can create 3D models using software like:
- **Blender** (free, powerful)
- **SketchFab** (export models)
- **Photogrammetry** apps (create 3D from photos)

### 2. Export as GLB

Export your model as `.glb` format:
- In Blender: File → Export → glTF 2.0 (.glb/.gltf)
- Choose **glTF Binary (.glb)**
- Recommended settings:
  - Transform: +Y Up
  - Include: Cameras unchecked
  - Compression: Enabled

### 3. Place in models folder

```
images/models/
├── artwork1.glb
├── artwork2.glb
└── your-model-name.glb
```

### 4. Update Database

In `artwork-data.js`, add the `model3d` field:

```javascript
{
    id: 1,
    title: "Your Artwork",
    artist: "Artist Name",
    year: 2024,
    price: 2000,
    image: "images/artworks/your-image.jpg",
    model3d: "images/models/your-model.glb",  // ← Add this line
    description: "..."
}
```

## 3D Model Tips

### Optimization
- **Keep file size under 10MB** for fast loading
- Use texture compression
- Reduce polygon count for web performance

### Quality
- **Lighting**: Models will use neutral environment lighting
- **Scale**: Models auto-scale to fit viewer
- **Rotation**: Users can rotate 360° and zoom

### Testing
- Test your model at: https://modelviewer.dev/editor/
- Verify it loads and rotates smoothly

## Features Available

When a 3D model is added, users can:
- ✅ **Rotate** - Drag to spin the artwork
- ✅ **Zoom** - Scroll wheel to zoom in/out  
- ✅ **Pan** - Right-click drag (desktop)
- ✅ **Auto-rotate** - Automatically spins slowly
- ✅ **AR View** - View in augmented reality (mobile devices)
- ✅ **Toggle** - Switch between 2D images and 3D model

## Creating 3D from Photos

Use photogrammetry to create 3D models from multiple photos:

1. Take 20-30 photos of artwork from different angles
2. Use software like:
   - **Polycam** (iOS/Android app, free tier)
   - **Luma AI** (web-based, easy)
   - **Meshroom** (free, desktop)
3. Export as GLB
4. Upload to `images/models/`

## Example Structure

```javascript
// Artwork with 3D model
{ 
    id: 1, 
    model3d: "images/models/sculpture.glb"  // Toggle appears
}

// Artwork without 3D model  
{ 
    id: 2
    // No model3d field - only 2D images shown
}
```

If `model3d` field is missing or empty, the 3D toggle won't appear and only 2D images will be shown.
