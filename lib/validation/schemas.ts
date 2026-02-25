import { z } from 'zod';

// Esquema de validación para formulario de reservas
export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  phone: z
    .string()
    .min(9, 'El teléfono debe tener al menos 9 dígitos')
    .regex(/^[0-9+\s()-]+$/, 'El teléfono solo puede contener números y símbolos válidos'),
  address: z
    .string()
    .min(5, 'La dirección debe tener al menos 5 caracteres')
    .max(200, 'La dirección no puede exceder 200 caracteres'),
  city: z
    .string()
    .min(1, 'Por favor selecciona una ciudad'),
  serviceType: z
    .string()
    .min(1, 'Por favor selecciona un tipo de servicio'),
  preferredDate: z
    .string()
    .min(1, 'Por favor selecciona una fecha preferida')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'La fecha debe ser hoy o posterior'),
  comments: z
    .string()
    .max(500, 'Los comentarios no pueden exceder 500 caracteres')
    .optional(),
});

// Esquema de validación para formulario de contacto
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z
    .string()
    .email('Por favor introduce un email válido'),
  phone: z
    .string()
    .min(9, 'El teléfono debe tener al menos 9 dígitos')
    .regex(/^[0-9+\s()-]+$/, 'El teléfono solo puede contener números y símbolos válidos')
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(3, 'El asunto debe tener al menos 3 caracteres')
    .max(150, 'El asunto no puede exceder 150 caracteres'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
});

// Tipos TypeScript derivados de los schemas
export type BookingFormData = z.infer<typeof bookingSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;

// Ciudades disponibles en la zona de cobertura
export const AVAILABLE_CITIES = [
  { value: 'alcala-de-guadaira', label: 'Alcalá de Guadaíra' },
  { value: 'sevilla', label: 'Sevilla' },
  { value: 'dos-hermanas', label: 'Dos Hermanas' },
  { value: 'mairena-del-alcor', label: 'Mairena del Alcor' },
  { value: 'el-viso-del-alcor', label: 'El Viso del Alcor' },
  { value: 'otra', label: 'Otra (consultar disponibilidad)' },
] as const;

// Tipos de servicios disponibles
export const SERVICE_TYPES = [
  { value: 'bano', label: 'Baño' },
  { value: 'peluqueria', label: 'Peluquería' },
  { value: 'antiparasitarios', label: 'Antiparasitarios' },
  { value: 'bano-peluqueria', label: 'Baño + Peluquería' },
  { value: 'completo', label: 'Servicio Completo' },
] as const;
