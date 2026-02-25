import Image from 'next/image';
import Link from 'next/link';

export default function MobileServiceSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Imagen de la furgoneta */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/Furgoneta.png"
                alt="Furgoneta de El Peluperro - Peluquería Canina Móvil"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decoración */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-primary/10"></div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              🚐 Servicio Móvil
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
              Vamos a tu casa
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Nuestro servicio de peluquería canina móvil lleva todo lo necesario 
              directamente a tu domicilio. Tu perro se sentirá más cómodo y relajado 
              en su entorno familiar.
            </p>

            {/* Beneficios */}
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-xl">🏠</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-dark">
                    Comodidad para ti y tu mascota
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sin necesidad de desplazamientos ni esperas. Ahorra tiempo y evita el estrés del transporte.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-dark">
                    Equipamiento profesional completo
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nuestra furgoneta está totalmente equipada con todo lo necesario para un servicio de calidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-xl">💚</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-dark">
                    Atención personalizada
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tu perro recibe toda nuestra atención sin distracciones de otros animales.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-dark">
                    Servicio en Sevilla y Alcalá de Guadaíra
                  </h3>
                  <p className="text-sm text-gray-600">
                    Cubrimos toda la zona metropolitana de Sevilla y alrededores.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/reservar"
                className="inline-block rounded-full bg-primary px-8 py-4 text-center text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
              >
                Reservar Cita
              </Link>
              <Link
                href="/sobre-nosotros"
                className="inline-block rounded-full border-2 border-primary px-8 py-4 text-center text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
