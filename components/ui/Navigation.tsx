'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavLink } from '@/lib/types';

interface NavigationProps {
  links: NavLink[];
  locale?: string;
  onLanguageChange?: (locale: string) => void;
  supportedLanguages?: string[];
}

const Navigation = ({
  links,
  locale = 'pl',
  onLanguageChange,
  supportedLanguages = ['pl', 'en', 'se']
}: NavigationProps) => {
  const pathname = usePathname();
  const isAdminBoard = pathname.startsWith('/admin');
  const [showDemo, setShowDemo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (isAdminBoard) {
    return null;
  }

  const content = {
    pl: {
      hero: 'codziennie do Skandynawii',
      about: 'O firmie',
      career: 'Kariera',
      faq: 'FAQ',
      contact: 'Kontakt',
      buyTicket: 'KUP BILET',
    },
    en: {
      hero: 'daily to Scandinavia',
      about: 'About us',
      career: 'Career',
      faq: 'FAQ',
      contact: 'Contact',
      buyTicket: 'BUY TICKET',
    },
    se: {
      hero: 'dagligen till Skandinavien',
      about: 'Om oss',
      career: 'Karriär',
      faq: 'FAQ',
      contact: 'Kontakt',
      buyTicket: 'KÖP BILJETT',
    },
  };

  const currentContent = content[locale as keyof typeof content] || content.pl;

  // Sort links by order
  const sortedLinks = [...links].sort((a, b) => a.order - b.order);

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
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex gap-4 sm:gap-6 text-xs">
            <Link href="/about" className="text-gray-600 hover:text-[#003d7a] transition">
              {currentContent.about}
            </Link>
            <Link href="/career" className="text-gray-600 hover:text-[#003d7a] transition">
              {currentContent.career}
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-[#003d7a] transition">
              {currentContent.faq}
            </Link>
          </div>
          <div className="flex gap-1">
            {supportedLanguages.map(lang => (
              <button
                key={lang}
                onClick={() => onLanguageChange && onLanguageChange(lang)}
                className={`px-2 sm:px-3 py-1 text-xs font-medium transition-all rounded ${
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
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <Link href="/" className="text-[#003d7a]">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight">polferries</div>
              <div className="text-[8px] sm:text-[9px] font-medium tracking-widest text-gray-500 mt-0.5">
                POLSKA ŻEGLUGA BAŁTYCKA SA
              </div>
            </Link>

            {/* Tagline - Hidden on mobile */}
            <div className="hidden lg:block text-sm text-gray-600 font-light">
              {currentContent.hero}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search - Hidden on mobile */}
              <button className="hidden sm:block text-gray-400 hover:text-[#003d7a] transition">
                <span className="text-lg">🔍</span>
              </button>

              {/* Contact - Hidden on mobile */}
              <button className="text-gray-400 hover:text-[#003d7a] transition hidden md:flex items-center gap-2">
                <span className="text-lg">☎️</span>
                <span className="text-sm text-gray-600">{currentContent.contact}</span>
              </button>

              {/* Buy Ticket Button */}
              <button className="bg-[#dc143c] hover:bg-[#c01232] text-white px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium transition">
                {currentContent.buyTicket}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-[#003d7a] p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Menu Bar */}
          <div className="hidden lg:block bg-[#003d7a] -mx-6 px-6">
            <div className="flex items-center gap-8 h-14">
              {sortedLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target={link.openInNewTab ? '_blank' : '_self'}
                  className="text-white/90 hover:text-white text-sm font-medium transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#003d7a] -mx-4 sm:-mx-6 px-4 sm:px-6 py-4">
              <div className="flex flex-col gap-4">
                {sortedLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    target={link.openInNewTab ? '_blank' : '_self'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/90 hover:text-white text-sm font-medium transition py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
