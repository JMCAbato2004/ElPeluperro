# Tasks: Portal Transformation

## Phase 1: Fundamentos y E-E-A-T (Semana 1-2)

### Task 1: Crear Página "Sobre Mí" Robusta

- [x] 1.1 Crear archivo `app/sobre-mi/page.tsx`
- [x] 1.2 Diseñar layout de página con secciones: Hero, Biografía, Experiencia, Metodología, Transparencia
- [ ] 1.3 Añadir foto profesional de José Antonio
- [ ] 1.4 Escribir biografía detallada (mínimo 500 palabras)
- [ ] 1.5 Añadir sección "Por qué confiar en mis recomendaciones"
- [ ] 1.6 Incluir años de experiencia y número de perros atendidos
- [ ] 1.7 Añadir sección "Mi metodología de prueba de productos"
- [ ] 1.8 Incluir certificaciones y formación
- [ ] 1.9 Añadir sección de transparencia sobre afiliación
- [ ] 1.10 Implementar Person schema markup
- [ ] 1.11 Optimizar SEO (meta tags, Open Graph)
- [ ] 1.12 Añadir CTA para servicios locales al final

### Task 2: Actualizar Políticas Legales

- [x] 2.1 Actualizar `app/privacidad/page.tsx` con sección de Google AdSense
- [x] 2.2 Añadir información sobre cookies publicitarias
- [x] 2.3 Actualizar `app/cookies/page.tsx` con tipos de cookies de AdSense
- [x] 2.4 Crear archivo `app/afiliacion/page.tsx`
- [x] 2.5 Escribir política de afiliación completa
- [x] 2.6 Explicar qué son enlaces de afiliación
- [x] 2.7 Disclosure sobre comisiones recibidas
- [x] 2.8 Añadir enlaces a políticas en Footer
- [x] 2.9 Actualizar componente `CookieBanner` para incluir opción de cookies publicitarias
- [x] 2.10 Verificar cumplimiento con RGPD

### Task 3: Rediseñar Homepage como Portal

- [ ] 3.1 Actualizar `app/page.tsx` con nuevo layout
- [ ] 3.2 Rediseñar `HeroSection` como portal de referencia
- [ ] 3.3 Cambiar copy principal a "Tu Guía de Cuidado Canino"
- [ ] 3.4 Crear componente `FeaturedArticles` para últimos artículos
- [ ] 3.5 Añadir sección de categorías principales
- [ ] 3.6 Crear componente `FeaturedGuides` para guías destacadas
- [ ] 3.7 Mover CTA de servicios a posición secundaria
- [ ] 3.8 Añadir componente `NewsletterSignup` en homepage
- [ ] 3.9 Mantener sección de testimonios
- [ ] 3.10 Optimizar para SEO (actualizar meta tags)
- [ ] 3.11 Testear responsive en móvil y tablet

### Task 4: Actualizar Navegación

- [ ] 4.1 Actualizar `components/layout/Header.tsx`
- [ ] 4.2 Cambiar estructura de navegación: Inicio, Blog, Comparativas, Guías, Sobre Mí
- [ ] 4.3 Mover "Servicios" a submenu o posición secundaria
- [ ] 4.4 Mantener botón CTA de "Reservar" visible
- [ ] 4.5 Añadir búsqueda en header (opcional para fase 1)
- [ ] 4.6 Implementar navegación sticky
- [ ] 4.7 Actualizar `components/layout/Footer.tsx` con nuevas secciones
- [ ] 4.8 Añadir enlaces a políticas en footer
- [ ] 4.9 Testear navegación en móvil (hamburger menu)

## Phase 2: Infraestructura de AdSense (Semana 2-3)

### Task 5: Componentes Base de AdSense

- [ ] 5.1 Crear carpeta `components/ads/`
- [ ] 5.2 Crear `components/ads/types.ts` con interfaces TypeScript
- [ ] 5.3 Crear `components/ads/AdSenseScript.tsx`
  - Componente que carga script de AdSense
  - Usar Next.js Script component
  - Strategy: afterInteractive
