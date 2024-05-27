'use client'

import HomeLandingSection from './home-landing-section'
import AboutLandingSection from '@/app/AboutPage/about-landing-section'
import ExploreLandingSection from '@/app/ExplorePage/explore-landing-section'
import React, { useRef } from 'react';
import NavBar from '@/app/Features/NavBar';


const HomePage: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case 'HomePage':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'AboutPage':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'ExplorePage':
        exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <NavBar scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <HomeLandingSection />
      </div>
      <div ref={aboutRef}>
        <AboutLandingSection />
      </div>
      <div ref={exploreRef}>
        <ExploreLandingSection />
      </div>
    </div>
  );
};

export default HomePage;