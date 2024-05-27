
'use client'

import DemoLandingSection from './demo-landing-section'
import React, { useRef } from 'react';
import NavBar from '@/app/Features/NavBar';


const DemoPage: React.FC = () => {
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
        <DemoLandingSection/>
    </div>
  )
}

export default DemoPage