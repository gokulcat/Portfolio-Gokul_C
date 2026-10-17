import React from 'react';
import { ArrowUp, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${
      isDark ? 'bg-[#06070B] border-white/[0.08] text-slate-400' : 'bg-[#FAF8FF] border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-white/[0.06]' : 'border-slate-200'
        }`}>
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <span className={`font-display font-bold text-xl ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              Gokul C
            </span>
            <span className={`text-xs font-mono font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              · Frontend Developer (React & Angular)
            </span>
          </div>

          {/* Clean Navigation Links */}
          <div className={`flex flex-wrap items-center justify-center gap-6 text-xs font-medium ${
            isDark ? 'text-slate-400' : 'text-slate-700'
          }`}>
            <a href="#about" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#131B2E] font-semibold'}`}>About</a>
            <a href="#projects" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#131B2E] font-semibold'}`}>Projects</a>
            <a href="#skills" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#131B2E] font-semibold'}`}>Skills</a>
            <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#131B2E] font-semibold'}`}>Experience</a>
            <a href="#css-lab" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#131B2E] font-semibold'}`}>CSS Lab</a>
            <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#131B2E] font-semibold'}`}>Contact</a>
          </div>

          {/* Social Icons & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-3 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <a href={PORTFOLIO_DATA.profile.socials.linkedin} target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-indigo-600'}`} aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.github} target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#131B2E]'}`} aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.youtube} target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-red-600'}`} aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.instagram} target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-pink-600'}`} aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isDark 
                  ? 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-[#131B2E] border border-slate-300 shadow-xs'
              }`}
              title="Return to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className={`pt-8 flex flex-col sm:row items-center justify-between gap-4 text-xs font-mono font-medium ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          <div>
            &copy; {new Date().getFullYear()} Gokul C. All rights reserved.
          </div>
          <div>
            Hyderabad, India
          </div>
        </div>

      </div>
    </footer>
  );
};
