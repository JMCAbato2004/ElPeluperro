# Configuración Completa de Imágenes en el Blog

## ✅ Cambios Realizados

### 1. Imágenes Copiadas y Renombradas
Se copiaron 8 imágenes de `fotos/` a `public/images/blog/`:

```
fotos/baño_perro.png          → public/images/blog/bano-perro.png
fotos/Cuantos_banos.png        → public/images/blog/cuantos-banos.png
fotos/razas.png                → public/images/blog/razas.png
fotos/vomito.png               → public/images/blog/vomito.png
fotos/Garrapatas.png           → public/images/blog/garrapatas.png
fotos/Uñas.png                 → public/images/blog/unas.png
fotos/Alimentos.png            → public/images/blog/alimentos.png
fotos/Enfermo.png              → public/images/blog/enfermo.png
```

### 2. Actualización de `lib/data/mockBlog.ts`
Se actualizó el campo `featuredImage` de 8 artículos para usar las rutas correctas:

```typescript
featuredImage: {
  _type: 'image',
  asset: {
    _ref: '/images/blog/nombre-imagen.png',
    _type: 'reference',
  },
}
```

**Artículos actualizados:**
1. ✅ Cómo Bañar a un Perro → `/images/blog/bano-perro.png`
2. ✅ Guía de Razas → `/images/blog/razas.png`
3. ✅ Qué Hacer Si Vomita → `/images/blog/vomito.png`
4. ✅ Cómo Quitar Garrapatas → `/images/blog/garrapatas.png`
5. ✅ Cada Cuánto Bañar → `/images/blog/cuantos-banos.png`
6. ✅ Cómo Cortar Uñas → `/images/blog/unas.png`
7. ✅ Alimentos Prohibidos → `/images/blog/alimentos.png`
8. ✅ Cómo Saber Si Está Enfermo → `/images/blog/enfermo.png`

### 3. Actualización de `app/blog/[slug]/page.tsx`
Se mejoró la lógica de visualización de imágenes en la página de detalle del artículo:

```typescript
{post.featuredImage?.asset?._ref && (
  <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
    {post.featuredImage.asset._ref.startsWith('/images/') ? (
      <div className="aspect-video w-full relative bg-gray-100">
        <Image
          src={post.featuredImage.asset._ref}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
    ) : (
      // Placeholder para artículos sin imagen
      <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <span className="text-6xl">🐕</span>
      </div>
    )}
  </div>
)}
```

## 📍 Dónde Se Muestran las Imágenes

### 1. Vista de Listado del Blog (`/blog`)
- ✅ Tarjetas de artículos (BlogPostCard)
- Las imágenes aparecen en la parte superior de cada tarjeta
- Tamaño: 192px de alto (h-48)
- Efecto hover: zoom suave

### 2. Vista Individual del Artículo (`/blog/[slug]`)
- ✅ Imagen destacada grande
- Aparece después del título y metadata
- Antes del contenido del artículo
- Formato: aspect-video (16:9)
- Con sombra y bordes redondeados

## 🔧 Cómo Funciona

1. **Carga de datos**: `getBlogPostBySlug()` obtiene el artículo de `mockBlog.ts`
2. **Verificación**: Se verifica si `post.featuredImage.asset._ref` empieza con `/images/`
3. **Renderizado**: 
   - Si es una ruta local (`/images/`): Se usa el componente `<Image>` de Next.js
   - Si no: Se muestra un placeholder con emoji de perro

## 🚀 Para Ver los Cambios

1. **Reinicia el servidor de desarrollo**:
   ```bash
   # Detén el servidor (Ctrl + C)
   npm run dev
   ```

2. **Limpia la caché del navegador**:
   - Presiona `Ctrl + Shift + R` (recarga forzada)
   - O abre en modo incógnito

3. **Visita las páginas**:
   - Listado: http://localhost:3000/blog
   - Artículo individual: http://localhost:3000/blog/como-banar-perro-casa-guia-completa

## 📊 Estado Actual

- **Total de artículos**: 15
- **Con imagen asignada**: 8 (53%)
- **Sin imagen**: 7 (47%)

### Artículos sin imagen (usan placeholder):
- Mejores Champús
- Mi Perro Tiene Pulgas
- Mi Perro No Quiere Comer
- Cómo Educar Cachorro
- Por Qué Ladra Mucho
- Vacunas para Perros
- Cómo Desparasitar

## 🎨 Características de las Imágenes

- **Formato**: PNG
- **Optimización**: Next.js optimiza automáticamente
- **Responsive**: Se adaptan a diferentes tamaños de pantalla
- **Lazy loading**: Carga diferida excepto en la primera imagen
- **WebP/AVIF**: Conversión automática para mejor rendimiento

## 🐛 Solución de Problemas

### Las imágenes no aparecen:
1. Verifica que el servidor esté corriendo
2. Limpia la caché del navegador (Ctrl + Shift + R)
3. Verifica que las imágenes existan en `public/images/blog/`
4. Revisa la consola del navegador para errores

### Las imágenes se ven pixeladas:
- Next.js las optimiza automáticamente
- Asegúrate de que las imágenes originales tengan buena resolución
- Recomendado: mínimo 1200px de ancho

### Error 404 en las imágenes:
- Verifica que la ruta en `mockBlog.ts` sea correcta
- Las rutas deben empezar con `/images/blog/`
- No incluyas `public/` en la ruta
