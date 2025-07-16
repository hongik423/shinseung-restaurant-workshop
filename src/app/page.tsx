import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import LearningPathSection from '@/components/LearningPathSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <LearningPathSection />
      <SuccessStoriesSection />
      <FAQSection />
    </div>
  );
}
