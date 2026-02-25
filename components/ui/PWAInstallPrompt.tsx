'use client';

import { useState, useEffect } from 'react';
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // Registrar Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registrado:', registration.scope);
          })
          .catch((error) => {
            console.error('Error al registrar Service Worker:', error);
          });
      });
    }

    // Capturar evento de instalación
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Verificar si ya se mostró el banner antes
      const hasSeenBanner = localStorage.getItem('pwa_install_banner_seen');
      if (!hasSeenBanner) {
        setShowInstallBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Detectar si la app ya está instalada
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('App ya instalada');
    }

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('Usuario aceptó la instalación');
      // Track PWA installation
      trackEvent('pwa_installed', {
        outcome: 'accepted',
      });
    } else {
      console.log('Usuario rechazó la instalación');
      trackEvent('pwa_install_dismissed', {
        outcome: 'dismissed',
      });
    }

    setDeferredPrompt(null);
    setShowInstallBanner(false);
    localStorage.setItem('pwa_install_banner_seen', 'true');
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    localStorage.setItem('pwa_install_banner_seen', 'true');
  };

  if (!showInstallBanner || !deferredPrompt) {
    return null;
  }

  return (
    <div
      className="fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-md rounded-lg border-2 border-primary bg-white p-4 shadow-xl sm:left-auto sm:right-8"
      role="dialog"
      aria-live="polite"
      aria-label="Instalar aplicación"
    >
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        aria-label="Cerrar"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex items-start gap-3">
        <div className="text-3xl">🐕</div>
        <div className="flex-1">
          <h3 className="mb-1 font-semibold text-dark">
            Instalar El Peluperro
          </h3>
          <p className="mb-3 text-sm text-gray-600">
            Instala nuestra app para acceso rápido y funcionalidad offline
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleInstallClick}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Instalar
            </button>
            <button
              onClick={handleDismiss}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Ahora no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
