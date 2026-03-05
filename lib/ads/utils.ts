import { ADSENSE_CONFIG } from './config';

/**
 * Verifica si los anuncios están habilitados
 */
export function areAdsEnabled(): boolean {
  return ADSENSE_CONFIG.enabled && !!ADSENSE_CONFIG.clientId;
}

/**
 * Verifica si estamos en modo de prueba
 */
export function isTestMode(): boolean {
  return ADSENSE_CONFIG.testMode;
}

/**
 * Obtiene el client ID de AdSense
 */
export function getAdSenseClientId(): string {
  return ADSENSE_CONFIG.clientId;
}

/**
 * Genera un ID único para cada instancia de anuncio
 */
export function generateAdId(slot: string): string {
  return `ad-${slot}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Verifica si el usuario ha dado consentimiento para cookies de publicidad
 * Integración con el sistema de cookies existente
 */
export function hasAdvertisingConsent(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return false;
    
    const consentData = JSON.parse(consent);
    return consentData.advertising === true;
  } catch {
    return false;
  }
}

/**
 * Calcula el número óptimo de anuncios según el contenido
 * Regla general: 1 anuncio cada 500-700 palabras
 */
export function calculateOptimalAdCount(wordCount: number): number {
  if (wordCount < 500) return 1;
  if (wordCount < 1000) return 2;
  if (wordCount < 1500) return 3;
  if (wordCount < 2500) return 4;
  return 5; // Máximo 5 anuncios por página
}

/**
 * Determina si se debe mostrar un anuncio sticky en móvil
 */
export function shouldShowMobileStickyAd(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

/**
 * Formatea el slot ID para AdSense
 */
export function formatSlotId(slot: string): string {
  return slot.toString();
}

/**
 * Log de eventos de anuncios (para debugging)
 */
export function logAdEvent(event: string, data?: any): void {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[AdSense] ${event}`, data);
  }
}
