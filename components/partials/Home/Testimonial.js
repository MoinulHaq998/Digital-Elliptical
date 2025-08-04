import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
// Images
import Testimonail1 from "@/assets/testimonial/1.avif";
import Testimonail2 from "@/assets/testimonial/2.webp";
import Testimonail3 from "@/assets/testimonial/3.webp";
import Testimonail4 from "@/assets/testimonial/4.webp";
import Testimonail5 from "@/assets/testimonial/5.webp";

const testiminol = [
  {
    testiminolImg: Testimonail1,
    name: "Asif Hashmi",
    position: "General Manager",
    dis: "I am really impressed by the quality of services I received from Digital Elliptical. You were right on schedule, charged  reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of Digital Elliptical and I will definitely use your services again.",
  },
  {
    testiminolImg: Testimonail2,
    name: "Junaid Mughal",
    position: "Director",
    dis: "We would like to express our satisfaction on the cooperation  regarding the development of our web application. Abdul Hadiand the development team did a very professional job. We are satisfied with the solution given to us and with the  communication flow through the project. We would like to recommend Abdul Hadi and his development team. We look forward to working with them in future projects.",
  },
  {
    testiminolImg: Testimonail3,
    name: "Sami Ullah Syed",
    position: "Real Estate Builders",
    dis: "I worked with the company Digital Elliptical, they offer excellent services and have a fantastic team that is always growing.it was a pleasure to work with their team.",
  },
  {
    testiminolImg: Testimonail4,
    name: "Dylan Owen",
    position: "CEO",
    dis: "We have collaborated with Digital Elliptical on a number of projects and are satisfied with their professional skills a knowledge.Finding a service provider with such professional consistency is exceptional.They give a valuable service to our  business.",
  },
  {
    testiminolImg: Testimonail5,
    name: "Christopher Taylor",
    position: "Founder & CEO",
    dis: "We love working with Digital elliptical as they are diligent and constant in their efforts. Mr Abdul Hadi and his team of  programrs have always been willing to assist us. I highly recommend their company to handle ant assignment.",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center">
          <span className="text-xs text-primary uppercase tracking-wide">
            Testimonials
          </span>
          <h3 className="text-[28px] font-semibold text-gray-800 uppercase">
            Trusted By Professionals
          </h3>
        </div>

        <div className="relative mt-6">
          {/* Navigation Buttons */}

          <div
            className="md:flex hidden
           z-0 justify-between lg:w-[80%] w-[100%] absolute top-1/2 lg:left-1/2 md:left-[50%] left-0 -translate-x-1/2 -translate-y-1/2 gap-4 mb-4"
          >
            <button
              className="bg-gray-200 text-white p-2 rounded"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Icon
                icon="flowbite:arrow-left-outline"
                width="20"
                height="20"
                className="text-primary"
              />
            </button>
            <button
              className="bg-gray-200 text-white p-2 rounded"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Icon
                icon="flowbite:arrow-right-outline"
                width="20"
                height="20"
                className="text-primary"
              />
            </button>
          </div>

          

          {/* Swiper */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign swiper instance to ref
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper lg:w-[70%] w-full h-fit"
          >
          {testiminol.map((testiminol,idx)=>(
            <SwiperSlide key={idx} className=' my-8'>
              <div className="w-12 h-12  bg-primary text-white font-bold text-center flex items-center justify-center rounded-full absolute top-[-18px] left-[20px] z-50">
                <Icon icon="entypo:quote" width="30" height="30" />
              </div>
              <div className="lg:px-18 md:px-14 px-6 py-6 flex h-full flex-col gap-4 items-center justify-center text-center border-2 border-[#e0e0e0] bg-[#f7f8fa] rounded-xl">
                <Image
                  src={testiminol.testiminolImg}
                  alt="person"
                  height={100}
                  width={100}
                  className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full mb-4"
                />
                <p className="text-sm md:text-base lg:text-md text-gray-700 leading-relaxed">
                  {testiminol.dis}
                </p>
                <h4 className="font-bold text-md md:text-lg lg:text-xl text-gray-800">
                  {testiminol.name}
                </h4>
                <span className="text-sm md:text-base lg:text-md text-gray-500">
                  {testiminol.position}
                </span>
              </div>

            </SwiperSlide>
          ))}      
          </Swiper>

          {/* Mobile btns */}
          <div className="mt-10 flex md:hidden justify-center items-center">
            <div
              className="flex lg:hidden mx-auto ml-[50%]
           z-0 justify-center w-[70%] -translate-x-1/2 -translate-y-1/2 gap-4  mb-4"
            >
              <button
                className="bg-gray-200 text-white p-2 rounded"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Icon
                  icon="flowbite:arrow-left-outline"
                  width="20"
                  height="20"
                  className="text-primary"
                />
              </button>
              <button
                className="bg-gray-200 text-white p-2 rounded"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Icon
                  icon="flowbite:arrow-right-outline"
                  width="20"
                  height="20"
                  className="text-primary"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
