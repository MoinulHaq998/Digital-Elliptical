"use client";

import Image from "next/image";
import React from "react";
import img1 from "@/assets/services/aso-development.webp";
import {
  tabsData,
  faqs,
  tabsApps,
} from "@/contant/servicesData/digitalMarketing/app-store-optimization/page";
import Process from "@/components/service/process/page";
import ServicesTab from "@/components/service/service-tabs/page";
import Faq from "@/components/service/faqs/page";
import ThemeButton from "@/components/ui/ThemeButton";
import Link from "next/link";

const AppStore = () => {
  const navHeading = [
    { id: "technologies", name: "Technologies" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
    { id: "ourWork", name: "Our Work" },
  ];

  return (
    <>
      <section className='section-one'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-4 !min-h-[550px]'>
            <div className='col-span-12 lg:col-span-6 p-4 flex items-center justify-center'>
              <Image
                src={img1}
                alt="main-image"
                className='!h-auto w-[100%]'
                width={600}
                height={600}
              />
            </div>
            <div className='col-span-12 lg:col-span-6 lg:text-start text-center flex flex-col justify-center px-4 lg:px-12'>
              <h1 className='lg:text-3xl text-2xl text-[#212529] font-bold mb-2.5'>
                App Store Optimization (ASO) Service
              </h1>
              {/* <p className='text-[21px] leading-6 text-gray-600 mb-2'>
                                As a professional App Store Optimization services Provider Company in USA & UAE, we have achieved success by programming interactive iPhone apps for different clients at reasonable prices to help their business grow.
                            </p> */}
              <p className='text-sm leading-6'>
                As a professional App Store Optimization services Provider
                Company in USA & UAE, we have achieved success by programming
                interactive iPhone apps for different clients at reasonable
                prices to help their business grow.
              </p>
              <div className='mt-12'>
                <Link href={"/enquire"}>
                  <ThemeButton>Contact Us</ThemeButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-two relative'>
        <nav className=' bg-gray-100 py-4 mt-10 mb-4 sticky md:top-[72px] top-[60px] z-20 '>
          <ul className='flex items-center justify-center flex-wrap lg:gap-32 md:gap-x-24 sm:gap-x-12 gap-x-4 gap-y-4'>
            {navHeading.map((item) => (
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

        <ServicesTab tabsData={tabsData} tabs={tabsApps} />

        <Process />
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

export default AppStore;
