'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ui/ImageModal';

interface GalleryItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  serviceType: 'bath' | 'grooming' | 'antiparasitic';
  dogBreed?: string;
  description?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const serviceTypeLabels: Record<string, string> = {
  all: 'Todos',
  bath: 'Baño',
  grooming: 'Peluquería',
  antiparasitic: 'Antiparasitarios',
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    type: 'before' | 'after';
    itemIndex: number;
  } | null>(null);

  // Filtrar items según el tipo de servicio seleccionado
  const filteredItems =
    selectedFilter === 'all'
      ? items
      : items.filter((item) => item.serviceType === selectedFilter);

  const handleImageClick = (
    item: GalleryItem,
    type: 'before' | 'after',
    index: number
  ) => {
    setSelectedImage({
      url: type === 'before' ? item.beforeImage : item.afterImage,
      title: `${item.title || item.dogBreed || 'Transformación'} - ${type === 'before' ? 'Antes' : 'Después'}`,
      type,
      itemIndex: index,
    });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedImage || filteredItems.length === 0) return;

    const currentIndex = selectedImage.itemIndex;
    let newIndex: number;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }

    const newItem = filteredItems[newIndex];
    if (!newItem) return;

    setSelectedImage({
      url:
        selectedImage.type === 'before'
          ? newItem.beforeImage
          : newItem.afterImage,
      title: `${newItem.title || newItem.dogBreed || 'Transformación'} - ${selectedImage.type === 'before' ? 'Antes' : 'Después'}`,
      type: selectedImage.type,
      itemIndex: newIndex,
    });
  };

  return (
    <>
      {/* Filtros */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {Object.entries(serviceTypeLabels).map(([value, label]) => (
          <button
            key={value}
            onClick={() => setSelectedFilter(value)}
            className={`rounded-full px-6 py-2 font-medium transition-all ${
              selectedFilter === value
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid de imágenes */}
      {filteredItems.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-600">
            No hay imágenes disponibles para este filtro.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              {/* Contenedor de imágenes antes/después */}
              <div className="grid grid-cols-2">
                {/* Imagen Antes */}
                <div className="relative aspect-square overflow-hidden">
                  <button
                    onClick={() => handleImageClick(item, 'before', index)}
                    className="relative h-full w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={`Ver imagen antes de ${item.title || item.dogBreed}`}
                  >
                    <Image
                      src={item.beforeImage || '/placeholder-dog.jpg'}
                      alt={`Antes - ${item.title || item.dogBreed || 'Perro'}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">
                      Antes
                    </div>
                  </button>
                </div>

                {/* Imagen Después */}
                <div className="relative aspect-square overflow-hidden">
                  <button
                    onClick={() => handleImageClick(item, 'after', index)}
                    className="relative h-full w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={`Ver imagen después de ${item.title || item.dogBreed}`}
                  >
                    <Image
                      src={item.afterImage || '/placeholder-dog.jpg'}
                      alt={`Después - ${item.title || item.dogBreed || 'Perro'}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">
                      Después
                    </div>
                  </button>
                </div>
              </div>

              {/* Información */}
              <div className="p-4">
                {item.dogBreed && (
                  <h3 className="mb-1 font-semibold text-dark">
                    {item.dogBreed}
                  </h3>
                )}
                {item.description && (
                  <p className="text-sm text-gray-600">{item.description}</p>
                )}
                {!item.dogBreed && !item.description && item.title && (
                  <h3 className="font-semibold text-dark">{item.title}</h3>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          imageUrl={selectedImage.url}
          title={selectedImage.title}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
}
