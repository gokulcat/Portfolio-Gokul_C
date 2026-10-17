import React, { useState, useEffect } from 'react';
import { X, Printer, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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
3. WealthWise FinTech: https://wealth-path.vercel.app/
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0C0F17] border border-white/[0.14] rounded-3xl shadow-2xl z-10 flex flex-col text-slate-300">
        
        {/* Header Controls */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0C0F17]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Curriculum Vitae · Gokul C
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs text-slate-300 hover:text-white transition-colors border border-white/[0.08] cursor-pointer"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white transition-colors shadow-sm cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors ml-2 cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 space-y-8 text-slate-300 print:text-black print:bg-white">
          
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6">
            <h1 className="text-3xl font-display font-extrabold text-white tracking-tight">Gokul C</h1>
            <p className="text-indigo-400 font-medium text-sm mt-1">Frontend Developer (React & Angular Specialist) · 4.5+ Years Exp</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-4">
              <span>{PORTFOLIO_DATA.profile.email}</span>
              <span aria-hidden="true">·</span>
              <span>Hyderabad, India · Open to Remote</span>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-300">LinkedIn</a>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-indigo-300">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/[0.06] pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PORTFOLIO_DATA.profile.heroBio}
            </p>
          </div>

          {/* Core Technical Toolkit */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/[0.06] pb-1">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-white block mb-1">Frontend Core & Frameworks:</strong>
                <p className="text-slate-400">ReactJS, Angular, TypeScript, JavaScript (ES6+), RxJS, NgRx, Redux, HTML5, Semantic DOM, REST APIs</p>
              </div>
              <div>
                <strong className="text-white block mb-1">UI/UX & Modern Styling:</strong>
                <p className="text-slate-400">CSS3, Tailwind CSS, SASS/SCSS, Figma Design Systems, Angular Material, Material UI, Bootstrap</p>
              </div>
              <div>
                <strong className="text-white block mb-1">Backend & APIs:</strong>
                <p className="text-slate-400">NodeJS, ExpressJS, MongoDB, RESTful Route Handlers</p>
              </div>
              <div>
                <strong className="text-white block mb-1">Workflow & Ecosystem:</strong>
                <p className="text-slate-400">GIT, GitHub, Vite, Angular CLI, Webpack, Responsive Testing, Performance Optimization</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/[0.06] pb-1">
              Featured Production Projects
            </h2>

            {PORTFOLIO_DATA.projects.map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline flex items-center gap-1">
                      Live <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={proj.codeUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1">
                      Code <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{proj.overview}</p>
                <div className="text-[11px] font-mono text-slate-400">
                  Tools: {proj.tools.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          {/* Experience History */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/[0.06] pb-1">
              Work Experience (4.5+ Years)
            </h2>
            {PORTFOLIO_DATA.experienceTimeline.map((item) => (
              <div key={item.period} className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm">{item.role}</span>
                  <span className="font-mono text-slate-400">{item.period}</span>
                </div>
                <div className="text-indigo-300 font-mono text-[11px]">{item.company}</div>
                <p className="text-slate-300 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
