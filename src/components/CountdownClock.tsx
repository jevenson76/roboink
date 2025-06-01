import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownClockProps {
  endDate?: Date;
  className?: string;
}

const CountdownClock: React.FC<CountdownClockProps> = ({ 
  endDate, 
  className = "" 
}) => {
  // Calculate next Sunday at midnight
  const getNextSundayMidnight = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
    
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(23, 59, 59, 999);
    
    return nextSunday;
  };

  const targetDate = endDate || getNextSundayMidnight();
  
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      {/* Countdown Display */}
      <div className="flex items-center gap-4">
        {/* Days */}
        <div className="text-center">
          <div className="bg-navy/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
            <div className="text-3xl font-bold text-parchment font-mono">
              {formatNumber(timeLeft.days)}
            </div>
          </div>
          <div className="text-xs text-parchment/70 mt-1 uppercase tracking-wider">Days</div>
        </div>
        
        <div className="text-2xl text-parchment/50">:</div>
        
        {/* Hours */}
        <div className="text-center">
          <div className="bg-navy/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
            <div className="text-3xl font-bold text-parchment font-mono">
              {formatNumber(timeLeft.hours)}
            </div>
          </div>
          <div className="text-xs text-parchment/70 mt-1 uppercase tracking-wider">Hours</div>
        </div>
        
        <div className="text-2xl text-parchment/50">:</div>
        
        {/* Minutes */}
        <div className="text-center">
          <div className="bg-navy/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
            <div className="text-3xl font-bold text-parchment font-mono">
              {formatNumber(timeLeft.minutes)}
            </div>
          </div>
          <div className="text-xs text-parchment/70 mt-1 uppercase tracking-wider">Mins</div>
        </div>
        
        <div className="text-2xl text-parchment/50">:</div>
        
        {/* Seconds */}
        <div className="text-center">
          <div className="bg-navy/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
            <div className="text-3xl font-bold text-parchment font-mono">
              {formatNumber(timeLeft.seconds)}
            </div>
          </div>
          <div className="text-xs text-parchment/70 mt-1 uppercase tracking-wider">Secs</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownClock;