"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { apps } from "@/contant/data";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      {/* Header Section */}
      <div className='w-full h-[30vh] flex justify-center items-center font-medium bg-[#152331]'>
        <div>
          <h1 className='text-center text-white text-[60px]'>
            Digital Elliptical Apps
          </h1>
          <h4 className='text-center text-white text-[20px]'>
            Our Apps, Your Solutions
          </h4>
        </div>
      </div>

      {/* Apps Section */}
      <div className='w-full flex justify-center mt-8 mb-10'>
        <div className='w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {apps.map((app, idx) => (
            <div
              onClick={() => router.push(`${app.link}`)}
              key={idx}
              className='p-3 bg-[#F3F3F3] cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow'
            >
              {/* Card Banner */}
              <div className='w-full h-[150px]'>
                <Image
                  src={app.cardBannar}
                  alt="main-image"
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>

              {/* Card Content */}
              <div className='flex pt-4 gap-2'>
                {/* Icon */}
                <div className='w-[52px] h-[52px] rounded-lg bg-sky-950'>
                  <Image
                    src={app.cardIcon}
                    alt="icon-image"
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className='text-[16px] text-[#4b4a4a]  hover:underline font-semibold'>
                    {app.name}
                  </h4>
                  <h6 className='text-[#4b4a4a] text-[14px] font-medium leading-[16.8px]'>
                    {app.title}
                  </h6>
                  <div className='flex gap-1 items-center'>
                    <span className='text-[14px] text-[#4b4a4a]'>
                      0.{app.rating}
                    </span>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="ic:round-star"
                          className={`text-[20px] ${
                            i < app.rating ? "text-[#F6D439]" : "text-[#4B4A4A]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
