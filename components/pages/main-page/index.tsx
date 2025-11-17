'use client';

import { MainPageData } from '@/lib/types';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { StatsSection } from './StatsSection';
import { AdminConfigSection } from './AdminConfigSection';

interface MainPageProps {
  data: MainPageData;
}

const MainPage = ({ data }: MainPageProps) => {
  return (
    <div className="bg-white">
      <HeroSection
        tagline={data?.heroTagline}
        description={data?.heroDescription}
        ctaText={data?.heroCTAText}
        secondaryCTAText={data?.heroSecondaryCTAText}
      />
      <FeaturesSection features={data?.features} />
      <StatsSection stats={data?.stats} />
      <AdminConfigSection />
    </div>
  );
};

export default MainPage;
