'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { getAdSenseClientId, areAdsEnabled, isTestMode, logAdEvent } from '@/lib/ads/utils';

/**
 * Componente que carga el script de Google AdSense
 * Debe incluirse una sola vez en el layout principal
 */
export function AdSenseScript() {
  const clientId = getAdSenseClientId();
  const adsEnabled = areAdsEnabled();
  const testMode = isTestMode();

  useEffect(() => {
    if (adsEnabled) {
      logAdEvent('AdSense Script Loaded', { clientId, testMode });
    }
  }, [adsEnabled, clientId, testMode]);

  // No cargar script si los anuncios están deshabilitados
  if (!adsEnabled || !clientId) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[AdSense] Script no cargado. Configura NEXT_PUBLIC_ADSENSE_CLIENT_ID en .env.local'
      );
    }
    return null;
  }

  return (
    <>
      <Script
        id="adsense-script"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onLoad={() => {
          logAdEvent('AdSense Script Ready');
        }}
        onError={(e) => {
          console.error('[AdSense] Error loading script:', e);
        }}
      />
      
      {testMode && (
        <Script
          id="adsense-test-mode"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.adsbygoogle = window.adsbygoogle || [];
              adsbygoogle.push({
                google_ad_client: "${clientId}",
                enable_page_level_ads: true,
                overlays: {bottom: true}
              });
            `,
          }}
        />
      )}
    </>
  );
}
