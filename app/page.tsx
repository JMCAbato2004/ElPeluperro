import HeroSection from '@/components/sections/HeroSection';
import MobileServiceSection from '@/components/sections/MobileServiceSection';
import FeaturedServices from '@/components/sections/FeaturedServices';
import TestimonialsWrapper from '@/components/sections/TestimonialsWrapper';
import ServiceAreaMap from '@/components/interactive/ServiceAreaMapWrapper';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MobileServiceSection />
      <FeaturedServices />
      <TestimonialsWrapper />
      <ServiceAreaMap />
    </div>
  );
}
