'use client';

import { AdSenseUnit, AdSenseUnitProps } from './AdSenseUnit';

interface InFeedAdProps extends Omit<AdSenseUnitProps, 'layout' | 'format'> {
  layoutKey?: string;
}

/**
 * Anuncio In-Feed
 * Diseñado para insertarse en listas de contenido (blog posts, productos, etc.)
 * Se adapta al estilo de las cards del feed
 * 
 * @example
 * <InFeedAd slot="1234567890" layoutKey="-fb+5w+4e-db+86" />
 */
export function InFeedAd({ layoutKey, className = '', ...props }: InFeedAdProps) {
  return (
    <div className={`my-6 ${className}`}>
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-2 text-center text-xs text-gray-500">In-Feed Ad</div>
      )}
      <AdSenseUnit
        {...props}
        format="fluid"
        layout="in-feed"
        layoutKey={layoutKey}
        fullWidthResponsive={true}
        className="min-h-[250px]"
      />
    </div>
  );
}
