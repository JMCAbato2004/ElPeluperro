# Configuración de Servicios Externos

Este documento detalla la configuración de servicios externos necesarios para El Peluperro.

## 1. Resend (Servicio de Email)

### Crear Cuenta y Obtener API Key

1. Visita [resend.com](https://resend.com) y crea una cuenta
2. Verifica tu dominio o usa el dominio de prueba proporcionado
3. Ve a "API Keys" y crea una nueva API key
4. Copia la API key y guárdala de forma segura

### Configurar Variables de Entorno

Añade las siguientes variables a tu archivo `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=info@elpeluperro.com
```

### Verificar Dominio (Producción)

Para usar tu propio dominio en producción:

1. Ve a "Domains" en el dashboard de Resend
2. Añade tu dominio (elpeluperro.com)
3. Configura los registros DNS según las instrucciones:
   - SPF record
   - DKIM record
   - DMARC record (opcional pero recomendado)
4. Espera a que se verifique el dominio (puede tardar hasta 48 horas)

### Templates de Email

Los templates están implementados en:
- `lib/email/booking.ts` - Email de confirmación de reserva
- `lib/email/contact.ts` - Email de formulario de contacto

### Probar en Desarrollo

```bash
# Asegúrate de tener las variables de entorno configuradas
npm run dev

# Prueba el formulario de reserva en http://localhost:3000/reservar
# Prueba el formulario de contacto en http://localhost:3000/contacto
```

---

## 2. Google Analytics 4

### Crear Propiedad

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea una nueva propiedad para "El Peluperro"
3. Configura los detalles:
   - Nombre: El Peluperro
   - Zona horaria: Europe/Madrid
   - Moneda: EUR
4. Crea un stream de datos web
5. Copia el Measurement ID (formato: G-XXXXXXXXXX)

### Configurar Variables de Entorno

Añade la siguiente variable a tu archivo `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Eventos Personalizados Configurados

Los siguientes eventos están implementados:
- `booking_submitted` - Cuando se envía el formulario de reserva
- `contact_submitted` - Cuando se envía el formulario de contacto
- `quiz_completed` - Cuando se completa el quiz de recomendación
- `pwa_installed` - Cuando se instala la PWA

### Respeto al Consentimiento de Cookies

Google Analytics solo se carga si el usuario ha aceptado cookies analíticas en el banner de consentimiento.

---

## 3. Vercel (Hosting y Deployment)

### Conectar Repositorio

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Haz clic en "Add New Project"
3. Importa tu repositorio de GitHub/GitLab/Bitbucket
4. Vercel detectará automáticamente que es un proyecto Next.js

### Configurar Variables de Entorno

En el dashboard de Vercel, ve a "Settings" > "Environment Variables" y añade:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token
RESEND_API_KEY=re_xxxxxxxxxx
ADMIN_EMAIL=info@elpeluperro.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://elpeluperro.com
```

### Configurar Dominio Personalizado

1. Ve a "Settings" > "Domains"
2. Añade tu dominio: `elpeluperro.com`
3. Configura los registros DNS según las instrucciones de Vercel:
   - Tipo A: apunta a la IP de Vercel
   - Tipo CNAME: `www` apunta a `cname.vercel-dns.com`
4. Espera a que se verifique el dominio

### Preview Deployments

Vercel crea automáticamente preview deployments para cada Pull Request:
- Cada PR obtiene una URL única de preview
- Los cambios se despliegan automáticamente al hacer push
- Útil para revisar cambios antes de mergear a producción

### Deployment Automático

- Push a `main` → Deployment a producción
- Push a otras ramas → Preview deployment
- Rollback disponible desde el dashboard

---

## 4. Sanity Studio

### Desplegar Sanity Studio

Opción 1: Subdirectorio en Vercel (Recomendado)

```bash
cd sanity
npm run build
# Los archivos se generan en sanity/dist
# Vercel los servirá automáticamente en /studio
```

Opción 2: Subdominio separado

```bash
cd sanity
npx sanity deploy
# Elige un nombre: elpeluperro-studio
# Accesible en: elpeluperro-studio.sanity.studio
```

### Configurar CORS

1. Ve al dashboard de Sanity: [sanity.io/manage](https://sanity.io/manage)
2. Selecciona tu proyecto
3. Ve a "API" > "CORS Origins"
4. Añade los siguientes orígenes:
   - `http://localhost:3000` (desarrollo)
   - `https://elpeluperro.com` (producción)
   - `https://www.elpeluperro.com` (producción con www)
   - `https://*.vercel.app` (preview deployments)

### Crear Usuario Admin

1. Ve al dashboard de Sanity
2. Ve a "Project" > "Members"
3. Invita a José Antonio Camacho con su email
4. Asigna rol de "Administrator"

### Documentar Acceso al CMS

Crea un documento para José Antonio con:
- URL del Sanity Studio
- Credenciales de acceso
- Guía rápida de uso (ver docs/CONTENT_MANAGEMENT.md)

---

## Checklist de Configuración

### Desarrollo
- [ ] Resend API key configurada en .env.local
- [ ] Google Analytics ID configurada en .env.local
- [ ] Sanity credentials configuradas en .env.local
- [ ] Emails de prueba funcionando

### Producción
- [ ] Variables de entorno configuradas en Vercel
- [ ] Dominio personalizado configurado
- [ ] Dominio de Resend verificado
- [ ] CORS de Sanity configurado
- [ ] Sanity Studio desplegado
- [ ] Usuario admin creado en Sanity
- [ ] Google Analytics funcionando
- [ ] SSL/HTTPS activo

---

## Troubleshooting

### Emails no se envían

1. Verifica que RESEND_API_KEY esté configurada
2. Verifica que el dominio esté verificado en Resend
3. Revisa los logs de Vercel para errores
4. Verifica que ADMIN_EMAIL sea válido

### Google Analytics no registra eventos

1. Verifica que NEXT_PUBLIC_GA_MEASUREMENT_ID esté configurada
2. Verifica que el usuario haya aceptado cookies analíticas
3. Usa Google Analytics DebugView para ver eventos en tiempo real
4. Verifica que no haya bloqueadores de anuncios activos

### Sanity no carga contenido

1. Verifica las credenciales de Sanity en variables de entorno
2. Verifica que CORS esté configurado correctamente
3. Verifica que el dataset exista en Sanity
4. Revisa los logs del navegador para errores de CORS

---

## Contacto de Soporte

- Resend: [resend.com/support](https://resend.com/support)
- Google Analytics: [support.google.com/analytics](https://support.google.com/analytics)
- Vercel: [vercel.com/support](https://vercel.com/support)
- Sanity: [sanity.io/help](https://sanity.io/help)
