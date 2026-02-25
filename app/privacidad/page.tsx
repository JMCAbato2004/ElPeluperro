import type { Metadata } from 'next';
import { CONTACT_INFO } from '@/lib/config/contact';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de El Peluperro. Información sobre el tratamiento de datos personales conforme al RGPD.',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-light py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-dark">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">1. Responsable del Tratamiento</h2>
            <p className="text-gray-700 mb-4">
              El responsable del tratamiento de sus datos personales es:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Nombre:</strong> José Antonio Camacho</li>
              <li><strong>Actividad:</strong> El Peluperro - Peluquería Canina Móvil</li>
              <li><strong>Dirección:</strong> {CONTACT_INFO.address.city}, {CONTACT_INFO.address.region}</li>
              <li><strong>Email:</strong> {CONTACT_INFO.email}</li>
              <li><strong>Teléfono:</strong> {CONTACT_INFO.phone}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">2. Datos que Recopilamos</h2>
            <p className="text-gray-700 mb-4">
              Recopilamos los siguientes tipos de datos personales:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Datos de contacto:</strong> nombre, email, teléfono, dirección</li>
              <li><strong>Datos de reserva:</strong> ciudad, tipo de servicio, fecha preferida, comentarios</li>
              <li><strong>Datos de navegación:</strong> cookies técnicas y analíticas (con su consentimiento)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">3. Finalidad del Tratamiento</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos sus datos personales para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Gestionar y confirmar sus reservas de servicios</li>
              <li>Responder a sus consultas y solicitudes de información</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">4. Base Legal del Tratamiento</h2>
            <p className="text-gray-700 mb-4">
              El tratamiento de sus datos se basa en:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Ejecución de contrato:</strong> para gestionar sus reservas y prestación de servicios</li>
              <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales y uso de cookies no esenciales</li>
              <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y responder a consultas</li>
              <li><strong>Obligación legal:</strong> para cumplir con requisitos legales y fiscales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">5. Conservación de Datos</h2>
            <p className="text-gray-700">
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos. 
              Los datos de reservas se conservarán durante el tiempo necesario para la prestación del servicio y posteriormente durante el 
              plazo de prescripción de las acciones legales que pudieran derivarse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">6. Destinatarios de los Datos</h2>
            <p className="text-gray-700 mb-4">
              Sus datos personales no serán cedidos a terceros, salvo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Cuando sea necesario para la prestación del servicio (proveedores de servicios tecnológicos)</li>
              <li>Cuando exista una obligación legal</li>
              <li>Con su consentimiento expreso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">7. Sus Derechos</h2>
            <p className="text-gray-700 mb-4">
              Conforme al RGPD, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Acceso:</strong> conocer qué datos personales tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos</li>
              <li><strong>Limitación:</strong> solicitar la limitación del tratamiento</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado</li>
              <li><strong>Retirar consentimiento:</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento anterior</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Para ejercer estos derechos, puede contactarnos en: <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a>
            </p>
            <p className="text-gray-700 mt-4">
              También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que 
              el tratamiento de sus datos no es conforme a la normativa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">8. Seguridad de los Datos</h2>
            <p className="text-gray-700">
              Hemos implementado medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, 
              la pérdida, la destrucción o el daño. Sin embargo, ningún sistema de transmisión por Internet o de almacenamiento electrónico 
              es completamente seguro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">9. Cambios en la Política de Privacidad</h2>
            <p className="text-gray-700">
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta 
              página con la fecha de actualización correspondiente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">10. Contacto</h2>
            <p className="text-gray-700">
              Si tiene alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, puede contactarnos en:
            </p>
            <ul className="list-none pl-0 text-gray-700 space-y-2 mt-4">
              <li><strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a></li>
              <li><strong>Teléfono:</strong> <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-primary hover:underline">{CONTACT_INFO.phone}</a></li>
              <li><strong>WhatsApp:</strong> <a href={CONTACT_INFO.whatsapp} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Enviar mensaje</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
