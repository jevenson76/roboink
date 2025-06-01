import React, { useEffect, useRef } from 'react';

interface EnhancedGearDividerProps {
  className?: string;
  bgColor?: string;
}

const EnhancedGearDivider: React.FC<EnhancedGearDividerProps> = ({ 
  className = '', 
  bgColor = '#F8F5F0' 
}) => {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);

  return (
    <div className={`gear-divider-container ${className}`}>
      <div ref={dividerRef} className="gear-divider" style={{ '--bg-color': bgColor } as React.CSSProperties}>
        {/* Multiple gears with different sizes and positions */}
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="css-gear">
            <div className="css-gear-inner" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedGearDivider;