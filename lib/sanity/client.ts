import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Valores por defecto temporales para desarrollo sin Sanity configurado
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // Set to false if you want to ensure fresh data
  token: process.env.SANITY_API_TOKEN, // Only needed for write operations
});

// Helper function to generate image URLs
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  // Si es una referencia mock, devolver placeholder
  if (source?.asset?._ref?.startsWith('image-')) {
    const imageId = source.asset._ref;
    // Usar placeholder de perros de diferentes servicios
    return {
      url: () => `https://placedog.net/500/500?id=${imageId}`,
    };
  }
  
  return builder.image(source);
}
