import React from 'react';

interface ParchmentButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ParchmentButton: React.FC<ParchmentButtonProps> = ({ 
  children, 
  onClick, 
  href,
  className = '',
  type = 'button'
}) => {
  const baseClasses = `
    inline-block
    px-8 py-3
    bg-parchment
    border-2 border-navy
    text-navy
    font-slab font-semibold
    rounded-full
    transition-all duration-300
    hover:bg-navy hover:text-parchment
    hover:shadow-lg hover:-translate-y-0.5
    active:scale-95
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

export default ParchmentButton;