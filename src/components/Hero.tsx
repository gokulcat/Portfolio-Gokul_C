import React, { useState } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Github, 
  Youtube, 
  Instagram, 
  Mail, 
  Copy, 
  Check, 
  Download, 
  Code2, 
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const [copied, setCopied] = useState(false);
  const [showCssCard, setShowCssCard] = useState(false);
  const { isDark } = useTheme();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors ${
      isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'
    }`}>
      {/* Ambient background glow orbs */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[120px] pointer-events-none rounded-full ${
        isDark ? 'bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-pink-500/5' : 'bg-gradient-to-tr from-indigo-500/10 via-purple-400/10 to-blue-300/15'
      }`} />
      <div className={`absolute top-20 right-10 w-72 h-72 blur-[90px] pointer-events-none rounded-full ${
        isDark ? 'bg-blue-500/10' : 'bg-indigo-300/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed editorial kicker */}
            <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-4 font-semibold ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              <span>Frontend Developer</span>
              <span aria-hidden="true">·</span>
              <span>React & Angular Specialist</span>
              <span aria-hidden="true">·</span>
              <span>4.5+ Yrs Exp</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 [text-wrap:balance] leading-[1.1] ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              Hey, I'm <span className={isDark ? 'fashion-accent-text-dark' : 'fashion-accent-text-light'}>Gokul C</span>. Crafting dynamic, user-first web experiences.
            </h1>

            {/* Authentic Bio Lead */}
            <p className={`text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              A passionate <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>Frontend Developer</span> with <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>4.5+ years</span> of experience engineering high-performance web applications across <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>React.js</span> and <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>Angular</span>. Dedicated to clean architecture, intuitive interactions, and seamless design-to-code execution.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-all duration-200 shadow-xl shadow-indigo-600/25 group cursor-pointer"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  isDark
                    ? 'text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1]'
                    : 'text-slate-800 hover:text-[#131B2E] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs'
                }`}
              >
                <Download className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  isDark
                    ? 'text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08]'
                    : 'text-slate-800 hover:text-[#131B2E] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs'
                }`}
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-sans font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className={`w-3.5 h-3.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                    <span>gokulcat15@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Network Links */}
            <div className={`pt-6 border-t flex items-center gap-6 ${isDark ? 'border-white/[0.08]' : 'border-slate-300'}`}>
              <span className={`text-xs uppercase tracking-wider font-mono font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Connect:</span>
              <div className={`flex items-center gap-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:text-white hover:bg-white/[0.06]' : 'hover:text-indigo-600 hover:bg-slate-100'
                  }`}
                  aria-label="Gokul C LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:text-white hover:bg-white/[0.06]' : 'hover:text-[#131B2E] hover:bg-slate-100'
                  }`}
                  aria-label="Gokul C GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:text-white hover:bg-white/[0.06]' : 'hover:text-red-600 hover:bg-slate-100'
                  }`}
                  aria-label="Gokul C YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:text-white hover:bg-white/[0.06]' : 'hover:text-pink-600 hover:bg-slate-100'
                  }`}
                  aria-label="Gokul C Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.email}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:text-white hover:bg-white/[0.06]' : 'hover:text-indigo-600 hover:bg-slate-100'
                  }`}
                  aria-label="Email Gokul C"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fashion Portrait Monolith & Interactive CSS Inspector */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow frame */}
              <div className={`absolute -inset-1.5 rounded-3xl blur-xl transition duration-1000 ${
                isDark 
                  ? 'bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/30 opacity-60' 
                  : 'bg-gradient-to-r from-indigo-300/40 via-purple-300/30 to-pink-300/30 opacity-70'
              }`}></div>

              {/* Monolith Container */}
              <div className={`relative rounded-2xl p-4 sm:p-5 overflow-hidden ${
                isDark ? 'glass-panel-dark' : 'glass-panel-light'
              }`}>
                
                {/* Header strip with mode toggle */}
                <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
                  isDark ? 'border-white/[0.08]' : 'border-slate-200'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className={`text-xs font-mono font-semibold ${
                      isDark ? 'text-emerald-400' : 'text-emerald-700'
                    }`}>
                      Available for Opportunities
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setShowCssCard(!showCssCard)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-md border transition-colors cursor-pointer ${
                      isDark
                        ? 'text-indigo-300 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/20'
                        : 'text-indigo-700 hover:text-indigo-950 bg-indigo-50 hover:bg-indigo-100 border-indigo-200 font-semibold'
                    }`}
                    title="Toggle modern CSS design tokens"
                  >
                    <Code2 className="w-3 h-3" />
                    <span>{showCssCard ? 'View Photo' : 'Inspect CSS'}</span>
                  </button>
                </div>

                {/* Card Body: Portrait or CSS Tokens */}
                {!showCssCard ? (
                  <div className="space-y-4">
                    <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-slate-900 border border-slate-200/20 shadow-inner">
                      <img
                        src={PORTFOLIO_DATA.profile.avatar}
                        alt="Gokul C - Frontend Developer"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Gradient overlay scrim for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                      {/* Floating bottom badge: Hyderabad / India */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/[0.15] text-xs">
                        <div className="flex justify-between items-center text-slate-200">
                          <span className="font-semibold text-white">Gokul C</span>
                          <span className="text-[11px] font-mono text-indigo-300">Hyderabad / India</span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-0.5">Frontend Developer · React & Angular Specialist</p>
                      </div>
                    </div>

                    <div className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                      isDark 
                        ? 'bg-white/[0.02] border-white/[0.05] text-slate-400' 
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span className="font-medium">Specialized in React, Angular, Tailwind & Systems</span>
                      </div>
                      <span className="font-mono font-semibold">4.5+ Yrs</span>
                    </div>
                  </div>
                ) : (
                  /* Fashion CSS Inspector Card - Clean Dark Terminal */
                  <div className="aspect-4/5 rounded-xl p-4 bg-[#0B0F19] border border-white/[0.08] font-mono text-xs overflow-y-auto space-y-3 text-slate-300">
                    <div className="text-indigo-400 pb-1 border-b border-white/[0.08] flex items-center justify-between">
                      <span>/* Modern Fashion CSS Tokens */</span>
                      <span className="text-[10px] text-slate-400">Light & Dark OKLCH</span>
                    </div>

                    <div>
                      <span className="text-purple-400">.glass-monolith</span> &#123;
                      <div className="pl-4 text-slate-400 space-y-0.5 my-1">
                        <div>backdrop-filter: <span className="text-amber-300">blur(16px)</span>;</div>
                        <div>background: <span className="text-emerald-300">rgba(14, 17, 26, 0.75)</span>;</div>
                        <div>border: <span className="text-indigo-300">1px solid var(--border)</span>;</div>
                        <div>box-shadow: <span className="text-pink-300">0 20px 40px rgba(0,0,0,0.5)</span>;</div>
                      </div>
                      &#125;
                    </div>

                    <div>
                      <span className="text-purple-400">.typography-scale</span> &#123;
                      <div className="pl-4 text-slate-400 space-y-0.5 my-1">
                        <div>font-family: <span className="text-amber-300">'Outfit', sans-serif</span>;</div>
                        <div>letter-spacing: <span className="text-emerald-300">-0.025em</span>;</div>
                        <div>text-wrap: <span className="text-indigo-300">balance</span>;</div>
                      </div>
                      &#125;
                    </div>

                    <div>
                      <span className="text-purple-400">.motion-curve</span> &#123;
                      <div className="pl-4 text-slate-400 space-y-0.5 my-1">
                        <div>transition: <span className="text-pink-300">250ms cubic-bezier(0.16, 1, 0.3, 1)</span>;</div>
                        <div>will-change: <span className="text-amber-300">transform, opacity</span>;</div>
                      </div>
                      &#125;
                    </div>

                    <div className="text-[11px] text-slate-400 pt-2 border-t border-white/[0.08]">
                      // Clean, high-performance compositor properties only.
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Metric Strip Below Split */}
        <div className={`mt-16 pt-8 border-t ${isDark ? 'border-white/[0.08]' : 'border-slate-300'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PORTFOLIO_DATA.profile.stats.map((stat) => (
              <div 
                key={stat.label} 
                className={`p-5 rounded-2xl flex flex-col justify-between ${
                  isDark ? 'glass-panel-interactive-dark' : 'glass-panel-interactive-light'
                }`}
              >
                <div className={`text-xs uppercase tracking-wider font-mono font-medium mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {stat.label}
                </div>
                <div className={`text-2xl sm:text-3xl font-display font-extrabold tracking-tight tabular-nums ${
                  isDark ? 'text-white' : 'text-[#131B2E]'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-xs mt-1 font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
