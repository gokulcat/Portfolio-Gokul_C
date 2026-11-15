import React, { useState } from 'react';
import {
  Smartphone,
  Tablet,
  Monitor,
  Sun,
  Moon,
  Copy,
  Check,
  Sparkles,
  Grid3X3,
  Palette,
  Layers,
  Terminal,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type LabTopicId = 'responsive' | 'dark-mode' | 'theme-tokens' | 'states';
type ViewportMode = 'mobile' | 'tablet' | 'desktop';
type AccentPalette = 'sky' | 'indigo' | 'emerald' | 'rose';

const TOPIC_TABS: {
  id: LabTopicId;
  num: string;
  label: string;
  tagline: string;
  icon: React.ReactNode;
}[] = [
  {
    id: 'responsive',
    num: '01',
    label: 'Responsive Design',
    tagline: 'sm: / md: / lg: breakpoint prefixes',
    icon: <Smartphone className="w-3.5 h-3.5" />,
  },
  {
    id: 'dark-mode',
    num: '02',
    label: 'Dark Mode',
    tagline: 'dark: variant & class strategy',
    icon: <Moon className="w-3.5 h-3.5" />,
  },
  {
    id: 'theme-tokens',
    num: '03',
    label: '@theme & OKLCH',
    tagline: 'CSS-first variables & P3 colors',
    icon: <Palette className="w-3.5 h-3.5" />,
  },
  {
    id: 'states',
    num: '04',
    label: 'Hover & Group States',
    tagline: 'hover:, focus-visible:, group-hover:',
    icon: <Sparkles className="w-3.5 h-3.5" />,
  },
];

const PALETTE_SWATCHES: Record<
  AccentPalette,
  {
    name: string;
    oklch: string;
    bg: string;
    softBg: string;
    text: string;
    border: string;
    ring: string;
    swatch: string;
  }
> = {
  sky: {
    name: 'sky-500',
    oklch: 'oklch(0.685 0.169 237.323)',
    bg: 'bg-sky-500 hover:bg-sky-400',
    softBg: 'bg-sky-500/10',
    text: 'text-sky-500',
    border: 'border-sky-500/30',
    ring: 'focus-visible:ring-sky-500',
    swatch: 'bg-sky-500',
  },
  indigo: {
    name: 'indigo-500',
    oklch: 'oklch(0.585 0.233 277.117)',
    bg: 'bg-indigo-600 hover:bg-indigo-500',
    softBg: 'bg-indigo-500/10',
    text: 'text-indigo-500',
    border: 'border-indigo-500/30',
    ring: 'focus-visible:ring-indigo-500',
    swatch: 'bg-indigo-500',
  },
  emerald: {
    name: 'emerald-500',
    oklch: 'oklch(0.696 0.17 162.48)',
    bg: 'bg-emerald-600 hover:bg-emerald-500',
    softBg: 'bg-emerald-500/10',
    text: 'text-emerald-500',
    border: 'border-emerald-500/30',
    ring: 'focus-visible:ring-emerald-500',
    swatch: 'bg-emerald-500',
  },
  rose: {
    name: 'rose-500',
    oklch: 'oklch(0.645 0.246 16.439)',
    bg: 'bg-rose-600 hover:bg-rose-500',
    softBg: 'bg-rose-500/10',
    text: 'text-rose-500',
    border: 'border-rose-500/30',
    ring: 'focus-visible:ring-rose-500',
    swatch: 'bg-rose-500',
  },
};

export const FashionCssPlayground: React.FC = () => {
  const { isDark } = useTheme();
  const [activeTopic, setActiveTopic] = useState<LabTopicId>('responsive');
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [previewDark, setPreviewDark] = useState<boolean>(false);
  const [palette, setPalette] = useState<AccentPalette>('sky');
  const [simulateHover, setSimulateHover] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const activeAccent = PALETTE_SWATCHES[palette];

  // Effective dark state inside the isolated Tailwind preview window
  const cardIsDark = activeTopic === 'dark-mode' ? previewDark : isDark;

  const getCodeSnippet = (): { filename: string; code: string } => {
    switch (activeTopic) {
      case 'responsive':
        return {
          filename: 'ResponsiveCard.html',
          code: `<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md ${
            viewport === 'desktop'
              ? 'md:max-w-2xl'
              : viewport === 'tablet'
              ? 'sm:max-w-xl'
              : 'max-w-xs'
          }">
  <div class="${viewport === 'mobile' ? 'flex flex-col' : 'flex flex-col md:flex-row'}">
    <div class="${viewport === 'mobile' ? 'h-36 w-full' : 'md:shrink-0 md:w-44'} bg-sky-500/15" />
    <div class="p-6 sm:p-8">
      <div class="text-xs font-semibold uppercase tracking-wide text-sky-500">
        Case Study · Breakpoint: ${viewport.toUpperCase()}
      </div>
      <a href="#" class="mt-1 block text-lg font-semibold text-slate-900 hover:underline">
        Incredible layout precision
      </a>
      <p class="mt-2 text-sm text-slate-500">
        Build adaptive interfaces right in your HTML with sm:, md:, and lg: utilities.
      </p>
    </div>
  </div>
</div>`,
        };
      case 'dark-mode':
        return {
          filename: 'DarkModeCard.html',
          code: `<div class="rounded-xl px-6 py-7 ring shadow-xl ${
            previewDark
              ? 'bg-slate-900 ring-white/10 text-white'
              : 'bg-white ring-slate-900/5 text-slate-900'
          } dark:bg-slate-900 dark:ring-white/10">
  <span class="inline-flex items-center justify-center rounded-md bg-sky-500 p-2 shadow-lg">
    <svg class="h-5 w-5 text-white" ... />
  </span>
  <h3 class="mt-5 text-base font-semibold tracking-tight text-slate-900 dark:text-white">
    Writes upside-down
  </h3>
  <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down.
  </p>
</div>`,
        };
      case 'theme-tokens':
        return {
          filename: 'app.css',
          code: `@import "tailwindcss";

@theme {
  --font-display: "Outfit", system-ui, sans-serif;
  --color-brand: ${activeAccent.oklch}; /* ${activeAccent.name} */
  --radius-card: 1rem;
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Consumed directly as utility classes:
   bg-brand  text-brand  rounded-card  font-display */`,
        };
      case 'states':
        return {
          filename: 'GroupStates.html',
          code: `<a href="#" class="group block rounded-2xl p-6 ring-1 transition-all duration-200 ${
            simulateHover
              ? 'bg-sky-500 ring-sky-500 shadow-lg -translate-y-0.5'
              : 'bg-white ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500'
          }">
  <div class="flex items-center space-x-3">
    <span class="rounded-lg p-2 ${
      simulateHover ? 'bg-white/20 text-white' : 'bg-sky-500/10 text-sky-500 group-hover:bg-white/20 group-hover:text-white'
    }">★</span>
    <h3 class="text-sm font-semibold ${
      simulateHover ? 'text-white' : 'text-slate-900 group-hover:text-white'
    }">New Project</h3>
  </div>
  <p class="mt-2 text-sm ${
    simulateHover ? 'text-sky-100' : 'text-slate-500 group-hover:text-white'
  }">Create a new project from a variety of starting templates.</p>
</a>`,
        };
    }
  };

  const snippet = getCodeSnippet();

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="css-lab"
      className={`py-24 relative border-t overflow-hidden transition-colors ${
        isDark ? 'bg-[#08090E] border-white/[0.08]' : 'bg-white border-slate-200'
      }`}
    >
      {/* Subtle Tailwindcss.com-style radial aura */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] blur-3xl opacity-25 ${
          isDark
            ? 'bg-gradient-to-tr from-sky-500/30 via-cyan-500/20 to-transparent'
            : 'bg-gradient-to-tr from-sky-300/40 via-cyan-200/30 to-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Tailwindcss.com-inspired Hero Header */}
        <div className="max-w-3xl mb-12">
          <div
            className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 font-semibold ${
              isDark ? 'text-sky-400' : 'text-sky-600'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Tailwind CSS v4</span>
            <span aria-hidden="true">·</span>
            <span>Utility-First Interactive Lab</span>
          </div>

          <h2
            className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight [text-wrap:balance] leading-[1.08] ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Rapidly build modern websites without ever leaving your HTML.
          </h2>

          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A utility-first CSS framework packed with classes like{' '}
            <code className="font-mono text-sm font-semibold text-sky-500">flex</code>,{' '}
            <code className="font-mono text-sm font-semibold text-sky-500">pt-4</code>,{' '}
            <code className="font-mono text-sm font-semibold text-sky-500">text-center</code>, and{' '}
            <code className="font-mono text-sm font-semibold text-sky-500">dark:bg-slate-900</code>{' '}
            that can be composed to build any design, directly in your markup.
          </p>
        </div>

        {/* Tailwindcss.com Feature Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {TOPIC_TABS.map((tab) => {
            const isActive = activeTopic === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTopic(tab.id)}
                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-sky-500/10 border-sky-400/50 shadow-lg shadow-sky-500/10'
                      : 'bg-sky-50/80 border-sky-400 shadow-sm'
                    : isDark
                      ? 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[11px] font-mono font-bold ${
                      isActive ? 'text-sky-500' : isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    {tab.num}
                  </span>
                  <span className={isActive ? 'text-sky-500' : isDark ? 'text-slate-400' : 'text-slate-500'}>
                    {tab.icon}
                  </span>
                </div>
                <div
                  className={`text-sm font-display font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {tab.label}
                </div>
                <div
                  className={`text-[11px] font-mono mt-0.5 truncate ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {tab.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Iconic Split Workbench: Code Window + Dotted Live Component Stage */}
        <div
          className={`rounded-3xl border overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${
            isDark
              ? 'border-white/[0.1] bg-[#0B0F19] shadow-2xl shadow-black/50'
              : 'border-slate-200 bg-slate-50 shadow-xl shadow-slate-900/5'
          }`}
        >
          {/* Left Pane: Dark IDE Code Editor */}
          <div className="lg:col-span-6 bg-[#0B1120] text-slate-200 flex flex-col border-b lg:border-b-0 lg:border-r border-white/[0.08]">
            {/* Window Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#0F172A]/80">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-sky-300 font-medium">
                  {snippet.filename}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/[0.08] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content */}
            <pre className="p-5 sm:p-6 text-xs font-mono leading-relaxed text-sky-100/90 overflow-x-auto scrollbar-hidden flex-1">
              <code>{snippet.code}</code>
            </pre>

            {/* Interactive Controls Bar inside Workbench Footer */}
            <div className="px-4 py-3 border-t border-white/[0.08] bg-[#0F172A]/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
              {activeTopic === 'responsive' && (
                <>
                  <span className="text-slate-400">Preview Breakpoint:</span>
                  <div className="flex items-center gap-1.5">
                    {(
                      [
                        { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-3 h-3" /> },
                        { id: 'tablet', label: 'sm:', icon: <Tablet className="w-3 h-3" /> },
                        { id: 'desktop', label: 'md:', icon: <Monitor className="w-3 h-3" /> },
                      ] as const
                    ).map((bp) => (
                      <button
                        key={bp.id}
                        type="button"
                        onClick={() => setViewport(bp.id)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          viewport === bp.id
                            ? 'bg-sky-500 text-white font-semibold'
                            : 'bg-white/[0.06] text-slate-300 hover:bg-white/[0.12]'
                        }`}
                      >
                        {bp.icon}
                        <span>{bp.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {activeTopic === 'dark-mode' && (
                <>
                  <span className="text-slate-400">Toggle card dark: variant:</span>
                  <button
                    type="button"
                    onClick={() => setPreviewDark((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      previewDark
                        ? 'bg-sky-500 text-white'
                        : 'bg-amber-400 text-slate-950'
                    }`}
                  >
                    {previewDark ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                    <span>{previewDark ? 'dark: Active' : 'Light Mode'}</span>
                  </button>
                </>
              )}

              {activeTopic === 'theme-tokens' && (
                <>
                  <span className="text-slate-400">OKLCH Brand Token:</span>
                  <div className="flex items-center gap-1.5">
                    {(['sky', 'indigo', 'emerald', 'rose'] as const).map((colorKey) => (
                      <button
                        key={colorKey}
                        type="button"
                        onClick={() => setPalette(colorKey)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                          palette === colorKey
                            ? 'border-white/50 bg-white/15 text-white font-semibold'
                            : 'border-white/10 bg-white/[0.04] text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${PALETTE_SWATCHES[colorKey].swatch}`} />
                        <span>{colorKey}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {activeTopic === 'states' && (
                <>
                  <span className="text-slate-400">Interactive State:</span>
                  <button
                    type="button"
                    onClick={() => setSimulateHover((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      simulateHover
                        ? 'bg-sky-500 text-white'
                        : 'bg-white/[0.08] text-slate-200 hover:bg-white/[0.14]'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{simulateHover ? 'group-hover: Active' : 'Simulate group-hover:'}</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right Pane: Tailwindcss.com Signature Dotted Preview Stage */}
          <div
            className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center items-center min-h-[340px] relative ${
              isDark ? 'bg-[#070A12]' : 'bg-slate-100/80'
            }`}
            style={{
              backgroundImage: isDark
                ? 'radial-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px)'
                : 'radial-gradient(rgba(15, 23, 42, 0.12) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          >
            {/* Preview Stage Top Tag */}
            <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between text-[11px] font-mono">
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                Live Rendered Output
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-500 font-semibold border border-sky-500/20">
                Zero CSS Written
              </span>
            </div>

            {/* 01: Responsive Breakpoint Card */}
            {activeTopic === 'responsive' && (
              <div
                className={`w-full transition-all duration-300 rounded-2xl overflow-hidden border shadow-xl ${
                  viewport === 'mobile'
                    ? 'max-w-[270px]'
                    : viewport === 'tablet'
                      ? 'max-w-[400px]'
                      : 'max-w-full'
                } ${
                  isDark
                    ? 'bg-slate-900 border-white/10'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className={`flex ${viewport === 'mobile' ? 'flex-col' : 'flex-col sm:flex-row'}`}>
                  <div
                    className={`flex items-center justify-center bg-gradient-to-br from-sky-500 to-cyan-600 text-white ${
                      viewport === 'mobile' ? 'h-28 w-full' : 'sm:w-36 shrink-0 min-h-[160px]'
                    }`}
                  >
                    <Grid3X3 className="w-8 h-8 opacity-90" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-500">
                      {viewport === 'mobile' ? 'base: flex-col' : viewport === 'tablet' ? 'sm: flex-row' : 'md: max-w-2xl'}
                    </div>
                    <h4
                      className={`mt-1 text-lg font-display font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Incredible layout precision
                    </h4>
                    <p
                      className={`mt-2 text-xs leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Switch breakpoints below the code editor to watch mobile-first utility prefixes adapt the flex direction and width live.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 02: Dark Mode Preview Card */}
            {activeTopic === 'dark-mode' && (
              <div
                className={`w-full max-w-sm rounded-2xl px-6 py-7 ring-1 shadow-xl transition-all duration-300 ${
                  cardIsDark
                    ? 'bg-slate-900 ring-white/10 text-white'
                    : 'bg-white ring-slate-900/5 text-slate-900'
                }`}
              >
                <span className="inline-flex items-center justify-center rounded-lg bg-sky-500 p-2.5 shadow-lg shadow-sky-500/30 text-white">
                  {cardIsDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </span>
                <h4
                  className={`mt-5 text-base font-display font-bold tracking-tight ${
                    cardIsDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Writes upside-down
                </h4>
                <p
                  className={`mt-2 text-xs leading-relaxed ${
                    cardIsDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  The Zero Gravity Pen can be used to write in any orientation, including upside-down. Styled purely with <code className="font-mono text-sky-400">dark:</code> variants.
                </p>
              </div>
            )}

            {/* 03: @theme & OKLCH Color System Card */}
            {activeTopic === 'theme-tokens' && (
              <div
                className={`w-full max-w-md rounded-2xl p-6 border shadow-xl transition-all duration-300 ${
                  isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${activeAccent.softBg} ${activeAccent.text} ${activeAccent.border}`}
                  >
                    <Layers className="w-3 h-3" />
                    --color-brand: {activeAccent.name}
                  </span>
                  <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    P3 Wide Gamut
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className={`h-10 rounded-lg ${activeAccent.swatch} opacity-25`} />
                  <div className={`h-10 rounded-lg ${activeAccent.swatch} opacity-50`} />
                  <div className={`h-10 rounded-lg ${activeAccent.swatch} opacity-75`} />
                  <div className={`h-10 rounded-lg ${activeAccent.swatch}`} />
                </div>

                <p className={`text-xs font-mono ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {activeAccent.oklch}
                </p>
                <p className={`mt-1 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tailwind v4 exposes every <code className="font-mono text-sky-500">@theme</code> token as both a utility class and a native CSS custom property.
                </p>
              </div>
            )}

            {/* 04: Hover & Group States Card */}
            {activeTopic === 'states' && (
              <div
                onMouseEnter={() => setSimulateHover(true)}
                onMouseLeave={() => setSimulateHover(false)}
                className={`group w-full max-w-sm rounded-2xl p-6 ring-1 transition-all duration-200 cursor-pointer shadow-lg ${
                  simulateHover
                    ? 'bg-sky-500 ring-sky-500 -translate-y-0.5 shadow-sky-500/25'
                    : isDark
                      ? 'bg-slate-900 ring-white/10 hover:bg-sky-500 hover:ring-sky-500'
                      : 'bg-white ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      simulateHover
                        ? 'bg-white/20 text-white'
                        : 'bg-sky-500/10 text-sky-500 group-hover:bg-white/20 group-hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h4
                    className={`text-sm font-display font-bold transition-colors ${
                      simulateHover
                        ? 'text-white'
                        : isDark
                          ? 'text-white group-hover:text-white'
                          : 'text-slate-900 group-hover:text-white'
                    }`}
                  >
                    New Project
                  </h4>
                </div>
                <p
                  className={`mt-3 text-xs leading-relaxed transition-colors ${
                    simulateHover
                      ? 'text-sky-50'
                      : isDark
                        ? 'text-slate-400 group-hover:text-sky-50'
                        : 'text-slate-600 group-hover:text-sky-50'
                  }`}
                >
                  Hover this card (or toggle <code className="font-mono font-semibold">group-hover:</code>) to style child elements from parent state without JavaScript.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom 4-Column Bento Strip — Tailwindcss.com Documentation Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            {
              title: 'Mobile-First Breakpoints',
              code: 'grid-cols-1 md:grid-cols-3',
              desc: 'Prefix any utility with sm:, md:, lg:, or xl: to build fluid responsive layouts inline.',
            },
            {
              title: 'CSS-First @theme',
              code: '@theme { --color-*: ... }',
              desc: 'Configure design tokens directly in CSS with native variables and zero JS config bloat.',
            },
            {
              title: 'Container Queries',
              code: '@container · @md:flex',
              desc: 'Style components based on their parent container size instead of the global viewport.',
            },
            {
              title: 'Tiny Production CSS',
              code: 'Automatic tree-shaking',
              desc: 'Only ships the exact utility classes found in your templates—often under 10kB gzipped.',
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className={`p-5 rounded-2xl border transition-colors ${
                isDark
                  ? 'bg-white/[0.02] border-white/[0.08] hover:border-white/[0.16]'
                  : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className={`text-sm font-display font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {pillar.title}
              </div>
              <div className="text-[11px] font-mono text-sky-500 font-semibold mb-2">
                {pillar.code}
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
