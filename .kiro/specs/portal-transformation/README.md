# Portal Transformation Spec

## 📋 Descripción

Este spec guía la transformación completa de El Peluperro de un sitio web de peluquería canina local a un portal de referencia sobre cuidado canino con múltiples fuentes de monetización.

## 🎯 Objetivos

- **Tráfico**: De 500 a 50,000+ visitas/mes en 12 meses
- **Monetización**: €1,000-2,000/mes (AdSense + Afiliación + Servicios)
- **Autoridad**: Posicionarse como referencia #1 en cuidado canino en español
- **E-E-A-T**: Aprovechar experiencia real como peluquero profesional

## 📚 Documentos del Spec

### 1. requirements.md
Define QUÉ debe hacer el sistema. Incluye:
- 20 requirements detallados
- User stories
- Acceptance criteria
- Success metrics

### 2. design.md
Define CÓMO se implementará técnicamente (en progreso)

### 3. tasks.md
Lista de tareas paso a paso organizadas en 11 fases:
- **Phase 1**: Fundamentos y E-E-A-T (Semana 1-2)
- **Phase 2**: Infraestructura de AdSense (Semana 2-3)
- **Phase 3**: Sistema de Afiliación (Semana 3)
- **Phase 4**: Schemas de Sanity (Semana 3)
- **Phase 5**: Nuevas Rutas y Páginas (Semana 4)
- **Phase 6**: Newsletter (Semana 4)
- **Phase 7**: SEO y Schema Markup (Semana 4)
- **Phase 8**: Analytics y Tracking (Semana 5)
- **Phase 9**: Testing y QA (Semana 5)
- **Phase 10**: Contenido y Lanzamiento (Semana 6+)
- **Phase 11**: Optimización Continua (Ongoing)

## 🚀 Cómo Usar Este Spec

### Opción 1: Desarrollo Manual

1. **Lee requirements.md** para entender el alcance completo
2. **Abre tasks.md** y trabaja fase por fase
3. **Marca tareas completadas** cambiando `[ ]` a `[x]`
4. **Testea cada tarea** antes de pasar a la siguiente
5. **Haz commits frecuentes** con referencias a las tareas

### Opción 2: Con Asistencia de Kiro

Puedes pedirme que ejecute tareas específicas:

```
"Kiro, ejecuta la Task 1: Crear Página Sobre Mí"
"Kiro, implementa todos los componentes de AdSense (Task 5-6)"
"Kiro, crea el schema de productos en Sanity (Task 11)"
```

### Opción 3: Modo Automático

```
"Kiro, ejecuta todas las tareas de Phase 1"
"Kiro, continúa con la siguiente fase"
```

## 📊 Progreso Actual

```
Phase 1: Fundamentos y E-E-A-T          [ ] 0/4 tasks
Phase 2: Infraestructura AdSense        [ ] 0/3 tasks
Phase 3: Sistema de Afiliación          [ ] 0/2 tasks
Phase 4: Schemas de Sanity              [ ] 0/2 tasks
Phase 5: Nuevas Rutas y Páginas         [ ] 0/2 tasks
Phase 6: Newsletter                     [ ] 0/1 task
Phase 7: SEO y Schema Markup            [ ] 0/1 task
Phase 8: Analytics y Tracking           [ ] 0/1 task
Phase 9: Testing y QA                   [ ] 0/1 task
Phase 10: Contenido y Lanzamiento       [ ] 0/3 tasks
Phase 11: Optimización Continua         [ ] 0/2 tasks

Total: 0/22 tasks completadas
```

## 🎓 Orden Recomendado

### Semana 1-2: Fundamentos (CRÍTICO)
Estas tareas son requisitos para aprobación de AdSense:

1. ✅ **Task 1**: Página "Sobre Mí" robusta (E-E-A-T)
2. ✅ **Task 2**: Actualizar políticas legales
3. ✅ **Task 3**: Rediseñar homepage como portal
4. ✅ **Task 4**: Actualizar navegación

### Semana 2-3: Infraestructura Técnica
Preparar el sistema para monetización:

5. **Task 5**: Componentes base de AdSense
6. **Task 6**: Componentes específicos de anuncios
7. **Task 7**: Integrar anuncios en blog
8. **Task 8**: Componentes de afiliación
9. **Task 9**: Componentes de comparativas