- [ ] 5.4 Añadir `AdSenseScript` a `app/layout.tsx` en <head>
- [ ] 5.5 Crear `components/ads/AdSenseUnit.tsx`
  - Componente base reutilizable
  - Props: adSlot, adFormat, adLayout, style, className
  - useEffect para push a adsbygoogle
  - Manejo de errores
- [ ] 5.6 Añadir placeholder para desarrollo (sin AdSense real)
- [ ] 5.7 Crear archivo `lib/ads/config.ts` con slots de anuncios
- [ ] 5.8 Crear archivo `lib/ads/constants.ts` con constantes
- [ ] 5.9 Añadir variable de entorno `NEXT_PUBLIC_ADSENSE_CLIENT_ID`

### Task 6: Componentes Específicos de Anuncios

- [ ] 6.1 Crear `components/ads/DisplayAd.tsx`
  - Para banners horizontales/verticales/rectangulares
  - Props: slot, format, className
  - Etiqueta "Publicidad" visible
- [ ] 6.2 Crear `components/ads/InArticleAd.tsx`
  - Para anuncios nativos dentro de artículos
  - adFormat="fluid", adLayout="in-article"
  - Espaciado apropiado (my-8)
- [ ] 6.3 Crear `components/ads/InFeedAd.tsx`
  - Para anuncios en listados de artículos
  - adFormat="fluid", adLayout="in-feed"
  - Props: slot, layoutKey
- [ ] 6.4 Crear `components/ads/StickyAd.tsx`
  - Solo visible en móvil
  - Fixed bottom
  - Botón para cerrar (X)
  - z-index apropiado
- [ ] 6.5 Crear utilidades en `lib/ads/utils.ts`
  - calculateAdPositions()
  - isAdBlockEnabled()
  - shouldShowAds()

### Task 7: Integrar Anuncios en Blog

- [ ] 7.1 Actualizar `app/blog/[slug]/page.tsx`
- [ ] 7.2 Importar componentes de anuncios
- [ ] 7.3 Añadir `DisplayAd` después del título (banner superior)
- [ ] 7.4 Añadir `InArticleAd` cada 3-5 párrafos en contenido
- [ ] 7.5 Añadir `DisplayAd` antes de artículos relacionados (banner inferior)
- [ ] 7.6 Añadir `StickyAd` al final del componente
- [ ] 7.7 Respetar límite de 3 anuncios de display por página
- [ ] 7.8 Testear en desarrollo (placeholders)
- [ ] 7.9 Verificar responsive en móvil

## Phase 3: Sistema de Afiliación (Semana 3)

### Task 8: Componentes de Afiliación

- [ ] 8.1 Crear carpeta `components/affiliate/`
- [ ] 8.2 Crear `components/affiliate/types.ts`
- [ ] 8.3 Crear `components/affiliate/AffiliateLink.tsx`
  - Props: href, program, children, showDisclosure
  - rel="nofollow sponsored noopener noreferrer"
  - target="_blank"
  - Icono de enlace externo
  - Tracking de clics (opcional)
- [ ] 8.4 Crear `components/affiliate/AffiliateDisclosure.tsx`
  - Aviso de transparencia visible
  - Texto configurable
  - Estilo destacado pero no intrusivo
- [ ] 8.5 Crear `components/affiliate/ProductCard.tsx`
  - Mostrar producto con imagen, rating, precio
  - Botón de afiliación
  - Pros y contras
- [ ] 8.6 Crear `lib/affiliate/config.ts`
  - Configuración de programas (Amazon, Tiendanimal)
  - Tags de afiliación
- [ ] 8.7 Añadir variables de entorno para tags de afiliación

### Task 9: Componentes de Comparativas

- [ ] 9.1 Crear carpeta `components/comparisons/`
- [ ] 9.2 Crear `components/comparisons/types.ts`
- [ ] 9.3 Crear `components/comparisons/ComparisonTable.tsx`
  - Tabla responsive
  - Columnas: Producto, Rating, Precio, Mejor Para, Enlace
  - Scroll horizontal en móvil
  - Destacar producto recomendado
- [ ] 9.4 Crear `components/comparisons/ProductAnalysis.tsx`
  - Análisis detallado de producto
  - Secciones: Características, Pros/Cons, Experiencia, Precio
  - Botón de afiliación destacado
