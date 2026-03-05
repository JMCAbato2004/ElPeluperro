// Script de prueba para verificar los datos del mock
const fs = require('fs');

// Leer el archivo mockBlog.ts
const content = fs.readFileSync('lib/data/mockBlog.ts', 'utf8');

// Extraer todos los slugs
const slugMatches = content.matchAll(/slug: \{ current: '([^']+)' \}/g);
const slugs = Array.from(slugMatches, m => m[1]);

console.log('=== SLUGS ENCONTRADOS EN mockBlog.ts ===');
console.log(`Total: ${slugs.length} artículos\n`);

slugs.forEach((slug, index) => {
  console.log(`${index + 1}. ${slug}`);
});

console.log('\n=== URLs COMPLETAS ===');
slugs.forEach((slug) => {
  console.log(`http://localhost:3000/blog/${slug}`);
});
