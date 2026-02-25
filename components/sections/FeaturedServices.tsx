import Link from 'next/link';
import { getServices } from '@/lib/sanity/helpers';
import ServiceCard from '@/components/ui/ServiceCard';

export default async function FeaturedServices() {
  const services = await getServices();
  
  // Tomar solo los primeros 3 servicios (Baño, Peluquería, Antiparasitarios)
  const featuredServices = services.slice(0, 3);

  // Si no hay servicios en Sanity, usar datos mock
  const mockServices = [
    {
      _id: 'mock-1',
      name: 'Baño Completo',
      slug: { current: 'bano-completo' },
      description:
        'Baño completo con champú especializado, secado y cepillado. Incluye limpieza de oídos y corte de uñas.',
      priceMin: 20,
      priceMax: 40,
      duration: '1-2 horas',
      features: [
        'Champú especializado según tipo de pelo',
        'Secado profesional',
        'Cepillado y desenredado',
        'Limpieza de oídos',
        'Corte de uñas',
      ],
      images: [],
      icon: '🛁',
      order: 1,
    },
    {
      _id: 'mock-2',
      name: 'Peluquería Completa',
      slug: { current: 'peluqueria-completa' },
      description:
        'Servicio completo de peluquería con corte personalizado según raza y preferencias. Incluye baño y acabado profesional.',
      priceMin: 35,
      priceMax: 60,
      duration: '2-3 horas',
      features: [
        'Baño completo',
        'Corte según raza o preferencia',
        'Vaciado de manto',
        'Arreglo de patas y cara',
        'Perfumado',
      ],
      images: [],
      icon: '✂️',
      order: 2,
    },
    {
      _id: 'mock-3',
      name: 'Antiparasitarios',
      slug: { current: 'antiparasitarios' },
      description:
        'Tratamiento antiparasitario externo para proteger a tu mascota de pulgas, garrapatas y otros parásitos.',
      priceMin: 15,
      priceMax: 25,
      duration: '30 minutos',
      features: [
        'Pipeta antiparasitaria',
        'Protección hasta 3 meses',
        'Aplicación profesional',
        'Asesoramiento personalizado',
      ],
      images: [],
      icon: '🛡️',
      order: 3,
    },
  ];

  const displayServices =
    featuredServices.length > 0 ? featuredServices : mockServices;

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ofrecemos servicios profesionales de peluquería canina en la
            comodidad de tu hogar
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>

        {/* CTA para ver todos los servicios */}
        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
          >
            Ver Todos los Servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
