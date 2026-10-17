import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { SelectedProjects } from './components/SelectedProjects';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FashionCssPlayground } from './components/FashionCssPlayground';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const { isDark } = useTheme();

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#08090E] text-[#E2E8F0]' : 'bg-[#FAF8FF] text-[#131B2E]'
    } selection:bg-indigo-600 selection:text-white`}>
      {/* Top Bar Navigation with Sun / Crescent Moon Theme Toggle */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Split-Screen Hero with Gokul's portrait & Bio */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onExploreProjects={scrollToProjects}
        />

        {/* Endless Runway Marquee Ribbon */}
        <MarqueeStrip />

        {/* Selected Works Bento Grid */}
        <SelectedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* About & Collaboration Philosophy */}
        <AboutSection
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Skills & Technical Architecture */}
        <SkillsSection />

        {/* Career Milestone Timeline */}
        <ExperienceTimeline />

        {/* Interactive Fashion CSS Token Lab */}
        <FashionCssPlayground />

        {/* Contact & Inquiry Channel */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study & Sandbox Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
