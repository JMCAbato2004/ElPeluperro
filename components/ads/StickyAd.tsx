'use client';

import { useEffect, useState } from 'react';
import { AdSenseUnit, AdSenseUnitProps } from './AdSenseUnit';
import { shouldShowMobileStickyAd } from '@/lib/ads/utils';

interface StickyAdProps extends Omit<AdSenseUnitProps, 'layout' | 'format'> {
  position?: 'top' | 'bottom';
}

/**
 * Anuncio Sticky (fijo en pantalla)
 * Solo se muestra en móvil
 * Permanece visible mientras el usuario hace scroll
 * 
 * @example
 * <StickyAd slot="1234567890" position="bottom" />
 */
export function StickyAd({ position = 'bottom', className = '', ...props }: StickyAdProps) {
  const [showAd, setShowAd] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Solo mostrar en móvil
    setShowAd(shouldShowMobileStickyAd());

    // Actualizar en resize
    const handleResize = () => {
      setShowAd(shouldShowMobileStickyAd());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // No renderizar si no debe mostrarse
  if (!showAd) {
    return null;
  }

  // Función para cerrar el anuncio
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const positionClasses = position === 'top' 
    ? 'top-0' 
    : 'bottom-0';

  return (
    <div
      className={`fixed left-0 right-0 z-40 bg-white shadow-lg ${positionClasses} ${className}`}
      style={{ maxHeight: '100px' }}
    >
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 px-2 py-1 text-center text-xs text-gray-600">
          Sticky Ad ({position})
        </div>
      )}
      
      {/* Botón de cerrar */}
      <button
        onClick={handleClose}
        className="absolute right-2 top-2 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700"
        aria-label="Cerrar anuncio"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <AdSenseUnit
        {...props}
        format="auto"
        fullWidthResponsive={true}
        className="h-[90px]"
      />
    </div>
  );
}
