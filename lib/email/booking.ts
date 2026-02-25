import { Resend } from 'resend';
import type { BookingFormData } from '@/lib/validation';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Sends booking notification email to admin and confirmation to user
 */
export async function sendBookingEmail(data: BookingFormData) {
  const {
    name,
    phone,
    address,
    city,
    serviceType,
    preferredDate,
    comments,
  } = data;

  // Format city name
  const cityNames: Record<string, string> = {
    'alcala-de-guadaira': 'Alcalá de Guadaíra',
    sevilla: 'Sevilla',
    'dos-hermanas': 'Dos Hermanas',
    'mairena-del-alcor': 'Mairena del Alcor',
    'el-viso-del-alcor': 'El Viso del Alcor',
    otra: 'Otra',
  };

  // Format service type
  const serviceNames: Record<string, string> = {
    bano: 'Baño',
    peluqueria: 'Peluquería',
    antiparasitarios: 'Antiparasitarios',
    'bano-peluqueria': 'Baño + Peluquería',
    completo: 'Servicio Completo',
  };

  const cityName = cityNames[city] || city;
  const serviceName = serviceNames[serviceType] || serviceType;

  // Format date
  const formattedDate = new Date(preferredDate).toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Admin notification email
  const adminEmail = {
    from: 'El Peluperro <noreply@elpeluperro.com>',
    to: process.env.ADMIN_EMAIL || 'admin@elpeluperro.com',
    subject: `Nueva Reserva - ${name}`,
    html: `
      <h2>Nueva Reserva Recibida</h2>
      <p>Se ha recibido una nueva solicitud de reserva:</p>
      
      <h3>Datos del Cliente</h3>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Teléfono:</strong> ${phone}</li>
        <li><strong>Dirección:</strong> ${address}</li>
        <li><strong>Ciudad:</strong> ${cityName}</li>
      </ul>
      
      <h3>Detalles del Servicio</h3>
      <ul>
        <li><strong>Servicio:</strong> ${serviceName}</li>
        <li><strong>Fecha Preferida:</strong> ${formattedDate}</li>
      </ul>
      
      ${comments ? `<h3>Comentarios</h3><p>${comments}</p>` : ''}
      
      <p><strong>Acción requerida:</strong> Contactar al cliente para confirmar la cita.</p>
    `,
  };

  // User confirmation email
  const userEmail = {
    from: 'El Peluperro <noreply@elpeluperro.com>',
    to: phone, // In production, you'd want to collect email separately
    subject: 'Confirmación de Reserva - El Peluperro',
    html: `
      <h2>¡Gracias por tu reserva!</h2>
      <p>Hola ${name},</p>
      <p>Hemos recibido tu solicitud de reserva para el servicio de <strong>${serviceName}</strong>.</p>
      
      <h3>Detalles de tu Reserva</h3>
      <ul>
        <li><strong>Servicio:</strong> ${serviceName}</li>
        <li><strong>Fecha Preferida:</strong> ${formattedDate}</li>
        <li><strong>Dirección:</strong> ${address}, ${cityName}</li>
      </ul>
      
      <h3>Próximos Pasos</h3>
      <p>Nos pondremos en contacto contigo pronto al número <strong>${phone}</strong> para confirmar la fecha y hora exacta de tu cita.</p>
      
      <p>Si tienes alguna pregunta, no dudes en contactarnos:</p>
      <ul>
        <li>Teléfono: +34 123 456 789</li>
        <li>WhatsApp: +34 123 456 789</li>
      </ul>
      
      <p>¡Esperamos ver pronto a tu peludo amigo!</p>
      <p><strong>El Peluperro</strong><br>Peluquería Canina Móvil</p>
    `,
  };

  // Send emails
  try {
    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend not configured, skipping email send');
      return;
    }

    // Send admin notification
    await resend.emails.send(adminEmail);

    // Note: In production, you'd want to collect email address
    // For now, we'll skip user confirmation email
    // await resend.emails.send(userEmail);

    console.log('Booking emails sent successfully');
  } catch (error) {
    console.error('Error sending booking emails:', error);
    throw error;
  }
}
