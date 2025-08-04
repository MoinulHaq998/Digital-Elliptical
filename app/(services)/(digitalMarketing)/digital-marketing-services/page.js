"use client";

import ThemeButton from "@/components/ui/ThemeButton";
import Image from "next/image";
import React from "react";
import Process from "@/components/service/process/page";
import {
  tabsData,
  industriesCardData,
  tabsApps,
  faqs,
  solution,
} from "@/contant/servicesData/digitalMarketing/digital-marketing-services/page";
import Reviews from "@/components/service/reviews/page";
import Solution from "@/components/service/solution/page";
import GetStarted from "@/components/service/get-started/page";
import ServicesTab from "@/components/service/service-tabs/page";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import Faq from "@/components/service/faqs/page";

import SEO from "@/assets/services/digital-markiting/search-engine.svg";
import APS from "@/assets/services/digital-markiting/app-store.svg";
import SMM from "@/assets/services/digital-markiting/ssm.svg";

import Link from "next/link";

function page() {
  const navHeading = [
    { id: "technologies", name: "Technologies" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
    { id: "ourWork", name: "Our Work" },
  ];

  const data = [
    {
      image: APS,
      name: "App Store Optimization (ASO) Service",
      dis1: "We have gained success as a professional App Store Optimization services provider company in the United States and the United Arab Emirates by creating interactive iPhone apps for a variety of clients at affordable costs to help their businesses flourish.",
      count1: "1",
    },
    {
      image: SMM,
      name: "Social Media Marketing Services",
      head1: "Avant-garde SMM services for your business.",
      dis1: "For getting higher results for your site, Digital Elliptical analyzes user recommendations, and it has become more vital to pamper your business with Social media optimization services. The following are some of the business benefits of SMM services..",
      count2: "2",
    },
    {
      image: SEO,
      name: "Search Engine Optimization (SEO) Services",
      dis1: "We have gained success as a professional Search Engine Optimization (SEO) Services Provider Company in the United States and the United Arab Emirates by creating interactive iPhone applications for a variety of clients at reasonable costs to help them expand their businesses..",
      count1: "3",
    },
  ];
  const navBar = [
    { id: "1", name: "App Store Optimization", link: "/app-store-optimization" },
    { id: "2", name: "Search Engine Optimization", link: "/search-engine-optimization" },
    { id: "3", name: "Social Media", link: "/social-media" },
  ];

  return (
    <>
      <section>
        <nav className=" bg-gray-100 shadow-lg py-2  md:top-[72px] top-[60px] z-20 ">
          <ul className="flex items-center justify-center flex-wrap lg:gap-32 md:gap-x-24 sm:gap-x-12 gap-x-4 gap-y-4">
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
        <div className="text-center py-4 px-8 mt-8">
          <h1 className="text-[30px] font-bold">Digital Marketing</h1>
          <p className="">
            With digital marketing, you can increase sales and visibility.
          </p>
          <div className="mt-6">
            
          </div>
        </div>
      </section>

      <section className="section-two relative">
        

        <Solution
          title="Grow Your Digital Presence"
          head="Digital Elliptical"
          solution={solution}
        />
        <nav className=" bg-gray-100 py-4 mt-10 mb-4 sticky md:top-[72px] top-[60px] z-20 ">
          <ul className="flex items-center justify-center flex-wrap lg:gap-32 md:gap-x-24 sm:gap-x-12 gap-x-4 gap-y-4">
            {navHeading.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className="cursor-pointer md:text-lg text-xs relative group"
              >
                {item.name}
                <span className="absolute -bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </nav>

        <ServicesTab tabsData={tabsData} tabs={tabsApps} />

        <div className="w-full  h-full mt-10">
          {data.map((val, idx) => (
            <div
              key={idx}
              className="w-[80%] lg:h-[90vh] h-fit  mx-auto flex lg:flex-row md:flex-row  flex-col "
            >
              <div
                className={`lg:w-[100%]  w-[100%] h-full  flex justify-center items-center ${
                  idx % 2 === 0
                    ? "lg:flex-row md:flex-row flex-col"
                    : "lg:flex-row-reverse md:flex-row-reverse flex-col"
                }`}
              >
                <div className="lg:w-[50%] !h-[100%]  w-[100%] flex justify-center">
                  <div className="w-[100%]  z-10 lg:mt-0 mt-10  p-6 h-[100%] mx-auto">
                    <Image
                      src={val.image}
                      alt=""
                      className="object-contain lg:hover:scale-100 hover:scale-[1.2] transition-all ease-linear duration-300 cursor-pointer 
                          lg:scale-[0.7] scale-[0.9] opacity-[.5] hover:opacity-[50] z-10 lg:p-4 p-0 overflow-hidden w-[100%] h-[100%]"
                    />
                  </div>
                </div>

                <div
                  className={`w-[100%] h-full lg:w-[50%] lg:mb-0 mb-4
          ${idx % 2 === 0 ? "border-L" : "border-R"}`}
                >
                  <div className="lg:w-[100%] w-[100%] h-full relative z-40 px-1">
                    {val.count1 && (
                      <div className="lg:block hidden w-[40px] h-[40px]  p-3 bg-[#01345b] z-45 absolute rounded-[30px] -top-5  -left-6">
                        <h1 className="text-[25px] leading-[18px] font-semibold text-[#ffffff]">
                          {val.count1}
                        </h1>
                      </div>
                    )}
                    {val.count2 && (
                      <div className="w-[40px] lg:block hidden h-[40px] p-3 bg-[#01345b] z-45 absolute rounded-[30px] -top-7 left-[100%]">
                        <h1 className="text-[25px] leading-[18px] font-semibold text-[#ffffff]">
                          {val.count2}
                        </h1>
                      </div>
                    )}

                    <div className="w-full h-full  flex transition-all z-30 ease-linear duration-200 ">
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
                          <h1 className="lg:text-3xl text-2xl text-[#212529] font-bold mb-2.5">
                            {val.name}
                          </h1>
                        </div>

                        <div>
                          <div className="flex gap-2  items-center mt-4">
                            {val.head1 && (
                              <p className="text-[21px] leading-6 text-gray-600 mb-2">
                                {val.head1}
                              </p>
                            )}
                          </div>
                          <p className="text-sm leading-6">{val.dis1}</p>
                        </div>
                        <div className="mt-6">
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

        <div className="pt-[100px]">
          <div className="container">
            <h4 className="md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4">
              Industries We Serve
            </h4>
            <p className="mb-8 text-center md:text-lg sm:text-base text-sm">
              With our engaging digital marketing services, we have had the
              opportunity to work across a wide range of sectors, addressing
              important challenges and satisfying end-users.
            </p>

            <div className="flex items-center sm:justify-center justify-around  flex-wrap md:px-8 px-4 ">
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
          titile=" We've Created Some Incredible Solutions. Take A Look At Some Of Our Previous Projects!"
          dis="Are You Having Trouble Making A Decision? Examine Our Most Recent Projects, Assess Our Capabilities As A Top Development Firm, And Make An Educated Decision Right Now.

"
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
