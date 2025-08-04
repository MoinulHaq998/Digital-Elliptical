"use client";

import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";
import Banner from "@/assets/google-store/building-construction/big.png";
import DetailImg1 from '@/assets/google-store/building-construction/detail/1.png'
import DetailImg2 from '@/assets/google-store/building-construction/detail/2.png'
import DetailImg3 from '@/assets/google-store/building-construction/detail/3.png'
import DetailImg4 from '@/assets/google-store/building-construction/detail/4.png'
import DetailImg5 from '@/assets/google-store/building-construction/detail/5.png'

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { apps } from "@/contant/data";
export default function Page() {
  const [linkCopied, setLinkCopied] = useState(false);
  const Link = "https://www.digitalelliptical.com/apps/travellingtour";

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(Link);
      setLinkCopied(true);
      setTimeout(() => {
        setLinkCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };


  const slideImages=[
    {detailImg:DetailImg1},
    {detailImg:DetailImg2},
    {detailImg:DetailImg3},
    {detailImg:DetailImg4},
    {detailImg:DetailImg5},

  ]
  const swiperRef = useRef(null);
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };


  return (
    <div className="w-full h-full mb-10 mt-4">

        <div className="w-full h-auto flex lg:flex-row flex-col-reverse mt-10 lg:p-0 p-4">
        {/* Left Section */}
        <div className="lg:w-[50%] w-full h-full flex lg:justify-start md:justify-center  justify-center mt-2 lg:ml-28 lg:px-0">
          <div className="lg:w-[474px] md:w-[340px] w-[390px]">
            <h1 className="lg:text-[48px] text-nowrap md:text-[30px] text-[30px] text-[#212529] lg:font-semibold md:font-semibold font-normal leading-[57.6px]">
              Building Construction
            </h1>
            <h4 className="lg:text-[16px] md:text-[15px] text-[#212529] md:tracking-[1px] lg::tracking-[0px] tracking-[1px] lg:font-semibold md:font-semibold font-normal leading-[27px]">
              Digital Elliptical Pvt Ltd. Platform Apps
            </h4>
            <p className="text-[#212529] lg:text-[14px] md:text-[14px] text-[12px] leading-[21px]">
              For The Portfolio Purpose Only
            </p>

            {/* Stats */}
            <div className="mt-8  w-full flex items-center lg:gap-4 md:gap-4 gap-[5px]">
              <div className="flex flex-col items-center">
                <div className="flex gap-1">
                  <span className="text-[#212529] lg:text-[14px] md:text-[14px] text-[12px]">5.0</span>
                  <Icon
                    icon="ic:round-star"
                    className="text-[20px] text-[#F6D439]"
                  />
                </div>
                <span className="lg:text-[14px] md:text-[14px] text-[12px] text-[#212529] leading-[21px] tracking-[1px]">
                  Reviews
                </span>
              </div>

              <span className="w-[2px] h-[5vh] bg-gray-200"></span>

              <div className="flex flex-col items-center">
                <span className="text-[#212529] text-center lg:text-[14px] md:text-[14px] text-[12px]">426</span>
                <span className="lg:text-[14px] md:text-[14px] text-[12px] text-[#212529] leading-[21px] tracking-[1px]">
                  Views
                </span>
              </div>

              <span className="w-[2px] h-[5vh] bg-gray-200"></span>

              <div className="flex flex-col items-center">
                <span className="text-white rounded-full p-[2px] bg-[#07df5a] text-center">
                  <Icon
                    icon="ic:round-check"
                    className="text-white text-[12px]"
                  />
                </span>
                <span className="lg:text-[14px] md:text-[14px] text-[12px]  text-nowrap text-[#212529] leading-[21px] tracking-[1px]">
                  Custom Code
                </span>
              </div>

              <span className="w-[2px] h-[5vh] bg-gray-200"></span>

              <div className="flex flex-col items-center">
                <span className="text-white rounded-full p-[2px] bg-[#212529] text-center">
                  <Icon
                    icon="entypo:info"
                    className="text-white text-[15px] p-[3px]"
                  />
                </span>{" "}
                <span className="lg:text-[14px] md:text-[14px] text-[12px] text-[#212529] text-nowrap leading-[21px] tracking-[1px]">
                  App Info
                </span>
              </div>
              <span className="w-[2px] h-[5vh] bg-gray-200"></span>
            </div>

            <span className="w-[2px] h-[5vh] bg-gray-200 ml-2"></span>

            {/* Buttons */}
            <div className="lg:mt-2 md:mt-10 mt-4 flex items-center gap-8">
              <button className="bg-[#2C5F7D] outline-none border-none lg:px-14 md:px-13 px-4 lg:py-[12px] md:py-[10px] py-[4px] rounded-md text-white tracking-[2px] text-[16px] transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                Download
              </button>
              <button
                onClick={handleShare}
                className="text-[16px] text-[#212529] flex gap-2 items-center"
              >
                <Icon icon="ri:share-line" width={23} />
                Share
              </button>
            </div>

            {/* Link Copied Message */}
            {linkCopied && (
              <div className="mt-4 text-[#198754] text-[16px]">
                Link Is Copied!
              </div>
            )}

            {/* Device Info */}
            <div className="flex items-center gap-2 mt-3 font-medium">
              <Icon icon="lucide:laptop" width={20} />
              <span className="text-[#212529] mt-1 text-[14px]">
                This app is Available for Your Device
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[50%] w-full h-full flex  lg:justify-start md:justify-center justify-center lg:ml-0 -ml-1 p- items-center">
          <div className="lg:w-[474px] md:w-[340px] w-[390px] lg:h-[290px]  md:h-[180px] ">
            <Image
              src={Banner}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
          </div>
        </div>
      </div>

      <>
      <div className="flex justify-center">

{/* Parent Container */}
<div className="w-[85%] flex lg:flex-row flex-col mt-10">

{/* Left Section */}
<div className="lg:w-[60%] w-[100%]">


{/* Sliders */}
<div className="w-[100%] h-[400px]   relative">
  <Swiper
    ref={swiperRef}
    pagination={{
      clickable: true,
    }}
    slidesPerView={4}
    loop={true}
    autoplay={{
      disableOnInteraction: false,
    }}
    modules={[Pagination]}
    className="w-full h-full"
  >
    {slideImages.map((detail, idx) => (
      <SwiperSlide key={idx} className="flex justify-center items-center">
        <Image
          className="w-[170px] h-auto"
          src={detail.detailImg}
          alt={`Slide Image ${idx + 1}`}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Previous Button */}
  <button
    onClick={handlePrev}
    className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2C5F7D] text-white shadow-lg rounded-full flex items-center justify-center z-10 "
    aria-label="Previous Slide"
  >
    <Icon icon='mingcute:arrow-left-fill' />
  </button>

  {/* Next Button */}
  <button
    onClick={handleNext}
    className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2C5F7D] text-white shadow-lg rounded-full flex items-center justify-center z-10 "
    aria-label="Next Slide"
  >
    <Icon icon='mingcute:arrow-right-fill' />
  </button>
</div>

  {/* discription Section*/}
<div className="mt-2">

  <div>
  <div className="w-full flex justify-between">
    <h1 className="lg:text-[24px] text-[20px] text-[#212529] font-semibold leading-[28px]">About This App</h1>
    <span><Icon icon='ep:right' width={20}/></span>
  </div>
  <p className="leading-[24px] lg:text-[16px] text-[13px] mt-4 text-[#212529]">Discover the world with "Travelling Tour" – our sleek portfolio app designed for travel enthusiasts. Explore destinations, plan trips, and share experiences. Seamlessly navigate through captivating itineraries and stunning visuals. Your adventure begins here!</p>
</div>

<div className="mt-10">
    <h1 className="lg:text-[24px] text-[20px] text-[#212529] font-semibold leading-[28px]">Data Safety
    </h1>
  <p className="leading-[24px] lg:text-[16px]  text-[13px] mt-2  text-[#212529]">Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.

</p>
</div>

<div className="w-full border mt-8">
  <div className="flex lg:w-[60%] w-[100%] p-4 items-strat gap-2"><span><Icon icon='ic:outline-share'  width={20} className="text-[#212529]"/></span> <h6 className="text-[#212529] text-[14px] leading-[16.8px] font-medium">This app may share these data types with third parties
  Personal info and Device or other IDs</h6></div>
  <div className="flex lg:w-[60%] w-[100%] p-4 items-strat gap-2"><span><Icon icon='bx:cloud-upload' width={20} className="text-[#212529]"/></span> <h6 className="text-[#212529] text-[14px] leading-[16.8px] font-medium">This app may collect these data types
  Location, Personal info and 12 others</h6></div>
  <div className="flex lg:w-[60%] w-[100%] p-4 items-strat gap-2"><span><Icon icon='material-symbols:lock-outline-sharp' width={20} className="text-[#212529]"/></span> <h6 className="text-[#212529] text-[14px] leading-[16.8px] font-medium">Data is encrypted in transit</h6></div>
  <div className="flex lg:w-[60%] w-[100%] p-4 items-strat gap-2"><span><Icon icon='fluent:delete-24-regular' width={20} className="text-[#212529]"/></span> <h6 className="text-[#212529] text-[14px] leading-[16.8px] font-medium">You can request that data be deleted</h6></div>
</div>

  </div>

</div>

    {/* Right Section */}
<div className="w-[40%] lg:ml-12 ml-0 lg:mt-0 mt-4">

{/* App Support */}
<div>


        <div className="flex items-center gap-2 ">
        <h1 className="text-[#212529] text-[22px] leading-[26px] font-semibold text-nowrap">App Support</h1>
        <span className="hover:bg-gray-100 p-1 rounded-full  cursor-pointer">
        <Icon icon='icon-park-outline:down' className="text-[#212529] text-[22px] font-semibold" />
        </span>
        </div>

        <div className="w-[300px] rounded-lg hover:bg-gray-100 ease-linear transition-all cursor-pointer  p-2 flex items-start gap-3 mt-6">
       <div className="mt-2">
        <Icon icon='mdi:world' className="text-[20px]" />
       </div>
          <div className="">
            <h3 className="text-[20px] leading-[24px] font-medium">Website</h3>
            <h6 className="leading-[24px] text-[16px]">digitalelliptical.com</h6>
          </div>
        </div>

        <div className="w-[300px] mt-2 rounded-lg  hover:bg-gray-100 ease-linear transition-all cursor-pointer  p-2 flex items-start gap-3 ">
       <div className="mt-2">
        <Icon icon='material-symbols:mail-rounded' className="text-[20px]" />
       </div>
          <div className="">
            <h3 className="text-[20px] leading-[24px] font-medium">Support Email</h3>
            <h6 className="leading-[24px] text-[16px]">hr@digitalelliptical.com</h6>
          </div>
        </div>

        
        <div className="w-[300px] mt-2 rounded-lg hover:bg-gray-100 ease-linear transition-all cursor-pointer  p-2 flex items-start gap-3 ">
       <div className="mt-2">
        <Icon icon='material-symbols:my-location-rounded' className="text-[20px]" />
       </div>
          <div className="">
            <h3 className="text-[20px] leading-[24px] font-medium">Adress</h3>
            <h6 className="leading-[24px] text-[16px]">Farah Heights Gulberg Block 10 FB Area. Karachi, Pakistan.</h6>
          </div>
        </div>


 
        <div className="w-[300px] mt-2 rounded-lg hover:bg-gray-100 ease-linear transition-all cursor-pointer  p-2 flex items-start gap-3 ">
       <div className="">
        <Icon icon='wpf:security-checked' className="text-[20px]" />
       </div>
          <div className="">
            <h6 className="leading-[24px] text-[16px ]">Privacy Policy</h6>
          </div>
        </div>
        </div>

        {/* More Apps */}



<div className="mt-4">

<div className="flex items-center gap-2 ">
        <h1 className="text-[#212529] text-[22px] leading-[26px] ml-1 font-semibold text-nowrap">More Apps to try</h1>
        <span className="hover:bg-gray-100 p-2 rounded-full  cursor-pointer">
        <Icon icon='mdi:arrow-right' className="text-[#212529] text-[22px] font-semibold" />
        </span>
        </div>

<div className="w-full h-full mb-10">
  {/* Apps */}

  {apps.map((app,idx)=>(
    <div className="w-[305px] h-[95px] cursor-pointer mt-4 p-2 gap-3 flex rounded-lg hover:bg-gray-100">
  <div className="w-[30%] h-full gap-2 p-1">
    <Image src={app.cardIcon} alt="" className="w-full h-full shadow-lg rounded-lg object-cover" />
  </div>
  <div className="w-[80%] mt-2">
    <h3 className="text-black text-[16px] leading-[24px]">{app.name}</h3>
    <h6 className="text-[14px] leading-[21px]">{app.title}</h6>
     <div className="flex gap-1 items-center">
                        <span className="text-[14px] text-[#4b4a4a]">
                          0.{app.rating}
                        </span>
                        <div className="flex">
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
  ))}




</div>


</div>

      </div>


</div>



            </div>

    </>


    </div>
  );
}
