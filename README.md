# El Peluperro - Peluquería Canina Móvil

PWA moderna para El Peluperro, servicio de peluquería canina móvil en Sevilla y Alcalá de Guadaíra.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **CMS**: Sanity.io
- **Formularios**: React Hook Form + Zod
- **Mapas**: Leaflet.js
- **Email**: Resend
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel

## ✨ Características

- ✅ PWA instalable con soporte offline
- ✅ Diseño responsive (mobile-first)
- ✅ SEO optimizado con metadata dinámica
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ Formularios de reserva y contacto
- ✅ Botón flotante de WhatsApp
- ✅ Blog con categorías y búsqueda
- ✅ Galería antes/después
- ✅ Quiz interactivo de recomendación
- ✅ Calculadora de precios
- ✅ Mapa de zona de cobertura
- ✅ Integración con redes sociales
- ✅ Banner de consentimiento de cookies (RGPD)
- ✅ Google Analytics con respeto a privacidad

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd elpeluperro-website

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.local.template .env.local

# Editar .env.local con tus credenciales
```

## 🔧 Variables de Entorno

Crear un archivo `.env.local` con las siguientes variables:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=info@elpeluperro.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://elpeluperro.com
```

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir en http://localhost:3000
```

## 🏗️ Build

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm start            # Servidor de producción
npm run lint         # Ejecutar ESLint
npm run format       # Formatear código con Prettier
npm run test         # Ejecutar tests unitarios
npm run test:e2e     # Ejecutar tests E2E
npm run lighthouse   # Ejecutar auditoría Lighthouse
```

## 📁 Estructura del Proyecto

```
elpeluperro-website/
├── app/                      # App Router de Next.js
│   ├── api/                  # API routes
│   ├── blog/                 # Páginas de blog
│   ├── servicios/            # Páginas de servicios
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Homepage
├── components/               # Componentes React
│   ├── forms/                # Componentes de formularios
│   ├── interactive/          # Componentes interactivos
│   ├── layout/               # Header, Footer
│   ├── sections/             # Secciones de página
│   ├── ui/                   # Componentes UI base
│   └── analytics/            # Google Analytics
├── lib/                      # Utilidades y helpers
│   ├── data/                 # Datos mock
│   ├── email/                # Templates de email
│   ├── sanity/               # Cliente y queries de Sanity
│   ├── utils/                # Funciones utilitarias
│   └── validation/           # Schemas de validación Zod
├── public/                   # Assets estáticos
│   ├── icons/                # Iconos PWA
│   ├── manifest.json         # Manifest PWA
│   └── sw.js                 # Service Worker
├── sanity/                   # Configuración de Sanity
│   └── schemas/              # Schemas de contenido
├── docs/                     # Documentación
│   ├── EXTERNAL_SERVICES.md  # Guía de servicios externos
│   ├── CONTENT_POPULATION.md # Guía de contenido
│   ├── IMAGES_TO_REPLACE.md  # Lista de imágenes
│   └── TESTING_GUIDE.md      # Guía de testing
└── types/                    # Tipos TypeScript
```

## 🎨 Colores de Marca

- **Primary**: #FF6B35 (Naranja)
- **Secondary**: #4ECDC4 (Turquesa)
- **Accent**: #FFE66D (Amarillo)
- **Dark**: #2C3E50 (Gris oscuro)

## 📱 Páginas Implementadas

- `/` - Homepage con hero, servicios, testimonios y mapa
- `/servicios` - Lista de servicios
- `/servicios/[slug]` - Detalle de servicio
- `/galeria` - Galería antes/después
- `/blog` - Lista de posts
- `/blog/[slug]` - Post individual
- `/blog/categoria/[slug]` - Posts por categoría
- `/reservar` - Formulario de reserva
- `/contacto` - Formulario de contacto
- `/calculadora` - Calculadora de precios
- `/quiz` - Quiz de recomendación
- `/sobre-nosotros` - Información del negocio
- `/privacidad` - Política de privacidad
- `/cookies` - Política de cookies
- `/offline` - Página offline (PWA)

## 🔐 Seguridad y Privacidad

- Validación de formularios en cliente y servidor
- Sanitización de inputs
- HTTPS obligatorio en producción
- Banner de consentimiento de cookies (RGPD)
- Google Analytics solo con consentimiento
- Política de privacidad y cookies

## ♿ Accesibilidad

- Navegación por teclado completa
- Skip links para navegación rápida
- ARIA labels y roles apropiados
- Contraste de color WCAG AA
- Textos alternativos en imágenes
- Focus management en modales
- Formularios accesibles

## 🚀 Deployment

### Vercel (Recomendado)

1. Conectar repositorio en Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push a main

### Manual

```bash
npm run build
npm start
```

## 📊 Performance

- Lighthouse Score objetivo: 90+ en todas las categorías
- Imágenes optimizadas con Next.js Image
- Code splitting automático
- Lazy loading de componentes pesados
- ISR para contenido dinámico
- Service Worker para caché

## 🧪 Testing

Ver [TESTING_GUIDE.md](docs/TESTING_GUIDE.md) para información detallada.

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Lighthouse audit
npm run lighthouse
```

## 📚 Documentación

- [Servicios Externos](docs/EXTERNAL_SERVICES.md) - Configuración de Resend, GA, Vercel, Sanity
- [Población de Contenido](docs/CONTENT_POPULATION.md) - Guía para poblar contenido en Sanity
- [Imágenes a Reemplazar](docs/IMAGES_TO_REPLACE.md) - Lista de imágenes placeholder
- [Guía de Testing](docs/TESTING_GUIDE.md) - Configuración y ejecución de tests
- [Configuración de Contacto](docs/CONTACT_CONFIGURATION.md) - Cómo modificar teléfono y email
- [Botón de WhatsApp](docs/WHATSAPP_BUTTON.md) - Personalizar el botón flotante de WhatsApp

## 🐛 Troubleshooting

### El build falla

- Verificar que todas las variables de entorno estén configuradas
- Ejecutar `npm install` para asegurar dependencias actualizadas
- Verificar que no haya errores de TypeScript con `npm run lint`

### Sanity no carga contenido

- Verificar credenciales en `.env.local`
- Verificar que el dataset exista en Sanity
- Verificar configuración de CORS en Sanity

### Emails no se envían

- Verificar API key de Resend en `.env.local`
- Verificar que el dominio esté verificado en Resend
- Revisar logs de Vercel para errores

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a El Peluperro.

## 👤 Contacto

**El Peluperro**
- Website: https://elpeluperro.com
- Email: info@elpeluperro.com
- Instagram: [@elpeluperro](https://instagram.com/elpeluperro)
- Facebook: [El Peluperro](https://facebook.com/elpeluperro)

**Desarrollador**
- José Antonio Camacho

---

Hecho con ❤️ para los mejores amigos del hombre 🐕
