import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface SelectedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Web Application', label: 'Web Applications' },
    { id: 'Security & Auth', label: 'Security & RBAC' },
    { id: 'FinTech & Analytics', label: 'FinTech & Dashboards' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              <span>Selected Works</span>
              <span aria-hidden="true">·</span>
              <span>2023 — 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white [text-wrap:balance]">
              Production Engineering & Case Studies
            </h2>
          </div>

          {/* Functional Segmented Filter Tabs (Allowed button controls) */}
          <div className="flex items-center gap-1 p-1.5 bg-[#121520] border border-white/[0.08] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout (Bento Showcase: Project 1 featured wide, Project 2 and Project 3 in high-fashion split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {filteredProjects.map((project, index) => {
            // First item gets featured wide span if in "all" view
            const isWide = activeCategory === 'all' && index === 0;

            return (
              <div
                key={project.id}
                className={`${
                  isWide ? 'lg:col-span-12' : 'lg:col-span-6'
                } group rounded-3xl glass-panel overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/[0.18] hover:shadow-2xl hover:shadow-indigo-950/40`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F17] via-transparent to-transparent opacity-80" />

                  {/* Top-right quick launch badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/[0.1] opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to View Case Study
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="p-2 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/[0.15] hover:bg-indigo-600 transition-colors"
                      title="Open Case Study"
                      aria-label={`Open Case Study for ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom unboxed subtitle & category indicator */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{project.shortTitle}</span>
                      <span aria-hidden="true" className="text-slate-400">·</span>
                      <span className="text-indigo-300">{project.subtitle}</span>
                    </div>
                    <span className="hidden sm:inline text-slate-400">{project.category}</span>
                  </div>
                </div>

                {/* Project Details Footer */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
                  <div>
                    {/* Unboxed Metadata Discipline */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono mb-3">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.tools.slice(0, 4).join(', ')}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400">Live Production</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed [text-wrap:pretty] line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer group/link"
                    >
                      <span>Read Deep-Dive Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg transition-colors"
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
