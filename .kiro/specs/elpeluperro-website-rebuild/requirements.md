# Requirements Document

## Introduction

Este documento define los requisitos para la reconstrucción completa del sitio web de El Peluperro, una peluquería canina móvil que opera en Alcalá de Guadaíra y Sevilla. El objetivo es crear una experiencia web moderna, divertida e interactiva que refleje la naturaleza móvil del servicio, facilite las reservas online, y proporcione contenido valioso a los dueños de mascotas, todo mientras mantiene la identidad visual existente de la marca.

## Glossary

- **Website**: El sitio web completo de El Peluperro
- **User**: Dueño de mascota que visita el sitio web
- **Admin**: José Antonio Camacho o personal autorizado que gestiona el contenido
- **Booking_System**: Sistema de reservas y citas online
- **Service_Area**: Zona geográfica de cobertura (Alcalá de Guadaíra y Sevilla)
- **Mobile_Service**: Servicio de peluquería canina que se desplaza al domicilio del cliente
- **Gallery**: Galería de fotos antes/después de servicios realizados
- **Blog**: Sección de artículos con consejos de cuidado canino
- **Interactive_Element**: Elementos divertidos como animaciones, quizzes, calculadoras
- **SEO**: Search Engine Optimization (optimización para motores de búsqueda)
- **Responsive_Design**: Diseño que se adapta a diferentes tamaños de pantalla
- **Brand_Identity**: Logo y colores actuales de El Peluperro que deben mantenerse
- **PWA**: Progressive Web App, aplicación web que funciona como app nativa
- **Service_Worker**: Script que permite funcionalidad offline y notificaciones push

## Requirements

### Requirement 1: Identidad Visual y Branding

**User Story:** Como dueño del negocio, quiero mantener la identidad visual actual de mi marca, para que los clientes existentes reconozcan la nueva web.

#### Acceptance Criteria

1. THE Website SHALL utilizar el logo actual de El Peluperro sin modificaciones
2. THE Website SHALL mantener los colores principales de la marca actual
3. THE Website SHALL aplicar los colores de marca de forma consistente en todas las páginas
4. THE Website SHALL incluir el nombre "José Antonio Camacho" como dueño del negocio

### Requirement 2: Diseño Responsive y Mobile-First

**User Story:** Como usuario que navega desde mi móvil, quiero que la web funcione perfectamente en mi dispositivo, para poder acceder a los servicios desde cualquier lugar.

#### Acceptance Criteria

1. THE Website SHALL renderizar correctamente en dispositivos móviles (320px - 768px de ancho)
2. THE Website SHALL renderizar correctamente en tablets (768px - 1024px de ancho)
3. THE Website SHALL renderizar correctamente en escritorio (1024px+ de ancho)
4. WHEN a User accede desde cualquier dispositivo, THE Website SHALL mantener la funcionalidad completa
5. THE Website SHALL cargar en menos de 3 segundos en conexiones 4G móviles

### Requirement 3: Sistema de Reservas Online

**User Story:** Como usuario, quiero poder solicitar una cita online, para no tener que llamar por teléfono durante horario laboral.

#### Acceptance Criteria

1. THE Booking_System SHALL proporcionar un formulario de solicitud de cita
2. WHEN a User completa el formulario, THE Booking_System SHALL capturar nombre, teléfono, dirección, tipo de servicio, fecha preferida y comentarios
3. WHEN a User envía una solicitud, THE Booking_System SHALL enviar una notificación al Admin
4. WHEN a User envía una solicitud, THE Booking_System SHALL mostrar un mensaje de confirmación
5. THE Booking_System SHALL validar que la dirección esté dentro del Service_Area
6. IF la dirección está fuera del Service_Area, THEN THE Booking_System SHALL mostrar un mensaje informativo

### Requirement 4: Página de Servicios

**User Story:** Como usuario, quiero ver todos los servicios disponibles con descripciones detalladas, para decidir qué necesita mi mascota.

#### Acceptance Criteria

