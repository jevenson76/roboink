import React from 'react';

interface LoadingGearProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  variant?: 'simple' | 'triple';
}

const LoadingGear: React.FC<LoadingGearProps> = ({ 
  size = 'md', 
  text = 'Loading...',
  variant = 'simple'
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'md':
        return 'w-12 h-12';
      case 'lg':
        return 'w-16 h-16';
    }
  };

  if (variant === 'triple') {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="loading-steampunk">
          <span className="gear"></span>
          <span className="gear"></span>
          <span className="gear"></span>
        </div>
        {text && (
          <p className="text-brass font-body text-lg animate-pulse">{text}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`loading-gear ${getSizeClasses()}`} />
      {text && (
        <p className="text-brass font-body text-lg animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingGear;