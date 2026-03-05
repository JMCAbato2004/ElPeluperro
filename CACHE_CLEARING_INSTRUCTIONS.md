# Instrucciones para Limpiar la Caché del Navegador

## Problema
El navegador está mostrando artículos antiguos del blog que ya no existen en el código. Esto causa errores 404 cuando intentas acceder a ellos.

## Solución: Limpiar Caché Completamente

### Opción 1: Modo Incógnito (Prueba Rápida)
1. Abre una ventana de incógnito/privada en tu navegador
2. Ve a http://localhost:3000/blog
3. Si funciona correctamente aquí, el problema es la caché

### Opción 2: Limpiar Caché del Navegador

#### Chrome/Edge:
1. Presiona `Ctrl + Shift + Delete`
2. Selecciona "Todo el tiempo" en el rango de tiempo
3. Marca estas opciones:
   - ✅ Imágenes y archivos en caché
   - ✅ Cookies y otros datos de sitios
   - ✅ Datos de aplicaciones alojadas
4. Haz clic en "Borrar datos"
5. Cierra TODAS las pestañas de localhost:3000
6. Reinicia el navegador
7. Vuelve a abrir http://localhost:3000/blog

#### Firefox:
1. Presiona `Ctrl + Shift + Delete`
2. Selecciona "Todo" en el rango de tiempo
3. Marca:
   - ✅ Caché
   - ✅ Cookies
4. Haz clic en "Limpiar ahora"
5. Cierra TODAS las pestañas de localhost:3000
6. Reinicia el navegador
7. Vuelve a abrir http://localhost:3000/blog

### Opción 3: Forzar Recarga (Más Rápido)
1. Ve a http://localhost:3000/blog
2. Presiona `Ctrl + Shift + R` (recarga forzada)
3. O presiona `Ctrl + F5`

### Opción 4: Limpiar Caché de Next.js
Si las opciones anteriores no funcionan:

```bash
# Detén el servidor (Ctrl + C)
# Luego ejecuta:
rm -rf .next
npm run dev
```

## Verificación
Después de limpiar la caché, deberías ver estos 15 artículos correctos:

1. como-banar-perro-casa-guia-completa
2. mejores-champus-perros-2026-comparativa
3. guia-completa-razas-perros-caracteristicas-cuidados
4. que-hacer-perro-vomita-causas-soluciones
5. como-quitar-garrapatas-perro-guia-segura
6. mi-perro-tiene-pulgas-que-hacer-guia-completa
7. cada-cuanto-banar-perro-segun-raza
8. como-cortar-unas-perro-sin-hacerle-dano
9. alimentos-prohibidos-perros-lista-completa
10. como-saber-si-mi-perro-esta-enfermo
11. mi-perro-no-quiere-comer-causas-soluciones
12. como-educar-cachorro-guia-completa
13. por-que-mi-perro-ladra-mucho-soluciones
14. vacunas-perros-calendario-completo-2026
15. como-desparasitar-perro-guia-completa

## URLs que DEBEN funcionar:
- http://localhost:3000/blog/como-banar-perro-casa-guia-completa
- http://localhost:3000/blog/vacunas-perros-calendario-completo-2026
- http://localhost:3000/blog/como-desparasitar-perro-guia-completa

## URLs que NO DEBEN aparecer (son antiguas):
- ❌ como-banar-perro-en-casa
- ❌ playas-perros-andalucia
- ❌ importancia-cepillado-regular
- ❌ prevenir-parasitos-perro
- ❌ cuidados-perro-playa
