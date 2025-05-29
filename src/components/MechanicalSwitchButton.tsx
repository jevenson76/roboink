import React, { useState } from 'react';
import { Settings } from 'lucide-react';

interface MechanicalSwitchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'toggle' | 'lever' | 'valve';
}

const MechanicalSwitchButton: React.FC<MechanicalSwitchButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'toggle' 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setIsActive(!isActive);
    setTimeout(() => setIsPressed(false), 200);
    if (onClick) onClick();
  };

  const baseClasses = `
    relative 
    overflow-visible
    transition-all duration-300 
    font-bold tracking-wide
    cursor-pointer
    select-none
  `;

  if (variant === 'toggle') {
    return (
      <div 
        onClick={handleClick}
        className={`${baseClasses} ${className}`}
      >
        {/* Industrial Toggle Switch Base */}
        <div className="relative inline-flex items-center">
          {/* Switch Plate */}
          <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg p-4 shadow-2xl border-2 border-gray-600">
            {/* Screws */}
            <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-gray-500 shadow-inner" />
            <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gray-500 shadow-inner" />
            <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-gray-500 shadow-inner" />
            <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-gray-500 shadow-inner" />
            
            {/* Toggle Mechanism */}
            <div className="flex items-center space-x-4">
              <span className="text-brass-gold text-lg">{children}</span>
              
              {/* Toggle Switch */}
              <div className="relative w-16 h-8 bg-gray-800 rounded-full shadow-inner">
                <div 
                  className={`absolute top-1 w-6 h-6 bg-gradient-to-br rounded-full shadow-lg transition-all duration-300 ${
                    isActive 
                      ? 'left-9 from-brass-gold to-copper shadow-[0_0_10px_rgba(212,180,131,0.5)]' 
                      : 'left-1 from-gray-400 to-gray-600'
                  }`}
                >
                  {/* Toggle Grip Lines */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-0.5">
                    <div className="w-3 h-0.5 bg-gray-700" />
                    <div className="w-3 h-0.5 bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Light */}
          <div className={`absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
            isActive ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-gray-600'
          }`} />
        </div>
      </div>
    );
  }

  if (variant === 'lever') {
    return (
      <div 
        onClick={handleClick}
        className={`${baseClasses} ${className}`}
      >
        {/* Industrial Lever Switch */}
        <div className="relative inline-flex items-center">
          {/* Base Plate */}
          <div className="relative bg-gradient-to-b from-warm-brown to-deep-navy rounded-lg px-6 py-4 shadow-2xl border-4 border-brass-gold">
            {/* Lever Mechanism */}
            <div className="flex items-center space-x-6">
              <span className="text-creamy-ivory text-lg font-bold">{children}</span>
              
              {/* Lever Assembly */}
              <div className="relative">
                {/* Lever Base */}
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-lg">
                  {/* Lever Handle */}
                  <div 
                    className={`absolute top-1/2 left-1/2 w-16 h-3 bg-gradient-to-r from-brass-gold to-copper rounded-full shadow-lg transform -translate-y-1/2 origin-left transition-all duration-300 ${
                      isPressed ? 'rotate-12' : isActive ? 'rotate-45' : '-rotate-45'
                    }`}
                  >
                    {/* Handle Grip */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-warm-brown rounded-full shadow-md" />
                  </div>
                  
                  {/* Center Bolt */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full shadow-inner" />
                </div>
              </div>
            </div>
            
            {/* Steam Release Effect */}
            {isPressed && (
              <div className="absolute -top-4 right-4 flex space-x-1">
                <div className="w-2 h-2 bg-white/40 rounded-full animate-steam" />
                <div className="w-2 h-2 bg-white/40 rounded-full animate-steam animation-delay-100" />
                <div className="w-2 h-2 bg-white/40 rounded-full animate-steam animation-delay-200" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Valve variant
  return (
    <div 
      onClick={handleClick}
      className={`${baseClasses} ${className}`}
    >
      {/* Industrial Valve Button */}
      <div className="relative inline-flex items-center">
        {/* Valve Housing */}
        <div className="relative bg-gradient-to-b from-copper to-warm-brown rounded-xl px-6 py-4 shadow-2xl border-2 border-brass-gold">
          <div className="flex items-center space-x-4">
            <span className="text-creamy-ivory text-lg font-bold">{children}</span>
            
            {/* Valve Wheel */}
            <div className="relative">
              <Settings 
                className={`w-10 h-10 text-brass-gold transition-all duration-500 ${
                  isActive ? 'animate-gear-spin' : ''
                }`}
              />
              
              {/* Pressure Gauge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-deep-navy rounded-full border-2 border-brass-gold flex items-center justify-center">
                <div 
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-red-500' : 'bg-green-500'
                  }`}
                />
              </div>
            </div>
          </div>
          
          {/* Pipe Connectors */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-l-full shadow-inner" />
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-r-full shadow-inner" />
        </div>
      </div>
    </div>
  );
};

export default MechanicalSwitchButton;