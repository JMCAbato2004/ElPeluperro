'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha dado su consentimiento
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      // Cargar preferencias guardadas
      const preferences = JSON.parse(consent);
      setAnalyticsEnabled(preferences.analytics || false);
      loadScripts(preferences);
    }
  }, []);

  const loadScripts = (preferences: { analytics: boolean }) => {
    // Notificar a Google Analytics sobre el consentimiento
    if (preferences.analytics && typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
      }
    } else if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  };

  const acceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    loadScripts(preferences);
    setShowBanner(false);
  };

  const acceptEssential = () => {
    const preferences = {
      essential: true,
      analytics: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const preferences = {
      essential: true,
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    loadScripts(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl"
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {!showSettings ? (
          // Vista principal del banner
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-dark mb-2">
                🍪 Este sitio utiliza cookies
              </h2>
              <p className="text-sm text-gray-600">
                Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas 
                para mejorar tu experiencia. Puedes aceptar todas las cookies o configurar tus preferencias.{' '}
                <Link href="/cookies" className="text-primary hover:underline font-medium">
                  Más información
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-lg border-2 border-gray-300 px-6 py-2 text-sm font-semibold text-dark transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Configurar
              </button>
              <button
                onClick={acceptEssential}
                className="rounded-lg border-2 border-primary px-6 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Solo esenciales
              </button>
              <button
                onClick={acceptAll}
                className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        ) : (
          // Vista de configuración
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-dark">
                Configuración de Cookies
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Cerrar configuración"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Cookies esenciales */}
              <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-dark mb-1">Cookies Esenciales</h3>
                  <p className="text-sm text-gray-600">
                    Necesarias para el funcionamiento básico del sitio web. No pueden ser desactivadas.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                    aria-label="Cookies esenciales (siempre activas)"
                  />
                </div>
              </div>

              {/* Cookies analíticas */}
              <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-dark mb-1">Cookies Analíticas</h3>
                  <p className="text-sm text-gray-600">
                    Nos ayudan a entender cómo los visitantes interactúan con el sitio web.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                    aria-label="Cookies analíticas"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="rounded-lg border-2 border-gray-300 px-6 py-2 text-sm font-semibold text-dark transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Cancelar
              </button>
              <button
                onClick={savePreferences}
                className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
