import React, { useState } from 'react';
import { Sliders, Code2, Sparkles, Copy, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FashionCssPlayground: React.FC = () => {
  const [blurAmount, setBlurAmount] = useState<number>(16);
  const [borderOpacity, setBorderOpacity] = useState<number>(12);
  const [cardRadius, setCardRadius] = useState<number>(24);
  const [accentTone, setAccentTone] = useState<'indigo' | 'amber' | 'emerald'>('indigo');
  const [copied, setCopied] = useState<boolean>(false);
  const { isDark } = useTheme();

  const getAccentColor = () => {
    switch (accentTone) {
      case 'amber': return '#F59E0B';
      case 'emerald': return '#10B981';
      default: return '#6366F1';
    }
  };

  const generatedCss = `/* Modern High-Fashion CSS Component */
.fashion-glass-card {
  background: ${isDark ? 'rgba(14, 17, 26, 0.75)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(${blurAmount}px);
  -webkit-backdrop-filter: blur(${blurAmount}px);
  border: 1px solid ${isDark ? `rgba(255, 255, 255, ${borderOpacity / 100})` : `rgba(15, 23, 42, ${borderOpacity / 100})`};
  border-radius: ${cardRadius}px;
  box-shadow: 
    ${isDark ? '0 20px 40px -15px rgba(0, 0, 0, 0.7)' : '0 12px 30px -10px rgba(15, 23, 42, 0.08)'},
    inset 0 1px 0 0 rgba(255, 255, 255, ${isDark ? borderOpacity / 100 + 0.05 : 0.9});
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="css-lab" className={`py-20 relative border-t overflow-hidden transition-colors ${
      isDark ? 'bg-[#08090E] border-white/[0.06]' : 'bg-[#FAF8FF] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2 font-semibold ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              <span>CSS Architecture & Styling Engine</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Playground</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-display font-extrabold tracking-tight [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-[#131B2E]'
            }`}>
              Fashion Tech CSS Token Lab
            </h2>
          </div>
          <div className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Interactive demonstration of modern glassmorphism & compositor math
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border space-y-6 ${
            isDark ? 'glass-panel-dark' : 'glass-panel-light'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-500" />
                <span className={`text-sm font-display font-bold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                  Live Token Calibration
                </span>
              </div>
              <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Hardware Accelerated
              </span>
            </div>

            {/* Slider 1: Backdrop Blur */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className={`font-mono font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  backdrop-filter: blur()
                </span>
                <span className={`font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {blurAmount}px
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={blurAmount}
                onChange={(e) => setBlurAmount(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg"
              />
            </div>

            {/* Slider 2: Sub-pixel Border Opacity */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className={`font-mono font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  border-opacity: hairline
                </span>
                <span className={`font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {(borderOpacity / 100).toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="30"
                value={borderOpacity}
                onChange={(e) => setBorderOpacity(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg"
              />
            </div>

            {/* Slider 3: Outer Border Radius */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className={`font-mono font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  border-radius: curvation
                </span>
                <span className={`font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {cardRadius}px
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="36"
                value={cardRadius}
                onChange={(e) => setCardRadius(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg"
              />
            </div>

            {/* Accent Tone Selection */}
            <div className="space-y-2 pt-2">
              <div className={`text-xs font-mono font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Ambient Chromatic Accent
              </div>
              <div className="flex gap-2">
                {(['indigo', 'amber', 'emerald'] as const).map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setAccentTone(tone)}
                    className={`flex-1 py-2 text-xs font-mono capitalize rounded-lg border transition-all cursor-pointer ${
                      accentTone === tone
                        ? 'border-indigo-500 bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 font-bold shadow-xs'
                        : isDark
                          ? 'border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>CSS Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy CSS Snippet</span>
                </>
              )}
            </button>
          </div>

          {/* Live Preview & Code Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Interactive Specimen Card */}
            <div
              style={{
                backdropFilter: `blur(${blurAmount}px)`,
                WebkitBackdropFilter: `blur(${blurAmount}px)`,
                border: isDark 
                  ? `1px solid rgba(255, 255, 255, ${borderOpacity / 100})`
                  : `1px solid rgba(15, 23, 42, ${borderOpacity / 100 + 0.05})`,
                borderRadius: `${cardRadius}px`,
                boxShadow: isDark
                  ? `0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, ${borderOpacity / 100 + 0.05})`
                  : `0 15px 35px -10px rgba(15, 23, 42, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)`,
                background: isDark ? 'rgba(14, 17, 26, 0.72)' : '#FFFFFF',
              }}
              className="p-8 relative overflow-hidden transition-all duration-200"
            >
              <div
                style={{ backgroundColor: getAccentColor() }}
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full"
              />

              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Specimen Preview
                </span>
                <span
                  style={{ color: getAccentColor() }}
                  className="text-xs font-mono font-bold"
                >
                  60 FPS Smooth Settle
                </span>
              </div>

              <h4 className={`text-2xl font-display font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#131B2E]'
              }`}>
                Haute Couture Digital Surface
              </h4>

              <p className={`text-sm leading-relaxed max-w-md ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Reflecting modern CSS trends: composited backdrop filters, sub-pixel hairline boundaries, and single-elevation depth calculations.
              </p>

              <div className={`mt-6 flex items-center gap-3 text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <span>Blur: {blurAmount}px</span>
                <span aria-hidden="true">·</span>
                <span>Radius: {cardRadius}px</span>
                <span aria-hidden="true">·</span>
                <span>Sub-grid aligned</span>
              </div>
            </div>

            {/* Code Output Block */}
            <div className="p-5 rounded-2xl bg-[#0B0F19] border border-white/[0.08] font-mono text-xs text-slate-200 overflow-x-auto shadow-md">
              <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-white/[0.06]">
                <span className="text-indigo-400 font-semibold">output.css</span>
                <span>Vanilla CSS3 / Tailwind 4 Ready</span>
              </div>
              <pre className="text-slate-300 leading-relaxed font-mono">
                {generatedCss}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
