# Debug: Imágenes no aparecen en el listado del blog

## Problema
Las imágenes se ven dentro del post individual pero NO en el listado del blog (http://localhost:3000/blog)

## Verificaciones Realizadas

### ✅ 1. Imágenes existen en el servidor
```
public/images/blog/alimentos.png      (2.0 MB)
public/images/blog/bano-perro.png     (2.3 MB)
public/images/blog/cuantos-banos.png  (2.5 MB)
public/images/blog/enfermo.png        (2.0 MB)
public/images/blog/garrapatas.png     (2.2 MB)
public/images/blog/razas.png          (2.4 MB)
public/images/blog/unas.png           (2.0 MB)
public/images/blog/vomito.png         (2.2 MB)
```

### ✅ 2. mockBlog.ts tiene las rutas correctas
```typescript
featuredImage: {
  _type: 'image',
  asset: {
    _ref: '/images/blog/bano-perro.png',
    _type: 'reference',
  },
}
```

### ✅ 3. Código de app/blog/page.tsx es correcto
```typescript
let imageUrl: string | undefined = undefined;
if (post.featuredImage?.asset?._ref) {
  const ref = post.featuredImage.asset._ref;
  if (ref.startsWith('/images/')) {
    imageUrl = ref;
  }
}
```

### ✅ 4. BlogPostCard recibe y muestra la imagen
```typescript
{featuredImage ? (
  <Image
    src={featuredImage}
    alt={title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover transition-transform duration-300 group-hover:scale-105"
  />
) : (
  // Placeholder
)}
```

## 🔍 Causa Probable: CACHÉ DEL NAVEGADOR

El problema más probable es que el navegador tiene en caché la versión antigua de la página del blog.

## ✅ SOLUCIÓN

### Opción 1: Recarga Forzada (MÁS RÁPIDA)
1. Ve a http://localhost:3000/blog
2. Presiona `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
3. Esto fuerza una recarga sin caché

### Opción 2: Modo Incógnito
1. Abre una ventana de incógnito/privada
2. Ve a http://localhost:3000/blog
3. Las imágenes deberían aparecer

### Opción 3: Limpiar Caché Completa
1. Presiona `Ctrl + Shift + Delete`
2. Selecciona "Todo el tiempo"
3. Marca "Imágenes y archivos en caché"
4. Borra los datos
5. Cierra TODAS las pestañas de localhost:3000
6. Reinicia el navegador
7. Vuelve a abrir http://localhost:3000/blog

### Opción 4: Reiniciar Servidor + Limpiar .next
```bash
# Detén el servidor (Ctrl + C)
rm -rf .next
npm run dev
```

Luego limpia la caché del navegador (Ctrl + Shift + R)

## 🧪 Verificación

Después de limpiar la caché, deberías ver:

**En http://localhost:3000/blog:**
- ✅ Artículo 1: Imagen de perro en bañera
- ✅ Artículo 3: Imagen de diferentes razas
- ✅ Artículo 4: Imagen relacionada con vómito
- ✅ Artículo 5: Imagen de garrapata
- ✅ Artículo 7: Imagen de calendario de baños
- ✅ Artículo 8: Imagen de corte de uñas
- ✅ Artículo 9: Imagen de alimentos
- ✅ Artículo 10: Imagen de perro enfermo

**Artículos sin imagen (placeholder con emoji 🐕):**
- Artículo 2: Mejores Champús
- Artículo 6: Mi Perro Tiene Pulgas
- Artículos 11-15

## 📝 Notas Técnicas

- Next.js cachea las páginas en modo desarrollo
- El navegador también cachea las imágenes y HTML
- Los cambios en `mockBlog.ts` requieren reiniciar el servidor
- Los cambios en componentes React se actualizan con Hot Reload
- Las imágenes en `public/` se sirven estáticamente

## ⚠️ Si Aún No Funciona

Si después de limpiar la caché las imágenes NO aparecen:

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Network"
3. Recarga la página
4. Busca las peticiones a `/images/blog/`
5. Verifica si hay errores 404
6. Comparte el error para más ayuda
