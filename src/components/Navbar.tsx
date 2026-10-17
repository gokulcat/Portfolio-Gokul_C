import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon, ChevronDown, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState<boolean>(false);
  const [mobileThemeDropdownOpen, setMobileThemeDropdownOpen] = useState<boolean>(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const { theme, isDark, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileThemeDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setThemeDropdownOpen(false);
        setMobileThemeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'Works', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Careers', href: '#careers' },
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
          <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
            
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
            <nav className={`hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium ${
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

            {/* Zone 3: Primary action + Theme Dropdown with Sun & Crescent Moon */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              
              {/* Theme Dropdown Menu */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setThemeDropdownOpen((prev) => !prev)}
                  aria-expanded={themeDropdownOpen}
                  aria-haspopup="listbox"
                  aria-label="Select color theme dropdown"
                  className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isDark
                      ? 'bg-white/[0.08] hover:bg-white/[0.14] border-white/[0.14] text-slate-200 hover:text-white'
                      : 'bg-slate-100 hover:bg-slate-200/90 border-slate-300 text-slate-800 shadow-xs'
                  } ${themeDropdownOpen ? (isDark ? 'ring-2 ring-indigo-500/50' : 'ring-2 ring-indigo-400') : ''}`}
                >
                  {/* Current Active Icon */}
                  {isDark ? (
                    <div className="flex items-center gap-1.5">
                      <Moon className="w-4 h-4 text-indigo-400" />
                      <span className="hidden sm:inline">Dark</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <Sun className="w-4 h-4 text-amber-500" />
                      <span className="hidden sm:inline">Light</span>
                    </div>
                  )}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    } ${themeDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Popover */}
                {themeDropdownOpen && (
                  <div
                    role="listbox"
                    aria-label="Theme options"
                    className={`absolute right-0 mt-2 w-44 p-1.5 rounded-xl border shadow-xl z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 ${
                      isDark
                        ? 'bg-[#0E121B]/95 border-white/[0.14] shadow-black/70'
                        : 'bg-white/95 border-slate-200 shadow-slate-900/15'
                    }`}
                  >
                    <div className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-bold ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Theme Mode
                    </div>

                    {/* Light Option with Sun Logo */}
                    <button
                      type="button"
                      role="option"
                      aria-selected={!isDark}
                      onClick={() => {
                        setTheme('light');
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        !isDark
                          ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 font-semibold border border-amber-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className={`p-1 rounded-md ${
                        !isDark ? 'bg-amber-100 text-amber-600' : 'bg-white/[0.08] text-amber-400'
                      }`}>
                        <Sun className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Light</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">Crisp high contrast</span>
                      </div>
                      {!isDark && <Check className="w-4 h-4 ml-auto text-indigo-600" />}
                    </button>

                    {/* Dark Option with Crescent Moon Logo */}
                    <button
                      type="button"
                      role="option"
                      aria-selected={isDark}
                      onClick={() => {
                        setTheme('dark');
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer mt-1 ${
                        isDark
                          ? 'bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                      }`}
                    >
                      <div className={`p-1 rounded-md ${
                        isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-200 text-indigo-600'
                      }`}>
                        <Moon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Dark</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">Deep obsidian & neon</span>
                      </div>
                      {isDark && <Check className="w-4 h-4 ml-auto text-indigo-400" />}
                    </button>
                  </div>
                )}
              </div>

              {/* Curriculum Vitae Modal Trigger */}
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

              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition-colors shadow-lg shadow-indigo-600/20 whitespace-nowrap shrink-0"
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
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 rounded-lg ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'}`}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
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

          {/* Mobile Theme Selection & Footer CTA */}
          <div className={`pt-6 border-t flex flex-col gap-4 ${
            isDark ? 'border-white/[0.1]' : 'border-slate-200'
          }`}>
            {/* Mobile Dropdown / Theme Selector */}
            <div className="relative" ref={mobileDropdownRef}>
              <div className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Theme Mode
              </div>
              <button
                type="button"
                onClick={() => setMobileThemeDropdownOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between p-3 rounded-xl border text-sm font-medium ${
                  isDark
                    ? 'bg-white/[0.06] border-white/[0.12] text-white'
                    : 'bg-slate-100 border-slate-300 text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {isDark ? (
                    <>
                      <Moon className="w-4 h-4 text-indigo-400" />
                      <span>Dark Theme (Crescent)</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4 text-amber-500" />
                      <span>Light Theme (Sun)</span>
                    </>
                  )}
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileThemeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileThemeDropdownOpen && (
                <div className={`mt-2 p-1.5 rounded-xl border ${
                  isDark ? 'bg-[#0E121B] border-white/[0.12]' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <button
                    onClick={() => {
                      setTheme('light');
                      setMobileThemeDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-sm ${
                      !isDark ? 'bg-amber-500/10 text-amber-800 font-semibold' : 'text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Light Mode (Sun)</span>
                    {!isDark && <Check className="w-4 h-4 ml-auto text-indigo-600" />}
                  </button>
                  <button
                    onClick={() => {
                      setTheme('dark');
                      setMobileThemeDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-sm mt-1 ${
                      isDark ? 'bg-indigo-600/20 text-indigo-300 font-semibold' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Moon className="w-4 h-4 text-indigo-400" />
                    <span>Dark Mode (Crescent)</span>
                    {isDark && <Check className="w-4 h-4 ml-auto text-indigo-400" />}
                  </button>
                </div>
              )}
            </div>

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
