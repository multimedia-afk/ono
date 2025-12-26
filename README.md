# ONO Galería de Arte

Sitio web oficial de ONO Galería de Arte Contemporáneo.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [SEO Optimization](#seo-optimization)
- [Cómo Actualizar Contenido](#cómo-actualizar-contenido)
- [Temas de Artworks](#temas-de-artworks)

## ✨ Características

- **Catálogo Dinámico**: Navegación por obras de arte con filtros por tema
- **Sistema de Temas**: Organización de obras por categorías (Abstracto, Retrato, Textual, Surrealista, Gestual)
- **Visor 3D**: Modelos 3D interactivos de obras seleccionadas
- **Responsive Design**: Diseño adaptativo para dispositivos móviles y desktop
- **SEO Optimizado**: Meta tags y structured data para mejor posicionamiento

## 📁 Estructura del Proyecto

```
ono/
├── index.html          # Página principal
├── catalog.html        # Catálogo completo con filtros
├── about.html          # Acerca de la galería
├── product.html        # Página de detalle de obra
├── styles.css          # Estilos globales
├── catalog.css         # Estilos de catálogo y páginas internas
├── script.js           # JavaScript principal
├── catalog.js          # Lógica de filtrado y paginación
├── product.js          # Visor de productos y 3D
├── artwork-data.js     # Base de datos de obras
├── seo-config.js       # ⭐ Configuración SEO centralizada
└── images/             # Imágenes de obras y assets
```

## 🔍 SEO Optimization

### Configuración Centralizada

Todos los datos de SEO se gestionan desde el archivo **`seo-config.js`**. Este archivo contiene:

- Meta datos para cada página (title, description, keywords)
- Open Graph tags para redes sociales
- Twitter Card data
- Structured Data (Schema.org)
- Información de la organización

### Cómo Actualizar SEO

#### 1. Actualizar Información del Sitio

Edita `seo-config.js` y actualiza la sección `site`:

```javascript
site: {
    name: "ONO Galería de Arte",
    url: "https://www.onogallery.com", // ⚠️ ACTUALIZA CON TU DOMINIO
    logo: "https://www.onogallery.com/logo1b.PNG", // ⚠️ URL COMPLETA
    language: "es",
    locale: "es_MX",
    twitterHandle: "@onogallery" // ⚠️ TU HANDLE DE TWITTER
}
```

#### 2. Actualizar Meta Tags de Páginas

Para cambiar el SEO de una página específica, edita `seo-config.js` en la sección `pages`:

```javascript
pages: {
    home: {
        title: "Tu Nuevo Título",
        description: "Tu nueva descripción (150-160 caracteres idealmente)",
        keywords: "palabra1, palabra2, palabra3",
        image: "https://tudominio.com/imagen.jpg",
        imageAlt: "Descripción de la imagen",
        type: "website"
    }
}
```

#### 3. Campos Importantes por Página

**Página Principal (home)**
- `title`: Título principal (50-60 caracteres)
- `description`: Descripción atractiva (150-160 caracteres)
- `keywords`: Palabras clave separadas por comas
- `image`: Imagen para compartir en redes sociales (1200x630px recomendado)

**Catálogo (catalog)**
- Similar a home, pero enfocado en la colección
- Incluye keywords relacionadas con tipos de arte

**Acerca de (about)**
- Información sobre la galería y artistas
- Keywords relacionadas con identidad de marca

#### 4. Schema.org (Structured Data)

Actualiza la información estructurada en la sección `organization`:

```javascript
organization: {
    "name": "ONO Galería de Arte",
    "url": "https://www.onogallery.com",
    "address": {
        "addressCountry": "MX",
        "addressLocality": "Ciudad de México" // ⚠️ ACTUALIZA
    },
    "contactPoint": {
        "telephone": "+52-777-120-2775", // ⚠️ ACTUALIZA
        "email": "claudia@backyou.com.mx" // ⚠️ ACTUALIZA
    }
}
```

### Aplicar Cambios de SEO a HTML

Una vez actualizados los datos en `seo-config.js`, los cambios se reflejarán automáticamente en todas las páginas HTML que incluyan el script.

#### Verificar Implementación

1. **Google Search Console**: Verifica que Google pueda rastrear tu sitio
2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **Schema Validator**: https://validator.schema.org/

### Meta Tags Implementados

Cada página incluye:

✅ **Meta Tags Básicos**
- Title tag optimizado
- Meta description
- Meta keywords
- Canonical URL
- Viewport y charset

✅ **Open Graph (Facebook, LinkedIn)**
- og:title
- og:description
- og:image
- og:url
- og:type
- og:locale

✅ **Twitter Cards**
- twitter:card
- twitter:title
- twitter:description
- twitter:image

✅ **Structured Data**
- Organization schema
- Product schema (páginas de obras)
- Breadcrumb navigation

### Mejores Prácticas SEO

#### Títulos (Title Tags)
- **Longitud**: 50-60 caracteres
- **Formato**: "Título Principal | ONO Galería"
- **Incluir**: Palabras clave principales
- **Único**: Cada página debe tener título único

#### Descripciones (Meta Descriptions)
- **Longitud**: 150-160 caracteres
- **Call-to-Action**: Incluir verbo de acción
- **Keywords**: Incluir palabras clave naturalmente
- **Única**: Cada página debe tener descripción única

#### Keywords
- **Cantidad**: 5-10 keywords por página
- **Relevancia**: Solo keywords relacionadas con el contenido
- **Long-tail**: Incluir frases de 2-3 palabras

#### Imágenes para Redes Sociales
- **Tamaño**: 1200x630 píxeles (Open Graph)
- **Formato**: JPG o PNG
- **Peso**: Menos de 1MB
- **URL**: Usar URLs absolutas (https://...)

### Checklist de SEO

Antes de publicar, verifica:

- [ ] Actualizar URL del sitio en `seo-config.js`
- [ ] Añadir dominio real en todas las URLs de imágenes
- [ ] Verificar que todos los títulos sean únicos
- [ ] Revisar que descripciones tengan 150-160 caracteres
- [ ] Comprobar que las imágenes OG existan y sean accesibles
- [ ] Actualizar datos de contacto (teléfono, email, dirección)
- [ ] Añadir Google Analytics (opcional)
- [ ] Registrar sitio en Google Search Console
- [ ] Crear y subir sitemap.xml
- [ ] Crear robots.txt

## 🎨 Cómo Actualizar Contenido

### Agregar Nueva Obra de Arte

Edita `artwork-data.js` y añade un nuevo objeto al array:

```javascript
{
    id: 81, // ID único
    title: "Título de la Obra",
    artist: "Nombre del Artista",
    year: 2024,
    price: 15000,
    theme: "Abstracto", // Abstracto, Retrato, Textual, Surrealista, Gestual
    image: "images/artworks/nueva-obra.jpg",
    model3d: "images/models/obra-3d.glb", // Opcional
    description: "Descripción detallada de la obra...",
    gallery: [] // Array para imágenes adicionales
}
```

### Agregar Imágenes a la Galería de una Obra

Cada obra puede tener una galería de imágenes adicionales (detalles, proceso, diferentes ángulos, videos, etc.).

#### Estructura de la Galería

La propiedad `gallery` es un array que puede contener hasta 3 elementos inicialmente, pero es extensible para más en el futuro:

```javascript
gallery: [
    "artworkangularpictures/obra1-detail1.jpg",
    "artworkangularpictures/obra1-process.mp4",
    "artworkangularpictures/obra1-angle2.webp"
]
```

#### Pasos para Agregar Imágenes

1. **Crear la carpeta** (si no existe):
   ```bash
   mkdir -p artworkangularpictures
   ```

2. **Subir tus imágenes/videos** a la carpeta `artworkangularpictures/`
   - Usa nombres descriptivos: `obra[ID]-detail1.jpg`, `obra[ID]-process.mp4`, etc.
   - Formatos recomendados: `.webp`, `.jpg`, `.png` para imágenes; `.mp4`, `.webm` para videos

3. **Actualizar artwork-data.js**:
   ```javascript
   {
       id: 1,
       title: "Presencia Latente",
       // ... otras propiedades
       gallery: [
           "artworkangularpictures/obra1-detail1.jpg",
           "artworkangularpictures/obra1-detail2.webp",
           "artworkangularpictures/obra1-making.mp4"
       ]
   }
   ```

#### Tipos de Contenido para la Galería

**Imágenes Sugeridas:**
- 📸 Detalles de la obra (close-ups de texturas, pinceladas)
- 🎨 Proceso de creación (work in progress)
- 📐 Diferentes ángulos o iluminación
- 🖼️ Obra instalada en galería o espacio

**Videos Sugeridos:**
- 🎬 Time-lapse del proceso creativo
- 🌀 Video 360° de la obra
- 👨‍🎨 Artista hablando sobre la obra

#### Límites y Extensibilidad

- **Actual**: 3 espacios por defecto
- **Futuro**: El array es extensible, puedes añadir más elementos según necesites
- **Tamaño**: Se recomienda optimizar imágenes (< 2MB cada una)

#### Ejemplo Completo

```javascript
{
    id: 1,
    title: "Presencia Latente",
    artist: "Alfredo Cano Briceño",
    year: 2024,
    price: 2000,
    theme: "Surrealista",
    image: "images/artworks/pintura1.webp",
    model3d: "images/models/obra3d1.glb",
    description: "Esta obra materializa...",
    gallery: [
        "artworkangularpictures/obra1-texture-detail.webp",
        "artworkangularpictures/obra1-full-light.jpg",
        "artworkangularpictures/obra1-process-timelapse.mp4"
    ]
}
```

### Modificar Información de Contacto

1. **Footer**: Edita `index.html`, `catalog.html`, y `about.html`
2. **Página About**: Edita `about.html` sección de contacto
3. **SEO**: Actualiza `seo-config.js` en la sección `organization`

### Cambiar Imágenes del Logo

Reemplaza los archivos:
- `logo1b.PNG` (logo principal)
- Actualiza referencias en HTML si cambias el nombre

## 🏷️ Temas de Artworks

Las obras están organizadas en 5 temas:

- **Abstracto**: Obras de color y formas no representacionales
- **Retrato**: Obras basadas en figuras y rostros
- **Textual**: Obras que incorporan texto y tipografía
- **Surrealista**: Composiciones oníricas y simbólicas
- **Gestual**: Obras enfocadas en la expresividad del trazo

Para cambiar el tema de una obra, edita su propiedad `theme` en `artwork-data.js`.

## 📞 Contacto

- **Teléfono**: +52 777 120 2775
- **Email**: claudia@backyou.com.mx
- **Horario**: Lunes - Sábado, 8:00 - 18:00

---

© 2024 ONO Galería de Arte. Todos los derechos reservados.
