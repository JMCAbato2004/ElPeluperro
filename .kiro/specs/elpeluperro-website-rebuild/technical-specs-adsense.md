# Especificaciones Técnicas: Implementación de Google AdSense

## 1. Configuración Inicial de AdSense

### 1.1 Requisitos Previos para Aprobación

Google AdSense tiene requisitos estrictos para aprobar sitios web:

✅ **Requisitos Obligatorios:**
- Dominio propio (elpeluperro.com) ✓
- Contenido original y de calidad (mínimo 20-30 artículos)
- Páginas legales: Privacidad, Cookies, Términos
- Navegación clara y profesional
- Diseño responsive
- Tráfico mínimo (recomendado: 100+ visitas/día)
- Edad del dominio (preferible 6+ meses)
- Sin contenido prohibido

❌ **Contenido Prohibido:**
- Contenido para adultos
- Violencia explícita
- Drogas/alcohol
- Contenido copiado
- Clickbait engañoso

### 1.2 Proceso de Solicitud

1. **Crear cuenta en Google AdSense**
   - Ir a https://www.google.com/adsense
   - Usar cuenta de Google del negocio
   - Proporcionar URL del sitio
   - Información fiscal y de pago

2. **Añadir código de verificación**
   ```html
   <!-- Código de AdSense en <head> -->
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossorigin="anonymous"></script>
   ```

3. **Esperar revisión** (1-2 semanas típicamente)

4. **Activar anuncios** una vez aprobado

---

## 2. Implementación en Next.js 14

### 2.1 Estructura de Archivos

```
components/
├── ads/
│   ├── AdSenseUnit.tsx          # Componente base de anuncio
│   ├── AdSenseScript.tsx        # Script de inicialización
│   ├── InArticleAd.tsx          # Anuncio dentro de artículo
│   ├── InFeedAd.tsx             # Anuncio en feed de artículos
│   ├── DisplayAd.tsx            # Anuncio de display estándar
│   ├── StickyAd.tsx             # Anuncio sticky (móvil)
│   └── types.ts                 # TypeScript types
├── affiliate/
│   ├── AffiliateLink.tsx
│   ├── AffiliateDisclosure.tsx
│   └── types.ts
└── ...

lib/
├── ads/
│   ├── config.ts                # Configuración de slots
│   ├── utils.ts                 # Utilidades
│   └── constants.ts             # Constantes
└── ...

app/
├── layout.tsx                   # Script global de AdSense
├── blog/
│   └── [slug]/
│       └── page.tsx             # Artículos con anuncios
└── ...
```

### 2.2 Componente Base: AdSenseScript

```typescript
// components/ads/AdSenseScript.tsx
'use client';

import Script from 'next/script';

export function AdSenseScript() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (!adsenseId) {
    console.warn('AdSense Client ID not configured');
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
```

### 2.3 Componente: AdSenseUnit

