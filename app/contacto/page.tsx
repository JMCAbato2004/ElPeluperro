import { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import ServiceAreaMapWrapper from '@/components/interactive/ServiceAreaMapWrapper';
import { CONTACT_INFO } from '@/lib/config/contact';

export const metadata: Metadata = {
  title: 'Contacto | El Peluperro',
  description:
    'Contacta con El Peluperro, tu peluquería canina móvil en Sevilla y Alcalá de Guadaíra. Teléfono, email, WhatsApp y horario de atención.',
  openGraph: {
    title: 'Contacto | El Peluperro',
    description:
      'Contacta con El Peluperro, tu peluquería canina móvil en Sevilla y Alcalá de Guadaíra.',
    type: 'website',
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contacta con Nosotros 📞
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Contáctanos y
            te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📱</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Teléfono
                    </h3>
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="text-primary hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="text-2xl mr-4">💬</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href={CONTACT_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="text-2xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-primary hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🕐</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Horario de Atención
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {CONTACT_INFO.schedule.weekdays}
                      <br />
                      {CONTACT_INFO.schedule.saturday}
                      <br />
                      {CONTACT_INFO.schedule.sunday}
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Zona de Cobertura
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.region}, Dos Hermanas, Mairena del
                      Alcor, El Viso del Alcor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nuestra Zona de Servicio
              </h2>
              <div className="h-64 rounded-lg overflow-hidden">
                <ServiceAreaMapWrapper />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  ¿Cuánto tiempo tarda el servicio?
                </h3>
                <p className="text-gray-600 text-sm">
                  Depende del servicio y tamaño del perro, pero generalmente
                  entre 1-2 horas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  ¿Necesito estar en casa durante el servicio?
                </h3>
                <p className="text-gray-600 text-sm">
                  Sí, es necesario que alguien esté presente para cuidar de tu
                  mascota.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  ¿Qué formas de pago aceptan?
                </h3>
                <p className="text-gray-600 text-sm">
                  Aceptamos efectivo, tarjeta y transferencia bancaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
