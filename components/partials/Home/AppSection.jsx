import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { AllTabData } from "@/contant/data";
import Image from "next/image";
const AppSection = () => {
  // const [activeTab, setActiveTab] = useState('Tab1');

  const tabs = [
    { name: "MOBILE", tab: "mobile" },
    { name: "FRONTEND", tab: "frontend" },
    { name: "DATABASE", tab: "database" },
    { name: "BACKEND", tab: "backend" },
    { name: "CMS", tab: "cms" },
    { name: "INFRA AND DEVOPS", tab: "infra" },
    
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].tab);

  return (
    <div className=''>
      <h3 className='text-2xl md:text-3xl text-[#212529] font-bold text-center mb-4 uppercase'>
        Build your apps for any platform
      </h3>
      <div className='mb-6 py-6'>
        <div className='p-6 mb-6 container lg:px-20'>
          <div className='flex flex-wrap gap-1 items-center justify-center border-b-[2px] border-gray-300'>
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className={` py-2 mb-4 md:px-12 px-6 text-center relative app-btn text-base font-semibold  ${
                  activeTab === tab.tab ? "active  text-white" : "text-[#212529]"
                }`}
                onClick={() => setActiveTab(tab.tab)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className='mt-4'>
            {AllTabData[activeTab].length > 0 ? (
              <div className='lg:px-32 md:px-12 px-2 mt-12'>
                <div className='flex items-start justify-center md:gap-8 h-full gap-4 flex-wrap'>
                  {AllTabData[activeTab].map((item, index) => (
                   <div
                   key={index}
                   className="md:px-2 cursor-pointer hover:shadow-xl hover:shadow-gray-400 text-center flex-col rounded-lg flex justify-center gap-4 py-3 md:w-28 w-24 duration-500"
                 >
                   <div className='md:px-1 '>
                     <Image
                       src={item.icon}
                       alt={item.name || ''}
                       width={70}
                       height={80}
                       priority={1}
                       className='w-12 h-12  md:w-20 md:h-16 lg:w-24 lg:h-18 object-contain mx-auto'
                     />
                   </div>
                   <h6 className=' text-xs sm:text-sm text-gray-600'>{item.name}</h6>
                 </div>
                 
                  ))}
                </div>
              </div>
            ) : (
              <p className='text-gray-500'>No data available for this tab.</p>
            )}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-12  lg:justify-between md:justify-around   container flex-wrap  md:px-32 md:mt-10 mt-6 mb-16'>
        <div className='flex items-start   flex-col'>
          <h3 className='flex items-center justify-around gap-2 text-[#212529]  md:text-[28.8px] text-2xl mb-1 font-bold'>
            112{" "}
            <Icon
              icon='gravity-ui:plus'
              width='24'
              height='24'
              className='!font-extrabold md:mt-1 mt-0'
            />
          </h3>
          <h6 className='md:text-[20px]  text-center text-2xl text-primary'>
            Engineers
          </h6>
        </div>

        <div className='flex items-center justify-center flex-col'>
          <h3 className='flex items-center gap-2 text-[#212529] md:text-[28.8px]  text-2xl mb-1 font-bold'>
            520{" "}
            <Icon
              icon='gravity-ui:plus'
              width='24'
              height='24'
              className='!font-bold'
            />
          </h3>
          <h4 className='md:text-[20px]  text-center text-2xl   text-primary'>
            Project Delivered to Clients
          </h4>
        </div>

        <div className='flex items-center justify-center  flex-col'>
          <h4 className='flex items-center  gap-2 text-[#212529] md:text-[28.8px]  text-2xl mb-1 font-bold'>
            655{" "}
            <Icon
              icon='gravity-ui:plus'
              width='24'
              height='24'
              className='font-bold'
            />
          </h4>
          <h4 className='md:text-[20px]  text-center text-2xl text-primary'>
            Customers worldwide
          </h4>
        </div>

        <div className='min-w-32 max-w-72 text-center count_head lg:px-8 lg:py-6 px-8 py-4  text-white'>
          <h4 className='md:text-[30px]  text-2xl font-bold leading-[45px] text-center'>
            Inspired By Our Vision
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AppSection;