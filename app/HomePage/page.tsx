import React from 'react'
import HomeLandingSection from './home-landing-section'
import AboutLandingSection from '../AboutPage/about-landing-section'
import ExplorelandingSection from '../ExplorePage/explore-landing-section'

const HomePage = () => {
  return (
    <div>
        <HomeLandingSection/>
        <AboutLandingSection/>
        <ExplorelandingSection/>
    </div>
  )
}

export default HomePage