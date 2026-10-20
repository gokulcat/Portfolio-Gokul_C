import React, { useState, useEffect } from 'react';
import { 
  X, ExternalLink, Github, CheckCircle2, Shield, DollarSign, Lock, Unlock, 
  Terminal, Cpu, Layers, Sparkles, TrendingUp, Wallet, ArrowRight, Play, RefreshCw
} from 'lucide-react';
import { Project } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  // Existing state for RBAC and Wealthwise
  const [selectedRole, setSelectedRole] = useState<'Admin' | 'Manager' | 'Viewer'>('Manager');
  const [monthlyIncome, setMonthlyIncome] = useState<number>(4500);
  const [savingsRate, setSavingsRate] = useState<number>(30);

  // DevHub state
  const [activeRuntime, setActiveRuntime] = useState<'React 19' | 'Angular 18' | 'Express Gateway'>('React 19');
  const [activePorts, setActivePorts] = useState<{ [port: number]: boolean }>({
    3000: true,
    5432: true,
    6379: false,
  });
  const [terminalMessage, setTerminalMessage] = useState<string>('Ready. Listening on isolated environment ports.');

  // MintVault state
  const [mintCurrency, setMintCurrency] = useState<{ symbol: string; rate: number; label: string }>({
    symbol: '$',
    rate: 1,
    label: 'USD',
  });
  const [mintSalary, setMintSalary] = useState<number>(7500);
  const [vaultApy] = useState<number>(8.4);

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

  // Wealthwise calculations
  const calculatedSavings = Math.round((monthlyIncome * savingsRate) / 100);
  const calculatedExpenses = monthlyIncome - calculatedSavings;

  // MintVault calculations
  const mintNeeds = Math.round(mintSalary * 0.5);
  const mintWants = Math.round(mintSalary * 0.3);
  const mintVaultMonthly = Math.round(mintSalary * 0.2);
  const annualVaultContribution = mintVaultMonthly * 12;
  const projectedVault3Yr = Math.round(annualVaultContribution * 3 * (1 + (vaultApy / 100) * 1.5));

  const togglePort = (port: number) => {
    setActivePorts(prev => {
      const nextState = !prev[port];
      setTerminalMessage(`Daemon port ${port} ${nextState ? 'STARTED and bound to localhost' : 'STOPPED cleanly'}.`);
      return { ...prev, [port]: nextState };
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className={`relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border my-8 transition-colors ${
          isDark 
            ? 'bg-[#0B0E17] border-white/[0.12] shadow-black/80' 
            : 'bg-white border-slate-200 shadow-slate-900/20'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className={`p-6 sm:p-8 border-b flex items-center justify-between transition-colors ${
          isDark ? 'border-white/[0.08] bg-[#0E121F]/70' : 'border-slate-200 bg-slate-50/80'
        }`}>
          <div>
            <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-1 font-semibold ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Case Study &amp; Architecture</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-display font-bold [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              {project.title}
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className={`p-2.5 rounded-xl border transition-colors cursor-pointer shrink-0 ml-4 ${
              isDark 
                ? 'bg-white/[0.05] border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/[0.1]' 
                : 'bg-white border-slate-300 text-slate-700 hover:text-[#131B2E] hover:bg-slate-100 shadow-xs'
            }`}
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Hero Banner Image */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-md bg-slate-950 aspect-16/9 sm:aspect-21/9 relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-slate-900', 'to-indigo-950');
                  const fb = document.createElement('div');
                  fb.className = 'text-center p-6 text-white';
                  fb.innerHTML = `
                    <div class="font-display font-bold text-xl mb-1">${project.title}</div>
                    <div class="text-xs text-indigo-300 font-mono">Architecture Case Study</div>
                  `;
                  parent.appendChild(fb);
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
              <span className="bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10 font-medium">
                Role: {project.role}
              </span>
              <span className="bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10 font-medium">
                Status: {project.timeline}
              </span>
            </div>
          </div>

          {/* Quick Metrics & Links Ribbon */}
          <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
            isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
              <div>
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>ROLE: </span>
                <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{project.role}</span>
              </div>
              <div>
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>TIMELINE: </span>
                <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{project.timeline}</span>
              </div>
              <div>
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>SYSTEM STATUS: </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active in Production</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors border ${
                  isDark 
                    ? 'text-slate-300 hover:text-white bg-white/[0.05] border-white/[0.08]' 
                    : 'text-slate-700 hover:text-[#131B2E] bg-white border-slate-300 shadow-xs'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Overview */}
          <div className="space-y-3">
            <h3 className={`text-sm font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Project Overview &amp; Context
            </h3>
            <p className={`text-base leading-relaxed ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}>
              {project.overview}
            </p>
          </div>

          {/* Extended Architecture Section */}
          <div className="space-y-3">
            <h3 className={`text-sm font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Architecture &amp; Problem Formulation
            </h3>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {project.extendedOverview}
            </p>
          </div>

          {/* =========================================================================
              INTERACTIVE SIMULATION A: DevHub Environment Studio Sandbox (project.id === 'developers-app')
             ========================================================================= */}
          {project.id === 'developers-app' && (
            <div className={`p-5 rounded-2xl border space-y-4 ${
              isDark ? 'bg-indigo-950/20 border-indigo-500/30' : 'bg-indigo-50/60 border-indigo-200'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-500" />
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                    Interactive DevHub Environment Scaffolder &amp; Daemon Matrix
                  </span>
                </div>
                <span className={`text-[11px] font-mono font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                  Live Workspace Simulation
                </span>
              </div>

              {/* Runtime Switcher Tabs */}
              <div>
                <div className={`text-xs font-mono mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  1. Select Isolated Runtime Stack:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {(['React 19', 'Angular 18', 'Express Gateway'] as const).map((stack) => (
                    <button
                      key={stack}
                      onClick={() => {
                        setActiveRuntime(stack);
                        setTerminalMessage(`Switched environment scaffold to [${stack}]. Bundler synchronized.`);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                        activeRuntime === stack
                          ? 'bg-indigo-600 text-white shadow-md'
                          : isDark
                            ? 'bg-white/[0.05] text-slate-400 hover:text-white'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                      }`}
                    >
                      Stack: {stack}
                    </button>
                  ))}
                </div>
              </div>

              {/* Port & Daemon Controller */}
              <div>
                <div className={`text-xs font-mono mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  2. Containerized Daemons &amp; Local Ports:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { port: 3000, label: 'Vite Client HMR', defaultOn: true },
                    { port: 5432, label: 'PostgreSQL 16 DB', defaultOn: true },
                    { port: 6379, label: 'Redis Cache Daemon', defaultOn: false },
                  ].map((d) => {
                    const isRunning = activePorts[d.port];
                    return (
                      <button
                        key={d.port}
                        onClick={() => togglePort(d.port)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs font-mono transition-all cursor-pointer ${
                          isRunning
                            ? isDark
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                              : 'bg-emerald-50 border-emerald-300 text-emerald-800'
                            : isDark
                              ? 'bg-white/[0.02] border-white/[0.05] text-slate-500'
                              : 'bg-slate-100 border-slate-200 text-slate-500'
                        }`}
                      >
                        <div>
                          <div className="font-bold">:{d.port}</div>
                          <div className="text-[10px] opacity-80">{d.label}</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isRunning ? 'bg-emerald-500 text-black' : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {isRunning ? 'RUNNING' : 'STOPPED'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Terminal Daemon Output Bar */}
              <div className="p-3 rounded-xl bg-black/70 border border-white/[0.08] font-mono text-xs flex items-center gap-2">
                <span className="text-emerald-400">devhub@system:~$</span>
                <span className="text-slate-200 truncate">{terminalMessage}</span>
              </div>
            </div>
          )}

          {/* =========================================================================
              INTERACTIVE SIMULATION B: Wealthora / MintVault Salary Engine (project.id === 'mint-vault')
             ========================================================================= */}
          {project.id === 'mint-vault' && (
            <div className={`p-5 rounded-2xl border space-y-4 ${
              isDark ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-emerald-50/60 border-emerald-200'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-emerald-500" />
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                    Wealthora 50/30/20 Multi-Currency Salary Allocator &amp; Compounding Engine
                  </span>
                </div>
                <span className={`text-[11px] font-mono font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                  Live FinTech Simulation
                </span>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className={`text-xs font-mono ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Select Currency:
                </div>
                <div className="flex items-center gap-1.5">
                  {[
                    { symbol: '$', rate: 1, label: 'USD' },
                    { symbol: '€', rate: 0.92, label: 'EUR' },
                    { symbol: '£', rate: 0.79, label: 'GBP' },
                    { symbol: '₹', rate: 86.4, label: 'INR' },
                  ].map((curr) => (
                    <button
                      key={curr.label}
                      onClick={() => setMintCurrency(curr)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                        mintCurrency.label === curr.label
                          ? 'bg-emerald-600 text-white'
                          : isDark
                            ? 'bg-white/[0.05] text-slate-400 hover:text-white'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                      }`}
                    >
                      {curr.label} ({curr.symbol})
                    </button>
                  ))}
                </div>
              </div>

              {/* Salary Slider */}
              <div>
                <div className={`flex justify-between text-xs mb-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span className="font-mono">Monthly Paycheck Stream</span>
                  <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                    {mintCurrency.symbol}{Math.round(mintSalary * mintCurrency.rate).toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={2500}
                  max={20000}
                  step={250}
                  value={mintSalary}
                  onChange={(e) => setMintSalary(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-300 dark:bg-slate-700 rounded-lg"
                />
              </div>

              {/* 3 Calculated Buckets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className={`p-3.5 rounded-xl border ${
                  isDark ? 'bg-black/40 border-white/[0.08]' : 'bg-white border-slate-200'
                }`}>
                  <div className="text-[11px] font-mono text-blue-500 font-semibold mb-1">50% Essential Needs</div>
                  <div className={`text-lg font-mono font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {mintCurrency.symbol}{Math.round(mintNeeds * mintCurrency.rate).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Rent, Utilities, Food</div>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  isDark ? 'bg-black/40 border-white/[0.08]' : 'bg-white border-slate-200'
                }`}>
                  <div className="text-[11px] font-mono text-amber-500 font-semibold mb-1">30% Lifestyle &amp; Wants</div>
                  <div className={`text-lg font-mono font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {mintCurrency.symbol}{Math.round(mintWants * mintCurrency.rate).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Dining, Travel, Gear</div>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  isDark ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
                }`}>
                  <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-1">20% Mint Vault (8.4% APY)</div>
                  <div className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    +{mintCurrency.symbol}{Math.round(mintVaultMonthly * mintCurrency.rate).toLocaleString()}<span className="text-xs font-normal">/mo</span>
                  </div>
                  <div className="text-[10px] text-emerald-700 dark:text-emerald-300 mt-1 font-mono">
                    3-Yr Projected: {mintCurrency.symbol}{Math.round(projectedVault3Yr * mintCurrency.rate).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INTERACTIVE SIMULATION 1: Role-Based Access Control (RBAC) Role Matrix Sandbox */}
          {(project.id === 'rbac-application' || project.id === 'vrv-security-rbac') && (
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
          {(project.id === 'wealthwise' || project.id === 'wealth-management-app') && (
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
              Tools &amp; Technologies Used
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
                Engineering Challenges &amp; Solutions
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
