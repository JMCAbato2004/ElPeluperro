import Link from 'next/link';
import { Info } from 'lucide-react';
import type { AffiliateDisclosureProps } from '@/lib/affiliate/types';

/**
 * Componente de disclosure de afiliación
 * Informa a los usuarios sobre los enlaces de afiliación
 * Requerido por las políticas de Amazon Associates y otros programas
 * 
 * @example
 * <AffiliateDisclosure variant="full" />
 */
export function AffiliateDisclosure({ 
  variant = 'full', 
  className = '' 
}: AffiliateDisclosureProps) {
  if (variant === 'inline') {
    return (
      <span className={`text-sm text-gray-600 ${className}`}>
        Este enlace es un enlace de afiliación.{' '}
        <Link href="/afiliacion" className="text-primary hover:underline">
          Más información
        </Link>
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`rounded-lg border border-primary/20 bg-primary/5 p-4 ${className}`}>
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <div className="text-sm text-gray-700">
            <strong className="text-dark">Aviso:</strong> Este artículo contiene enlaces de afiliación. 
            Si compras a través de ellos, recibimos una pequeña comisión sin coste adicional para ti.{' '}
            <Link href="/afiliacion" className="text-primary hover:underline font-semibold">
              Leer más
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Variant: full
  return (
    <div className={`rounded-xl border-2 border-primary/20 bg-primary/5 p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Info className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold text-dark">
            Transparencia y Honestidad
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Este artículo contiene <strong>enlaces de afiliación</strong>. Esto significa que si 
              haces clic en uno de estos enlaces y realizas una compra, podemos recibir una pequeña 
              comisión sin ningún coste adicional para ti.
            </p>
            <p>
              <strong className="text-primary">Importante:</strong> Solo recomendamos productos que 
              hemos probado personalmente o que conocemos bien a través de nuestra experiencia 
              profesional. Estas comisiones nos ayudan a mantener este sitio gratuito y a seguir 
              creando contenido de calidad.
            </p>
            <p>
              Para más detalles sobre cómo trabajamos con enlaces de afiliación, lee nuestra{' '}
              <Link href="/afiliacion" className="font-semibold text-primary hover:underline">
                Política de Afiliación completa
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
