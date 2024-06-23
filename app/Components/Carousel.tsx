'use client'

import React, { useRef } from 'react';

interface CarouselFramesProps {
    frames: React.ReactNode[];
}

export const Carousel: React.FC<CarouselFramesProps> = ({ frames }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
        };

    return (
        <div className='flex flex-row items-center'>
            
            <button 
                onClick={scrollLeft} 
                className="hidden md:block bg-transparent hover:border-2 hover:border-secondary text-primary px-2 py-1 mx-2 text-4xl h-[6vh] w-[6vh] rounded-md font-bold cursor-pointer">
                {"<"}
            </button>
        
            <div ref={carouselRef} className="flex overflow-x-auto overflow-hidden scrollbar-hide whitespace-nowrap w-[150vw]">
                {frames.map((frame, index) => (
                    <div key={index} className="bg-secondary flex-none mx-[2vw] item-container rounded-2xl">
                        {frame}
                    </div>
                ))}
            </div>

            <button 
                onClick={scrollRight} 
                className="hidden md:block bg-transparent hover:border-2 hover:border-secondary text-primary px-2 py-1 mx-2 h-[6vh] w-[6vh] rounded-md text-4xl font-bold cursor-pointer">
                {">"}
            </button>

            <style jsx>{`
                .item-container {
                    flex-basis: calc(100% / 5 - 2vw);
                }
                @media (max-width: 768px) {
                    .item-container {
                        flex-basis: calc(100% / 3 - 2vw);
                    }
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                  }
                  .scrollbar-hide {
                      -ms-overflow-style: none;  /* IE and Edge */
                      scrollbar-width: none;  /* Firefox */
                  }
              `}</style>
          </div>
      );
  }