```typescript
// components/ads/AdSenseUnit.tsx
'use client';

import { useEffect, useRef } from 'react';

export interface AdSenseUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  adLayout?: string;
  adLayoutKey?: string;
  style?: React.CSSProperties;
  className?: string;
  responsive?: boolean;
}

export function AdSenseUnit({
  adSlot,
  adFormat = 'auto',
  adLayout,
  adLayoutKey,
  style = { display: 'block' },
  className = '',
  responsive = true,
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!adsenseId) return;

    try {
      // @ts-ignore
      if (window.adsbygoogle && adRef.current) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [adsenseId]);

  if (!adsenseId) {
    return (
      <div className={`ad-placeholder ${className}`}>
        <p className="text-sm text-gray-400 text-center py-4">
          [Espacio publicitario]
        </p>
      </div>
    );
  }

  return (
    <div className={`adsense-wrapper ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client={adsenseId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-ad-layout-key={adLayoutKey}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
```

### 2.4 Componente: DisplayAd (Banner)

```typescript
// components/ads/DisplayAd.tsx
'use client';

import { AdSenseUnit } from './AdSenseUnit';

interface DisplayAdProps {
  slot: string;
  className?: string;
  format?: 'horizontal' | 'vertical' | 'rectangle';
}

export function DisplayAd({ slot, className = '', format = 'horizontal' }: DisplayAdProps) {
  const formatStyles: Record<string, React.CSSProperties> = {
    horizontal: { display: 'block', width: '100%', height: '90px' },
    vertical: { display: 'block', width: '160px', height: '600px' },
    rectangle: { display: 'block', width: '300px', height: '250px' },
  };

  return (
    <div className={`display-ad ${className}`}>
      <div className="text-xs text-gray-400 text-center mb-1">Publicidad</div>
      <AdSenseUnit
        adSlot={slot}
        adFormat="auto"
        style={formatStyles[format]}
        className="mx-auto"
      />
    </div>
  );
}
```

### 2.5 Componente: InArticleAd

```typescript
// components/ads/InArticleAd.tsx
'use client';

import { AdSenseUnit } from './AdSenseUnit';

interface InArticleAdProps {
  slot: string;
  className?: string;
}

export function InArticleAd({ slot, className = '' }: InArticleAdProps) {
  return (
    <div className={`in-article-ad my-8 ${className}`}>
      <div className="text-xs text-gray-400 text-center mb-2">Publicidad</div>
      <AdSenseUnit
        adSlot={slot}
        adFormat="fluid"
        adLayout="in-article"
        style={{ display: 'block', textAlign: 'center' }}
      />
    </div>
  );
}
```

### 2.6 Componente: InFeedAd

```typescript
// components/ads/InFeedAd.tsx
'use client';

import { AdSenseUnit } from './AdSenseUnit';

interface InFeedAdProps {
  slot: string;
  layoutKey: string;
  className?: string;
}

export function InFeedAd({ slot, layoutKey, className = '' }: InFeedAdProps) {
  return (
    <div className={`in-feed-ad ${className}`}>
      <AdSenseUnit
        adSlot={slot}
        adFormat="fluid"
        adLayout="in-feed"
        adLayoutKey={layoutKey}
        style={{ display: 'block' }}
      />
    </div>
  );
}
```

### 2.7 Componente: StickyAd (Móvil)

```typescript
// components/ads/StickyAd.tsx
'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { AdSenseUnit } from './AdSenseUnit';

interface StickyAdProps {
  slot: string;
}

export function StickyAd({ slot }: StickyAdProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isVisible || !isMobile) return null;

  return (
    <div className="sticky-ad fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 p-1 bg-gray-200 rounded-full hover:bg-gray-300"
        aria-label="Cerrar anuncio"
      >
        <X className="h-4 w-4" />
      </button>
      <AdSenseUnit
        adSlot={slot}
        adFormat="auto"
        style={{ display: 'block', minHeight: '50px' }}
      />
    </div>
  );
}
```

### 2.8 Configuración de Slots

```typescript
// lib/ads/config.ts

export const AD_SLOTS = {
  // Homepage
  homepage_top: '1234567890',
  homepage_feed: '1234567891',
  
  // Blog
  blog_top: '1234567892',
  blog_sidebar: '1234567893',
  blog_in_article_1: '1234567894',
  blog_in_article_2: '1234567895',
  blog_bottom: '1234567896',
  
  // Comparativas
  comparison_top: '1234567897',
  comparison_in_content: '1234567898',
  comparison_bottom: '1234567899',
  
  // Guías
  guide_top: '1234567900',
  guide_in_content: '1234567901',
  
  // Móvil
  mobile_sticky: '1234567902',
} as const;

export const AD_LAYOUT_KEYS = {
  in_feed_blog: '-fb+5w+4e-db+86',
  in_feed_comparison: '-fb+5w+4e-db+87',
} as const;
```

### 2.9 Integración en Layout Principal

```typescript
// app/layout.tsx
import { AdSenseScript } from '@/components/ads/AdSenseScript';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <AdSenseScript />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 2.10 Ejemplo: Artículo de Blog con Anuncios

