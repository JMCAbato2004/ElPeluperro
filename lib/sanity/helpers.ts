import { client } from './client';
import {
  servicesQuery,
  serviceBySlugQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
  blogPostsByCategoryQuery,
  categoriesQuery,
  categoryBySlugQuery,
  testimonialsQuery,
  featuredTestimonialsQuery,
  galleryItemsQuery,
  galleryItemsByServiceQuery,
} from './queries';
import type {
  Service,
  BlogPost,
  Category,
  Testimonial,
  GalleryItem,
} from './types';

// Services
export async function getServices(): Promise<Service[]> {
  try {
    return await client.fetch(servicesQuery);
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    return await client.fetch(serviceBySlugQuery, { slug });
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    return null;
  }
}

// Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(blogPostsQuery);
    
    // Si no hay posts en Sanity, usar datos mock
    if (!posts || posts.length === 0) {
      const { mockBlogPosts } = await import('@/lib/data/mockBlog');
      return mockBlogPosts;
    }
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // En caso de error, intentar cargar datos mock
    try {
      const { mockBlogPosts } = await import('@/lib/data/mockBlog');
      return mockBlogPosts;
    } catch {
      return [];
    }
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(blogPostBySlugQuery, { slug });
    
    // Si no hay post en Sanity, buscar en datos mock
    if (!post) {
      const { mockBlogPosts } = await import('@/lib/data/mockBlog');
      return mockBlogPosts.find((p) => p.slug.current === slug) || null;
    }
    
    return post;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    
    // En caso de error, intentar cargar desde datos mock
    try {
      const { mockBlogPosts } = await import('@/lib/data/mockBlog');
      return mockBlogPosts.find((p) => p.slug.current === slug) || null;
    } catch {
      return null;
    }
  }
}

export async function getBlogPostsByCategory(
  categorySlug: string
): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(blogPostsByCategoryQuery, { categorySlug });
    
    // Si no hay posts en Sanity, usar datos mock filtrados
    if (!posts || posts.length === 0) {
      const { mockBlogPosts } = await import('@/lib/data/mockBlog');
      return mockBlogPosts.filter(
        (post) => post.category?.slug.current === categorySlug
      );
    }
    
    return posts;
  } catch (error) {
    console.error(
      `Error fetching blog posts for category ${categorySlug}:`,
      error
    );
    
    // En caso de error, intentar cargar datos mock filtrados
    try {
      const { mockBlogPosts } = await import('@/lib/data/mockBlog');
      return mockBlogPosts.filter(
        (post) => post.category?.slug.current === categorySlug
      );
    } catch {
      return [];
    }
  }
}

// Categories
export async function getCategories(): Promise<Category[]> {
  try {
    const categories = await client.fetch(categoriesQuery);
    
    // Si no hay categorías en Sanity, usar datos mock
    if (!categories || categories.length === 0) {
      const { mockCategories } = await import('@/lib/data/mockBlog');
      return mockCategories;
    }
    
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    
    // En caso de error, intentar cargar datos mock
    try {
      const { mockCategories } = await import('@/lib/data/mockBlog');
      return mockCategories;
    } catch {
      return [];
    }
  }
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  try {
    const category = await client.fetch(categoryBySlugQuery, { slug });
    
    // Si no hay categoría en Sanity, buscar en datos mock
    if (!category) {
      const { mockCategories } = await import('@/lib/data/mockBlog');
      return mockCategories.find((c) => c.slug.current === slug) || null;
    }
    
    return category;
  } catch (error) {
    console.error(`Error fetching category with slug ${slug}:`, error);
    
    // En caso de error, intentar cargar desde datos mock
    try {
      const { mockCategories } = await import('@/lib/data/mockBlog');
      return mockCategories.find((c) => c.slug.current === slug) || null;
    } catch {
      return null;
    }
  }
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(testimonialsQuery);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(featuredTestimonialsQuery);
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    return [];
  }
}

// Gallery Items
export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const items = await client.fetch(galleryItemsQuery);
    
    // Si no hay items en Sanity, usar datos mock
    if (!items || items.length === 0) {
      const { mockGalleryItems } = await import('@/lib/data/mockGallery');
      return mockGalleryItems;
    }
    
    return items;
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    
    // En caso de error, intentar cargar datos mock
    try {
      const { mockGalleryItems } = await import('@/lib/data/mockGallery');
      return mockGalleryItems;
    } catch {
      return [];
    }
  }
}

export async function getGalleryItemsByService(
  serviceType: string
): Promise<GalleryItem[]> {
  try {
    return await client.fetch(galleryItemsByServiceQuery, { serviceType });
  } catch (error) {
    console.error(
      `Error fetching gallery items for service ${serviceType}:`,
      error
    );
    return [];
  }
}

// Helper function to calculate reading time for blog posts
export function calculateReadingTime(content: any[]): number {
  if (!content || !Array.isArray(content)) return 0;

  const wordsPerMinute = 200;
  let wordCount = 0;

  content.forEach((block) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child: any) => {
        if (child.text) {
          wordCount += child.text.split(/\s+/).length;
        }
      });
    }
  });

  return Math.ceil(wordCount / wordsPerMinute);
}
