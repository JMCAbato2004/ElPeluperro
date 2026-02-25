# Design Document: El Peluperro Website Rebuild

## Overview

Este documento describe el diseño técnico para la reconstrucción completa del sitio web de El Peluperro, una peluquería canina móvil que opera en Alcalá de Guadaíra y Sevilla. El proyecto implementará una Progressive Web App (PWA) moderna, divertida e interactiva que mantiene la identidad visual existente de la marca mientras proporciona funcionalidades avanzadas como sistema de reservas online, galería de trabajos, blog de consejos, y elementos interactivos.

### Objetivos Principales

- Crear una experiencia web moderna y responsive que funcione perfectamente en todos los dispositivos
- Implementar un sistema de reservas online que facilite la solicitud de citas
- Proporcionar contenido valioso a través de un blog gestionable
- Mantener la identidad visual actual (logo y colores de marca)
- Optimizar para SEO y rendimiento (score 90+ en PageSpeed Insights y Lighthouse PWA)
- Implementar funcionalidad PWA para instalación como app nativa

### Stack Tecnológico Propuesto

**Frontend Framework:** Next.js 14+ (App Router)

- Renderizado híbrido (SSR/SSG) para optimización SEO
- Soporte nativo para PWA
- Optimización automática de imágenes
- Rutas basadas en sistema de archivos

**Styling:** Tailwind CSS + CSS Modules

- Diseño responsive mobile-first
- Utilidades para animaciones y transiciones
- Personalización de tema con colores de marca

**CMS:** Sanity.io (Headless CMS)

- Editor WYSIWYG para artículos del blog
- Gestión de imágenes optimizada
- API GraphQL/REST para contenido
- Preview en tiempo real

**Formularios y Validación:** React Hook Form + Zod

- Validación de esquemas type-safe
- Manejo eficiente de formularios
- Mensajes de error personalizados

**Mapas:** Leaflet.js

- Mapa interactivo de zona de cobertura
- Ligero y sin dependencias de APIs de pago

**Notificaciones:** Resend o SendGrid

- Envío de emails para solicitudes de cita
- Notificaciones de formulario de contacto

**Hosting:** Vercel

- Despliegue automático desde Git
- Edge functions para rendimiento global
- Soporte nativo para Next.js

**Analytics:** Google Analytics 4 + Vercel Analytics

- Seguimiento de conversiones
- Métricas de rendimiento

## Architecture

### Arquitectura General

El sistema seguirá una arquitectura JAMstack (JavaScript, APIs, Markup) con las siguientes capas:

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer (Browser)                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Next.js App (React Components)                │  │
│  │  - Pages & Routing                                    │  │
│  │  - UI Components                                      │  │
│  │  - Client-side State Management                      │  │
│  │  - Service Worker (PWA)                              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/HTTPS
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Next.js API Routes / Server Actions           │  │
│  │  - Form Submission Handlers                          │  │
│  │  - Email Notification Logic                          │  │
│  │  - Data Validation                                   │  │
│  │  - CMS Content Fetching                              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ API Calls
┌─────────────────────────────────────────────────────────────┐
│                    External Services                         │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │  Sanity CMS  │  │ Email Service│  │  Image CDN      │  │
│  │  (Content)   │  │ (Resend/SG)  │  │  (Sanity/Next)  │  │
│  └──────────────┘  └──────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Estructura de Directorios

```
elpeluperro-website/
├── public/
│   ├── icons/              # PWA icons (192x192, 512x512)
│   ├── images/             # Imágenes estáticas (logo, placeholders)
│   └── manifest.json       # PWA manifest
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (main)/         # Grupo de rutas principales
│   │   │   ├── page.tsx    # Homepage
│   │   │   ├── servicios/
│   │   │   ├── galeria/
│   │   │   ├── blog/
│   │   │   ├── sobre-nosotros/
│   │   │   ├── contacto/
│   │   │   └── reservar/
│   │   ├── api/            # API routes
│   │   │   ├── booking/
│   │   │   └── contact/
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── ui/             # Componentes UI reutilizables
│   │   ├── sections/       # Secciones de página
│   │   ├── forms/          # Componentes de formularios
│   │   └── interactive/    # Quiz, calculadora
│   ├── lib/                # Utilidades y configuración
│   │   ├── sanity/         # Cliente y queries de Sanity
│   │   ├── email/          # Configuración de email
│   │   ├── validation/     # Esquemas Zod
│   │   └── utils/          # Funciones auxiliares
│   ├── types/              # TypeScript types
│   └── styles/             # CSS modules adicionales
├── sanity/                 # Sanity Studio
│   ├── schemas/            # Esquemas de contenido
│   └── sanity.config.ts
├── next.config.js
├── tailwind.config.js
└── package.json
```

