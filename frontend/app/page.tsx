import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogoStrip from '@/components/LogoStrip';
import BenefitsSection from '@/components/BenefitsSection';
import CoursesSection from '@/components/CoursesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import VideoHighlightSection from '@/components/VideoHighlightSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light">
      <TopBanner />
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <VideoHighlightSection />
      <BenefitsSection />
      <CoursesSection />
      <TestimonialsSection />
      <PricingSection showHeader={true} />
      <FAQSection />
      <Footer />
    </main>
  );
}