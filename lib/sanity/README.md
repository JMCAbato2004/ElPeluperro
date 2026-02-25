# Sanity Integration

This directory contains the Sanity client configuration, queries, types, and helper functions for fetching content.

## Usage

### Importing

```typescript
import {
  getServices,
  getBlogPosts,
  getTestimonials,
  getGalleryItems,
  urlFor,
} from '@/lib/sanity';
```

### Fetching Data

#### Services

```typescript
// Get all services
const services = await getServices();

// Get a specific service by slug
const service = await getServiceBySlug('bano');
```

#### Blog Posts

```typescript
// Get all blog posts
const posts = await getBlogPosts();

// Get a specific post by slug
const post = await getBlogPostBySlug('cuidado-del-pelaje');

// Get posts by category
const categoryPosts = await getBlogPostsByCategory('higiene');
```

#### Categories

```typescript
// Get all categories
const categories = await getCategories();

// Get a specific category by slug
const category = await getCategoryBySlug('higiene');
```

#### Testimonials

```typescript
// Get all testimonials
const testimonials = await getTestimonials();

// Get only featured testimonials
const featured = await getFeaturedTestimonials();
```

#### Gallery Items

```typescript
// Get all gallery items
const galleryItems = await getGalleryItems();

// Get gallery items by service type
const bathGallery = await getGalleryItemsByService('bath');
```

### Working with Images

To generate optimized image URLs from Sanity images:

```typescript
import { urlFor } from '@/lib/sanity';

// Basic usage
const imageUrl = urlFor(image).url();

// With dimensions
const imageUrl = urlFor(image).width(800).height(600).url();

// With quality
const imageUrl = urlFor(image).width(800).quality(80).url();

// With format
const imageUrl = urlFor(image).width(800).format('webp').url();

// Auto format (recommended)
const imageUrl = urlFor(image).width(800).auto('format').url();
```

### Calculating Reading Time

```typescript
import { calculateReadingTime } from '@/lib/sanity';

const post = await getBlogPostBySlug('my-post');
const readingTime = calculateReadingTime(post.content);
console.log(`${readingTime} min read`);
```

## Types

All TypeScript types are exported from `lib/sanity/types.ts`:

- `Service`
- `BlogPost`
- `Category`
- `Testimonial`
- `GalleryItem`
- `SanityImage`

## Direct Client Access

If you need to make custom queries:

```typescript
import { client } from '@/lib/sanity';

const customData = await client.fetch(`*[_type == "myType"] {
  field1,
  field2
}`);
```

## Environment Variables

Make sure these are set in your `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token (only for write operations)
```
