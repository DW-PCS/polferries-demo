'use client';

import { Stat } from '@/lib/types';

interface StatsSectionProps {
  stats?: Stat[];
}

export const StatsSection = ({ stats }: StatsSectionProps) => {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-5xl font-light mb-2 text-[#003d7a]">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
