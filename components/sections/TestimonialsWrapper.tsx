import { getFeaturedTestimonials } from '@/lib/sanity/helpers';
import TestimonialsSection from './TestimonialsSection';

export default async function TestimonialsWrapper() {
  const testimonials = await getFeaturedTestimonials();

  return <TestimonialsSection testimonials={testimonials} />;
}
