import React, { useState } from 'react';
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

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [activeAccent, setActiveAccent] = useState<'indigo' | 'amber' | 'emerald'>('indigo');

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#08090E] text-[#E2E8F0] selection:bg-indigo-600 selection:text-white theme-${activeAccent}`}>
      {/* Top Bar Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        activeAccent={activeAccent}
        onSelectAccent={(accent) => setActiveAccent(accent as any)}
      />

      {/* Main Content */}
      <main>
        {/* Split-Screen Hero with Gokul's portrait & Bio */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onExploreProjects={scrollToProjects}
        />

        {/* Endless Runway Marquee Ribbon */}
        <MarqueeStrip />

        {/* Selected Works Bento Grid (All Projects Preserved) */}
        <SelectedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Skills & Technical Architecture */}
        <SkillsSection />

        {/* About & Collaboration Philosophy */}
        <AboutSection
          onOpenResume={() => setResumeOpen(true)}
        />

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
