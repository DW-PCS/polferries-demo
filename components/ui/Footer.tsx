'use client';

import { Facebook, Instagram, Linkedin, Music, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { FooterColumn, SocialMediaLink } from '@/lib/types';

interface FooterProps {
  companyDescription?: string;
  copyright?: string;
  columns?: FooterColumn[];
  socialMediaLinks?: SocialMediaLink[];
}

const getSocialIcon = (iconType: string) => {
  const iconProps = { size: 20, className: 'transition-transform hover:scale-110' };

  switch (iconType) {
    case 'facebook':
      return <Facebook {...iconProps} />;
    case 'instagram':
      return <Instagram {...iconProps} />;
    case 'linkedin':
      return <Linkedin {...iconProps} />;
    case 'twitter':
      return <Twitter {...iconProps} />;
    case 'youtube':
      return <Youtube {...iconProps} />;
    case 'tiktok':
      return <Music {...iconProps} />;
    default:
      return <Facebook {...iconProps} />;
  }
};

const Footer = ({
  companyDescription = '',
  copyright = '© 2025 PolFerries - Polska Żegluga Bałtycka SA',
  columns = [],
  socialMediaLinks = [],
}: FooterProps) => {
  const sortedColumns = [...columns].sort((a, b) => a.order - b.order);
  const sortedSocialLinks = [...socialMediaLinks].sort((a, b) => a.order - b.order);

  return (
    <footer className="bg-[#003d7a] text-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {companyDescription && (
              <div className="text-xl sm:text-2xl font-bold mb-1">{companyDescription}</div>
            )}
            <div className="text-[8px] tracking-widest text-white/60 mb-4 sm:mb-6">
              POLSKA ŻEGLUGA BAŁTYCKA SA
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {sortedColumns.map(column => {
            const sortedLinks = [...column.links].sort((a, b) => a.order - b.order);

            return (
              <div key={column.id} className="lg:col-span-1">
                <h3 className="text-sm font-medium mb-3 sm:mb-4 text-white/90">{column.title}</h3>
                <ul className="space-y-2 text-sm">
                  {sortedLinks.map(link => (
                    <li key={link.id}>
                      <Link
                        href={link.url}
                        target={link.openInNewTab ? '_blank' : '_self'}
                        rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                        className="text-white/60 hover:text-white transition"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Social Media */}
          {sortedSocialLinks.length > 0 && (
            <div className="lg:col-span-1">
              <h3 className="text-sm font-medium mb-3 sm:mb-4 text-white/90">Social Media</h3>
              <ul className="space-y-2 text-sm">
                {sortedSocialLinks.map(social => (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                    >
                      {getSocialIcon(social.iconType)}
                      <span>{social.platform}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <p className="text-white/50 text-xs">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
