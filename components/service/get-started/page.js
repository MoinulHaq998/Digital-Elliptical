import React from "react";
import Link from "next/link"; 
import ThemeButton from "@/components/ui/ThemeButton";

const GetStarted = ({ heading, description, buttonText, link }) => {
  return (
    <div className='my-12 w-[80%] mx-auto border  py-8 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
        <div className='col-span-1 md:col-span-10'>
          <h2 className='text-xl md:text-3xl font-semibold text-gray-800'>
            {heading}
          </h2>
          <p className='text-base text-gray-600 mt-2'>{description}</p>
        </div>

        <div className='col-span-1 md:col-span-2 flex justify-center md:justify-start'>
          <Link href={link}>
            <ThemeButton>{buttonText}</ThemeButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
