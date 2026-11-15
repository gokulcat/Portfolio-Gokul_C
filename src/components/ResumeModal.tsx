import React, { useState, useEffect } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Download, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_PDF_URL = '/assets/aistudio/Gokul_Cathavarayane_24016753.pdf';

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
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

  const handleDownloadResume = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadError(null);

    try {
      const response = await fetch(RESUME_PDF_URL, {
        credentials: 'same-origin',
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        throw new Error('Unexpected HTML response instead of PDF');
      }

      const arrayBuffer = await response.arrayBuffer();
      const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Gokul_Cathavarayane_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2500);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);
    } catch (err) {
      console.error('Resume PDF download failed:', err);
      setDownloadError('Direct download was blocked by the browser preview. Please use Print / PDF or open in a new tab.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopySummary = () => {
    const text = `Gokul C — Frontend Engineer (React & Angular Specialist)
Experience: 4.5+ Years
Location: Puducherry, PY
Email: ${PORTFOLIO_DATA.profile.email}
GitHub: ${PORTFOLIO_DATA.profile.socials.github}
LinkedIn: ${PORTFOLIO_DATA.profile.socials.linkedin}

Summary:
${PORTFOLIO_DATA.profile.heroBio}

Core Skills:
React, Angular, JavaScript, TypeScript, RxJS, NgRx, Redux, HTML5, CSS3/SCSS, Tailwind CSS, Figma, NodeJS, ExpressJS, MongoDB, Git.

Key Projects:
1. Developer Portfolio: https://gokulportfolio28.netlify.app
2. Role-Based Access Control (RBAC): https://rbac-application.vercel.app
3. WealthWise FinTech: https://wealth-path.vercel.app/`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto scrollbar-hidden bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className={`relative w-full max-w-3xl max-h-[92vh] overflow-y-auto scrollbar-hidden rounded-3xl shadow-2xl z-10 flex flex-col border transition-colors ${
        isDark 
          ? 'bg-[#0C0F17] border-white/[0.14] text-slate-300' 
          : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header Controls */}
        <div className={`sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 backdrop-blur-md border-b ${
          isDark 
            ? 'bg-[#0C0F17]/95 border-white/[0.08]' 
            : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Curriculum Vitae · Gokul C
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 ml-auto">
            <button
              onClick={handleCopySummary}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border cursor-pointer whitespace-nowrap ${
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
              type="button"
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-70 text-xs font-semibold text-white transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              title="Download Professional Resume PDF"
            >
              {isDownloading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : downloaded ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {isDownloading ? 'Downloading...' : downloaded ? 'Downloaded' : 'Professional Resume'}
              </span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-full transition-colors ml-1 cursor-pointer ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-white/[0.08]' : 'text-slate-600 hover:text-[#131B2E] hover:bg-slate-100'
              }`}
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {downloadError && (
          <div className={`px-4 sm:px-6 py-2.5 text-xs flex flex-wrap items-center justify-between gap-2 border-b ${
            isDark
              ? 'bg-rose-500/10 border-rose-500/20 text-rose-300'
              : 'bg-rose-50 border-rose-200 text-rose-700'
          }`}>
            <span>{downloadError}</span>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="underline font-semibold whitespace-nowrap"
            >
              Open PDF directly
            </a>
          </div>
        )}

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 space-y-8 print:text-black print:bg-white">
          
          {/* Header */}
          <div className={`border-b pb-6 ${isDark ? 'border-white/[0.1]' : 'border-slate-200'}`}>
            <h1 className={`text-3xl font-display font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              Gokul C
            </h1>
            <p className="text-sky-600 dark:text-sky-400 font-semibold text-sm mt-1">
              Frontend Engineer (React & Angular Specialist) · 4.5+ Years Exp
            </p>
            
            <div className={`flex flex-wrap items-center gap-4 text-xs font-mono mt-4 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <span>{PORTFOLIO_DATA.profile.email}</span>
              <span aria-hidden="true">·</span>
              <span>Puducherry, PY · Open to Remote</span>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">LinkedIn</a>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.profile.socials.github} target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className={`text-xs font-mono uppercase tracking-widest pb-1 border-b font-semibold ${
              isDark ? 'text-sky-400 border-white/[0.06]' : 'text-sky-600 border-slate-200'
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
              isDark ? 'text-sky-400 border-white/[0.06]' : 'text-sky-600 border-slate-200'
            }`}>
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'}`}>
                <strong className={`block mb-1 font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>Frontend Core & Frameworks:</strong>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>React, Angular, TypeScript, JavaScript (ES6+), RxJS, NgRx, Redux, HTML5, Semantic DOM, REST APIs</p>
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
              isDark ? 'text-sky-400 border-white/[0.06]' : 'text-sky-600 border-slate-200'
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
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
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
              isDark ? 'text-sky-400 border-white/[0.06]' : 'text-sky-600 border-slate-200'
            }`}>
              Milestone Progression
            </h2>
            {PORTFOLIO_DATA.experienceTimeline.map((exp) => (
              <div key={exp.period} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                    {exp.role} <span className="text-xs font-normal text-sky-600 dark:text-sky-400">· {exp.company}</span>
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
