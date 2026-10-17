import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ExperienceTimeline: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="careers" className={`py-24 relative border-t transition-colors ${
      isDark ? 'bg-[#090B12] border-white/[0.06]' : 'bg-[#F2F3FF] border-slate-200'
    }`}>
      {/* Anchor alias for #experience */}
      <div id="experience" className="absolute -top-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2 font-semibold ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            <span>Career Progression</span>
            <span aria-hidden="true">·</span>
            <span>Careers & Trajectory</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight [text-wrap:balance] ${
            isDark ? 'text-white' : 'text-[#131B2E]'
          }`}>
            Experience & Milestone History
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experienceTimeline.map((item, index) => (
            <div
              key={item.period}
              className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-all duration-300 border ${
                isDark ? 'glass-panel-dark hover:border-white/[0.16]' : 'glass-panel-light hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className={`flex items-center gap-2 text-xs font-mono mb-1 font-semibold ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-display font-bold ${
                    isDark ? 'text-white' : 'text-[#131B2E]'
                  }`}>
                    {item.role}
                  </h3>
                  <div className={`text-xs font-mono mt-0.5 font-medium ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.company}
                  </div>
                </div>

                <div className={`self-start px-3 py-1 rounded-lg border text-xs font-mono font-medium ${
                  isDark ? 'bg-white/[0.04] border-white/[0.08] text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  {index === 0 ? 'Current Engagement' : 'Completed Milestone'}
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-6 max-w-3xl ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {item.summary}
              </p>

              {/* Highlights */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 border-t ${
                isDark ? 'border-white/[0.06]' : 'border-slate-200'
              }`}>
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className={`flex items-start gap-2.5 text-xs ${
                    isDark ? 'text-slate-400' : 'text-slate-700 font-medium'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
