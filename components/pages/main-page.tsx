'use client';

import { useAdminConfig } from '@/providers/AdminConfigProvider';
import Link from 'next/link';
import { JsonObject } from 'payload';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Calendar,
  Map,
  Package,
  Ship,
  Anchor,
  Waves,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  LucideIcon
} from 'lucide-react';

interface NavLink {
  id: string;
  name: string;
  href: string;
  openInNewTab?: boolean;
  order: number;
}

interface FooterLink {
  id: string;
  text: string;
  url: string;
  openInNewTab?: boolean;
  order: number;
}

interface FooterColumn {
  id: string;
  title: string;
  order: number;
  links: FooterLink[];
}

interface SocialMediaLink {
  id: string;
  platform: string;
  iconType: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'tiktok';
  url: string;
  order: number;
}

interface FooterData {
  companyDescription: string;
  copyright: string;
  columns: FooterColumn[];
}

interface MainPageProps {
  data: JsonObject;
  navigationLinks?: NavLink[];
  footerData?: FooterData;
  socialMediaLinks?: SocialMediaLink[];
}

// Icon map for converting string icon names to Lucide React components
const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  map: Map,
  package: Package,
  ship: Ship,
  anchor: Anchor,
  waves: Waves,
  mapPin: MapPin,
  clock: Clock,
  dollarSign: DollarSign,
  users: Users,
  briefcase: Briefcase,
};

