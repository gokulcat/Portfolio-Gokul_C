import React from 'react';
import { ArrowUp, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#06070B] border-t border-white/[0.08] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-xl text-white">Gokul C</span>
            <span className="text-xs font-mono text-slate-400">· Frontend Developer (React & Angular)</span>
          </div>

          {/* Clean Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href={PORTFOLIO_DATA.profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Return to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright Row - "Built with" removed as requested */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
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
