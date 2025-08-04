"use client";

import ThemeButton from "@/components/ui/ThemeButton";
import Image from "next/image";
import React from "react";
import Process from "@/components/service/process/page";
import { tabsData ,choiceCardData,industriesCardData,faqs,solution} from "@/contant/servicesData/progreesiveService/progressive-service/page";
import Reviews from "@/components/service/reviews/page";
import Solution from '@/components/service/solution/page'
import GetStarted from "@/components/service/get-started/page";
import ServicesTab from "@/components/service/service-tabs/page";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import Faq from "@/components/service/faqs/page";

import Iot from "@/assets/services/iot.webp";
import Ai from "@/assets/services/ai.svg";
import ARVR from "@/assets/services/arvr-bg.svg";
import Devops from "@/assets/services/devops.svg";
import Word from "@/assets/services/5.svg";
import Deploy from "@/assets/services/deploy.svg";
import Link from "next/link";

function page() {

  const navBar = [
    { id: "1", name: "IOT", link: "/iot-services" },
    { id: "2", name: "AI Machine", link: "/ai-machine-learning-services" },
    { id: "3", name: "AR-VR", link: "/ar-vr-service" },
    { id: "4", name: "Devops Consulting", link: "/devops-consulting-services" },
    
  ];

  const navHeading2 = [
    { id: "technologies", name: "Technologies" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
    { id: "ourWork", name: "Our Work" },
  ];


  const data = [
    {
      image: Iot,
      name: "IoT App Development Services",
      head1:
        "Internet of Things (IoT) cutting-edge solutions for your business.",
      dis1: "The Internet of Things (IoT) is transforming every industry and business on earth. As one of the top IoT app development companies in the US, we offer end-to-end IoT backend and API development solutions for a developing organizations.",
    },
    {
      image: Ai,
      name: "Artificial Intelligence and Machine Learning Development Services",
      head1:
        "You can increase the effectiveness of your operations with the aid of AI/ML and robotic process automation.",
      dis1: "In addition to providing full digital transformation solutions based on cutting-edge technologies including AI, machine learning, augmented reality (AR/VR), robotic process automation (RPA), and more, Digital Elliptical is a significant AI development company. Our experts look through your business procedures, make suggestions, and create adaptable automation models that can boost productivity and operations.",
    },
    {
      image: ARVR,
      name: "AR VR App Development",
      head1:
        "By releasing futuristic applications with our AR/VR app development services, you can dominate your market.",
      dis1: "Use services for AR/VR app development to your benefit and take full use of two of the mostunderutilizedtechnology. Through your apps, you can alter your users' reality or transport them to an entirely different one. With the most innovative technologies available today, surprise them and leave them speechless.",
    },
    {
      image: Devops,
      name: "DevOps Consulting Service",
      head1:
        "One more click will get your organizationsal productivity up to 100%.",
      dis1: "The core of modern IT operations is efficiency. The efficiency of your teams will determine how successful your software development business is. The productivity, punctuality, and eventually the revenues of your business are determined by efficiency. However, obtaining optimal levels of efficiency is challenging. For these reasons, you want our knowledgeable DevOps consulting services to close operational gaps, boost productivity, ensure consistency in product delivery, enhance departmental communication, and more. Get in touch with us to use DevOps to expand the potential of your company.",
    },

  ];

  return (
    <>
      <section>
        <nav className=' bg-gray-100 shadow-lg py-2  md:top-[72px] top-[60px] z-20 '>
          <ul className='flex items-center justify-center flex-wrap lg:gap-32 md:gap-x-24 sm:gap-x-12 gap-x-4 gap-y-4'>
            {navBar.map((item) => (
              <Link key={item.id} href={item.link}>
              <li
                key={item.id}
                id={item.id}
                className='cursor-pointer md:text-lg text-xs relative group hover:text-[gray]'
              >
                {item.name}
              </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className='text-center py-4 px-8 mt-8'>
          <h1 className='text-[30px] font-bold'>Progressive Service
          </h1>
          <p className=''>
          Progressive Service is a forward-thinking approach that continuously evolves to meet<br></br> changing needs and improve customer satisfaction over time.


          </p>
          <div className='mt-6'>
           
          </div>
        </div>
      </section>

      <section className='section-two relative'>
      

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

        <nav className='bg-gray-100 py-4 mt-10 mb-4 sticky md:top-[72px] top-[60px] z-20 '>
          <ul className='flex items-center justify-center flex-wrap lg:gap-32 md:gap-x-24 gap-x-28 gap-y-4'>
            {navHeading2.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className='cursor-pointer md:text-lg text-xs relative group'
              >
                {item.name}
                <span className='absolute -bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300'></span>
              </li>
            ))}
          </ul>
        </nav>
      
        <div className='pt-[100px]'>
          <div className='container'>
            <h4 className='md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4'>
              iOS Development Solutions that are Versatile and Dynamic for a
              Variety of Industries
            </h4>
            <p className='mb-8 text-center md:text-lg sm:text-base text-sm'>
              We offer three different flexible engagement models that can help
              you take complete control of web development process. Each of our
              models leverages a result-oriented development process.
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
          heading="Begin your iPhone application development journey today!"
          description="Get in contact with one of our specialists right now."
          buttonText="Get Started"
          link="/enquire"
        />


         <Process />

         <Reviews
          head="CASE STUDY"
          titile=" That's what our satisfied customers have to say."
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
  );
}

export default page;