```typescript
// app/blog/[slug]/page.tsx
import { DisplayAd } from '@/components/ads/DisplayAd';
import { InArticleAd } from '@/components/ads/InArticleAd';
import { StickyAd } from '@/components/ads/StickyAd';
import { AD_SLOTS } from '@/lib/ads/config';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header del artículo */}
      <header>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </header>

      {/* Anuncio superior */}
      <DisplayAd slot={AD_SLOTS.blog_top} format="horizontal" className="my-8" />

      {/* Imagen destacada */}
      {post.featuredImage && (
        <img src={post.featuredImage} alt={post.title} />
      )}

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        {/* Primeros párrafos */}
        <div dangerouslySetInnerHTML={{ __html: post.contentPart1 }} />

        {/* Anuncio in-article 1 */}
        <InArticleAd slot={AD_SLOTS.blog_in_article_1} />

        {/* Contenido medio */}
        <div dangerouslySetInnerHTML={{ __html: post.contentPart2 }} />

        {/* Anuncio in-article 2 */}
        <InArticleAd slot={AD_SLOTS.blog_in_article_2} />

        {/* Contenido final */}
        <div dangerouslySetInnerHTML={{ __html: post.contentPart3 }} />
      </div>

      {/* Anuncio inferior */}
      <DisplayAd slot={AD_SLOTS.blog_bottom} format="horizontal" className="my-8" />

      {/* Anuncio sticky móvil */}
      <StickyAd slot={AD_SLOTS.mobile_sticky} />
    </article>
  );
}
```

---

## 3. Mejores Prácticas de AdSense

### 3.1 Ubicación de Anuncios

**✅ Ubicaciones de Alto Rendimiento:**
1. **Above the fold** (primera pantalla) - 1 anuncio máximo
2. **Después del primer párrafo** - Alto engagement
3. **En medio del contenido** - Usuarios comprometidos
4. **Final del artículo** - Antes de artículos relacionados
5. **Sidebar** (solo desktop) - Visible durante scroll

**❌ Ubicaciones a Evitar:**
- Demasiados anuncios above the fold
- Anuncios que parecen contenido (engañosos)
- Anuncios que bloquean navegación
- Más de 3 anuncios de display por página

### 3.2 Reglas de Google AdSense

1. **Máximo 3 anuncios de display estándar** por página
2. **Anuncios nativos ilimitados** (in-feed, in-article)
3. **No hacer clic en tus propios anuncios**
4. **No pedir clics** ("Haz clic aquí", "Apoya el sitio")
5. **No colocar anuncios en páginas sin contenido**
6. **Etiqueta clara** "Publicidad" o "Anuncio"
7. **No modificar el código** de AdSense
8. **Contenido suficiente** en cada página

### 3.3 Optimización de Rendimiento

```typescript
// lib/ads/utils.ts

/**
 * Calcula la posición óptima para anuncios in-article
 * basado en la longitud del contenido
 */
export function calculateAdPositions(contentLength: number): number[] {
  const positions: number[] = [];
  
  // Primer anuncio después de ~300 palabras
  if (contentLength > 300) {
    positions.push(Math.floor(contentLength * 0.2));
  }
  
  // Segundo anuncio en el medio
  if (contentLength > 800) {
    positions.push(Math.floor(contentLength * 0.5));
  }
  
  // Tercer anuncio cerca del final
  if (contentLength > 1500) {
    positions.push(Math.floor(contentLength * 0.8));
  }
  
  return positions;
}

/**
 * Verifica si AdSense está bloqueado por AdBlocker
 */
export function isAdBlockEnabled(): Promise<boolean> {
  return new Promise((resolve) => {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    
    window.setTimeout(() => {
      const isBlocked = testAd.offsetHeight === 0;
      document.body.removeChild(testAd);
      resolve(isBlocked);
    }, 100);
  });
}
```

### 3.4 Responsive Ads

```css
/* styles/ads.css */

/* Anuncios responsive */
.adsense-wrapper {
  margin: 2rem auto;
  max-width: 100%;
  overflow: hidden;
}

/* Desktop */
@media (min-width: 1024px) {
  .display-ad.horizontal {
    max-width: 728px;
  }
  
  .display-ad.rectangle {
    max-width: 300px;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .display-ad.horizontal {
    max-width: 468px;
  }
}

/* Móvil */
@media (max-width: 767px) {
  .display-ad.horizontal {
    max-width: 320px;
  }
  
  .sticky-ad {
    padding: 0.5rem;
  }
}

/* Placeholder para desarrollo */
.ad-placeholder {
  background: #f3f4f6;
  border: 2px dashed #d1d5db;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
}
```

