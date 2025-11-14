'use client';

import React from 'react';
import { useAdminConfig } from '@/providers/AdminConfigProvider';

/**
 * Example 1: Simple display of current locale
 */
export function LocaleDisplay() {
  const { config } = useAdminConfig();

  return (
    <div className="p-4 bg-blue-100 rounded">
      <p>Current Locale: <strong>{config.locale}</strong></p>
    </div>
  );
}

/**
 * Example 2: Language switcher component
 */
export function LanguageSwitcher() {
  const { config, updateConfig } = useAdminConfig();

  const switchLanguage = (newLocale: string) => {
    updateConfig({ locale: newLocale });
  };

  return (
    <div className="flex gap-2">
      {config.supportedLanguages?.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-3 py-1 rounded ${
            config.locale === lang
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

/**
 * Example 3: Display available collections
 */
export function CollectionsList() {
  const { config } = useAdminConfig();

  return (
    <div className="p-4 bg-purple-100 rounded">
      <h3 className="font-bold mb-2">Available Collections:</h3>
      <ul className="list-disc list-inside">
        {config.collections?.map((collection) => (
          <li key={collection} className="capitalize">{collection}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Example 4: Display available globals
 */
export function GlobalsList() {
  const { config } = useAdminConfig();

  return (
    <div className="p-4 bg-green-100 rounded">
      <h3 className="font-bold mb-2">Available Globals:</h3>
      <ul className="list-disc list-inside">
        {config.globals?.map((global) => (
          <li key={global} className="capitalize">{global}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Example 5: Branding display with logo
 */
export function BrandingDisplay() {
  const { config } = useAdminConfig();

  return (
    <div className="p-4 bg-yellow-100 rounded">
      <div className="flex items-center gap-4">
        {config.branding?.icon && (
          <img
            src={config.branding.icon}
            alt="Logo"
            className="w-12 h-12"
          />
        )}
        <div>
          <h2 className="text-xl font-bold">{config.branding?.appName}</h2>
          <p className="text-sm text-gray-600">{config.meta?.description}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 6: Dynamic content based on locale
 */
export function LocalizedContent() {
  const { config } = useAdminConfig();

  const content = {
    en: 'Welcome to PolFerries Admin',
    pl: 'Witamy w Panelu Administracyjnym PolFerries',
    se: 'Välkommen till PolFerries Admin',
  };

  const getCurrentContent = () => {
    return content[config.locale as keyof typeof content] || content.pl;
  };

  return (
    <div className="p-4 bg-indigo-100 rounded">
      <p className="text-lg font-semibold">{getCurrentContent()}</p>
    </div>
  );
}

/**
 * Example 7: All examples combined in one component
 */
export function AdminConfigShowcase() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Config Usage Examples</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">1. Locale Display</h2>
        <LocaleDisplay />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">2. Language Switcher</h2>
        <LanguageSwitcher />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">3. Collections List</h2>
        <CollectionsList />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">4. Globals List</h2>
        <GlobalsList />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">5. Branding Display</h2>
        <BrandingDisplay />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">6. Localized Content</h2>
        <LocalizedContent />
      </section>
    </div>
  );
}
