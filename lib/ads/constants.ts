/**
 * Constantes para Google AdSense
 */

/**
 * Tipos de formato de anuncios
 */
export const AD_FORMAT_TYPES = {
  AUTO: 'auto',
  FLUID: 'fluid',
  RECTANGLE: 'rectangle',
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

/**
 * Layouts de anuncios
 */
export const AD_LAYOUTS = {
  IN_ARTICLE: 'in-article',
  IN_FEED: 'in-feed',
  DISPLAY: 'display',
} as const;

/**
 * Clases CSS para diferentes formatos
 */
export const AD_CSS_CLASSES = {
  container: 'ad-container',
  responsive: 'ad-responsive',
  horizontal: 'ad-horizontal',
  vertical: 'ad-vertical',
  rectangle: 'ad-rectangle',
  sticky: 'ad-sticky',
  inArticle: 'ad-in-article',
  inFeed: 'ad-in-feed',
} as const;

/**
 * Breakpoints para anuncios responsive
 */
export const AD_BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

/**
 * Tiempos de espera (en ms)
 */
export const AD_TIMEOUTS = {
  loadDelay: 100, // Delay antes de cargar anuncio
  retryDelay: 2000, // Delay entre reintentos
  maxRetries: 3, // Número máximo de reintentos
} as const;

/**
 * Mensajes de error
 */
export const AD_ERROR_MESSAGES = {
  NO_CLIENT_ID: 'AdSense Client ID no configurado',
  LOAD_FAILED: 'Error al cargar el anuncio',
  NO_CONSENT: 'Usuario no ha dado consentimiento para publicidad',
  BLOCKED: 'Anuncio bloqueado por AdBlocker',
} as const;

/**
 * Atributos data para anuncios
 */
export const AD_DATA_ATTRIBUTES = {
  adClient: 'data-ad-client',
  adSlot: 'data-ad-slot',
  adFormat: 'data-ad-format',
  adLayout: 'data-ad-layout',
  adLayoutKey: 'data-ad-layout-key',
  fullWidthResponsive: 'data-full-width-responsive',
  adTest: 'data-adtest',
} as const;
