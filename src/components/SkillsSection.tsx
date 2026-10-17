import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { Code, Palette, Server, GitBranch, Sparkles, ChevronDown, Check, Filter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [filterDropdownOpen, setFilterDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'Frontend Engineering', label: 'Frontend & React/Angular' },
    { id: 'UI/UX & Modern CSS', label: 'UI/UX & CSS Architecture' },
    { id: 'Backend & Full-Stack Expansion', label: 'Backend Expansion' },
    { id: 'Workflow & Ecosystem', label: 'Toolchain & Git' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFilterDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentCategoryLabel = categories.find(c => c.id === selectedFilter)?.label || 'All Disciplines';

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

          <div className="flex items-center gap-3">
            {/* Responsive Category Dropdown (mobile/tablet) */}
            <div className="relative md:hidden w-full sm:w-auto" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setFilterDropdownOpen(prev => !prev)}
                className={`w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                  isDark
                    ? 'bg-[#121520] border-white/[0.12] text-slate-200 hover:text-white'
                    : 'bg-white border-slate-300 text-slate-800 shadow-xs hover:border-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="truncate">{currentCategoryLabel}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  filterDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {filterDropdownOpen && (
                <div className={`absolute left-0 right-0 sm:right-auto sm:w-64 mt-2 p-1.5 rounded-xl border shadow-xl z-30 backdrop-blur-xl ${
                  isDark
                    ? 'bg-[#0E121B]/95 border-white/[0.14] shadow-black/60'
                    : 'bg-white/95 border-slate-200 shadow-slate-900/15'
                }`}>
                  <div className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-bold ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Discipline
                  </div>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedFilter(cat.id);
                        setFilterDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        selectedFilter === cat.id
                          ? 'bg-indigo-600 text-white font-semibold'
                          : isDark
                            ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                            : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                      }`}
                    >
                      <span>{cat.label}</span>
                      {selectedFilter === cat.id && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Filter Controls (Desktop view) */}
            <div className={`hidden md:flex items-center gap-1 p-1.5 border rounded-xl overflow-x-auto ${
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
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-indigo-500' : 'bg-indigo-600'}`}></span>
                        <span className={`text-sm font-medium ${isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-black'}`}>
                          {skill.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                          {skill.level}
                        </span>
                        {skill.featured && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Core
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
