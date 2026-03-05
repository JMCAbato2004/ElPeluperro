import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | El Peluperro',
  description:
    'Conoce a José Antonio Camacho y El Peluperro. Más de 10 años de experiencia en peluquería canina móvil en Sevilla y Alcalá de Guadaíra.',
  openGraph: {
    title: 'Sobre Nosotros | El Peluperro',
    description:
      'Conoce a José Antonio Camacho y El Peluperro. Más de 10 años de experiencia en peluquería canina móvil.',
    type: 'website',
  },
};

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Sobre Nosotros 🐕
            </h1>
            <p className="text-xl text-gray-600">
              Cuidando de tus mejores amigos desde hace más de 10 años
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Owner Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                <Image
                  src="/images/jose-antonio.jpg"
                  alt="José Antonio Camacho - Fundador de El Peluperro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full -z-10" />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                José Antonio Camacho
              </h2>
              <p className="text-lg text-primary font-semibold mb-4">
                Fundador y Peluquero Canino Profesional
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Hola, soy José Antonio Camacho, el fundador de El Peluperro.
                  Mi pasión por los animales comenzó desde muy joven, y después
                  de más de 10 años dedicándome profesionalmente a la
                  peluquería canina, puedo decir que cada día amo más lo que
                  hago.
                </p>
                <p>
                  Me especialicé en peluquería canina profesional y he trabajado
                  con todo tipo de razas y temperamentos. Mi objetivo siempre ha
                  sido proporcionar un servicio de calidad donde tu mascota se
                  sienta cómoda y segura.
                </p>
                <p>
                  En 2015 decidí dar un paso más y crear El Peluperro, un
                  servicio de peluquería canina móvil que lleva la comodidad
                  directamente a tu hogar. Porque entiendo que para muchos
                  perros, salir de casa puede ser estresante.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-gray-700">
                  <span className="text-primary mr-2">✓</span>
                  Certificado en Peluquería Canina Profesional
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-primary mr-2">✓</span>
                  Más de 10 años de experiencia
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-primary mr-2">✓</span>
                  Especializado en razas de pelo largo y rizado
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-primary mr-2">✓</span>
                  Formación en manejo de perros con ansiedad
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Service Concept */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Imagen de la furgoneta */}
          <div className="mb-12">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/Furgoneta.png"
                alt="Furgoneta de El Peluperro - Peluquería Canina Móvil equipada profesionalmente"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              ¿Por qué un Servicio Móvil? 🚐
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Llevamos la peluquería canina directamente a tu puerta, eliminando
              el estrés del transporte y proporcionando un ambiente familiar
              para tu mascota.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comodidad Total
                </h3>
                <p className="text-gray-600">
                  Tu perro se queda en su entorno familiar, reduciendo el estrés
                  y la ansiedad del desplazamiento.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ahorra Tiempo
                </h3>
                <p className="text-gray-600">
                  No necesitas desplazarte ni esperar. Nosotros vamos a ti y
                  trabajamos mientras tú sigues con tu día.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">👁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Atención Personalizada
                </h3>
                <p className="text-gray-600">
                  Servicio uno a uno, sin prisas ni distracciones. Tu perro
                  recibe toda mi atención.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestra Misión y Valores 💙
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-700">
                Proporcionar servicios de peluquería canina de la más alta
                calidad, priorizando siempre el bienestar y la comodidad de tu
                mascota. Queremos que cada visita sea una experiencia positiva
                tanto para el perro como para su familia.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 border border-secondary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestros Valores
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">❤️</span>
                  <span>
                    <strong>Amor por los animales:</strong> Cada perro es único
                    y merece ser tratado con cariño y respeto.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">🎯</span>
                  <span>
                    <strong>Profesionalidad:</strong> Formación continua y uso
                    de productos de calidad.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">🤝</span>
                  <span>
                    <strong>Confianza:</strong> Construimos relaciones duraderas
                    con nuestros clientes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestra Historia 📅
          </h2>

          <div className="space-y-8">
            {/* Timeline Item */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  2010
                </div>
                <div className="w-1 flex-1 bg-primary/30 mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Los Inicios
                </h3>
                <p className="text-gray-600">
                  Comienzo mi formación profesional en peluquería canina,
                  trabajando en diferentes establecimientos de Sevilla.
                </p>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  2015
                </div>
                <div className="w-1 flex-1 bg-primary/30 mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nace El Peluperro
                </h3>
                <p className="text-gray-600">
                  Fundación de El Peluperro como servicio de peluquería canina
                  móvil en Alcalá de Guadaíra, con el objetivo de llevar la
                  comodidad a los hogares.
                </p>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  2018
                </div>
                <div className="w-1 flex-1 bg-primary/30 mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expansión del Servicio
                </h3>
                <p className="text-gray-600">
                  Ampliamos nuestra zona de cobertura a Sevilla y localidades
                  cercanas, llegando a más familias y sus mascotas.
                </p>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                  Hoy
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Creciendo Juntos
                </h3>
                <p className="text-gray-600">
                  Más de 1000 clientes satisfechos y cientos de perritos felices.
                  Seguimos mejorando cada día para ofrecer el mejor servicio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para conocernos?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Reserva tu primera cita y descubre por qué tantas familias confían
              en nosotros para el cuidado de sus mascotas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservar"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary hover:bg-gray-100 font-semibold transition-colors"
              >
                Reservar Cita
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white/10 font-semibold transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
