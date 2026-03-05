# Próximos Pasos: Transformación a Portal de Referencia

## 📋 Resumen de Documentos Creados

He creado 3 documentos completos para guiar la transformación:

1. **transformation-plan.md** - Plan estratégico completo de la transformación
2. **technical-specs-adsense.md** - Especificaciones técnicas para implementar Google AdSense
3. **content-strategy.md** - Estrategia de contenido detallada con calendario editorial

---

## 🎯 Visión General de la Transformación

### De:
- Sitio web de peluquería canina local
- ~500 visitas/mes
- Alcance: Sevilla y Alcalá de Guadaíra
- Monetización: Solo servicios locales

### A:
- Portal de referencia sobre cuidado canino
- 50,000+ visitas/mes (objetivo 12 meses)
- Alcance: Nacional/Internacional (español)
- Monetización múltiple:
  - Google AdSense (€500-1,000/mes)
  - Afiliación Amazon/Tiendanimal (€500-1,000/mes)
  - Servicios locales (mejorados con autoridad)

---

## 🚀 Roadmap de Implementación

### FASE 1: Fundamentos (Semanas 1-4)

#### Semana 1-2: Arquitectura y Diseño
- [ ] Rediseñar homepage como portal de referencia
- [ ] Crear nueva estructura de navegación
- [ ] Diseñar página "Sobre Mí" robusta (E-E-A-T)
- [ ] Actualizar footer con nuevas secciones
- [ ] Crear página de política de afiliación

**Archivos a modificar:**
```
app/
├── page.tsx (homepage - rediseño completo)
├── layout.tsx (navegación actualizada)
└── sobre-mi/
    └── page.tsx (nueva página robusta)

components/
├── layout/
│   ├── Header.tsx (nueva navegación)
│   └── Footer.tsx (actualizar)
└── sections/
    └── HeroSection.tsx (rediseñar como portal)
```

#### Semana 3: Componentes de AdSense
- [ ] Crear componente AdSenseScript
- [ ] Crear componente AdSenseUnit base
- [ ] Crear componente DisplayAd
- [ ] Crear componente InArticleAd
- [ ] Crear componente InFeedAd
- [ ] Crear componente StickyAd
- [ ] Configurar variables de entorno

**Archivos a crear:**
```
components/
└── ads/
    ├── AdSenseScript.tsx
    ├── AdSenseUnit.tsx
    ├── DisplayAd.tsx
    ├── InArticleAd.tsx
    ├── InFeedAd.tsx
    ├── StickyAd.tsx
    └── types.ts

lib/
└── ads/
    ├── config.ts
    ├── utils.ts
    └── constants.ts

.env.local (añadir):
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

#### Semana 4: Componentes de Afiliación
- [ ] Crear componente AffiliateLink
- [ ] Crear componente AffiliateDisclosure
- [ ] Crear componente ComparisonTable
- [ ] Configurar programas de afiliación

**Archivos a crear:**
```
components/
└── affiliate/
    ├── AffiliateLink.tsx
    ├── AffiliateDisclosure.tsx
    └── types.ts

components/
└── comparisons/
    ├── ComparisonTable.tsx
    ├── ProductCard.tsx
    └── types.ts

lib/
└── affiliate/
    ├── config.ts
    └── utils.ts

