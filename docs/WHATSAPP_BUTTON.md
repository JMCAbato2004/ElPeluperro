# Botón Flotante de WhatsApp

## Descripción

El botón flotante de WhatsApp está siempre visible en la esquina inferior derecha de todas las páginas del sitio web. Permite a los usuarios contactar directamente por WhatsApp con un solo clic.

## Ubicación del Componente

```
components/ui/WhatsAppButton.tsx
```

## Características

✅ **Siempre visible**: Botón flotante fijo en todas las páginas
✅ **Responsive**: Se adapta a móvil y desktop
✅ **Animación**: Efecto de pulso para llamar la atención
✅ **Tooltip**: Mensaje al pasar el cursor
✅ **Accesible**: ARIA labels y focus states
✅ **Mensaje predefinido**: Abre WhatsApp con un mensaje inicial

## Configuración

### Cambiar el Número de WhatsApp

El número se configura en `lib/config/contact.ts`:

```typescript
export const CONTACT_INFO = {
  // ...
  whatsapp: 'https://wa.me/34650220798',
  // ...
}
```

### Personalizar el Mensaje Inicial

Edita el archivo `components/ui/WhatsAppButton.tsx`:

```typescript
const message = encodeURIComponent(
  '¡Hola! Me gustaría solicitar información sobre los servicios de peluquería canina.'
);
```

**Ejemplos de mensajes:**

```typescript
// Para reservas
'¡Hola! Quiero reservar una cita para mi perro.'

// Para información general
'Hola, quisiera información sobre sus servicios.'

// Para precios
'¡Hola! ¿Podrían enviarme información sobre precios?'

// Sin mensaje predefinido (dejar vacío)
const message = '';
const whatsappUrl = CONTACT_INFO.whatsapp;
```

### Cambiar la Posición

Por defecto está en la esquina inferior derecha. Para cambiar la posición, edita las clases en `WhatsAppButton.tsx`:

```typescript
// Inferior derecha (actual)
className="fixed bottom-6 right-6 z-50 ..."

// Inferior izquierda
className="fixed bottom-6 left-6 z-50 ..."

// Superior derecha
className="fixed top-20 right-6 z-50 ..."
```

### Cambiar el Color

El botón usa el color oficial de WhatsApp (#25D366). Para cambiarlo:

```typescript
// Color actual (verde WhatsApp)
className="... bg-[#25D366] ... focus:ring-[#25D366]/50"

// Color personalizado (ejemplo: naranja de la marca)
className="... bg-primary ... focus:ring-primary/50"
```

### Cambiar el Tamaño

```typescript
// Tamaño actual
className="... h-14 w-14 ... md:h-16 md:w-16"

// Más pequeño
className="... h-12 w-12 ... md:h-14 md:w-14"

// Más grande
className="... h-16 w-16 ... md:h-20 md:w-20"
```

## Desactivar el Botón

Para desactivar temporalmente el botón, comenta la línea en `app/layout.tsx`:

```typescript
<Footer />
<CookieBanner />
<PWAInstallPrompt />
{/* <WhatsAppButton /> */}
```

## Ocultar en Páginas Específicas

Si quieres ocultar el botón en ciertas páginas, puedes usar el hook `usePathname`:

```typescript
'use client';

import { usePathname } from 'next/navigation';
import { CONTACT_INFO } from '@/lib/config/contact';

export function WhatsAppButton() {
  const pathname = usePathname();
  
  // Ocultar en la página de contacto
  if (pathname === '/contacto') {
    return null;
  }
  
  // ... resto del código
}
```

## Analíticas

Para rastrear clics en el botón de WhatsApp con Google Analytics:

```typescript
const handleClick = () => {
  // Google Analytics event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: 'floating_button',
    });
  }
};

return (
  <a
    href={whatsappUrl}
    onClick={handleClick}
    // ... resto de props
  >
```

## Accesibilidad

El botón incluye:
- `aria-label` descriptivo
- Estados de focus visibles
- Contraste de color adecuado
- Tamaño mínimo de 44x44px (WCAG)

## Compatibilidad

- ✅ Funciona en todos los navegadores modernos
- ✅ Compatible con móviles (abre la app de WhatsApp)
- ✅ Compatible con desktop (abre WhatsApp Web)
- ✅ No requiere JavaScript para funcionar (es un enlace)

## Notas

- El botón tiene `z-index: 50` para estar siempre visible
- La animación de pulso se puede desactivar eliminando la clase `animate-ping`
- El tooltip solo aparece en desktop (hover)
- En móvil, el botón es ligeramente más pequeño para no obstruir contenido
