'use client';

import React from 'react';
import { useAdminConfig } from '@/providers/AdminConfigProvider';

export function AdminConfigDemo() {
  const { config, updateConfig } = useAdminConfig();

  const handleChangeLocale = (locale: string) => {
    updateConfig({ locale });
  };

  const handleChangeAppName = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig({
      branding: {
        ...config.branding,
        appName: e.target.value,
      },
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Admin Config Demo - {config.branding?.appName}
          </h1>
          <p className="text-gray-600 mt-2">Interactive admin configuration showcase</p>
        </div>

        {/* Current Config Display */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Current Configuration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Branding</h3>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">App Name:</span> {config.branding?.appName}</p>
                <p><span className="font-medium">Logo:</span> {config.branding?.logo}</p>
                <p><span className="font-medium">Icon:</span> {config.branding?.icon}</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">Localization</h3>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">Current Locale:</span> {config.locale}</p>
                <p><span className="font-medium">Supported:</span> {config.supportedLanguages?.join(', ')}</p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium text-purple-900 mb-2">Collections</h3>
              <div className="text-sm">
                <ul className="list-disc list-inside">
                  {config.collections?.map((collection) => (
                    <li key={collection}>{collection}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-900 mb-2">Globals</h3>
              <div className="text-sm">
                <ul className="list-disc list-inside">
                  {config.globals?.map((global) => (
                    <li key={global}>{global}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Meta Information</h3>
            <div className="text-sm space-y-1">
              <p><span className="font-medium">Title:</span> {config.meta?.title}</p>
              <p><span className="font-medium">Description:</span> {config.meta?.description}</p>
            </div>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="space-y-4 border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-800">Interactive Demo Controls</h2>

          <div className="space-y-3">
            <div>
              <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-1">
                Application Name
              </label>
              <input
                id="appName"
                type="text"
                value={config.branding?.appName || ''}
                onChange={handleChangeAppName}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter app name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Locale
              </label>
              <div className="flex gap-2">
                {config.supportedLanguages?.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleChangeLocale(lang)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      config.locale === lang
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Raw Config JSON */}
        <div className="space-y-2 border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-800">Raw Configuration (JSON)</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
            {JSON.stringify(config, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
