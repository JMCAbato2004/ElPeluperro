# Componentes de Google AdSense

Sistema completo de componentes para integrar Google AdSense en El Peluperro.

## 📋 Tabla de Contenidos

- [Configuración Inicial](#configuración-inicial)
- [Componentes Disponibles](#componentes-disponibles)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Mejores Prácticas](#mejores-prácticas)
- [Troubleshooting](#troubleshooting)

## 🚀 Configuración Inicial

### 1. Solicitar Cuenta de AdSense

1. Ve a [Google AdSense](https://www.google.com/adsense)
2. Solicita una cuenta con tu dominio
3. Espera la aprobación (1-2 semanas)
4. Una vez aprobado, obtén tu Client ID (formato: `ca-pub-XXXXXXXXXXXXXXXX`)

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Google AdSense
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_TEST_MODE=false
```

### 3. Crear Unidades de Anuncios

1. En el dashboard de AdSense, ve a "Anuncios" → "Por unidad de anuncio"
2. Crea las siguientes unidades:
   - **Display Ads**: Para sidebars y headers
   - **In-Article Ads**: Para dentro de artículos
   - **In-Feed Ads**: Para listas de posts
   - **Anchor/Sticky Ads**: Para móvil

3. Copia los Slot IDs y actualiza `lib/ads/config.ts`:

```typescript
export const AD_SLOTS = {
  blog_top: 'TU_SLOT_ID_AQUI',
  blog_in_article_1: 'TU_SLOT_ID_AQUI',
  // ... etc
};
```

## 📦 Componentes Disponibles

### AdSenseScript

Script principal de AdSense. Ya está incluido en `app/layout.tsx`.

```tsx
import { AdSenseScript } from '@/components/ads/AdSenseScript';

// En el <head> del layout
<AdSenseScript />
```

### DisplayAd

Anuncio display estándar para sidebars, headers, footers.

```tsx
import { DisplayAd } from '@/components/ads/DisplayAd';

<DisplayAd 
  slot={AD_SLOTS.blog_sidebar} 
  format="rectangle" 
/>
```

**Props:**
- `slot` (string, required): ID del slot de AdSense
- `format` ('auto' | 'rectangle' | 'vertical' | 'horizontal'): Formato del anuncio
- `className` (string): Clases CSS adicionales
- `style` (CSSProperties): Estilos inline

### InArticleAd

Anuncio diseñado para insertarse dentro del contenido de artículos.

```tsx
import { InArticleAd } from '@/components/ads/InArticleAd';

<InArticleAd slot={AD_SLOTS.blog_in_article_1} />
```

**Props:**
- `slot` (string, required): ID del slot de AdSense
- `className` (string): Clases CSS adicionales

### InFeedAd

Anuncio para listas de contenido (blog posts, productos).

```tsx
import { InFeedAd } from '@/components/ads/InFeedAd';

<InFeedAd 
  slot={AD_SLOTS.blog_feed} 
  layoutKey="-fb+5w+4e-db+86" 
/>
```

**Props:**
- `slot` (string, required): ID del slot de AdSense
- `layoutKey` (string, optional): Layout key de AdSense
- `className` (string): Clases CSS adicionales

### StickyAd

Anuncio fijo en pantalla (solo móvil).

```tsx
import { StickyAd } from '@/components/ads/StickyAd';

<StickyAd 
  slot={AD_SLOTS.mobile_sticky} 
  position="bottom" 
/>
```

**Props:**
- `slot` (string, required): ID del slot de AdSense
- `position` ('top' | 'bottom'): Posición del anuncio
- `className` (string): Clases CSS adicionales

## 💡 Ejemplos de Uso

### Artículo de Blog con Anuncios

```tsx
// app/blog/[slug]/page.tsx
import { DisplayAd, InArticleAd, StickyAd } from '@/components/ads';
import { AD_SLOTS } from '@/lib/ads/config';

export default function BlogPost({ post }) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Anuncio superior */}
      <DisplayAd 
        slot={AD_SLOTS.blog_top} 
        format="horizontal" 
        className="mb-8" 
      />

      {/* Contenido del post */}
      <h1>{post.title}</h1>
      <div className="prose">
        {/* Primeros párrafos */}
        <p>{post.content.paragraph1}</p>
        <p>{post.content.paragraph2}</p>
        
        {/* Anuncio in-article después de 2-3 párrafos */}
        <InArticleAd slot={AD_SLOTS.blog_in_article_1} />
        
        {/* Más contenido */}
        <p>{post.content.paragraph3}</p>
        <p>{post.content.paragraph4}</p>
        
        {/* Segundo anuncio in-article */}
        <InArticleAd slot={AD_SLOTS.blog_in_article_2} />
        
        {/* Resto del contenido */}
        <p>{post.content.paragraph5}</p>
      </div>

      {/* Anuncio inferior */}
      <DisplayAd 
        slot={AD_SLOTS.blog_bottom} 
        format="horizontal" 
        className="mt-8" 
      />

      {/* Anuncio sticky móvil */}
      <StickyAd slot={AD_SLOTS.mobile_sticky} />
    </article>
  );
}
```

### Lista de Posts con In-Feed Ads

```tsx
// app/blog/page.tsx
import { InFeedAd } from '@/components/ads';
import { AD_SLOTS } from '@/lib/ads/config';

export default function BlogList({ posts }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <>
          <BlogPostCard key={post.id} post={post} />
          
          {/* Insertar anuncio cada 6 posts */}
          {(index + 1) % 6 === 0 && (
            <InFeedAd 
              slot={AD_SLOTS.blog_feed} 
              className="md:col-span-2 lg:col-span-3" 
            />
          )}
        </>
      ))}
    </div>
  );
}
```

### Sidebar con Anuncio

```tsx
// components/layout/Sidebar.tsx
import { DisplayAd } from '@/components/ads';
import { AD_SLOTS } from '@/lib/ads/config';

