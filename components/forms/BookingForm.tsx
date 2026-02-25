'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  bookingSchema,
  type BookingFormData,
  AVAILABLE_CITIES,
  SERVICE_TYPES,
} from '@/lib/validation';
import { FormField } from './FormField';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { isInServiceArea } from '@/lib/utils/serviceArea';
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function BookingForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const selectedCity = watch('city');
  const isOutOfArea = selectedCity && !isInServiceArea(selectedCity);

  const onSubmit = async (data: BookingFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la reserva');
      }

      // Track successful booking submission
      trackEvent('booking_submitted', {
        service_type: data.serviceType,
        city: data.city,
        in_service_area: isInServiceArea(data.city),
      });

      setStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      setStatus('error');
      setErrorMessage(
        'Hubo un error al enviar tu reserva. Por favor, inténtalo de nuevo o contáctanos por teléfono.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          ¡Reserva Recibida!
        </h2>
        <p className="text-gray-600 mb-6">
          Gracias por confiar en El Peluperro. Nos pondremos en contacto
          contigo pronto para confirmar tu cita.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">
            Próximos pasos:
          </h3>
          <ul className="text-sm text-blue-800 text-left space-y-1">
            <li>✓ Recibirás un email de confirmación</li>
            <li>✓ Te llamaremos para confirmar fecha y hora</li>
            <li>✓ Prepara a tu perrito para su sesión de belleza</li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => setStatus('idle')} variant="outline">
            Hacer otra reserva
          </Button>
          <Button onClick={() => (window.location.href = '/')}>
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <FormField
        label="Nombre completo"
        name="name"
        error={errors.name}
        required
      >
        <Input
          id="name"
          type="text"
          placeholder="Tu nombre"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
      </FormField>

      {/* Phone */}
      <FormField
        label="Teléfono"
        name="phone"
        error={errors.phone}
        helperText="Incluye el prefijo si es necesario"
        required
      >
        <Input
          id="phone"
          type="tel"
          placeholder="+34 123 456 789"
          {...register('phone')}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
      </FormField>

      {/* Address */}
      <FormField
        label="Dirección"
        name="address"
        error={errors.address}
        helperText="Calle, número, piso, etc."
        required
      >
        <Input
          id="address"
          type="text"
          placeholder="Calle Principal, 123, 2ºA"
          {...register('address')}
          aria-invalid={errors.address ? 'true' : 'false'}
          aria-describedby={errors.address ? 'address-error' : undefined}
        />
      </FormField>

      {/* City */}
      <FormField label="Ciudad" name="city" error={errors.city} required>
        <select
          id="city"
          {...register('city')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-invalid={errors.city ? 'true' : 'false'}
          aria-describedby={errors.city ? 'city-error' : undefined}
        >
          <option value="">Selecciona tu ciudad</option>
          {AVAILABLE_CITIES.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
      </FormField>

      {/* Out of area warning */}
      {isOutOfArea && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <span className="text-yellow-600 mr-2">⚠️</span>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-1">
                Fuera de zona habitual
              </h4>
              <p className="text-sm text-yellow-800">
                La ciudad seleccionada está fuera de nuestra zona de cobertura
                habitual. Nos pondremos en contacto contigo para confirmar
                disponibilidad. Puede aplicar un suplemento por desplazamiento.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Service Type */}
      <FormField
        label="Tipo de servicio"
        name="serviceType"
        error={errors.serviceType}
        required
      >
        <select
          id="serviceType"
          {...register('serviceType')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-invalid={errors.serviceType ? 'true' : 'false'}
          aria-describedby={
            errors.serviceType ? 'serviceType-error' : undefined
          }
        >
          <option value="">Selecciona un servicio</option>
          {SERVICE_TYPES.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </FormField>

      {/* Preferred Date */}
      <FormField
        label="Fecha preferida"
        name="preferredDate"
        error={errors.preferredDate}
        helperText="Selecciona tu fecha preferida, te confirmaremos disponibilidad"
        required
      >
        <Input
          id="preferredDate"
          type="date"
          min={new Date().toISOString().split('T')[0]}
          {...register('preferredDate')}
          aria-invalid={errors.preferredDate ? 'true' : 'false'}
          aria-describedby={
            errors.preferredDate ? 'preferredDate-error' : undefined
          }
        />
      </FormField>

      {/* Comments */}
      <FormField
        label="Comentarios adicionales"
        name="comments"
        error={errors.comments}
        helperText="Cuéntanos sobre tu perro: raza, tamaño, temperamento, necesidades especiales..."
      >
        <Textarea
          id="comments"
          rows={4}
          placeholder="Mi perro es un Golden Retriever de 3 años, muy tranquilo..."
          {...register('comments')}
          aria-invalid={errors.comments ? 'true' : 'false'}
          aria-describedby={errors.comments ? 'comments-error' : undefined}
        />
      </FormField>

      {/* Error Message */}
      {status === 'error' && (
        <div
          className="bg-red-50 border border-red-200 rounded-lg p-4"
          role="alert"
        >
          <div className="flex items-start">
            <span className="text-red-600 mr-2">❌</span>
            <p className="text-sm text-red-800">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          className="w-full"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Enviando...' : 'Reservar Cita'}
        </Button>
      </div>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 text-center">
        Al enviar este formulario, aceptas nuestra{' '}
        <a href="/privacidad" className="text-primary hover:underline">
          Política de Privacidad
        </a>
        . Tus datos serán tratados de forma confidencial.
      </p>
    </form>
  );
}
