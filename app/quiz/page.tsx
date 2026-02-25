import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const DogQuiz = dynamic(() => import('@/components/interactive/DogQuiz').then(mod => ({ default: mod.DogQuiz })), {
  loading: () => (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando quiz...</p>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Quiz de Recomendación | El Peluperro',
  description:
    '¿No sabes qué servicios necesita tu perro? Responde nuestro quiz y te recomendaremos los mejores servicios para tu mascota.',
  openGraph: {
    title: 'Quiz de Recomendación | El Peluperro',
    description:
      '¿No sabes qué servicios necesita tu perro? Responde nuestro quiz y te recomendaremos los mejores servicios.',
    type: 'website',
  },
};

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">🐕</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Qué necesita tu perro?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Responde unas breves preguntas y te recomendaremos los servicios
            perfectos para tu peludo amigo
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="font-semibold text-gray-900 mb-1">2 minutos</h3>
            <p className="text-sm text-gray-600">Solo 5 preguntas rápidas</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-gray-900 mb-1">Personalizado</h3>
            <p className="text-sm text-gray-600">
              Recomendaciones específicas
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-2xl mb-2">💡</div>
            <h3 className="font-semibold text-gray-900 mb-1">Experto</h3>
            <p className="text-sm text-gray-600">
              Basado en +10 años de experiencia
            </p>
          </div>
        </div>

        {/* Quiz Component */}
        <DogQuiz />

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            ¿Prefieres hablar directamente con nosotros?{' '}
            <a
              href="/contacto"
              className="text-primary hover:underline font-semibold"
            >
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