- [ ] 9.5 Crear estilos CSS para tablas comparativas

## Phase 4: Schemas de Sanity (Semana 3)

### Task 10: Actualizar Schema de Posts

- [ ] 10.1 Abrir `sanity/schemas/post.ts`
- [ ] 10.2 Añadir campo `contentType`
  - type: 'string'
  - options: list con 'article', 'comparison', 'guide'
  - validation: required
- [ ] 10.3 Añadir campo `products`
  - type: 'array'
  - of: reference a 'product'
  - Solo para comparativas
- [ ] 10.4 Añadir campo `tableOfContents`
  - type: 'array'
  - of: 'block'
  - Para guías
- [ ] 10.5 Añadir campo `adPositions`
  - type: 'object'
  - fields: showTopAd, inArticleAdCount, showBottomAd
- [ ] 10.6 Actualizar `sanity/schemas/index.ts` para exportar schema actualizado
- [ ] 10.7 Ejecutar `npm run sanity:deploy` para actualizar schema

### Task 11: Crear Schema de Products

- [ ] 11.1 Crear archivo `sanity/schemas/product.ts`
- [ ] 11.2 Definir campos:
  - name (string, required)
  - slug (slug, from name)
  - image (image)
  - rating (number, 0-5)
  - price (string)
  - pros (array of strings)
  - cons (array of strings)
  - affiliateLinks (object: amazon, tiendanimal)
  - description (text)
  - category (string)
- [ ] 11.3 Añadir validaciones apropiadas
- [ ] 11.4 Exportar en `sanity/schemas/index.ts`
- [ ] 11.5 Actualizar tipos TypeScript en `lib/sanity/types.ts`
- [ ] 11.6 Crear queries en `lib/sanity/queries.ts` para productos
- [ ] 11.7 Crear helpers en `lib/sanity/helpers.ts` para productos

## Phase 5: Nuevas Rutas y Páginas (Semana 4)

### Task 12: Ruta de Comparativas

- [ ] 12.1 Crear carpeta `app/comparativas/`
- [ ] 12.2 Crear `app/comparativas/page.tsx`
  - Listar todas las comparativas
  - Filtros por categoría
  - Grid de cards
  - SEO optimizado
- [ ] 12.3 Crear carpeta `app/comparativas/[slug]/`
- [ ] 12.4 Crear `app/comparativas/[slug]/page.tsx`
  - Layout específico para comparativas
  - Disclosure de afiliación prominente
  - Tabla comparativa al inicio
  - Análisis detallado de cada producto
  - Más anuncios que artículos normales
  - Product schema markup
- [ ] 12.5 Crear función `generateStaticParams` para comparativas
- [ ] 12.6 Crear función `generateMetadata` para SEO

### Task 13: Ruta de Guías

- [ ] 13.1 Crear carpeta `app/guias/`
- [ ] 13.2 Crear `app/guias/page.tsx`
  - Listar todas las guías
  - Destacar guías pillar
  - Mostrar longitud y tiempo de lectura
- [ ] 13.3 Crear carpeta `app/guias/[slug]/`
- [ ] 13.4 Crear `app/guias/[slug]/page.tsx`
  - Layout específico para guías
  - Tabla de contenidos sticky
  - Progreso de lectura
  - Anuncios cada 2-3 secciones
  - Botón "Volver arriba"
- [ ] 13.5 Crear componente `TableOfContents`
  - Generar automáticamente desde headings
  - Enlaces ancla
  - Resaltar sección actual
  - Sticky en desktop
- [ ] 13.6 Crear componente `ProgressBar`
  - Barra superior que muestra progreso
  - Calcular basado en scroll
- [ ] 13.7 Crear funciones `generateStaticParams` y `generateMetadata`

## Phase 6: Newsletter (Semana 4)

### Task 14: Sistema de Newsletter

- [ ] 14.1 Crear carpeta `components/newsletter/`
- [ ] 14.2 Crear `components/newsletter/NewsletterSignup.tsx`
  - Formulario con email input
  - Validación de email
  - Estados: idle, loading, success, error
  - Checkbox de consentimiento RGPD
  - Mensajes de feedback
