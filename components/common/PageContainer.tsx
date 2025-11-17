interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return <div className={`container mx-auto px-4 py-8 ${className}`}>{children}</div>;
};
