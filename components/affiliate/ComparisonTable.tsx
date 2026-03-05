'use client';

import Image from 'next/image';
import { Check, X, Star, Trophy } from 'lucide-react';
import { AffiliateLink } from './AffiliateLink';
import { formatPrice } from '@/lib/affiliate/utils';
import type { ComparisonProduct } from '@/lib/affiliate/types';

export interface ComparisonTableProps {
  products: ComparisonProduct[];
  features: string[];
  className?: string;
}

/**
 * Tabla de comparación de productos
 * Ideal para artículos de "Mejores X productos"
 * 
 * @example
 * <ComparisonTable 
 *   products={products}
 *   features={['Calidad', 'Precio', 'Durabilidad']}
 * />
 */
export function ComparisonTable({ 
  products, 
  features,
  className = '' 
}: ComparisonTableProps) {
  // Ordenar productos por rank si existe
  const sortedProducts = [...products].sort((a, b) => {
    if (a.rank && b.rank) return a.rank - b.rank;
    return 0;
  });

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="p-4 text-left font-bold text-dark">Producto</th>
            {features.map((feature) => (
              <th key={feature} className="p-4 text-center font-bold text-dark">
                {feature}
              </th>
            ))}
            <th className="p-4 text-center font-bold text-dark">Precio</th>
            <th className="p-4 text-center font-bold text-dark">Comprar</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product, index) => (
            <tr 
              key={product.id}
              className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                product.rank === 1 ? 'bg-primary/5' : ''
              }`}
            >
              {/* Columna de producto */}
              <td className="p-4">
                <div className="flex items-center gap-4">
                  {/* Rank badge */}
                  {product.rank && (
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold ${
                      product.rank === 1 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {product.rank === 1 ? <Trophy className="h-5 w-5" /> : `#${product.rank}`}
                    </div>
                  )}

                  {/* Imagen y nombre */}
                  <div className="flex items-center gap-3">
                    {product.image && (
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-dark">{product.name}</div>
                      {product.rating && (
                        <div className="mt-1 flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < product.rating! 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-xs text-gray-600">
                            {product.rating.toFixed(1)}
                          </span>
                        </div>
                      )}
                      {product.bestFor && (
                        <div className="mt-1 text-xs text-primary font-semibold">
                          {product.bestFor}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </td>

              {/* Columnas de características */}
              {features.map((feature) => (
                <td key={feature} className="p-4 text-center">
                  {/* Aquí podrías tener lógica para mostrar valores específicos */}
                  <Check className="mx-auto h-5 w-5 text-green-600" />
                </td>
              ))}

              {/* Columna de precio */}
              <td className="p-4 text-center">
                {product.price ? (
                  <div>
                    <div className="font-bold text-primary">
                      {formatPrice(product.price.amount, product.price.currency)}
                    </div>
                    {product.price.originalAmount && product.price.originalAmount > product.price.amount && (
                      <div className="text-xs text-gray-500 line-through">
                        {formatPrice(product.price.originalAmount, product.price.currency)}
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">Ver precio</span>
                )}
              </td>

              {/* Columna de compra */}
              <td className="p-4 text-center">
                <div className="flex flex-col gap-2">
                  {product.affiliateLinks.amazon && (
                    <AffiliateLink
                      href={product.affiliateLinks.amazon}
                      platform="amazon"
                      productId={product.id}
                      productName={product.name}
                      variant="button"
                      className="whitespace-nowrap bg-[#FF9900] px-4 py-2 text-sm hover:bg-[#FF9900]/90"
                      showIcon={false}
                    >
                      Amazon
                    </AffiliateLink>
                  )}
                  {product.affiliateLinks.tiendanimal && (
                    <AffiliateLink
                      href={product.affiliateLinks.tiendanimal}
                      platform="tiendanimal"
                      productId={product.id}
                      productName={product.name}
                      variant="button"
                      className="whitespace-nowrap bg-[#00A651] px-4 py-2 text-sm hover:bg-[#00A651]/90"
                      showIcon={false}
                    >
                      Tiendanimal
                    </AffiliateLink>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Nota al pie */}
      <div className="mt-4 text-center text-xs text-gray-500">
        Los precios pueden variar. Última actualización: {new Date().toLocaleDateString('es-ES')}
      </div>
    </div>
  );
}