---

## 4. Testing y Debugging

### 4.1 Modo de Prueba

```typescript
// lib/ads/config.ts

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const ADSENSE_ENABLED = IS_PRODUCTION && !!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

// En desarrollo, mostrar placeholders
export function shouldShowAds(): boolean {
  return ADSENSE_ENABLED;
}
```

### 4.2 Componente de Debug

```typescript
// components/ads/AdDebugger.tsx
'use client';

import { useEffect, useState } from 'react';

export function AdDebugger() {
  const [adBlockEnabled, setAdBlockEnabled] = useState(false);
  const [adsenseLoaded, setAdsenseLoaded] = useState(false);

  useEffect(() => {
    // Verificar AdBlock
    const checkAdBlock = async () => {
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'adsbox';
      document.body.appendChild(testAd);
      
      setTimeout(() => {
        setAdBlockEnabled(testAd.offsetHeight === 0);
        document.body.removeChild(testAd);
      }, 100);
    };

    // Verificar si AdSense se cargó
    // @ts-ignore
    setAdsenseLoaded(!!window.adsbygoogle);

    checkAdBlock();
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-sm z-50">
      <h3 className="font-bold mb-2">AdSense Debug</h3>
      <ul className="space-y-1">
        <li>AdBlock: {adBlockEnabled ? '🔴 Activo' : '🟢 Inactivo'}</li>
        <li>AdSense: {adsenseLoaded ? '🟢 Cargado' : '🔴 No cargado'}</li>
        <li>Client ID: {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ? '🟢 Configurado' : '🔴 Falta'}</li>
      </ul>
    </div>
  );
}
```

### 4.3 Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Anuncios en blanco | AdBlock activo | Normal, no se puede evitar |
| "adsbygoogle.push() error" | Script no cargado | Verificar AdSenseScript en layout |
| Anuncios no aparecen | Cuenta no aprobada | Esperar aprobación de Google |
| "Invalid ad slot" | Slot ID incorrecto | Verificar ID en AdSense dashboard |
| Anuncios duplicados | push() llamado múltiples veces | Usar useEffect correctamente |

---

## 5. Políticas y Cumplimiento

### 5.1 Páginas Legales Requeridas

#### Política de Privacidad (Actualizar)

```markdown
## Publicidad

Este sitio web utiliza Google AdSense para mostrar anuncios. Google utiliza 
cookies para personalizar los anuncios según tu historial de navegación.

Puedes desactivar la personalización de anuncios visitando:
https://www.google.com/settings/ads

Para más información sobre cómo Google utiliza tus datos:
https://policies.google.com/technologies/partner-sites
```

#### Política de Cookies (Actualizar)

```markdown
## Cookies de Publicidad

Utilizamos Google AdSense que puede instalar las siguientes cookies:

- **Cookies de personalización**: Para mostrar anuncios relevantes
- **Cookies de medición**: Para analizar el rendimiento de anuncios
- **Cookies de terceros**: De anunciantes que muestran anuncios en nuestro sitio

Puedes gestionar tus preferencias de cookies en nuestro banner de consentimiento.
```

### 5.2 Banner de Consentimiento

```typescript
// components/ui/CookieBanner.tsx - Actualizar

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    advertising: false,
  });

  // ... código existente ...

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      advertising: true,
    });
    savePreferences({ ...preferences, advertising: true });
    setShowBanner(false);
  };

  return (
    <div className="cookie-banner">
      {/* ... UI existente ... */}
      
      <div className="cookie-options">
        <label>
          <input
            type="checkbox"
            checked={preferences.advertising}
            onChange={(e) => setPreferences({
              ...preferences,
              advertising: e.target.checked
            })}
          />
          Cookies de publicidad (AdSense)
        </label>
      </div>
      
      {/* ... botones ... */}
    </div>
  );
}
```

---

## 6. Monitoreo y Optimización

### 6.1 Métricas Clave

