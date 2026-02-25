'use client';

import type { Metadata } from 'next';
import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-6xl">🐕</div>
        
        <h1 className="mb-4 text-3xl font-bold text-dark">
          Sin Conexión
        </h1>
        
        <p className="mb-8 text-lg text-gray-600">
          Parece que no tienes conexión a internet. Por favor, verifica tu conexión 
          e intenta de nuevo.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mb-4 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Reintentar
        </button>

        <div className="mt-8">
          <Link
            href="/"
            className="text-primary hover:underline"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
