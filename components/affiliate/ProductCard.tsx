'use client';

import Image from 'next/image';
import { Star, Check, X } from 'lucide-react';
import { AffiliateLink } from './AffiliateLink';
import { formatPrice } from '@/lib/affiliate/utils';
import type { Product } from '@/lib/affiliate/types';

export interface ProductCardProps {
  product: Product;
  showProsCons?: boolean;
  featured?: boolean;
  className?: string;
}

/**
 * Tarjeta de producto con enlaces de afiliación
 * 
 * @example
 * <ProductCard 
 *   product={product} 
 *   showProsCons={true}
 *   featured={true}
 * />
 */
export function ProductCard({ 
  product, 
  showProsCons = false,
  featured = false,
  className = '' 
}: ProductCardProps) {
  const hasAmazonLink = !!product.affiliateLinks.amazon;
  const hasTiendanimalLink = !!product.affiliateLinks.tiendanimal;
  const hasDiscount = product.price?.originalAmount && product.price.originalAmount > product.price.amount;

  return (
    <div 
      className={`relative overflow-hidden rounded-xl border-2 bg-white shadow-md transition-all hover:shadow-xl ${
        featured ? 'border-primary' : 'border-gray-200'
      } ${className}`}
    >
      {/* Badge de destacado */}
      {featured && (
        <div className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
          ⭐ Recomendado
        </div>
      )}

      {/* Imagen del producto */}
      <div className="relative aspect-square bg-gray-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-6xl">📦</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Nombre del producto */}
        <h3 className="mb-2 text-xl font-bold text-dark">{product.name}</h3>

        {/* Rating */}
        {product.rating && (
          <div className="mb-3 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {product.rating.toFixed(1)}
            </span>
          </div>
        )}

        {/* Descripción */}
        {product.description && (
          <p className="mb-4 text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
        )}

        {/* Pros y Contras */}
        {showProsCons && (product.pros || product.cons) && (
          <div className="mb-4 space-y-2">
            {product.pros && product.pros.length > 0 && (
              <div>
                <div className="mb-1 text-xs font-semibold text-green-700">PROS:</div>
                <ul className="space-y-1">
                  {product.pros.slice(0, 3).map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.cons && product.cons.length > 0 && (
              <div>
                <div className="mb-1 text-xs font-semibold text-red-700">CONTRAS:</div>
                <ul className="space-y-1">
                  {product.cons.slice(0, 3).map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Precio */}
        {product.price && (
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                {formatPrice(product.price.amount, product.price.currency)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.price.originalAmount!, product.price.currency)}
                  </span>
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-700">
                    -{Math.round(((product.price.originalAmount! - product.price.amount) / product.price.originalAmount!) * 100)}%
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Enlaces de compra */}
        <div className="space-y-2">
          {hasAmazonLink && (
            <AffiliateLink
              href={product.affiliateLinks.amazon!}
              platform="amazon"
              productId={product.id}
              productName={product.name}
              variant="button"
              className="w-full justify-center bg-[#FF9900] hover:bg-[#FF9900]/90"
              showIcon={false}
            >
              Ver en Amazon
            </AffiliateLink>
          )}
          {hasTiendanimalLink && (
            <AffiliateLink
              href={product.affiliateLinks.tiendanimal!}
              platform="tiendanimal"
              productId={product.id}
              productName={product.name}
              variant="button"
              className="w-full justify-center bg-[#00A651] hover:bg-[#00A651]/90"
              showIcon={false}
            >
              Ver en Tiendanimal
            </AffiliateLink>
          )}
        </div>
      </div>
    </div>
  );
}