export function Sidebar() {
  return (
    <aside className="w-full lg:w-80">
      {/* Contenido del sidebar */}
      <div className="mb-8">
        <h3>Artículos Populares</h3>
        {/* ... */}
      </div>

      {/* Anuncio en sidebar */}
      <DisplayAd 
        slot={AD_SLOTS.blog_sidebar} 
        format="rectangle" 
        className="sticky top-4" 
      />
    </aside>
  );
}
```

## ✅ Mejores Prácticas

### 1. Número de Anuncios

- **Máximo 3-5 anuncios por página** para no saturar
- **1 anuncio cada 500-700 palabras** en artículos largos
- **No más de 1 sticky ad** por página

### 2. Posicionamiento

- **Above the fold**: 1 anuncio máximo
- **In-article**: Después de 2-3 párrafos, no al inicio
- **Sidebar**: Sticky para que permanezca visible
- **Bottom**: Después del contenido principal

### 3. Experiencia de Usuario

- Los anuncios NO deben interferir con la lectura
- Mantener espacio suficiente entre anuncios y contenido
- Permitir cerrar anuncios sticky
- Respetar el consentimiento de cookies

### 4. SEO

- Los anuncios NO afectan negativamente al SEO si se usan correctamente
- Google penaliza sitios con demasiados anuncios above the fold
- Mantener un balance entre contenido y publicidad

### 5. Rendimiento

- Los anuncios se cargan de forma asíncrona
- No bloquean el renderizado de la página
- Se respeta el consentimiento de cookies antes de cargar

## 🔧 Troubleshooting

### Los anuncios no se muestran

1. **Verifica la configuración**:
   ```bash
   # Asegúrate de que estas variables estén configuradas
   echo $NEXT_PUBLIC_ADSENSE_CLIENT_ID
   ```

2. **Verifica el consentimiento de cookies**:
   - Los anuncios solo se cargan si el usuario ha aceptado cookies de publicidad
   - En desarrollo, puedes activar `NEXT_PUBLIC_ADSENSE_TEST_MODE=true`

3. **Verifica los Slot IDs**:
   - Asegúrate de que los Slot IDs en `lib/ads/config.ts` coincidan con los de AdSense

4. **Revisa la consola del navegador**:
   - Busca errores relacionados con AdSense
   - Verifica que el script de AdSense se haya cargado

### Anuncios en blanco

- **Causa común**: AdSense aún está aprendiendo sobre tu sitio
- **Solución**: Espera 24-48 horas después de crear las unidades
- **Alternativa**: Activa el modo de prueba para ver anuncios de ejemplo

### AdBlocker detectado

- Los AdBlockers bloquean los anuncios de AdSense
- No hay solución técnica (es decisión del usuario)
- Puedes mostrar un mensaje pidiendo desactivar el AdBlocker

## 📊 Monitoreo

### Métricas Importantes

1. **RPM (Revenue Per Mille)**: Ingresos por cada 1000 impresiones
2. **CTR (Click-Through Rate)**: Porcentaje de clics sobre impresiones
3. **Viewability**: Porcentaje de anuncios visibles
4. **Coverage**: Porcentaje de solicitudes con anuncios

### Optimización

- Prueba diferentes posiciones de anuncios
- Analiza qué formatos funcionan mejor
- Ajusta el número de anuncios según el rendimiento
- Revisa las métricas semanalmente en el dashboard de AdSense

## 🔒 Privacidad y Cumplimiento

- ✅ Los anuncios respetan el consentimiento de cookies (RGPD)
- ✅ Se integran con el CookieBanner existente
- ✅ No se cargan si el usuario rechaza cookies de publicidad
- ✅ Incluyen atributos `rel="nofollow sponsored"` cuando aplica

## 📚 Recursos

- [Documentación oficial de AdSense](https://support.google.com/adsense)
- [Políticas de AdSense](https://support.google.com/adsense/answer/48182)
- [Mejores prácticas de AdSense](https://support.google.com/adsense/answer/17957)
- [Centro de ayuda de AdSense](https://support.google.com/adsense)

---

**Nota**: Este sistema está listo para usar en producción una vez que tengas tu cuenta de AdSense aprobada y hayas configurado las variables de entorno.
