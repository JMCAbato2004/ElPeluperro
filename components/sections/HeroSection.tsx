'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary py-20 text-white md:py-32">
      {/* Animación de fondo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float-slow absolute left-10 top-20 text-6xl">
          🐕
        </div>
        <div className="animate-float-medium absolute right-20 top-40 text-5xl">
          🐩
        </div>
        <div className="animate-float-fast absolute bottom-20 left-1/4 text-4xl">
          🦴
        </div>
        <div className="animate-float-slow absolute bottom-32 right-1/3 text-5xl">
          🐾
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Peluquería Canina Móvil
            <span className="block text-accent">¡Vamos a tu casa!</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl md:text-2xl">
            Cuidamos a tu mejor amigo con profesionalidad y cariño en Alcalá de
            Guadaíra y Sevilla. Sin estrés, sin desplazamientos.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/reservar"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Reservar Cita Ahora
            </Link>
            <Link
              href="/servicios"
              className="inline-block rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-primary"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