const MainPage = ({ data, navigationLinks = [], footerData, socialMediaLinks = [] }: MainPageProps) => {
  const { config, updateConfig } = useAdminConfig();
  const [showDemo, setShowDemo] = useState(true);

  const changeLanguage = (locale: string) => {
    updateConfig({ locale });
  };

  const content = {
    pl: {
      hero: 'codziennie do Skandynawii',
      subtitle: 'Polska Żegluga Bałtycka SA',
      tagline: 'Odkryj piękno Skandynawii',
      tours: 'WYCIECZKI',
      offers: 'PROMOCJE',
      schedule: 'ROZKŁAD I CENNIK',
      cargo: 'CARGO',
      ourFerries: 'NASZE PROMY',
      about: 'O firmie',
      contact: 'Kontakt',
      buyTicket: 'KUP BILET',
      description:
        'Oferujemy komfortowe promy, niezapomniane wycieczki i atrakcyjne pakiety turystyczne do Szwecji i Danii.',
      cta: 'KUP BILET',
      feature1Title: 'Rozkład i Cennik',
      feature1Desc: 'Regularne połączenia do Szwecji i Danii',
      feature2Title: 'Wycieczki',
      feature2Desc: 'Organizowane wyjazdy do najpiękniejszych miejsc Skandynawii',
      feature3Title: 'Cargo',
      feature3Desc: 'Profesjonalny transport towarowy przez Bałtyk',
      stats1: 'Lat doświadczenia',
      stats2: 'Zadowolonych pasażerów',
      stats3: 'Cotygodniowych rejsów',
      stats4: 'Ocena klientów',
    },
    en: {
      hero: 'daily to Scandinavia',
      subtitle: 'Polish Baltic Shipping SA',
      tagline: 'Discover the beauty of Scandinavia',
      tours: 'TOURS',
      offers: 'PROMOTIONS',
      schedule: 'SCHEDULE & PRICES',
      cargo: 'CARGO',
      ourFerries: 'OUR FERRIES',
      about: 'About us',
      contact: 'Contact',
      buyTicket: 'BUY TICKET',
      description:
        'We offer comfortable ferries, unforgettable tours and attractive tourist packages to Sweden and Denmark.',
      cta: 'BUY TICKET',
      feature1Title: 'Schedule & Prices',
      feature1Desc: 'Regular connections to Sweden and Denmark',
      feature2Title: 'Tours',
      feature2Desc: 'Organized trips to the most beautiful places in Scandinavia',
      feature3Title: 'Cargo',
      feature3Desc: 'Professional freight transport across the Baltic',
      stats1: 'Years of experience',
      stats2: 'Happy passengers',
      stats3: 'Weekly sailings',
      stats4: 'Customer rating',
    },
    se: {
      hero: 'dagligen till Skandinavien',
      subtitle: 'Polska Żegluga Bałtycka SA',
      tagline: 'Upptäck Skandinaviens skönhet',
      tours: 'RESOR',
      offers: 'KAMPANJER',
      schedule: 'TIDTABELL & PRISER',
      cargo: 'CARGO',
      ourFerries: 'VÅRA FÄRJOR',
      about: 'Om oss',
      contact: 'Kontakt',
      buyTicket: 'KÖP BILJETT',
      description:
        'Vi erbjuder bekväma färjor, oförglömliga resor och attraktiva turistpaket till Sverige och Danmark.',
      cta: 'KÖP BILJETT',
      feature1Title: 'Tidtabell & Priser',
      feature1Desc: 'Regelbundna förbindelser till Sverige och Danmark',
      feature2Title: 'Resor',
      feature2Desc: 'Organiserade resor till de vackraste platserna i Skandinavien',
      feature3Title: 'Cargo',
      feature3Desc: 'Professionell godstransport över Östersjön',
      stats1: 'År av erfarenhet',
      stats2: 'Nöjda passagerare',
      stats3: 'Veckoavgångar',
      stats4: 'Kundbetyg',
    },
  };

  const currentContent = content[config.locale as keyof typeof content] || content.pl;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Component */}
      <Navigation
        links={navigationLinks}
        locale={config.locale || 'pl'}
        onLanguageChange={changeLanguage}
        supportedLanguages={config.supportedLanguages || ['pl', 'en', 'se']}
      />
      {/* Hero Section */}
      <section className="bg-[#003d7a] text-white py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              {data?.heroTagline || currentContent.tagline}
            </h1>
            <p className="text-xl text-white/80 mb-12 font-light leading-relaxed">
              {data?.heroDescription || currentContent.description}
            </p>
            <div className="flex gap-4">
              <button className="bg-[#dc143c] hover:bg-[#c01232] text-white px-10 py-4 text-sm font-medium transition">
                {data?.heroCTAText || currentContent.cta}
              </button>
              <button className="border border-white/30 hover:border-white/50 text-white px-10 py-4 text-sm font-medium transition">
                {data?.heroSecondaryCTAText || currentContent.schedule}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {data?.features && Array.isArray(data.features) && data.features.length > 0 ? (
              data.features.map((feature: any, index: number) => {
                const IconComponent = feature.icon ? iconMap[feature.icon] : null;
                return (
                  <div key={index} className="group">
                    <div className="mb-6 text-[#003d7a]">
                      {IconComponent ? (
                        <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                      ) : (
                        <span className="text-5xl">{feature.icon}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-medium text-[#003d7a] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {feature.description}
                    </p>
                    <Link
                      href={feature.linkUrl}
                      className="text-[#dc143c] text-sm font-medium hover:opacity-70 transition inline-flex items-center gap-2"
                    >
                      {feature.linkText}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                );
              })
            ) : (
              <>
                {/* Fallback features */}
                <div className="group">
                  <div className="mb-6">
                    <span className="text-5xl">📅</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#003d7a] mb-3">
                    {currentContent.feature1Title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {currentContent.feature1Desc}
                  </p>
                  <a
                    href="#"
                    className="text-[#dc143c] text-sm font-medium hover:opacity-70 transition inline-flex items-center gap-2"
                  >
                    Zobacz więcej
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
                <div className="group">
                  <div className="mb-6">
                    <span className="text-5xl">🗺️</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#003d7a] mb-3">
                    {currentContent.feature2Title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {currentContent.feature2Desc}
                  </p>
                  <a
                    href="#"
                    className="text-[#dc143c] text-sm font-medium hover:opacity-70 transition inline-flex items-center gap-2"
                  >
                    Zobacz oferty
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
                <div className="group">
                  <div className="mb-6">
                    <span className="text-5xl">📦</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#003d7a] mb-3">
                    {currentContent.feature3Title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {currentContent.feature3Desc}
                  </p>
                  <a
                    href="#"
                    className="text-[#dc143c] text-sm font-medium hover:opacity-70 transition inline-flex items-center gap-2"
                  >
                    Dowiedz się więcej
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16">
            {data?.stats && Array.isArray(data.stats) && data.stats.length > 0 ? (
              data.stats.map((stat: any, index: number) => (
                <div key={index}>
                  <p className="text-5xl font-light mb-2 text-[#003d7a]">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))
            ) : (
              <>
                <div>
                  <p className="text-5xl font-light mb-2 text-[#003d7a]">30+</p>
                  <p className="text-gray-600 text-sm">{currentContent.stats1}</p>
                </div>
                <div>
                  <p className="text-5xl font-light mb-2 text-[#003d7a]">500K+</p>
                  <p className="text-gray-600 text-sm">{currentContent.stats2}</p>
                </div>
                <div>
                  <p className="text-5xl font-light mb-2 text-[#003d7a]">150+</p>
                  <p className="text-gray-600 text-sm">{currentContent.stats3}</p>
                </div>
                <div>
                  <p className="text-5xl font-light mb-2 text-[#003d7a]">5★</p>
                  <p className="text-gray-600 text-sm">{currentContent.stats4}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* Admin Config Display (Demo) */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-[#003d7a] mb-2">Admin Configuration</h2>
            <p className="text-gray-500 mb-16 text-sm">
              Live demonstration of the AdminConfigProvider system
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-2 border-[#003d7a] pl-6">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Active Locale
                </h3>
                <p className="text-3xl font-light text-[#003d7a]">{config.locale?.toUpperCase()}</p>
              </div>
              <div className="border-l-2 border-[#dc143c] pl-6">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">App Name</h3>
                <p className="text-xl font-light text-[#003d7a]">{config.branding?.appName}</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Collections</h3>
                <p className="text-sm text-gray-600">{config.collections?.join(', ')}</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Globals</h3>
                <p className="text-sm text-gray-600">{config.globals?.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Component */}
      <Footer
        companyDescription={footerData?.companyDescription}
        copyright={footerData?.copyright}
        columns={footerData?.columns}
        socialMediaLinks={socialMediaLinks}
      />
    </div>
  );
};

export default MainPage;
