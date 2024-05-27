'use client'

import React from 'react'
import Image from 'next/image'


const AboutLandingSection = () => {
  return (
    <div className="relative w-full h-screen px-20">
      <Image
          src="/background_2.svg"
          alt="Background 2"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: -1 }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center w-[800px] text-center">
          <p className="text-primary text-sm">
            Nebula leverages data analytics and machine learning algorithms to empower digital artists with pricing their artwork 
            and maximize their earning potential in the digital art market.
          </p>
          <h1 className="text-primary text-3xl lg:text-5xl sm:mt-5 mt-10" style={{ letterSpacing: '0.2em' }}>
            First Step Towards Shaping an Equitable Zeitgest Movement
          </h1>
          <p className="text-primary text-sm sm:mt-5 mt-10">
            No longer do you have to manually calculate the number of work hours or the market value of your crafts, 
            Nebula can assist you in making the right decisions at the right time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutLandingSection