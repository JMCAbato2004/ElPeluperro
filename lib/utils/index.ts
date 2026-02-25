/**
 * Utility functions for El Peluperro Website
 */

/**
 * Genera un slug URL-friendly desde un título
 * @param title - Título a convertir en slug
 * @returns Slug en formato lowercase con guiones
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD') // Normaliza caracteres Unicode
    .replace(/[\u0300-\u036f]/g, '') // Elimina diacríticos
    .replace(/[^a-z0-9\s-]/g, '') // Elimina caracteres especiales
    .trim()
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones
    .replace(/-+/g, '-') // Elimina guiones consecutivos
    .replace(/^-|-$/g, ''); // Elimina guiones al inicio/final
}

/**
 * Valida que un slug cumpla con el formato correcto
 * - Solo minúsculas, números y guiones
 * - No puede empezar ni terminar con guión
 */
export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

/**
 * Calcula el tiempo estimado de lectura de un texto
 * @param text - Texto a analizar
 * @param wordsPerMinute - Palabras por minuto (default: 200)
 * @returns Tiempo de lectura en minutos
 */
export function calculateReadingTime(text: string, wordsPerMinute = 200): number {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 * Valida si una ciudad está dentro del área de servicio
 * @param city - Ciudad a validar (slug)
 * @returns true si está en el área de servicio
 */
export function isInServiceArea(city: string): boolean {
  const serviceAreaCities = [
    'alcala-de-guadaira',
    'sevilla',
    'dos-hermanas',
    'mairena-del-alcor',
    'el-viso-del-alcor',
  ];
  return serviceAreaCities.includes(city.toLowerCase());
}

/**
 * Formatea un número de teléfono español
 * @param phone - Número de teléfono
 * @returns Número formateado
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Formatea un rango de precios
 * @param min - Precio mínimo
 * @param max - Precio máximo
 * @returns String formateado con el rango
 */
export function formatPriceRange(min: number, max: number): string {
  return `${min}€ - ${max}€`;
}

/**
 * Combina clases CSS de forma condicional
 * @param classes - Clases a combinar
 * @returns String con clases combinadas
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

