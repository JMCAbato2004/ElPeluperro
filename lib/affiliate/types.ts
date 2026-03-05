/**
 * Tipos para el sistema de afiliación
 */

export type AffiliatePlatform = 'amazon' | 'tiendanimal' | 'other';

export type ProductCategory = 
  | 'grooming'
  | 'food'
  | 'health'
  | 'toys'
  | 'accessories'
  | 'training'
  | 'hygiene'
  | 'antiparasitic';

export interface AffiliateLink {
  url: string;
  platform: AffiliatePlatform;
  productId?: string;
  productName?: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string;
  category: ProductCategory;
  affiliateLinks: {
    amazon?: string;
    tiendanimal?: string;
    other?: string;
  };
  price?: {
    amount: number;
    currency: string;
    originalAmount?: number; // Para mostrar descuentos
  };
  rating?: number; // 1-5
  pros?: string[];
  cons?: string[];
  featured?: boolean;
}

export interface ComparisonProduct extends Product {
  rank?: number; // Posición en la comparativa
  score?: number; // Puntuación total
  bestFor?: string; // "Mejor para X"
  verdict?: string; // Veredicto final
}

export interface AffiliateDisclosureProps {
  variant?: 'full' | 'compact' | 'inline';
  className?: string;
}
