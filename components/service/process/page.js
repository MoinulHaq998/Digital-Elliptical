'use client'
import {tabsProcess,tabsDataProcess} from '@/contant/data'
import React, { useState }  from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState(tabsProcess[0].tab);

  return (
    <div>
      <div className='my-20 container '>
        <div className='text-center md:px-10 px-3'>
          <h1 className='sm:text-3xl text-2xl text-[#212529] font-semibold mb-2'>
            Our Strategic App Development Process
          </h1>
          <p className='text-gray-800 md:text-base text-sm'>
            We offer three different flexible engagement models that can help
            you take complete control of Mobile App development process. Each of
            our model leverages a result-oriented development process.
          </p>
        </div>
        <div className='mt-10'>
          <div className='flex items-center sm:justify-center text-lg mb-8'>
            {tabsProcess.map((tab, index) => (
              <button
                key={index}
                className={`${
                  activeTab === tab.tab
                    ? "border-b-[3px] border-black"
                    : "border-b-[3px] border-gray-300"
                } cursor-pointer group md:px-8  relative py-3 md:text-start text-center pb-2 mb-5 md:mb-0 md:w-fit w-[33%] `}
                onClick={() => setActiveTab(tab.tab)}
              >
                <span className='relative z-10 md:text-base text-xs leading-6 text-wrap'>
                  {tab.name}
                </span>
                <span className='z-10 relative uppercase text-lg text-black group-hover:text-white duration-300'>
                  {tab.spanText ? tab.spanText : ""}
                </span>
              </button>
            ))}
          </div>

          <div className='mt-2'>
            <div className='grid grid-cols-12 gap-4 '>
              {tabsDataProcess[activeTab]?.map((item, index) => (
                <div
                  className='col-span-12 sm:col-span-6 md:col-span-4  mb-12'
                  key={index}
                >
                  <div className='block md:flex items-start gap-4 sm:px-10 px-2  bg-white'>
                    <div>
                      <h1 className='text-gray-300 text-4xl md:text-6xl font-bold mb-2'>
                        {item.no}
                      </h1>
                    </div>
                    <div>
                      <h2 className='text-[#212529] text-xl font-semibold mb-2'>
                        {item.title}
                      </h2>
                      <p className='text-gray-600 text-sm'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
