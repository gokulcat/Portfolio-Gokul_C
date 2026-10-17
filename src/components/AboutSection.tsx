import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, ArrowRight, Compass, ShieldCheck, Zap, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const { isDark } = useTheme();

  const pillars = [
    {
      icon: <Laptop className="w-5 h-5 text-indigo-500" />,
      title: "Design-to-Code Fidelity",
      desc: "Transforming high-fidelity Figma mockups into reactive, accessible DOM structures with React and Angular with zero design compromise."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Performance & Reactive State",
      desc: "Optimizing component re-renders, reactive RxJS streams, and bundle footprints to deliver snappy sub-100ms interactions."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Defensive Code Quality",
      desc: "Writing maintainable, modular, and self-documenting code with comprehensive TypeScript contracts and clean architectural boundaries."
    },
    {
      icon: <Compass className="w-5 h-5 text-pink-500" />,
      title: "Full-Stack Expansion",
      desc: "Actively engineering full-stack capabilities with Node.js, Express, and MongoDB to deliver complete client-server flows."
    }
  ];

  return (
    <section id="about" className={`py-24 relative transition-colors ${
      isDark ? 'bg-[#08090E]' : 'bg-[#FAF8FF]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2 font-semibold ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            <span>Philosophy & Background</span>
            <span aria-hidden="true">·</span>
            <span>About Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight [text-wrap:balance] ${
            isDark ? 'text-white' : 'text-[#131B2E]'
          }`}>
            Engineering Experiences with Purpose & Precision
          </h2>
        </div>

        {/* 2-Column Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-7 space-y-6 leading-relaxed text-base sm:text-lg">
            <p className={`font-semibold text-lg sm:text-xl leading-relaxed ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              {PORTFOLIO_DATA.profile.aboutBio}
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Over the last 4.5+ years, I have collaborated across teams to bridge the gap between creative visual designs and resilient technical implementations across React.js and Angular ecosystems. My work centers on building component systems that scale effortlessly without sacrificing performance or accessibility.
            </p>

            <div className={`p-6 rounded-2xl border relative overflow-hidden ${
              isDark ? 'glass-panel-dark border-white/[0.08]' : 'glass-panel-light border-slate-200'
            }`}>
              <div className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                isDark ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                Guiding Mantra
              </div>
              <blockquote className={`font-serif italic text-lg sm:text-xl ${
                isDark ? 'text-white' : 'text-[#131B2E]'
              }`}>
                "{PORTFOLIO_DATA.profile.collaborationQuote}"
              </blockquote>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isDark 
                    ? 'text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]' 
                    : 'text-slate-800 hover:text-[#131B2E] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs'
                }`}
              >
                <span>Initiate Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Architectural Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`p-5 rounded-2xl flex items-start gap-4 transition-all border ${
                  isDark ? 'glass-panel-interactive-dark' : 'glass-panel-interactive-light'
                }`}
              >
                <div className={`p-2.5 rounded-xl border shrink-0 mt-0.5 ${
                  isDark ? 'bg-white/[0.04] border-white/[0.08]' : 'bg-slate-100 border-slate-200'
                }`}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className={`text-sm font-display font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-[#131B2E]'
                  }`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
