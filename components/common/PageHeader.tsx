interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader = ({ title, subtitle, className = '' }: PageHeaderProps) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h1 className="text-4xl font-bold mb-2 text-[#003d7a]">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};
