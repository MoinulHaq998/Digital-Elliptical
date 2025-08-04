'use client'

import ThemeButton from '@/components/ui/ThemeButton'
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/services/cp.svg'
import img2 from '@/assets/services/r.svg'
import img3 from '@/assets/services/f.svg'

import {tabsData ,industriesCardData,faqs,tabsApps} from "@/contant/servicesData/mobileAppDevelopment/cross-platform-app-development-services/page";
import Reviews from "@/components/service/reviews/page"
import ServicesTab from "@/components/service/service-tabs/page";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import Faq from "@/components/service/faqs/page";
import Process from "@/components/service/process/page";

import icon1 from '@/assets/services/service-icon/android.svg'
import icon2 from '@/assets/services/service-icon/ios.svg'
import icon3 from '@/assets/services/service-icon/wearable-app.svg'
import icon4 from '@/assets/services/service-icon/hybird-app.svg'
import Link from 'next/link'
import GetStarted from '@/components/service/get-started/page'



function page() {
 
    const navHeading = [
        { id: "technologies", name: "Technologies" },
        { id: "industires", name: "Industires" },
        { id: "ourProcess", name: "Our Process" },
        { id: "ourWork", name: "Our Work" },
    ]

    const solution = [
        {
            img: icon1,
            title: "Android App",
            desc: "With an iOS mobile app, you may target potential clients who own high-end Apple devices."
        },
        {
            img: icon2,
            title: "IOS App",
            desc: "Use a feature-rich Android app developed with new frameworks and technologies to target mobile consumers on the world's most popular mobile platform."
        },
        {
            img: icon3,
            title: "Wearable App",
            desc: "Using our knowledge and experience, develop and deploy a mobile app for the Apple iWatch or any other iOS or Android-based wearable device."
        },
        {
            img: icon4,
            title: "Hybrid App",
            desc: "Launch a cross-platform hybrid mobile app and expand your business boundaries by leveraging our expertise in cutting-edge technology."
        },
    ]

const data = [
    {
      image: img1,
      name: "Cross Platform App Development Services",
      head1:
        "With our multi-platform app development services, you can reach a wider audience.",
      dis1: "Digital Elliptical is a global provider of specialised cross-platform app development services for startups, brands, and enterprises. Using hybrid app development approach, our professional team of cross-platform app developers can help you target people across Android and iOS platforms at the same time.",
    },
    {
      image: img2,
      name: "React Native App Development",
      head1: "Develop Your App On The Most Reliable Platform",
      dis1: "We assure that your software is the most reliable, robust, and scalable in the industry as a leading React Native app development company. Our React Native app development services provide you with an app that runs quicker, costs less, and has the greatest user experience in its market segment. So, what do you have to lose? Come take advantage of our React Native app development services.",
    },
    {
      image: img3,
      name: "Flutter App Development",
      head1:
        "Learn why Flutter is so popular for app development throughout the world.",
      dis1: "Flutter, for starters, eliminates the requirement to create separate apps for different mobile operating systems. As a result, Flutter application development shortens your time to market and lowers your app development costs. Flutter framework distinguishes out thanks to its great support community and easy development procedures. Our Flutter app development services are also available.",
    },
   

  ];
  

    return (
        <>
            <section>
            <div className='w-full  h-full '>
          {data.map((val, idx) => (
            <div key={idx} className='w-[80%] lg:h-[90vh] h-fit  mx-auto flex lg:flex-row md:flex-row  flex-col '>
              <div
                className={`lg:w-[100%]  w-[100%] h-full flex justify-center items-center ${
                  idx % 2 === 0
                    ? "lg:flex-row md:flex-row flex-col"
                    : "lg:flex-row-reverse md:flex-row-reverse flex-col"
                }`}
              >
                <div className='lg:w-[50%] !h-[100%]  w-[100%] flex justify-center'>
                  <div className='w-[100%]  z-10 lg:mt-0 mt-10  p-6 h-[100%] mx-auto'>
                    <Image
                      src={val.image}
                      alt=''
                      className='object-contain  
                           z-10 lg:p-4 p-0 overflow-hidden w-[100%] h-[100%]'
                    />
                  </div>
                </div>

                <div
                  className={`w-[100%] h-full lg:w-[50%] lg:mb-0 mb-4
          
        `}
                >
                  <div className='lg:w-[100%] w-[100%] h-full relative z-40 px-1'>
                    {val.count1 && (
                      <div className='lg:block hidden w-[40px] h-[40px]  p-3 bg-[#01345b] z-45 absolute rounded-[30px] -top-5  -left-6'>
                        <h1 className='text-[25px] leading-[18px] font-semibold text-[#ffffff]'>
                          {val.count1}
                        </h1>
                      </div>
                    )}
                    {val.count2 && (
                      <div className='w-[40px] lg:block hidden h-[40px] p-3 bg-[#01345b] z-45 absolute rounded-[30px] -top-7 left-[100%]'>
                        <h1 className='text-[25px] leading-[18px] font-semibold text-[#ffffff]'>
                          {val.count2}
                        </h1>
                      </div>
                    )}

                    <div className='w-full h-full  flex transition-all z-30 ease-linear duration-200 '>
                      <div
                        className={`w-[100%]  ${
                          idx % 2 === 0 ? "lg:ml-10" : "lg:ml-24"
                        }  lg:mt-0 ml-3 mt-16`}
                      >
                        <div
                          className={`groupml-0 ${
                            val.dis3 ? "mt-8" : "lg:mt-24"
                          }`}
                        >
                          <h1 className='lg:text-3xl text-2xl text-[#212529] font-bold mb-2.5'>
                            {val.name}
                          </h1>
                        </div>

                        <div>
                          <div className='flex gap-2  items-center mt-4'>
                            <p className='text-[21px] leading-6 text-gray-600 mb-2'>
                              {val.head1}
                            </p>
                          </div>
                          <p className='text-sm leading-6'>{val.dis1}</p>
                        </div>
                        <div className='mt-6'>
                          <ThemeButton>Contact Us</ThemeButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
            </div>
            </section>
            
            <section className='section-two relative'>
                <nav className=' bg-gray-100 py-4 mt-10 mb-4 sticky md:top-[72px] top-[60px] z-20 '>
                    <ul className='flex items-center justify-center flex-wrap lg:gap-32 md:gap-x-24 sm:gap-x-12 gap-x-4 gap-y-4'>
                        {navHeading.map(item => (
                            <li key={item.id} id={item.id} className='cursor-pointer md:text-lg text-xs relative group'>
                                {item.name}
                                <span className='absolute -bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300'></span>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='container mt-14'>
                    <p className='text-center  text-xs mb-1 tracking-wider  text-gray-700 uppercase'>Digital Elliptical</p>
                    <h4 className='uppercase font-bold text-[#212529] text-3xl text-center mb-4'>
                        Launch an Intuitive Web Solution Without Any Hassle
                    </h4>
                    <div className='grid grid-cols-12 mt-8'>
                        {
                            solution.map((data, idx) => (
                                <div
                                    key={idx}
                                    className='col-span-12 md:col-span-3  flex flex-col items-center group relative overflow-hidden py-2'
                                >
                                    {/* Image with scale animation on hover */}
                                    <Image
                                        src={data.img}
                                        alt="main-image"
                                        className='!h-[100%] w-[35%] transition-transform duration-500 ease-in-out group-hover:scale-105'
                                        width={2000}
                                        height={2000}
                                    />

                                    <h4 className='text-xl font-bold mt-1 transition-all text-[#212529] duration-300 ease-in-out group-hover:text-[#005E7C]'>
                                        {data.title}
                                    </h4>

                                    {/* Paragraph with slide-in effect from the top */}
                                    <p
                                        className='text-center mt-1 opacity-0 h-full md:h-[40vh] -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'
                                    >
                                        {data.desc}
                                    </p>
                                </div>
                            ))
                        }


                    </div>

                </div>

                <ServicesTab tabsData={tabsData} tabs={tabsApps} />


                <div className='pt-[100px]'>
          <div className='container'>
            <h4 className='md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4'>
              Hybrid development solutions that are versatile and dynamic for a
              variety of industries
            </h4>
            <p className='mb-8 text-center md:text-lg sm:text-base text-sm'>
              Over the years, our professionals have designed, built, and
              implemented hundreds of customer-centric mobile apps. Our
              clientele are dispersed throughout a wide range of industrial
              areas, thanks to our proved cross platform app development
              experience, which includes:
            </p>

            <div className='flex items-center sm:justify-center justify-around md:gap-2 flex-wrap md:px-8 px-4'>
              {industriesCardData.map((item, index) => (
                <ServiceIndustriesCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>

          
        <GetStarted
          heading="With No Hassles, You Can Launch Your Cross-Platform Mobile App!"
          description="Get in contact with one of our specialists right now."
          buttonText="Get Started"
          link="/enquire"
        />

         <Process  />



         
        <Reviews
          head="CASE STUDY"
          titile=" We've Created Some Incredible Solutions. Take A Look At Some Of Our Previous Projects!"
        />


            </section>

            <section>
              <Faq
          title="Frequently Asked Questions"
          dis="We've created a list of our users' most commonly asked  questions (FAQs). Check out these questions to have a better  understanding of the services and solutions we offer to our customers."
          faqs={faqs}
        />
            </section>



        </>
    )
}

export default page
