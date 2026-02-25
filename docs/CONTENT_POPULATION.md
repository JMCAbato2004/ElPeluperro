# Guía de Población de Contenido Inicial

Esta guía detalla cómo poblar el contenido inicial en Sanity CMS para El Peluperro.

## Requisitos Previos

1. Sanity Studio configurado y accesible
2. Usuario admin creado
3. Schemas de contenido desplegados

## 1. Servicios

### Servicio: Baño Básico

**Datos a ingresar:**
- **Nombre**: Baño Básico
- **Slug**: bano-basico
- **Descripción corta**: Baño completo con champú profesional, secado y cepillado básico
- **Descripción completa**: 
  ```
  Nuestro servicio de baño básico incluye todo lo necesario para mantener a tu perro limpio y saludable. 
  Utilizamos productos profesionales adaptados al tipo de pelaje de tu mascota.
  
  El servicio incluye:
  - Baño con champú profesional de calidad
  - Acondicionador si es necesario
  - Secado completo con secador profesional
  - Cepillado básico para eliminar pelo muerto
  - Limpieza de oídos
  - Corte de uñas
  - Vaciado de glándulas anales (si es necesario)
  ```
- **Precio mínimo**: 25
- **Precio máximo**: 45
- **Duración**: 60 minutos
- **Features** (array):
  - Champú profesional adaptado
  - Secado y cepillado
  - Limpieza de oídos
  - Corte de uñas
  - Vaciado de glándulas
- **Icono**: 🛁
- **Order**: 1
- **Imágenes**: Usar placeholders de perros siendo bañados

### Servicio: Peluquería Completa

**Datos a ingresar:**
- **Nombre**: Peluquería Completa
- **Slug**: peluqueria-completa
- **Descripción corta**: Baño, corte de pelo profesional y estilizado según raza
- **Descripción completa**:
  ```
  Servicio completo de peluquería canina que incluye baño y corte de pelo profesional 
  adaptado a la raza y preferencias del dueño.
  
  El servicio incluye:
  - Todo lo del baño básico
  - Corte de pelo profesional según raza
  - Estilizado y acabado
  - Desenredado si es necesario
  - Perfumado con colonia canina
  - Lazo o pañuelo decorativo
  ```
- **Precio mínimo**: 40
- **Precio máximo**: 70
- **Duración**: 90 minutos
- **Features**:
  - Todo lo del baño básico
  - Corte profesional según raza
  - Desenredado incluido
  - Estilizado y acabado
  - Perfumado
  - Lazo decorativo
- **Icono**: ✂️
- **Order**: 2
- **Imágenes**: Placeholders de perros con cortes profesionales

### Servicio: Tratamiento Antiparasitario

**Datos a ingresar:**
- **Nombre**: Tratamiento Antiparasitario
- **Slug**: antiparasitarios
- **Descripción corta**: Tratamiento completo contra pulgas, garrapatas y parásitos externos
- **Descripción completa**:
  ```
  Tratamiento profesional antiparasitario para proteger a tu perro de pulgas, garrapatas 
  y otros parásitos externos.
  
  El servicio incluye:
  - Baño con champú antiparasitario específico
  - Aplicación de pipeta o spray antiparasitario
  - Revisión completa del pelaje
  - Consejos de prevención
  - Productos de calidad veterinaria
  ```
- **Precio mínimo**: 30
- **Precio máximo**: 50
- **Duración**: 45 minutos
- **Features**:
  - Champú antiparasitario
  - Pipeta o spray profesional
  - Revisión completa
  - Productos veterinarios
  - Consejos de prevención
- **Icono**: 🐛
- **Order**: 3
- **Imágenes**: Placeholders de productos antiparasitarios

---

## 2. Categorías de Blog

Crear las siguientes categorías:

### Categoría: Higiene
- **Título**: Higiene
- **Slug**: higiene
- **Descripción**: Consejos y guías sobre higiene y cuidado del pelaje de tu perro

### Categoría: Alimentación
- **Título**: Alimentación
- **Slug**: alimentacion
- **Descripción**: Guías sobre nutrición y alimentación saludable para perros

### Categoría: Salud
- **Título**: Salud
- **Slug**: salud
- **Descripción**: Información sobre salud, prevención y cuidados veterinarios

### Categoría: Comportamiento
- **Título**: Comportamiento
- **Slug**: comportamiento
- **Descripción**: Consejos sobre educación, adiestramiento y comportamiento canino

---

## 3. Posts de Blog

### Post 1: Cómo bañar a tu perro en casa

