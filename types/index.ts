/**
 * Domain Types for El Peluperro Website
 */

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceMin: number;
  priceMax: number;
  duration: string;
  features: string[];
  images: string[];
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: unknown; // PortableText from Sanity
  featuredImage: string;
  category: Category;
  tags: string[];
  publishedAt: Date;
  author: string;
  readingTime: number;
}

export interface Category {
  title: string;
  slug: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  dogBreed: string;
  content: string;
  rating: number;
  image?: string;
  featured: boolean;
  publishedAt: Date;
}

export interface GalleryItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  serviceType: 'bath' | 'grooming' | 'antiparasitic';
  dogBreed?: string;
  description?: string;
}

export interface BookingData {
  name: string;
  phone: string;
  address: string;
  city: string;
  serviceType: string;
  preferredDate: Date;
  comments?: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  value: string;
  weight: Record<string, number>;
}

export interface QuizResult {
  recommendedServices: string[];
  explanation: string;
}

export interface ServiceArea {
  name: string;
  coordinates: [number, number][];
  type: 'primary' | 'secondary';
}
