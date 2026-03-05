'use client';

import { AdSenseUnit, AdSenseUnitProps } from './AdSenseUnit';

interface DisplayAdProps extends Omit<AdSenseUnitProps, 'layout'> {
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
}

/**
 * Anuncio Display estándar
 * Ideal para sidebars, headers y footers
 * 
 * @example
 * <DisplayAd slot="1234567890" format="rectangle" />
 */
export function DisplayAd({ format = 'auto', className = '', ...props }: DisplayAdProps) {
  return (
    <div className={`my-6 ${className}`}>
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-2 text-xs text-gray-500">Display Ad</div>
      )}
      <AdSenseUnit
        {...props}
        format={format}
        layout="display"
        fullWidthResponsive={true}
        className="min-h-[250px]"
      />
    </div>
  );
}