### Patrones de Diseño

**Component-Based Architecture:** Todos los elementos UI serán componentes React reutilizables y composables.

**Server Components por Defecto:** Usar React Server Components para contenido estático y SEO, reservando Client Components solo para interactividad.

**Progressive Enhancement:** La funcionalidad básica funcionará sin JavaScript, mejorando con interactividad cuando esté disponible.

**Mobile-First Design:** Diseñar primero para móvil, luego escalar a tablets y escritorio.

**Atomic Design:** Organizar componentes en niveles (atoms, molecules, organisms) para máxima reutilización.

## Components and Interfaces

### Core Components

#### Layout Components

**Header**

```typescript
interface HeaderProps {
  transparent?: boolean;
  fixed?: boolean;
}

// Incluye: logo, navegación principal, botón CTA "Reservar Cita", teléfono
// Responsive: hamburger menu en móvil
```

**Footer**

```typescript
interface FooterProps {
  showNewsletter?: boolean;
}

// Incluye: enlaces rápidos, redes sociales, información de contacto,
// enlaces legales (privacidad, cookies)
```

**Navigation**

```typescript
interface NavigationProps {
  items: NavItem[];
  mobile?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
```

#### Page Components

**HomePage**

- Hero section con animación de perritos
- Servicios destacados (cards)
- Testimonios (carousel)
- CTA para reservar cita
- Mapa de zona de cobertura

**ServicesPage**

```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  priceRange: { min: number; max: number };
  duration: string;
  images: string[];
  features: string[];
}
```

**GalleryPage**

```typescript
interface GalleryItem {
  id: string;
  before: string; // URL imagen antes
  after: string; // URL imagen después
  serviceType: string;
  dogBreed?: string;
  description?: string;
}

// Filtrado por tipo de servicio
// Modal para vista ampliada
// Lazy loading de imágenes
```

**BlogPage**

```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: PortableText; // Sanity rich text
  author: string;
  publishedAt: Date;
  category: string;
  tags: string[];
  featuredImage: string;
  readingTime: number;
}

// Lista de posts con paginación
// Búsqueda y filtrado por categoría
// Post individual con contenido completo
```

#### Form Components

**BookingForm**

```typescript
interface BookingFormData {
  name: string;
  phone: string;
  address: string;
  city: string;
  serviceType: string;
  preferredDate: Date;
  comments?: string;
}

// Validación de zona de cobertura
// Selector de fecha con calendario
// Dropdown de servicios
// Confirmación visual tras envío
```

**ContactForm**

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
```

#### Interactive Components

**PriceCalculator**

```typescript
interface PriceCalculatorProps {
  services: Service[];
}

interface CalculatorState {
  selectedServices: string[];
  dogSize: 'small' | 'medium' | 'large' | 'xlarge';
  breed?: string;
  estimatedPrice: { min: number; max: number };
}

// Selección múltiple de servicios
// Selector de tamaño de perro
// Cálculo dinámico de precio
// Disclaimer de precio orientativo
```

**DogQuiz**

```typescript
interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

interface QuizOption {
  text: string;
  value: string;
  weight: Record<string, number>; // Peso para cada servicio
}

interface QuizResult {
  recommendedServices: string[];
  explanation: string;
}

// 5-7 preguntas sobre estado del perro
// Lógica de scoring para recomendar servicios
// Resultado con explicación y CTA para reservar
```

**ServiceAreaMap**

```typescript
interface ServiceAreaMapProps {
  center: [number, number]; // [lat, lng]
  zoom: number;
  coveredAreas: Area[];
}

interface Area {
  name: string;
  coordinates: [number, number][]; // Polígono
  type: 'primary' | 'secondary';
}

// Mapa interactivo con Leaflet
// Marcadores para Alcalá de Guadaíra y Sevilla
// Polígonos de zona de cobertura
// Controles de zoom y navegación
```

#### UI Components

**Button**

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}
```

**Card**

```typescript
interface CardProps {
  image?: string;
  title: string;
  description: string;
  footer?: ReactNode;
  hover?: boolean; // Efecto hover con elevación
}
```

**Modal**

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

**Carousel**

