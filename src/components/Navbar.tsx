import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeAccent: string;
  onSelectAccent: (accent: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeAccent, onSelectAccent }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090E]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
            >
              <span className="font-display font-black tracking-tighter">Gokul C</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform"></span>
            </a>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors relative py-1 text-slate-300 hover:text-slate-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary action + Accent Theme Selector */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Accent tone switcher */}
              <div className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <button
                  onClick={() => onSelectAccent('indigo')}
                  title="Indigo Aura"
                  className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer ${
                    activeAccent === 'indigo' ? 'bg-indigo-500 scale-125 ring-2 ring-indigo-400/50' : 'bg-indigo-500/50 hover:scale-110'
                  }`}
                  aria-label="Select Indigo theme"
                />
                <button
                  onClick={() => onSelectAccent('amber')}
                  title="Haute Amber"
                  className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer ${
                    activeAccent === 'amber' ? 'bg-amber-400 scale-125 ring-2 ring-amber-300/50' : 'bg-amber-400/50 hover:scale-110'
                  }`}
                  aria-label="Select Amber theme"
                />
                <button
                  onClick={() => onSelectAccent('emerald')}
                  title="Cyber Emerald"
                  className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer ${
                    activeAccent === 'emerald' ? 'bg-emerald-400 scale-125 ring-2 ring-emerald-300/50' : 'bg-emerald-400/50 hover:scale-110'
                  }`}
                  aria-label="Select Emerald theme"
                />
              </div>

              <button
                onClick={onOpenResume}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
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
                className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
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
        <div className="fixed inset-0 z-50 md:hidden bg-[#08090E]/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 border-b border-white/[0.1]">
          <div className="flex justify-between items-center absolute top-5 left-6 right-6">
            <span className="font-display font-bold text-xl text-white">Gokul C</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5 text-lg font-medium text-slate-300 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white hover:translate-x-2 transition-transform py-2 border-b border-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 py-2 text-left text-slate-300 hover:text-white"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View Curriculum Vitae</span>
            </button>
          </div>

          <div className="pt-6 border-t border-white/[0.1] flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500"
            >
              Get in Touch
            </a>
            <div className="text-center text-xs text-slate-500">
              {PORTFOLIO_DATA.profile.email}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
