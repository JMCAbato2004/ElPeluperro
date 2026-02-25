# Configuración de Contacto Centralizada

## Ubicación

El archivo de configuración de contacto está en:
```
lib/config/contact.ts
```

## Cómo Modificar el Teléfono y Email

Para cambiar el teléfono o email en todo el sitio web, simplemente edita el archivo `lib/config/contact.ts`:

```typescript
export const CONTACT_INFO = {
  // Teléfono
  phone: '612 345 678',              // Formato visible para usuarios
  phoneRaw: '612345678',             // Sin espacios para enlaces tel:
  phoneInternational: '+34612345678', // Con código de país para WhatsApp
  
  // Email
  email: 'info@elpeluperro.com',
  adminEmail: 'info@elpeluperro.com', // Email para recibir formularios
  
  // Redes sociales
  whatsapp: 'https://wa.me/34612345678',
  instagram: 'https://www.instagram.com/elpeluperro',
  facebook: 'https://www.facebook.com/elpeluperro',
  twitter: 'https://twitter.com/elpeluperro',
  
  // Horario
  schedule: {
    weekdays: 'Lun-Vie: 9:00-19:00',
    saturday: 'Sáb: 10:00-14:00',
    sunday: 'Cerrado',
  },
  
  // Dirección
  address: {
    city: 'Alcalá de Guadaíra',
    region: 'Sevilla',
    country: 'España',
  },
}
```

## Dónde se Usa

Esta configuración se importa y utiliza automáticamente en:

- **Header** (`components/layout/Header.tsx`)
  - Teléfono en la barra de navegación
  - Teléfono en el menú móvil

- **Footer** (`components/layout/Footer.tsx`)
  - Teléfono
  - Email
  - WhatsApp
  - Redes sociales
  - Horario

- **Página de Contacto** (`app/contacto/page.tsx`)
  - Teléfono
  - Email
  - WhatsApp
  - Horario
  - Dirección

- **Política de Privacidad** (`app/privacidad/page.tsx`)
  - Email
  - Teléfono
  - WhatsApp
  - Dirección

- **Política de Cookies** (`app/cookies/page.tsx`)
  - Email
  - Teléfono

- **Layout Principal** (`app/layout.tsx`)
  - Schema.org (SEO)
  - Redes sociales
  - Dirección

## Ventajas

✅ **Un solo lugar para actualizar**: Cambia el teléfono o email una vez y se actualiza en todo el sitio

✅ **Sin errores**: No hay riesgo de olvidar actualizar algún lugar

✅ **Fácil mantenimiento**: Cualquier persona puede encontrar y modificar la información de contacto

✅ **Consistencia**: Garantiza que la información sea la misma en todas las páginas

## Ejemplo de Uso en Código

```typescript
import { CONTACT_INFO } from '@/lib/config/contact';

// Usar el teléfono
<a href={`tel:${CONTACT_INFO.phoneRaw}`}>
  {CONTACT_INFO.phone}
</a>

// Usar el email
<a href={`mailto:${CONTACT_INFO.email}`}>
  {CONTACT_INFO.email}
</a>

// Usar WhatsApp
<a href={CONTACT_INFO.whatsapp}>
  Enviar mensaje
</a>
```

## Notas Importantes

- **phoneRaw**: Usa este formato sin espacios para los enlaces `tel:`
- **phoneInternational**: Usa este formato con código de país (+34) para WhatsApp
- **phone**: Usa este formato con espacios para mostrar al usuario
- Después de modificar el archivo, reinicia el servidor de desarrollo para ver los cambios
