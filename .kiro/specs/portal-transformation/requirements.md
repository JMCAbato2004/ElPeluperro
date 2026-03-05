# Requirements Document: Portal Transformation

## Introduction

Este documento define los requisitos para transformar El Peluperro de un sitio web de peluquería canina local a un portal de referencia sobre cuidado canino con múltiples fuentes de monetización (Google AdSense, afiliación y servicios locales). El objetivo es escalar de ~500 visitas/mes a 50,000+ visitas/mes en 12 meses, manteniendo la identidad de marca y aprovechando la experiencia real como peluquero profesional para construir autoridad (E-E-A-T).

## Glossary

- **Portal**: Sitio web de referencia con contenido informacional extenso
- **E-E-A-T**: Experience, Expertise, Authoritativeness, Trustworthiness (criterios de Google)
- **AdSense**: Programa de publicidad de Google para monetizar tráfico
- **Afiliación**: Comisiones por recomendar productos de terceros
- **Pillar_Content**: Contenido extenso (8,000+ palabras) que establece autoridad
- **Comparison_Article**: Artículo que compara productos con enlaces de afiliación
- **Content_Type**: Clasificación de contenido (article, comparison, guide)
- **Ad_Unit**: Unidad de anuncio de Google AdSense
- **Affiliate_Link**: Enlace con tracking de afiliación
- **Disclosure**: Aviso de transparencia sobre afiliación
- **RPM**: Revenue Per Mille (ingresos por 1000 impresiones)
- **Schema_Markup**: Datos estructurados para motores de búsqueda

## Requirements

### Requirement 1: Página "Sobre Mí" Robusta (E-E-A-T)

**User Story:** Como visitante del sitio, quiero conocer la experiencia y credenciales del autor, para confiar en sus recomendaciones y consejos.

#### Acceptance Criteria

1. THE Website SHALL incluir una página `/sobre-mi` con biografía detallada de José Antonio Camacho
2. THE Website SHALL mostrar experiencia profesional específica (años de experiencia, número de perros atendidos)
3. THE Website SHALL incluir sección "Por qué confiar en mis recomendaciones" con credenciales verificables
4. THE Website SHALL explicar la metodología de prueba de productos
5. THE Website SHALL incluir sección de transparencia sobre afiliación
6. THE Website SHALL mostrar certificaciones y formación profesional
7. THE Website SHALL incluir foto profesional del autor
8. THE Website SHALL incluir información de contacto y servicios locales
9. THE Website SHALL implementar Person schema markup para el autor
10. THE Website SHALL tener mínimo 1,500 palabras de contenido original

### Requirement 2: Políticas Legales Actualizadas

**User Story:** Como visitante, quiero saber cómo se usan mis datos y las cookies del sitio, para dar mi consentimiento informado según RGPD.

#### Acceptance Criteria

1. THE Website SHALL actualizar la Política de Privacidad incluyendo sección sobre Google AdSense
2. THE Website SHALL actualizar la Política de Cookies incluyendo cookies publicitarias
3. THE Website SHALL crear una página `/afiliacion` con política de transparencia completa
4. THE Website SHALL explicar qué son los enlaces de afiliación y cómo funcionan
5. THE Website SHALL incluir disclosure sobre comisiones recibidas
6. THE Website SHALL cumplir con requisitos de Google AdSense para políticas
7. THE Website SHALL incluir enlaces a políticas en el footer
8. THE Website SHALL actualizar el banner de cookies para incluir opción de cookies publicitarias

### Requirement 3: Homepage Rediseñada como Portal

**User Story:** Como visitante nuevo, quiero entender inmediatamente que este es un portal de referencia sobre cuidado canino, para saber que encontraré contenido valioso.

#### Acceptance Criteria

1. THE Website SHALL rediseñar el hero section presentando el sitio como "Portal de Referencia sobre Cuidado Canino"
2. THE Website SHALL mostrar los últimos 4-6 artículos destacados en la homepage
3. THE Website SHALL incluir sección de categorías principales del blog
4. THE Website SHALL mostrar guías destacadas (pillar content)
5. THE Website SHALL incluir CTA secundario para servicios locales (no principal)
6. THE Website SHALL incluir sección de newsletter signup
7. THE Website SHALL mantener la identidad visual de marca (logo, colores)
8. THE Website SHALL priorizar contenido sobre servicios en el layout
9. THE Website SHALL incluir testimonios como prueba social
10. THE Website SHALL ser completamente responsive

