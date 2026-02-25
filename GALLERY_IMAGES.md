# Imágenes de Galería - Guía de Reemplazo

Este documento lista las imágenes placeholder que deben ser reemplazadas con fotos reales de trabajos realizados.

## Estado Actual

Actualmente, la galería utiliza imágenes placeholder de [placedog.net](https://placedog.net) que se generan automáticamente. Estas son imágenes temporales que deben ser reemplazadas con fotografías reales de los servicios de El Peluperro.

## Imágenes a Reemplazar

La galería contiene 12 items de ejemplo que cubren los tres tipos de servicios:

### Peluquería (Grooming) - 5 items
1. **Golden Retriever** - Corte completo y baño con acondicionador especial
2. **Caniche** - Corte estilo teddy bear
3. **Yorkshire Terrier** - Corte de pelo largo con baño aromático
4. **Shih Tzu** - Corte corto para el verano
5. **Schnauzer** - Corte tradicional de raza

### Baño (Bath) - 5 items
1. **Labrador** - Baño completo con champú hipoalergénico
2. **Husky Siberiano** - Baño premium con masaje y acondicionador
3. **Bulldog Francés** - Baño especial para piel sensible
4. **Pomerania** - Baño con productos premium y secado profesional
5. **Beagle** - Baño refrescante

### Antiparasitarios (Antiparasitic) - 2 items
1. **Pastor Alemán** - Tratamiento completo contra pulgas y garrapatas
2. **Border Collie** - Desparasitación interna y externa

## Especificaciones de Imágenes

### Requisitos Técnicos
- **Formato**: JPG o PNG (se convertirán automáticamente a WebP)
- **Dimensiones recomendadas**: 800x800px (aspecto cuadrado 1:1)
- **Tamaño máximo**: 2MB por imagen
- **Calidad**: Alta resolución, bien iluminadas

### Requisitos de Contenido
Cada item de galería necesita **DOS imágenes**:
1. **Imagen "Antes"**: Foto del perro antes del servicio
2. **Imagen "Después"**: Foto del perro después del servicio

### Consejos para las Fotos
- Usar buena iluminación natural
- Fondo limpio y neutro
- Perro en posición similar en ambas fotos (antes/después)
- Enfocar en el resultado del servicio
- Capturar diferentes razas y tamaños

## Cómo Reemplazar las Imágenes

### Opción 1: Usando Sanity CMS (Recomendado)

1. Acceder al Sanity Studio en `/studio` o en el dashboard de Sanity
2. Ir a la sección "Gallery Item"
3. Para cada item:
   - Hacer clic en "Edit"
   - Subir la imagen "Before" en el campo "Before Image"
   - Subir la imagen "After" en el campo "After Image"
   - Completar los campos:
     - **Title**: Título descriptivo (ej: "Transformación Golden Retriever")
     - **Service Type**: Seleccionar el tipo de servicio
     - **Dog Breed**: Raza del perro
     - **Description**: Breve descripción del servicio realizado
     - **Order**: Número de orden para la visualización
4. Guardar los cambios

### Opción 2: Reemplazar Datos Mock (Temporal)

Si Sanity no está configurado aún, puedes actualizar temporalmente el archivo `lib/data/mockGallery.ts`:

1. Subir las imágenes a la carpeta `public/gallery/`
2. Organizar en subcarpetas: `public/gallery/before/` y `public/gallery/after/`
3. Actualizar las referencias en `mockGallery.ts` para apuntar a las rutas locales

## Estructura de Carpetas Sugerida

```
public/
└── gallery/
    ├── before/
    │   ├── golden-retriever-1.jpg
    │   ├── caniche-1.jpg
    │   └── ...
    └── after/
        ├── golden-retriever-1.jpg
        ├── caniche-1.jpg
        └── ...
```

## Optimización Automática

Next.js optimizará automáticamente todas las imágenes:
- Conversión a formato WebP
- Generación de múltiples tamaños (responsive)
- Lazy loading automático
- Compresión sin pérdida de calidad visible

## Notas Adicionales

- Las imágenes se cargan de forma lazy (solo cuando son visibles)
- El modal de imagen ampliada permite navegar entre imágenes
- Los filtros permiten ver solo imágenes de un tipo de servicio específico
- Se recomienda tener al menos 12 items para una galería completa
- Puedes añadir más items según sea necesario

## Contacto

Para cualquier duda sobre las imágenes o el proceso de reemplazo, contactar con el equipo de desarrollo.
