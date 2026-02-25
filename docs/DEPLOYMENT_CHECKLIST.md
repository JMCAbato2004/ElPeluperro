# Checklist de Deployment - El Peluperro

Esta guía te ayudará a desplegar el sitio web de El Peluperro a producción paso a paso.

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener:
- [ ] Cuenta de GitHub con el repositorio del proyecto
- [ ] Cuenta de Vercel (puedes usar GitHub para login)
- [ ] Cuenta de Sanity.io
- [ ] Cuenta de Resend para emails
- [ ] Cuenta de Google Analytics 4
- [ ] Dominio personalizado (opcional pero recomendado)

---

## 🎯 Fase 1: Configurar Sanity CMS

### 1.1 Crear Proyecto en Sanity

```bash
# Desde el directorio del proyecto
cd sanity
npm install -g @sanity/cli
sanity login
sanity init
```

Cuando te pregunte:
- **Project name**: El Peluperro
- **Use default dataset configuration?**: Yes
- **Dataset name**: production
- **Output path**: Usa el directorio actual (.)

Guarda el **Project ID** que te proporciona.

### 1.2 Configurar Variables de Entorno Locales

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=tu_token_aqui

# Email Service (Resend) - configurar después
RESEND_API_KEY=
ADMIN_EMAIL=info@elpeluperro.com

# Google Analytics - configurar después
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 1.3 Obtener Token de API de Sanity

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto "El Peluperro"
3. Ve a **API** → **Tokens**
4. Crea un nuevo token con permisos de **Editor**
5. Copia el token y añádelo a `SANITY_API_TOKEN` en `.env.local`

### 1.4 Desplegar Sanity Studio

```bash
cd sanity
npm run deploy
```

Esto desplegará el Studio en: `https://tu-proyecto.sanity.studio`

### 1.5 Poblar Contenido Inicial

1. Accede a tu Sanity Studio: `https://tu-proyecto.sanity.studio`
2. Sigue la guía en `docs/CONTENT_POPULATION.md` para crear:
   - 3 servicios (Baño, Peluquería, Antiparasitarios)
   - 4 categorías de blog
   - 5 posts de blog
   - 6 testimonios
   - 12 items de galería

**Importante**: Usa las imágenes listadas en `docs/IMAGES_TO_REPLACE.md`

---

## 📧 Fase 2: Configurar Resend (Email)

### 2.1 Crear Cuenta en Resend

1. Ve a https://resend.com
2. Crea una cuenta
3. Verifica tu email

### 2.2 Obtener API Key

1. En el dashboard de Resend, ve a **API Keys**
2. Crea una nueva API key
3. Copia la key y añádela a `.env.local`:

```bash
RESEND_API_KEY=re_tu_api_key_aqui
```

### 2.3 Verificar Dominio (Opcional pero Recomendado)

Para enviar emails desde tu dominio:

1. En Resend, ve a **Domains**
2. Añade tu dominio (ej: elpeluperro.com)
3. Configura los registros DNS según las instrucciones
4. Espera la verificación (puede tardar hasta 48h)

Si no verificas el dominio, los emails se enviarán desde `onboarding@resend.dev`

### 2.4 Probar Envío de Emails

```bash
# En local
npm run dev
```

Prueba los formularios:
- http://localhost:3000/reservar
- http://localhost:3000/contacto

---

## 📊 Fase 3: Configurar Google Analytics

### 3.1 Crear Propiedad en GA4

1. Ve a https://analytics.google.com
2. Crea una cuenta si no tienes
3. Crea una nueva propiedad:
   - **Nombre**: El Peluperro
   - **Zona horaria**: España
   - **Moneda**: EUR
4. Configura un flujo de datos web:
   - **URL del sitio web**: tu dominio
   - **Nombre del flujo**: Sitio Web Principal

### 3.2 Obtener Measurement ID

