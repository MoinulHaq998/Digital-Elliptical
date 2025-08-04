import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

const Banner = () => {
  const [scrollY, setScrollY] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 15) {
      setScrollY(true); 
    } else {
      setScrollY(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main-page h-[100vh] '>

      <div className={`relative duration-700 z-[-10] bg-primary h-full ${scrollY ? 'w-[100%] ' : 'w-[50%]'}`}>
        
        <div className={`absolute top-40 lg:mt-2 mt-24 lg:w-[600px] w-[80%]  duration-700 ${scrollY ? "left-[30px]" : "left-[-600px]"}`}>
          <span className='fixed z-[-5] top-40 lg:w-[600px] w-[80%]'>
          <h1 className='flex justify-start items-center gap-2 lg:text-[35px] text-[25px] leading-[40px] text-white font-[400]'>
            <Icon
                icon='fa6-solid:wave-square'
                className='!text-black lg:w-[35px] w-[23px]'
              />
            <span> Since 2019</span>
          </h1>
          <h1 className='flex flex-col lg:text-[35px] text:[25px] lg:leading-[42px] leading-[25px] font-[600]'>
            <span>The World’s Leading Provider of Digital Transformation Solutions</span>
          </h1>
          <h3 className='flex flex-col lg:text-[16px] text-[12px] mt-3 lg:leading-[25px] leading-[15px] text-white '>
            <span>We, Digital Elliptical, are web, mobile, and enterprise development specialists who design and create solutions to keep your company future-proof in an ever-changing environment.</span>
          </h3>
          </span>
        </div>
        <div className={`absolute flex w-full lg:top-40 top-12 transition-all duration-700 ease-in-out 
          ${ scrollY ? "justify-end" : "md:left-[60%] left-[50%]" }`} >
          <h1 className='fixed z-[-5] flex flex-col lg:text-[130px] text-[#000] text-[80px] lg:leading-[105px] leading-[80px] font-[700]'>
            <span>HE</span>
            <span>LLO.</span>
          </h1>
        </div>
        
        <div className='absolute bottom-20 right-0 text-white '><p className='transform -rotate-90 font-bold'> ← scroll</p></div>
      </div>
      
    </div>
  );
};

export default Banner;
