# Guía para Poblar Artículos en Sanity CMS

Esta guía te ayudará a migrar los 6 artículos creados desde markdown a Sanity CMS.

## 📋 Artículos a Poblar

1. **Cómo Bañar a un Perro en Casa** (`docs/blog-articles/02-como-banar-perro-casa-guia-completa.md`)
2. **Los 7 Mejores Champús para Perros 2026** (`docs/blog-articles/03-mejores-champus-perros-2026.md`)
3. **Guía Completa de Razas de Perros** (`docs/blog-articles/04-guia-completa-razas-perros.md`)
4. **Qué Hacer Si Tu Perro Vomita** (`docs/blog-articles/05-que-hacer-perro-vomita.md`)
5. **Cómo Quitar Garrapatas a un Perro** (`docs/blog-articles/06-como-quitar-garrapatas-perro.md`)
6. **Mi Perro Tiene Pulgas** (`docs/blog-articles/07-mi-perro-tiene-pulgas-que-hacer.md`)

---

## 🚀 Opción 1: Poblar Manualmente en Sanity Studio (Recomendado)

### Paso 1: Acceder a Sanity Studio

1. Abre tu Sanity Studio (normalmente en `http://localhost:3333` o tu URL de Studio)
2. Inicia sesión con tus credenciales

### Paso 2: Crear Categorías (Si no existen)

Antes de crear posts, asegúrate de tener estas categorías:

**Categorías necesarias:**
- **Cuidados** (slug: `cuidados`)
- **Productos** (slug: `productos`)
- **Guías** (slug: `guias`)
- **Salud** (slug: `salud`)

**Cómo crear:**
1. En Sanity Studio, ve a "Categories"
2. Click en "Create new Category"
3. Completa:
   - Title: "Cuidados"
   - Slug: "cuidados" (genera automáticamente)
   - Description: "Consejos y guías sobre el cuidado diario de tu perro"
4. Repite para las demás categorías

### Paso 3: Crear Posts

Para cada artículo, sigue estos pasos:

#### Artículo 1: Cómo Bañar a un Perro

1. Click en "Create new Post"
2. Completa los campos:

**Campos básicos:**
- **Title**: `Cómo Bañar a un Perro en Casa: Guía Completa 2026 (Paso a Paso)`
- **Slug**: `como-banar-perro-casa-guia-completa`
- **Category**: Selecciona "Cuidados"
- **Author**: `José Antonio Camacho` (o tu nombre)
- **Published At**: Fecha actual
- **Featured**: ✅ (marcar como destacado)

**Excerpt** (resumen):
```
¿Tu perro necesita un baño pero no sabes por dónde empezar? Aprende cómo bañar a un perro en casa de forma profesional con esta guía paso a paso. Incluye productos recomendados, errores a evitar y consejos para perros miedosos.
```

**Tags** (separados por comas):
```
baño, higiene, cuidados, champú, grooming, tutorial
```

