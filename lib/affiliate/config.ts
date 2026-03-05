/**
 * Configuración de Programas de Afiliación
 * 
 * IMPORTANTE: Antes de usar en producción:
 * 1. Registrarse en Amazon Associates: https://afiliados.amazon.es
 * 2. Registrarse en Tiendanimal Afiliados
 * 3. Configurar las variables de entorno con tus IDs
 * 4. Leer y cumplir con las políticas de cada programa
 */

export const AFFILIATE_CONFIG = {
  // Amazon Associates
  amazon: {
    tag: process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || '',
    enabled: !!process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG,
    domain: 'amazon.es',
    // Dominios alternativos para otros países
    domains: {
      es: 'amazon.es',
      com: 'amazon.com',
      uk: 'amazon.co.uk',
      de: 'amazon.de',
      fr: 'amazon.fr',
      it: 'amazon.it',
    },
  },

  // Tiendanimal
  tiendanimal: {
    partnerId: process.env.NEXT_PUBLIC_TIENDANIMAL_PARTNER_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_TIENDANIMAL_PARTNER_ID,
    domain: 'tiendanimal.es',
  },

  // Configuración global
  global: {
    // Habilitar/deshabilitar todos los enlaces de afiliación
    enabled: process.env.NODE_ENV === 'production',
    
    // Mostrar disclosure en todas las páginas con enlaces de afiliación
    showDisclosure: true,
    
    // Tracking de clics (para analytics)
    trackClicks: true,
  },
};

/**
 * Categorías de productos para organización
 */
export const PRODUCT_CATEGORIES = {
  grooming: 'Peluquería y Aseo',
  food: 'Alimentación',
  health: 'Salud y Bienestar',
  toys: 'Juguetes',
  accessories: 'Accesorios',
  training: 'Entrenamiento',
  hygiene: 'Higiene',
  antiparasitic: 'Antiparasitarios',
} as const;

/**
 * Tipos de enlaces de afiliación
 */
export const AFFILIATE_LINK_TYPES = {
  product: 'product', // Enlace directo a producto
  search: 'search', // Enlace a búsqueda
  category: 'category', // Enlace a categoría
  custom: 'custom', // Enlace personalizado
} as const;
