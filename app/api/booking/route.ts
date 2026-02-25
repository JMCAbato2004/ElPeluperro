import { NextRequest, NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/validation';
import { sendBookingEmail } from '@/lib/email/booking';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data with Zod schema
    const validationResult = bookingSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Datos de formulario inválidos',
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const bookingData = validationResult.data;

    // Send email notification
    try {
      await sendBookingEmail(bookingData);
    } catch (emailError) {
      console.error('Error sending booking email:', emailError);
      // Continue even if email fails - we don't want to fail the booking
    }

    // Log booking for debugging (in production, save to database)
    console.log('New booking received:', {
      name: bookingData.name,
      city: bookingData.city,
      serviceType: bookingData.serviceType,
      preferredDate: bookingData.preferredDate,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Reserva recibida correctamente',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      {
        error: 'Error al procesar la reserva',
        message:
          'Hubo un error al procesar tu reserva. Por favor, inténtalo de nuevo.',
      },
      { status: 500 }
    );
  }
}
