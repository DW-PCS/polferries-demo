interface InfoCardProps {
  title: string;
  content: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export const InfoCard = ({ title, content, variant = 'default', className = '' }: InfoCardProps) => {
  const bgColor = variant === 'primary' ? 'bg-[#003d7a] text-white' : 'bg-gray-50';

  return (
    <div className={`${bgColor} p-4 rounded-lg ${className}`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div>{content}</div>
    </div>
  );
};