**En Google AdSense Dashboard:**
- **RPM** (Revenue Per Mille): Ingresos por 1000 impresiones
- **CTR** (Click-Through Rate): % de clics sobre impresiones
- **CPC** (Cost Per Click): Pago promedio por clic
- **Impresiones**: Número de veces que se muestra un anuncio
- **Cobertura**: % de solicitudes de anuncios que se rellenan

**Objetivos Típicos:**
- RPM: €2-10 (varía mucho por nicho)
- CTR: 1-3%
- Cobertura: >90%

### 6.2 A/B Testing

```typescript
// lib/ads/experiments.ts

export function getAdVariant(userId: string): 'control' | 'variant_a' | 'variant_b' {
  // Implementar A/B testing de posiciones de anuncios
  const hash = simpleHash(userId);
  const variant = hash % 3;
  
  switch (variant) {
    case 0: return 'control';
    case 1: return 'variant_a';
    case 2: return 'variant_b';
    default: return 'control';
  }
}

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}
```

### 6.3 Optimización Continua

**Mensual:**
- Revisar RPM por página
- Identificar páginas de bajo rendimiento
- Ajustar posiciones de anuncios
- Probar nuevos formatos

**Trimestral:**
- Analizar tendencias de ingresos
- Comparar con benchmarks del sector
- Optimizar contenido de alto valor
- Expandir categorías rentables

---

## 7. Estimaciones de Ingresos

### 7.1 Cálculos Conservadores

**Supuestos:**
- RPM promedio: €3 (conservador para nicho de mascotas en español)
- CTR: 1.5%
- Tráfico: Según plan de crecimiento

**Proyección:**

| Mes | Visitas | Páginas Vistas | Impresiones | Ingresos AdSense |
|-----|---------|----------------|-------------|------------------|
| 3   | 5,000   | 15,000         | 30,000      | €90              |
| 6   | 15,000  | 45,000         | 90,000      | €270             |
| 9   | 30,000  | 90,000         | 180,000     | €540             |
| 12  | 50,000  | 150,000        | 300,000     | €900             |

**Nota:** Estas son estimaciones conservadoras. Con optimización y contenido de calidad, el RPM puede ser €5-10.

### 7.2 Factores que Aumentan RPM

- ✅ Contenido de alta calidad y largo
- ✅ Tráfico de países de alto valor (España, USA)
- ✅ Nichos rentables (productos, comparativas)
- ✅ Usuarios comprometidos (tiempo en página alto)
- ✅ Tráfico desktop (mayor RPM que móvil)
- ✅ Temporada alta (Navidad, verano)

---

## 8. Checklist de Implementación

### Pre-lanzamiento
- [ ] Crear cuenta de Google AdSense
- [ ] Tener 20-30 artículos de calidad publicados
- [ ] Páginas legales actualizadas (Privacidad, Cookies)
- [ ] Banner de consentimiento de cookies funcionando
- [ ] Diseño profesional y responsive
- [ ] Navegación clara
- [ ] Contenido 100% original

### Solicitud
- [ ] Añadir código de verificación de AdSense
- [ ] Enviar solicitud
- [ ] Esperar aprobación (1-2 semanas)

### Post-aprobación
- [ ] Crear unidades de anuncios en AdSense dashboard
- [ ] Copiar IDs de slots
- [ ] Configurar AD_SLOTS en config.ts
- [ ] Implementar componentes de anuncios
- [ ] Añadir anuncios a páginas clave
- [ ] Probar en diferentes dispositivos
- [ ] Monitorear primeros días

### Optimización
- [ ] Revisar métricas semanalmente
- [ ] Ajustar posiciones según rendimiento
- [ ] A/B testing de ubicaciones
- [ ] Expandir a nuevas páginas
- [ ] Mantener equilibrio contenido/anuncios

---

## Conclusión

La implementación de Google AdSense requiere:

1. **Paciencia**: Aprobación toma tiempo
2. **Calidad**: Contenido original y valioso
3. **Cumplimiento**: Seguir políticas estrictamente
4. **Optimización**: Monitoreo y ajustes continuos
5. **Equilibrio**: No sacrificar UX por ingresos

Con la estrategia correcta, AdSense puede generar €500-2,000/mes adicionales una vez establecido el tráfico.
