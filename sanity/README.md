# Sanity CMS Configuration

This directory contains the Sanity Studio configuration and content schemas for El Peluperro website.

## Setup Instructions

### 1. Create a Sanity Project

If you haven't already created a Sanity project:

```bash
npm create sanity@latest -- --project-id <your-project-id> --dataset production
```

Or create a project at [sanity.io](https://www.sanity.io/)

### 2. Configure Environment Variables

Copy `.env.local.template` to `.env.local` and fill in your Sanity project details:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token_here
```

### 3. Deploy Sanity Studio

To deploy the Sanity Studio:

```bash
npx sanity deploy
```

This will make your CMS accessible at `https://your-project-name.sanity.studio`

### 4. Configure CORS

In your Sanity project settings, add your website domain to the CORS origins:

- Go to [manage.sanity.io](https://manage.sanity.io)
- Select your project
- Go to Settings > API
- Add your domain (e.g., `http://localhost:3000` for development, `https://elpeluperro.com` for production)

## Content Schemas

The following content types are available:

### Blog Post (`post`)
- Title
- Slug
- Excerpt
- Content (Rich text with images)
- Featured Image
- Category (Reference)
- Tags
- Published At
- Author

### Category (`category`)
- Title
- Slug
- Description

### Testimonial (`testimonial`)
- Client Name
- Dog Breed
- Content
- Rating (1-5)
- Image
- Featured (boolean)
- Published At

### Gallery Item (`galleryItem`)
- Title
- Before Image
- After Image
- Service Type (bath, grooming, antiparasitic)
- Dog Breed
- Description
- Display Order

### Service (`service`)
- Service Name
- Slug
- Description
- Minimum Price
- Maximum Price
- Duration
- Features (array)
- Service Images (array)
- Icon Name
- Display Order

## Running Sanity Studio Locally

To run Sanity Studio locally for development:

```bash
npx sanity dev
```

This will start the studio at `http://localhost:3333`

## Accessing Content in Next.js

Use the helper functions from `lib/sanity/helpers.ts`:

```typescript
import { getServices, getBlogPosts, getTestimonials } from '@/lib/sanity';

// Fetch all services
const services = await getServices();

// Fetch all blog posts
const posts = await getBlogPosts();

// Fetch featured testimonials
const testimonials = await getFeaturedTestimonials();
```

## Image URLs

To generate image URLs from Sanity images:

```typescript
import { urlFor } from '@/lib/sanity';

const imageUrl = urlFor(image).width(800).height(600).url();
```
