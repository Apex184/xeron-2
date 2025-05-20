import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'frosted' | 'team';
};

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-md',
    frosted: 'bg-white/20 backdrop-blur-lg border border-white/20 dark:bg-gray-900/30 dark:border-gray-700/30 shadow-lg',
    team: 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-xl dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700/50',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;