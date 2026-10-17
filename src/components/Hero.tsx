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
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const [copied, setCopied] = useState(false);
  const [showCssCard, setShowCssCard] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-pink-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-4">
              <span>Frontend Developer</span>
              <span aria-hidden="true">·</span>
              <span>React & Angular Specialist</span>
              <span aria-hidden="true">·</span>
              <span>4.5+ Yrs Exp</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 [text-wrap:balance] leading-[1.1]">
              Hey, I'm <span className="fashion-accent-text">Gokul C</span>. Crafting dynamic, user-first web experiences.
            </h1>

            {/* Authentic Bio Lead */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              A passionate <span className="text-white font-medium">Frontend Developer</span> with <span className="text-indigo-400 font-semibold">4.5+ years</span> of experience engineering high-performance web applications across <span className="text-white font-medium">React.js</span> and <span className="text-white font-medium">Angular</span>. Dedicated to clean architecture, intuitive interactions, and seamless design-to-code execution.
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>gokulcat15@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Network Links */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center gap-6">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">Connect:</span>
              <div className="flex items-center gap-4 text-slate-400">
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Gokul C LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Gokul C GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Gokul C YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Gokul C Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.email}
                  className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
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
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

              {/* Monolith Container */}
              <div className="relative rounded-2xl glass-panel p-4 sm:p-5 overflow-hidden">
                
                {/* Header strip with mode toggle */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-mono text-emerald-400 font-medium">Available for Opportunities</span>
                  </div>
                  
                  <button
                    onClick={() => setShowCssCard(!showCssCard)}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-indigo-300 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/20 rounded-md border border-indigo-500/20 transition-colors cursor-pointer"
                    title="Toggle modern CSS design tokens"
                  >
                    <Code2 className="w-3 h-3" />
                    <span>{showCssCard ? 'View Photo' : 'Inspect CSS'}</span>
                  </button>
                </div>

                {/* Card Body: Portrait or CSS Tokens */}
                {!showCssCard ? (
                  <div className="space-y-4">
                    <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-slate-900 border border-white/[0.08] shadow-inner">
                      <img
                        src={PORTFOLIO_DATA.profile.avatar}
                        alt="Gokul C - Frontend Developer"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-b', 'from-indigo-950', 'to-slate-900');
                            const fallback = document.createElement('div');
                            fallback.className = 'text-center p-6';
                            fallback.innerHTML = `
                              <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-display font-bold text-2xl">GC</div>
                              <h3 class="text-white font-medium">Gokul C</h3>
                              <p class="text-xs text-slate-400 mt-1">Frontend Developer (React & Angular)</p>
                            `;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                      
                      {/* Gradient overlay scrim for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-transparent to-transparent opacity-80" />

                      {/* Floating bottom badge: Hyderabad / India */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.1] text-xs">
                        <div className="flex justify-between items-center text-slate-200">
                          <span className="font-semibold text-white">Gokul C</span>
                          <span className="text-[11px] font-mono text-indigo-300">Hyderabad / India</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">Frontend Developer · React & Angular Specialist</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-400 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Specialized in React, Angular, Tailwind & Design Systems</span>
                      </div>
                      <span className="font-mono text-slate-400">4.5+ Yrs</span>
                    </div>
                  </div>
                ) : (
                  /* Fashion CSS Inspector Card */
                  <div className="aspect-4/5 rounded-xl p-4 bg-slate-950/90 border border-white/[0.08] font-mono text-xs overflow-y-auto space-y-3 text-slate-300">
                    <div className="text-indigo-400 pb-1 border-b border-white/[0.06] flex items-center justify-between">
                      <span>/* Modern Fashion CSS Tokens */</span>
                      <span className="text-[10px] text-slate-400">OKLCH & Blur</span>
                    </div>

                    <div>
                      <span className="text-purple-400">.glass-monolith</span> &#123;
                      <div className="pl-4 text-slate-400 space-y-0.5 my-1">
                        <div>backdrop-filter: <span className="text-amber-300">blur(16px)</span>;</div>
                        <div>background: <span className="text-emerald-300">rgba(14, 17, 26, 0.75)</span>;</div>
                        <div>border: <span className="text-indigo-300">1px solid rgba(255, 255, 255, 0.08)</span>;</div>
                        <div>box-shadow: <span className="text-pink-300">0 20px 40px rgba(0,0,0,0.6)</span>;</div>
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

                    <div className="text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
                      // Clean, high-performance compositor properties only.
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Metric Strip Below Split */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PORTFOLIO_DATA.profile.stats.map((stat) => (
              <div 
                key={stat.label} 
                className="p-5 rounded-2xl glass-panel-interactive flex flex-col justify-between"
              >
                <div className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">
                  {stat.label}
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">
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
