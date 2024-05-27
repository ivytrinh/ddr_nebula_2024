'use client';

import Image from 'next/image'
import React from 'react'

const HomeLandingSection = () => {
  return (
    <div className="relative w-full h-screen px-10">
      <Image
                src="/background_1.svg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                style={{ zIndex: -1 }}
            />
      <div className="absolute left-0 right-0 z-10 flex flex-col items-center justify-center align-center">
        <h1 className='text-primary text-5xl lg:text-8xl mt-[65vh] ml-[5vh]' style={{ letterSpacing: '0.5em' }}>
          NEBULA
        </h1>
        <p className='text-primary text-sm lg:text-md mt-[3vh]'>
          An innovative tool that provides predictive price models for digital artists.
        </p>
      </div>
    </div>
  );
}

export default HomeLandingSection;
