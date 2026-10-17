import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#090B12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
            <span>Career Progression</span>
            <span aria-hidden="true">·</span>
            <span>Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white [text-wrap:balance]">
            Experience & Milestone History
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experienceTimeline.map((item, index) => (
            <div
              key={item.period}
              className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden transition-all duration-300 hover:border-white/[0.16]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {item.role}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="self-start px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
                  {index === 0 ? 'Current Engagement' : 'Completed Milestone'}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
                {item.summary}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 border-t border-white/[0.06]">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
