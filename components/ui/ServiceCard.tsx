import Link from 'next/link';
import type { Service } from '@/lib/sanity/types';

interface ServiceCardProps {
  service: Service;
  showBookingCTA?: boolean;
}

export default function ServiceCard({ service, showBookingCTA = false }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icono del servicio */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-4xl transition-transform group-hover:scale-110">
        {service.icon || '🐕'}
      </div>

      {/* Nombre del servicio */}
      <h3 className="mb-3 text-2xl font-bold text-dark">{service.name}</h3>

      {/* Descripción */}
      <p className="mb-4 text-gray-600 line-clamp-3">{service.description}</p>

      {/* Precio y duración */}
      <div className="mb-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-primary">
          <span className="font-semibold">
            {service.priceMin}€ - {service.priceMax}€
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <span>⏱️</span>
          <span>{service.duration}</span>
        </div>
      </div>

      {/* Features destacadas */}
      {service.features && service.features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-secondary">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Botón de acción */}
      {showBookingCTA && (
        <Link
          href={`/reservar?servicio=${service.slug.current}`}
          className="inline-block w-full rounded-full bg-primary px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Reservar este servicio
        </Link>
      )}
    </div>
  );
}