.env.local (añadir):
NEXT_PUBLIC_AMAZON_AFFILIATE_TAG=elpeluperro-21
NEXT_PUBLIC_TIENDANIMAL_PARTNER_ID=XXXXX
```

---

### FASE 2: Contenido Inicial (Mes 2)

#### Objetivos:
- 2 guías pillar publicadas
- 8 artículos de blog publicados
- 4 comparativas publicadas
- Solicitar aprobación de Google AdSense

#### Contenido a Crear:

**Guías Pillar:**
1. Guía Completa de Razas Caninas (15,000 palabras)
2. Manual de Primeros Auxilios Caninos (10,000 palabras)

**Artículos de Blog:**
3. Cómo Bañar a Tu Perro en Casa
4. Los 7 Mejores Champús para Perros [COMPARATIVA]
5. 10 Señales de que Tu Perro Necesita Ir al Veterinario
6. Cómo Prevenir Pulgas y Garrapatas
7. Alimentación Natural vs Pienso
8. Alimentos Prohibidos para Perros

**Comparativas:**
9. Mejores Cepillos para Perros según Tipo de Pelo
10. Top 5 Piensos Premium para Perros Adultos

#### Estructura en Sanity CMS:

```typescript
// Actualizar sanity/schemas/post.ts para incluir:
- Tipo de contenido: 'articulo' | 'comparativa' | 'guia'
- Productos relacionados (para comparativas)
- Tabla de contenidos (para guías)
- Posiciones de anuncios
```

---

### FASE 3: Optimización y Monetización (Mes 3)

#### Google AdSense:
- [ ] Solicitar cuenta de AdSense
- [ ] Añadir código de verificación
- [ ] Esperar aprobación (1-2 semanas)
- [ ] Crear unidades de anuncios
- [ ] Implementar anuncios en páginas clave
- [ ] Monitorear métricas

#### Afiliación:
- [ ] Registrarse en Amazon Associates
- [ ] Registrarse en Tiendanimal Afiliados
- [ ] Añadir enlaces de afiliación a artículos
- [ ] Crear disclosure de afiliación visible

#### SEO:
- [ ] Configurar Google Search Console
- [ ] Enviar sitemap
- [ ] Optimizar meta tags
- [ ] Implementar schema markup mejorado
- [ ] Comenzar link building

---

### FASE 4: Escala (Meses 4-6)

#### Contenido:
- Publicar 2-3 artículos por semana
- Llegar a 60+ artículos totales
- 10+ comparativas
- 5+ guías pillar

#### Promoción:
- Guest posting en blogs de mascotas
- Participación en comunidades
- Newsletter semanal
- Redes sociales activas

#### Optimización:
- Analizar métricas semanalmente
- Ajustar posiciones de anuncios
- A/B testing
- Actualizar contenido antiguo

---

## 💻 Cambios Técnicos Específicos

### 1. Nueva Estructura de Rutas

```
app/
├── page.tsx                          # Homepage como portal
├── blog/
│   ├── page.tsx                      # Lista de artículos (existente)
│   ├── [slug]/
│   │   └── page.tsx                  # Artículo individual (actualizar con ads)
│   └── categoria/
│       └── [slug]/
│           └── page.tsx              # Categoría (existente)
├── comparativas/                     # NUEVO
│   ├── page.tsx                      # Lista de comparativas
│   └── [slug]/
│       └── page.tsx                  # Comparativa individual
├── guias/                            # NUEVO
│   ├── page.tsx                      # Lista de guías
│   └── [slug]/
│       └── page.tsx                  # Guía individual
├── sobre-mi/                         # NUEVO (reemplaza sobre-nosotros)
│   └── page.tsx                      # Página robusta de autor
├── servicios/                        # Existente (mantener pero secundario)
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
└── afiliacion/                       # NUEVO
    └── page.tsx                      # Política de afiliación
```

### 2. Actualizar Sanity Schemas

```typescript
// sanity/schemas/post.ts - Añadir campos:

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    // ... campos existentes ...
    
    // NUEVOS CAMPOS:
    {
      name: 'contentType',
      title: 'Tipo de Contenido',
      type: 'string',
      options: {
        list: [
          { title: 'Artículo', value: 'article' },
          { title: 'Comparativa', value: 'comparison' },
          { title: 'Guía', value: 'guide' },
        ],
      },
    },
    {
      name: 'products',
      title: 'Productos (para comparativas)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      name: 'tableOfContents',
      title: 'Tabla de Contenidos',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'adPositions',
      title: 'Posiciones de Anuncios',
      type: 'object',
      fields: [
        { name: 'showTopAd', type: 'boolean', title: 'Mostrar anuncio superior' },
        { name: 'inArticleAdCount', type: 'number', title: 'Número de anuncios in-article' },
        { name: 'showBottomAd', type: 'boolean', title: 'Mostrar anuncio inferior' },
      ],
    },
  ],
};
```

```typescript
// sanity/schemas/product.ts - NUEVO SCHEMA

export default {
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
    },
    {
      name: 'rating',
      title: 'Valoración',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'string',
    },
    {
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'cons',
      title: 'Contras',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'affiliateLinks',
      title: 'Enlaces de Afiliación',
      type: 'object',
      fields: [
        { name: 'amazon', type: 'url', title: 'Amazon' },
        { name: 'tiendanimal', type: 'url', title: 'Tiendanimal' },
      ],
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
  ],
};
```

### 3. Actualizar Layout Principal

```typescript
// app/layout.tsx

import { AdSenseScript } from '@/components/ads/AdSenseScript';

export const metadata: Metadata = {
  // ... metadata existente ...
  
  // ACTUALIZAR:
  title: {
    default: 'El Peluperro - Tu Guía de Cuidado Canino',
    template: '%s | El Peluperro',
  },
  description:
    'Portal de referencia sobre cuidado canino con guías, comparativas y consejos de un peluquero profesional. Servicios de peluquería móvil en Sevilla.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* AÑADIR: */}
        <AdSenseScript />
      </head>
      <body>
        {/* ... contenido existente ... */}
      </body>
    </html>
  );
}
```

### 4. Ejemplo de Artículo con Anuncios

```typescript
// app/blog/[slug]/page.tsx - ACTUALIZAR

