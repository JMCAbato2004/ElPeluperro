'use client';

import { useState, useEffect } from 'react';
import type { Testimonial } from '@/lib/sanity/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Si no hay testimonios, usar datos mock
  const mockTestimonials: Testimonial[] = [
    {
      _id: 'mock-1',
      clientName: 'María García',
      dogBreed: 'Golden Retriever',
      content:
        'Excelente servicio. Mi perro quedó precioso y muy tranquilo durante todo el proceso. José Antonio es muy profesional y cariñoso con los animales.',
      rating: 5,
      featured: true,
      publishedAt: new Date().toISOString(),
    },
    {
      _id: 'mock-2',
      clientName: 'Carlos Ruiz',
      dogBreed: 'Yorkshire Terrier',
      content:
        'Muy contento con el resultado. El servicio a domicilio es súper cómodo y mi perrita no se estresa nada. Totalmente recomendable.',
      rating: 5,
      featured: true,
      publishedAt: new Date().toISOString(),
    },
    {
      _id: 'mock-3',
      clientName: 'Ana Martínez',
      dogBreed: 'Labrador',
      content:
        'La mejor peluquería canina de la zona. Profesionalidad, cariño y buenos precios. Mi perro siempre sale feliz y guapísimo.',
      rating: 5,
      featured: true,
      publishedAt: new Date().toISOString(),
    },
    {
      _id: 'mock-4',
      clientName: 'Pedro López',
      dogBreed: 'Schnauzer',
      content:
        'Servicio impecable. José Antonio sabe mucho de razas y siempre me aconseja lo mejor para mi perro. Muy satisfecho.',
      rating: 5,
      featured: true,
      publishedAt: new Date().toISOString(),
    },
  ];

  const displayTestimonials =
    testimonials.length > 0 ? testimonials : mockTestimonials;

  // Auto-play del carousel
  useEffect(() => {
    if (!isAutoPlaying || displayTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === displayTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, displayTestimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? displayTestimonials.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === displayTestimonials.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-accent' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  if (displayTestimonials.length === 0) {
    return null;
  }

  const currentTestimonial = displayTestimonials[currentIndex];

  if (!currentTestimonial) {
    return null;
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            La satisfacción de nuestros clientes y sus mascotas es nuestra
            mayor recompensa
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Testimonial actual */}
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-light p-8 shadow-lg md:p-12">
              {/* Rating */}
              <div className="mb-4 flex justify-center">
                {renderStars(currentTestimonial.rating)}
              </div>

              {/* Contenido del testimonio */}
              <blockquote className="mb-6 text-center text-lg text-gray-700 md:text-xl">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Información del cliente */}
              <div className="text-center">
                <p className="font-semibold text-dark">
                  {currentTestimonial.clientName}
                </p>
                <p className="text-sm text-gray-500">
                  Dueño/a de {currentTestimonial.dogBreed}
                </p>
              </div>
            </div>
          </div>

          {/* Flechas de navegación */}
          {displayTestimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary md:-left-4"
                aria-label="Testimonio anterior"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary md:-right-4"
                aria-label="Siguiente testimonio"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots de navegación */}
        {displayTestimonials.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
