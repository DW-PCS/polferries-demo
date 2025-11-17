'use client';

interface HeroSectionProps {
  tagline?: string;
  description?: string;
  ctaText?: string;
  secondaryCTAText?: string;
}

export const HeroSection = ({
  tagline,
  description,
  ctaText,
  secondaryCTAText,
}: HeroSectionProps) => {
  if (!tagline && !description) return null;

  return (
    <section className="bg-[#003d7a] text-white py-40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          {tagline && (
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              {tagline}
            </h1>
          )}
          {description && (
            <p className="text-xl text-white/80 mb-12 font-light leading-relaxed">
              {description}
            </p>
          )}
          {(ctaText || secondaryCTAText) && (
            <div className="flex gap-4">
              {ctaText && (
                <button className="bg-[#dc143c] hover:bg-[#c01232] text-white px-10 py-4 text-sm font-medium transition">
                  {ctaText}
                </button>
              )}
              {secondaryCTAText && (
                <button className="border border-white/30 hover:border-white/50 text-white px-10 py-4 text-sm font-medium transition">
                  {secondaryCTAText}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
