'use client';

import Link from 'next/link';
import { iconMap } from '@/lib/utils/iconMap';
import { Feature } from '@/lib/types';

interface FeaturesSectionProps {
  features?: Feature[];
}

export const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon ? iconMap[feature.icon] : null;

            return (
              <div key={index} className="group">
                <div className="mb-6 text-[#003d7a]">
                  {IconComponent ? (
                    <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                  ) : (
                    <span className="text-5xl">{feature.icon}</span>
                  )}
                </div>
                <h3 className="text-xl font-medium text-[#003d7a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {feature.description}
                </p>
                {feature.linkUrl && feature.linkText && (
                  <Link
                    href={feature.linkUrl}
                    className="text-[#dc143c] text-sm font-medium hover:opacity-70 transition inline-flex items-center gap-2"
                  >
                    {feature.linkText}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
