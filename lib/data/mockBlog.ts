/**
 * Mock data for blog posts - Actualizado con imágenes reales
 * Used when Sanity CMS doesn't have data yet
 * Last updated: 2026-03-04 18:30
 */

import type { SanityImage } from '../sanity/types';

const mockImage: SanityImage = {
  _type: 'image' as const,
  asset: {
    _ref: 'image-placeholder',
    _type: 'reference' as const,
  },
};

// Categorías actualizadas
export const mockCategories = [
  {
    _id: 'cat-1',
    title: 'Cuidados',
    slug: { current: 'cuidados' },
    description: 'Consejos sobre cuidado diario de tu perro',
  },
  {
    _id: 'cat-2',
    title: 'Productos',
    slug: { current: 'productos' },
    description: 'Comparativas y recomendaciones de productos',
  },
  {
    _id: 'cat-3',
    title: 'Salud',
    slug: { current: 'salud' },
    description: 'Información sobre salud y bienestar',
  },
  {
    _id: 'cat-4',
    title: 'Guías',
    slug: { current: 'guias' },
    description: 'Guías completas sobre cuidado canino',
  },
];

export const mockBlogPosts = [
  // Artículo 1: Cómo Bañar a un Perro
  {
    _id: 'post-1',
    title: 'Cómo Bañar a un Perro en Casa: Guía Completa 2026 (Paso a Paso)',
    slug: { current: 'como-banar-perro-casa-guia-completa' },
    excerpt:
      '¿Tu perro necesita un baño pero no sabes por dónde empezar? Aprende cómo bañar a un perro en casa de forma profesional con esta guía paso a paso. Incluye productos recomendados, errores a evitar y consejos para perros miedosos.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Bañar a tu perro en casa puede parecer complicado, especialmente si es tu primera vez o si tu peludo amigo no es muy fan del agua. Pero no te preocupes: con la técnica correcta, los productos adecuados y un poco de paciencia, convertirás el baño en una experiencia agradable para ambos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '¿Cada Cuánto Hay que Bañar a un Perro?' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'La frecuencia del baño depende del tipo de pelo: Pelo corto (cada 2-3 meses), Pelo medio (cada 1-2 meses), Pelo largo (cada 3-4 semanas), Pelo rizado (cada 4-6 semanas). Señales de que tu perro necesita un baño: olor fuerte, pelo grasiento, picazón constante, manchas visibles.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Materiales Necesarios' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Necesitarás: champú específico para perros, acondicionador (opcional), toallas absorbentes, cepillo, alfombrilla antideslizante, algodón para oídos, premios. NUNCA uses champú humano - el pH es diferente y puede causar irritación.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Paso a Paso: Cómo Bañar a un Perro' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Paso 1: Moja completamente el pelo con agua tibia. Paso 2: Aplica el champú desde el cuello hacia la cola, masajeando suavemente. Paso 3: Enjuaga a fondo hasta que el agua salga clara - este es el paso MÁS importante. Paso 4: Escurre el exceso de agua. Paso 5: Seca con toalla presionando suavemente, o usa secador a temperatura baja.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Errores Comunes a Evitar' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Error 1: Usar champú humano. Error 2: Bañar con demasiada frecuencia. Error 3: No enjuagar completamente. Error 4: Agua demasiado caliente o fría. Error 5: Mojar directamente la cabeza. Error 6: No cepillar antes del baño.',
          },
        ],
      },
    ],
    featuredImage: {
      _type: 'image',
      asset: {
        _ref: '/images/blog/bano-perro.png',
        _type: 'reference',
      },
    },
    publishedAt: '2026-03-04T10:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0], // Cuidados
    tags: ['baño', 'higiene', 'cuidados', 'champú', 'grooming', 'tutorial'],
  },

  // Artículo 3: Guía de Razas
  {
    _id: 'post-3',
    title: 'Guía Completa de Razas de Perros: Características y Cuidados 2026',
    slug: { current: 'guia-completa-razas-perros-caracteristicas-cuidados' },
    excerpt:
      '¿Buscas la raza de perro perfecta para ti? Descubre más de 30 razas con características detalladas, temperamento, cuidados específicos y recomendaciones para diferentes estilos de vida.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '¿Estás pensando en adoptar un perro pero no sabes qué raza se adapta mejor a tu estilo de vida? Elegir la raza adecuada es crucial para una convivencia feliz.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cómo Elegir la Raza Adecuada' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Factores a considerar: Espacio disponible (apartamento vs casa con jardín), nivel de actividad (sedentario, moderado, muy activo), tiempo disponible (poco, moderado, mucho), experiencia con perros (principiante, intermedio, experto), presupuesto (alimentación, veterinario, grooming), alergias (razas hipoalergénicas).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Razas de Perros Pequeños' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Chihuahua (1.5-3kg): El más pequeño, leal, puede ser territorial. Yorkshire Terrier (2-3kg): Hipoalergénico, energético, necesita grooming frecuente. Bichón Maltés (3-4kg): Cariñoso, hipoalergénico, excelente compañía. Pug (6-8kg): Amigable, tranquilo, propenso a problemas respiratorios. Shih Tzu (4-7kg): Adaptable, cariñoso, necesita grooming intensivo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Razas de Perros Medianos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Beagle (10-15kg): Sociable, olfato excepcional, puede ser terco. Cocker Spaniel (12-15kg): Dulce, excelente con niños, necesita grooming regular. Bulldog Francés (8-14kg): Cariñoso, tranquilo, ideal apartamentos. Border Collie (14-20kg): Más inteligente, muy enérgico, necesita estimulación constante.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Razas de Perros Grandes' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Labrador Retriever (25-36kg): Amigable, versátil, excelente familia. Golden Retriever (25-34kg): Gentil, paciente, perfecto con niños. Pastor Alemán (30-40kg): Inteligente, protector, necesita liderazgo firme. Boxer (25-32kg): Juguetón, enérgico, excelente con niños. Husky Siberiano (20-27kg): Independiente, muy enérgico, escapista.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Razas para Familias con Niños' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Top 10: Golden Retriever, Labrador, Beagle, Bulldog, Collie, Boxer, Cavalier King Charles, Bichón Frisé, Pug, Terranova. Todas son pacientes, gentiles y tolerantes con niños.',
          },
        ],
      },
    ],
    featuredImage: {
      _type: 'image',
      asset: {
        _ref: '/images/blog/razas.png',
        _type: 'reference',
      },
    },
    publishedAt: '2026-03-04T08:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[3], // Guías
    tags: ['razas', 'guía', 'características', 'temperamento', 'cuidados', 'familias'],
  },

  // Artículo 4: Qué Hacer Si Tu Perro Vomita
  {
    _id: 'post-4',
    title: 'Qué Hacer Si Tu Perro Vomita: Causas y Soluciones 2026',
    slug: { current: 'que-hacer-perro-vomita-causas-soluciones' },
    excerpt:
      '¿Tu perro vomita y no sabes qué hacer? Descubre las causas, cuándo preocuparte y cómo actuar. Guía completa con consejos veterinarios y tratamientos caseros.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Ver a tu perro vomitar es preocupante. ¿Es algo grave? ¿Debo llevarlo al veterinario inmediatamente? El vómito en perros es común y en muchos casos no es motivo de alarma, pero saber distinguir cuándo es urgente puede salvar la vida de tu perro.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Causas Comunes del Vómito' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Causas no graves: Comer demasiado rápido, cambio brusco de alimentación, comer hierba, estómago vacío (vómito bilioso), intolerancia alimentaria, estrés. Causas graves: Gastroenteritis, obstrucción intestinal, pancreatitis, enfermedades sistémicas, intoxicación, parásitos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Tipos de Vómito y Qué Significan' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Amarillo/verde (bilis): Estómago vacío. Blanco espumoso: Saliva y jugos gástricos. Marrón: Comida digerida o sangre digerida. Con sangre roja: EMERGENCIA - úlceras o intoxicación. Con comida sin digerir: Comer muy rápido. Con gusanos: Infestación parasitaria.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cuándo Ir al Veterinario URGENTE' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Emergencia inmediata: Vómito con sangre, vómito frecuente (más de 3 veces), vómito proyectil, abdomen hinchado, intentos sin expulsar nada (torsión gástrica), letargo severo, encías pálidas, dolor abdominal intenso, convulsiones, sospecha de intoxicación, cachorros menores de 6 meses.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Qué Hacer en Casa' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Paso 1: Mantén la calma y observa. Paso 2: Retira comida 12-24h (agua después de 2-4h). Paso 3: Reintroduce agua gradualmente. Paso 4: Dieta blanda (pollo hervido + arroz). Paso 5: Monitorea 24-48 horas. Si vomita agua o persiste más de 24h, acude al veterinario.',
          },
        ],
      },
    ],
    featuredImage: {
      _type: 'image',
      asset: {
        _ref: '/images/blog/vomito.png',
        _type: 'reference',
      },
    },
    publishedAt: '2026-03-04T07:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[2], // Salud
    tags: ['salud', 'vómito', 'emergencias', 'síntomas', 'tratamiento', 'veterinario'],
  },

  // Artículo 5: Cómo Quitar Garrapatas
  {
    _id: 'post-5',
    title: 'Cómo Quitar Garrapatas a un Perro: Guía Segura 2026 (Paso a Paso)',
    slug: { current: 'como-quitar-garrapatas-perro-guia-segura' },
    excerpt:
      'Aprende cómo quitar garrapatas a un perro de forma segura y efectiva. Guía paso a paso con herramientas necesarias, prevención y qué hacer después de la extracción.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Encontrar una garrapata en tu perro puede ser alarmante. Las garrapatas no solo son desagradables, sino que pueden transmitir enfermedades graves como Lyme, ehrlichiosis o babesiosis. Saber cómo quitarlas correctamente es fundamental.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Por Qué Son Peligrosas las Garrapatas' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Transmiten enfermedades: Lyme (24-48h), Ehrlichiosis (3-6h), Anaplasmosis, Babesiosis, Hepatozoonosis. Pueden causar anemia en infestaciones severas, parálisis por garrapatas, e infecciones secundarias. Temporada alta: primavera, verano y otoño temprano.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cómo Detectar Garrapatas' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Revisa después de cada paseo. Zonas favoritas: cabeza y orejas, cuello, axilas, ingle, entre dedos, alrededor del ano. Antes de alimentarse: 2-5mm, planas, marrones. Después: 5-15mm, hinchadas, grises/rosadas.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Herramientas Necesarias' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Esenciales: Pinza quitagarrapatas (gancho, cuchara o torsión), guantes desechables, alcohol/desinfectante, pinzas de punta fina (alternativa). NUNCA uses: aceite, vaselina, alcohol directo, fuego, esmalte de uñas.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Paso a Paso: Extracción Segura' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Paso 1: Localiza la garrapata. Paso 2: Ponte guantes. Paso 3: Posiciona la pinza lo más cerca posible de la piel. Paso 4: Gira 2-3 vueltas o tira hacia arriba con movimiento firme y constante. Paso 5: Verifica extracción completa. Paso 6: Mata la garrapata (alcohol, congelación). Paso 7: Desinfecta la zona. Paso 8: Lávate las manos. Paso 9: Anota la fecha.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Prevención de Garrapatas' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Antiparasitarios TODO EL AÑO: Pipetas mensuales, collares (6-8 meses), comprimidos orales (1-3 meses), sprays. Inspección regular después de paseos. Control del entorno: césped corto, eliminar maleza. Productos recomendados: Frontline, Advantix, Bravecto, NexGard, Seresto.',
          },
        ],
      },
    ],
    featuredImage: {
      _type: 'image',
      asset: {
        _ref: '/images/blog/garrapatas.png',
        _type: 'reference',
      },
    },
    publishedAt: '2026-03-04T06:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[2], // Salud
    tags: ['garrapatas', 'parásitos', 'salud', 'prevención', 'antiparasitarios', 'tutorial'],
  },

  // Artículo 6: Mi Perro Tiene Pulgas
  {
    _id: 'post-6',
    title: 'Mi Perro Tiene Pulgas: Qué Hacer - Guía Completa 2026',
    slug: { current: 'mi-perro-tiene-pulgas-que-hacer-guia-completa' },
    excerpt:
      '¿Tu perro tiene pulgas? Descubre cómo eliminarlas rápido y efectivamente. Plan de acción completo con tratamientos, limpieza del hogar y prevención de futuras infestaciones.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Descubrir que tu perro tiene pulgas puede ser frustrante. Estos parásitos se multiplican rápidamente y pueden infestar toda tu casa en días. La buena noticia: se pueden eliminar completamente con el tratamiento adecuado.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cómo Saber Si Tu Perro Tiene Pulgas' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Señales: Rascado excesivo, pérdida de pelo, piel irritada, inquietud. Detección: Usa peine antipulgas sobre toalla blanca, busca pulgas (puntos marrones que saltan) o heces de pulgas (puntos negros que se vuelven rojos al mojarlos).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'El Ciclo de Vida de las Pulgas' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Solo el 5% están en el perro, el 95% en el ambiente. Etapas: Huevo (50%), Larva (35%), Pupa (10%), Adulto (5%). Las pupas son resistentes a insecticidas y pueden permanecer latentes hasta 6 meses. Por eso el tratamiento debe durar 3 meses mínimo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Plan de Acción Inmediato' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Día 1: Baño antipulgas + tratamiento (pipeta/comprimido) + tratar otros animales + lavar todo + aspirar a fondo. Semana 1: Aspirar diariamente, lavar cada 2-3 días. Semanas 2-12: Continuar tratamiento mensual, aspirar 2-3 veces/semana.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Tratamiento del Perro' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Opciones: Baño antipulgas (inmediato, sin efecto residual), Pipetas (24-48h, 30 días), Comprimidos orales (2-4h, 30-90 días) - MÁS EFECTIVO, Collares (24-48h, 180-240 días), Sprays (inmediato, 7-30 días). Recomendación: Comprimido oral + limpieza exhaustiva.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Limpieza del Hogar' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'CRÍTICO: Aspirar TODO (alfombras, sofás, grietas, debajo de muebles). Lavar a 60°C: camas, mantas, cortinas, fundas. Tratamiento de alfombras: vapor, sprays insecticidas (Indorex), tierra de diatomeas. Desecha bolsa del aspirador inmediatamente.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Prevención' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Usa antiparasitarios TODO EL AÑO. Las pulgas sobreviven en interiores con calefacción. Productos: Bravecto (3 meses), NexGard (1 mes), Simparica (1 mes), Frontline Combo, Advantix, Seresto collar. Higiene regular: aspirar 1-2 veces/semana, lavar cama semanalmente.',
          },
        ],
      },
    ],
    featuredImage:  {
  _type: 'image',
  asset: {
    _ref: '/images/blog/pulgas.png',  // ✅ Ruta de tu imagen
    _type: 'reference',
  },
},
    publishedAt: '2026-03-04T05:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[2], // Salud
    tags: ['pulgas', 'parásitos', 'tratamiento', 'limpieza', 'prevención', 'antiparasitarios'],
  },

  // Artículo 7: Cada Cuánto Bañar a un Perro Según su Raza
  {
    _id: 'post-7',
    title: 'Cada Cuánto Bañar a un Perro Según su Raza: Guía Completa 2026',
    slug: { current: 'cada-cuanto-banar-perro-segun-raza' },
    excerpt:
      '¿Cada cuánto hay que bañar a un perro? Descubre la frecuencia ideal según la raza, tipo de pelo y estilo de vida. Guía completa con calendario de baños y consejos profesionales.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Una de las preguntas más frecuentes entre dueños de perros es: ¿cada cuánto debo bañar a mi perro? La respuesta no es única para todos, ya que depende de múltiples factores como la raza, el tipo de pelo, el estilo de vida y las condiciones de la piel.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Factores que Determinan la Frecuencia de Baño' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Tipo de pelo: Corto (cada 2-3 meses), Medio (cada 1-2 meses), Largo (cada 3-4 semanas), Rizado (cada 4-6 semanas), Doble capa (cada 2-3 meses). Estilo de vida: Interior vs exterior, nivel de actividad. Condición de piel: Normal, sensible, grasa, seca. Edad: Cachorros, adultos, seniors.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Frecuencia por Tipo de Pelo' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pelo Corto (Beagle, Boxer): Cada 2-3 meses, cepillado semanal. Pelo Medio (Cocker, Border Collie): Cada 1-2 meses, cepillado 2-3 veces/semana. Pelo Largo (Yorkshire, Golden): Cada 3-4 semanas, cepillado diario. Pelo Rizado (Caniche, Bichón): Cada 4-6 semanas, cepillado diario. Doble Capa (Husky, Samoyedo): Cada 2-3 meses, cepillado intensivo durante muda.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Calendario de Baños Personalizado' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Paso 1: Identifica el tipo de pelo. Paso 2: Evalúa el estilo de vida. Paso 3: Considera condiciones especiales (alergias, edad). Paso 4: Establece frecuencia base. Paso 5: Ajusta según necesidad observando olor, suciedad, picazón.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Señales de que Necesita un Baño' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Señales visuales: Pelo grasiento, suciedad visible, manchas, pelo opaco. Señales olfativas: Olor fuerte, olor a perro mojado, olor rancio. Señales comportamentales: Rascado excesivo, lamido constante, frotarse contra muebles.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Errores Comunes' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Error 1: Bañar demasiado frecuente (elimina aceites protectores). Error 2: Bañar muy poco (acumulación de suciedad). Error 3: Ignorar el tipo de pelo. Error 4: No ajustar por estación. Solución: Respeta intervalos, usa champú específico, ajusta según necesidades individuales.',
          },
        ],
      },
    ],
    featuredImage: {
      _type: 'image',
      asset: {
        _ref: '/images/blog/cuantos-banos.png',
        _type: 'reference',
      },
    },
    publishedAt: '2026-03-04T04:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0], // Cuidados
    tags: ['baño', 'frecuencia', 'razas', 'cuidados', 'higiene', 'grooming'],
  },

  // Artículo 8: Cómo Cortar las Uñas a un Perro
  {
    _id: 'post-8',
    title: 'Cómo Cortar las Uñas a un Perro Sin Hacerle Daño: Guía Paso a Paso 2026',
    slug: { current: 'como-cortar-unas-perro-sin-hacerle-dano' },
    excerpt:
      'Aprende cómo cortar las uñas a un perro sin dolor ni sangrado. Guía paso a paso con técnicas profesionales, herramientas recomendadas y consejos para perros nerviosos.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cortar las uñas de tu perro es una parte esencial del cuidado básico, pero puede ser intimidante, especialmente si temes hacerle daño o provocar sangrado. Con la técnica correcta y las herramientas adecuadas, puedes hacerlo tú mismo de forma segura en casa.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '¿Por Qué es Importante Cortar las Uñas?' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Problemas de uñas largas: Dolor al caminar, deformación de patas, uñas encarnadas, riesgo de rotura, daños en el hogar. Beneficios del corte regular: Caminar cómodo, postura correcta, prevención de infecciones, mejor higiene.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '¿Cada Cuánto Cortar las Uñas?' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Perros de interior: Cada 2-4 semanas. Perros de exterior: Cada 4-8 semanas. Cachorros: Cada 2-3 semanas. Seniors: Cada 3-4 semanas. Señales: Sonido al caminar, uñas tocan el suelo, uñas curvas, dificultad al caminar.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Anatomía de la Uña del Perro' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Estructura: Parte externa (queratina), pulpa o "quick" (vena con nervios), espolón (dedo vestigial). Uñas claras: Puedes ver la pulpa rosada, corta 2-3mm antes. Uñas negras: No puedes ver la pulpa, corta poco a poco observando el interior.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Herramientas Necesarias' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Tipos de cortauñas: Guillotina (perros pequeños/medianos), Tijera (medianos/grandes), Lima eléctrica (sin riesgo de cortar pulpa), Profesional con sensor (para uñas negras). Complementarios: Polvo hemostático (OBLIGATORIO), lima manual, premios, linterna.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Paso a Paso: Cómo Cortar' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Preparación: Acostumbra al perro (tocar patas, manipular uñas, introducir herramienta). Técnica: Posiciona al perro, sostén la pata, identifica dónde cortar, realiza corte rápido en ángulo 45°, lima bordes, premia. No olvides espolones.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Qué Hacer Si Cortas la Pulpa' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Protocolo: Mantén calma, aplica polvo hemostático, mantén presión 2-3 minutos, reposo 30 minutos, monitorea. Alternativas: Maicena, harina, jabón de barra, hielo. Si sangrado continúa >15 minutos: Veterinario.',
          },
        ],
      },
    ],
    featuredImage: {
      _type: 'image',
      asset: {
        _ref: '/images/blog/unas.png',
        _type: 'reference',
      },
    },
    publishedAt: '2026-03-04T03:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0], // Cuidados
    tags: ['uñas', 'grooming', 'cuidados', 'tutorial', 'herramientas', 'técnica'],
  },

  // Artículo 9: Alimentos Prohibidos para Perros
  {
    _id: 'post-9',
    title: 'Alimentos Prohibidos para Perros: Lista Completa 2026 (Actualizada)',
    slug: { current: 'alimentos-prohibidos-perros-lista-completa' },
    excerpt:
      'Lista completa de alimentos prohibidos para perros actualizada 2026. Descubre qué alimentos son tóxicos, síntomas de intoxicación y qué hacer en emergencias.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '¿Sabías que muchos alimentos que consumimos diariamente pueden ser mortales para tu perro? El chocolate, las uvas, la cebolla y muchos otros alimentos comunes en nuestra cocina son altamente tóxicos para los perros y pueden causar desde malestar estomacal hasta fallo renal o muerte.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Alimentos Extremadamente Tóxicos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Chocolate y cacao: Contiene teobromina, causa vómitos, temblores, convulsiones, muerte. Uvas y pasas: Causa fallo renal agudo, tan solo 4-5 uvas pueden ser mortales. Cebolla, ajo, puerro: Destruyen glóbulos rojos, causan anemia hemolítica. Xilitol: Hipoglucemia severa, fallo hepático. Alcohol: Intoxicación severa, coma, muerte. Cafeína: Estimula sistema nervioso, convulsiones.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Alimentos Muy Tóxicos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Aguacate: Contiene persina, dificultad respiratoria, pancreatitis. Nueces de macadamia: Afecta sistema nervioso, debilidad en patas. Huesos cocidos: Se astillan, perforan intestinos, obstrucción. Masa de pan cruda: Fermenta en estómago, produce alcohol, se expande. Sal en exceso: Intoxicación por sodio, deshidratación, convulsiones.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Alimentos Moderadamente Tóxicos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Lácteos: Intolerancia a lactosa, diarrea, gases. Tomate verde: Contiene solanina, vómitos, debilidad. Patata cruda: Solanina, problemas cardíacos. Frutas con hueso: Huesos contienen cianuro, riesgo de asfixia. Nueces y frutos secos: Alto en grasa, pancreatitis. Cítricos: Muy ácidos, malestar estomacal.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Síntomas de Intoxicación' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Digestivos: Vómitos, diarrea, babeo, dolor abdominal. Neurológicos: Temblores, convulsiones, desorientación, colapso. Cardíacos: Ritmo acelerado o lento, dificultad respiratoria, encías pálidas. Renales: Orina oscura, disminución de orina, letargo extremo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Qué Hacer en Caso de Intoxicación' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Protocolo: Mantén calma, identifica el tóxico (qué, cuánto, cuándo), llama al veterinario, NO hagas vomitar sin consultar, lleva al perro al veterinario con muestra del tóxico. URGENTE: Chocolate, uvas, xilitol, alcohol, convulsiones, dificultad respiratoria, colapso, vómitos con sangre.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Prevención' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'En casa: Guarda alimentos fuera de alcance, educa a toda la familia, supervisa en cocina, cuidado con fiestas. En la calle: Entrena comando "déjalo", supervisa en paseos, considera bozal si come todo del suelo. Alimentos seguros: Manzana, plátano, zanahoria, pollo cocido, arroz, huevos cocidos.',
          },
        ],
      },
    ],
    featuredImage: {
      _type: 'image',
      asset: {
        _ref: '/images/blog/alimentos.png',
        _type: 'reference',
      },
    },
    publishedAt: '2026-03-04T02:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[2], // Salud
    tags: ['alimentación', 'toxicidad', 'salud', 'emergencias', 'prevención', 'nutrición'],
  },

  // Artículo 10: Cómo Saber Si Mi Perro Está Enfermo
  {
    _id: 'post-10',
    title: 'Cómo Saber Si Mi Perro Está Enfermo: 20 Señales de Alerta 2026',
    slug: { current: 'como-saber-si-mi-perro-esta-enfermo' },
    excerpt:
      'Aprende a identificar las 20 señales de que tu perro está enfermo. Guía completa con síntomas, cuándo preocuparte y cuándo acudir al veterinario urgentemente.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Los perros no pueden decirnos cuando se sienten mal, pero su cuerpo y comportamiento nos dan señales claras. Saber identificar estos signos puede marcar la diferencia entre un tratamiento temprano exitoso y complicaciones graves.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Señales de Alerta Inmediata' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Emergencias veterinarias: Dificultad respiratoria, convulsiones, colapso, vómito con sangre, abdomen hinchado, encías pálidas o azules, sangrado incontrolable, imposibilidad de orinar, temperatura >40°C o <37°C, ingestión de tóxicos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cambios en el Comportamiento' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Letargo extremo, aislamiento, agresividad inusual, desorientación, llanto o gemidos, inquietud nocturna, cambios en el sueño, pérdida de interés en juegos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Síntomas Digestivos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Vómitos persistentes, diarrea prolongada, pérdida de apetito, aumento de sed, babeo excesivo, dificultad para tragar, heces con sangre o moco, estreñimiento severo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cambios Físicos Visibles' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pérdida o aumento de peso, pelaje opaco o pérdida de pelo, bultos o masas, hinchazón, cojera, temblores, secreción ocular o nasal, mal aliento persistente.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cuándo Acudir al Veterinario' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Urgente (inmediato): Emergencias listadas arriba. Pronto (24-48h): Vómitos/diarrea moderados, pérdida de apetito >24h, letargo, tos persistente. Programar cita: Cambios graduales, chequeo preventivo, vacunas.',
          },
        ],
      },
    ],
    featuredImage: {
      _type: 'image',
      asset: {
        _ref: '/images/blog/enfermo.png',
        _type: 'reference',
      },
    },
    publishedAt: '2026-03-04T01:00:00Z',
    author: 'Dra. Laura Martínez',
    category: mockCategories[2], // Salud
    tags: ['salud', 'síntomas', 'enfermedad', 'diagnóstico', 'emergencias', 'veterinario'],
  },

  // Artículo 11: Mi Perro No Quiere Comer
  {
    _id: 'post-11',
    title: 'Mi Perro No Quiere Comer: 15 Causas y Soluciones 2026',
    slug: { current: 'mi-perro-no-quiere-comer-causas-soluciones' },
    excerpt:
      '¿Tu perro no quiere comer? Descubre las 15 causas más comunes, cuándo preocuparte y soluciones efectivas para recuperar su apetito. Guía completa con consejos veterinarios.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Ver a tu perro rechazar la comida es preocupante. La pérdida de apetito puede ser temporal e inofensiva, o señal de un problema grave. Saber distinguir entre ambas situaciones es crucial.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Causas Comunes (No Graves)' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cambio de pienso, exceso de premios, calor extremo, estrés o ansiedad, aburrimiento con la comida, edad (cachorros/seniors), celo en hembras, vacunación reciente.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Causas Médicas (Graves)' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Problemas dentales, enfermedades gastrointestinales, infecciones, parásitos, enfermedades sistémicas, dolor, obstrucción intestinal, intoxicación.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cuándo Preocuparse' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Urgente: No come >24h (cachorros), >48h (adultos), vómitos/diarrea, letargo, encías pálidas, dolor abdominal. Consulta pronto: Pérdida de peso, cambio de comportamiento, síntomas adicionales.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Soluciones Prácticas' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Calentar la comida, añadir caldo de pollo, mezclar comida húmeda, cambiar ubicación del comedero, establecer horarios fijos, reducir premios, ejercicio antes de comer, probar diferentes sabores.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Prevención' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Rutina consistente, pienso de calidad, agua fresca siempre, limpieza dental regular, desparasitación, chequeos veterinarios, evitar comida humana, controlar premios.',
          },
        ],
      },
    ],
    featuredImage: {
  _type: 'image',
  asset: {
    _ref: '/images/blog/Comer.png',  // ✅ Ruta de tu imagen
    _type: 'reference',
  },
},
    publishedAt: '2026-03-03T23:00:00Z',
    author: 'Dra. Laura Martínez',
    category: mockCategories[2], // Salud
    tags: ['alimentación', 'apetito', 'salud', 'nutrición', 'comportamiento', 'veterinario'],
  },

  // Artículo 12: Cómo Educar a un Cachorro
  {
    _id: 'post-12',
    title: 'Cómo Educar a un Cachorro: Guía Completa 2026 (Paso a Paso)',
    slug: { current: 'como-educar-cachorro-guia-completa' },
    excerpt:
      'Aprende cómo educar a un cachorro desde cero. Guía completa con técnicas de adiestramiento, socialización, órdenes básicas y solución de problemas comunes.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Los primeros meses de vida de tu cachorro son cruciales para su desarrollo. Una educación adecuada desde el principio establecerá las bases para un perro equilibrado, obediente y feliz.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Principios Básicos de Educación' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Refuerzo positivo (premios, elogios), consistencia (todos en casa deben seguir las mismas reglas), paciencia (aprendizaje gradual), timing (recompensar inmediatamente), sesiones cortas (5-10 minutos).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Socialización (8-16 Semanas)' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Período crítico para socialización. Exponer a: otros perros, personas de todas edades, diferentes entornos, sonidos variados, superficies diversas, vehículos. Siempre en experiencias positivas.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Órdenes Básicas' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Sentado: Premio sobre nariz, mueve hacia atrás. Tumbado: Desde sentado, premio al suelo. Quieto: Aumenta distancia gradualmente. Ven: Siempre positivo, nunca castigar. Junto: Caminar sin tirar. Suelta: Intercambio por premio.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Educación en Casa' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Hacer necesidades: Salir cada 2h, después de comer/dormir/jugar, premiar inmediatamente. Morder: Redirigir a juguetes, ignorar si muerde, no juegos bruscos. Dormir solo: Cama cómoda, rutina nocturna, ignorar llantos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Errores Comunes' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Castigo físico (genera miedo), inconsistencia, sesiones largas, expectativas irreales, falta de socialización, reforzar malos comportamientos sin querer.',
          },
        ],
      },
    ],
    featuredImage: {
  _type: 'image',
  asset: {
    _ref: '/images/blog/No_Quiere_Comer.png',  // ✅ Ruta de tu imagen
    _type: 'reference',
  },
},

    publishedAt: '2026-03-03T22:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[3], // Guías
    tags: ['educación', 'cachorro', 'adiestramiento', 'socialización', 'órdenes', 'comportamiento'],
  },

  // Artículo 13: Por Qué Mi Perro Ladra Mucho
  {
    _id: 'post-13',
    title: 'Por Qué Mi Perro Ladra Mucho y Cómo Solucionarlo: Guía 2026',
    slug: { current: 'por-que-mi-perro-ladra-mucho-soluciones' },
    excerpt:
      '¿Tu perro ladra excesivamente? Descubre las causas del ladrido excesivo y técnicas efectivas para controlarlo. Guía completa con soluciones según el tipo de ladrido.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'El ladrido excesivo es uno de los problemas de comportamiento más comunes y frustrantes. Entender por qué ladra tu perro es el primer paso para solucionar el problema de forma efectiva y humana.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Tipos de Ladrido y Sus Causas' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Alerta/territorial: Protege su espacio. Ansiedad por separación: Cuando está solo. Aburrimiento: Falta de estimulación. Demanda de atención: Quiere algo. Miedo: Respuesta a amenazas. Excitación: Durante juego. Frustración: No puede alcanzar algo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Soluciones por Tipo' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Territorial: Bloquear vista, desensibilización, comando "silencio". Ansiedad: Ejercicio previo, juguetes interactivos, salidas graduales. Aburrimiento: Más ejercicio, estimulación mental, juguetes. Demanda: Ignorar, premiar silencio. Miedo: Identificar causa, desensibilización.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Técnicas de Entrenamiento' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Comando "Silencio": Permitir 2-3 ladridos, decir "silencio", premiar cuando pare. Desensibilización: Exposición gradual al estímulo. Redirigir: Dar tarea alternativa. Ignorar: No reforzar con atención. Ejercicio: Perro cansado ladra menos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Qué NO Hacer' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Gritar (es como ladrar con él), castigo físico, collares de descarga, ignorar completamente (puede ser señal de problema), dejar solo muchas horas.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Cuándo Buscar Ayuda Profesional' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Ladrido compulsivo, ansiedad severa, agresividad, no mejora con entrenamiento, afecta calidad de vida. Consultar: Etólogo canino, adiestrador certificado, veterinario (descartar problemas médicos).',
          },
        ],
      },
    ],
    featuredImage: {
  _type: 'image',
  asset: {
    _ref: '/images/blog/ladrar.png',  // ✅ Ruta de tu imagen
    _type: 'reference',
  },
},

    publishedAt: '2026-03-03T21:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[3], // Guías
    tags: ['ladrido', 'comportamiento', 'adiestramiento', 'problemas', 'soluciones', 'educación'],
  },

  // Artículo 14: Vacunas para Perros
  {
    _id: 'post-14',
    title: 'Vacunas para Perros: Calendario Completo 2026 y Guía Actualizada',
    slug: { current: 'vacunas-perros-calendario-completo-2026' },
    excerpt:
      'Descubre el calendario completo de vacunas para perros 2026, cuáles son obligatorias, cuándo aplicarlas y todo lo que necesitas saber para proteger la salud de tu mascota.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Las vacunas son fundamentales para proteger a tu perro de enfermedades graves y potencialmente mortales. En esta guía completa te explicamos todo sobre el calendario de vacunación canina actualizado para 2026.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Vacunas Esenciales' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Parvovirus: Enfermedad viral mortal, causa diarrea con sangre. Moquillo: Afecta múltiples sistemas, mortalidad 50-80%. Hepatitis: Infección hepática grave. Rabia: Mortal al 100%, obligatoria por ley.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Vacunas No Esenciales' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Tos de las perreras: Para perros en guarderías. Leptospirosis: Zonas rurales, transmitida por roedores. Leishmaniosis: Zonas endémicas mediterráneas. Lyme: Zonas con garrapatas.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Calendario Cachorros' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '6-8 semanas: Primera polivalente (DHPPi). 10-12 semanas: Segunda dosis + Leptospirosis. 14-16 semanas: Tercera dosis + Rabia. 20-24 semanas: Opcionales según riesgo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Calendario Adultos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Anual: Leptospirosis, Tos perreras, Leishmaniosis. Cada 3 años: Moquillo, Parvovirus, Hepatitis, Rabia (según comunidad).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Efectos Secundarios' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Leves (normales): Letargo, pérdida apetito, inflamación local, fiebre leve. Graves (urgente): Hinchazón facial, dificultad respirar, vómitos persistentes, colapso.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Costes España 2026' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Primera consulta + vacuna: 40-60€. Refuerzos: 30-50€. Rabia: 20-35€. Calendario completo cachorro: 150-250€. Planes salud incluyen vacunas.',
          },
        ],
      },
    ],
    featuredImage: {
  _type: 'image',
  asset: {
    _ref: '/images/blog/Veterinario.png',  // ✅ Ruta de tu imagen
    _type: 'reference',
  },
},

    publishedAt: '2026-03-03T20:00:00Z',
    author: 'Dr. Carlos Méndez',
    category: mockCategories[2], // Salud
    tags: ['vacunas', 'salud', 'prevención', 'calendario', 'veterinario', 'cachorros'],
  },

  // Artículo 15: Cómo Desparasitar a un Perro
  {
    _id: 'post-15',
    title: 'Cómo Desparasitar a un Perro: Guía Completa 2026 con Calendario',
    slug: { current: 'como-desparasitar-perro-guia-completa' },
    excerpt:
      'Aprende cómo desparasitar a tu perro correctamente, cada cuánto hacerlo, qué productos usar y todo sobre parásitos internos y externos. Guía completa actualizada 2026.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'La desparasitación es fundamental para mantener a tu perro sano y proteger también a tu familia. En esta guía completa te explicamos todo sobre parásitos internos y externos, calendario de desparasitación y mejores productos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Parásitos Internos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Lombrices (Ascaris): Común en cachorros, transmisible a humanos. Anquilostomas: Causan anemia severa. Tenias: Transmitidas por pulgas. Giardia: Diarrea persistente. Gusano corazón: Transmitido por mosquitos, puede ser mortal.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Parásitos Externos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pulgas: Saltan 30cm, ponen 50 huevos diarios, causan dermatitis. Garrapatas: Transmiten Lyme, ehrlichiosis, babesiosis. Ácaros: Sarna sarcóptica (contagiosa), demodécica (no contagiosa). Piojos: Menos comunes, contacto directo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Calendario Desparasitación' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cachorros: Cada 2 semanas hasta 12 semanas, luego mensual hasta 6 meses. Adultos: Interna cada 3 meses, externa mensual. Alto riesgo: Interna cada 1-2 meses. Gestantes: Día 40 y 55.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Productos Recomendados' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Internos: Milbemax, Drontal Plus, Panacur. Externos: Bravecto (3 meses), NexGard (1 mes), Frontline, Seresto collar (8 meses). Doble acción: Advocate, Stronghold Plus.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Señales de Parásitos' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Internos: Diarrea, vómitos, vientre hinchado, pérdida peso, lombrices visibles. Externos: Rascado intenso, pérdida pelo, puntos negros en pelaje, garrapatas visibles.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Costes España 2026' }],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Internos: 5-15€/dosis, 20-60€/año. Externos: Pipetas 8-20€/mes, Collares 25-60€ (6-8 meses), Comprimidos 30-50€ (3 meses). Planes salud incluyen desparasitación.',
          },
        ],
      },
    ],
    featuredImage: {
  _type: 'image',
  asset: {
    _ref: '/images/blog/Antiparasitos.png',  // ✅ Ruta de tu imagen
    _type: 'reference',
  },
},

    publishedAt: '2026-03-03T19:00:00Z',
    author: 'Dra. Laura Martínez',
    category: mockCategories[2], // Salud
    tags: ['desparasitación', 'parásitos', 'salud', 'prevención', 'tratamiento', 'calendario'],
  },
];
