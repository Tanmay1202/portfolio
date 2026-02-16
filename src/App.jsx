import { useState, useEffect } from 'react';
import SystemLoader from './components/SystemLoader';
import SystemNav from './components/SystemNav';
import IntroSection from './components/sections/IntroSection';
import WorkSection from './components/sections/WorkSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import CustomCursor from './components/CustomCursor';
import './styles/system.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMode, setCurrentMode] = useState('init');

  useEffect(() => {
    // Intersection Observer for section detection
    const sections = document.querySelectorAll('section[data-mode]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentMode(entry.target.getAttribute('data-mode'));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isLoading]);

  const handleModeChange = (mode) => {
    const section = document.getElementById(mode);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SystemLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="app">
      <CustomCursor />
      <SystemNav currentMode={currentMode} onModeChange={handleModeChange} />

      <main className={`mode-${currentMode}`}>
        <IntroSection />
        <WorkSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
