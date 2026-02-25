/**
 * Ciudades dentro de la zona de cobertura principal
 */
const SERVICE_AREA_CITIES = [
  'alcala-de-guadaira',
  'sevilla',
  'dos-hermanas',
  'mairena-del-alcor',
  'el-viso-del-alcor',
];

/**
 * Verifica si una ciudad está dentro de la zona de cobertura
 * @param city - Slug de la ciudad a verificar
 * @returns true si está en la zona de cobertura, false si no
 */
export function isInServiceArea(city: string): boolean {
  return SERVICE_AREA_CITIES.includes(city.toLowerCase());
}

/**
 * Obtiene el mensaje apropiado según la zona
 * @param city - Slug de la ciudad
 * @returns Mensaje informativo sobre la cobertura
 */
export function getServiceAreaMessage(city: string): string {
  if (isInServiceArea(city)) {
    return '¡Perfecto! Esta ciudad está en nuestra zona de cobertura habitual.';
  }
  return 'Esta ciudad está fuera de nuestra zona habitual. Nos pondremos en contacto para confirmar disponibilidad.';
}
