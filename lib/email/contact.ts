import { Resend } from 'resend';
import type { ContactFormData } from '@/lib/validation';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Sends contact form notification email to admin
 */
export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, subject, message } = data;

  // Admin notification email
  const adminEmail = {
    from: 'El Peluperro <noreply@elpeluperro.com>',
    to: process.env.ADMIN_EMAIL || 'admin@elpeluperro.com',
    subject: `Nuevo Mensaje de Contacto - ${subject}`,
    html: `
      <h2>Nuevo Mensaje de Contacto</h2>
      <p>Se ha recibido un nuevo mensaje a través del formulario de contacto:</p>
      
      <h3>Datos del Remitente</h3>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        ${phone ? `<li><strong>Teléfono:</strong> ${phone}</li>` : ''}
      </ul>
      
      <h3>Asunto</h3>
      <p>${subject}</p>
      
      <h3>Mensaje</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><strong>Acción requerida:</strong> Responder al email ${email}</p>
    `,
    replyTo: email,
  };

  // Send email
  try {
    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend not configured, skipping email send');
      return;
    }

    await resend.emails.send(adminEmail);
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
}
