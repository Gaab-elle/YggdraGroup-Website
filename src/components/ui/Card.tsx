import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export const Card = ({ children, className = "", ...props }: CardProps) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "", ...props }: CardProps) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);