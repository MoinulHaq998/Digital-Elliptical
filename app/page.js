"use client";
import Image from "next/image";
import bannerImg1 from "@/assets/banner/ban.svg"
import bannerImg2 from "@/assets/banner/banner-1.webp"
import bannerImg3 from "@/assets/banner/banner-2.webp"
import choiceImg1 from "@/assets/choice_of_weapon/md.svg"
import choiceImg2 from "@/assets/choice_of_weapon/bc.svg"
import choiceImg3 from "@/assets/choice_of_weapon/ec.svg"
import choiceImg4 from "@/assets/choice_of_weapon/m.svg"
import choiceImg5 from "@/assets/choice_of_weapon/wd.svg"
import choiceImg6 from "@/assets/choice_of_weapon/wp.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Reviews from "@/components/service/reviews/page";
import AppSection from "@/components/partials/Home/AppSection";
import Blog from "@/components/partials/Home/Blog";
import Industries from "@/components/partials/Home/industries";
import Testimonial from "@/components/partials/Home/Testimonial";
import ThemeButton from "@/components/ui/ThemeButton";
import Link from "next/link";

export default function Home() {

  const choiceCard = [
    {
      img: choiceImg1,
      title: "Mobile Development",
      desc: " With the expertise of our development professionals, you can create intuitive mobile apps for iOS & Android or go cross-platform.",
    },
    {
      img: choiceImg5,
      title: "Web Developmentt",
      desc: "With the aid of a responsive and dynamic company or eCommerce website, you may strengthen your online presence.",
    },
    {
      img: choiceImg2,
      title: "Blockchain Development",
      desc: "Cryptocurrency creation, wallet development, smart contract development, and multichain/ hyper ledger solutions are all possible with blockchain.",
    },
    {
      img: choiceImg6,
      title: "Progressive Web Application",
      desc: "Tech startups, multinational corporations, and large-scale organizationss can benefit from our progressive web app development services.",
    },
    {
      img: choiceImg3,
      title: "eCommerce & CMS",
      desc: "To provide end-to-end Magento, Shopify, and WordPress development solutions, our eCommerce and CMS development specialists use best development techniques.",
    },
    {
      img: choiceImg4,
      title: "Digital Marketing",
      desc: "Our specialists will create digital marketing plans that will help you promote your business online.",
    },

  ]

  const bannerData = [
    {
      img: bannerImg1,
      title: "Case Study",
      desc: "Learn why we are the market leaders in our field. Listen to what our clients and customers have to say.",
      link: "/case-study"
    },
    {
      img: bannerImg3,
      title: "Process",
      desc: "Choose a procedure that fits your company&apos;s aims and aspirations to personalize our collaboration.",
      link: "/fixed-cost-project"
    },
    {
      img: bannerImg2,
      title: "Accelerator Program",
      desc: "Make a pitch for your company concept and sign up for our free startup tech accelerator program.",
      link: "/startup-accelerator-program"
    },
  ]

  return (
    
    <div className="wrapper bg-white">
     

      <div className="hero-section md:h-[80vh] md:flex items-center justify-center pt-6">
        <Swiper
          className="mySwiper w-full"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000, // Time in milliseconds between slides
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
          loop={true}
        >

          {
            bannerData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="container md:flex items-center" >
                  <div className="md:w-[50%] flex md:justify-end">
                    <div className="hero-box relative md:border-4 md:h-[430px] h-full md:w-[66%] z-0 md:border-gray-200 md:py-20 py-2">
                      <div className="md:absolute top-4 z-10 h-[90%] md:-left-10  right-0 bg-white flex-col flex md:items-start items-center md:justify-center md:pr-16 md:pt-0 pt-10">
                        <h3 className="text-4xl font-bold mb-3 text-[#005e7c] text-nowrap text-start">{data.title}</h3>
                        <p className="md:mb-3 mb-6 md:text-start text-center">{data.desc}</p>
                        <div>
                          <Link href={data.link}>
                            <ThemeButton>
                              Check Now
                            </ThemeButton>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-[50%]">
                    <Image src={data.img} alt="banner" width={500} height={500} className="md:!w-[68%] !h-auto" />
                  </div>
                </div>


                {/* <div className="grid grid-cols-12">
              <div className="hero-box relative ml-60 border-4 h-[400px] w-[50%] flex justify-end z-0 border-gray-200 col-span-7 py-20">
                <div className="absolute top-4 z-10 h-[90%] -left-10 right-0 bg-white flex-col flex justify-center pr-16">
                  <h3 className="text-4xl font-bold mb-3 text-[#005e7c]">Case Study</h3>
                  <p className="mb-3">Learn why we are the market leaders in our field. Listen to what our clients and customers have to say.</p>
                  <button className="theme-btn p-3 bg-[#005e7c] text-white w-fit">Check Now</button>
                </div>
              </div>
              <div className="col-span-5">
                <div className="flex items-center">
                  <Image src={bannerImg1} alt="banner" width={500} height={500} />
                </div>
              </div>
            </div> */}



              </SwiperSlide>
            ))
          }

          {/* <SwiperSlide>
            <div className="grid grid-cols-12">
              <div className="hero-box relative ml-96 border-4 h-[400px] w-[50%] flex justify-end z-0 border-gray-200 col-span-7 py-20">
                <div className="absolute top-4 z-10 h-[90%] -left-10 right-0 bg-white flex-col flex justify-center pr-16">
                  <h3 className="text-4xl font-bold mb-3 text-[#005e7c]">Process</h3>
                  <p className="mb-3">Choose a procedure that fits your company&apos;s aims and aspirations to personalize our collaboration.</p>
                  <button className="theme-btn p-3 bg-[#005e7c] text-white w-fit">Check Now</button>
                </div>
              </div>
              <div className="col-span-5">
                <div className="flex items-center">
                  <Image src={bannerImg3} alt="banner" width={500} height={500} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-12">
              <div className="hero-box relative ml-96 border-4 h-[400px] w-[50%] flex justify-end z-0 border-gray-200 col-span-7 py-20">
                <div className="absolute top-4 z-10 h-[90%] -left-10 right-0 bg-white flex-col flex justify-center pr-16">
                  <h3 className="text-4xl font-bold mb-3 text-[#005e7c]">Startup Accelerator Program</h3>
                  <p className="mb-3">Make a pitch for your company concept and sign up for our free startup tech accelerator program.</p>
                  <button className="theme-btn p-3 bg-[#005e7c] text-white w-fit">Check Now</button>
                </div>
              </div>
              <div className="col-span-5">
                <div className="flex items-center">
                  <Image src={bannerImg2} alt="banner" width={500} height={500} />
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>

      </div>

      <div className="section-one mt-20 bg-white">
        <div className="container mx-auto md:px-20">
          <div className="relative w-full">
            <h6 className="uppercase text-[13px]  text-center text-[#005e7c] ">Your Choice of Weapon</h6>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 h-[2px] rounded-xl w-28 bg-[#005e7c]"></div>
            <h6 className="uppercase md:text-[28.8px] text-xl font-bold text-center md:pt-4 pt-6 mb-8 text-[#212529]">Use Our End-to-end Digital Solutions To Grow Your Business.</h6>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10  mb-15 ">
            {choiceCard.map((item, index) => (
              <div key={index} className="md:col-span-1 col-span-3 mb-2 md:mb-10 flex gap-3 py-8 rounded-xl px-2 min-h-44 group cursor-pointer hover:shadow-xl">
                <div className="w-[18%]">
                  <Image
                    src={item.img}
                    alt="icon"
                    width={800}
                    height={800}
                    className="w-40 h-auto transition-transform duration-700 group-hover:transform group-hover:rotate-[360deg]"
                  />
                </div>
                <div className="w-[82%]">
                  <h6 className=" text-[17px] md:text-[20px] text-[#212529] font-bold">{item.title}</h6>
                  <p className="mt-1 text-gray-500 text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

     
      <Reviews
          head="CASE STUDY"
          titile=" That's what our satisfied customers have to say."
        />
      <AppSection />
      <Industries />
      <Blog />

      

      <Testimonial />


    </div>
  );
}
