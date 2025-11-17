'use client';

import { useAdminConfig } from '@/providers/AdminConfigProvider';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Navigation from './Navigation';

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

interface LayoutWrapperProps {
  children: React.ReactNode;
  navigationLinks?: NavLink[];
  footerData?: FooterData;
  socialMediaLinks?: SocialMediaLink[];
}

const LayoutWrapper = ({
  children,
  navigationLinks = [],
  footerData,
  socialMediaLinks = [],
}: LayoutWrapperProps) => {
  const pathname = usePathname();
  const { config, updateConfig } = useAdminConfig();

  const isAdminRoute = pathname?.startsWith('/admin');

  const changeLanguage = (locale: string) => {
    updateConfig({ locale });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminRoute && (
        <Navigation
          links={navigationLinks}
          locale={config.locale || 'pl'}
          onLanguageChange={changeLanguage}
          supportedLanguages={config.supportedLanguages || ['pl', 'en', 'se']}
        />
      )}

      <div className={!isAdminRoute ? 'flex-grow' : ''}>{children}</div>

      {!isAdminRoute && (
        <Footer
          companyDescription={footerData?.companyDescription}
          copyright={footerData?.copyright}
          columns={footerData?.columns}
          socialMediaLinks={socialMediaLinks}
        />
      )}
    </div>
  );
};

export default LayoutWrapper;