### Requirement 4: Navegación Actualizada

**User Story:** Como visitante, quiero navegar fácilmente entre las diferentes secciones del portal, para encontrar el contenido que busco.

#### Acceptance Criteria

1. THE Website SHALL actualizar el header con nueva estructura de navegación
2. THE Website SHALL incluir enlaces a: Inicio, Blog, Comparativas, Guías, Sobre Mí
3. THE Website SHALL mover "Servicios" a posición secundaria o submenu
4. THE Website SHALL mantener acceso rápido a reservas (CTA button)
5. THE Website SHALL incluir búsqueda de contenido en el header
6. THE Website SHALL implementar mega-menu para categorías de blog
7. THE Website SHALL ser navegación sticky en scroll
8. THE Website SHALL incluir breadcrumbs en todas las páginas internas

### Requirement 5: Sistema de Google AdSense

**User Story:** Como dueño del sitio, quiero monetizar el tráfico mediante Google AdSense, para generar ingresos adicionales sin depender solo de servicios locales.

#### Acceptance Criteria

1. THE Website SHALL implementar componente `AdSenseScript` en el layout principal
2. THE Website SHALL crear componente reutilizable `AdSenseUnit` para anuncios
3. THE Website SHALL crear componente `DisplayAd` para banners horizontales
4. THE Website SHALL crear componente `InArticleAd` para anuncios nativos dentro de artículos
5. THE Website SHALL crear componente `InFeedAd` para anuncios en listados
6. THE Website SHALL crear componente `StickyAd` para anuncios sticky en móvil
7. THE Website SHALL configurar variables de entorno para AdSense Client ID
8. THE Website SHALL incluir etiqueta "Publicidad" visible en todos los anuncios
9. THE Website SHALL respetar límite de 3 anuncios de display por página
10. THE Website SHALL implementar anuncios responsive que se adapten al dispositivo
11. THE Website SHALL mostrar placeholders en desarrollo (sin AdSense real)
12. THE Website SHALL permitir configurar posiciones de anuncios por artículo

### Requirement 6: Sistema de Afiliación

**User Story:** Como dueño del sitio, quiero monetizar recomendaciones de productos mediante afiliación, para generar comisiones cuando los usuarios compran productos que recomiendo.

#### Acceptance Criteria

1. THE Website SHALL crear componente `AffiliateLink` para enlaces de afiliación
2. THE Website SHALL añadir atributos `rel="nofollow sponsored"` a enlaces de afiliación
3. THE Website SHALL crear componente `AffiliateDisclosure` para avisos de transparencia
4. THE Website SHALL crear componente `ComparisonTable` para tablas comparativas de productos
5. THE Website SHALL configurar múltiples programas de afiliación (Amazon, Tiendanimal)
6. THE Website SHALL incluir icono de enlace externo en enlaces de afiliación
7. THE Website SHALL permitir tracking de clics en enlaces de afiliación
8. THE Website SHALL mostrar disclosure visible en artículos con afiliación
9. THE Website SHALL configurar tags de afiliación en variables de entorno

### Requirement 7: Tipos de Contenido Diferenciados

**User Story:** Como administrador, quiero poder crear diferentes tipos de contenido (artículos, comparativas, guías), para organizar mejor el contenido y aplicar layouts específicos.

#### Acceptance Criteria

1. THE Website SHALL actualizar schema de Sanity para incluir campo `contentType`
2. THE Website SHALL permitir valores: 'article', 'comparison', 'guide'
3. THE Website SHALL crear schema `product` en Sanity para productos en comparativas
4. THE Website SHALL permitir asociar productos a posts de tipo 'comparison'
5. THE Website SHALL incluir campos específicos para productos (rating, precio, pros, cons, enlaces)
6. THE Website SHALL permitir configurar posiciones de anuncios por artículo
7. THE Website SHALL incluir campo `tableOfContents` para guías largas
8. THE Website SHALL generar automáticamente tabla de contenidos en guías
9. THE Website SHALL aplicar layouts diferentes según tipo de contenido

