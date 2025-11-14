'use client';

import React, { createContext, useContext, ReactNode } from 'react';

export interface AdminConfig {
  branding?: {
    appName?: string;
    logo?: string;
    icon?: string;
  };
  locale?: string;
  supportedLanguages?: string[];
  collections?: string[];
  globals?: string[];
  user?: {
    slug?: string;
  };
  meta?: {
    title?: string;
    description?: string;
    icons?: {
      icon?: string;
    };
  };
}

interface AdminConfigContextValue {
  config: AdminConfig;
  updateConfig: (newConfig: Partial<AdminConfig>) => void;
}

const AdminConfigContext = createContext<AdminConfigContextValue | undefined>(undefined);

interface AdminConfigProviderProps {
  children: ReactNode;
  initialConfig?: AdminConfig;
}

export function AdminConfigProvider({ children, initialConfig = {} }: AdminConfigProviderProps) {
  const [config, setConfig] = React.useState<AdminConfig>({
    branding: {
      appName: 'PolFerries Admin',
      logo: '/logo.svg',
      icon: '/icon.ico',
    },
    locale: 'pl',
    supportedLanguages: ['en', 'pl', 'se'],
    collections: ['users', 'media', 'tours', 'offers', 'promotions', 'attractions'],
    globals: ['mainPage', 'footer', 'navigation', 'socialMedia'],
    user: {
      slug: 'users',
    },
    meta: {
      title: 'PolFerries - Panel Administracyjny',
      description: 'Promy do Szwecji i Danii - System Zarządzania',
      icons: {
        icon: '/icon.ico',
      },
    },
    ...initialConfig,
  });

  const updateConfig = React.useCallback((newConfig: Partial<AdminConfig>) => {
    setConfig((prev) => ({
      ...prev,
      ...newConfig,
      branding: {
        ...prev.branding,
        ...newConfig.branding,
      },
      meta: {
        ...prev.meta,
        ...newConfig.meta,
      },
    }));
  }, []);

  const value = React.useMemo(
    () => ({
      config,
      updateConfig,
    }),
    [config, updateConfig]
  );

  return <AdminConfigContext.Provider value={value}>{children}</AdminConfigContext.Provider>;
}

export function useAdminConfig() {
  const context = useContext(AdminConfigContext);
  if (context === undefined) {
    throw new Error('useAdminConfig must be used within AdminConfigProvider');
  }
  return context;
}
