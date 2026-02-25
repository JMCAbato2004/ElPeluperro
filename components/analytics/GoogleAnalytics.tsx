'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Verificar consentimiento de cookies
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie_consent');
      if (consent) {
        const preferences = JSON.parse(consent);
        
        // Solo cargar GA si el usuario aceptó cookies analíticas
        if (preferences.analytics && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
          });
        }
      }
    };

    // Verificar consentimiento al cargar
    checkConsent();

    // Escuchar cambios en el consentimiento
    window.addEventListener('storage', checkConsent);

    return () => {
      window.removeEventListener('storage', checkConsent);
    };
  }, []);

  // No renderizar si no hay ID de GA configurado
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Configuración inicial con consentimiento denegado
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Función helper para enviar eventos personalizados
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}
