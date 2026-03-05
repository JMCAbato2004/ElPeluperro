import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Award, Heart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Mí - José Antonio Camacho | El Peluperro',
  description:
    'Conoce a José Antonio Camacho, peluquero canino profesional con más de X años de experiencia. Descubre por qué puedes confiar en mis recomendaciones sobre cuidado canino.',
  openGraph: {
    title: 'Sobre Mí - José Antonio Camacho | El Peluperro',
    description:
      'Peluquero canino profesional con experiencia real. Conoce mi historia, metodología y por qué puedes confiar en mis recomendaciones.',
    type: 'profile',
  },
};

export default function SobreMiPage() {
  // Person schema markup para E-E-A-T
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'José Antonio Camacho',
    jobTitle: 'Peluquero Canino Profesional',
    description:
      'Peluquero canino profesional con más de X años de experiencia en Sevilla y Alcalá de Guadaíra. Especializado en cuidado y estética canina.',
    url: 'https://elpeluperro.com/sobre-mi',
    image: 'https://elpeluperro.com/images/jose-antonio-camacho.jpg',
    sameAs: [
      'https://www.facebook.com/elpeluperro',
      'https://www.instagram.com/elpeluperro',
    ],
    knowsAbout: [
      'Peluquería Canina',
      'Cuidado de Mascotas',
      'Higiene Canina',
      'Estética Canina',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Peluquero Canino',
      occupationLocation: {
        '@type': 'City',
        name: 'Sevilla',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <div className="min-h-screen bg-light">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Texto */}
              <div>
                <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
                  Hola, soy José Antonio Camacho
                </h1>
                <p className="mb-6 text-xl text-gray-700 md:text-2xl">
                  Peluquero canino profesional y tu guía de confianza para el cuidado de tu perro
                </p>
                <p className="mb-8 text-lg text-gray-600">
                  Llevo más de <strong className="text-primary">[X] años</strong> dedicándome profesionalmente 
                  a la peluquería canina en Sevilla y Alcalá de Guadaíra. He tenido el privilegio de cuidar 
                  a más de <strong className="text-primary">[X] perros</strong> de todas las razas y tamaños, 
                  y cada día aprendo algo nuevo de estos maravillosos compañeros.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/servicios"
                    className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
                  >
                    Mis Servicios
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-block rounded-full border-2 border-primary px-8 py-3 text-lg font-semibold text-primary transition-all hover:bg-primary/5"
                  >
                    Leer el Blog
                  </Link>
                </div>
              </div>

              {/* Foto */}
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-2xl">
                  {/* TODO: Reemplazar con foto real de José Antonio */}
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="text-center">
                      <div className="mb-4 text-8xl">👨‍⚕️</div>
                      <p className="text-gray-600">Foto de José Antonio Camacho</p>
                      <p className="text-sm text-gray-500">(Pendiente de añadir)</p>
                    </div>
                  </div>
                </div>
                {/* Badges flotantes */}
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">[X]+</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                </div>
                <div className="absolute -left-4 -top-4 rounded-xl bg-white p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">[X]+</div>
                    <div className="text-sm text-gray-600">Perros atendidos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mi Historia */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-dark md:text-4xl">Mi Historia</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Mi pasión por los perros comenzó desde muy joven. Crecí rodeado de mascotas y siempre 
                supe que quería dedicar mi vida profesional a su cuidado. Después de formarme como 
                peluquero canino y trabajar en varias peluquerías, decidí dar el paso de crear 
                <strong> El Peluperro</strong>, mi propio servicio de peluquería canina móvil.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La idea de llevar el servicio a domicilio surgió al ver cómo muchos perros sufrían 
                estrés al ser transportados a la peluquería. Pensé: ¿y si en lugar de que ellos vengan 
                a mí, yo voy a ellos? Así nació mi furgoneta totalmente equipada, que me permite ofrecer 
                un servicio profesional en la comodidad del hogar de cada cliente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A lo largo de estos [X] años, he tenido el privilegio de trabajar con perros de todas 
                las razas, tamaños y temperamentos. Desde cachorros nerviosos en su primer baño hasta 
                perros senior que necesitan cuidados especiales. Cada uno me ha enseñado algo diferente 
                y ha enriquecido mi experiencia profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Por Qué Confiar en Mí */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
                ¿Por Qué Puedes Confiar en Mis Recomendaciones?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                No soy solo un blogger que escribe sobre perros. Soy un profesional que trabaja 
                con ellos todos los días.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Experiencia Real */}
              <div className="rounded-xl bg-primary/5 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark">Experiencia Real</h3>
                <p className="text-gray-600">
                  Trabajo diariamente con perros reales, no solo escribo sobre teoría. Veo los 
                  resultados de primera mano.
                </p>
              </div>

              {/* Productos Probados */}
              <div className="rounded-xl bg-secondary/5 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark">Productos Probados</h3>
                <p className="text-gray-600">
                  Uso personalmente los productos que recomiendo en mi furgoneta de peluquería. 
                  Conozco qué funciona y qué no.
                </p>
              </div>

              {/* Conocimiento de Razas */}
              <div className="rounded-xl bg-primary/5 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark">Conocimiento de Razas</h3>
                <p className="text-gray-600">
                  He trabajado con más de [X] razas diferentes. Conozco las necesidades específicas 
                  de cada una.
                </p>
              </div>

              {/* Formación Continua */}
              <div className="rounded-xl bg-secondary/5 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark">Formación Continua</h3>
                <p className="text-gray-600">
                  Me mantengo actualizado con las últimas técnicas y productos del sector mediante 
                  formación continua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mi Metodología */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-dark md:text-4xl">
              Mi Metodología de Prueba de Productos
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl border-l-4 border-primary bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-dark">1. Uso Real en Mi Trabajo</h3>
                <p className="text-gray-700">
                  Cuando recomiendo un champú, cepillo o cualquier producto, es porque lo he usado 
                  personalmente en mi furgoneta de peluquería. No me baso en especificaciones del 
                  fabricante, sino en resultados reales.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-secondary bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-dark">2. Prueba con Múltiples Perros</h3>
                <p className="text-gray-700">
                  Antes de recomendar un producto, lo pruebo con al menos 10-15 perros diferentes 
                  de distintas razas y tipos de pelaje. Esto me permite ver cómo funciona en 
                  diferentes situaciones.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-primary bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-dark">3. Evaluación Completa</h3>
                <p className="text-gray-700">
                  Evalúo cada producto en varios aspectos: efectividad, facilidad de uso, relación 
                  calidad-precio, seguridad para el perro, y durabilidad. Solo recomiendo productos 
                  que yo mismo usaría con mi propio perro.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-secondary bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-dark">4. Actualización Constante</h3>
                <p className="text-gray-700">
                  El mercado de productos para mascotas evoluciona constantemente. Reviso y actualizo 
                  mis recomendaciones regularmente cuando aparecen nuevos productos o cuando mi 
                  experiencia con un producto cambia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificaciones y Formación */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-dark md:text-4xl">
              Certificaciones y Formación
            </h2>
            <div className="space-y-4">
              {/* TODO: Añadir certificaciones reales */}
              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold text-dark">[Nombre de Certificación]</h3>
                  <p className="text-gray-600">[Institución] - [Año]</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold text-dark">[Nombre de Curso]</h3>
                  <p className="text-gray-600">[Institución] - [Año]</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold text-dark">[Nombre de Formación]</h3>
                  <p className="text-gray-600">[Institución] - [Año]</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              * Añadir certificaciones y formación real de José Antonio
            </p>
          </div>
        </section>

        {/* Transparencia y Afiliación */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-dark md:text-4xl">
              Transparencia y Honestidad
            </h2>
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-8">
              <h3 className="mb-4 text-2xl font-bold text-dark">
                Sobre los Enlaces de Afiliación
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Quiero ser completamente transparente contigo: algunos de los enlaces de productos 
                  en este sitio son enlaces de afiliación. Esto significa que si compras un producto 
                  a través de uno de estos enlaces, recibo una pequeña comisión sin ningún coste 
                  adicional para ti.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary">Sin embargo, esto NO influye en mis recomendaciones.</strong> Solo 
                  recomiendo productos que he probado personalmente y que usaría (y uso) con mi propio 
                  perro. Si un producto no cumple mis estándares de calidad, no lo recomendaré, 
                  independientemente de la comisión.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Estas comisiones me ayudan a mantener este sitio gratuito y a seguir creando 
                  contenido de calidad para ti. Es una forma de apoyar mi trabajo sin que te cueste 
                  nada extra.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Para más detalles, puedes leer mi{' '}
                  <Link href="/afiliacion" className="text-primary hover:underline font-semibold">
                    Política de Afiliación completa
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mis Servicios Locales */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
              ¿Estás en Sevilla o Alcalá de Guadaíra?
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Si vives en mi zona de cobertura, puedo llevar mi servicio de peluquería canina 
              profesional directamente a tu domicilio. Tu perro estará más cómodo y relajado 
              en su propio entorno.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/servicios"
                className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
              >
                Ver Mis Servicios
              </Link>
              <Link
                href="/reservar"
                className="inline-block rounded-full border-2 border-primary bg-white px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-primary/5"
              >
                Reservar Cita
              </Link>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
              ¿Tienes Alguna Pregunta?
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Me encantaría escucharte. Ya sea que tengas una pregunta sobre cuidado canino, 
              quieras sugerir un tema para el blog, o simplemente quieras saludar.
            </p>
            <Link
              href="/contacto"
              className="inline-block rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-secondary/90"
            >
              Contactar
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
