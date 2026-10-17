import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { Code, Palette, Server, GitBranch, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'Frontend Engineering', label: 'Frontend & React/Angular' },
    { id: 'UI/UX & Modern CSS', label: 'UI/UX & CSS Architecture' },
    { id: 'Backend & Full-Stack Expansion', label: 'Backend Expansion' },
    { id: 'Workflow & Ecosystem', label: 'Toolchain & Git' },
  ];

  const filteredCategories = selectedFilter === 'all'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(cat => cat.title === selectedFilter);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend Engineering': return <Code className="w-5 h-5 text-indigo-500" />;
      case 'UI/UX & Modern CSS': return <Palette className="w-5 h-5 text-pink-500" />;
      case 'Backend & Full-Stack Expansion': return <Server className="w-5 h-5 text-emerald-500" />;
      default: return <GitBranch className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className={`py-24 relative border-t transition-colors ${
      isDark ? 'bg-[#090B12] border-white/[0.06]' : 'bg-[#F2F3FF] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2 font-semibold ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              <span>Technical Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>Stack & Tooling</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              Skills & Engineering Toolkit
            </h2>
          </div>

          {/* Category Filter Controls */}
          <div className={`flex items-center gap-1 p-1.5 border rounded-xl self-start md:self-auto overflow-x-auto max-w-full ${
            isDark 
              ? 'bg-[#121520] border-white/[0.08]' 
              : 'bg-slate-200/80 border-slate-300 shadow-xs'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedFilter === cat.id
                    ? 'bg-indigo-600 text-white shadow-md font-semibold'
                    : isDark 
                      ? 'text-slate-400 hover:text-white hover:bg-white/[0.04]' 
                      : 'text-slate-700 hover:text-[#131B2E] hover:bg-white/80'
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
              className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 border ${
                isDark ? 'glass-panel-dark hover:border-white/[0.16]' : 'glass-panel-light hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    isDark ? 'bg-white/[0.05] border-white/[0.08]' : 'bg-indigo-50 border-indigo-100'
                  }`}>
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-display font-bold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                      {category.title}
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Clean Unboxed Skill Rows with Subtle Separators */}
                <div className={`divide-y mt-6 ${isDark ? 'divide-white/[0.06]' : 'divide-slate-200'}`}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`py-3 flex items-center justify-between group px-2 rounded-lg transition-colors ${
                        isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium transition-colors ${
                          isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-[#131B2E]'
                        }`}>
                          {skill.name}
                        </span>
                        {skill.featured && (
                          <span className="text-[10px] font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                            ★ Primary
                          </span>
                        )}
                      </div>
                      <div className={`text-xs font-mono tabular-nums font-medium ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Architectural Note */}
              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono ${
                isDark ? 'border-white/[0.06] text-slate-400' : 'border-slate-200 text-slate-600'
              }`}>
                <span>{category.skills.length} Capabilities Verified</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Design-to-Code Workflow Callout Card */}
        <div className={`mt-12 p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark 
            ? 'glass-panel-interactive-dark border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-purple-950/20' 
            : 'glass-panel-interactive-light border-indigo-200 bg-white shadow-sm'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                isDark ? 'text-indigo-300' : 'text-indigo-700'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>Workflow & Collaboration Principle</span>
              </div>
              <h3 className={`text-xl font-display font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#131B2E]'
              }`}>
                "{PORTFOLIO_DATA.profile.collaborationQuote}"
              </h3>
              <p className={`text-xs leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
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