1. En la configuración del flujo de datos
2. Copia el **Measurement ID** (formato: G-XXXXXXXXXX)
3. Añádelo a `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3.3 Configurar Eventos Personalizados

Los siguientes eventos ya están implementados:
- `booking_submitted` - Cuando se envía una reserva
- `contact_submitted` - Cuando se envía el formulario de contacto
- `quiz_completed` - Cuando se completa el quiz
- `pwa_installed` - Cuando se instala la PWA

Puedes verlos en GA4 en **Eventos** después de que ocurran.

---

## 🚀 Fase 4: Deployment en Vercel

### 4.1 Conectar Repositorio

1. Ve a https://vercel.com
2. Haz login con GitHub
3. Click en **Add New** → **Project**
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Next.js

### 4.2 Configurar Variables de Entorno en Vercel

En la configuración del proyecto, añade estas variables:

**Environment Variables:**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=tu_token
RESEND_API_KEY=tu_resend_key
ADMIN_EMAIL=info@elpeluperro.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

**Importante**: Marca todas las variables `NEXT_PUBLIC_*` para que estén disponibles en **Production**, **Preview** y **Development**.

### 4.3 Configurar Build Settings

Vercel debería detectar automáticamente:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4.4 Deploy

1. Click en **Deploy**
2. Espera a que termine el build (2-5 minutos)
3. Vercel te dará una URL temporal: `https://tu-proyecto.vercel.app`

---

## 🌐 Fase 5: Configurar Dominio Personalizado

### 5.1 Añadir Dominio en Vercel

1. En tu proyecto de Vercel, ve a **Settings** → **Domains**
2. Añade tu dominio: `elpeluperro.com`
3. También añade: `www.elpeluperro.com`

### 5.2 Configurar DNS

Vercel te dará instrucciones específicas. Generalmente:

