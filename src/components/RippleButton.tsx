import React, { useState, useRef, MouseEvent } from 'react';

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  rippleColor?: string;
  className?: string;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rippleColor,
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  const [ripples, setRipples] = useState<RippleProps[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size };
    
    setRipples(prev => [...prev, newRipple]);

    // Call the original onClick handler
    if (onClick) {
      onClick(e);
    }

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.slice(1));
    }, 600);
  };

  const getVariantClasses = () => {
    const baseClasses = 'relative overflow-hidden transition-all duration-300 font-body font-semibold rounded-lg shadow-md hover:shadow-lg active:shadow-inner';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-gradient-to-r from-brass to-copper text-parchment hover:from-copper hover:to-brass`;
      case 'secondary':
        return `${baseClasses} bg-parchment border-2 border-brass text-brass hover:bg-brass hover:text-parchment`;
      case 'accent':
        return `${baseClasses} bg-navy text-parchment hover:bg-navy/90`;
      default:
        return baseClasses;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const getRippleColor = () => {
    if (rippleColor) return rippleColor;
    
    switch (variant) {
      case 'primary':
        return 'rgba(248, 245, 240, 0.6)'; // parchment with opacity
      case 'secondary':
        return 'rgba(205, 127, 50, 0.4)'; // brass with opacity
      case 'accent':
        return 'rgba(248, 245, 240, 0.5)'; // parchment with opacity
      default:
        return 'rgba(255, 255, 255, 0.5)';
    }
  };

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <button
      ref={buttonRef}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105 active:scale-95'}
        ${className}
      `}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {/* Button content */}
      <span className="relative z-10">{children}</span>

      {/* Ripple effects */}
      {!prefersReducedMotion && ripples.map((ripple, index) => (
        <span
          key={index}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: getRippleColor(),
          }}
        />
      ))}

      {/* Hover gear effect for steampunk theme */}
      {!prefersReducedMotion && (
        <span className="absolute -right-2 -bottom-2 text-4xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
          ⚙
        </span>
      )}
    </button>
  );
};

export default RippleButton;