# Guía de Configuración de Monetización

Esta guía te ayudará a configurar Google AdSense y los programas de afiliación para monetizar el portal.

## 📋 Resumen de Cambios Implementados

### ✅ Componentes Creados

**Sistema de AdSense:**
- `components/ads/AdSenseScript.tsx` - Script principal de AdSense
- `components/ads/AdSenseUnit.tsx` - Componente base reutilizable
- `components/ads/DisplayAd.tsx` - Anuncios display (sidebars, headers)
- `components/ads/InArticleAd.tsx` - Anuncios dentro de artículos
- `components/ads/InFeedAd.tsx` - Anuncios en listados de posts
- `components/ads/StickyAd.tsx` - Anuncio fijo móvil con botón cerrar
- `lib/ads/config.ts` - Configuración centralizada
- `lib/ads/utils.ts` - Utilidades para ads
- `lib/ads/constants.ts` - Constantes

**Sistema de Afiliación:**
- `components/affiliate/AffiliateLink.tsx` - Enlaces con tracking
- `components/affiliate/AffiliateDisclosure.tsx` - Divulgación obligatoria
- `components/affiliate/ProductCard.tsx` - Tarjetas de productos
- `components/affiliate/ComparisonTable.tsx` - Tablas comparativas
- `lib/affiliate/config.ts` - Configuración de afiliados
- `lib/affiliate/utils.ts` - Utilidades para enlaces

### ✅ Páginas Actualizadas

**Blog Individual (`app/blog/[slug]/page.tsx`):**
- ✅ Anuncio display superior
- ✅ Anuncios in-article cada 8 párrafos
- ✅ Anuncio display inferior
- ✅ Anuncio sticky móvil
- ✅ Detección automática de contenido de afiliación
- ✅ Divulgación de afiliados cuando aplica

**Listado de Blog (`app/blog/page.tsx`):**
- ✅ Anuncio display superior
- ✅ Anuncios in-feed cada 4 posts
- ✅ Integración con sistema de filtros existente

**Layout Principal (`app/layout.tsx`):**
- ✅ Script de AdSense integrado
- ✅ Metadata actualizada para portal de referencia

---

## 🚀 Pasos para Activar la Monetización

### 1. Google AdSense

#### Paso 1.1: Solicitar Cuenta de AdSense

