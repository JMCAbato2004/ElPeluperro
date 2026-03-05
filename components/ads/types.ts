/**
 * Tipos para componentes de AdSense
 */

export type AdFormat = 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';

export type AdLayout = 'in-article' | 'in-feed' | 'display';

export type AdPosition = 'top' | 'bottom' | 'sidebar' | 'in-content';

export interface AdConfig {
  slot: string;
  format?: AdFormat;
  layout?: AdLayout;
  layoutKey?: string;
  fullWidthResponsive?: boolean;
}

export interface AdPlacement {
  id: string;
  position: AdPosition;
  config: AdConfig;
  minWordCount?: number; // Mínimo de palabras antes de mostrar
  afterParagraph?: number; // Mostrar después del párrafo N
}

export interface PageAdConfig {
  maxAds: number;
  placements: AdPlacement[];
}