- [ ] 14.3 Crear API route `app/api/newsletter/route.ts`
  - POST endpoint
  - Validar email
  - Integrar con servicio de email (Mailchimp/ConvertKit)
  - Manejo de errores
- [ ] 14.4 Añadir NewsletterSignup en homepage
- [ ] 14.5 Añadir NewsletterSignup al final de artículos
- [ ] 14.6 Añadir NewsletterSignup en sidebar (desktop)
- [ ] 14.7 Configurar servicio de email marketing
- [ ] 14.8 Añadir variable de entorno para API key
- [ ] 14.9 Testear flujo completo

## Phase 7: SEO y Schema Markup (Semana 4)

### Task 15: Mejorar SEO

- [ ] 15.1 Crear `lib/seo/schemas.ts` con funciones para schema markup
- [ ] 15.2 Implementar Organization schema en layout principal
- [ ] 15.3 Actualizar Article schema en posts
- [ ] 15.4 Implementar Product schema en comparativas
- [ ] 15.5 Implementar FAQ schema donde aplique
- [ ] 15.6 Añadir breadcrumbs con schema markup
- [ ] 15.7 Optimizar meta descriptions (únicas por página)
- [ ] 15.8 Optimizar Open Graph tags
- [ ] 15.9 Implementar canonical URLs
- [ ] 15.10 Actualizar sitemap para incluir nuevas rutas
- [ ] 15.11 Actualizar robots.txt si es necesario
- [ ] 15.12 Verificar con Google Rich Results Test

## Phase 8: Analytics y Tracking (Semana 5)

### Task 16: Implementar Tracking

- [ ] 16.1 Crear carpeta `lib/analytics/`
- [ ] 16.2 Crear `lib/analytics/events.ts` con eventos personalizados
- [ ] 16.3 Implementar tracking de clics en enlaces de afiliación
- [ ] 16.4 Implementar tracking de scroll depth
- [ ] 16.5 Implementar tracking de tiempo de lectura
- [ ] 16.6 Implementar tracking de conversiones de newsletter
- [ ] 16.7 Crear eventos para AdSense (impresiones, clics)
- [ ] 16.8 Respetar preferencias de cookies
- [ ] 16.9 Testear eventos en Google Analytics
- [ ] 16.10 Configurar Google Search Console
- [ ] 16.11 Enviar sitemap a Search Console

## Phase 9: Testing y QA (Semana 5)

### Task 17: Testing Completo

- [ ] 17.1 Testear todos los componentes de AdSense (placeholders)
- [ ] 17.2 Testear componentes de afiliación
- [ ] 17.3 Verificar enlaces de afiliación (rel attributes correctos)
- [ ] 17.4 Testear en Chrome, Firefox, Safari
- [ ] 17.5 Testear en móvil (iOS y Android)
- [ ] 17.6 Testear con AdBlock activado
- [ ] 17.7 Verificar responsive en múltiples tamaños
- [ ] 17.8 Testear formularios (newsletter, contacto)
- [ ] 17.9 Verificar schemas con Google Rich Results Test
- [ ] 17.10 Auditoría de accesibilidad (Lighthouse)
- [ ] 17.11 Auditoría de performance (PageSpeed Insights)
- [ ] 17.12 Verificar cumplimiento de políticas de AdSense

## Phase 10: Contenido y Lanzamiento (Semana 6+)

### Task 18: Crear Contenido Inicial

- [ ] 18.1 Escribir Guía Completa de Razas Caninas (15,000 palabras)
- [ ] 18.2 Escribir Manual de Primeros Auxilios (10,000 palabras)
- [ ] 18.3 Escribir artículo: Cómo Bañar a Tu Perro en Casa
- [ ] 18.4 Escribir artículo: 10 Señales de que Tu Perro Necesita Veterinario
- [ ] 18.5 Escribir artículo: Cómo Prevenir Pulgas y Garrapatas
- [ ] 18.6 Escribir artículo: Alimentación Natural vs Pienso
- [ ] 18.7 Escribir artículo: Alimentos Prohibidos para Perros
- [ ] 18.8 Escribir artículo: Cuidados del Perro en Verano
- [ ] 18.9 Escribir comparativa: Los 7 Mejores Champús para Perros
- [ ] 18.10 Escribir comparativa: Mejores Cepillos según Tipo de Pelo
- [ ] 18.11 Escribir comparativa: Top 5 Piensos Premium
- [ ] 18.12 Escribir comparativa: Mejores Productos Antiparasitarios
- [ ] 18.13 Optimizar SEO de cada artículo
- [ ] 18.14 Añadir imágenes optimizadas (WebP)
- [ ] 18.15 Publicar contenido en Sanity

