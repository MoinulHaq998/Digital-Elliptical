import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ReviewData } from "@/contant/data";
import "swiper/css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ThemeButton from "@/components/ui/ThemeButton";
const Reviews = ({ head, titile, dis }) => {
  return (
    <div className="section-two my-20">
      <div className="container mx-auto px-4 md:px-28">
        <div className="relative w-full">
          <h6 className="uppercase text-sm text-center text-[#005e7c]">
            {head}
          </h6>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 h-[2px] rounded-xl w-28 bg-[#005e7c]"></div>
          <h6 className="uppercase md:text-3xl text-xl text-[#212529] font-bold text-center pt-3 mb-5">
            {titile}
          </h6>
          {dis && (
            <p className="text-center md:text-[14px] text-[12px]">{dis} </p>
          )}
        </div>
        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="mySwiper"
        >
          {ReviewData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='md:h-[70vh] mb-6'>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-x-4 my-3 ">
                <div className="col-span-1  flex items-center">
                  <Image
                    src={item.imgBig}
                    alt="case study"
                    className="!w-full h-full"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="col-span-1  h-full bg-[#f5f7f9] py-1 px-4 ">
                  <div className="mt-2 flex items-center gap-x-3">
                    <Image
                      src={item.imgSmall}
                      alt="case study"
                      width={50}
                      height={70}
                    />
                    <h6 className="text-xl sm:text-3xl text-[#212529] font-bold">
                      {item.title}
                    </h6>
                  </div>
                  <p className="mt-3 leading-4 text-sm text-[#212529] tracking-wider">
                    {item.desc}
                  </p>
                  <div className="bg-white pt-4 px-3 rounded-lg shadow-sm max-w-xl mx-auto relative mt-4">
                    <div className="text-2xl sm:text-4xl text-gray-400 absolute top-1 left-2">
                      “
                    </div>
                    <blockquote className="italic text-gray-700 text-xs md:text-sm pt-2 overflow-hidden text-ellipsis">
                      &quot; {item.review} &quot;
                    </blockquote>
                    <div className="text-right pb-3 ">
                      <h3 className="text-lg font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 mb-2 px-3">
                    <ThemeButton>View Case</ThemeButton>
                  </div>
                </div>
              </div></div>
            </SwiperSlide>
          ))}


          <div className="flex items-center justify-center -mt-26   gap-3">
            <div className="swiper-button-prev cursor-pointer mt-2">
              <Icon icon="mingcute:arrow-left-line" width="30" height="30" />
            </div>
            <div className="swiper-button-next cursor-pointer mt-2">
              <Icon icon="mingcute:arrow-right-line" width="30" height="30" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
