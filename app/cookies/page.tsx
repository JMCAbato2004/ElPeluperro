import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/config/contact';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de El Peluperro. Información sobre el uso de cookies en nuestro sitio web.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-light py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-dark">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="text-gray-700">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita 
              nuestro sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, 
              para que no tenga que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">2. ¿Qué Cookies Utilizamos?</h2>
            
            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">2.1. Cookies Esenciales</h3>
            <p className="text-gray-700 mb-4">
              Estas cookies son necesarias para el funcionamiento básico del sitio web y no pueden ser desactivadas. 
              Generalmente solo se establecen en respuesta a acciones realizadas por usted, como establecer sus preferencias 
              de privacidad, iniciar sesión o completar formularios.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold">Cookie</th>
                    <th className="text-left py-2 font-semibold">Finalidad</th>
                    <th className="text-left py-2 font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">cookie_consent</td>
                    <td className="py-2">Almacena las preferencias de cookies del usuario</td>
                    <td className="py-2">1 año</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">session_id</td>
                    <td className="py-2">Mantiene la sesión del usuario</td>
                    <td className="py-2">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">2.2. Cookies Analíticas</h3>
            <p className="text-gray-700 mb-4">
              Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento 
              de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares, y a ver cómo los visitantes 
              se mueven por el sitio.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold">Cookie</th>
                    <th className="text-left py-2 font-semibold">Finalidad</th>
                    <th className="text-left py-2 font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_ga</td>
                    <td className="py-2">Google Analytics - Distingue usuarios</td>
                    <td className="py-2">2 años</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_ga_*</td>
                    <td className="py-2">Google Analytics - Mantiene el estado de la sesión</td>
                    <td className="py-2">2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">2.3. Cookies de Marketing</h3>
            <p className="text-gray-700 mb-4">
              Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. 
              Pueden ser utilizadas por esas empresas para crear un perfil de sus intereses y mostrarle anuncios 
              relevantes en otros sitios.
            </p>
            <p className="text-gray-700 italic">
              Actualmente no utilizamos cookies de marketing en nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">3. ¿Cómo Gestionar las Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su 
              ordenador y puede configurar la mayoría de los navegadores para evitar que se coloquen.
            </p>
            
            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Configuración del Navegador</h3>
            <p className="text-gray-700 mb-4">
              La mayoría de los navegadores web permiten cierto control de la mayoría de las cookies a través de la 
              configuración del navegador. Para obtener más información sobre las cookies, incluido cómo ver qué cookies 
              se han establecido y cómo administrarlas y eliminarlas, visite:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Banner de Consentimiento</h3>
            <p className="text-gray-700">
              En su primera visita a nuestro sitio web, se le mostrará un banner de consentimiento de cookies donde 
              podrá aceptar o rechazar el uso de cookies no esenciales. Puede cambiar sus preferencias en cualquier 
              momento haciendo clic en el enlace "Configuración de Cookies" en el pie de página.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">4. Cookies de Terceros</h2>
            <p className="text-gray-700 mb-4">
              Algunos servicios de terceros que utilizamos pueden establecer sus propias cookies en su dispositivo. 
              Estos servicios incluyen:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
              <li><strong>Google Maps:</strong> Para mostrar mapas interactivos</li>
            </ul>
            <p className="text-gray-700 mt-4">
              No tenemos control sobre estas cookies de terceros. Para más información sobre cómo estos servicios 
              utilizan las cookies, consulte sus respectivas políticas de privacidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">5. Actualizaciones de esta Política</h2>
            <p className="text-gray-700">
              Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en las cookies que 
              utilizamos o por otras razones operativas, legales o reglamentarias. Le recomendamos que revise esta 
              página periódicamente para estar informado sobre nuestro uso de cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">6. Más Información</h2>
            <p className="text-gray-700 mb-4">
              Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:
            </p>
            <ul className="list-none pl-0 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a></li>
              <li><strong>Teléfono:</strong> <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-primary hover:underline">{CONTACT_INFO.phone}</a></li>
            </ul>
            <p className="text-gray-700 mt-4">
              Para más información sobre cómo tratamos sus datos personales, consulte nuestra{' '}
              <Link href="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
