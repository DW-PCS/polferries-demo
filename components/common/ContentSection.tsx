interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const ContentSection = ({ title, children, className = '' }: ContentSectionProps) => {
  return (
    <section className={`mb-8 ${className}`}>
      {title && <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>}
      <div className="text-gray-700">{children}</div>
    </section>
  );
};
