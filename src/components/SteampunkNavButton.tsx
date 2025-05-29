import React from 'react';
import { Link } from 'react-router-dom';

interface SteampunkNavButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
}

const SteampunkNavButton: React.FC<SteampunkNavButtonProps> = ({ 
  children, 
  onClick, 
  href,
  to,
  className = '' 
}) => {
  const content = (
    <>
      {/* Outer Ring - Brass with Victorian Engravings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brass-gold via-copper to-warm-brown shadow-2xl">
        {/* Victorian Engraving Pattern */}
        <div className="absolute inset-0 rounded-full opacity-30" 
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, transparent 20%, rgba(0,0,0,0.1) 21%, rgba(0,0,0,0.1) 30%, transparent 31%),
                              radial-gradient(circle at 70% 70%, transparent 20%, rgba(0,0,0,0.1) 21%, rgba(0,0,0,0.1) 30%, transparent 31%),
                              radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.05) 41%)`,
            backgroundSize: '20px 20px, 20px 20px, 100% 100%'
          }}
        />
      </div>

      {/* Inner Ring - Raised Copper Center */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-copper via-brass-gold to-copper shadow-inner">
        {/* Radial Brushed Metal Effect */}
        <div className="absolute inset-0 rounded-full opacity-40"
          style={{
            background: `conic-gradient(from 0deg, 
              rgba(255,255,255,0.1) 0deg, 
              transparent 10deg, 
              rgba(255,255,255,0.1) 20deg, 
              transparent 30deg, 
              rgba(255,255,255,0.1) 40deg,
              transparent 50deg,
              rgba(255,255,255,0.1) 60deg,
              transparent 70deg,
              rgba(255,255,255,0.1) 80deg,
              transparent 90deg,
              rgba(255,255,255,0.1) 100deg,
              transparent 110deg,
              rgba(255,255,255,0.1) 120deg,
              transparent 130deg,
              rgba(255,255,255,0.1) 140deg,
              transparent 150deg,
              rgba(255,255,255,0.1) 160deg,
              transparent 170deg,
              rgba(255,255,255,0.1) 180deg,
              transparent 190deg,
              rgba(255,255,255,0.1) 200deg,
              transparent 210deg,
              rgba(255,255,255,0.1) 220deg,
              transparent 230deg,
              rgba(255,255,255,0.1) 240deg,
              transparent 250deg,
              rgba(255,255,255,0.1) 260deg,
              transparent 270deg,
              rgba(255,255,255,0.1) 280deg,
              transparent 290deg,
              rgba(255,255,255,0.1) 300deg,
              transparent 310deg,
              rgba(255,255,255,0.1) 320deg,
              transparent 330deg,
              rgba(255,255,255,0.1) 340deg,
              transparent 350deg,
              rgba(255,255,255,0.1) 360deg)`
          }}
        />
      </div>

      {/* Center Button Face */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-warm-brown via-deep-navy to-warm-brown/80 shadow-lg flex items-center justify-center">
        {/* Glass Overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        
        {/* Text Content */}
        <span className="relative z-10 text-brass-gold font-bold text-base md:text-lg tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {children}
        </span>
      </div>

      {/* Decorative Screws */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-inner" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-inner" />
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-inner" />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-inner" />

      {/* Glowing Edge Effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(212,180,131,0.8),inset_0_0_20px_rgba(212,180,131,0.4)]" />
      </div>

      {/* Warm Industrial Lighting Overlay */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-100/10 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Pressed State Shadow */}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] opacity-0 group-active:opacity-100 transition-opacity duration-150" />
    </>
  );

  if (to) {
    return (
      <Link 
        to={to}
        className={`
          relative inline-block w-32 h-32 
          transform transition-all duration-300 
          hover:scale-105 active:scale-95
          group cursor-pointer
          ${className}
        `}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href}
        className={`
          relative inline-block w-32 h-32 
          transform transition-all duration-300 
          hover:scale-105 active:scale-95
          group cursor-pointer
          ${className}
        `}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`
        relative inline-block w-32 h-32 
        transform transition-all duration-300 
        hover:scale-105 active:scale-95
        group cursor-pointer
        ${className}
      `}
    >
      {content}
    </button>
  );
};

export default SteampunkNavButton;