import React from 'react'
import Image from 'next/image'

const ExplorelandingSection = () => {
  return (
    <div className='relative flex flex-col h-screen px-20 py-20'>
      <div className='flex flex-row items-center justify-between text-primary mt-[5vh]'>
        <p className='text-sm'>
          No longer do you have to manually calculate the number of work hours or the market value of your crafts, 
          <span> Nebula can assist you in making the right decisions at the right time.  </span>
        </p>
        <h1 className='text-5xl'>
          Session 4 Group 4
        </h1>
      </div>
      <div className='flex flex-row gap-10 mt-10'>
        <div className='container border border-primary rounded-xl w-[400px] h-[520px] '>
          <Image
            src="/background_2.svg"
            alt="Background 2"
            width={400}
            height={520}
            className='rounded-xl'
          />
          <h2 className='text-primary text-3xl px-5 items-end mt-[28vh]'> 
            Scraping Data 
          </h2>
        </div>
        <div className='container border border-primary rounded-xl w-[400px] h-[520px]'>
          <Image
              src="/background_2.svg"
              alt="Background 2"
              width={400}
              height={520}
              className='rounded-xl'
          />
          <h2 className='text-primary text-3xl px-5 items-end mt-[28vh]'> 
            Analyzing Data 
          </h2>
        </div>
        <div className='container border border-primary rounded-xl w-[400px] h-[520px]'>
          <Image
              src="/background_2.svg"
              alt="Background 2"
              width={400}
              height={520}
              className='rounded-xl'
          />
          <h2 className='text-primary text-3xl px-5 items-end mt-[28vh]'> 
            Publishing Data 
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ExplorelandingSection