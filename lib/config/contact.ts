// Configuración de contacto centralizada
// Modifica estos valores para actualizar el teléfono y email en todo el sitio

export const CONTACT_INFO = {
  // Teléfono
  phone: '650 220 798',
  phoneRaw: '650220798', // Sin espacios para enlaces tel:
  phoneInternational: '+34650220798', // Con código de país para WhatsApp
  
  // Email
  email: 'el.peluperro@gmail.com.com',
  adminEmail: 'el.peluperro@gmail.com.com', // Email para recibir formularios
  
  // Redes sociales
  whatsapp: 'https://wa.me/34650220798',
  instagram: 'https://www.instagram.com/elpeluperro',
  facebook: 'https://www.facebook.com/elpeluperro',
  twitter: 'https://twitter.com/elpeluperro',
  
  // Horario
  schedule: {
    weekdays: 'Lun-Vie: 9:00-19:00',
    saturday: 'Cerrado',
    sunday: 'Cerrado',
  },
  
  // Dirección
  address: {
    city: 'Mairena del Alcor',
    region: 'Sevilla',
    country: 'España',
  },
} as const;
