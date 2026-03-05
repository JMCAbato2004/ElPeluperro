import { Metadata } from 'next';
import { BookingForm } from '@/components/forms/BookingForm';
import { CONTACT_INFO } from '@/lib/config/contact';

export const metadata: Metadata = {
  title: 'Reservar Cita | El Peluperro',
  description:
    'Reserva tu cita para el servicio de peluquería canina móvil en Sevilla y Alcalá de Guadaíra. Servicio a domicilio para tu mascota.',
  openGraph: {
    title: 'Reservar Cita | El Peluperro',
    description:
      'Reserva tu cita para el servicio de peluquería canina móvil en Sevilla y Alcalá de Guadaíra.',
    type: 'website',
  },
};

export default function ReservarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Reserva tu Cita 🐕
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para
            confirmar tu cita. ¡Tu perrito te lo agradecerá!
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Servicio a Domicilio
            </h3>
            <p className="text-sm text-gray-600">
              Vamos a tu casa, sin estrés para tu mascota
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Horario Flexible
            </h3>
            <p className="text-sm text-gray-600">
              Adaptamos el horario a tu disponibilidad
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-2xl mb-2">✨</div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Profesional
            </h3>
            <p className="text-sm text-gray-600">
              Más de 10 años de experiencia
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <BookingForm />
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            ¿Tienes dudas? Llámanos al{' '}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="text-primary hover:underline font-semibold"
            >
              {CONTACT_INFO.phone}
            </a>{' '}
            o escríbenos por{' '}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