**Para dominio raíz (elpeluperro.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Para www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 5.3 Esperar Propagación

- La propagación DNS puede tardar de 5 minutos a 48 horas
- Vercel verificará automáticamente y emitirá un certificado SSL

### 5.4 Actualizar Variables de Entorno

Una vez que el dominio esté activo, actualiza en Vercel:

```
NEXT_PUBLIC_SITE_URL=https://elpeluperro.com
```

Y redeploy el proyecto.

---

## 🔒 Fase 6: Configurar CORS en Sanity

### 6.1 Añadir Dominio a CORS

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto
3. Ve a **API** → **CORS Origins**
4. Añade estos orígenes:
   - `http://localhost:3000` (desarrollo)
   - `https://tu-proyecto.vercel.app` (preview)
   - `https://elpeluperro.com` (producción)
   - `https://www.elpeluperro.com` (producción)
   - `https://tu-proyecto.sanity.studio` (Sanity Studio)

Marca **Allow credentials** para todos.

---

## ✅ Fase 7: Testing Final

### 7.1 Checklist de Funcionalidad

Prueba en producción:

**Navegación:**
- [ ] Todas las páginas cargan correctamente
- [ ] Menú de navegación funciona
- [ ] Links internos funcionan
- [ ] Responsive en móvil, tablet y desktop

**Contenido:**
- [ ] Servicios se muestran desde Sanity
- [ ] Blog posts se muestran correctamente
- [ ] Galería carga las imágenes
- [ ] Testimonios aparecen en homepage

**Formularios:**
- [ ] Formulario de reserva envía emails
- [ ] Formulario de contacto envía emails
- [ ] Validación funciona correctamente
- [ ] Mensajes de éxito/error se muestran

**Interactivos:**
- [ ] Calculadora de precios funciona
- [ ] Quiz de recomendación funciona
- [ ] Mapa de zona de cobertura carga

**PWA:**
- [ ] Manifest.json es accesible
- [ ] Service Worker se registra
- [ ] Prompt de instalación aparece
- [ ] App se puede instalar en móvil

**SEO:**
- [ ] Sitemap.xml es accesible: `/sitemap.xml`
- [ ] Robots.txt es accesible: `/robots.txt`
- [ ] Meta tags están presentes (view source)
- [ ] Open Graph tags funcionan (prueba compartiendo en redes)

**Analytics:**
- [ ] Google Analytics está rastreando visitas
- [ ] Eventos personalizados se registran

**Legal:**
- [ ] Banner de cookies aparece en primera visita
- [ ] Política de privacidad es accesible
- [ ] Política de cookies es accesible

### 7.2 Pruebas de Rendimiento

Usa estas herramientas:

**Lighthouse (Chrome DevTools):**
```
1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Selecciona todas las categorías
4. Click en "Analyze page load"
```

Objetivos mínimos:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
- PWA: Installable

**PageSpeed Insights:**
- Ve a https://pagespeed.web.dev
- Analiza tu dominio
- Verifica scores en móvil y desktop

**GTmetrix:**
- Ve a https://gtmetrix.com
- Analiza tu dominio
- Verifica tiempos de carga

### 7.3 Pruebas en Múltiples Dispositivos

**Desktop:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (Mac)
- [ ] Edge

**Móvil:**
- [ ] Chrome (Android)
- [ ] Safari (iOS)
- [ ] Samsung Internet

**Tablet:**
- [ ] iPad
- [ ] Android tablet

---

## 📈 Fase 8: Monitoreo y Alertas

### 8.1 Configurar Vercel Analytics

1. En tu proyecto de Vercel, ve a **Analytics**
2. Habilita **Web Analytics** (gratis)
3. Esto te dará métricas de rendimiento real

### 8.2 Configurar Alertas en Google Analytics

1. En GA4, ve a **Admin** → **Custom Alerts**
2. Crea alertas para:
   - Caída significativa en tráfico
   - Aumento en errores 404
   - Cambios en tasa de conversión

### 8.3 Monitoreo de Uptime

Usa un servicio gratuito como:
- **UptimeRobot**: https://uptimerobot.com
- **Pingdom**: https://www.pingdom.com

Configura checks cada 5 minutos para:
- Homepage: `https://elpeluperro.com`
- API de reservas: `https://elpeluperro.com/api/booking`

### 8.4 Configurar Notificaciones de Vercel

1. En Vercel, ve a **Settings** → **Notifications**
2. Habilita notificaciones para:
   - Deployment failures
   - Domain configuration issues
   - Build errors

---

## 🎉 Fase 9: Post-Deployment

### 9.1 Actualizar README

Actualiza el README.md con:
- URL de producción
- URL de Sanity Studio
- Instrucciones para el equipo

### 9.2 Documentar Credenciales

Guarda de forma segura (1Password, LastPass, etc.):
- Credenciales de Sanity
- API keys de Resend
- Credenciales de Google Analytics
- Credenciales de Vercel
- Credenciales del dominio

### 9.3 Crear Backup

1. Exporta el contenido de Sanity:
```bash
cd sanity
sanity dataset export production backup.tar.gz
```

2. Guarda el backup en un lugar seguro

### 9.4 Configurar Mantenimiento Regular

**Semanal:**
- Revisar analytics
- Verificar que emails se envían correctamente
- Revisar errores en Vercel logs

**Mensual:**
- Actualizar dependencias: `npm update`
- Revisar y actualizar contenido en Sanity
- Verificar certificado SSL (se renueva automáticamente)
- Hacer backup de Sanity

**Trimestral:**
- Revisar rendimiento con Lighthouse
- Actualizar imágenes placeholder con fotos reales
- Revisar y actualizar políticas legales si es necesario

---

## 🆘 Troubleshooting

### Build Falla en Vercel

**Error: "Module not found"**
- Verifica que todas las dependencias estén en `package.json`
- Ejecuta `npm install` localmente y prueba `npm run build`

**Error: "Environment variable not found"**
- Verifica que todas las variables `NEXT_PUBLIC_*` estén configuradas en Vercel
- Redeploy después de añadir variables

### Emails No Se Envían

**Verifica:**
- API key de Resend es correcta
- Variable `RESEND_API_KEY` está en Vercel
- Email del admin es correcto en `ADMIN_EMAIL`
- Revisa logs en Resend dashboard

### Contenido de Sanity No Aparece

**Verifica:**
- Project ID es correcto
- Dataset es "production"
- CORS está configurado para tu dominio
- Token de API tiene permisos de lectura

### PWA No Se Instala

**Verifica:**
- Manifest.json es accesible: `/manifest.json`
- Service Worker se registra (DevTools → Application → Service Workers)
- Sitio está en HTTPS
- Iconos de PWA existen en `/public/icons/`

---

## 📞 Soporte

Si necesitas ayuda:

**Vercel:**
- Documentación: https://vercel.com/docs
- Support: https://vercel.com/support

**Sanity:**
- Documentación: https://www.sanity.io/docs
- Slack Community: https://slack.sanity.io

**Next.js:**
- Documentación: https://nextjs.org/docs
- GitHub Discussions: https://github.com/vercel/next.js/discussions

---

## ✨ Checklist Final

Antes de considerar el deployment completo:

- [ ] Sanity configurado y con contenido
- [ ] Resend configurado y emails funcionando
- [ ] Google Analytics rastreando
- [ ] Sitio desplegado en Vercel
- [ ] Dominio personalizado configurado
- [ ] SSL activo (HTTPS)
- [ ] CORS configurado en Sanity
- [ ] Todas las funcionalidades probadas
- [ ] Lighthouse scores > 90
- [ ] PWA instalable
- [ ] Monitoreo configurado
- [ ] Backups realizados
- [ ] Documentación actualizada
- [ ] Credenciales guardadas de forma segura

---

**¡Felicidades! 🎉 El sitio de El Peluperro está en producción.**
