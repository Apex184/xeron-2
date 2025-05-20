import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'relative px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px] dark:from-blue-600 dark:to-indigo-700 focus:ring-blue-500',
    secondary: 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-800 dark:text-white hover:bg-white/20 focus:ring-gray-400',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 focus:ring-blue-500',
  };

  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;