1. THE Website SHALL mostrar los servicios: Baño, Peluquería, y Antiparasitarios
2. THE Website SHALL incluir descripción detallada para cada servicio
3. THE Website SHALL mostrar precios orientativos o rangos de precio para cada servicio
4. THE Website SHALL incluir duración estimada para cada servicio
5. WHEN a User visualiza un servicio, THE Website SHALL mostrar imágenes representativas

### Requirement 5: Galería Antes/Después

**User Story:** Como usuario, quiero ver ejemplos de trabajos realizados, para confiar en la calidad del servicio.

#### Acceptance Criteria

1. THE Gallery SHALL mostrar fotos de antes y después de servicios realizados
2. THE Gallery SHALL organizar las fotos por tipo de servicio
3. WHEN a User hace clic en una foto, THE Gallery SHALL mostrar la imagen en tamaño completo
4. THE Gallery SHALL incluir al menos 12 ejemplos de trabajos
5. THE Gallery SHALL cargar las imágenes de forma optimizada (lazy loading)

### Requirement 6: Sección de Testimonios

**User Story:** Como usuario, quiero leer opiniones de otros clientes, para tener confianza en el servicio.

#### Acceptance Criteria

1. THE Website SHALL mostrar una sección de testimonios de clientes
2. THE Website SHALL incluir nombre del cliente y raza del perro en cada testimonio
3. THE Website SHALL mostrar al menos 6 testimonios
4. THE Website SHALL permitir navegación entre testimonios si hay más de 6
5. WHERE disponible, THE Website SHALL incluir foto del cliente con su mascota

### Requirement 7: Blog de Consejos Caninos

**User Story:** Como usuario interesado en el cuidado de mi mascota, quiero leer artículos con consejos, para mantener a mi perro saludable.

#### Acceptance Criteria

1. THE Blog SHALL mostrar artículos sobre cuidado e higiene canina
2. THE Blog SHALL incluir los consejos existentes de la web actual
3. WHEN a User accede al Blog, THE Blog SHALL mostrar los artículos más recientes primero
4. THE Blog SHALL permitir navegación por categorías (higiene, alimentación, salud, etc.)
5. THE Blog SHALL incluir funcionalidad de búsqueda de artículos
6. WHEN a User hace clic en un artículo, THE Blog SHALL mostrar el contenido completo
7. THE Blog SHALL mostrar tiempo estimado de lectura para cada artículo

### Requirement 8: Mapa de Zona de Cobertura

**User Story:** Como usuario, quiero saber si el servicio llega a mi zona, para no perder tiempo solicitando cita si no es posible.

#### Acceptance Criteria

1. THE Website SHALL mostrar un mapa interactivo del Service_Area
2. THE Website SHALL marcar claramente Alcalá de Guadaíra y Sevilla en el mapa
3. THE Website SHALL listar los barrios o zonas específicas cubiertas
4. WHEN a User visualiza el mapa, THE Website SHALL permitir zoom y navegación
5. THE Website SHALL incluir información de contacto para consultas sobre zonas limítrofes

### Requirement 9: Calculadora de Precios Interactiva

**User Story:** Como usuario, quiero estimar el precio del servicio para mi mascota, para planificar mi presupuesto.

#### Acceptance Criteria

1. THE Interactive_Element SHALL proporcionar una calculadora de precios
2. WHEN a User selecciona tipo de servicio, raza y tamaño del perro, THE Interactive_Element SHALL calcular un precio estimado
3. THE Interactive_Element SHALL mostrar un rango de precio (mínimo - máximo)
4. THE Interactive_Element SHALL incluir un disclaimer indicando que es un precio orientativo
5. THE Interactive_Element SHALL permitir seleccionar servicios múltiples para calcular precio total

### Requirement 10: Quiz "¿Qué Servicio Necesita Tu Perro?"

**User Story:** Como usuario que no está seguro de qué servicio necesita mi mascota, quiero hacer un quiz divertido, para recibir una recomendación personalizada.

#### Acceptance Criteria

