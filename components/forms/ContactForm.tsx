'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validation';
import { FormField } from './FormField';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      // Track successful contact form submission
      trackEvent('contact_submitted', {
        subject: data.subject,
      });

      setStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
      setErrorMessage(
        'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos por teléfono.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">✉️</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          ¡Mensaje Enviado!
        </h2>
        <p className="text-gray-600 mb-6">
          Gracias por contactarnos. Responderemos tu mensaje lo antes posible.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => setStatus('idle')} variant="outline">
            Enviar otro mensaje
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

      {/* Email */}
      <FormField label="Email" name="email" error={errors.email} required>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
      </FormField>

      {/* Phone (optional) */}
      <FormField
        label="Teléfono"
        name="phone"
        error={errors.phone}
        helperText="Opcional"
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

      {/* Subject */}
      <FormField
        label="Asunto"
        name="subject"
        error={errors.subject}
        required
      >
        <Input
          id="subject"
          type="text"
          placeholder="¿En qué podemos ayudarte?"
          {...register('subject')}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
      </FormField>

      {/* Message */}
      <FormField
        label="Mensaje"
        name="message"
        error={errors.message}
        required
      >
        <Textarea
          id="message"
          rows={6}
          placeholder="Escribe tu mensaje aquí..."
          {...register('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
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
          {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </div>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 text-center">
        Al enviar este formulario, aceptas nuestra{' '}
        <a href="/privacidad" className="text-primary hover:underline">
          Política de Privacidad
        </a>
        .
      </p>
    </form>
  );
}
