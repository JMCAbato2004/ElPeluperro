import { AFFILIATE_CONFIG } from './config';

/**
 * Verifica si los enlaces de afiliación están habilitados
 */
export function areAffiliateLinksEnabled(): boolean {
  return AFFILIATE_CONFIG.global.enabled;
}

/**
 * Construye un enlace de afiliación de Amazon
 * 
 * @param asin - ASIN del producto (Amazon Standard Identification Number)
 * @param domain - Dominio de Amazon (por defecto: amazon.es)
 * @returns URL completa con tag de afiliado
 */
export function buildAmazonLink(
  asin: string,
  domain: keyof typeof AFFILIATE_CONFIG.amazon.domains = 'es'
): string {
  const tag = AFFILIATE_CONFIG.amazon.tag;
  const amazonDomain = AFFILIATE_CONFIG.amazon.domains[domain];
  
  if (!tag) {
    console.warn('[Affiliate] Amazon tag not configured');
    return `https://${amazonDomain}/dp/${asin}`;
  }

  return `https://${amazonDomain}/dp/${asin}?tag=${tag}`;
}

/**
 * Construye un enlace de búsqueda de Amazon
 * 
 * @param query - Término de búsqueda
 * @param domain - Dominio de Amazon
 * @returns URL de búsqueda con tag de afiliado
 */
export function buildAmazonSearchLink(
  query: string,
  domain: keyof typeof AFFILIATE_CONFIG.amazon.domains = 'es'
): string {
  const tag = AFFILIATE_CONFIG.amazon.tag;
  const amazonDomain = AFFILIATE_CONFIG.amazon.domains[domain];
  const encodedQuery = encodeURIComponent(query);
  
  if (!tag) {
    return `https://${amazonDomain}/s?k=${encodedQuery}`;
  }

  return `https://${amazonDomain}/s?k=${encodedQuery}&tag=${tag}`;
}

/**
 * Construye un enlace de afiliación de Tiendanimal
 * 
 * @param productUrl - URL del producto en Tiendanimal
 * @returns URL con parámetros de afiliado
 */
export function buildTiendanimalLink(productUrl: string): string {
  const partnerId = AFFILIATE_CONFIG.tiendanimal.partnerId;
  
  if (!partnerId) {
    console.warn('[Affiliate] Tiendanimal partner ID not configured');
    return productUrl;
  }

  // Añadir parámetro de afiliado a la URL
  const url = new URL(productUrl);
  url.searchParams.set('partner', partnerId);
  
  return url.toString();
}

/**
 * Detecta si una URL es de Amazon
 */
export function isAmazonUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.includes('amazon.');
  } catch {
    return false;
  }
}

/**
 * Detecta si una URL es de Tiendanimal
 */
export function isTiendanimalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.includes('tiendanimal.');
  } catch {
    return false;
  }
}

/**
 * Extrae el ASIN de una URL de Amazon
 */
export function extractAsinFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    const dpIndex = pathParts.indexOf('dp');
    
    if (dpIndex !== -1 && pathParts[dpIndex + 1]) {
      return pathParts[dpIndex + 1] || null;
    }
    
    return null;
  } catch {
    return null;
  }
}

/**
 * Añade tag de afiliado a una URL existente de Amazon
 */
export function addAmazonAffiliateTag(url: string): string {
  const tag = AFFILIATE_CONFIG.amazon.tag;
  
  if (!tag) {
    return url;
  }

  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('tag', tag);
    return urlObj.toString();
  } catch {
    return url;
  }
}

/**
 * Genera atributos para enlaces de afiliación (rel, target, etc.)
 */
export function getAffiliateLinkAttributes() {
  return {
    rel: 'nofollow sponsored noopener',
    target: '_blank',
  };
}

/**
 * Registra un clic en enlace de afiliación (para analytics)
 */
export function trackAffiliateClick(
  platform: 'amazon' | 'tiendanimal',
  productId: string,
  productName?: string
): void {
  if (!AFFILIATE_CONFIG.global.trackClicks) {
    return;
  }

  // Enviar evento a Google Analytics si está disponible
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      platform,
      product_id: productId,
      product_name: productName,
    });
  }

  // Log en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('[Affiliate] Click tracked:', { platform, productId, productName });
  }
}

/**
 * Formatea el precio para mostrar
 */
export function formatPrice(price: number | string, currency: string = '€'): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  
  if (isNaN(numPrice)) {
    return 'Precio no disponible';
  }

  return `${numPrice.toFixed(2)}${currency}`;
}

/**
 * Calcula el ahorro en porcentaje
 */
export function calculateSavingsPercentage(originalPrice: number, salePrice: number): number {
  if (originalPrice <= 0 || salePrice <= 0) {
    return 0;
  }

  const savings = ((originalPrice - salePrice) / originalPrice) * 100;
  return Math.round(savings);
}
