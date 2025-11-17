'use client';

import { useAdminConfig } from '@/providers/AdminConfigProvider';
import Navigation from './Navigation';
import Footer from './Footer';


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

interface PageLayoutProps {
  children: React.ReactNode;
  navigationLinks?: NavLink[];
  footerData?: FooterData;
  socialMediaLinks?: SocialMediaLink[];
}

const PageLayout = ({
  children,
  navigationLinks = [],
  footerData,
  socialMediaLinks = [],
}: PageLayoutProps) => {
  const { config, updateConfig } = useAdminConfig();

  const changeLanguage = (locale: string) => {
    updateConfig({ locale });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        links={navigationLinks}
        locale={config.locale || 'pl'}
        onLanguageChange={changeLanguage}
        supportedLanguages={config.supportedLanguages || ['pl', 'en', 'se']}
      />

      <main className="flex-grow">{children}</main>

      <Footer
        companyDescription={footerData?.companyDescription}
        copyright={footerData?.copyright}
        columns={footerData?.columns}
        socialMediaLinks={socialMediaLinks}
      />
    </div>
  );
};

export default PageLayout;
