# Estructura del Proyecto El Peluperro

## Directorios Principales

### `/app` - Next.js App Router

Contiene todas las rutas y páginas de la aplicación usando el App Router de Next.js 14.

- `layout.tsx` - Layout raíz con metadata global
- `page.tsx` - Página de inicio
- `globals.css` - Estilos globales y tema de Tailwind CSS
- `/api` - API routes para formularios y backend

### `/components` - Componentes React

#### `/components/ui`

Componentes de interfaz reutilizables:

- Button - Botones con variantes (primary, secondary, outline, ghost)
- Card - Tarjetas para mostrar contenido
- Modal - Modales con gestión de foco
- Carousel - Carrusel para testimonios y galerías
- Input, Select, Textarea - Componentes de formulario

#### `/components/sections`

Secciones de página:

- Hero - Sección principal de la homepage
- Services - Sección de servicios destacados
- Testimonials - Carrusel de testimonios
- Gallery - Galería de fotos antes/después

#### `/components/forms`

Componentes de formularios:

- BookingForm - Formulario de reserva de citas
- ContactForm - Formulario de contacto
- FormField - Wrapper reutilizable para campos de formulario

#### `/components/interactive`

Elementos interactivos:

- PriceCalculator - Calculadora de precios
- DogQuiz - Quiz de recomendación de servicios
- ServiceAreaMap - Mapa de zona de cobertura con Leaflet

### `/lib` - Utilidades y Configuración

#### `/lib/sanity`

Cliente y queries de Sanity CMS:

- `client.ts` - Configuración del cliente de Sanity
- `queries.ts` - Queries GROQ para obtener contenido

#### `/lib/email`

Configuración de servicio de email:

- Templates de email para notificaciones
- Funciones para enviar emails con Resend

#### `/lib/validation`

Esquemas de validación con Zod:

- `schemas.ts` - Esquemas para formularios (booking, contact, quiz)

#### `/lib/utils`

Funciones auxiliares:

- `generateSlug()` - Genera slugs URL-friendly
- `calculateReadingTime()` - Calcula tiempo de lectura
- `isInServiceArea()` - Valida zona de cobertura
- `formatPhoneNumber()` - Formatea números de teléfono
- `formatPriceRange()` - Formatea rangos de precio
- `cn()` - Combina clases CSS condicionalmente

### `/types` - TypeScript Types

Definiciones de tipos e interfaces:

- `Service` - Servicios de peluquería
- `BlogPost` - Artículos del blog
- `Testimonial` - Testimonios de clientes
- `GalleryItem` - Items de galería antes/después
- `BookingData` - Datos de reserva
- `ContactData` - Datos de contacto
- `QuizQuestion`, `QuizResult` - Quiz interactivo

### `/public` - Assets Estáticos

- `/icons` - Iconos de PWA (192x192, 512x512)
- `/images` - Imágenes estáticas (logo, placeholders)
- `manifest.json` - Manifest de PWA

## Archivos de Configuración

### `next.config.ts`

Configuración de Next.js:

- Optimización de imágenes
- Dominios permitidos para imágenes (Sanity CDN)
- Headers de seguridad
- Configuración de PWA

### `tsconfig.json`

Configuración de TypeScript:

- Strict mode habilitado
- Path aliases (`@/*`)
- Opciones adicionales de seguridad de tipos

### `tailwind.config.ts`

Configuración de Tailwind CSS v4:

- Colores de marca personalizados
- Tema extendido
- Plugins adicionales

### `.prettierrc`

Configuración de Prettier:

- Semi: true
- Single quotes: true
- Print width: 100
- Tab width: 2
- Plugin de Tailwind CSS

### `eslint.config.mjs`

Configuración de ESLint:

- Reglas de Next.js
- Reglas de TypeScript
- Reglas de accesibilidad

### `.env.local.template`

Template de variables de entorno:

- Sanity CMS (Project ID, Dataset, API Token)
- Email Service (Resend API Key)
- Google Analytics
- Site URL

## Colores de Marca

Los colores están definidos en `app/globals.css`:

```css
--brand-primary: #ff6b35; /* Naranja cálido */
--brand-secondary: #4ecdc4; /* Turquesa */
--brand-accent: #ffe66d; /* Amarillo suave */
--brand-dark: #2c3e50; /* Azul oscuro */
--brand-light: #f7f9fb; /* Gris muy claro */
```

Uso en Tailwind:

```tsx
<div className="bg-primary text-white">...</div>
<button className="bg-secondary hover:bg-secondary/90">...</button>
```

## Flujo de Datos

### Contenido desde Sanity CMS

1. Cliente de Sanity en `/lib/sanity/client.ts`
2. Queries GROQ en `/lib/sanity/queries.ts`
3. Fetch de datos en Server Components
4. Renderizado en componentes

### Formularios

1. Validación con Zod en `/lib/validation/schemas.ts`
2. Componente de formulario con React Hook Form
3. Envío a API route en `/app/api/[endpoint]/route.ts`
4. Procesamiento y envío de email
5. Respuesta al usuario

### Imágenes

1. Imágenes subidas a Sanity CMS
2. URLs servidas desde Sanity CDN
3. Optimización automática con Next.js Image
4. Lazy loading con Intersection Observer

## Próximos Pasos

1. Configurar Sanity CMS (Tarea 2)
2. Implementar componentes UI base (Tarea 3)
3. Crear Layout y navegación (Tarea 4)
4. Implementar páginas principales (Tareas 5-15)
5. Optimizar rendimiento y SEO (Tareas 17-18)
6. Implementar PWA (Tarea 23)
7. Deployment a Vercel (Tarea 30)
