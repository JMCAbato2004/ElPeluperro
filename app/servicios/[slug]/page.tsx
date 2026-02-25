import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getServiceBySlug, getServices } from '@/lib/sanity/helpers';
import { ShareButtons } from '@/components/ui/ShareButtons';

// Revalidar cada 1 hora (3600 segundos)
export const revalidate = 3600;

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = await getServices();
  
  return services.map((service) => ({
    slug: service.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado',
    };
  }

  return {
    title: `${service.name} - El Peluperro`,
    description: service.description,
    openGraph: {
      title: `${service.name} - El Peluperro`,
      description: service.description,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Schema.org Product/Service markup
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: service.name,
    description: service.description,
    image: service.icon
      ? `${process.env.NEXT_PUBLIC_SITE_URL || ''}/og-image.jpg`
      : undefined,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: service.priceMin,
      highPrice: service.priceMax,
      availability: 'https://schema.org/InStock',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/servicios/${params.slug}`,
    },
    brand: {
      '@type': 'Brand',
      name: 'El Peluperro',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'El Peluperro',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://elpeluperro.com',
    },
    category: 'Pet Grooming',
    additionalProperty: service.features?.map((feature) => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature,
    })),
  };

  return (
    <div className="min-h-screen bg-light py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/servicios" className="hover:text-primary">
            Servicios
          </Link>
          <span>/</span>
          <span className="text-dark">{service.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Columna izquierda - Información del servicio */}
          <div>
            {/* Icono y título */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-5xl">
                {service.icon || '🐕'}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-dark md:text-5xl">
                  {service.name}
                </h1>
              </div>
            </div>

            {/* Precio y duración */}
            <div className="mb-8 flex flex-wrap gap-4">
              <div className="rounded-lg bg-white px-6 py-4 shadow-sm">
                <div className="text-sm text-gray-600">Precio</div>
                <div className="text-2xl font-bold text-primary">
                  {service.priceMin}€ - {service.priceMax}€
                </div>
              </div>
              <div className="rounded-lg bg-white px-6 py-4 shadow-sm">
                <div className="text-sm text-gray-600">Duración</div>
                <div className="text-2xl font-bold text-dark">
                  {service.duration}
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-dark">
                Descripción del Servicio
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {service.description}
              </p>
            </div>

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-dark">
                  ¿Qué incluye?
                </h2>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-1 text-xl text-secondary">✓</span>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Botones de acción */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/reservar?servicio=${service.slug.current}`}
                className="inline-block rounded-full bg-primary px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
              >
                Reservar este servicio
              </Link>
              <Link
                href="/contacto"
                className="inline-block rounded-full border-2 border-primary px-8 py-4 text-center text-lg font-semibold text-primary transition-all hover:bg-primary/5"
              >
                Consultar
              </Link>
            </div>

            {/* Compartir en redes sociales */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="mb-4 text-lg font-semibold text-dark">
                Compartir este servicio
              </h3>
              <ShareButtons
                url={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/servicios/${params.slug}`}
                title={service.name}
              />
            </div>
          </div>

          {/* Columna derecha - Galería de imágenes */}
          <div>
            {service.images && service.images.length > 0 ? (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-dark">Galería</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                    >
                      {/* Placeholder for Sanity images - will be implemented when Sanity is configured */}
                      <div className="flex h-full items-center justify-center text-6xl">
                        {service.icon || '🐕'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-6 flex justify-center text-8xl">
                  {service.icon || '🐕'}
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-xl font-semibold text-dark">
                    Servicio Profesional
                  </h3>
                  <p className="text-gray-600">
                    Nuestro equipo cuenta con años de experiencia en el cuidado
                    y estética canina
                  </p>
                </div>
              </div>
            )}

            {/* Información adicional */}
            <div className="mt-8 rounded-2xl bg-primary/5 p-6">
              <h3 className="mb-4 text-xl font-bold text-dark">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🏠</span>
                  <span>Servicio móvil - vamos a tu domicilio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">👨‍⚕️</span>
                  <span>Profesionales cualificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🧴</span>
                  <span>Productos de alta calidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">❤️</span>
                  <span>Trato personalizado y cariñoso</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Otros servicios */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-dark">
            Otros Servicios
          </h2>
          <div className="flex justify-center">
            <Link
              href="/servicios"
              className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
