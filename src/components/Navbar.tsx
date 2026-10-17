import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Works', href: '#projects' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Trajectory', href: '#experience' },
    { label: 'CSS Lab', href: '#css-lab' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? isDark 
            ? 'bg-[#08090E]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20' 
            : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            
            {/* Zone 1: Wordmark */}
            <a
              href="#"
              className={`text-base font-bold tracking-tight whitespace-nowrap shrink-0 transition-colors flex items-center gap-2 group ${
                isDark ? 'text-white hover:text-indigo-400' : 'text-[#131B2E] hover:text-indigo-600'
              }`}
            >
              <span className="font-display font-black tracking-tighter text-lg">Gokul C</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform"></span>
            </a>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0 ${
                    isDark ? 'hover:text-white' : 'hover:text-[#131B2E] hover:font-semibold'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary action + Sun/Crescent Dark & Light Theme Switcher */}
            <div className="flex items-center gap-3 shrink-0">
              
              {/* Dark & Light Theme Switcher with Sun & Crescent Logo */}
              <div 
                className={`flex items-center p-1 rounded-full border transition-all cursor-pointer ${
                  isDark 
                    ? 'bg-white/[0.08] border-white/[0.12] shadow-inner' 
                    : 'bg-slate-200/80 border-slate-300 shadow-xs'
                }`}
                onClick={toggleTheme}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleTheme(); }}
                title={isDark ? 'Switch to Light Theme (Sun)' : 'Switch to Dark Theme (Crescent)'}
                aria-label="Toggle dark and light theme"
              >
                {/* Sun Logo for Light */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); if (isDark) toggleTheme(); }}
                  className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                    !isDark
                      ? 'bg-white text-amber-500 shadow-md scale-105 ring-1 ring-slate-900/5'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  aria-label="Light mode with sun logo"
                  title="Light mode"
                >
                  <Sun className={`w-3.5 h-3.5 ${!isDark ? 'rotate-0' : 'rotate-45'}`} />
                </button>

                {/* Crescent Logo for Dark */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); if (!isDark) toggleTheme(); }}
                  className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                    isDark 
                      ? 'bg-indigo-600 text-white shadow-md scale-105 ring-1 ring-white/10' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-label="Dark mode with crescent logo"
                  title="Dark mode"
                >
                  <Moon className={`w-3.5 h-3.5 ${isDark ? 'rotate-0' : '-rotate-12'}`} />
                </button>
              </div>

              <button
                onClick={onOpenResume}
                className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isDark
                    ? 'text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1]'
                    : 'text-slate-800 hover:text-[#131B2E] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition-colors shadow-lg shadow-indigo-600/20 whitespace-nowrap shrink-0"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile hamburger menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'text-slate-300 hover:text-white hover:bg-white/[0.05]' 
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 md:hidden backdrop-blur-xl flex flex-col justify-between p-6 pt-20 border-b ${
          isDark 
            ? 'bg-[#08090E]/98 border-white/[0.1]' 
            : 'bg-white/98 border-slate-200'
        }`}>
          <div className="flex justify-between items-center absolute top-5 left-6 right-6">
            <span className={`font-display font-bold text-xl ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
              Gokul C
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border ${
                  isDark 
                    ? 'bg-white/[0.05] border-white/[0.1] text-amber-400' 
                    : 'bg-slate-100 border-slate-300 text-indigo-600'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 rounded-lg ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'}`}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className={`flex flex-col gap-5 text-lg font-medium my-auto ${
            isDark ? 'text-slate-200' : 'text-slate-800'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:translate-x-2 transition-transform py-2 border-b ${
                  isDark 
                    ? 'hover:text-white border-white/[0.06]' 
                    : 'hover:text-indigo-600 border-slate-200'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 py-2 text-left text-indigo-600 dark:text-indigo-400 font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>View Curriculum Vitae</span>
            </button>
          </div>

          <div className={`pt-6 border-t flex flex-col gap-4 ${
            isDark ? 'border-white/[0.1]' : 'border-slate-200'
          }`}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 shadow-md shadow-indigo-600/20"
            >
              Get in Touch
            </a>
            <div className={`text-center text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {PORTFOLIO_DATA.profile.email}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
