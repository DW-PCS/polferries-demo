'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  locale?: string;
  onLanguageChange?: (locale: string) => void;
  supportedLanguages?: string[];
}

const Navbar = ({ locale = 'pl', onLanguageChange, supportedLanguages = ['pl', 'en', 'se'] }: NavbarProps) => {
  const [showDemo, setShowDemo] = useState(false);

  const content = {
    pl: {
      hero: 'codziennie do Skandynawii',
      tours: 'WYCIECZKI',
      offers: 'PROMOCJE',
      schedule: 'ROZKŁAD I CENNIK',
      cargo: 'CARGO',
      ourFerries: 'NASZE PROMY',
      about: 'O firmie',
      contact: 'Kontakt',
      buyTicket: 'KUP BILET',
    },
    en: {
      hero: 'daily to Scandinavia',
      tours: 'TOURS',
      offers: 'PROMOTIONS',
      schedule: 'SCHEDULE & PRICES',
      cargo: 'CARGO',
      ourFerries: 'OUR FERRIES',
      about: 'About us',
      contact: 'Contact',
      buyTicket: 'BUY TICKET',
    },
    se: {
      hero: 'dagligen till Skandinavien',
      tours: 'RESOR',
      offers: 'KAMPANJER',
      schedule: 'TIDTABELL & PRISER',
      cargo: 'CARGO',
      ourFerries: 'VÅRA FÄRJOR',
      about: 'Om oss',
      contact: 'Kontakt',
      buyTicket: 'KÖP BILJETT',
    },
  };

  const currentContent = content[locale as keyof typeof content] || content.pl;

  return (
    <>
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
            <Link href="/about" className="text-gray-600 hover:text-[#003d7a] transition">
              {currentContent.about}
            </Link>
            <Link href="/career" className="text-gray-600 hover:text-[#003d7a] transition">
              Kariera
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-[#003d7a] transition">
              FAQ
            </Link>
          </div>
          <div className="flex gap-1">
            {supportedLanguages.map(lang => (
              <button
                key={lang}
                onClick={() => onLanguageChange && onLanguageChange(lang)}
                className={`px-3 py-1 text-xs font-medium transition-all rounded ${
                  locale === lang
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
            <Link href="/" className="text-[#003d7a]">
              <div className="text-3xl font-bold tracking-tight">polferries</div>
              <div className="text-[9px] font-medium tracking-widest text-gray-500 mt-0.5">
                POLSKA ŻEGLUGA BAŁTYCKA SA
              </div>
            </Link>

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
              <Link
                href="/schedule"
                className="text-white/90 hover:text-white text-sm font-medium transition"
              >
                {currentContent.schedule}
              </Link>
              <Link
                href="/offers"
                className="text-white/90 hover:text-white text-sm font-medium transition"
              >
                {currentContent.offers}
              </Link>
              <Link
                href="/wycieczki"
                className="text-white/90 hover:text-white text-sm font-medium transition"
              >
                {currentContent.tours}
              </Link>
              <Link
                href="/cargo"
                className="text-white/90 hover:text-white text-sm font-medium transition"
              >
                {currentContent.cargo}
              </Link>
              <Link
                href="/ferries"
                className="text-white/90 hover:text-white text-sm font-medium transition"
              >
                {currentContent.ourFerries}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
