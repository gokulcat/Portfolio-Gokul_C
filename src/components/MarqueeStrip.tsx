import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const MarqueeStrip: React.FC = () => {
  const items = PORTFOLIO_DATA.marqueeItems;
  // Duplicate array to create a seamless infinite loop
  const seamlessList = [...items, ...items, ...items];

  return (
    <div className="py-5 bg-[#0B0D14] border-y border-white/[0.07] overflow-hidden select-none relative">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08090E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08090E] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {seamlessList.map((item, index) => (
          <div key={index} className="flex items-center gap-10 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-medium">
            <span className="hover:text-indigo-400 transition-colors uppercase">{item}</span>
            <span className="text-indigo-500/60 text-xs" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
