import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/config/contact';

export const metadata: Metadata = {
  title: 'Política de Afiliación',
  description: 'Política de afiliación y transparencia de El Peluperro. Información sobre enlaces de afiliación y comisiones.',
};

export default function AfiliacionPage() {
  return (
    <div className="min-h-screen bg-light py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-dark">Política de Afiliación</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">1. Compromiso con la Transparencia</h2>
            <p className="text-gray-700 mb-4">
              En El Peluperro creemos firmemente en la transparencia y la honestidad con nuestros lectores. Esta página 
              explica nuestra relación con los programas de afiliación y cómo pueden afectar al contenido que publicamos.
            </p>
            <p className="text-gray-700">
              Nuestro compromiso principal es siempre con usted, nuestro lector, proporcionando información precisa, 
              útil y basada en experiencia real con productos y servicios para el cuidado canino.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">2. ¿Qué son los Enlaces de Afiliación?</h2>
            <p className="text-gray-700 mb-4">
              Los enlaces de afiliación son enlaces especiales que contienen un código de seguimiento único. Cuando usted 
              hace clic en uno de estos enlaces y realiza una compra, nosotros podemos recibir una pequeña comisión del 
              vendedor, sin ningún coste adicional para usted.
            </p>
            <p className="text-gray-700">
              Estos enlaces nos ayudan a mantener este sitio web funcionando y a seguir creando contenido de calidad 
              de forma gratuita para nuestros lectores.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">3. Programas de Afiliación</h2>
            <p className="text-gray-700 mb-4">
              Actualmente participamos en los siguientes programas de afiliación:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-dark mb-3">Amazon Associates</h3>
              <p className="text-gray-700 mb-2">
                Somos participantes del Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados 
                diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e 
                incluyendo enlaces a Amazon.es y sitios web relacionados.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-dark mb-3">Tiendanimal Afiliados</h3>
              <p className="text-gray-700 mb-2">
                Participamos en el programa de afiliados de Tiendanimal, una de las tiendas online de productos para 
                mascotas más grandes de España.
              </p>
            </div>
            <p className="text-gray-700 mt-4 italic">
              Nota: Esta lista puede actualizarse periódicamente a medida que nos unamos a nuevos programas de afiliación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">4. Cómo Identificar Enlaces de Afiliación</h2>
            <p className="text-gray-700 mb-4">
              Nos esforzamos por hacer que los enlaces de afiliación sean fácilmente identificables:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Los enlaces de afiliación suelen incluir un icono de enlace externo</li>
              <li>En artículos de comparativas y reviews, incluimos un aviso de afiliación al inicio</li>
              <li>Los botones de compra en tarjetas de productos son enlaces de afiliación</li>
              <li>Todos los enlaces de afiliación incluyen los atributos rel="nofollow sponsored"</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">5. Nuestra Política Editorial</h2>
            <p className="text-gray-700 mb-4">
              Es importante que entienda cómo funcionan nuestras recomendaciones:
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 mb-4">
              <h3 className="text-lg font-semibold text-dark mb-3">Principios Fundamentales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Experiencia Real:</strong> Solo recomendamos productos que hemos probado personalmente o que conocemos bien a través de nuestra experiencia profesional</li>
                <li><strong>Honestidad:</strong> Compartimos tanto los pros como los contras de cada producto</li>
                <li><strong>Independencia:</strong> Las comisiones de afiliación NO influyen en nuestras recomendaciones</li>
                <li><strong>Actualización:</strong> Revisamos y actualizamos nuestras recomendaciones regularmente</li>
              </ul>
            </div>
            <p className="text-gray-700">
              Si un producto no cumple con nuestros estándares de calidad, no lo recomendaremos, independientemente 
              de la comisión de afiliación que pudiéramos recibir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">6. Comisiones y Precios</h2>
            <p className="text-gray-700 mb-4">
              Aspectos importantes sobre las comisiones:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Sin coste adicional:</strong> Usar nuestros enlaces de afiliación NO aumenta el precio que usted paga</li>
              <li><strong>Mismo precio:</strong> El precio es exactamente el mismo que si accediera directamente al sitio del vendedor</li>
              <li><strong>Comisión variable:</strong> Las comisiones que recibimos varían según el programa y el producto, típicamente entre el 1% y el 10% del precio de venta</li>
              <li><strong>Transparencia:</strong> No ocultamos que recibimos comisiones; es parte de nuestro modelo de negocio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">7. Productos Patrocinados vs. Afiliación</h2>
            <p className="text-gray-700 mb-4">
              Es importante distinguir entre diferentes tipos de contenido:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-dark mb-2">Contenido con Enlaces de Afiliación</h3>
              <p className="text-gray-700">
                Contenido creado de forma independiente basado en nuestra experiencia. Podemos recibir comisiones 
                si realiza una compra, pero el contenido no está patrocinado.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-dark mb-2">Contenido Patrocinado</h3>
              <p className="text-gray-700">
                Si alguna vez publicamos contenido patrocinado (pagado por una marca), lo indicaremos claramente 
                al inicio del artículo con una etiqueta "Contenido Patrocinado" o "Publicidad".
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              Actualmente, la mayoría de nuestro contenido contiene enlaces de afiliación, pero NO es contenido patrocinado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">8. Su Apoyo es Importante</h2>
            <p className="text-gray-700 mb-4">
              Al utilizar nuestros enlaces de afiliación, usted nos ayuda a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Mantener el sitio web funcionando (hosting, dominio, herramientas)</li>
              <li>Crear contenido nuevo y de calidad de forma regular</li>
              <li>Probar nuevos productos para poder recomendarlos</li>
              <li>Actualizar y mejorar el contenido existente</li>
              <li>Ofrecer todo nuestro contenido de forma gratuita</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Si encuentra útil nuestro contenido y decide realizar una compra, le agradecemos enormemente que 
              utilice nuestros enlaces de afiliación. Es una forma sencilla de apoyar nuestro trabajo sin ningún 
              coste adicional para usted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">9. Alternativas sin Afiliación</h2>
            <p className="text-gray-700">
              Usted siempre tiene la libertad de buscar los productos directamente en los sitios web de los vendedores 
              sin usar nuestros enlaces de afiliación. Nuestras recomendaciones y consejos siguen siendo válidos y útiles 
              independientemente de cómo elija realizar sus compras.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">10. Actualizaciones de esta Política</h2>
            <p className="text-gray-700">
              Nos reservamos el derecho de actualizar esta Política de Afiliación en cualquier momento. Los cambios 
              serán publicados en esta página con la fecha de actualización correspondiente. Le recomendamos revisar 
              esta página periódicamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark mb-4">11. Preguntas y Contacto</h2>
            <p className="text-gray-700 mb-4">
              Si tiene alguna pregunta sobre nuestra Política de Afiliación o sobre cómo trabajamos con enlaces 
              de afiliación, no dude en contactarnos:
            </p>
            <ul className="list-none pl-0 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a></li>
              <li><strong>Teléfono:</strong> <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-primary hover:underline">{CONTACT_INFO.phone}</a></li>
              <li><strong>WhatsApp:</strong> <a href={CONTACT_INFO.whatsapp} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Enviar mensaje</a></li>
            </ul>
            <p className="text-gray-700 mt-4">
              Para más información sobre cómo tratamos sus datos personales, consulte nuestra{' '}
              <Link href="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.
            </p>
          </section>

          <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg mt-8">
            <p className="text-dark font-semibold mb-2">
              💙 Gracias por su confianza
            </p>
            <p className="text-gray-700">
              Agradecemos su confianza en nuestras recomendaciones y su apoyo a través de los enlaces de afiliación. 
              Nuestro compromiso es seguir proporcionando contenido honesto, útil y basado en experiencia real para 
              ayudarle a cuidar mejor de su perro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
