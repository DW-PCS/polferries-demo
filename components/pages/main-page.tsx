'use client';

import { JsonObject } from 'payload';
import { useAdminConfig } from '@/providers/AdminConfigProvider';
import { useState } from 'react';

interface MainPageProps {
  data: JsonObject;
}

const MainPage = ({ data }: MainPageProps) => {
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
      description: 'Oferujemy komfortowe promy, niezapomniane wycieczki i atrakcyjne pakiety turystyczne do Szwecji i Danii.',
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
      description: 'We offer comfortable ferries, unforgettable tours and attractive tourist packages to Sweden and Denmark.',
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
      description: 'Vi erbjuder bekväma färjor, oförglömliga resor och attraktiva turistpaket till Sverige och Danmark.',
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
      {/* Demo Notice */}
      {showDemo && (
        <div className="bg-[#003d7a] text-white py-2 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-xs font-medium">Demo Mode</p>
            <button
              onClick={() => setShowDemo(false)}
              className="text-white/70 hover:text-white text-xs transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-gray-600 hover:text-[#003d7a] transition">{currentContent.about}</a>
            <a href="#" className="text-gray-600 hover:text-[#003d7a] transition">Kariera</a>
            <a href="#" className="text-gray-600 hover:text-[#003d7a] transition">FAQ</a>
          </div>
          <div className="flex gap-1">
            {config.supportedLanguages?.map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`px-3 py-1 text-xs font-medium transition-all rounded ${
                  config.locale === lang
                    ? 'bg-[#003d7a] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="text-[#003d7a]">
              <div className="text-3xl font-bold tracking-tight">polferries</div>
              <div className="text-[9px] font-medium tracking-widest text-gray-500 mt-0.5">
                POLSKA ŻEGLUGA BAŁTYCKA SA
              </div>
            </div>

            {/* Tagline */}
            <div className="hidden lg:block text-sm text-gray-600 font-light">
              {currentContent.hero}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-[#003d7a] transition">
                <span className="text-lg">🔍</span>
              </button>
              <button className="text-gray-400 hover:text-[#003d7a] transition hidden md:flex items-center gap-2">
                <span className="text-lg">☎️</span>
                <span className="text-sm text-gray-600">{currentContent.contact}</span>
              </button>
              <button className="bg-[#dc143c] hover:bg-[#c01232] text-white px-8 py-3 text-sm font-medium transition">
                {currentContent.buyTicket}
              </button>
            </div>
          </div>

          {/* Menu Bar */}
          <div className="bg-[#003d7a] -mx-6 px-6">
            <div className="flex items-center gap-8 h-14">
              <a href="#schedule" className="text-white/90 hover:text-white text-sm font-medium transition">
                {currentContent.schedule}
              </a>
              <a href="#offers" className="text-white/90 hover:text-white text-sm font-medium transition">
                {currentContent.offers}
              </a>
              <a href="#tours" className="text-white/90 hover:text-white text-sm font-medium transition">
                {currentContent.tours}
              </a>
              <a href="#cargo" className="text-white/90 hover:text-white text-sm font-medium transition">
                {currentContent.cargo}
              </a>
              <a href="#ferries" className="text-white/90 hover:text-white text-sm font-medium transition">
                {currentContent.ourFerries}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#003d7a] text-white py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              {currentContent.tagline}
            </h1>
            <p className="text-xl text-white/80 mb-12 font-light leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex gap-4">
              <button className="bg-[#dc143c] hover:bg-[#c01232] text-white px-10 py-4 text-sm font-medium transition">
                {currentContent.cta}
              </button>
              <button className="border border-white/30 hover:border-white/50 text-white px-10 py-4 text-sm font-medium transition">
                {currentContent.schedule}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
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
              <a href="#" className="text-[#dc143c] text-sm font-medium hover:opacity-70 transition inline-flex items-center gap-2">
                Zobacz więcej
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Feature 2 */}
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
              <a href="#" className="text-[#dc143c] text-sm font-medium hover:opacity-70 transition inline-flex items-center gap-2">
                Zobacz oferty
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Feature 3 */}
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
              <a href="#" className="text-[#dc143c] text-sm font-medium hover:opacity-70 transition inline-flex items-center gap-2">
                Dowiedz się więcej
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16">
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
          </div>
        </div>
      </section>

      {/* Admin Config Display (Demo) */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-[#003d7a] mb-2">
              Admin Configuration
            </h2>
            <p className="text-gray-500 mb-16 text-sm">
              Live demonstration of the AdminConfigProvider system
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-2 border-[#003d7a] pl-6">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Active Locale</h3>
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

      {/* Footer */}
      <footer className="bg-[#003d7a] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl font-bold mb-1">polferries</div>
              <div className="text-[8px] tracking-widest text-white/60 mb-6">
                POLSKA ŻEGLUGA BAŁTYCKA SA
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {currentContent.description}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-white/90">{currentContent.tours}</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/60 hover:text-white transition">Szwecja</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition">Dania</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition">Pakiety turystyczne</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-white/90">{currentContent.contact}</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-white/60">info@polferries.com</li>
                <li className="text-white/60">+48 123 456 789</li>
                <li className="text-white/60">+48 123 456 790</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-white/90">Social Media</h3>
              <div className="flex gap-3">
                <a href="#" className="text-2xl opacity-60 hover:opacity-100 transition">📘</a>
                <a href="#" className="text-2xl opacity-60 hover:opacity-100 transition">📷</a>
                <a href="#" className="text-2xl opacity-60 hover:opacity-100 transition">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/50 text-xs">© 2025 PolFerries - Polska Żegluga Bałtycka SA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
