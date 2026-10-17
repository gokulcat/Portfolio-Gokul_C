import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface SelectedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', label: 'All Engineered Systems' },
    { id: 'Web Application', label: 'Modern Web Apps' },
    { id: 'Security & Auth', label: 'Security & RBAC' },
    { id: 'FinTech & Analytics', label: 'FinTech & Metrics' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className={`py-24 relative transition-colors ${
      isDark ? 'bg-[#090B12]' : 'bg-[#FAF8FF]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2 font-semibold ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio Works</span>
              <span aria-hidden="true">·</span>
              <span>Architecture & UI/UX</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              Production Engineering & Case Studies
            </h2>
          </div>

          {/* Functional Segmented Filter Tabs */}
          <div className={`flex items-center gap-1 p-1.5 border rounded-xl self-start md:self-auto overflow-x-auto max-w-full ${
            isDark 
              ? 'bg-[#121520] border-white/[0.08]' 
              : 'bg-slate-200/80 border-slate-300 shadow-xs'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md font-semibold'
                    : isDark 
                      ? 'text-slate-400 hover:text-white hover:bg-white/[0.04]' 
                      : 'text-slate-700 hover:text-[#131B2E] hover:bg-white/90'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {filteredProjects.map((project, index) => {
            const isWide = activeCategory === 'all' && index === 0;

            return (
              <div
                key={project.id}
                className={`${
                  isWide ? 'lg:col-span-12' : 'lg:col-span-6'
                } group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isDark 
                    ? 'glass-panel-interactive-dark hover:border-white/[0.2] hover:shadow-2xl hover:shadow-indigo-950/40' 
                    : 'glass-panel-interactive-light hover:border-slate-300 hover:shadow-xl hover:shadow-indigo-900/10'
                }`}
              >
                {/* Project Media Container */}
                <div 
                  className={`relative overflow-hidden cursor-pointer bg-slate-900 ${
                    isWide ? 'aspect-16/8 sm:aspect-21/9' : 'aspect-16/10'
                  }`}
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-[1.03] group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-slate-900', 'to-indigo-950');
                        const fb = document.createElement('div');
                        fb.className = 'text-center p-6 text-white';
                        fb.innerHTML = `
                          <div class="font-display font-bold text-lg mb-1">${project.title}</div>
                          <div class="text-xs text-indigo-300 font-mono">View Case Study</div>
                        `;
                        parent.appendChild(fb);
                      }
                    }}
                  />

                  {/* Gradient contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F17]/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-right quick launch badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-mono text-slate-200 border border-white/[0.1] opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to View Case Study
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="p-2 rounded-xl bg-black/75 backdrop-blur-md text-white border border-white/[0.2] hover:bg-indigo-600 transition-colors cursor-pointer"
                      title="Open Case Study"
                      aria-label={`Open Case Study for ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom unboxed subtitle & category indicator */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{project.shortTitle}</span>
                      <span aria-hidden="true" className="text-slate-400">·</span>
                      <span className="text-indigo-300">{project.subtitle}</span>
                    </div>
                    <span className="hidden sm:inline text-slate-300 font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Project Details Footer */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
                  <div>
                    {/* Unboxed Metadata Discipline */}
                    <div className={`flex flex-wrap items-center gap-2 text-xs font-mono mb-3 ${
                      isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
                    }`}>
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.tools.slice(0, 4).join(', ')}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Live Production</span>
                    </div>

                    <h3 className={`text-2xl font-display font-bold mb-3 transition-colors ${
                      isDark 
                        ? 'text-white group-hover:text-indigo-300' 
                        : 'text-[#131B2E] group-hover:text-indigo-600'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm leading-relaxed [text-wrap:pretty] line-clamp-3 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {project.overview}
                    </p>
                  </div>

                  {/* Actions & Links */}
                  <div className={`pt-5 border-t flex flex-wrap items-center justify-between gap-4 ${
                    isDark ? 'border-white/[0.08]' : 'border-slate-200'
                  }`}>
                    <button
                      onClick={() => onSelectProject(project)}
                      className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors cursor-pointer group/link ${
                        isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'
                      }`}
                    >
                      <span>Read Deep-Dive Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                          isDark 
                            ? 'text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]' 
                            : 'text-slate-800 hover:text-[#131B2E] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs'
                        }`}
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-md shadow-indigo-600/20"
                        title="Open Live Deployment"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
