# Componentes de Afiliación

Sistema completo de componentes para gestionar enlaces de afiliación de Amazon Associates y Tiendanimal.

## 📋 Tabla de Contenidos

- [Configuración Inicial](#configuración-inicial)
- [Componentes Disponibles](#componentes-disponibles)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Mejores Prácticas](#mejores-prácticas)
- [Políticas y Cumplimiento](#políticas-y-cumplimiento)

## 🚀 Configuración Inicial

### 1. Registrarse en Programas de Afiliación

#### Amazon Associates
1. Ve a [Amazon Associates](https://afiliados.amazon.es)
2. Crea una cuenta con tu sitio web
3. Espera la aprobación (puede ser inmediata o tomar unos días)
4. Obtén tu Affiliate Tag (formato: `tunombre-21`)

#### Tiendanimal Afiliados
1. Contacta con Tiendanimal en: afiliados@tiendanimal.com
2. Solicita unirte al programa de afiliados
3. Proporciona información sobre tu sitio
4. Obtén tu Partner ID una vez aprobado

### 2. Configurar Variables de Entorno

Añade a tu archivo `.env.local`:

```bash
# Amazon Associates
NEXT_PUBLIC_AMAZON_AFFILIATE_TAG=tunombre-21

# Tiendanimal
NEXT_PUBLIC_TIENDANIMAL_PARTNER_ID=tu-partner-id
```

### 3. Añadir Disclosure de Afiliación

**IMPORTANTE**: Es obligatorio informar a los usuarios sobre los enlaces de afiliación.

Ya tienes una página de política de afiliación en `/afiliacion`. Asegúrate de:
- Enlazarla desde el footer
- Incluir el componente `AffiliateDisclosure` en artículos con enlaces de afiliación

## 📦 Componentes Disponibles

### AffiliateLink

Componente para crear enlaces de afiliación con tracking automático.

```tsx
import { AffiliateLink } from '@/components/affiliate';

<AffiliateLink 
  href="https://amazon.es/dp/B08XYZ123"
  platform="amazon"
  productId="B08XYZ123"
  productName="Champú para perros"
  variant="button"
>
  Ver en Amazon
</AffiliateLink>
```

**Props:**
- `href` (string, required): URL del producto
- `platform` ('amazon' | 'tiendanimal' | 'other'): Plataforma de afiliación
- `productId` (string): ID del producto para tracking
- `productName` (string): Nombre del producto para analytics
- `variant` ('default' | 'button' | 'text'): Estilo del enlace
- `showIcon` (boolean): Mostrar icono de enlace externo
- `className` (string): Clases CSS adicionales

### AffiliateDisclosure

Componente de aviso de afiliación (obligatorio).

```tsx
import { AffiliateDisclosure } from '@/components/affiliate';

// Versión completa (recomendada para inicio de artículo)
<AffiliateDisclosure variant="full" />

// Versión compacta
<AffiliateDisclosure variant="compact" />

// Versión inline
<AffiliateDisclosure variant="inline" />
```

**Props:**
- `variant` ('full' | 'compact' | 'inline'): Estilo del disclosure
- `className` (string): Clases CSS adicionales

### ProductCard

Tarjeta de producto con enlaces de afiliación.

```tsx
import { ProductCard } from '@/components/affiliate';

const product = {
  id: 'prod-001',
  name: 'Champú Natural para Perros',
  description: 'Champú hipoalergénico con ingredientes naturales',
  image: '/images/products/champu.jpg',
  category: 'grooming',
  rating: 4.5,
  price: {
    amount: 15.99,
    currency: '€',
    originalAmount: 19.99,
  },
  pros: ['Ingredientes naturales', 'Hipoalergénico', 'Buen olor'],
  cons: ['Precio algo elevado'],
  affiliateLinks: {
    amazon: 'https://amazon.es/dp/B08XYZ123?tag=tunombre-21',
    tiendanimal: 'https://tiendanimal.es/producto?partner=tu-id',
  },
};

<ProductCard 
  product={product}
  showProsCons={true}
  featured={true}
/>
```

**Props:**
- `product` (Product, required): Objeto con datos del producto
- `showProsCons` (boolean): Mostrar pros y contras
- `featured` (boolean): Marcar como destacado
- `className` (string): Clases CSS adicionales

### ComparisonTable

Tabla de comparación de productos.

```tsx
import { ComparisonTable } from '@/components/affiliate';

const products = [
  {
    id: 'prod-001',
    name: 'Champú A',
    rank: 1,
    bestFor: 'Mejor calidad-precio',
    // ... resto de datos
  },
  // ... más productos
];

<ComparisonTable 
  products={products}
  features={['Calidad', 'Precio', 'Durabilidad', 'Olor']}
/>
```

**Props:**
- `products` (ComparisonProduct[], required): Array de productos
- `features` (string[], required): Características a comparar
- `className` (string): Clases CSS adicionales

## 💡 Ejemplos de Uso

### Artículo de Comparativa

```tsx
// app/blog/[slug]/page.tsx
import { 
  AffiliateDisclosure, 
  ProductCard, 
  ComparisonTable 
} from '@/components/affiliate';

export default function ComparisonPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1>Los 5 Mejores Champús para Perros 2026</h1>
      
      {/* Disclosure obligatorio al inicio */}
      <AffiliateDisclosure variant="full" className="my-8" />
      
      {/* Introducción */}
      <p>
        Después de probar más de 20 champús diferentes en mi peluquería...
      </p>

      {/* Tabla de comparación */}
      <h2>Comparativa Rápida</h2>
      <ComparisonTable 
        products={products}
        features={['Calidad', 'Precio', 'Olor', 'Durabilidad']}
      />

      {/* Reviews detalladas */}
      <h2>Análisis Detallado</h2>
      {products.map((product) => (
        <div key={product.id} className="my-12">
          <h3>#{product.rank} - {product.name}</h3>
          <ProductCard 
            product={product}
            showProsCons={true}
            featured={product.rank === 1}
          />
          <p className="mt-4">
            {product.verdict}
          </p>
        </div>
      ))}
    </article>
  );
}
```

### Enlace Simple en Texto

```tsx
<p>
  Para este tipo de pelaje, recomiendo usar{' '}
  <AffiliateLink 
    href="https://amazon.es/dp/B08XYZ123?tag=tunombre-21"
    platform="amazon"
    productName="Cepillo FURminator"
    variant="text"
  >
    el cepillo FURminator
  </AffiliateLink>
  {' '}que uso en mi peluquería.
</p>
```

### Grid de Productos Recomendados

```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {recommendedProducts.map((product) => (
    <ProductCard 
      key={product.id}
      product={product}
      showProsCons={false}
    />
  ))}
</div>
```

## ✅ Mejores Prácticas

### 1. Transparencia

- **SIEMPRE** incluye `AffiliateDisclosure` en artículos con enlaces de afiliación
- Sé honesto sobre tu experiencia con los productos
- No recomiendes productos que no has probado o no conoces bien

### 2. Experiencia de Usuario

- No satures el contenido con enlaces de afiliación
- Los enlaces deben ser relevantes y útiles
- Proporciona valor real, no solo enlaces

### 3. SEO

- Los enlaces de afiliación incluyen automáticamente `rel="nofollow sponsored"`
- Esto cumple con las directrices de Google
- No afecta negativamente al SEO si se usa correctamente

### 4. Tracking

- Usa siempre `productId` y `productName` para tracking
- Esto te permite analizar qué productos generan más clics
- Los datos se envían a Google Analytics automáticamente

### 5. Actualización

- Revisa regularmente los precios y disponibilidad
- Actualiza los enlaces si los productos ya no están disponibles
- Mantén las comparativas actualizadas

## 🔒 Políticas y Cumplimiento

### Amazon Associates

**Requisitos obligatorios:**

1. **Disclosure**: Debes informar claramente que usas enlaces de afiliación
2. **Precios**: No puedes cachear precios de Amazon por más de 24 horas
3. **Imágenes**: Solo puedes usar imágenes de Amazon con el Product Advertising API
4. **Términos**: Lee y cumple los [Términos de Amazon Associates](https://afiliados.amazon.es/help/operating/agreement)

**Frases de disclosure aceptables:**
- "Como Asociado de Amazon, gano por compras cualificadas"
- "Este enlace es un enlace de afiliación de Amazon"

### Tiendanimal

**Requisitos:**
- Informar sobre la relación de afiliación
- No hacer afirmaciones falsas sobre productos
- Cumplir con las políticas del programa

### RGPD y Privacidad

- ✅ El tracking de clics respeta el consentimiento de cookies
- ✅ No se recopilan datos personales sin consentimiento
- ✅ La política de afiliación está enlazada y accesible

## 📊 Analytics y Tracking

### Eventos Trackeados

Automáticamente se envían estos eventos a Google Analytics:

```javascript
{
  event: 'affiliate_click',
  platform: 'amazon' | 'tiendanimal',
  product_id: 'B08XYZ123',
  product_name: 'Champú para perros'
}
```

### Métricas Importantes

1. **CTR (Click-Through Rate)**: Porcentaje de usuarios que hacen clic
2. **Conversión**: Porcentaje de clics que resultan en compra
3. **EPC (Earnings Per Click)**: Ingresos promedio por clic
4. **Productos más populares**: Qué productos generan más clics

## 🛠️ Utilidades Disponibles

### Construcción de Enlaces

```typescript
import { 
  buildAmazonLink, 
  buildAmazonSearchLink,
  buildTiendanimalLink 
} from '@/lib/affiliate/utils';

// Enlace directo a producto de Amazon
const link = buildAmazonLink('B08XYZ123', 'es');
// https://amazon.es/dp/B08XYZ123?tag=tunombre-21

// Búsqueda en Amazon
const searchLink = buildAmazonSearchLink('champú perros');
// https://amazon.es/s?k=champú+perros&tag=tunombre-21

// Enlace de Tiendanimal
const tnLink = buildTiendanimalLink('https://tiendanimal.es/producto');
// https://tiendanimal.es/producto?partner=tu-id
```

### Detección de Plataforma

```typescript
import { isAmazonUrl, isTiendanimalUrl } from '@/lib/affiliate/utils';

isAmazonUrl('https://amazon.es/dp/B08XYZ123'); // true
isTiendanimalUrl('https://tiendanimal.es/producto'); // true
```

### Formateo de Precios

```typescript
import { formatPrice, calculateSavingsPercentage } from '@/lib/affiliate/utils';

formatPrice(15.99, '€'); // "15.99€"
calculateSavingsPercentage(19.99, 15.99); // 20
```

## 🚨 Troubleshooting

### Los enlaces no tienen el tag de afiliado

1. Verifica que `NEXT_PUBLIC_AMAZON_AFFILIATE_TAG` esté configurado
2. Asegúrate de usar `buildAmazonLink()` o `AffiliateLink` component
3. Revisa la consola del navegador para warnings

### El tracking no funciona

1. Verifica que Google Analytics esté configurado
2. Comprueba que el consentimiento de cookies esté activo
3. Revisa la consola para eventos de tracking

### Los productos no se muestran correctamente

1. Verifica la estructura del objeto `Product`
2. Asegúrate de que las imágenes estén accesibles
3. Revisa que los enlaces de afiliación sean válidos

## 📚 Recursos

- [Amazon Associates](https://afiliados.amazon.es)
- [Políticas de Amazon Associates](https://afiliados.amazon.es/help/operating/agreement)
- [Tiendanimal Afiliados](mailto:afiliados@tiendanimal.com)
- [Directrices de Google sobre enlaces de afiliación](https://developers.google.com/search/docs/advanced/guidelines/link-schemes)

---

**Nota**: Este sistema está listo para usar en producción una vez que tengas tus cuentas de afiliación aprobadas y hayas configurado las variables de entorno.
