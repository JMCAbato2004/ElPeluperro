'use client';

import dynamic from 'next/dynamic';

// Lazy load del mapa con SSR deshabilitado (Leaflet requiere window)
const ServiceAreaMap = dynamic(() => import('./ServiceAreaMap'), {
  ssr: false,
  loading: () => (
    <section className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
            Zona de Cobertura
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Cargando mapa...
          </p>
        </div>
        <div className="flex h-[400px] items-center justify-center rounded-2xl bg-gray-200 md:h-[500px]">
          <div className="text-center">
            <div className="mb-4 text-4xl">🗺️</div>
            <p className="text-gray-600">Cargando mapa interactivo...</p>
          </div>
        </div>
      </div>
    </section>
  ),
});

export default ServiceAreaMap;
