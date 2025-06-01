import React from 'react';
import steampunkBackground from '../assets/steampunkgeardivider.png';

interface SteampunkLayoutProps {
  children: React.ReactNode;
}

const SteampunkLayout: React.FC<SteampunkLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative steampunk-texture">
      {/* Steampunk Background Image */}
      <div 
        className="steampunk-background"
        style={{ backgroundImage: `url(${steampunkBackground})` }}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SteampunkLayout;