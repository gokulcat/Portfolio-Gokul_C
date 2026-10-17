import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Shield, DollarSign, Lock, Unlock } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<'Admin' | 'Manager' | 'Viewer'>('Manager');
  const [monthlyIncome, setMonthlyIncome] = useState<number>(4500);
  const [savingsRate, setSavingsRate] = useState<number>(30);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const rolePermissions = {
    Admin: {
      manageUsers: true,
      editRoles: true,
      viewFinancials: true,
      deleteRecords: true,
      securityAudit: true,
    },
    Manager: {
      manageUsers: true,
      editRoles: false,
      viewFinancials: true,
      deleteRecords: false,
      securityAudit: false,
    },
    Viewer: {
      manageUsers: false,
      editRoles: false,
      viewFinancials: false,
      deleteRecords: false,
      securityAudit: false,
    },
  };

  const calculatedSavings = Math.round((monthlyIncome * savingsRate) / 100);
  const calculatedExpenses = monthlyIncome - calculatedSavings;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl z-10 flex flex-col border transition-colors ${
        isDark 
          ? 'bg-[#0C0F17] border-white/[0.14] text-[#E2E8F0]' 
          : 'bg-white border-slate-200 text-[#131B2E]'
      }`}>
        
        {/* Sticky Header with Title & Close button */}
        <div className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b ${
          isDark 
            ? 'bg-[#0C0F17]/95 border-white/[0.08]' 
            : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <div className={`text-xs font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {project.category} · Case Study
            </div>
          </div>
          
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isDark 
                ? 'text-slate-400 hover:text-white hover:bg-white/[0.08]' 
                : 'text-slate-600 hover:text-[#131B2E] hover:bg-slate-100'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Hero Media Showcase */}
          <div className="space-y-4">
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/20 shadow-inner group">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-900');
                    const fb = document.createElement('div');
                    fb.className = 'text-center p-8';
                    fb.innerHTML = `
                      <div class="text-indigo-400 font-display font-bold text-xl mb-2">${project.title}</div>
                      <div class="text-xs text-slate-400">Project Screenshot Container</div>
                    `;
                    parent.appendChild(fb);
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white font-mono border border-white/[0.15]">
                  Role: {project.role}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-indigo-300 font-mono border border-white/[0.15]">
                  {project.timeline}
                </span>
              </div>
            </div>

            {/* Quick Links Banner */}
            <div className={`flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border ${
              isDark ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <h2 className={`text-xl sm:text-2xl font-display font-bold ${
                  isDark ? 'text-white' : 'text-[#131B2E]'
                }`}>
                  {project.title}
                </h2>
                <p className={`text-xs font-mono mt-0.5 font-medium ${
                  isDark ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  {project.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-lg shadow-indigo-600/20"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg transition-colors border ${
                    isDark 
                      ? 'text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border-white/[0.1]' 
                      : 'text-slate-800 hover:text-[#131B2E] bg-white hover:bg-slate-100 border-slate-300 shadow-xs'
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Narrative Overview */}
          <div className="space-y-4">
            <h3 className={`text-sm font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              Architecture & Problem Formulation
            </h3>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {project.extendedOverview}
            </p>
          </div>

          {/* INTERACTIVE SIMULATION 1: VRV Security RBAC Role Matrix Sandbox */}
          {project.id === 'vrv-security-rbac' && (
            <div className={`p-5 rounded-2xl border space-y-4 ${
              isDark ? 'bg-indigo-950/20 border-indigo-500/30' : 'bg-indigo-50/60 border-indigo-200'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-indigo-500" />
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                    Interactive RBAC Permission Sandbox
                  </span>
                </div>
                <span className={`text-[11px] font-mono font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                  Live Client-Authoritative Engine
                </span>
              </div>

              {/* Role Selector Tabs */}
              <div className="flex items-center gap-2">
                {(['Admin', 'Manager', 'Viewer'] as const).map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                      selectedRole === role
                        ? 'bg-indigo-600 text-white shadow-md'
                        : isDark
                          ? 'bg-white/[0.05] text-slate-400 hover:text-white'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                  >
                    Role: {role}
                  </button>
                ))}
              </div>

              {/* Dynamic Permissions Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                {Object.entries(rolePermissions[selectedRole]).map(([key, allowed]) => (
                  <div
                    key={key}
                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
                      allowed
                        ? isDark ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : isDark ? 'bg-white/[0.02] border-white/[0.05] text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-500'
                    }`}
                  >
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    {allowed ? (
                      <Unlock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INTERACTIVE SIMULATION 2: WealthWise Budget Velocity Engine */}
          {project.id === 'wealth-management-app' && (
            <div className={`p-5 rounded-2xl border space-y-4 ${
              isDark ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-emerald-50/60 border-emerald-200'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                    Interactive Budget Velocity Calculator
                  </span>
                </div>
                <span className={`text-[11px] font-mono font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                  Live FinTech Engine
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className={`flex justify-between text-xs mb-1 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <span>Monthly Net Income</span>
                      <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                        ${monthlyIncome.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1500}
                      max={12000}
                      step={250}
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg"
                    />
                  </div>

                  <div>
                    <div className={`flex justify-between text-xs mb-1 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <span>Target Savings Rate</span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {savingsRate}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={60}
                      step={1}
                      value={savingsRate}
                      onChange={(e) => setSavingsRate(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg"
                    />
                  </div>
                </div>

                <div className={`flex flex-col justify-between p-4 rounded-xl border ${
                  isDark ? 'bg-black/40 border-white/[0.08]' : 'bg-white border-slate-200 shadow-xs'
                }`}>
                  <div className={`flex justify-between items-center text-xs pb-2 border-b ${
                    isDark ? 'text-slate-400 border-white/[0.06]' : 'text-slate-600 border-slate-200'
                  }`}>
                    <span>Monthly Savings</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-base tabular-nums">
                      +${calculatedSavings.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className={`flex justify-between items-center text-xs py-2 border-b ${
                    isDark ? 'text-slate-400 border-white/[0.06]' : 'text-slate-600 border-slate-200'
                  }`}>
                    <span>Operating Expenses</span>
                    <span className={`font-mono font-bold text-base tabular-nums ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                      ${calculatedExpenses.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className={`flex justify-between items-center text-xs pt-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <span>1-Year Projected Wealth Growth</span>
                    <span className="text-indigo-600 dark:text-indigo-300 font-mono font-bold text-base tabular-nums">
                      ${(calculatedSavings * 12).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tools Used Section */}
          <div className="space-y-3">
            <h3 className={`text-sm font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Tools & Technologies Used
            </h3>
            <div className={`flex flex-wrap items-center gap-2 text-xs font-mono ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {project.tools.map((tool, idx) => (
                <span key={tool} className="flex items-center gap-2">
                  <span className={`px-3 py-1.5 rounded-lg border font-medium ${
                    isDark ? 'bg-white/[0.05] border-white/[0.08] text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}>
                    {tool}
                  </span>
                  {idx < project.tools.length - 1 && <span className="text-slate-400" aria-hidden="true">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-3">
            <h3 className={`text-sm font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Key Engineering Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyAchievements.map((achieve, i) => (
                <div key={i} className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                  isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {achieve}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions.length > 0 && (
            <div className="space-y-3">
              <h3 className={`text-sm font-mono uppercase tracking-wider font-semibold ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Engineering Challenges & Solutions
              </h3>
              <div className="space-y-3">
                {project.challengesAndSolutions.map((cs, i) => (
                  <div key={i} className={`p-4 rounded-xl border space-y-2 ${
                    isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span>Challenge: {cs.challenge}</span>
                    </div>
                    <div className="text-xs flex items-start gap-2 pl-3.5 border-l border-indigo-500/40">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                        <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Solution:</strong> {cs.solution}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className={`pt-6 border-t flex items-center justify-between ${
            isDark ? 'border-white/[0.08]' : 'border-slate-200'
          }`}>
            <button
              onClick={onClose}
              className={`px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#131B2E]'
              }`}
            >
              Close Window
            </button>
            <div className="flex items-center gap-3">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors border ${
                  isDark 
                    ? 'text-slate-300 hover:text-white bg-white/[0.05] border-white/[0.08]' 
                    : 'text-slate-800 hover:text-[#131B2E] bg-white border-slate-300 shadow-xs'
                }`}
              >
                Inspect Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-lg shadow-indigo-600/20"
              >
                Visit Production Site
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