```typescript
interface CarouselProps {
  items: ReactNode[];
  autoplay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}
```

### API Interfaces

**Booking API**

```typescript
// POST /api/booking
interface BookingRequest {
  name: string;
  phone: string;
  address: string;
  city: string;
  serviceType: string;
  preferredDate: string; // ISO date
  comments?: string;
}

interface BookingResponse {
  success: boolean;
  message: string;
  bookingId?: string;
}
```

**Contact API**

```typescript
// POST /api/contact
interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}
```

**Blog API (Sanity)**

```typescript
// GET /api/blog/posts
interface BlogPostsQuery {
  category?: string;
  tag?: string;
  search?: string;
  page?: number;
  limit?: number;
}

interface BlogPostsResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  totalPages: number;
}
```

### External Service Integrations

**Sanity CMS**

```typescript
// Cliente configurado con API version y dataset
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
});
```

**Email Service (Resend)**

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
}
```

## Data Models

### Sanity CMS Schemas

**Blog Post Schema**

```typescript
{
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.max(200)
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'José Antonio Camacho'
    }
  ]
}
```

**Category Schema**

```typescript
{
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
```

**Testimonial Schema**

```typescript
{
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'dogBreed',
      title: 'Dog Breed',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      validation: Rule => Rule.required().max(500)
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    },
    {
      name: 'image',
      title: 'Client Photo',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }
  ]
}
```

**Gallery Item Schema**

```typescript
{
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Baño', value: 'bath' },
          { title: 'Peluquería', value: 'grooming' },
          { title: 'Antiparasitarios', value: 'antiparasitic' }
        ]
      }
    },
    {
      name: 'dogBreed',
      title: 'Dog Breed',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ]
}
```

**Service Schema**

```typescript
{
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'priceMin',
      title: 'Minimum Price',
      type: 'number'
    },
    {
      name: 'priceMax',
      title: 'Maximum Price',
      type: 'number'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'images',
      title: 'Service Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon identifier for UI'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ]
}
```

### TypeScript Types

**Domain Types**

```typescript
// types/domain.ts

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceMin: number;
  priceMax: number;
  duration: string;
  features: string[];
  images: string[];
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: any; // PortableText
  featuredImage: string;
  category: Category;
  tags: string[];
  publishedAt: Date;
  author: string;
  readingTime: number;
}

export interface Category {
  title: string;
  slug: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  dogBreed: string;
  content: string;
  rating: number;
  image?: string;
  featured: boolean;
  publishedAt: Date;
}

export interface GalleryItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  serviceType: 'bath' | 'grooming' | 'antiparasitic';
  dogBreed?: string;
  description?: string;
}