### Requirement 8: Rutas y Páginas Nuevas

**User Story:** Como visitante, quiero acceder a secciones específicas de comparativas y guías, para encontrar fácilmente el tipo de contenido que busco.

#### Acceptance Criteria

1. THE Website SHALL crear ruta `/comparativas` con listado de comparativas
2. THE Website SHALL crear ruta `/comparativas/[slug]` para comparativas individuales
3. THE Website SHALL crear ruta `/guias` con listado de guías
4. THE Website SHALL crear ruta `/guias/[slug]` para guías individuales
5. THE Website SHALL crear ruta `/sobre-mi` para página del autor
6. THE Website SHALL crear ruta `/afiliacion` para política de afiliación
7. THE Website SHALL mantener rutas existentes de blog y servicios
8. THE Website SHALL implementar filtrado por tipo de contenido en listados
9. THE Website SHALL generar sitemap incluyendo nuevas rutas

### Requirement 9: Layout de Artículos con Anuncios

**User Story:** Como visitante, quiero leer artículos con anuncios que no interrumpan excesivamente la experiencia de lectura, para obtener información valiosa sin frustración.

#### Acceptance Criteria

1. THE Website SHALL mostrar máximo 1 anuncio above the fold
2. THE Website SHALL incluir anuncio banner superior después del título
3. THE Website SHALL insertar anuncios in-article cada 3-5 párrafos
4. THE Website SHALL incluir anuncio banner inferior antes de artículos relacionados
5. THE Website SHALL mostrar anuncio sticky en móvil (dismissible)
6. THE Website SHALL mantener ratio contenido/anuncios de al menos 70/30
7. THE Website SHALL mostrar disclosure de afiliación si el artículo contiene enlaces
8. THE Website SHALL permitir cerrar anuncio sticky móvil
9. THE Website SHALL cargar anuncios de forma asíncrona sin bloquear contenido
10. THE Website SHALL respetar preferencias de cookies del usuario

### Requirement 10: Layout de Comparativas

**User Story:** Como visitante interesado en comprar un producto, quiero ver comparativas claras con pros/cons y enlaces directos, para tomar una decisión de compra informada.

#### Acceptance Criteria

1. THE Website SHALL mostrar tabla comparativa rápida al inicio del artículo
2. THE Website SHALL incluir columnas: Producto, Rating, Precio, Mejor Para, Enlace
3. THE Website SHALL mostrar análisis detallado de cada producto
4. THE Website SHALL incluir sección de pros y contras para cada producto
5. THE Website SHALL incluir experiencia personal del autor con cada producto
6. THE Website SHALL mostrar botones de afiliación destacados
7. THE Website SHALL incluir disclosure de afiliación prominente
8. THE Website SHALL mostrar más anuncios que en artículos normales (mayor monetización)
9. THE Website SHALL incluir sección "Guía de compra" antes de las comparativas
10. THE Website SHALL implementar Product schema markup

### Requirement 11: Layout de Guías Pillar

**User Story:** Como visitante buscando información exhaustiva, quiero acceder a guías completas con tabla de contenidos navegable, para encontrar rápidamente la sección que necesito.

#### Acceptance Criteria

1. THE Website SHALL generar tabla de contenidos automática con enlaces ancla
2. THE Website SHALL hacer la tabla de contenidos sticky durante scroll
3. THE Website SHALL resaltar la sección actual en la tabla de contenidos
4. THE Website SHALL incluir botón "Volver arriba" en guías largas
5. THE Website SHALL mostrar progreso de lectura (barra superior)
6. THE Website SHALL incluir anuncios cada 2-3 secciones principales
7. THE Website SHALL incluir CTA de newsletter al final de cada capítulo
8. THE Website SHALL mostrar tiempo estimado de lectura
9. THE Website SHALL permitir compartir secciones específicas
10. THE Website SHALL incluir recursos descargables si aplica

### Requirement 12: Optimización SEO Mejorada

**User Story:** Como dueño del sitio, quiero que el contenido posicione bien en Google, para atraer tráfico orgánico masivo.

#### Acceptance Criteria

