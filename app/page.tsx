import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Award, TrendingUp, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Portal de Referencia */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Texto Principal */}
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                🐕 Tu Guía de Confianza para el Cuidado Canino
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-dark md:text-5xl lg:text-6xl">
                Todo lo que Necesitas Saber sobre el Cuidado de tu Perro
              </h1>
              <p className="mb-8 text-xl text-gray-700 md:text-2xl">
                Guías completas, comparativas honestas y consejos de un peluquero canino profesional con más de [X] años de experiencia
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
                >
                  Explorar Guías
                </Link>
                <Link
                  href="/sobre-nosotros"
                  className="inline-block rounded-full border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-primary/5"
                >
                  Conoce al Autor
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>

            {/* Imagen/Visual */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl">
                <Image
                  src="/images/jose-antonio.jpg"
                  alt="José Antonio Camacho - El Peluperro"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Confiar en Nosotros */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
              ¿Por Qué Confiar en Nuestras Recomendaciones?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              No somos solo bloggers. Somos profesionales que trabajan con perros todos los días.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-primary/5 p-8 text-center transition-all hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark">Experiencia Real</h3>
              <p className="text-gray-600">
                Más de [X] años trabajando profesionalmente con perros de todas las razas
              </p>
            </div>

            <div className="rounded-xl bg-secondary/5 p-8 text-center transition-all hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-secondary/10 p-4">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark">Productos Probados</h3>
              <p className="text-gray-600">
                Solo recomendamos productos que hemos usado personalmente en nuestro trabajo
              </p>
            </div>

            <div className="rounded-xl bg-primary/5 p-8 text-center transition-all hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark">Guías Completas</h3>
              <p className="text-gray-600">
                Contenido detallado y práctico basado en experiencia profesional real
              </p>
            </div>

            <div className="rounded-xl bg-secondary/5 p-8 text-center transition-all hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-secondary/10 p-4">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark">Actualizado</h3>
              <p className="text-gray-600">
                Revisamos y actualizamos nuestro contenido regularmente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Destacado */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
              Contenido Destacado
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Guías completas, comparativas honestas y consejos prácticos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - Placeholder */}
            <Link
              href="/blog"
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-semibold text-primary">GUÍA COMPLETA</div>
                <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-primary">
                  Guía Completa de Razas Caninas
                </h3>
                <p className="text-gray-600">
                  Todo lo que necesitas saber sobre las razas más populares, sus características y cuidados específicos
                </p>
              </div>
            </Link>

            {/* Card 2 - Placeholder */}
            <Link
              href="/blog"
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl">🛁</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-semibold text-secondary">ARTÍCULO</div>
                <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-primary">
                  Cómo Bañar a Tu Perro en Casa
                </h3>
                <p className="text-gray-600">
                  Guía paso a paso con consejos profesionales para bañar a tu perro correctamente en casa
                </p>
              </div>
            </Link>

{/*              Card 3 - Placeholder
            <Link
              href="/blog"
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl">⭐</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-semibold text-primary">COMPARATIVA</div>
                <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-primary">
                  Mejores Champús para Perros 2026
                </h3>
                <p className="text-gray-600">
                  Comparativa honesta de los mejores champús que hemos probado en nuestra peluquería
                </p>
              </div>
            </Link> */}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-block rounded-full border-2 border-primary px-8 py-3 text-lg font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Ver Todas las Guías
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Locales - Sección Secundaria */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-primary">
                🚐 Servicio Local en Sevilla
              </div>
              <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
                ¿Vives en Sevilla o Alcalá de Guadaíra?
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Además de crear contenido, ofrezco servicios profesionales de peluquería canina móvil. 
                Llevo mi furgoneta totalmente equipada directamente a tu domicilio.
              </p>
              <ul className="mb-8 space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Servicio a domicilio - Tu perro estará más cómodo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Equipamiento profesional completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Productos de calidad que recomiendo en el blog</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/servicios"
                  className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
                >
                  Ver Servicios
                </Link>
                <Link
                  href="/reservar"
                  className="inline-block rounded-full border-2 border-primary bg-white px-8 py-3 text-lg font-semibold text-primary transition-all hover:bg-primary/5"
                >
                  Reservar Cita
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-xl">
                <Image
                  src="/images/Furgoneta.png"
                  alt="Furgoneta de peluquería canina móvil El Peluperro"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-dark py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Recibe Consejos Semanales en tu Email
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Únete a más de [X] dueños de perros que reciben consejos prácticos cada semana
          </p>
          {/* TODO: Implementar formulario de newsletter */}
          <div className="mx-auto max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 rounded-full px-6 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
              <button
                className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/90"
                disabled
              >
                Suscribirse
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Próximamente disponible
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
