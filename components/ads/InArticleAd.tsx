'use client';

import { AdSenseUnit, AdSenseUnitProps } from './AdSenseUnit';

interface InArticleAdProps extends Omit<AdSenseUnitProps, 'layout' | 'format'> {}

/**
 * Anuncio In-Article
 * Diseñado para insertarse dentro del contenido de artículos
 * Se integra naturalmente con el flujo del texto
 * 
 * @example
 * <InArticleAd slot="1234567890" />
 */
export function InArticleAd({ className = '', ...props }: InArticleAdProps) {
  return (
    <div className={`my-8 ${className}`}>
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-2 text-center text-xs text-gray-500">In-Article Ad</div>
      )}
      <AdSenseUnit
        {...props}
        format="fluid"
        layout="in-article"
        fullWidthResponsive={true}
        className="min-h-[200px]"
      />
    </div>
  );
}