import { DisplayAd } from '@/components/ads/DisplayAd';
import { InArticleAd } from '@/components/ads/InArticleAd';
import { StickyAd } from '@/components/ads/StickyAd';
import { AffiliateDisclosure } from '@/components/affiliate/AffiliateDisclosure';
import { AD_SLOTS } from '@/lib/ads/config';

export default async function BlogPostPage({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  
  // Determinar si tiene enlaces de afiliación
  const hasAffiliateLinks = post.contentType === 'comparison' || 
                            post.tags?.includes('productos');

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </header>

      {/* Disclosure de afiliación si aplica */}
      {hasAffiliateLinks && <AffiliateDisclosure />}

      {/* Anuncio superior */}
      {post.adPositions?.showTopAd && (
        <DisplayAd 
          slot={AD_SLOTS.blog_top} 
          format="horizontal" 
          className="my-8" 
        />
      )}

      {/* Imagen destacada */}
      {post.featuredImage && (
        <img src={post.featuredImage} alt={post.title} />
      )}

      {/* Contenido con anuncios intercalados */}
      <div className="prose prose-lg max-w-none">
        <PortableText 
          value={post.content}
          components={{
            // Insertar anuncios cada X bloques
            block: (props) => {
              const { index } = props;
              const shouldShowAd = index > 0 && index % 5 === 0;
              
              return (
                <>
                  <p {...props} />
                  {shouldShowAd && (
                    <InArticleAd slot={AD_SLOTS.blog_in_article_1} />
                  )}
                </>
              );
            },
          }}
        />
      </div>

      {/* Anuncio inferior */}
      {post.adPositions?.showBottomAd && (
        <DisplayAd 
          slot={AD_SLOTS.blog_bottom} 
          format="horizontal" 
          className="my-8" 
        />
      )}

      {/* Anuncio sticky móvil */}
      <StickyAd slot={AD_SLOTS.mobile_sticky} />
    </article>
  );
}
```

---

## 📊 Métricas y Seguimiento

### KPIs Principales

**Mes 1-3:**
- Artículos publicados: 20+
- Visitas mensuales: 5,000+
- Aprobación de AdSense: ✓

**Mes 4-6:**
- Artículos publicados: 40+
- Visitas mensuales: 15,000+
- Ingresos digitales: €200-500/mes

**Mes 7-12:**
- Artículos publicados: 80+
- Visitas mensuales: 50,000+
- Ingresos digitales: €1,000-2,000/mes

### Herramientas de Seguimiento

1. **Google Analytics 4** - Tráfico y comportamiento
2. **Google Search Console** - Rendimiento SEO
3. **Google AdSense Dashboard** - Ingresos por anuncios
4. **Amazon Associates Dashboard** - Ingresos por afiliación
5. **Ahrefs/SEMrush** - Posiciones y keywords

---

## ⚠️ Consideraciones Importantes

### 1. Contenido es Rey
- No sacrificar calidad por cantidad
- Cada artículo debe aportar valor real
- Basarse en experiencia personal (E-E-A-T)

### 2. Equilibrio UX vs Monetización
- No saturar de anuncios
- Mantener experiencia de usuario positiva
- Anuncios deben ser relevantes

### 3. Transparencia
- Disclosure claro de afiliación
- Honestidad en recomendaciones
- Solo recomendar productos probados

### 4. Paciencia
- SEO toma 6-12 meses
- Resultados no son inmediatos
- Consistencia es clave

### 5. Mantener Negocio Local
- No abandonar servicios locales
- Usar autoridad digital para mejorar conversión local
- Sinergia entre ambos modelos

---

## 🎯 Acción Inmediata Recomendada

### Esta Semana:

1. **Revisar los 3 documentos creados** en detalle
2. **Decidir si proceder** con la transformación
3. **Priorizar**: ¿Empezar con contenido o con código?

### Recomendación:

**Opción A: Enfoque Contenido Primero** (Recomendado)
- Escribir 10-15 artículos de calidad
- Solicitar aprobación de AdSense
- Mientras tanto, implementar componentes técnicos
- Ventaja: Contenido listo cuando AdSense apruebe

**Opción B: Enfoque Técnico Primero**
- Implementar toda la infraestructura (componentes, rutas)
- Luego enfocarse en contenido
- Ventaja: Sistema listo para escalar rápido

**Mi recomendación: Opción A** - El contenido es el cuello de botella real. La implementación técnica puede hacerse en 2-3 semanas, pero crear 80 artículos de calidad toma meses.

---

## 📞 Siguiente Paso

¿Quieres que empiece a implementar alguna parte específica? Puedo:

1. **Crear los componentes de AdSense** (código completo listo para usar)
2. **Rediseñar la homepage** como portal de referencia
3. **Crear la página "Sobre Mí"** robusta para E-E-A-T
4. **Actualizar los schemas de Sanity** para comparativas y productos
5. **Escribir el primer artículo** como template

¿Por dónde quieres empezar?
