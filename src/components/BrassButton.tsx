import React from 'react';

interface BrassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const BrassButton: React.FC<BrassButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseClasses = `
    group relative 
    px-6 py-3 
    rounded-lg 
    shadow-gear 
    transition-all duration-300 
    overflow-hidden
    transform hover:-translate-y-1
    font-semibold tracking-wide
  `;
  
  const variantClasses = variant === 'primary' 
    ? 'bg-gradient-to-b from-brass-gold to-copper text-deep-navy hover:from-copper hover:to-warm-brown'
    : 'bg-gradient-to-b from-warm-brown/20 to-brass-gold/20 text-brass-gold border-2 border-brass-gold hover:bg-brass-gold/30 hover:text-creamy-ivory';

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {/* Gear corner animations */}
      <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-2 border-brass-gold rounded-full animate-gear-spin" />
        <div className="absolute top-0 right-0 w-4 h-4 border-2 border-brass-gold rounded-full animate-gear-spin-reverse" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-2 border-brass-gold rounded-full animate-gear-spin-reverse" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-2 border-brass-gold rounded-full animate-gear-spin" />
      </div>
      
      {/* Pressure gauge effect on hover */}
      <div className="absolute inset-0 bg-pressure-gauge opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
      
      {/* Steam puff effect */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-500 pointer-events-none" />
    </button>
  );
};

export default BrassButton;