# Colores de Marca - El Peluperro

## Colores Actuales Configurados

Los siguientes colores han sido configurados como placeholder y deben ser ajustados según la identidad visual actual de El Peluperro:

### Primary (Naranja Cálido)

- **Hex:** `#FF6B35`
- **RGB:** `rgb(255, 107, 53)`
- **Uso:** Color principal, botones CTA, enlaces importantes

### Secondary (Turquesa)

- **Hex:** `#4ECDC4`
- **RGB:** `rgb(78, 205, 196)`
- **Uso:** Color secundario, acentos, iconos

### Accent (Amarillo Suave)

- **Hex:** `#FFE66D`
- **RGB:** `rgb(255, 230, 109)`
- **Uso:** Destacados, badges, elementos de atención

### Dark (Azul Oscuro)

- **Hex:** `#2C3E50`
- **RGB:** `rgb(44, 62, 80)`
- **Uso:** Texto principal, headers, elementos oscuros

### Light (Gris Muy Claro)

- **Hex:** `#F7F9FB`
- **RGB:** `rgb(247, 249, 251)`
- **Uso:** Fondos, secciones alternadas

## Cómo Actualizar los Colores

### Opción 1: Editar directamente en `app/globals.css`

```css
:root {
  /* Colores de marca El Peluperro */
  --brand-primary: #FF6B35; /* Cambiar este valor */
  --brand-secondary: #4ECDC4; /* Cambiar este valor */
  --brand-accent: #FFE66D; /* Cambiar este valor */
  --brand-dark: #2C3E50; /* Cambiar este valor */
  --brand-light: #F7F9FB; /* Cambiar este valor */
}
```

### Opción 2: Extraer colores de la web actual

1. Visitar https://elpeluperro.com/
2. Usar herramientas de desarrollo del navegador (F12)
3. Inspeccionar elementos para ver colores usados
4. Copiar valores hexadecimales
5. Actualizar en `app/globals.css`

### Herramientas Recomendadas

- **ColorZilla** (extensión de navegador) - Para extraer colores de sitios web
- **Adobe Color** - Para crear paletas armoniosas
- **Coolors.co** - Generador de paletas de colores

## Verificación de Contraste

Es importante verificar que los colores tengan suficiente contraste para accesibilidad (WCAG 2.1 AA):

- **Texto normal:** Ratio mínimo 4.5:1
- **Texto grande:** Ratio mínimo 3:1

Herramientas de verificación:

- https://webaim.org/resources/contrastchecker/
- https://contrast-ratio.com/

## Aplicación en el Código

Los colores se usan en Tailwind CSS con las siguientes clases:

```tsx
// Backgrounds
<div className="bg-primary">...</div>
<div className="bg-secondary">...</div>
<div className="bg-accent">...</div>

// Text
<p className="text-primary">...</p>
<p className="text-dark">...</p>

// Borders
<div className="border-primary">...</div>

// Hover states
<button className="bg-primary hover:bg-primary/90">...</button>
```

## Notas Importantes

1. **Mantener consistencia:** Usar los mismos colores en todo el sitio
2. **Accesibilidad:** Verificar contraste suficiente para texto
3. **Logo:** El logo debe mantener sus colores originales
4. **Imágenes:** Las fotos deben complementar la paleta de colores

## Próximos Pasos

1. Obtener colores exactos del logo actual de El Peluperro
2. Actualizar valores en `app/globals.css`
3. Verificar contraste de accesibilidad
4. Probar en diferentes dispositivos y navegadores
