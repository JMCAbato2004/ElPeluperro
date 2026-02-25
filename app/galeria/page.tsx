import type { Metadata } from 'next';
import { getGalleryItems } from '@/lib/sanity/helpers';
import { urlFor } from '@/lib/sanity/client';
import GalleryGrid from '@/components/sections/GalleryGrid';

export const metadata: Metadata = {
  title: 'Galería - El Peluperro',
  description:
    'Galería de fotos antes y después de nuestros servicios de peluquería canina. Mira los resultados de nuestro trabajo.',
  openGraph: {
    title: 'Galería - El Peluperro',
    description:
      'Galería de fotos antes y después de nuestros servicios de peluquería canina.',
  },
};

export default async function GaleriaPage() {
  const galleryItems = await getGalleryItems();

  // Transformar los datos de Sanity al formato esperado
  const transformedItems = galleryItems.map((item) => ({
    id: item._id,
    title: item.title || '',
    beforeImage: item.beforeImage ? urlFor(item.beforeImage).url() : '',
    afterImage: item.afterImage ? urlFor(item.afterImage).url() : '',
    serviceType: item.serviceType || 'bath',
    dogBreed: item.dogBreed,
    description: item.description,
  }));

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-dark md:text-5xl">
            Galería de Trabajos
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Descubre la transformación de nuestros clientes peludos. Cada imagen
            cuenta una historia de cuidado y dedicación.
          </p>
        </div>

        <GalleryGrid items={transformedItems} />
      </div>
    </div>
  );
}