- **Título**: Cómo bañar a tu perro en casa: Guía completa paso a paso
- **Slug**: como-banar-perro-en-casa
- **Categoría**: Higiene
- **Tags**: baño, higiene, cuidados, tutorial
- **Excerpt**: Aprende a bañar a tu perro correctamente en casa con esta guía paso a paso. Consejos profesionales para un baño seguro y efectivo.
- **Fecha de publicación**: Fecha actual - 30 días
- **Autor**: José Antonio Camacho
- **Contenido**: (Ver archivo de ejemplo en sanity/content-examples/blog-posts.md)

### Post 2: Frecuencia ideal de baño según raza

- **Título**: ¿Con qué frecuencia debo bañar a mi perro? Guía según raza
- **Slug**: frecuencia-bano-perro-segun-raza
- **Categoría**: Higiene
- **Tags**: baño, razas, cuidados, frecuencia
- **Excerpt**: La frecuencia de baño varía según la raza y tipo de pelaje. Descubre cuál es la ideal para tu perro.
- **Fecha de publicación**: Fecha actual - 25 días

### Post 3: Productos de higiene canina

- **Título**: Los mejores productos de higiene para tu perro
- **Slug**: mejores-productos-higiene-canina
- **Categoría**: Higiene
- **Tags**: productos, champú, higiene, recomendaciones
- **Excerpt**: Guía completa de productos de higiene canina: champús, acondicionadores y más.
- **Fecha de publicación**: Fecha actual - 20 días

### Post 4: Alimentación saludable para perros

- **Título**: Guía de alimentación saludable para perros
- **Slug**: alimentacion-saludable-perros
- **Categoría**: Alimentación
- **Tags**: nutrición, comida, salud, dieta
- **Excerpt**: Todo lo que necesitas saber sobre la alimentación de tu perro para mantenerlo sano y feliz.
- **Fecha de publicación**: Fecha actual - 15 días

### Post 5: Prevención de parásitos

- **Título**: Cómo prevenir pulgas y garrapatas en tu perro
- **Slug**: prevencion-pulgas-garrapatas
- **Categoría**: Salud
- **Tags**: parásitos, prevención, salud, antiparasitarios
- **Excerpt**: Guía completa de prevención de parásitos externos en perros. Métodos efectivos y seguros.
- **Fecha de publicación**: Fecha actual - 10 días

---

## 4. Testimonios

### Testimonio 1
- **Nombre del cliente**: María González
- **Raza del perro**: Golden Retriever
- **Contenido**: "Excelente servicio a domicilio. José Antonio es muy profesional y mi perro quedó precioso. Lo mejor es que no tuve que salir de casa. ¡Totalmente recomendado!"
- **Rating**: 5
- **Featured**: Sí
- **Fecha**: Fecha actual - 5 días
- **Imagen**: Placeholder de Golden Retriever

### Testimonio 2
- **Nombre del cliente**: Carlos Ruiz
- **Raza del perro**: Yorkshire Terrier
- **Contenido**: "Mi Yorkshire tiene el pelo muy delicado y siempre me daba miedo llevarlo a cualquier sitio. El Peluperro hizo un trabajo increíble, con mucho cuidado y paciencia."
- **Rating**: 5
- **Featured**: Sí
- **Fecha**: Fecha actual - 8 días
- **Imagen**: Placeholder de Yorkshire

### Testimonio 3
- **Nombre del cliente**: Ana Martínez
- **Raza del perro**: Labrador
- **Contenido**: "Servicio rápido y eficiente. Mi Labrador quedó limpio y oliendo genial. El precio es muy razonable para la calidad del servicio."
- **Rating**: 5
- **Featured**: Sí
- **Fecha**: Fecha actual - 12 días
- **Imagen**: Placeholder de Labrador

### Testimonio 4
- **Nombre del cliente**: Pedro Sánchez
- **Raza del perro**: Caniche
- **Contenido**: "Llevo años buscando un buen peluquero canino y por fin lo encontré. El corte quedó perfecto y mi caniche está feliz."
- **Rating**: 5
- **Featured**: No
- **Fecha**: Fecha actual - 15 días

### Testimonio 5
- **Nombre del cliente**: Laura Fernández
- **Raza del perro**: Pastor Alemán
- **Contenido**: "Mi pastor alemán es muy grande y siempre era complicado llevarlo al peluquero. El servicio a domicilio es perfecto para nosotros."
- **Rating**: 4
- **Featured**: No
- **Fecha**: Fecha actual - 20 días

### Testimonio 6
- **Nombre del cliente**: Javier López
- **Raza del perro**: Bulldog Francés
- **Contenido**: "Muy contento con el servicio. José Antonio es muy amable y profesional. Mi bulldog quedó impecable."
- **Rating**: 5
- **Featured**: No
- **Fecha**: Fecha actual - 25 días

---

## 5. Galería (Antes/Después)

