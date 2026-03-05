'use client';

import { useEffect, useRef, useState } from 'react';
import {
  areAdsEnabled,
  getAdSenseClientId,
  generateAdId,
  hasAdvertisingConsent,
  logAdEvent,
  isTestMode,
} from '@/lib/ads/utils';
import { AD_DATA_ATTRIBUTES } from '@/lib/ads/constants';

export interface AdSenseUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  layout?: 'in-article' | 'in-feed' | 'display';
  layoutKey?: string;
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Componente base para mostrar anuncios de Google AdSense
 * 
 * @example
 * <AdSenseUnit 
 *   slot="1234567890" 
 *   format="auto" 
 *   fullWidthResponsive={true}
 * />
 */
export function AdSenseUnit({
  slot,
  format = 'auto',
  layout,
  layoutKey,
  fullWidthResponsive = true,
  className = '',
  style = {},
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const [adId] = useState(() => generateAdId(slot));
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const clientId = getAdSenseClientId();
  const adsEnabled = areAdsEnabled();
  const hasConsent = hasAdvertisingConsent();
  const testMode = isTestMode();

  useEffect(() => {
    // No cargar si los anuncios están deshabilitados
    if (!adsEnabled || !clientId) {
      logAdEvent('Ad not loaded - Ads disabled', { slot });
      return;
    }

    // No cargar si no hay consentimiento
    if (!hasConsent && !testMode) {
      logAdEvent('Ad not loaded - No consent', { slot });
      return;
    }

    // Cargar anuncio
    const loadAd = () => {
      try {
        if (adRef.current && window.adsbygoogle) {
          // Verificar si ya fue cargado
          if (isLoaded) {
            logAdEvent('Ad already loaded', { slot, adId });
            return;
          }

          logAdEvent('Loading ad', { slot, adId, format, layout });

          // Push al array de AdSense
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          
          setIsLoaded(true);
          logAdEvent('Ad loaded successfully', { slot, adId });
        }
      } catch (error) {
        console.error('[AdSense] Error loading ad:', error);
        setHasError(true);
        logAdEvent('Ad load error', { slot, adId, error });
      }
    };

    // Delay pequeño para asegurar que el DOM está listo
    const timer = setTimeout(loadAd, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [adsEnabled, clientId, hasConsent, testMode, slot, adId, format, layout, isLoaded]);

  // No renderizar si los anuncios están deshabilitados
  if (!adsEnabled || !clientId) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className={`border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center ${className}`}>
          <p className="text-sm text-gray-600">
            AdSense no configurado
            <br />
            <span className="text-xs">Slot: {slot}</span>
          </p>
        </div>
      );
    }
    return null;
  }

  // No renderizar si no hay consentimiento (excepto en test mode)
  if (!hasConsent && !testMode) {
    return null;
  }

  // Mostrar error si hubo problema al cargar
  if (hasError && process.env.NODE_ENV === 'development') {
    return (
      <div className={`border-2 border-dashed border-red-300 bg-red-50 p-4 text-center ${className}`}>
        <p className="text-sm text-red-600">
          Error al cargar anuncio
          <br />
          <span className="text-xs">Slot: {slot}</span>
        </p>
      </div>
    );
  }

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style,
        }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout && { 'data-ad-layout': layout })}
        {...(layoutKey && { 'data-ad-layout-key': layoutKey })}
        {...(fullWidthResponsive && { 'data-full-width-responsive': 'true' })}
        {...(testMode && { 'data-adtest': 'on' })}
      />
    </div>
  );
}

// Declaración de tipos para window.adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