export interface BookingData {
  name: string;
  phone: string;
  address: string;
  city: string;
  serviceType: string;
  preferredDate: Date;
  comments?: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
```

### Validation Schemas (Zod)

```typescript
// lib/validation/schemas.ts
import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z.string().regex(/^[6-9]\d{8}$/, 'Teléfono inválido'),
  address: z.string().min(5, 'La dirección debe tener al menos 5 caracteres'),
  city: z.enum(['alcala-de-guadaira', 'sevilla'], {
    errorMap: () => ({ message: 'Selecciona una ciudad válida' }),
  }),
  serviceType: z.string().min(1, 'Selecciona un servicio'),
  preferredDate: z.date().min(new Date(), 'La fecha debe ser futura'),
  comments: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z
    .string()
    .regex(/^[6-9]\d{8}$/, 'Teléfono inválido')
    .optional(),
  subject: z.string().min(3, 'El asunto debe tener al menos 3 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export const quizAnswerSchema = z.object({
  questionId: z.string(),
  selectedOption: z.string(),
});
```

### PWA Configuration

**manifest.json**

```json
{
  "name": "El Peluperro - Peluquería Canina Móvil",
  "short_name": "El Peluperro",
  "description": "Peluquería canina móvil en Alcalá de Guadaíra y Sevilla",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#your-brand-color",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

**Service Worker Strategy**

- Cache-first para assets estáticos (CSS, JS, imágenes)
- Network-first para contenido dinámico (blog posts, servicios)
- Offline fallback page para cuando no hay conexión
- Background sync para formularios enviados offline

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

### Property 1: Responsive Layout Integrity

_For any_ viewport width between 320px and 3000px, the website should render without horizontal overflow and all critical interactive elements (navigation, CTAs, forms) should be visible and accessible.

**Validates: Requirements 2.1, 2.2, 2.3**

### Property 2: Booking Form Data Capture

_For any_ valid booking form submission with all required fields (name, phone, address, city, service type, preferred date), the system should successfully capture all field values and make them available for processing.

**Validates: Requirements 3.2**

### Property 3: Booking Submission Effects

_For any_ valid booking form submission, the system should both send an email notification to the admin and display a confirmation message to the user.

**Validates: Requirements 3.3, 3.4**

### Property 4: Service Area Validation

_For any_ address input in the booking form, the system should validate whether it falls within the defined service area (Alcalá de Guadaíra or Sevilla) and return a boolean result.

**Validates: Requirements 3.5**

### Property 5: Out-of-Area Messaging

_For any_ address that fails service area validation, the booking form should display an informative message indicating the address is outside the coverage zone.

**Validates: Requirements 3.6**

### Property 6: Service Completeness

_For any_ service displayed on the services page, it should include all required information: description text, price range (min and max values), estimated duration, and at least one representative image.

**Validates: Requirements 4.2, 4.3, 4.4, 4.5**

### Property 7: Gallery Item Structure

_For any_ item in the gallery, it should contain both a "before" image and an "after" image, along with an associated service type.

**Validates: Requirements 5.1**

### Property 8: Gallery Organization

_For any_ set of gallery items, when filtered by service type, all returned items should match the selected service type.

**Validates: Requirements 5.2**

### Property 9: Gallery Image Expansion

_For any_ gallery image that is clicked, the system should open a modal or expanded view displaying the full-size version of that image.

**Validates: Requirements 5.3**

### Property 10: Testimonial Content Completeness

_For any_ testimonial displayed, it should include both the client name and the dog breed information.

**Validates: Requirements 6.2**

### Property 11: Testimonial Navigation Availability

_For any_ testimonial section, if the total number of testimonials exceeds 6, navigation controls (arrows, dots, or pagination) should be present and functional.

**Validates: Requirements 6.4**

### Property 12: Blog Post Chronological Ordering

_For any_ list of blog posts displayed on the blog index page, the posts should be ordered by publication date in descending order (most recent first).

**Validates: Requirements 7.3**

### Property 13: Blog Post Navigation

_For any_ blog post link that is clicked, the system should navigate to a page displaying the complete content of that specific post.

**Validates: Requirements 7.6**

### Property 14: Reading Time Calculation

_For any_ blog post displayed, the system should calculate and display an estimated reading time based on the word count of the content.

**Validates: Requirements 7.7**

### Property 15: Price Calculator Output Format

_For any_ valid combination of inputs to the price calculator (service type, dog size, breed), the output should be a price range object containing both minimum and maximum numeric values.

**Validates: Requirements 9.2, 9.3**

### Property 16: Multi-Service Price Calculation

_For any_ set of multiple services selected in the price calculator, the total estimated price should be the sum of the individual service price ranges (total min = sum of mins, total max = sum of maxs).

**Validates: Requirements 9.5**

### Property 17: Quiz Recommendation Generation

_For any_ completed quiz (all questions answered), the system should generate a recommendation containing at least one service suggestion.

**Validates: Requirements 10.2**

### Property 18: Quiz Result Explanation

_For any_ quiz result displayed, it should include an explanation text describing why the recommended service(s) were suggested based on the user's answers.

**Validates: Requirements 10.4**

### Property 19: Page Metadata Completeness

_For any_ page in the website, the HTML head should include essential meta tags: title, description, Open Graph tags (og:title, og:description, og:image), and alt attributes for all images.

**Validates: Requirements 12.1, 12.5, 12.7, 12.9**

### Property 20: Image Optimization

_For any_ image served by the website, it should be in an optimized format (WebP with fallback) and compressed to reduce file size while maintaining visual quality.

**Validates: Requirements 12.4**

### Property 21: URL Slug Format

_For any_ dynamically generated URL (blog posts, services), the slug should be lowercase, hyphen-separated, contain only alphanumeric characters and hyphens, and be derived from the content title.

**Validates: Requirements 12.6, 13.6**

### Property 22: Contact Information Visibility

_For any_ page on the website, the phone number should be visible in either the header or footer section.

**Validates: Requirements 14.1**

### Property 23: Contact Form Notification

_For any_ valid contact form submission, the system should send an email notification to the admin email address.

**Validates: Requirements 14.6**

### Property 24: Image Dimension Consistency

_For any_ category of images (service images, gallery images, testimonial images), all images within that category should have consistent aspect ratios to maintain visual harmony.

**Validates: Requirements 16.4**

### Property 25: Async Operation Loading Indicators

_For any_ asynchronous operation (form submission, data fetching), a loading indicator should be displayed to the user while the operation is in progress.

**Validates: Requirements 17.5**

### Property 26: Interactive Element Keyboard Accessibility

_For any_ interactive element (buttons, links, form inputs, modals), it should be focusable and operable using only keyboard navigation (Tab, Enter, Escape keys).

**Validates: Requirements 18.3**

### Property 27: Interactive Element ARIA Attributes

_For any_ interactive component that doesn't use native HTML interactive elements, it should include appropriate ARIA attributes (role, aria-label, aria-expanded, etc.) to convey its purpose and state to assistive technologies.

**Validates: Requirements 18.2**

### Property 28: Social Sharing Buttons

_For any_ service detail page or blog post page, social sharing buttons should be present to allow users to share the content.

**Validates: Requirements 19.2**

### Property 29: Cookie Consent Banner Display

_For any_ first-time visitor (no consent cookie present), the cookie consent banner should be displayed on page load.

**Validates: Requirements 20.3**

### Property 30: PWA Manifest Validity

_The_ PWA manifest.json file should contain all required fields (name, short_name, start_url, display, icons array with at least 192x192 and 512x512 sizes) and be valid JSON.

**Validates: Requirements 21.1, 21.2**

### Property 31: Service Worker Resource Caching

_For any_ critical resource defined in the cache list (HTML, CSS, JS, logo), the service worker should cache it on installation for offline availability.

**Validates: Requirements 21.6**

## Error Handling

### Form Validation Errors

**Client-Side Validation:**

- All form inputs should be validated before submission using Zod schemas
- Validation errors should be displayed inline next to the relevant field
- Error messages should be clear, specific, and in Spanish
- Form submission button should be disabled until all validation passes

**Server-Side Validation:**

- All API endpoints should re-validate data on the server
- Return 400 Bad Request with detailed error messages for invalid data
- Log validation failures for monitoring

**Example Error Messages:**

```typescript
{
  name: "El nombre debe tener al menos 2 caracteres",
  phone: "Por favor, introduce un número de teléfono válido",
  email: "El formato del email no es válido",
  address: "La dirección es obligatoria",
  serviceType: "Por favor, selecciona un servicio"
}
```

### API Error Handling

**Network Errors:**

- Catch network failures and display user-friendly messages
- Implement retry logic for transient failures (3 attempts with exponential backoff)
- Show offline indicator when network is unavailable

**Server Errors (5xx):**

- Display generic error message to user: "Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde."
- Log full error details to monitoring service (Sentry or similar)
- Provide fallback contact information (phone, WhatsApp)

**Client Errors (4xx):**

- 400 Bad Request: Display specific validation errors
- 404 Not Found: Show custom 404 page with navigation back to home
- 429 Too Many Requests: Display rate limit message with retry time

### CMS Content Errors

**Missing Content:**

- If blog posts fail to load, display: "No se pudieron cargar los artículos. Por favor, recarga la página."
- If services fail to load, show cached version or static fallback
- If gallery images fail to load, show placeholder images

**Image Loading Errors:**

- Use onError handler to replace broken images with placeholder
- Log image loading failures for investigation
- Implement lazy loading with intersection observer fallback

### Service Worker Errors

**Registration Failure:**

- Gracefully degrade to non-PWA experience
- Log registration errors for debugging
- Don't block main application functionality

**Cache Errors:**

- If cache fails, fall back to network requests
- Clear corrupted cache and re-initialize
- Provide manual cache clear option in settings

### Booking System Errors

**Email Delivery Failure:**

- Store booking request in local database/queue
- Retry email sending with exponential backoff
- Display confirmation to user even if email fails (with note that confirmation will be sent)
- Alert admin through alternative channel (SMS, push notification)

**Service Area Validation:**

- If geocoding service fails, allow manual city selection
- Provide clear message about coverage area
- Offer contact form for borderline cases

### Accessibility Error Prevention

**Focus Management:**

- Trap focus within modals
- Return focus to trigger element when modal closes
- Ensure focus is visible (outline) for keyboard users

**Screen Reader Announcements:**

- Use aria-live regions for dynamic content updates
- Announce form errors to screen readers
- Provide skip links for keyboard navigation

### Error Logging and Monitoring

**Client-Side Logging:**

- Use Sentry or similar for error tracking
- Log errors with context (user action, page, browser info)
- Set up alerts for critical errors

**Server-Side Logging:**

- Log all API errors with request details
- Monitor email delivery failures
- Track form submission success rates

## Testing Strategy

### Overview

The testing strategy employs a dual approach combining unit tests for specific scenarios and property-based tests for comprehensive coverage. This ensures both concrete edge cases and general correctness properties are validated.

### Testing Tools

**Unit Testing:**

- Framework: Vitest (fast, Vite-native test runner)
- React Testing: React Testing Library
- Mocking: Vitest mocks for API calls and external services

**Property-Based Testing:**

- Library: fast-check (TypeScript-native property testing)
- Configuration: Minimum 100 iterations per property test
- Generators: Custom generators for domain types (Service, BlogPost, BookingData, etc.)

**E2E Testing:**

- Framework: Playwright
- Coverage: Critical user flows (booking, contact, blog navigation)
- Frequency: Run on CI before deployment

**Accessibility Testing:**

- Tool: axe-core with jest-axe
- Coverage: All major components and pages
- Standards: WCAG 2.1 Level AA compliance

### Unit Testing Approach

Unit tests focus on specific examples, edge cases, and integration points:

**Component Tests:**

- Test rendering with various props
- Test user interactions (clicks, form inputs)
- Test conditional rendering logic
- Test error states and loading states

**API Route Tests:**

- Test successful request/response cycles
- Test validation error responses
- Test authentication/authorization
- Mock external services (email, CMS)

**Utility Function Tests:**

- Test slug generation with special characters
- Test reading time calculation with various word counts
- Test price calculation logic
- Test service area validation with boundary cases

**Example Unit Tests:**

```typescript
// Slug generation edge cases
describe('generateSlug', () => {
  it('should handle Spanish characters', () => {
    expect(generateSlug('Peluquería Canina')).toBe('peluqueria-canina');
  });

  it('should handle multiple spaces', () => {
    expect(generateSlug('Consejos   para   tu   perro')).toBe('consejos-para-tu-perro');
  });

  it('should remove special characters', () => {
    expect(generateSlug('¿Cómo bañar a tu perro?')).toBe('como-banar-a-tu-perro');
  });
});

// Service area validation edge cases
describe('isInServiceArea', () => {
  it('should accept Alcalá de Guadaíra', () => {
    expect(isInServiceArea('Alcalá de Guadaíra')).toBe(true);
  });

  it('should accept Sevilla', () => {
    expect(isInServiceArea('Sevilla')).toBe(true);
  });

  it('should reject other cities', () => {
    expect(isInServiceArea('Madrid')).toBe(false);
  });

  it('should handle case insensitivity', () => {
    expect(isInServiceArea('SEVILLA')).toBe(true);
  });
});
```

### Property-Based Testing Approach

Property tests verify universal properties across many generated inputs. Each property test must:

1. Run minimum 100 iterations
2. Reference the design document property in a comment
3. Use appropriate generators for domain types

**Custom Generators:**

```typescript
// generators.ts
import * as fc from 'fast-check';

export const serviceArbitrary = fc.record({
  id: fc.uuid(),
  name: fc.stringOf(fc.char(), { minLength: 3, maxLength: 50 }),
  slug: fc.stringOf(fc.constantFrom('a-z', '0-9', '-'), { minLength: 3 }),
  description: fc.lorem({ maxCount: 3 }),
  priceMin: fc.integer({ min: 10, max: 50 }),
  priceMax: fc.integer({ min: 51, max: 150 }),
  duration: fc.constantFrom('30 min', '45 min', '1 hora', '1.5 horas'),
  features: fc.array(fc.string(), { minLength: 1, maxLength: 5 }),
  images: fc.array(fc.webUrl(), { minLength: 1, maxLength: 3 }),
  icon: fc.string(),
});

export const blogPostArbitrary = fc.record({
  slug: fc.stringOf(fc.constantFrom('a-z', '0-9', '-'), { minLength: 5 }),
  title: fc.stringOf(fc.char(), { minLength: 10, maxLength: 100 }),
  excerpt: fc.lorem({ maxCount: 2 }),
  content: fc.lorem({ maxCount: 10 }),
  publishedAt: fc.date(),
  category: fc.constantFrom('higiene', 'alimentación', 'salud', 'comportamiento'),
  tags: fc.array(fc.string(), { minLength: 1, maxLength: 5 }),
  author: fc.constant('José Antonio Camacho'),
});

export const bookingDataArbitrary = fc.record({
  name: fc.stringOf(fc.char(), { minLength: 2, maxLength: 50 }),
  phone: fc.stringOf(fc.integer({ min: 0, max: 9 }).map(String), { minLength: 9, maxLength: 9 }),
  address: fc.stringOf(fc.char(), { minLength: 5, maxLength: 100 }),
  city: fc.constantFrom('alcala-de-guadaira', 'sevilla'),
  serviceType: fc.constantFrom('bath', 'grooming', 'antiparasitic'),
  preferredDate: fc.date({ min: new Date() }),
  comments: fc.option(fc.lorem({ maxCount: 2 })),
});

export const viewportWidthArbitrary = fc.integer({ min: 320, max: 3000 });
```

**Example Property Tests:**

```typescript
// Feature: elpeluperro-website-rebuild, Property 1: Responsive Layout Integrity
describe('Property 1: Responsive Layout Integrity', () => {
  it('should render without horizontal overflow at any viewport width', () => {
    fc.assert(
      fc.property(viewportWidthArbitrary, (width) => {
        // Set viewport width
        global.innerWidth = width;

        // Render page
        const { container } = render(<HomePage />);

        // Check no horizontal overflow
        const bodyWidth = container.querySelector('body')?.scrollWidth || 0;
        expect(bodyWidth).toBeLessThanOrEqual(width);

        // Check critical elements are visible
        expect(screen.getByRole('navigation')).toBeVisible();
        expect(screen.getByRole('button', { name: /reservar/i })).toBeVisible();
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: elpeluperro-website-rebuild, Property 6: Service Completeness
describe('Property 6: Service Completeness', () => {
  it('should display all required information for any service', () => {
    fc.assert(
      fc.property(serviceArbitrary, (service) => {
        const { container } = render(<ServiceCard service={service} />);

        // Check all required fields are present
        expect(container).toHaveTextContent(service.name);
        expect(container).toHaveTextContent(service.description);
        expect(container).toHaveTextContent(`${service.priceMin}`);
        expect(container).toHaveTextContent(`${service.priceMax}`);
        expect(container).toHaveTextContent(service.duration);

        // Check at least one image is rendered
        const images = container.querySelectorAll('img');
        expect(images.length).toBeGreaterThan(0);
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: elpeluperro-website-rebuild, Property 12: Blog Post Chronological Ordering
describe('Property 12: Blog Post Chronological Ordering', () => {
  it('should order blog posts by date descending', () => {
    fc.assert(
      fc.property(fc.array(blogPostArbitrary, { minLength: 2, maxLength: 20 }), (posts) => {
        const { container } = render(<BlogList posts={posts} />);

        // Get rendered post dates
        const renderedDates = Array.from(container.querySelectorAll('[data-testid="post-date"]'))
          .map(el => new Date(el.textContent || ''));

        // Check they are in descending order
        for (let i = 0; i < renderedDates.length - 1; i++) {
          expect(renderedDates[i].getTime()).toBeGreaterThanOrEqual(renderedDates[i + 1].getTime());
        }
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: elpeluperro-website-rebuild, Property 15: Price Calculator Output Format
describe('Property 15: Price Calculator Output Format', () => {
  it('should return price range with min and max for any valid input', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('bath', 'grooming', 'antiparasitic'),
        fc.constantFrom('small', 'medium', 'large', 'xlarge'),
        (serviceType, dogSize) => {
          const result = calculatePrice(serviceType, dogSize);

          // Check result has min and max
          expect(result).toHaveProperty('min');
          expect(result).toHaveProperty('max');

          // Check they are numbers
          expect(typeof result.min).toBe('number');
          expect(typeof result.max).toBe('number');

          // Check min <= max
          expect(result.min).toBeLessThanOrEqual(result.max);

          // Check positive values
          expect(result.min).toBeGreaterThan(0);
          expect(result.max).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: elpeluperro-website-rebuild, Property 21: URL Slug Format
describe('Property 21: URL Slug Format', () => {
  it('should generate valid slugs from any title', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1, maxLength: 100 }), (title) => {
        const slug = generateSlug(title);

        // Check lowercase
        expect(slug).toBe(slug.toLowerCase());

        // Check only alphanumeric and hyphens
        expect(slug).toMatch(/^[a-z0-9-]+$/);

        // Check no consecutive hyphens
        expect(slug).not.toMatch(/--/);

        // Check doesn't start or end with hyphen
        expect(slug).not.toMatch(/^-|-$/);
      }),
      { numRuns: 100 }
    );
  });
});
```

### Integration Testing

**API Integration Tests:**

- Test full request/response cycle with real database
- Test email sending with test email service
- Test CMS integration with Sanity test dataset

**Component Integration Tests:**

- Test form submission flow (validation → API call → success message)
- Test blog post loading and rendering
- Test gallery filtering and modal interaction

### E2E Testing with Playwright

**Critical User Flows:**

```typescript
// Booking flow
test('user can submit booking request', async ({ page }) => {
  await page.goto('/reservar');

  await page.fill('[name="name"]', 'Juan Pérez');
  await page.fill('[name="phone"]', '612345678');
  await page.fill('[name="address"]', 'Calle Mayor 1');
  await page.selectOption('[name="city"]', 'sevilla');
  await page.selectOption('[name="serviceType"]', 'grooming');
  await page.fill('[name="preferredDate"]', '2024-12-25');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Solicitud enviada correctamente')).toBeVisible();
});

// Blog navigation flow
test('user can browse and read blog posts', async ({ page }) => {
  await page.goto('/blog');

  // Check posts are loaded
  await expect(page.locator('[data-testid="blog-post"]')).toHaveCount(10);

  // Click first post
  await page.click('[data-testid="blog-post"]:first-child');

  // Check post content is displayed
  await expect(page.locator('article')).toBeVisible();
  await expect(page.locator('[data-testid="reading-time"]')).toBeVisible();
});

// Quiz flow
test('user can complete quiz and get recommendation', async ({ page }) => {
  await page.goto('/quiz');

  // Answer all questions
  for (let i = 0; i < 5; i++) {
    await page.click(`[data-question="${i}"] input[type="radio"]:first-child`);
    await page.click('button:has-text("Siguiente")');
  }

  // Check recommendation is shown
  await expect(page.locator('[data-testid="quiz-result"]')).toBeVisible();
  await expect(page.locator('text=Te recomendamos')).toBeVisible();
  await expect(page.locator('button:has-text("Reservar Cita")')).toBeVisible();
});
```

### Accessibility Testing

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('HomePage should have no accessibility violations', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('BookingForm should have no accessibility violations', async () => {
    const { container } = render(<BookingForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Modal should trap focus', async () => {
    const { container } = render(<Modal isOpen={true} />);

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    expect(focusableElements.length).toBeGreaterThan(0);

    // Simulate tab through all elements
    // Focus should cycle back to first element
  });
});
```

### Performance Testing

**Lighthouse CI:**

- Run Lighthouse audits on CI for every PR
- Enforce minimum scores: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+, PWA 90+
- Block deployment if scores drop below thresholds

**Bundle Size Monitoring:**

- Track bundle size with bundlesize or similar
- Alert on significant increases (>10%)
- Analyze and optimize large dependencies

### Test Coverage Goals

- Unit Test Coverage: 80%+ for utility functions and business logic
- Component Test Coverage: 70%+ for React components
- Property Test Coverage: All 31 correctness properties implemented
- E2E Test Coverage: All critical user flows (booking, contact, blog, quiz)
- Accessibility Test Coverage: All major components and pages

### CI/CD Integration

**Pre-commit:**

- Run linting (ESLint, Prettier)
- Run type checking (TypeScript)

**Pull Request:**

- Run all unit tests
- Run all property tests
- Run accessibility tests
- Run Lighthouse CI
- Check bundle size

**Pre-deployment:**

- Run E2E tests against staging environment
- Run full Lighthouse audit
- Verify PWA manifest and service worker

### Testing Documentation

Each test file should include:

- Clear describe blocks for organization
- Descriptive test names that explain what is being tested
- Comments linking property tests to design document properties
- Setup and teardown for test isolation
- Mocks clearly documented

**Example:**

```typescript
/**
 * Tests for the booking form component
 *
 * Property tests validate universal behaviors across all inputs
 * Unit tests validate specific edge cases and error conditions
 */

describe('BookingForm', () => {
  // Feature: elpeluperro-website-rebuild, Property 2: Booking Form Data Capture
  describe('Property 2: Data Capture', () => {
    it('should capture all form fields for any valid input', () => {
      // Property test implementation
    });
  });

  describe('Edge Cases', () => {
    it('should reject phone numbers with letters', () => {
      // Unit test implementation
    });

    it('should handle very long addresses gracefully', () => {
      // Unit test implementation
    });
  });
});
```
