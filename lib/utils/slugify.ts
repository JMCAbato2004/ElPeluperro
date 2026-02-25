/**
 * Valida que un slug cumpla con el formato correcto
 * - Solo minúsculas, números y guiones
 * - No puede empezar ni terminar con guión
 */
export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

