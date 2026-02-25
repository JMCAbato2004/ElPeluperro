# Guía de Testing - El Peluperro

Esta guía documenta la estrategia de testing y cómo configurar y ejecutar tests para el proyecto.

## Estrategia de Testing

El proyecto utiliza una estrategia de testing en múltiples niveles:

1. **Unit Tests**: Tests de componentes individuales
2. **Integration Tests**: Tests de flujos completos
3. **E2E Tests**: Tests de usuario end-to-end
4. **Property-Based Tests**: Tests de propiedades universales (opcional)
5. **Accessibility Tests**: Tests de cumplimiento WCAG
6. **Performance Tests**: Auditorías de Lighthouse

## 1. Configuración de Vitest (Unit & Integration Tests)

### Instalación

```bash
npm install -D vitest @vitejs/plugin-react jsdom
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Configuración

Crear `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

Crear `vitest.setup.ts`:

```typescript
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
});
```

### Ejemplo de Test: Button Component

Crear `components/ui/__tests__/Button.test.tsx`:

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByText('Click me'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByText('Primary')).toHaveClass('bg-primary');
    
    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-secondary');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });
});
```

### Ejemplo de Test: BookingForm

Crear `components/forms/__tests__/BookingForm.test.tsx`:

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingForm } from '../BookingForm';

// Mock fetch
global.fetch = vi.fn();

describe('BookingForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(<BookingForm />);
    
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/teléfono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dirección/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ciudad/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo de servicio/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/nombre es requerido/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    
    render(<BookingForm />);
    
    await user.type(screen.getByLabelText(/nombre/i), 'Juan Pérez');
    await user.type(screen.getByLabelText(/teléfono/i), '612345678');
    await user.type(screen.getByLabelText(/dirección/i), 'Calle Test 123');
    await user.selectOptions(screen.getByLabelText(/ciudad/i), 'sevilla');
    await user.selectOptions(screen.getByLabelText(/tipo de servicio/i), 'bano');
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/booking', expect.any(Object));
    });
  });
});
```

### Scripts en package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## 2. Configuración de Playwright (E2E Tests)

### Instalación

```bash
npm install -D @playwright/test
npx playwright install
```

### Configuración

Crear `playwright.config.ts`:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### Ejemplo de Test E2E: Booking Flow

Crear `e2e/booking.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Booking Flow', () => {
  test('should complete booking successfully', async ({ page }) => {
    // Navigate to booking page
    await page.goto('/reservar');
    
    // Fill form
    await page.fill('input[name="name"]', 'Juan Pérez');
    await page.fill('input[name="phone"]', '612345678');
    await page.fill('input[name="address"]', 'Calle Test 123');
    await page.selectOption('select[name="city"]', 'sevilla');
    await page.selectOption('select[name="serviceType"]', 'bano');
    await page.fill('input[name="preferredDate"]', '2024-12-25');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Wait for success message
    await expect(page.locator('text=Reserva Recibida')).toBeVisible();
  });

  test('should show validation errors', async ({ page }) => {
    await page.goto('/reservar');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check for validation errors
    await expect(page.locator('text=/nombre.*requerido/i')).toBeVisible();
  });

  test('should show out of area warning', async ({ page }) => {
    await page.goto('/reservar');
    
    await page.selectOption('select[name="city"]', 'otra');
    
    // Check for warning message
    await expect(page.locator('text=/fuera de.*zona/i')).toBeVisible();
  });
});
```

### Ejemplo de Test E2E: Navigation

Crear `e2e/navigation.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation links
    await page.click('text=Servicios');
    await expect(page).toHaveURL('/servicios');
    
    await page.click('text=Galería');
    await expect(page).toHaveURL('/galeria');
    
    await page.click('text=Blog');
    await expect(page).toHaveURL('/blog');
    
    await page.click('text=Contacto');
    await expect(page).toHaveURL('/contacto');
  });

  test('should have working mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Open mobile menu
    await page.click('[aria-label="Abrir menú"]');
    
    // Check menu is visible
    await expect(page.locator('nav')).toBeVisible();
    
    // Click a link
    await page.click('text=Servicios');
    await expect(page).toHaveURL('/servicios');
  });
});
```

### Scripts en package.json

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:report": "playwright show-report"
  }
}
```

---

## 3. Property-Based Testing (Opcional)

### Instalación

```bash
npm install -D fast-check
```

### Ejemplo: Service Area Validation

Crear `lib/utils/__tests__/serviceArea.property.test.ts`:

```typescript
import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import { isInServiceArea } from '../serviceArea';