**Content** (Portable Text):
- Copia el contenido del archivo markdown
- Convierte los títulos markdown (##) a headings en Sanity
- Mantén la estructura de listas y párrafos
- Añade bloques de "callout" para los tips y advertencias

**Featured Image**:
- Sube una imagen de un perro siendo bañado
- Alt text: "Perro feliz siendo bañado en casa con champú especializado"

3. Click en "Publish"

#### Artículo 2: Los 7 Mejores Champús

**Campos básicos:**
- **Title**: `Los 7 Mejores Champús para Perros 2026: Comparativa Completa`
- **Slug**: `mejores-champus-perros-2026-comparativa`
- **Category**: "Productos"
- **Tags**: `champú, productos, comparativa, recomendaciones, higiene, afiliación`
- **Featured**: ✅

**Excerpt**:
```
Descubre los mejores champús para perros en 2026. Comparativa completa con análisis detallado, pros y contras, y recomendaciones según tipo de pelo y necesidades específicas.
```

#### Artículo 3: Guía de Razas

**Campos básicos:**
- **Title**: `Guía Completa de Razas de Perros: Características y Cuidados 2026`
- **Slug**: `guia-completa-razas-perros-caracteristicas-cuidados`
- **Category**: "Guías"
- **Tags**: `razas, guía, características, temperamento, cuidados, familias`
- **Featured**: ✅

**Excerpt**:
```
¿Buscas la raza de perro perfecta para ti? Descubre más de 30 razas con características detalladas, temperamento, cuidados específicos y recomendaciones para diferentes estilos de vida.
```

#### Artículo 4: Qué Hacer Si Tu Perro Vomita

**Campos básicos:**
- **Title**: `Qué Hacer Si Tu Perro Vomita: Causas y Soluciones 2026`
- **Slug**: `que-hacer-perro-vomita-causas-soluciones`
- **Category**: "Salud"
- **Tags**: `salud, vómito, emergencias, síntomas, tratamiento, veterinario`
- **Featured**: ✅

**Excerpt**:
```
¿Tu perro vomita y no sabes qué hacer? Aprende a identificar las causas, cuándo preocuparte y cómo actuar. Guía completa con consejos veterinarios y tratamientos caseros.
```

#### Artículo 5: Cómo Quitar Garrapatas

**Campos básicos:**
- **Title**: `Cómo Quitar Garrapatas a un Perro: Guía Segura 2026 (Paso a Paso)`
- **Slug**: `como-quitar-garrapatas-perro-guia-segura`
- **Category**: "Salud"
- **Tags**: `garrapatas, parásitos, salud, prevención, antiparasitarios, tutorial`
- **Featured**: ✅

**Excerpt**:
```
Aprende cómo quitar garrapatas a un perro de forma segura y efectiva. Guía paso a paso con herramientas necesarias, prevención y qué hacer después de la extracción.
```

#### Artículo 6: Mi Perro Tiene Pulgas

**Campos básicos:**
- **Title**: `Mi Perro Tiene Pulgas: Qué Hacer - Guía Completa 2026`
- **Slug**: `mi-perro-tiene-pulgas-que-hacer-guia-completa`
- **Category**: "Salud"
- **Tags**: `pulgas, parásitos, tratamiento, limpieza, prevención, antiparasitarios`
- **Featured**: ✅

**Excerpt**:
```
¿Tu perro tiene pulgas? Descubre cómo eliminarlas rápido y efectivamente. Plan de acción completo con tratamientos, limpieza del hogar y prevención de futuras infestaciones.
```

---

## 🔧 Opción 2: Usar la API de Sanity (Avanzado)

Si prefieres automatizar el proceso, puedes usar la API de Sanity.

### Requisitos:
- Token de escritura de Sanity
- Node.js instalado
- Paquete `@sanity/client`

### Script de Ejemplo:

```javascript
// scripts/populate-blog.js
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: 'TU_PROJECT_ID',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'TU_TOKEN_DE_ESCRITURA',
  useCdn: false,
});

async function createPost(postData) {
  try {
    const result = await client.create({
      _type: 'post',
      ...postData,
    });
    console.log(`✅ Post creado: ${result.title}`);
    return result;
  } catch (error) {
    console.error(`❌ Error creando post:`, error);
  }
}

// Ejemplo de post
const post1 = {
  title: 'Cómo Bañar a un Perro en Casa: Guía Completa 2026',
  slug: {
    _type: 'slug',
    current: 'como-banar-perro-casa-guia-completa',
  },
  excerpt: '¿Tu perro necesita un baño pero no sabes por dónde empezar?...',
  publishedAt: new Date().toISOString(),
  author: 'José Antonio Camacho',
  category: {
    _type: 'reference',
    _ref: 'CATEGORY_ID', // ID de la categoría "Cuidados"
  },
  tags: ['baño', 'higiene', 'cuidados', 'champú', 'grooming', 'tutorial'],
  content: [
    // Aquí va el contenido en formato Portable Text
    // Necesitarás convertir el markdown a Portable Text
  ],
};

// Ejecutar
createPost(post1);
```

### Convertir Markdown a Portable Text:

Puedes usar librerías como:
- `@sanity/block-content-to-markdown` (inverso)
- `markdown-to-portable-text`
- O hacerlo manualmente

---

## 📸 Imágenes para los Artículos

### Imágenes Recomendadas:

**Artículo 1 - Baño:**
- Perro siendo bañado en bañera
- Productos de baño (champú, toallas)
- Perro feliz después del baño

**Artículo 2 - Champús:**
- Botellas de champú para perros
- Comparativa visual de productos
- Perro con pelo brillante

**Artículo 3 - Razas:**
- Collage de diferentes razas
- Perros de diferentes tamaños
- Familias con perros

**Artículo 4 - Vómito:**
- Perro enfermo (con cuidado, no muy gráfico)
- Dueño cuidando a su perro
- Veterinario examinando perro

**Artículo 5 - Garrapatas:**
- Pinza quitagarrapatas
- Manos con guantes quitando garrapata
- Productos antiparasitarios

**Artículo 6 - Pulgas:**
- Perro rascándose
- Peine antipulgas
- Productos antipulgas

### Fuentes de Imágenes:

**Gratuitas:**
- Unsplash (https://unsplash.com/s/photos/dog)
- Pexels (https://www.pexels.com/search/dog/)
- Pixabay (https://pixabay.com/images/search/dog/)

**De pago (mejor calidad):**
- Shutterstock
- iStock
- Adobe Stock

**Recomendación:** Usa imágenes de alta calidad (mínimo 1200x800px) y optimízalas antes de subir.

---

## ✅ Checklist de Publicación

Para cada artículo, verifica:

- [ ] Título completo y optimizado para SEO
- [ ] Slug correcto (sin espacios, guiones)
- [ ] Categoría asignada
- [ ] Tags relevantes (mínimo 5)
- [ ] Excerpt atractivo (150-200 caracteres)
- [ ] Contenido completo migrado
- [ ] Estructura de headings correcta (H2, H3)
- [ ] Imagen destacada subida y optimizada
- [ ] Alt text de imagen descriptivo
- [ ] Autor asignado
- [ ] Fecha de publicación configurada
- [ ] Marcado como "Featured" si aplica
- [ ] Revisión ortográfica
- [ ] Preview en móvil y desktop
- [ ] Publicado (no draft)

---

## 🔍 Verificación Post-Publicación

Después de publicar cada artículo:

1. **Verifica en el sitio web:**
   - Ve a `/blog` y confirma que aparece
   - Click en el artículo y verifica que se ve correctamente
   - Revisa que la imagen se muestra
   - Confirma que los enlaces internos funcionan

2. **Verifica SEO:**
   - Título aparece en la pestaña del navegador
   - Meta description correcta
   - URL amigable (slug correcto)

3. **Verifica responsive:**
   - Abre en móvil
   - Verifica que se lee bien
   - Imágenes se adaptan

4. **Verifica anuncios (si AdSense está activo):**
   - Anuncios aparecen en posiciones correctas
   - No interfieren con la lectura
   - Divulgación de afiliados visible (si aplica)

---

## 📊 Después de Poblar Todos los Artículos

Una vez que todos los artículos estén publicados:

1. **Actualiza el sitemap:**
   - Sanity debería hacerlo automáticamente
   - Verifica en `/sitemap.xml`

2. **Envía a Google Search Console:**
   - Solicita indexación de nuevas URLs
   - Monitorea errores

3. **Comparte en redes sociales:**
   - Crea posts para cada artículo
   - Usa imágenes atractivas
   - Incluye hashtags relevantes

4. **Enlaces internos:**
   - Revisa que los "Artículos Relacionados" funcionen
   - Añade enlaces desde artículos antiguos a nuevos

5. **Monitorea métricas:**
   - Google Analytics: visitas, tiempo en página
   - Search Console: impresiones, clics, posición
   - AdSense: impresiones, CTR, ingresos (si activo)

---

## 🆘 Solución de Problemas

### Problema: No aparecen los artículos en el sitio

**Solución:**
1. Verifica que estén publicados (no en draft)
2. Revisa que la fecha de publicación no sea futura
3. Limpia la caché de Next.js: `npm run build`
4. Verifica las variables de entorno de Sanity

### Problema: Las imágenes no se muestran

**Solución:**
1. Verifica que las imágenes estén subidas en Sanity
2. Revisa que el campo `featuredImage` esté completo
3. Verifica la configuración de CORS en Sanity
4. Comprueba que `urlFor` funcione correctamente

### Problema: El contenido se ve mal formateado

**Solución:**
1. Revisa la estructura de Portable Text
2. Verifica que los componentes de `PortableText` estén correctos
3. Comprueba los estilos CSS de `.prose`

---

## 📞 Próximos Pasos

Después de poblar los artículos:

1. ✅ Crear más artículos (objetivo: 20+ antes de solicitar AdSense)
2. ✅ Configurar Google Search Console
3. ✅ Solicitar aprobación de Google AdSense
4. ✅ Registrarse en Amazon Associates
5. ✅ Añadir enlaces de afiliación a artículos de productos
6. ✅ Monitorear métricas semanalmente

---

**Última actualización:** 04/03/2026
