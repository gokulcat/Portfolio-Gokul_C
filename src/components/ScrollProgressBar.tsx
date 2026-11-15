import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const { isDark } = useTheme();

  useEffect(() => {
    let rafId: number | null = null;

    const updateProgress = () => {
      rafId = null;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(ratio);
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page reading scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      className={`fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none ${
        isDark ? 'bg-white/[0.04]' : 'bg-slate-900/[0.05]'
      }`}
    >
      <div
        className="h-full w-full origin-left bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 shadow-[0_0_8px_rgba(29,78,216,0.5)] transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
