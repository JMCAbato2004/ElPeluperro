import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PriceCalculator = dynamic(() => import('@/components/interactive/PriceCalculator').then(mod => ({ default: mod.PriceCalculator })), {
  loading: () => (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando calculadora...</p>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Calculadora de Precios | El Peluperro',
  description:
    'Calcula el precio estimado de los servicios de peluquería canina para tu perro. Selecciona los servicios y el tamaño de tu mascota.',
  openGraph: {
    title: 'Calculadora de Precios | El Peluperro',
    description:
      'Calcula el precio estimado de los servicios de peluquería canina para tu perro.',
    type: 'website',
  },
};

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">💰</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calculadora de Precios
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecciona los servicios que necesitas y el tamaño de tu perro para
            obtener un precio estimado
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <span className="text-blue-600 text-xl mr-3">ℹ️</span>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                Precios orientativos
              </h3>
              <p className="text-sm text-blue-800">
                Los precios mostrados son estimaciones. El precio final puede
                variar según el estado del pelaje, comportamiento del perro y
                servicios adicionales necesarios. Te confirmaremos el precio
                exacto al reservar tu cita.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Component */}
        <PriceCalculator />

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              ¿No estás seguro?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Responde nuestro quiz y te recomendaremos los servicios perfectos
              para tu perro
            </p>
            <a
              href="/quiz"
              className="text-primary hover:underline font-semibold text-sm"
            >
              Hacer el quiz →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              ¿Tienes dudas?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Contáctanos y te ayudaremos a elegir los mejores servicios para
              tu mascota
            </p>
            <a
              href="/contacto"
              className="text-primary hover:underline font-semibold text-sm"
            >
              Contactar →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