describe('Service Area Properties', () => {
  it('should always return boolean', () => {
    fc.assert(
      fc.property(fc.string(), (city) => {
        const result = isInServiceArea(city);
        return typeof result === 'boolean';
      })
    );
  });

  it('should be case-insensitive', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sevilla', 'Sevilla', 'SEVILLA', 'SeViLLa'),
        (city) => {
          return isInServiceArea(city) === true;
        }
      )
    );
  });

  it('should handle known cities consistently', () => {
    const knownCities = ['sevilla', 'alcala-de-guadaira'];
    
    fc.assert(
      fc.property(fc.constantFrom(...knownCities), (city) => {
        return isInServiceArea(city) === true;
      })
    );
  });
});
```

---

## 4. Accessibility Testing

### Instalación

```bash
npm install -D jest-axe
```

### Ejemplo: Button Accessibility

Crear `components/ui/__tests__/Button.a11y.test.tsx`:

```typescript
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from '../Button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have proper ARIA attributes when disabled', async () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Script para ejecutar tests de accesibilidad

```json
{
  "scripts": {
    "test:a11y": "vitest run --grep a11y"
  }
}
```

---

## 5. Lighthouse Audits

### Instalación

```bash
npm install -D @lhci/cli
```

### Configuración

Crear `lighthouserc.js`:

```javascript
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run build && npm run start',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/servicios',
        'http://localhost:3000/blog',
        'http://localhost:3000/contacto',
        'http://localhost:3000/reservar',
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

### Scripts

```json
{
  "scripts": {
    "lighthouse": "lhci autorun",
    "lighthouse:mobile": "lhci autorun --preset=mobile"
  }
}
```

---

## 6. Estructura de Tests Recomendada

```
project/
├── components/
│   └── ui/
│       ├── Button.tsx
│       └── __tests__/
│           ├── Button.test.tsx
│           └── Button.a11y.test.tsx
├── lib/
│   └── utils/
│       ├── serviceArea.ts
│       └── __tests__/
│           ├── serviceArea.test.ts
│           └── serviceArea.property.test.ts
├── e2e/
│   ├── booking.spec.ts
│   ├── navigation.spec.ts
│   ├── contact.spec.ts
│   └── quiz.spec.ts
├── vitest.config.ts
├── vitest.setup.ts
├── playwright.config.ts
└── lighthouserc.js
```

---

## 7. CI/CD Integration

### GitHub Actions Example

Crear `.github/workflows/test.yml`:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:e2e

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lighthouse
```

---

## 8. Checklist de Testing

### Antes del Lanzamiento
- [ ] Todos los unit tests pasan
- [ ] Todos los E2E tests pasan
- [ ] Tests de accesibilidad pasan (sin violaciones críticas)
- [ ] Lighthouse scores > 90 en todas las categorías
- [ ] Tests funcionan en Chrome, Firefox y Safari
- [ ] Tests funcionan en móvil y escritorio
- [ ] Formularios validados correctamente
- [ ] Navegación funciona en todos los dispositivos
- [ ] PWA se puede instalar correctamente

### Testing Manual Adicional
- [ ] Probar en dispositivos reales (iOS, Android)
- [ ] Probar con lectores de pantalla
- [ ] Probar con navegación por teclado
- [ ] Probar en conexiones lentas
- [ ] Probar modo offline (PWA)
- [ ] Probar en diferentes tamaños de pantalla

---

## 9. Recursos Adicionales

- **Vitest**: https://vitest.dev/
- **Testing Library**: https://testing-library.com/
- **Playwright**: https://playwright.dev/
- **fast-check**: https://fast-check.dev/
- **jest-axe**: https://github.com/nickcolley/jest-axe
- **Lighthouse CI**: https://github.com/GoogleChrome/lighthouse-ci

---

## 10. Troubleshooting

### Tests fallan en CI pero pasan localmente
- Verificar versiones de Node.js
- Verificar variables de entorno
- Verificar timeouts (aumentar si es necesario)

### Tests E2E son lentos
- Ejecutar en paralelo cuando sea posible
- Usar `page.waitForLoadState('networkidle')` con cuidado
- Considerar usar fixtures para datos de prueba

### Lighthouse scores bajos
- Optimizar imágenes
- Reducir JavaScript no usado
- Implementar lazy loading
- Mejorar caché
- Minimizar CSS y JS

---

## Contacto

Para preguntas sobre testing:
- Revisar documentación de cada herramienta
- Consultar con el equipo de desarrollo
- Crear issues en el repositorio
