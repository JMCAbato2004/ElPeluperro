'use client';

import { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  getAffiliateLinkAttributes,
  trackAffiliateClick,
  isAmazonUrl,
  isTiendanimalUrl,
} from '@/lib/affiliate/utils';
import type { AffiliatePlatform } from '@/lib/affiliate/types';

export interface AffiliateLinkProps {
  href: string;
  children: ReactNode;
  platform?: AffiliatePlatform;
  productId?: string;
  productName?: string;
  className?: string;
  showIcon?: boolean;
  variant?: 'default' | 'button' | 'text';
}

/**
 * Componente para enlaces de afiliación
 * Añade automáticamente los atributos correctos y tracking
 * 
 * @example
 * <AffiliateLink 
 *   href="https://amazon.es/dp/B08XYZ" 
 *   platform="amazon"
 *   productName="Champú para perros"
 * >
 *   Ver en Amazon
 * </AffiliateLink>
 */
export function AffiliateLink({
  href,
  children,
  platform,
  productId,
  productName,
  className = '',
  showIcon = true,
  variant = 'default',
}: AffiliateLinkProps) {
  // Detectar plataforma automáticamente si no se especifica
  const detectedPlatform = platform || detectPlatform(href);

  // Manejar clic
  const handleClick = () => {
    if (detectedPlatform && productId && detectedPlatform !== 'other') {
      trackAffiliateClick(detectedPlatform, productId, productName);
    }
  };

  // Atributos del enlace
  const linkAttributes = getAffiliateLinkAttributes();

  // Clases según variante
  const variantClasses = {
    default: 'text-primary hover:text-primary/80 underline',
    button: 'inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90',
    text: 'text-dark hover:text-primary transition-colors',
  };

  const finalClassName = `${variantClasses[variant]} ${className}`;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={finalClassName}
      {...linkAttributes}
      data-affiliate-platform={detectedPlatform}
    >
      {children}
      {showIcon && variant !== 'button' && (
        <ExternalLink className="ml-1 inline h-4 w-4" aria-hidden="true" />
      )}
      {showIcon && variant === 'button' && (
        <ExternalLink className="h-5 w-5" aria-hidden="true" />
      )}
    </a>
  );
}

/**
 * Detecta la plataforma de afiliación desde la URL
 */
function detectPlatform(url: string): AffiliatePlatform {
  if (isAmazonUrl(url)) {
    return 'amazon';
  }
  if (isTiendanimalUrl(url)) {
    return 'tiendanimal';
  }
  return 'other';
}
