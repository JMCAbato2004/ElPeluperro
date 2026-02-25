import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email/contact';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data with Zod schema
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Datos de formulario inválidos',
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const contactData = validationResult.data;

    // Send email notification
    try {
      await sendContactEmail(contactData);
    } catch (emailError) {
      console.error('Error sending contact email:', emailError);
      // Continue even if email fails
    }

    // Log contact for debugging (in production, save to database)
    console.log('New contact message received:', {
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje recibido correctamente',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        error: 'Error al procesar el mensaje',
        message:
          'Hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.',
      },
      { status: 500 }
    );
  }
}