1. THE Interactive_Element SHALL proporcionar un quiz de 5-7 preguntas
2. WHEN a User completa el quiz, THE Interactive_Element SHALL recomendar uno o más servicios
3. THE Interactive_Element SHALL incluir preguntas sobre: última visita al peluquero, estado del pelaje, comportamiento del perro, necesidades especiales
4. THE Interactive_Element SHALL mostrar el resultado con explicación de por qué se recomienda ese servicio
5. WHEN el quiz muestra resultados, THE Interactive_Element SHALL incluir un botón para solicitar cita directamente

### Requirement 11: Animaciones y Elementos Divertidos

**User Story:** Como usuario, quiero que la web sea visualmente atractiva y divertida, para disfrutar de la experiencia de navegación.

#### Acceptance Criteria

1. THE Website SHALL incluir animaciones sutiles de perritos en la página principal
2. THE Website SHALL incluir micro-interacciones al hacer hover sobre botones y enlaces
3. THE Website SHALL utilizar transiciones suaves entre secciones
4. THE Website SHALL incluir iconos temáticos relacionados con perros y peluquería
5. THE Website SHALL mantener las animaciones ligeras para no afectar el rendimiento

### Requirement 12: Optimización SEO

**User Story:** Como dueño del negocio, quiero que mi web aparezca en los primeros resultados de Google, para atraer más clientes.

#### Acceptance Criteria

1. THE Website SHALL incluir meta tags optimizados en todas las páginas
2. THE Website SHALL generar un sitemap.xml automáticamente
3. THE Website SHALL implementar schema markup para negocio local
4. THE Website SHALL optimizar todas las imágenes para web (formato WebP, compresión)
5. THE Website SHALL incluir títulos y descripciones únicos para cada página
6. THE Website SHALL implementar URLs amigables (slug-based)
7. THE Website SHALL incluir etiquetas Open Graph para compartir en redes sociales
8. THE Website SHALL lograr un score mínimo de 90 en Google PageSpeed Insights
9. THE Website SHALL incluir texto alternativo descriptivo en todas las imágenes

### Requirement 13: Gestión de Contenido del Blog

**User Story:** Como administrador, quiero poder crear y editar artículos del blog fácilmente, para mantener el contenido actualizado.

#### Acceptance Criteria

1. THE Blog SHALL proporcionar un panel de administración para gestionar artículos
2. WHEN Admin crea un artículo, THE Blog SHALL permitir usar un editor WYSIWYG
3. THE Blog SHALL permitir añadir imágenes a los artículos
4. THE Blog SHALL permitir programar publicación de artículos para fechas futuras
5. THE Blog SHALL permitir categorizar y etiquetar artículos
6. THE Blog SHALL generar automáticamente URLs amigables desde el título del artículo

### Requirement 14: Información de Contacto y Ubicación

**User Story:** Como usuario, quiero encontrar fácilmente cómo contactar con El Peluperro, para hacer consultas o solicitar información.

#### Acceptance Criteria

1. THE Website SHALL mostrar número de teléfono en todas las páginas (header o footer)
2. THE Website SHALL incluir enlace directo a WhatsApp con mensaje pre-rellenado
3. THE Website SHALL mostrar email de contacto
4. THE Website SHALL incluir formulario de contacto general
5. THE Website SHALL mostrar horario de atención
6. WHEN a User envía el formulario de contacto, THE Website SHALL enviar notificación al Admin

### Requirement 15: Sección "Sobre Nosotros"

**User Story:** Como usuario, quiero conocer la historia y experiencia del peluquero, para sentir confianza en el servicio.

#### Acceptance Criteria

1. THE Website SHALL incluir una página "Sobre Nosotros"
2. THE Website SHALL presentar a José Antonio Camacho con foto y biografía
3. THE Website SHALL destacar la experiencia y cualificaciones
4. THE Website SHALL explicar el concepto de Mobile_Service
5. THE Website SHALL incluir la misión y valores del negocio

### Requirement 16: Gestión de Imágenes

