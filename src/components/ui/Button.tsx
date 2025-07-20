import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: () => void;
  [key: string]: any;
}

export const Button = ({ 
  children, 
  className = "", 
  variant = "default", 
  size = "default", 
  onClick,
  ...props 
}: ButtonProps) => {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
    ghost: "bg-transparent hover:bg-gray-100"
  };
  
  const sizes = {
    default: "px-4 py-2 rounded-md",
    sm: "px-3 py-1.5 text-sm rounded-md",
    lg: "px-6 py-3 text-lg rounded-lg",
    icon: "p-2 rounded-md"
  };

  return (
    <button 
      className={`inline-flex items-center justify-center font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};  