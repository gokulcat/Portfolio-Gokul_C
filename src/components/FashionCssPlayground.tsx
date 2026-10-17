import React, { useState } from 'react';
import { Sliders, Code2, Sparkles, Copy, Check } from 'lucide-react';

export const FashionCssPlayground: React.FC = () => {
  const [blurAmount, setBlurAmount] = useState<number>(16);
  const [borderOpacity, setBorderOpacity] = useState<number>(10);
  const [cardRadius, setCardRadius] = useState<number>(24);
  const [accentTone, setAccentTone] = useState<'indigo' | 'amber' | 'emerald'>('indigo');
  const [copied, setCopied] = useState<boolean>(false);

  const getAccentColor = () => {
    switch (accentTone) {
      case 'amber': return '#F59E0B';
      case 'emerald': return '#10B981';
      default: return '#6366F1';
    }
  };

  const generatedCss = `/* Modern High-Fashion CSS Component */
.fashion-glass-card {
  background: rgba(14, 17, 26, 0.72);
  backdrop-filter: blur(${blurAmount}px);
  -webkit-backdrop-filter: blur(${blurAmount}px);
  border: 1px solid rgba(255, 255, 255, ${borderOpacity / 100});
  border-radius: ${cardRadius}px;
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.7),
    inset 0 1px 0 0 rgba(255, 255, 255, ${borderOpacity / 100 + 0.05});
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 relative bg-[#08090E] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              <span>CSS Architecture & Styling Engine</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Playground</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white [text-wrap:balance]">
              Fashion Tech CSS Token Lab
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Interactive demonstration of modern glassmorphism & compositor math
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="text-sm font-semibold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-400" />
                <span>Adjust Design Tokens</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">Live Reaction</span>
            </div>

            {/* Slider 1: Blur */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Backdrop Blur Intensity</span>
                <span className="font-mono text-indigo-400">{blurAmount}px</span>
              </div>
              <input
                type="range"
                min={0}
                max={32}
                value={blurAmount}
                onChange={(e) => setBlurAmount(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Slider 2: Border Opacity */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Hairline Border Luminance</span>
                <span className="font-mono text-indigo-400">{borderOpacity}%</span>
              </div>
              <input
                type="range"
                min={2}
                max={35}
                value={borderOpacity}
                onChange={(e) => setBorderOpacity(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Slider 3: Outer Radius */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Corner Radius Curvature</span>
                <span className="font-mono text-indigo-400">{cardRadius}px</span>
              </div>
              <input
                type="range"
                min={8}
                max={40}
                value={cardRadius}
                onChange={(e) => setCardRadius(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Accent Palette Selector */}
            <div className="space-y-2 pt-2">
              <span className="text-xs text-slate-300 block">Accent Lighting Palette</span>
              <div className="flex gap-2">
                {(['indigo', 'amber', 'emerald'] as const).map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setAccentTone(tone)}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono capitalize transition-all ${
                      accentTone === tone
                        ? 'bg-white/[0.12] text-white border border-white/[0.2]'
                        : 'bg-white/[0.03] text-slate-400 hover:text-white'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Copy CSS Button */}
            <button
              onClick={handleCopy}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/20"
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
                border: `1px solid rgba(255, 255, 255, ${borderOpacity / 100})`,
                borderRadius: `${cardRadius}px`,
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, ${borderOpacity / 100 + 0.05})`,
                background: 'rgba(14, 17, 26, 0.72)',
              }}
              className="p-8 relative overflow-hidden transition-all duration-200"
            >
              <div
                style={{ backgroundColor: getAccentColor() }}
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full"
              />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400">Specimen Preview</span>
                <span
                  style={{ color: getAccentColor() }}
                  className="text-xs font-mono font-semibold"
                >
                  60 FPS Smooth Settle
                </span>
              </div>

              <h4 className="text-2xl font-display font-bold text-white mb-2">
                Haute Couture Digital Surface
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                Reflecting modern CSS trends: composited backdrop filters, sub-pixel hairline boundaries, and single-elevation depth calculations.
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs font-mono text-slate-400">
                <span>Blur: {blurAmount}px</span>
                <span aria-hidden="true">·</span>
                <span>Radius: {cardRadius}px</span>
                <span aria-hidden="true">·</span>
                <span>Sub-grid aligned</span>
              </div>
            </div>

            {/* Code Output Block */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/[0.08] font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-white/[0.06]">
                <span className="text-indigo-400">output.css</span>
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
