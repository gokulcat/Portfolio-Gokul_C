import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Shield, DollarSign, Lock, Unlock } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<'Admin' | 'Manager' | 'Viewer'>('Manager');
  const [monthlyIncome, setMonthlyIncome] = useState<number>(4500);
  const [savingsRate, setSavingsRate] = useState<number>(30);

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0C0F17] border border-white/[0.12] rounded-3xl shadow-2xl z-10 flex flex-col text-[#E2E8F0]">
        
        {/* Sticky Header with Title & Close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0C0F17]/90 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {project.category} · Case Study
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Hero Media Showcase */}
          <div className="space-y-4">
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-900 border border-white/[0.08] shadow-inner group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F17] via-transparent to-transparent opacity-60 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white font-mono border border-white/[0.1]">
                  Role: {project.role}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-indigo-300 font-mono border border-white/[0.1]">
                  {project.timeline}
                </span>
              </div>
            </div>

            {/* Quick Links Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">{project.title}</h2>
                <p className="text-xs text-indigo-400 font-mono mt-0.5">{project.subtitle}</p>
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Project Overview</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              {project.extendedOverview}
            </p>
          </div>

          {/* Interactive Feature Simulation Demo */}
          {project.id === 'vrv-security-rbac' && (
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-semibold text-white">Interactive RBAC Capability Sandbox</span>
                </div>
                <span className="text-[11px] font-mono text-indigo-300">Live Client Simulation</span>
              </div>

              <p className="text-xs text-slate-400">
                Switch between security roles below to see how permissions react dynamically in the UI architecture:
              </p>

              {/* Role Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-black/40 rounded-xl border border-white/[0.06]">
                {(['Admin', 'Manager', 'Viewer'] as const).map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`py-2 text-xs font-medium rounded-lg transition-all ${
                      selectedRole === role
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {role} Role
                  </button>
                ))}
              </div>

              {/* Dynamic Permissions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { key: 'manageUsers', label: 'Create & Manage Team Users' },
                  { key: 'editRoles', label: 'Modify Security Privilege Matrices' },
                  { key: 'viewFinancials', label: 'Inspect Sensitive Financial Data' },
                  { key: 'deleteRecords', label: 'Hard-Delete Production Records' },
                  { key: 'securityAudit', label: 'Access Audit Logs & Incident Vault' },
                ].map((item) => {
                  const allowed = rolePermissions[selectedRole][item.key as keyof typeof rolePermissions['Admin']];
                  return (
                    <div
                      key={item.key}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                        allowed
                          ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                          : 'bg-rose-950/10 border-rose-500/20 text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-medium">{item.label}</span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono">
                        {allowed ? (
                          <>
                            <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Permitted</span>
                          </>
                        ) : (
                          <>
                            <Lock className="w-3.5 h-3.5 text-rose-400/80" />
                            <span className="text-rose-400/80">Restricted</span>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {project.id === 'wealthwise' && (
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-white">Interactive Budget Velocity Calculator</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-300">Live FinTech Engine</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Monthly Net Income</span>
                      <span className="font-mono font-bold text-white">${monthlyIncome.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={1500}
                      max={12000}
                      step={250}
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Target Savings Rate</span>
                      <span className="font-mono font-bold text-emerald-400">{savingsRate}%</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={60}
                      step={1}
                      value={savingsRate}
                      onChange={(e) => setSavingsRate(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-4 rounded-xl bg-black/40 border border-white/[0.08]">
                  <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-white/[0.06]">
                    <span>Monthly Savings</span>
                    <span className="text-emerald-400 font-mono font-bold text-base tabular-nums">+${calculatedSavings.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400 py-2 border-b border-white/[0.06]">
                    <span>Operating Expenses</span>
                    <span className="text-slate-300 font-mono font-bold text-base tabular-nums">${calculatedExpenses.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400 pt-2">
                    <span>1-Year Projected Wealth Growth</span>
                    <span className="text-indigo-300 font-mono font-bold text-base tabular-nums">${(calculatedSavings * 12).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tools Used Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Tools & Technologies Used</h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono">
              {project.tools.map((tool, idx) => (
                <span key={tool} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-200">
                    {tool}
                  </span>
                  {idx < project.tools.length - 1 && <span className="text-slate-400" aria-hidden="true">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Key Engineering Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyAchievements.map((achieve, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">{achieve}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Engineering Challenges & Solutions</h3>
              <div className="space-y-3">
                {project.challengesAndSolutions.map((cs, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="text-xs font-semibold text-rose-300/90 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                      <span>Challenge: {cs.challenge}</span>
                    </div>
                    <div className="text-xs text-slate-300 flex items-start gap-2 pl-3.5 border-l border-indigo-500/30">
                      <span><strong className="text-indigo-300 font-medium">Solution:</strong> {cs.solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
            <div className="flex items-center gap-3">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] rounded-lg transition-colors border border-white/[0.08]"
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
