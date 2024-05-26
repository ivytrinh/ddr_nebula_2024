'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { ExploreModalFrame } from "@/app/ExplorePage/explore-frame";
import Modal from '@/app/Components/Modal'

const ExploreLandingSection = () => {
  const [openModalName, setOpenModalName] = useState<string | null>(null);

    const openModal = (name: string) => {
        setOpenModalName(name);
    };

    const closeModal = () => {
        setOpenModalName(null);
    };

  
  return (
    <div className='relative flex flex-col h-screen px-20 py-20'>
      <div className='flex flex-row items-center justify-between text-primary mt-[5vh]'>
        <p className='text-sm'>
          No longer do you have to manually calculate the number of work hours or the market value of your crafts, 
          <span> Nebula can assist you in making the right decisions at the right time.  </span>
        </p>
        <h1 className='text-4xl'>
          Session 4 Group 1
        </h1>
      </div>
      <div className='flex flex-row gap-10 mt-10'>
        <div className='container border border-primary rounded-xl w-[400px] h-[520px] cursor-pointer' onClick={() => openModal("Scraping Data")}>
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
          {openModalName === "Scraping Data" && (
                <Modal 
                    closed={closeModal} 
                    component={<ExploreModalFrame 
                    name="Scraping Data" 
                    description = 'During Week 1, our primary focus was on conducting preliminary research and identifying relevant datasets and resources for our project. We successfully managed to scrape digital art data from anasea.com, providing a promising alternative dataset. However, we encountered challenges due to the limited availability of datasets directly applicable to digital art pricing, which we consider a failure or incomplete attempt in our research endeavors.' 
                    />} 
                />
            )}
        <div className='container border border-primary rounded-xl w-[400px] h-[520px]' onClick={() => openModal("Analyzing Data")}>
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
        {openModalName === "Analyzing Data" && (
                <Modal 
                    closed={closeModal} 
                    component={<ExploreModalFrame 
                    name="Analyzing Data" 
                    description = 'During Week 2, we concentrated on executing the technical aspects of our project and laying the foundation for our analysis. We tested and refined our code for data extraction using Python and Panda library, ensuring it could handle the datasets we identified.. In parallel, we wrote the motivation and theoretical background sections to contextualize our project and its significance.' />} 
                />
            )}

        <div className='container border border-primary rounded-xl w-[400px] h-[520px]' onClick={() => openModal("Publishing Data")}>
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
        {openModalName === "Publishing Data" && (
                <Modal 
                    closed={closeModal} 
                    component={<ExploreModalFrame 
                    name="Publishing Data" 
                    description = 'During week 3, we started to create an informative website using NextJs and Typescript, and decided to host the website on Vercel for free. Our team also started to design our presentation, outlining the structure and key points to cover. ' />} 
                />
            )}
      </div>
    </div>
  )
}

export default ExploreLandingSection