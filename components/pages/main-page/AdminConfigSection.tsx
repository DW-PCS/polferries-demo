'use client';

import { useAdminConfig } from '@/providers/AdminConfigProvider';

export const AdminConfigSection = () => {
  const { config } = useAdminConfig();

  return (
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
  );
};
