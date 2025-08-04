"use client";

import Image from "next/image";
import React from "react";
import img1 from "@/assets/services/seo.webp";
import Process from "@/components/service/process/page";
import {
  tabsData,
  industriesCardData,
  faqs,
  tabsApps,
} from "@/contant/servicesData/digitalMarketing/search-engine-optimization/page";
import Reviews from "@/components/service/reviews/page";
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
    { id: "ourWork", name: "Our Work" },
  ];

  return (
    <>
      {/* hero Section */}
      <section className='section-one'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-4 !min-h-[550px] mt-10 md:mt-0'>
            <div className='col-span-12 lg:col-span-6 lg:text-start text-center flex flex-col justify-center px-1 md:px:6'>
              <h1 className='lg:text-3xl md:text-2xl text-[#212529] text-[19px] text-wrap font-bold mb-2.5'>
                Search Engine Optimization(SEO) Services
              </h1>

              <p className='md:text-sm text-[13px] md:text-black text-gray-800 leading-6'>
                As a professional Search Engine Optimization (SEO) Services
                Provider Company in USA & UAE, we have achieved success by
                programming interactive iPhone apps for different clients at
                reasonable prices to help their business grow.
              </p>
              <div className='mt-12 md:block hidden'>
                <Link href={"/enquire"}>
                  <ThemeButton>Contact Us</ThemeButton>
                </Link>
              </div>
            </div>

            <div className='col-span-12 lg:col-span-6 md:p-4 p-0 flex items-center justify-center'>
              <Image
                src={img1}
                alt="main-image"
                className='!h-auto w-[95%]'
                
              />
            </div>
          </div>
        </div>
      </section>

      <section className='section-two relative'>
        {/* Navbar */}
      
        {/* Services tabs */}

        <ServicesTab tabsData={tabsData} tabs={tabsApps} />

        <div className='pt-[100px]'>
          <div className='container'>
            <h4 className='md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4'>
              Industries We Serve
            </h4>
            <p className='mb-8 text-center md:text-lg sm:text-base text-sm'>
              We’ve had the privilege to work extensively across a wide range of
              industries, solving critical problems and delighting end-users
              with our engaging digital marketing services.
            </p>

            <div className='flex items-center sm:justify-center justify-around flex-wrap md:px-8  px-4'>
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
};

export default Page;
