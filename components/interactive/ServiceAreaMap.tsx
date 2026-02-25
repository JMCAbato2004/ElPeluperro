'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix para los iconos de Leaflet en Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function ServiceAreaMap() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Coordenadas de Sevilla y Alcalá de Guadaíra
    const sevillaCoords: [number, number] = [37.3891, -5.9845];
    const alcalaCoords: [number, number] = [37.3333, -5.8333];

    // Centro del mapa (punto medio entre ambas ciudades)
    const centerCoords: [number, number] = [37.36, -5.91];

    // Inicializar el mapa
    const map = L.map(mapContainerRef.current).setView(centerCoords, 11);
    mapRef.current = map;

    // Añadir capa de tiles (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Marcador para Sevilla
    const sevillaMarker = L.marker(sevillaCoords).addTo(map);
    sevillaMarker.bindPopup(
      '<div class="text-center"><strong>Sevilla</strong><br/>Zona de cobertura</div>'
    );

    // Marcador para Alcalá de Guadaíra
    const alcalaMarker = L.marker(alcalaCoords).addTo(map);
    alcalaMarker.bindPopup(
      '<div class="text-center"><strong>Alcalá de Guadaíra</strong><br/>Zona de cobertura</div>'
    );

    // Polígono de zona de cobertura (área aproximada)
    const coverageArea = L.polygon(
      [
        [37.45, -6.05],
        [37.45, -5.75],
        [37.28, -5.75],
        [37.28, -6.05],
      ],
      {
        color: '#ff6b35',
        fillColor: '#ff6b35',
        fillOpacity: 0.2,
        weight: 2,
      }
    ).addTo(map);

    coverageArea.bindPopup(
      '<div class="text-center"><strong>Zona de Cobertura</strong><br/>Sevilla y Alcalá de Guadaíra</div>'
    );

    // Cleanup al desmontar
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
            Zona de Cobertura
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ofrecemos nuestros servicios en Alcalá de Guadaíra y Sevilla. ¿No
            estás seguro si llegamos a tu zona? ¡Contáctanos!
          </p>
        </div>

        {/* Mapa */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div
            ref={mapContainerRef}
            className="h-[400px] w-full md:h-[500px]"
          />
        </div>

        {/* Información adicional */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-dark">
              <span className="text-2xl">📍</span>
              Alcalá de Guadaíra
            </h3>
            <p className="text-gray-600">
              Servicio completo en toda la localidad y alrededores. Nos
              desplazamos a tu domicilio sin coste adicional.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-dark">
              <span className="text-2xl">📍</span>
              Sevilla
            </h3>
            <p className="text-gray-600">
              Cobertura en la ciudad de Sevilla y principales barrios. Consulta
              disponibilidad para zonas específicas.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-600">
            ¿Tu zona no aparece en el mapa? Contáctanos y consultaremos tu caso
          </p>
          <a
            href="/contacto"
            className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
