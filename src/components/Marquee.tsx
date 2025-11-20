import React from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'slow';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, direction = 'left', className = '' }) => {
  return (
    <div className={`relative flex overflow-hidden py-6 bg-brand-dark text-white ${className}`}>
      <div className="animate-marquee whitespace-nowrap flex" style={{ animationDelay: '-0.5s' }}>
        {items.map((item, index) => (
          <span key={index} className="mx-8 text-xl font-display tracking-widest uppercase opacity-80">
            {item} •
          </span>
        ))}
        {items.map((item, index) => (
          <span key={`dup-${index}`} className="mx-8 text-xl font-display tracking-widest uppercase opacity-80">
            {item} •
          </span>
        ))}
        {items.map((item, index) => (
          <span key={`dup2-${index}`} className="mx-8 text-xl font-display tracking-widest uppercase opacity-80">
            {item} •
          </span>
        ))}
      </div>
      
      {/* Gradient Fades for smooth edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
    </div>
  );
};

export default Marquee;
