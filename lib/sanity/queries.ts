// GROQ queries for fetching content from Sanity

// Services queries
export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  name,
  slug,
  description,
  priceMin,
  priceMax,
  duration,
  features,
  images,
  icon,
  order
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  description,
  priceMin,
  priceMax,
  duration,
  features,
  images,
  icon
}`;

// Blog posts queries
export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  author,
  "category": category->{
    title,
    slug
  },
  tags
}`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  featuredImage,
  publishedAt,
  author,
  "category": category->{
    title,
    slug,
    description
  },
  tags
}`;

export const blogPostsByCategoryQuery = `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  author,
  "category": category->{
    title,
    slug
  },
  tags
}`;

// Categories queries
export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description
}`;

// Testimonials queries
export const testimonialsQuery = `*[_type == "testimonial"] | order(publishedAt desc) {
  _id,
  clientName,
  dogBreed,
  content,
  rating,
  image,
  featured,
  publishedAt
}`;

export const featuredTestimonialsQuery = `*[_type == "testimonial" && featured == true] | order(publishedAt desc) {
  _id,
  clientName,
  dogBreed,
  content,
  rating,
  image,
  publishedAt
}`;

// Gallery items queries
export const galleryItemsQuery = `*[_type == "galleryItem"] | order(order asc) {
  _id,
  title,
  beforeImage,
  afterImage,
  serviceType,
  dogBreed,
  description,
  order
}`;

export const galleryItemsByServiceQuery = `*[_type == "galleryItem" && serviceType == $serviceType] | order(order asc) {
  _id,
  title,
  beforeImage,
  afterImage,
  serviceType,
  dogBreed,
  description,
  order
}`;
