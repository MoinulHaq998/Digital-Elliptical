




"use client";

import Image from "next/image";
import React from "react";
import img1 from '@/assets/services/1.svg'
import Process from "@/components/service/process/page";
import { tabsData, industriesCardData,faqs,tabsApps} from "@/contant/servicesData/webDevelopment/full-stack-website/page";
import ServicesTab from "@/components/service/service-tabs/page";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import Faq from "@/components/service/faqs/page";
import ThemeButton from "@/components/ui/ThemeButton";
import Link from "next/link";
import GetStarted from "@/components/service/get-started/page";


const Page = () => {
  const navHeading = [
    { id: "technologies", name: "Technologies" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
  ];

  return (
    <>
      {/* hero Section */}
      <section className="section-one">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 !min-h-[550px] mt-10 md:mt-0">
            <div className="col-span-12 lg:col-span-6 lg:text-start text-center flex flex-col justify-center px-1 lg:px-12 md:px:6">
              <h1 className="lg:text-3xl md:text-2xl text-[#212529] text-[19px] text-nowrap font-bold mb-2.5">
                Full Stack Web Development Services


              </h1>
              <p className="lg:text-[21px] md:text-[18px] text-[16px] leading-[19px] md:leading-6 md:text-gray-600 md:font-normal font-medium text-black mb-2">
                Take your business on fast growth lane with our inclusive web development solutions

              </p>
              <p className="md:text-sm text-[13px] md:text-black text-gray-800 leading-6">
              A leading provider of Node.JS development services in the USA, Digital Elliptical provides all-inclusive web development services. With the aid of cutting-edge technology, our knowledgeable Node.JS web developers can help you establish a website, a web application, or a unique solution.


              </p>
              <div className="mt-12 md:block hidden">
                <Link href={"/enquire"}>
                  <ThemeButton>Contact Us</ThemeButton>
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 md:p-4 p-0 flex items-center justify-center">
              <Image
                src={img1}
                alt="main-image"
                className="!h-auto w-[75%]"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-two relative">
        {/* Navbar */}
        <nav className=" bg-gray-100 py-4 mt-10 mb-4 sticky md:top-[72px] top-[60px] z-20 ">
          <ul className="flex items-center justify-center flex-wrap lg:gap-32 md:gap-x-24 gap-x-28 gap-y-4">
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

        {/* Services tabs */}

        <ServicesTab tabsData={tabsData} tabs={tabsApps} />

       

        <div className="pt-[100px]">
          <div className="container">
            <h4 className="md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4">
              Responsive Web Development Solutions
            </h4>
            <p className="mb-8 text-center md:text-lg sm:text-base text-sm">
              Our experts have designed, developed hundreds of websites and web apps, over the years. Owing to our demonstrated full stack web development experience, we have catered to the needs of wide range of industry segments, including:  
            </p>

            <div className="flex items-center sm:justify-center justify-around md:gap-2 flex-wrap md:px-8 px-4">
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
          heading="Launch a Responsive Web Solution with Digital Elliptical"
          description="Get in contact with one of our specialists right now."
          buttonText="Get Started"
          link="/enquire"
        />

        <Process   />

      </section>

      <section>
        <Faq
          title="Frequently Asked Questions"
          dis="We have compiled a number of the frequently asked questions (FAQs) from our users Check these Questions for better knowledge of the services and solutions which we are providing to our users."
          faqs={faqs}
        />
      </section>
    </>
  );
};

export default Page;
