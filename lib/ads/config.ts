/**
 * Google AdSense Configuration
 * 
 * IMPORTANTE: Antes de usar en producción:
 * 1. Solicitar cuenta de Google AdSense en https://www.google.com/adsense
 * 2. Añadir el dominio a AdSense
 * 3. Crear unidades de anuncios en el dashboard de AdSense
 * 4. Reemplazar NEXT_PUBLIC_ADSENSE_CLIENT_ID con tu ID real
 * 5. Reemplazar los slots con los IDs de tus unidades de anuncios
 */

export const ADSENSE_CONFIG = {
  // Client ID de AdSense (formato: ca-pub-XXXXXXXXXXXXXXXX)
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '',
  
  // Habilitar/deshabilitar anuncios globalmente
  enabled: process.env.NODE_ENV === 'production' && !!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  
  // Modo de prueba (muestra anuncios de prueba)
  testMode: process.env.NEXT_PUBLIC_ADSENSE_TEST_MODE === 'true',
};

/**
 * Slots de anuncios por ubicación
 * Cada slot debe ser creado en el dashboard de AdSense
 */
export const AD_SLOTS = {
  // Homepage
  home_top: '1234567890', // Banner superior homepage
  home_sidebar: '1234567891', // Sidebar homepage
  
  // Blog
  blog_top: '1234567892', // Banner superior lista de posts
  blog_sidebar: '1234567893', // Sidebar lista de posts
  blog_in_feed: '1234567894', // Anuncio in-feed en lista de posts
  blog_in_article_1: '1234567895', // Primer anuncio in-article
  blog_in_article_2: '1234567896', // Segundo anuncio in-article
  blog_bottom: '1234567897', // Banner inferior post
  
  // Servicios
  services_top: '1234567898', // Banner superior servicios
  services_sidebar: '1234567899', // Sidebar servicios
  
  // Comparativas
  comparison_top: '1234567900', // Banner superior comparativa
  comparison_in_content: '1234567901', // Anuncio en medio de comparativa
  comparison_bottom: '1234567902', // Banner inferior comparativa
  
  // Guías
  guide_top: '1234567903', // Banner superior guía
  guide_in_content_1: '1234567904', // Primer anuncio in-content
  guide_in_content_2: '1234567905', // Segundo anuncio in-content
  guide_sidebar: '1234567906', // Sidebar guía
  
  // Móvil
  mobile_sticky: '1234567907', // Anuncio sticky móvil (bottom)
  mobile_anchor: '1234567908', // Anuncio anchor móvil (top)
} as const;

/**
 * Formatos de anuncios recomendados
 */
export const AD_FORMATS = {
  // Banners horizontales
  leaderboard: { width: 728, height: 90 }, // Desktop top
  banner: { width: 468, height: 60 }, // Tablet
  mobileBanner: { width: 320, height: 50 }, // Mobile
  
  // Banners grandes
  largeBanner: { width: 970, height: 90 }, // Desktop top (premium)
  billboard: { width: 970, height: 250 }, // Desktop top (extra large)
  
  // Rectangulares
  rectangle: { width: 300, height: 250 }, // Sidebar
  largeRectangle: { width: 336, height: 280 }, // Sidebar (mejor rendimiento)
  
  // Verticales
  skyscraper: { width: 120, height: 600 }, // Sidebar vertical
  wideSkyscraper: { width: 160, height: 600 }, // Sidebar vertical (mejor)
  
  // Responsive (auto-ajustable)
  responsive: 'auto',
} as const;

/**
 * Configuración de anuncios por página
 */
export const PAGE_AD_CONFIG = {
  home: {
    maxAds: 3,
    slots: [AD_SLOTS.home_top, AD_SLOTS.home_sidebar],
  },
  blog: {
    maxAds: 5,
    slots: [
      AD_SLOTS.blog_top,
      AD_SLOTS.blog_in_article_1,
      AD_SLOTS.blog_in_article_2,
      AD_SLOTS.blog_bottom,
      AD_SLOTS.blog_sidebar,
    ],
  },
  comparison: {
    maxAds: 4,
    slots: [
      AD_SLOTS.comparison_top,
      AD_SLOTS.comparison_in_content,
      AD_SLOTS.comparison_bottom,
    ],
  },
  guide: {
    maxAds: 5,
    slots: [
      AD_SLOTS.guide_top,
      AD_SLOTS.guide_in_content_1,
      AD_SLOTS.guide_in_content_2,
      AD_SLOTS.guide_sidebar,
    ],
  },
} as const;
