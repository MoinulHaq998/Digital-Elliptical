import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ServiceIndustries= ({ icon, title }) => {
  return (
    <div className='md:px-2 cursor-pointer hover:shadow-xl hover:shadow-gray-400 text-center flex-col rounded-lg flex justify-center gap-4 py-3 md:w-28 w-24 duration-500'>
      
      <div>
        <Image src={icon} alt="" width={60} height={60} priority={1}  className=' object-contain mx-auto' />
      </div>
      {/* <div className="md:h-14 md:w-14 h-12 w-12 rounded-full bg-[#152331] flex items-center justify-center mb-3">
        <Icon icon={icon} className="!text-white md:h-10 md:w-10 h-8 w-8" />
      </div> */}
      <h6 className='md:text-[14px] mt-2 text-gray-600 text-[11px] '>{title}</h6>
    </div>
  );
};

export default ServiceIndustries;