1. Ve a [Google AdSense](https://www.google.com/adsense)
2. Haz clic en "Comenzar"
3. Completa el formulario con:
   - URL del sitio: `https://elpeluperro.com`
   - Correo electrónico
   - País: España

#### Paso 1.2: Requisitos Previos

Antes de solicitar, asegúrate de tener:
- ✅ Al menos 20-30 artículos de calidad publicados
- ✅ Tráfico orgánico (mínimo 100-500 visitas/día)
- ✅ Contenido original y valioso
- ✅ Política de privacidad
- ✅ Página "Sobre Mí" completa
- ✅ Diseño profesional y navegación clara

#### Paso 1.3: Verificar el Sitio

Google te dará un código de verificación. Ya está integrado en el layout:

```typescript
// app/layout.tsx - YA IMPLEMENTADO
<AdSenseScript />
```

#### Paso 1.4: Esperar Aprobación

- Tiempo estimado: 1-2 semanas
- Google revisará tu contenido y tráfico
- Recibirás un email con la decisión

#### Paso 1.5: Configurar Variables de Entorno

Una vez aprobado, copia tu Client ID:

```bash
# .env.local
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_TEST_MODE=false
```

#### Paso 1.6: Crear Unidades de Anuncios

En el panel de AdSense, crea estas unidades:

1. **Blog Top** (Display horizontal)
   - Tamaño: Responsive
   - Tipo: Display
   - Nombre: "Blog Top"

2. **Blog In-Article** (In-article)
   - Tamaño: Responsive
   - Tipo: In-article
   - Nombre: "Blog In-Article"

3. **Blog Bottom** (Display horizontal)
   - Tamaño: Responsive
   - Tipo: Display
   - Nombre: "Blog Bottom"

4. **Blog In-Feed** (In-feed)
   - Tamaño: Responsive
   - Tipo: In-feed
   - Nombre: "Blog In-Feed"

5. **Mobile Sticky** (Anchor/Sticky)
   - Tamaño: 320x50 o 320x100
   - Tipo: Display
   - Nombre: "Mobile Sticky"

#### Paso 1.7: Actualizar Slots en Configuración

Copia los IDs de las unidades y actualiza:

```typescript
// lib/ads/config.ts
export const AD_SLOTS = {
  blog_top: 'XXXXXXXXXX',        // ID de "Blog Top"
  blog_in_article_1: 'XXXXXXXXXX', // ID de "Blog In-Article"
  blog_bottom: 'XXXXXXXXXX',      // ID de "Blog Bottom"
  blog_in_feed: 'XXXXXXXXXX',     // ID de "Blog In-Feed"
  mobile_sticky: 'XXXXXXXXXX',    // ID de "Mobile Sticky"
};
```

---

### 2. Amazon Associates (Afiliación)

#### Paso 2.1: Registrarse en Amazon Associates

1. Ve a [Amazon Associates España](https://afiliados.amazon.es)
2. Haz clic en "Únete ahora gratis"
3. Completa el registro con:
   - Datos personales
   - Información fiscal (NIF/NIE)
   - Método de pago (transferencia bancaria)

#### Paso 2.2: Añadir tu Sitio Web

1. En "Gestión de cuenta" → "Sitios web"
2. Añade: `elpeluperro.com`
3. Describe tu sitio: "Portal de referencia sobre cuidado canino"

#### Paso 2.3: Obtener tu Affiliate Tag

Tu tag tendrá el formato: `tunombre-21`

Ejemplo: `elpeluperro-21`

#### Paso 2.4: Configurar Variables de Entorno

```bash
# .env.local
NEXT_PUBLIC_AMAZON_AFFILIATE_TAG=elpeluperro-21
```

#### Paso 2.5: Generar Enlaces de Afiliación

**Opción A: Usar el SiteStripe**
- Navega por Amazon.es
- Verás una barra superior con "Obtener enlace"
- Copia el enlace corto

**Opción B: Usar la herramienta de construcción de enlaces**
- En el panel de Associates
- "Herramientas de productos" → "Generador de enlaces"
- Busca el producto y genera el enlace

**Opción C: Usar nuestros componentes (RECOMENDADO)**

```tsx
import { AffiliateLink } from '@/components/affiliate/AffiliateLink';

// Enlace directo a producto
<AffiliateLink
  href="https://www.amazon.es/dp/B08XYZ123"
  platform="amazon"
>
  Ver en Amazon
</AffiliateLink>

// O construir automáticamente desde ASIN
<AffiliateLink
  href="B08XYZ123"  // Solo el ASIN
  platform="amazon"
>
  Comprar en Amazon
</AffiliateLink>
```

---

### 3. Tiendanimal Afiliados

#### Paso 3.1: Contactar con Tiendanimal

1. Email: `afiliados@tiendanimal.com`
2. Asunto: "Solicitud programa de afiliados - El Peluperro"
3. Incluye:
   - URL del sitio
   - Descripción del contenido
   - Tráfico mensual estimado
   - Redes sociales

#### Paso 3.2: Esperar Aprobación

- Tiempo estimado: 1-2 semanas
- Te enviarán tu Partner ID y condiciones

#### Paso 3.3: Configurar Variables de Entorno

```bash
# .env.local
NEXT_PUBLIC_TIENDANIMAL_PARTNER_ID=XXXXX
```

#### Paso 3.4: Usar Enlaces de Tiendanimal

```tsx
import { AffiliateLink } from '@/components/affiliate/AffiliateLink';

<AffiliateLink
  href="https://www.tiendanimal.es/producto-ejemplo"
  platform="tiendanimal"
>
  Ver en Tiendanimal
</AffiliateLink>
```

---

## 📝 Cómo Usar los Componentes en Artículos

### Divulgación de Afiliados

**Automática en artículos de productos:**
El sistema detecta automáticamente si un artículo tiene contenido de afiliación basándose en:
- Tags: "productos", "comparativa", "recomendaciones", "champú", "pienso", "cepillo"
- Categoría: "Productos"
- Título: contiene "mejores", "comparativa"

**Manual en contenido personalizado:**

```tsx
import { AffiliateDisclosure } from '@/components/affiliate/AffiliateDisclosure';

// Versión completa (recomendada para inicio de artículo)
<AffiliateDisclosure variant="full" />

// Versión compacta (para sidebars)
<AffiliateDisclosure variant="compact" />

// Versión inline (para dentro del texto)
<AffiliateDisclosure variant="inline" />
```

### Tarjetas de Productos

```tsx
import { ProductCard } from '@/components/affiliate/ProductCard';

<ProductCard
  name="Champú Natural con Avena - Menforsan"
  image="/images/products/champu-menforsan.jpg"
  rating={4.5}
  price="12.99€"
  description="Champú hipoalergénico con avena coloidal, ideal para piel sensible."
  pros={[
    'Fórmula 100% natural',
    'pH neutro para perros',
    'Sin parabenos ni sulfatos',
    'Rinde 15-20 baños'
  ]}
  cons={[
    'No es específico para problemas dermatológicos',
    'Puede necesitar acondicionador en pelo muy largo'
  ]}
  affiliateLinks={{
    amazon: 'https://www.amazon.es/dp/B08XYZ123',
    tiendanimal: 'https://www.tiendanimal.es/producto-ejemplo'
  }}
  showProsCons={true}
/>
```

### Tablas Comparativas

```tsx
import { ComparisonTable } from '@/components/affiliate/ComparisonTable';

<ComparisonTable
  products={[
    {
      name: 'Menforsan Natural Avena',
      image: '/images/products/menforsan.jpg',
      rating: 5,
      price: '12-15€',
      features: {
        'Tipo': 'Uso general',
        'Contenido': '1L',
        'pH': '7.0',
        'Hipoalergénico': 'Sí'
      },
      affiliateLinks: {
        amazon: 'https://amazon.es/...',
        tiendanimal: 'https://tiendanimal.es/...'
      }
    },
    // ... más productos
  ]}
  highlightBest={0}  // Índice del producto destacado
/>
```

---

## 📊 Monitoreo y Optimización

### Métricas de AdSense

Monitorea en el panel de AdSense:
- **RPM** (Revenue Per Mille): Ingresos por 1,000 impresiones
- **CTR** (Click-Through Rate): % de clics sobre impresiones
- **CPC** (Cost Per Click): Pago promedio por clic

**Objetivos iniciales:**
- RPM: €2-5
- CTR: 1-3%
- CPC: €0.10-0.50

### Métricas de Afiliación

Monitorea en los paneles de afiliados:
- **Clics**: Número de clics en enlaces
- **Conversiones**: Compras realizadas
- **Tasa de conversión**: % de clics que compran
- **Comisiones**: Ingresos generados

**Objetivos iniciales:**
- Tasa de conversión: 2-5%
- Comisión promedio: €1-3 por venta

### Optimización de Posiciones de Anuncios

**Si RPM es bajo:**
- Prueba mover anuncios más arriba
- Aumenta el número de anuncios in-article
- Prueba formatos diferentes

**Si CTR es bajo:**
- Los anuncios pueden estar en posiciones poco visibles
- Prueba colores que contrasten más
- Asegúrate de que sean responsive

**Si CPC es bajo:**
- Puede ser por el nicho (mascotas suele ser medio-bajo)
- Crea contenido sobre productos más caros
- Enfócate en keywords comerciales

---

## ⚠️ Consideraciones Legales

### Política de Privacidad

Debes actualizar tu política de privacidad para incluir:

1. **Uso de cookies de AdSense**
2. **Uso de cookies de afiliación**
3. **Recopilación de datos de navegación**
4. **Derechos del usuario (GDPR)**

### Divulgación de Afiliación

Es OBLIGATORIO por ley informar a los usuarios que:
- Usas enlaces de afiliación
- Recibes comisiones por compras
- Esto no afecta el precio para el usuario

Ya implementado en `AffiliateDisclosure` component.

### Términos de Servicio de AdSense

Debes cumplir con:
- No hacer clic en tus propios anuncios
- No pedir a otros que hagan clic
- No colocar anuncios en contenido prohibido
- No modificar el código de los anuncios

---

## 🎯 Próximos Pasos Recomendados

1. **Crear más contenido** (objetivo: 30+ artículos antes de solicitar AdSense)
2. **Solicitar cuenta de AdSense**
3. **Mientras esperas aprobación:**
   - Registrarte en Amazon Associates
   - Contactar con Tiendanimal
   - Añadir enlaces de afiliación a artículos existentes
4. **Una vez aprobado AdSense:**
   - Configurar variables de entorno
   - Crear unidades de anuncios
   - Monitorear métricas semanalmente
5. **Optimizar basándose en datos**

---

## 📞 Soporte

Si tienes dudas sobre la implementación técnica, revisa:
- `components/ads/README.md` - Documentación de AdSense
- `components/affiliate/README.md` - Documentación de afiliación
- `lib/ads/config.ts` - Configuración de anuncios
- `lib/affiliate/config.ts` - Configuración de afiliados

---

**Última actualización:** 04/03/2026
