import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const MarqueeStrip: React.FC = () => {
  const { isDark } = useTheme();
  const items = PORTFOLIO_DATA.marqueeItems;
  const seamlessList = [...items, ...items, ...items];

  return (
    <div className={`py-5 border-y overflow-hidden select-none relative transition-colors ${
      isDark ? 'bg-[#0B0D14] border-white/[0.07]' : 'bg-[#F2F3FF] border-slate-200'
    }`}>
      {/* Edge gradient masks */}
      <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r ${
        isDark ? 'from-[#08090E]' : 'from-[#FAF8FF]'
      } to-transparent`} />
      <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l ${
        isDark ? 'from-[#08090E]' : 'from-[#FAF8FF]'
      } to-transparent`} />

      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {seamlessList.map((item, index) => (
          <div key={index} className={`flex items-center gap-10 text-xs sm:text-sm font-mono tracking-widest font-semibold transition-colors ${
            isDark ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-600'
          }`}>
            <span className="uppercase">{item}</span>
            <span className="text-indigo-500 text-xs" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
