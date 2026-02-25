/**
 * Mock data para la galería cuando Sanity no está configurado
 */

export const mockGalleryItems = [
  {
    _id: '1',
    title: 'Transformación Golden Retriever',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-1-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-1-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'grooming' as const,
    dogBreed: 'Golden Retriever',
    description: 'Corte completo y baño con acondicionador especial',
    order: 1,
  },
  {
    _id: '2',
    title: 'Baño refrescante',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-2-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-2-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'bath' as const,
    dogBreed: 'Labrador',
    description: 'Baño completo con champú hipoalergénico',
    order: 2,
  },
  {
    _id: '3',
    title: 'Peluquería Caniche',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-3-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-3-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'grooming' as const,
    dogBreed: 'Caniche',
    description: 'Corte estilo teddy bear',
    order: 3,
  },
  {
    _id: '4',
    title: 'Tratamiento antiparasitario',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-4-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-4-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'antiparasitic' as const,
    dogBreed: 'Pastor Alemán',
    description: 'Tratamiento completo contra pulgas y garrapatas',
    order: 4,
  },
  {
    _id: '5',
    title: 'Baño y corte Yorkshire',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-5-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-5-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'grooming' as const,
    dogBreed: 'Yorkshire Terrier',
    description: 'Corte de pelo largo con baño aromático',
    order: 5,
  },
  {
    _id: '6',
    title: 'Spa canino completo',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-6-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-6-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'bath' as const,
    dogBreed: 'Husky Siberiano',
    description: 'Baño premium con masaje y acondicionador',
    order: 6,
  },
  {
    _id: '7',
    title: 'Corte de verano',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-7-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-7-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'grooming' as const,
    dogBreed: 'Shih Tzu',
    description: 'Corte corto para el verano',
    order: 7,
  },
  {
    _id: '8',
    title: 'Desparasitación externa',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-8-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-8-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'antiparasitic' as const,
    dogBreed: 'Beagle',
    description: 'Tratamiento preventivo contra parásitos',
    order: 8,
  },
  {
    _id: '9',
    title: 'Baño hidratante',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-9-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-9-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'bath' as const,
    dogBreed: 'Bulldog Francés',
    description: 'Baño especial para piel sensible',
    order: 9,
  },
  {
    _id: '10',
    title: 'Peluquería Schnauzer',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-10-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-10-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'grooming' as const,
    dogBreed: 'Schnauzer',
    description: 'Corte tradicional de raza',
    order: 10,
  },
  {
    _id: '11',
    title: 'Tratamiento completo',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-11-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-11-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'antiparasitic' as const,
    dogBreed: 'Border Collie',
    description: 'Desparasitación interna y externa',
    order: 11,
  },
  {
    _id: '12',
    title: 'Baño de lujo',
    beforeImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-12-before',
        _type: 'reference' as const,
      },
    },
    afterImage: {
      _type: 'image' as const,
      asset: {
        _ref: 'image-12-after',
        _type: 'reference' as const,
      },
    },
    serviceType: 'bath' as const,
    dogBreed: 'Pomerania',
    description: 'Baño con productos premium y secado profesional',
    order: 12,
  },
];
