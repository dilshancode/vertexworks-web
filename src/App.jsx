import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import ServiceHighlights from './components/ServiceHighlights';
import FeaturedProjects from './components/FeaturedProjects';
import GithubShowcase from './components/GithubShowcase';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ProjectEstimator from './components/ProjectEstimator';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-on-surface">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <ServiceHighlights />
        <FeaturedProjects />
        <GithubShowcase />
        <Testimonials />
        <Process />
        <ProjectEstimator />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