### Semana 3: Datos y Contenido
Preparar CMS para nuevo contenido:

10. **Task 10**: Actualizar schema de posts
11. **Task 11**: Crear schema de products

### Semana 4: Expansión
Nuevas secciones del sitio:

12. **Task 12**: Ruta de comparativas
13. **Task 13**: Ruta de guías
14. **Task 14**: Sistema de newsletter
15. **Task 15**: Mejorar SEO

### Semana 5: Analytics y Testing
Preparar para lanzamiento:

16. **Task 16**: Implementar tracking
17. **Task 17**: Testing completo

### Semana 6+: Contenido y Lanzamiento
Crear contenido y solicitar aprobaciones:

18. **Task 18**: Crear contenido inicial (20+ artículos)
19. **Task 19**: Solicitar aprobación de AdSense
20. **Task 20**: Registrar programas de afiliación

### Ongoing: Optimización
Mejora continua:

21. **Task 21**: Monitoreo y optimización
22. **Task 22**: Contenido continuo

## 🔑 Tareas Críticas (No Omitir)

Estas tareas son OBLIGATORIAS para el éxito:

- ✅ Task 1: Página "Sobre Mí" (requisito AdSense)
- ✅ Task 2: Políticas legales (requisito legal)
- ✅ Task 18: Contenido inicial 20+ artículos (requisito AdSense)
- ✅ Task 19: Solicitar aprobación AdSense (monetización)

## 📝 Notas Importantes

### Antes de Empezar
- [ ] Hacer backup completo del sitio actual
- [ ] Crear rama de Git para desarrollo
- [ ] Configurar entorno de desarrollo local
- [ ] Revisar documentos de referencia en `.kiro/specs/elpeluperro-website-rebuild/`

### Durante el Desarrollo
- Testear cada componente antes de continuar
- Hacer commits frecuentes con mensajes descriptivos
- Documentar decisiones técnicas importantes
- Mantener código limpio y comentado
- Seguir convenciones de Next.js 14

### Antes del Lanzamiento
- [ ] Verificar 20+ artículos de calidad publicados
- [ ] Verificar todas las políticas actualizadas
- [ ] Testear en múltiples dispositivos y navegadores
- [ ] Verificar cumplimiento de políticas de AdSense
- [ ] Hacer auditoría de accesibilidad
- [ ] Hacer auditoría de performance
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics 4

## 🆘 Recursos de Ayuda

### Documentación de Referencia
- `transformation-plan.md` - Plan estratégico completo
- `technical-specs-adsense.md` - Especificaciones técnicas de AdSense
- `content-strategy.md` - Estrategia de contenido detallada
- `NEXT-STEPS.md` - Guía de implementación

### Enlaces Útiles
- [Google AdSense Policies](https://support.google.com/adsense/answer/48182)
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Sanity CMS Documentation](https://www.sanity.io/docs)
- [Google E-E-A-T Guidelines](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

## 💬 Preguntas Frecuentes

### ¿Puedo omitir alguna fase?
No se recomienda. Cada fase construye sobre la anterior. Sin embargo, puedes ajustar el orden dentro de cada fase.

### ¿Cuánto tiempo tomará completar todo?
- Desarrollo técnico: 4-5 semanas
- Contenido inicial: 2-3 semanas
- Aprobación AdSense: 1-2 semanas
- **Total**: 7-10 semanas para lanzamiento inicial

### ¿Qué pasa si AdSense rechaza la solicitud?
Revisa los motivos del rechazo, corrige los problemas y vuelve a solicitar. Los motivos comunes son:
- Contenido insuficiente (necesitas 20-30 artículos)
- Políticas incompletas
- Navegación confusa
- Contenido de baja calidad

### ¿Puedo monetizar antes de la aprobación de AdSense?
Sí, puedes empezar con afiliación inmediatamente. AdSense es adicional.

### ¿Necesito eliminar los servicios locales?
No. Los servicios locales se mantienen pero en posición secundaria. La autoridad digital mejorará las conversiones locales.

## 📞 Siguiente Paso

**¿Listo para empezar?**

Opción A: "Kiro, ejecuta Task 1: Crear Página Sobre Mí"
Opción B: "Kiro, ejecuta toda la Phase 1"
Opción C: "Kiro, muéstrame el código para [componente específico]"

¡Empecemos! 🚀
