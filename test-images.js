// Script de prueba para verificar las imágenes asignadas
const { mockBlogPosts } = require('./lib/data/mockBlog.ts');

console.log('=== VERIFICACIÓN DE IMÁGENES ASIGNADAS ===\n');

mockBlogPosts.forEach((post, index) => {
  const imageRef = post.featuredImage?.asset?._ref;
  const hasRealImage = imageRef && imageRef.startsWith('/images/');
  
  console.log(`${index + 1}. ${post.title}`);
  console.log(`   Slug: ${post.slug.current}`);
  console.log(`   Imagen: ${imageRef || 'No asignada'}`);
  console.log(`   ✓ Imagen real: ${hasRealImage ? 'SÍ' : 'NO (placeholder)'}`);
  console.log('');
});

console.log('=== RESUMEN ===');
const withImages = mockBlogPosts.filter(p => 
  p.featuredImage?.asset?._ref?.startsWith('/images/')
).length;
console.log(`Artículos con imagen: ${withImages}/${mockBlogPosts.length}`);
