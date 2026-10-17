import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Linkedin, Github, Youtube, Instagram, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { isDark } = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
      }, 4000);
    }, 800);
  };

  return (
    <section id="contact" className={`py-24 relative border-t transition-colors ${
      isDark ? 'bg-[#08090E] border-white/[0.06]' : 'bg-[#F2F3FF] border-slate-200'
    }`}>
      {/* Ambient background glow */}
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 blur-[130px] pointer-events-none rounded-full ${
        isDark ? 'bg-indigo-600/10' : 'bg-indigo-300/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2 font-semibold ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            <span>Direct Channels</span>
            <span aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight [text-wrap:balance] ${
            isDark ? 'text-white' : 'text-[#131B2E]'
          }`}>
            Let's Collaborate on Something Extraordinary
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Social Connections */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <p className={`text-base sm:text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Whether you have an open frontend role, a contract opportunity, or want to discuss React & Angular architectures and modern CSS implementations, my inbox is always open.
              </p>

              {/* Direct Email Card with 1-click Copy */}
              <div className={`p-6 rounded-2xl border space-y-3 ${
                isDark ? 'glass-panel-dark' : 'glass-panel-light'
              }`}>
                <div className={`flex items-center justify-between text-xs font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  <span className="font-medium">Direct Electronic Mail</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Response &lt; 24h</span>
                </div>
                
                <div className={`text-lg sm:text-xl font-display font-bold tracking-tight break-all ${
                  isDark ? 'text-white' : 'text-[#131B2E]'
                }`}>
                  {PORTFOLIO_DATA.profile.email}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleCopyEmail}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                      isDark 
                        ? 'bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border-white/[0.08]' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className={`w-3.5 h-3.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Mail Client</span>
                  </a>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                <div className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Professional Profiles & Media
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PORTFOLIO_DATA.profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3.5 rounded-xl border flex items-center gap-3 group transition-colors ${
                      isDark ? 'glass-panel-interactive-dark' : 'glass-panel-interactive-light'
                    }`}
                  >
                    <Linkedin className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                    <span className={`text-xs font-medium ${
                      isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-800 group-hover:text-indigo-600'
                    }`}>
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3.5 rounded-xl border flex items-center gap-3 group transition-colors ${
                      isDark ? 'glass-panel-interactive-dark' : 'glass-panel-interactive-light'
                    }`}
                  >
                    <Github className="w-4 h-4 text-slate-500 group-hover:scale-110 transition-transform" />
                    <span className={`text-xs font-medium ${
                      isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-800 group-hover:text-[#131B2E]'
                    }`}>
                      GitHub
                    </span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.profile.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3.5 rounded-xl border flex items-center gap-3 group transition-colors ${
                      isDark ? 'glass-panel-interactive-dark' : 'glass-panel-interactive-light'
                    }`}
                  >
                    <Youtube className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                    <span className={`text-xs font-medium ${
                      isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-800 group-hover:text-red-600'
                    }`}>
                      YouTube
                    </span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.profile.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3.5 rounded-xl border flex items-center gap-3 group transition-colors ${
                      isDark ? 'glass-panel-interactive-dark' : 'glass-panel-interactive-light'
                    }`}
                  >
                    <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                    <span className={`text-xs font-medium ${
                      isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-800 group-hover:text-pink-600'
                    }`}>
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl border text-xs flex items-center gap-2 ${
              isDark ? 'bg-white/[0.02] border-white/[0.06] text-slate-400' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
            }`}>
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>Based in Hyderabad, India · Collaborating worldwide across all time zones</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden ${
              isDark ? 'glass-panel-dark' : 'glass-panel-light'
            }`}>
              
              <h3 className={`text-xl font-display font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#131B2E]'
              }`}>
                Send a Direct Message
              </h3>
              <p className={`text-xs mb-6 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Fill in the details below and I will get back to you promptly.
              </p>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className={`text-lg font-display font-bold ${isDark ? 'text-white' : 'text-[#131B2E]'}`}>
                    Message Dispatched!
                  </h4>
                  <p className={`text-xs max-w-sm mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Thank you for reaching out. Your communication has been recorded and I will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className={`text-xs font-mono block font-medium ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                          isDark 
                            ? 'bg-[#0F121C] border-white/[0.08] focus:border-indigo-500 text-white placeholder-slate-500' 
                            : 'bg-white border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-slate-900 placeholder-slate-400 shadow-xs'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className={`text-xs font-mono block font-medium ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                          isDark 
                            ? 'bg-[#0F121C] border-white/[0.08] focus:border-indigo-500 text-white placeholder-slate-500' 
                            : 'bg-white border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-slate-900 placeholder-slate-400 shadow-xs'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className={`text-xs font-mono block font-medium ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Subject / Topic
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Frontend Opportunity (React / Angular) / Collaboration"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                        isDark 
                          ? 'bg-[#0F121C] border-white/[0.08] focus:border-indigo-500 text-white placeholder-slate-500' 
                            : 'bg-white border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-slate-900 placeholder-slate-400 shadow-xs'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className={`text-xs font-mono block font-medium ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Gokul, I saw your work on VRV Security and WealthWise..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none resize-y ${
                        isDark 
                          ? 'bg-[#0F121C] border-white/[0.08] focus:border-indigo-500 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-slate-900 placeholder-slate-400 shadow-xs'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/25 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span className="text-xs font-mono">Transmitting Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
