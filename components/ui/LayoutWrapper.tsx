'use client';

import { FooterData, NavLink, SocialMediaLink } from '@/lib/types';
import { useAdminConfig } from '@/providers/AdminConfigProvider';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Navigation from './Navigation';

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