**User Story:** Como desarrollador, quiero usar imágenes placeholder o generadas con IA, para que el cliente pueda reemplazarlas con fotos reales posteriormente.

#### Acceptance Criteria

1. THE Website SHALL utilizar imágenes generadas con IA o placeholders de alta calidad
2. THE Website SHALL organizar las imágenes en carpetas por sección (servicios, galería, blog)
3. THE Website SHALL documentar qué imágenes deben ser reemplazadas con fotos reales
4. THE Website SHALL mantener dimensiones consistentes para facilitar el reemplazo
5. THE Website SHALL incluir nombres de archivo descriptivos para cada imagen

### Requirement 17: Rendimiento y Carga

**User Story:** Como usuario con conexión lenta, quiero que la web cargue rápidamente, para no abandonar el sitio por frustración.

#### Acceptance Criteria

1. THE Website SHALL implementar lazy loading para imágenes
2. THE Website SHALL minimizar y comprimir archivos CSS y JavaScript
3. THE Website SHALL utilizar caché del navegador para recursos estáticos
4. THE Website SHALL cargar contenido crítico primero (above the fold)
5. THE Website SHALL mostrar indicadores de carga durante operaciones asíncronas

### Requirement 18: Accesibilidad

**User Story:** Como usuario con discapacidad visual, quiero poder navegar la web con lector de pantalla, para acceder a los servicios.

#### Acceptance Criteria

1. THE Website SHALL cumplir con WCAG 2.1 nivel AA
2. THE Website SHALL incluir atributos ARIA donde sea necesario
3. THE Website SHALL permitir navegación completa por teclado
4. THE Website SHALL mantener contraste de color mínimo de 4.5:1 para texto
5. THE Website SHALL incluir skip links para navegación rápida

### Requirement 19: Integración con Redes Sociales

**User Story:** Como usuario, quiero poder seguir a El Peluperro en redes sociales, para ver actualizaciones y contenido adicional.

#### Acceptance Criteria

1. THE Website SHALL incluir enlaces a perfiles de redes sociales en el footer
2. THE Website SHALL incluir botones para compartir servicios y artículos del blog
3. WHERE disponible, THE Website SHALL mostrar feed de Instagram con fotos recientes
4. THE Website SHALL incluir meta tags Open Graph para vista previa en redes sociales

### Requirement 20: Política de Privacidad y Cookies

**User Story:** Como usuario preocupado por mi privacidad, quiero saber cómo se usan mis datos, para dar mi consentimiento informado.

#### Acceptance Criteria

1. THE Website SHALL incluir una página de Política de Privacidad
2. THE Website SHALL incluir una página de Política de Cookies
3. WHEN a User visita por primera vez, THE Website SHALL mostrar un banner de consentimiento de cookies
4. THE Website SHALL cumplir con RGPD (Reglamento General de Protección de Datos)
5. THE Website SHALL permitir al User aceptar o rechazar cookies no esenciales

### Requirement 21: Progressive Web App (PWA)

**User Story:** Como usuario móvil, quiero poder instalar la web en mi pantalla de inicio, para acceder rápidamente como si fuera una app nativa.

#### Acceptance Criteria

1. THE Website SHALL implementar un manifest.json con configuración completa de PWA
2. THE Website SHALL incluir iconos de app en múltiples tamaños (192x192, 512x512)
3. THE Website SHALL implementar un Service_Worker para funcionalidad offline
4. WHEN a User visita desde móvil, THE Website SHALL mostrar el prompt de instalación "Añadir a pantalla de inicio"
5. WHEN la app está instalada, THE Website SHALL funcionar en modo standalone (sin barra de navegador)
6. THE Website SHALL cachear recursos críticos para funcionamiento offline básico
7. THE Website SHALL mostrar una pantalla de splash personalizada al abrir la app instalada
8. THE Website SHALL utilizar el logo de El Peluperro como icono de la app
9. THE Website SHALL mantener transiciones y navegación fluidas como app nativa
10. THE Website SHALL lograr un score mínimo de 90 en PWA audit de Lighthouse