1. THE Website SHALL implementar Organization schema markup
2. THE Website SHALL implementar Article schema en todos los posts
3. THE Website SHALL implementar Product schema en comparativas
4. THE Website SHALL implementar FAQ schema donde aplique
5. THE Website SHALL generar meta descriptions únicas por artículo
6. THE Website SHALL incluir Open Graph tags optimizados
7. THE Website SHALL generar URLs amigables basadas en keywords
8. THE Website SHALL implementar canonical URLs
9. THE Website SHALL optimizar imágenes (WebP, alt text descriptivo)
10. THE Website SHALL generar sitemap dinámico con prioridades correctas
11. THE Website SHALL incluir breadcrumbs con schema markup
12. THE Website SHALL implementar internal linking automático

### Requirement 13: Sistema de Newsletter

**User Story:** Como visitante que encuentra valor en el contenido, quiero suscribirme a una newsletter, para recibir nuevos artículos y consejos por email.

#### Acceptance Criteria

1. THE Website SHALL crear componente `NewsletterSignup` reutilizable
2. THE Website SHALL incluir formulario de suscripción en homepage
3. THE Website SHALL incluir formulario al final de artículos
4. THE Website SHALL incluir formulario en sidebar (desktop)
5. THE Website SHALL validar formato de email
6. THE Website SHALL mostrar mensaje de confirmación tras suscripción
7. THE Website SHALL integrar con servicio de email marketing (API)
8. THE Website SHALL cumplir con RGPD (checkbox de consentimiento)
9. THE Website SHALL incluir enlace de cancelación en emails
10. THE Website SHALL mostrar número de suscriptores (social proof)

### Requirement 14: Analytics y Tracking

**User Story:** Como dueño del sitio, quiero medir el rendimiento del contenido y monetización, para optimizar la estrategia.

#### Acceptance Criteria

1. THE Website SHALL mantener Google Analytics 4 configurado
2. THE Website SHALL trackear eventos personalizados (clics en afiliación)
3. THE Website SHALL trackear scroll depth en artículos
4. THE Website SHALL trackear tiempo de lectura real
5. THE Website SHALL integrar con Google Search Console
6. THE Website SHALL trackear conversiones de newsletter
7. THE Website SHALL permitir ver métricas por tipo de contenido
8. THE Website SHALL respetar preferencias de cookies para tracking
9. THE Website SHALL implementar eventos de AdSense
10. THE Website SHALL crear dashboard de métricas clave

### Requirement 15: Componente de Productos

**User Story:** Como administrador, quiero gestionar productos recomendados de forma centralizada, para reutilizarlos en múltiples artículos.

#### Acceptance Criteria

1. THE Website SHALL crear schema `product` en Sanity CMS
2. THE Website SHALL permitir campos: nombre, slug, imagen, rating, precio, pros, cons
3. THE Website SHALL permitir múltiples enlaces de afiliación por producto
4. THE Website SHALL incluir campo de descripción del producto
5. THE Website SHALL permitir categorizar productos
6. THE Website SHALL crear componente `ProductCard` para mostrar productos
7. THE Website SHALL permitir buscar y filtrar productos en Sanity
8. THE Website SHALL reutilizar productos en múltiples comparativas
9. THE Website SHALL actualizar precio centralizadamente

### Requirement 16: Migración de Contenido Existente

**User Story:** Como dueño del sitio, quiero mantener el contenido existente mientras añado nuevo contenido, para no perder el trabajo ya realizado.

#### Acceptance Criteria

1. THE Website SHALL mantener todos los artículos de blog existentes
2. THE Website SHALL mantener la página de servicios (en posición secundaria)
3. THE Website SHALL mantener la galería de trabajos
4. THE Website SHALL mantener los testimonios
5. THE Website SHALL reclasificar artículos existentes por tipo de contenido
6. THE Website SHALL actualizar artículos existentes con nuevos componentes
7. THE Website SHALL añadir disclosure de afiliación a artículos con productos
8. THE Website SHALL mantener URLs existentes (redirects si es necesario)
9. THE Website SHALL actualizar meta tags de artículos existentes

### Requirement 17: Responsive y Mobile-First

**User Story:** Como visitante móvil, quiero que el portal funcione perfectamente en mi dispositivo, para leer artículos cómodamente desde cualquier lugar.

#### Acceptance Criteria

