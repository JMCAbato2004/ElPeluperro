/**
 * Mock data for blog posts
 * Used when Sanity CMS doesn't have data yet
 */

import type { SanityImage } from '../sanity/types';

const mockImage: SanityImage = {
  _type: 'image',
  asset: {
    _ref: 'image-placeholder',
    _type: 'reference',
  },
};

export const mockCategories = [
  {
    _id: 'cat-1',
    title: 'Higiene',
    slug: { current: 'higiene' },
    description: 'Consejos sobre higiene y cuidado del pelaje de tu perro',
  },
  {
    _id: 'cat-2',
    title: 'Alimentación',
    slug: { current: 'alimentacion' },
    description: 'Guías sobre nutrición y alimentación canina',
  },
  {
    _id: 'cat-3',
    title: 'Salud',
    slug: { current: 'salud' },
    description: 'Información sobre salud y bienestar de tu mascota',
  },
  {
    _id: 'cat-4',
    title: 'Comportamiento',
    slug: { current: 'comportamiento' },
    description: 'Consejos sobre comportamiento y adiestramiento',
  },
];

export const mockBlogPosts = [
  {
    _id: 'post-1',
    title: 'Cómo bañar a tu perro en casa: Guía completa',
    slug: { current: 'como-banar-perro-en-casa' },
    excerpt:
      'Aprende los pasos esenciales para bañar a tu perro correctamente en casa, desde la preparación hasta el secado final.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Bañar a tu perro en casa puede ser una experiencia gratificante tanto para ti como para tu mascota. Sin embargo, es importante hacerlo correctamente para evitar problemas de piel y mantener a tu perro cómodo durante el proceso.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Preparación antes del baño: Antes de comenzar, asegúrate de tener todos los materiales necesarios: champú específico para perros, toallas, cepillo, y un lugar adecuado con agua tibia. Cepilla bien a tu perro antes del baño para eliminar nudos y pelo muerto.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Durante el baño: Moja completamente el pelaje de tu perro con agua tibia, evitando los ojos y oídos. Aplica el champú y masajea suavemente, creando espuma. Enjuaga abundantemente hasta que no queden restos de jabón.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Secado: Usa toallas para eliminar el exceso de agua. Si tu perro tolera el secador, úsalo a temperatura baja y a distancia prudente. Cepilla nuevamente para evitar nudos mientras se seca.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-15T10:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0],
    tags: ['baño', 'higiene', 'cuidados básicos'],
  },
  {
    _id: 'post-2',
    title: 'La importancia del cepillado regular en perros',
    slug: { current: 'importancia-cepillado-regular' },
    excerpt:
      'Descubre por qué el cepillado regular es fundamental para la salud de tu perro y cómo hacerlo correctamente según el tipo de pelaje.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'El cepillado regular es una de las prácticas más importantes en el cuidado de tu perro. No solo mantiene su pelaje brillante y saludable, sino que también fortalece el vínculo entre tú y tu mascota.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Beneficios del cepillado: Elimina pelo muerto, previene nudos y enredos, distribuye los aceites naturales de la piel, permite detectar problemas de piel tempranamente, y reduce la cantidad de pelo en casa.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Frecuencia según el tipo de pelaje: Perros de pelo corto necesitan cepillado semanal, pelo medio 2-3 veces por semana, y pelo largo requieren cepillado diario. Durante la época de muda, aumenta la frecuencia.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-10T09:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0],
    tags: ['cepillado', 'pelaje', 'cuidados diarios'],
  },
  {
    _id: 'post-3',
    title: 'Alimentación saludable para perros: Guía básica',
    slug: { current: 'alimentacion-saludable-perros' },
    excerpt:
      'Una guía completa sobre cómo alimentar correctamente a tu perro, qué alimentos evitar y cómo establecer una rutina de alimentación.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'La alimentación es uno de los pilares fundamentales de la salud de tu perro. Una dieta equilibrada y adecuada a sus necesidades específicas garantiza una vida larga y saludable.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Nutrientes esenciales: Los perros necesitan proteínas de calidad, grasas saludables, carbohidratos, vitaminas y minerales. La proporción varía según la edad, tamaño y nivel de actividad.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Alimentos prohibidos: Nunca des a tu perro chocolate, uvas, cebolla, ajo, aguacate, alcohol, cafeína o alimentos con xilitol. Estos pueden ser tóxicos y causar problemas graves de salud.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-05T11:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[1],
    tags: ['alimentación', 'nutrición', 'salud'],
  },
  {
    _id: 'post-4',
    title: 'Cómo prevenir parásitos en tu perro',
    slug: { current: 'prevenir-parasitos-perro' },
    excerpt:
      'Conoce los diferentes tipos de parásitos que pueden afectar a tu perro y las mejores estrategias de prevención.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Los parásitos son una amenaza constante para la salud de tu perro. La prevención es la mejor estrategia para mantener a tu mascota libre de estos molestos invasores.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Tipos de parásitos: Los más comunes son pulgas, garrapatas, ácaros, lombrices intestinales y gusanos del corazón. Cada uno requiere un enfoque de prevención específico.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Prevención efectiva: Usa productos antiparasitarios recomendados por tu veterinario, mantén limpio el entorno de tu perro, revisa regularmente su pelaje y piel, y realiza desparasitaciones periódicas.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-01T10:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[2],
    tags: ['parásitos', 'prevención', 'salud'],
  },
  {
    _id: 'post-5',
    title: 'Señales de estrés en perros y cómo ayudarles',
    slug: { current: 'senales-estres-perros' },
    excerpt:
      'Aprende a identificar las señales de estrés en tu perro y descubre técnicas efectivas para ayudarle a relajarse.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Los perros, al igual que los humanos, pueden experimentar estrés. Reconocer las señales temprano es crucial para ayudar a tu mascota a mantener su bienestar emocional.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Señales comunes de estrés: Jadeo excesivo, lamido de labios, bostezos frecuentes, orejas hacia atrás, cola entre las patas, temblores, y comportamiento destructivo.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cómo ayudar: Crea un espacio seguro, mantén rutinas consistentes, proporciona ejercicio regular, usa técnicas de relajación como masajes suaves, y considera la ayuda de un profesional si el estrés persiste.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2023-12-28T09:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[3],
    tags: ['comportamiento', 'estrés', 'bienestar'],
  },
  {
    _id: 'post-6',
    title: 'Cuidados especiales para perros de pelo largo',
    slug: { current: 'cuidados-perros-pelo-largo' },
    excerpt:
      'Los perros de pelo largo requieren cuidados específicos. Descubre cómo mantener su pelaje saludable y sin enredos.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Los perros de pelo largo son hermosos, pero requieren un compromiso mayor en cuanto a cuidados. Con las técnicas adecuadas, mantener su pelaje en perfectas condiciones es más fácil de lo que parece.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cepillado diario: Es fundamental para prevenir nudos y enredos. Usa un cepillo adecuado para pelo largo y trabaja por secciones, desde las puntas hacia la raíz.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Baños regulares: Los perros de pelo largo necesitan baños más frecuentes, generalmente cada 4-6 semanas. Usa productos específicos para pelo largo y acondiciona bien para facilitar el desenredado.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2023-12-20T10:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0],
    tags: ['pelo largo', 'cepillado', 'cuidados especiales'],
  },
];