### Task 19: Solicitar Aprobación de AdSense

- [ ] 19.1 Verificar que hay 20+ artículos de calidad
- [ ] 19.2 Verificar que políticas están actualizadas
- [ ] 19.3 Verificar que página "Sobre Mí" está completa
- [ ] 19.4 Crear cuenta de Google AdSense
- [ ] 19.5 Añadir código de verificación al sitio
- [ ] 19.6 Enviar solicitud de aprobación
- [ ] 19.7 Esperar respuesta (1-2 semanas)
- [ ] 19.8 Si rechazado: corregir problemas y reenviar
- [ ] 19.9 Si aprobado: crear unidades de anuncios
- [ ] 19.10 Configurar slots en `lib/ads/config.ts`
- [ ] 19.11 Reemplazar placeholders con anuncios reales
- [ ] 19.12 Monitorear primeras 48 horas

### Task 20: Registrar Programas de Afiliación

- [ ] 20.1 Registrarse en Amazon Associates
- [ ] 20.2 Obtener tag de afiliación de Amazon
- [ ] 20.3 Registrarse en Tiendanimal Afiliados
- [ ] 20.4 Obtener partner ID de Tiendanimal
- [ ] 20.5 Configurar tags en variables de entorno
- [ ] 20.6 Añadir enlaces de afiliación a artículos existentes
- [ ] 20.7 Crear productos en Sanity CMS
- [ ] 20.8 Asociar productos a comparativas
- [ ] 20.9 Testear tracking de enlaces
- [ ] 20.10 Monitorear primeras conversiones

## Phase 11: Optimización Continua (Ongoing)

### Task 21: Monitoreo y Optimización

- [ ] 21.1 Configurar dashboard de métricas
- [ ] 21.2 Monitorear tráfico semanal (Google Analytics)
- [ ] 21.3 Monitorear ingresos AdSense
- [ ] 21.4 Monitorear conversiones de afiliación
- [ ] 21.5 Analizar artículos de mejor rendimiento
- [ ] 21.6 Optimizar posiciones de anuncios según RPM
- [ ] 21.7 A/B testing de ubicaciones de anuncios
- [ ] 21.8 Actualizar contenido antiguo
- [ ] 21.9 Añadir internal links a nuevos artículos
- [ ] 21.10 Monitorear posiciones en Google (Search Console)
- [ ] 21.11 Identificar oportunidades de nuevos artículos
- [ ] 21.12 Responder comentarios y engagement

### Task 22: Contenido Continuo

- [ ] 22.1 Publicar 2-3 artículos por semana
- [ ] 22.2 Crear calendario editorial
- [ ] 22.3 Investigar keywords con potencial
- [ ] 22.4 Escribir artículos estacionales con anticipación
- [ ] 22.5 Expandir categorías con bajo contenido
- [ ] 22.6 Crear más comparativas (alta monetización)
- [ ] 22.7 Actualizar comparativas con nuevos productos
- [ ] 22.8 Crear contenido evergreen
- [ ] 22.9 Optimizar artículos para featured snippets
- [ ] 22.10 Crear contenido multimedia (imágenes, infografías)

## Notes

- Cada tarea debe completarse y testearse antes de pasar a la siguiente
- Priorizar calidad sobre velocidad
- Documentar decisiones técnicas importantes
- Hacer commits frecuentes con mensajes descriptivos
- Testear en múltiples dispositivos y navegadores
- Mantener backup antes de cambios mayores
- Consultar documentación de AdSense y políticas regularmente