1. THE Website SHALL renderizar correctamente en móviles (320px+)
2. THE Website SHALL adaptar anuncios al tamaño de pantalla
3. THE Website SHALL mostrar anuncio sticky solo en móvil
4. THE Website SHALL hacer tabla de contenidos colapsable en móvil
5. THE Website SHALL optimizar tablas comparativas para móvil (scroll horizontal)
6. THE Website SHALL usar fuentes legibles en móvil (16px mínimo)
7. THE Website SHALL optimizar imágenes para conexiones lentas
8. THE Website SHALL implementar lazy loading de imágenes
9. THE Website SHALL mantener velocidad de carga <3s en 4G
10. THE Website SHALL lograr score >90 en Lighthouse Mobile

### Requirement 18: Accesibilidad

**User Story:** Como usuario con discapacidad, quiero poder navegar el portal con tecnologías asistivas, para acceder al contenido sin barreras.

#### Acceptance Criteria

1. THE Website SHALL cumplir WCAG 2.1 nivel AA
2. THE Website SHALL incluir alt text descriptivo en todas las imágenes
3. THE Website SHALL mantener contraste de color mínimo 4.5:1
4. THE Website SHALL permitir navegación completa por teclado
5. THE Website SHALL incluir skip links
6. THE Website SHALL usar etiquetas ARIA apropiadas
7. THE Website SHALL hacer anuncios accesibles (etiquetados correctamente)
8. THE Website SHALL incluir transcripciones si hay videos
9. THE Website SHALL usar headings jerárquicos correctos
10. THE Website SHALL testear con lectores de pantalla

### Requirement 19: Performance y Optimización

**User Story:** Como visitante con conexión lenta, quiero que el sitio cargue rápidamente, para no abandonar por frustración.

#### Acceptance Criteria

1. THE Website SHALL lograr score >90 en PageSpeed Insights
2. THE Website SHALL implementar lazy loading para imágenes below the fold
3. THE Website SHALL usar formato WebP para imágenes
4. THE Website SHALL minimizar CSS y JavaScript
5. THE Website SHALL implementar code splitting por ruta
6. THE Website SHALL usar caché de navegador agresivo
7. THE Website SHALL precargar recursos críticos
8. THE Website SHALL diferir carga de scripts no críticos
9. THE Website SHALL optimizar fuentes (font-display: swap)
10. THE Website SHALL cargar anuncios de forma asíncrona
11. THE Website SHALL implementar Service Worker para PWA
12. THE Website SHALL medir Core Web Vitals

### Requirement 20: Testing y Quality Assurance

**User Story:** Como desarrollador, quiero asegurar que todos los componentes funcionen correctamente, para evitar errores en producción.

#### Acceptance Criteria

1. THE Website SHALL incluir tests unitarios para componentes críticos
2. THE Website SHALL testear componentes de AdSense en desarrollo
3. THE Website SHALL testear enlaces de afiliación (tracking correcto)
4. THE Website SHALL verificar que anuncios no se muestren con AdBlock
5. THE Website SHALL testear en múltiples navegadores (Chrome, Firefox, Safari)
6. THE Website SHALL testear en múltiples dispositivos
7. THE Website SHALL verificar cumplimiento de políticas de AdSense
8. THE Website SHALL testear formularios (newsletter, contacto)
9. THE Website SHALL verificar que schemas sean válidos
10. THE Website SHALL realizar auditoría de accesibilidad

## Success Metrics

### Tráfico
- Mes 3: 5,000 visitas/mes
- Mes 6: 15,000 visitas/mes
- Mes 12: 50,000+ visitas/mes

### Contenido
- Mes 2: 20 artículos publicados
- Mes 6: 60 artículos publicados
- Mes 12: 100+ artículos publicados

### Monetización
- Mes 3: Aprobación de AdSense
- Mes 6: €200-500/mes (AdSense + Afiliación)
- Mes 12: €1,000-2,000/mes

### SEO
- Mes 6: 20+ keywords en top 10 de Google
- Mes 12: 100+ keywords en top 10 de Google
- Domain Authority: 30+ (Moz)

### Engagement
- Tiempo en página: 3+ minutos
- Tasa de rebote: <60%
- Páginas por sesión: 2+
- Newsletter: 1,000+ suscriptores (mes 12)
