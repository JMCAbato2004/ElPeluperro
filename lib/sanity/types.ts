// TypeScript types for Sanity content

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Service {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  priceMin?: number;
  priceMax?: number;
  duration?: string;
  features?: string[];
  images?: SanityImage[];
  icon?: string;
  order?: number;
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  content?: any[]; // PortableText content
  featuredImage?: SanityImage;
  publishedAt?: string;
  author?: string;
  category?: Category;
  tags?: string[];
}

export interface Testimonial {
  _id: string;
  clientName: string;
  dogBreed?: string;
  content: string;
  rating: number;
  image?: SanityImage;
  featured?: boolean;
  publishedAt?: string;
}

export interface GalleryItem {
  _id: string;
  title?: string;
  beforeImage: SanityImage;
  afterImage: SanityImage;
  serviceType?: 'bath' | 'grooming' | 'antiparasitic';
  dogBreed?: string;
  description?: string;
  order?: number;
}
