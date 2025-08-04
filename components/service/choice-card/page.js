import React from "react";
import Image from "next/image";

const ChoiceCard = ({ img, title, desc }) => {
  return (
    <div className='col-span-1 mb-10 flex gap-3 py-8 rounded-xl px-4 min-h-44 group cursor-pointer hover:shadow-xl'>
      <div className='md:w-[15%] w-[10%]'>
        <Image
          src={img}
          alt="icon"
          width={2000}
          height={2000}
          className='h-10 w-auto transition-transform duration-700 group-hover:transform group-hover:rotate-[360deg]'
        />
      </div>
      <div className='w-[85%]'>
        <h3 className='md:text-1xl leading-[22px] text-[#212529] text-lg font-bold'>{title}</h3>
        <p className='mt-1 text-gray-500 lg:text-[15px] md:text-[13px] text-[12px]'>{desc}</p>
      </div>
    </div>
  );
};

export default ChoiceCard;
