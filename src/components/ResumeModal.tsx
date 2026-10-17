import React, { useState, useEffect } from 'react';
import { X, Printer, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `Gokul C — Frontend Developer (React & Angular Specialist)
Experience: 4.5+ Years
Location: Hyderabad, India
Email: ${PORTFOLIO_DATA.profile.email}
GitHub: ${PORTFOLIO_DATA.profile.socials.github}
LinkedIn: ${PORTFOLIO_DATA.profile.socials.linkedin}

Summary:
${PORTFOLIO_DATA.profile.heroBio}

Core Skills:
ReactJS, Angular, JavaScript, TypeScript, RxJS, NgRx, Redux, HTML5, CSS3/SCSS, Tailwind CSS, Figma, NodeJS, ExpressJS, MongoDB, Git.

Key Projects:
1. Developer Portfolio: https://gokulportfolio28.netlify.app
2. VRV Security RBAC: https://vrv-security-assignment-axf7.vercel.app/
3. WealthWise FinTech: https://wealth-path.vercel.app/`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className={`relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl z-10 flex flex-col border transition-colors ${
        isDark 
          ? 'bg-[#0C0F17] border-white/[0.14] text-slate-300' 
          : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header Controls */}
        <div className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b ${
          isDark 
            ? 'bg-[#0C0F17]/95 border-white/[0.08]' 
            : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Curriculum Vitae · Gokul C
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border cursor-pointer ${
                isDark 
                  ? 'bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border-white/[0.08]' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs'
              }`}
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors shadow-sm cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-full transition-colors ml-2 cursor-pointer ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-white/[0.08]' : 'text-slate-600 hover:text-[#131B2E] hover:bg-slate-100'
              }`}
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 space-y-8 print:text-black print:bg-white">
          
          {/* Header */}
          <div className={`border-b pb-6 ${isDark ? 'border-white/[0.1]' : 'border-slate-200'}`}>
            <h1 className={`text-3xl font-display font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              Gokul C
            </h1>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-1">
              Frontend Developer (React & Angular Specialist) · 4.5+ Years Exp
            </p>
            
            <div className={`flex flex-wrap items-center gap-4 text-xs font-mono mt-4 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <span>{PORTFOLIO_DATA.profile.email}</span>
              <span aria-hidden="true">·</span>
              <span>Hyderabad, India · Open to Remote</span>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">LinkedIn</a>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.profile.socials.github} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className={`text-xs font-mono uppercase tracking-widest pb-1 border-b font-semibold ${
              isDark ? 'text-indigo-400 border-white/[0.06]' : 'text-indigo-600 border-slate-200'
            }`}>
              Professional Summary
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {PORTFOLIO_DATA.profile.heroBio}
            </p>
          </div>

          {/* Core Technical Toolkit */}
          <div className="space-y-3">
            <h2 className={`text-xs font-mono uppercase tracking-widest pb-1 border-b font-semibold ${
              isDark ? 'text-indigo-400 border-white/[0.06]' : 'text-indigo-600 border-slate-200'
            }`}>
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'}`}>
                <strong className={`block mb-1 font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>Frontend Core & Frameworks:</strong>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>ReactJS, Angular, TypeScript, JavaScript (ES6+), RxJS, NgRx, Redux, HTML5, Semantic DOM, REST APIs</p>
              </div>
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'}`}>
                <strong className={`block mb-1 font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>UI/UX & Modern Styling:</strong>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>CSS3, Tailwind CSS, SASS/SCSS, Figma Design Systems, Angular Material, Material UI, Bootstrap</p>
              </div>
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'}`}>
                <strong className={`block mb-1 font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>Backend & APIs:</strong>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>NodeJS, ExpressJS, MongoDB, RESTful Route Handlers</p>
              </div>
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'}`}>
                <strong className={`block mb-1 font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>Workflow & Ecosystem:</strong>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>GIT, GitHub, Vite, Angular CLI, Webpack, Responsive Testing, Performance Optimization</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className={`text-xs font-mono uppercase tracking-widest pb-1 border-b font-semibold ${
              isDark ? 'text-indigo-400 border-white/[0.06]' : 'text-indigo-600 border-slate-200'
            }`}>
              Featured Production Projects
            </h2>
            {PORTFOLIO_DATA.projects.map((proj) => (
              <div key={proj.id} className={`p-4 rounded-xl border space-y-2 ${
                isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>{proj.title}</h3>
                  <div className="flex items-center gap-3 text-xs font-mono font-medium">
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                      Live <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={proj.codeUrl} target="_blank" rel="noreferrer" className={`hover:underline flex items-center gap-1 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#131B2E]'}`}>
                      Code <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{proj.overview}</p>
                <div className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tools: {proj.tools.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          {/* Career Trajectory */}
          <div className="space-y-4">
            <h2 className={`text-xs font-mono uppercase tracking-widest pb-1 border-b font-semibold ${
              isDark ? 'text-indigo-400 border-white/[0.06]' : 'text-indigo-600 border-slate-200'
            }`}>
              Milestone Progression
            </h2>
            {PORTFOLIO_DATA.experienceTimeline.map((exp) => (
              <div key={exp.period} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                    {exp.role} <span className="text-xs font-normal text-indigo-600 dark:text-indigo-400">· {exp.company}</span>
                  </div>
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{exp.period}</span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{exp.summary}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
