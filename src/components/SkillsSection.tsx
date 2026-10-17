import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { Code, Palette, Server, GitBranch, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'Frontend Engineering', label: 'Frontend & React' },
    { id: 'UI/UX & Modern CSS', label: 'UI/UX & CSS Architecture' },
    { id: 'Backend & Full-Stack Expansion', label: 'Backend Expansion' },
    { id: 'Workflow & Ecosystem', label: 'Toolchain & Git' },
  ];

  const filteredCategories = selectedFilter === 'all'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(cat => cat.title === selectedFilter);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend Engineering': return <Code className="w-5 h-5 text-indigo-400" />;
      case 'UI/UX & Modern CSS': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Backend & Full-Stack Expansion': return <Server className="w-5 h-5 text-emerald-400" />;
      default: return <GitBranch className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#090B12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              <span>Technical Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>Stack & Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white [text-wrap:balance]">
              Skills & Engineering Toolkit
            </h2>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1 p-1.5 bg-[#121520] border border-white/[0.08] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedFilter === cat.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category: SkillCategory) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-3xl glass-panel flex flex-col justify-between transition-all duration-300 hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>

                {/* Clean Unboxed Skill Rows with Subtle Separators (No static pill enclosures) */}
                <div className="divide-y divide-white/[0.06] mt-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-3 flex items-center justify-between group hover:bg-white/[0.02] px-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        {skill.featured && (
                          <span className="text-[10px] font-mono text-indigo-400">
                            ★ Primary
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-mono text-slate-400 tabular-nums">
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Architectural Note */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{category.skills.length} Capabilities Verified</span>
                <span className="text-indigo-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Design-to-Code Workflow Callout Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-panel-interactive border border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-purple-950/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Workflow & Collaboration Principle</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                "{PORTFOLIO_DATA.profile.collaborationQuote}"
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whether creating custom component systems from Figma tokens, or coordinating with backend engineers for type-safe API contracts, I ensure precision at every layer.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25 whitespace-nowrap"
              >
                Discuss a Project
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
