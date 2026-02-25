'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  onNavigate?: (direction: 'prev' | 'next') => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  onNavigate,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Guardar el elemento activo antes de abrir el modal
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Enfocar el modal
      modalRef.current?.focus();

      // Prevenir scroll del body
      document.body.style.overflow = 'hidden';

      // Manejar teclas
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        } else if (onNavigate) {
          if (e.key === 'ArrowLeft') {
            onNavigate('prev');
          } else if (e.key === 'ArrowRight') {
            onNavigate('next');
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';

        // Restaurar foco al elemento anterior
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'image-modal-title' : undefined}
    >
      <div
        ref={modalRef}
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 z-10 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Cerrar modal"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navegación anterior */}
        {onNavigate && (
          <button
            onClick={() => onNavigate('prev')}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Imagen anterior"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Imagen */}
        <div className="relative h-[80vh] w-[80vw]">
          <Image
            src={imageUrl}
            alt={title || 'Imagen ampliada'}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>

        {/* Navegación siguiente */}
        {onNavigate && (
          <button
            onClick={() => onNavigate('next')}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Imagen siguiente"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Título */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h2
              id="image-modal-title"
              className="text-center text-xl font-semibold text-white"
            >
              {title}
            </h2>
          </div>
        )}
      </div>

      {/* Instrucciones de navegación */}
      {onNavigate && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
          Usa las flechas ← → o ESC para navegar
        </div>
      )}
    </div>
  );
};

export default ImageModal;