### Item 1: Baño - Golden Retriever
- **Título**: Golden Retriever - Baño Completo
- **Tipo de servicio**: Baño
- **Raza**: Golden Retriever
- **Descripción**: Baño completo con desenredado y cepillado profundo
- **Imagen Antes**: Placeholder de Golden sucio
- **Imagen Después**: Placeholder de Golden limpio
- **Order**: 1

### Item 2: Peluquería - Caniche
- **Título**: Caniche - Corte Profesional
- **Tipo de servicio**: Peluquería
- **Raza**: Caniche
- **Descripción**: Corte profesional estilo continental
- **Imagen Antes**: Placeholder de Caniche con pelo largo
- **Imagen Después**: Placeholder de Caniche con corte
- **Order**: 2

### Item 3: Baño - Labrador
- **Título**: Labrador - Baño y Desenredado
- **Tipo de servicio**: Baño
- **Raza**: Labrador
- **Descripción**: Baño completo con tratamiento acondicionador
- **Imagen Antes**: Placeholder
- **Imagen Después**: Placeholder
- **Order**: 3

### Item 4: Peluquería - Yorkshire
- **Título**: Yorkshire - Corte y Estilizado
- **Tipo de servicio**: Peluquería
- **Raza**: Yorkshire Terrier
- **Descripción**: Corte delicado con estilizado y lazo
- **Order**: 4

### Item 5: Baño - Pastor Alemán
- **Título**: Pastor Alemán - Baño Profundo
- **Tipo de servicio**: Baño
- **Raza**: Pastor Alemán
- **Descripción**: Baño con cepillado intensivo para eliminar pelo muerto
- **Order**: 5

### Item 6: Peluquería - Schnauzer
- **Título**: Schnauzer - Corte Tradicional
- **Tipo de servicio**: Peluquería
- **Raza**: Schnauzer
- **Descripción**: Corte tradicional de raza con arreglo de barba
- **Order**: 6

### Items 7-12
Continuar con variedad de razas y servicios:
- Bulldog Francés - Baño
- Cocker Spaniel - Peluquería
- Husky - Baño y desenredado
- Shih Tzu - Peluquería completa
- Beagle - Baño básico
- Bichón Maltés - Peluquería

---

## Fuentes de Imágenes Placeholder

Mientras se obtienen fotos reales, usar:

1. **Unsplash**: https://unsplash.com/s/photos/dog-grooming
2. **Pexels**: https://www.pexels.com/search/dog%20bath/
3. **Placeholder.com**: https://placeholder.com/ (para dimensiones específicas)
4. **Placedog.net**: http://placedog.net/640/480 (imágenes aleatorias de perros)

### Dimensiones Recomendadas

- **Servicios**: 800x600px
- **Blog featured images**: 1200x630px (formato Open Graph)
- **Testimonios**: 200x200px (circular)
- **Galería antes/después**: 600x600px cada una

---

## Checklist de Población de Contenido

### Servicios
- [ ] Baño Básico creado con todos los campos
- [ ] Peluquería Completa creada
- [ ] Antiparasitarios creado
- [ ] Imágenes placeholder añadidas

### Blog
- [ ] 4 categorías creadas
- [ ] Mínimo 5 posts creados
- [ ] Posts asignados a categorías
- [ ] Tags añadidos
- [ ] Imágenes destacadas añadidas

### Testimonios
- [ ] 6-8 testimonios creados
- [ ] 3 marcados como featured
- [ ] Ratings asignados
- [ ] Imágenes placeholder añadidas

### Galería
- [ ] 12-15 items creados
- [ ] Distribuidos entre servicios
- [ ] Imágenes antes/después añadidas
- [ ] Orden configurado

---

## Notas Importantes

1. **Imágenes Reales**: Todas las imágenes placeholder deben ser reemplazadas con fotos reales del negocio
2. **Contenido de Blog**: Los posts deben ser expandidos con contenido real y útil
3. **Testimonios**: Usar testimonios reales de clientes cuando estén disponibles
4. **Precios**: Verificar que los precios sean actuales y correctos
5. **Información de Contacto**: Actualizar teléfonos y emails con datos reales

---

## Próximos Pasos

Después de poblar el contenido inicial:

1. Revisar todo el contenido en el sitio web
2. Verificar que las imágenes se muestren correctamente
3. Probar la navegación entre posts y categorías
4. Verificar que los servicios se muestren en la homepage
5. Confirmar que los testimonios aparezcan en el carousel
6. Revisar la galería antes/después

---

## Soporte

Si necesitas ayuda con la población de contenido:
- Consulta la documentación de Sanity: https://www.sanity.io/docs
- Revisa los schemas en `sanity/schemas/`
- Contacta al equipo de desarrollo
