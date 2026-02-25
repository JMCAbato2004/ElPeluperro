'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface Service {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number;
}

const SERVICES: Service[] = [
  { id: 'bano', name: 'Baño', priceMin: 15, priceMax: 30 },
  { id: 'peluqueria', name: 'Peluquería', priceMin: 25, priceMax: 50 },
  { id: 'antiparasitarios', name: 'Antiparasitarios', priceMin: 10, priceMax: 20 },
  { id: 'corte-unas', name: 'Corte de Uñas', priceMin: 5, priceMax: 10 },
  { id: 'limpieza-oidos', name: 'Limpieza de Oídos', priceMin: 5, priceMax: 10 },
];

type DogSize = 'pequeno' | 'mediano' | 'grande' | 'gigante';

const DOG_SIZES = [
  { id: 'pequeno' as DogSize, name: 'Pequeño', description: 'Hasta 10kg', multiplier: 1 },
  { id: 'mediano' as DogSize, name: 'Mediano', description: '10-25kg', multiplier: 1.3 },
  { id: 'grande' as DogSize, name: 'Grande', description: '25-40kg', multiplier: 1.6 },
  { id: 'gigante' as DogSize, name: 'Gigante', description: 'Más de 40kg', multiplier: 2 },
];

export function PriceCalculator() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [dogSize, setDogSize] = useState<DogSize | null>(null);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const priceEstimate = useMemo(() => {
    if (selectedServices.length === 0 || !dogSize) {
      return null;
    }

    const sizeMultiplier = DOG_SIZES.find((s) => s.id === dogSize)?.multiplier || 1;
    
    let minTotal = 0;
    let maxTotal = 0;

    selectedServices.forEach((serviceId) => {
      const service = SERVICES.find((s) => s.id === serviceId);
      if (service) {
        minTotal += service.priceMin * sizeMultiplier;
        maxTotal += service.priceMax * sizeMultiplier;
      }
    });

    return {
      min: Math.round(minTotal),
      max: Math.round(maxTotal),
    };
  }, [selectedServices, dogSize]);

  const handleBooking = () => {
    router.push('/reservar');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Calculadora de Precios 💰
      </h2>

      {/* Services Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Selecciona los servicios
        </h3>
        <div className="space-y-3">
          {SERVICES.map((service) => (
            <label
              key={service.id}
              className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedServices.includes(service.id)}
                onChange={() => toggleService(service.id)}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
              />
              <div className="ml-3 flex-1">
                <span className="font-medium text-gray-900">{service.name}</span>
                <span className="text-sm text-gray-500 ml-2">
                  ({service.priceMin}€ - {service.priceMax}€)
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Dog Size Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Tamaño de tu perro
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {DOG_SIZES.map((size) => (
            <label
              key={size.id}
              className={`flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                dogSize === size.id
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="dogSize"
                value={size.id}
                checked={dogSize === size.id}
                onChange={() => setDogSize(size.id)}
                className="sr-only"
              />
              <span className="font-medium text-gray-900">{size.name}</span>
              <span className="text-sm text-gray-500">{size.description}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Estimate */}
      {priceEstimate ? (
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Precio estimado</p>
            <p className="text-4xl font-bold text-gray-900">
              {priceEstimate.min}€ - {priceEstimate.max}€
            </p>
            <p className="text-xs text-gray-500 mt-2">
              * Precio orientativo. El precio final puede variar según el estado del pelaje y necesidades específicas.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
          <p className="text-gray-600">
            Selecciona al menos un servicio y el tamaño de tu perro para ver el precio estimado
          </p>
        </div>
      )}

      {/* Action Button */}
      <Button
        onClick={handleBooking}
        className="w-full"
        disabled={!priceEstimate}
      >
        {priceEstimate ? 'Reservar con estos servicios' : 'Selecciona servicios para continuar'}
      </Button>

      {/* Info Note */}
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>Nota:</strong> Los precios pueden variar según el estado del pelaje, comportamiento del perro y servicios adicionales necesarios. Te confirmaremos el precio exacto al reservar.
        </p>
      </div>
    </div>
  );
}
