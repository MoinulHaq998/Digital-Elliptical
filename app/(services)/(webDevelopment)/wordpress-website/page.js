
"use client";

import Image from "next/image";
import React from "react";
import img1 from '@/assets/services/5.svg'
import Process from "@/components/service/process/page";
import { tabsData ,choiceCardData,industriesCardData,faqs,tabsApps} from "@/contant/servicesData/webDevelopment/wordpress-website/page";
import Reviews from "@/components/service/reviews/page";
import ServicesTab from "@/components/service/service-tabs/page";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import Faq from "@/components/service/faqs/page";
import ThemeButton from "@/components/ui/ThemeButton";
import Link from "next/link";
import ChoiceCard from "@/components/service/choice-card/page";
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
                Wordpress Development
              </h1>
              <p className="lg:text-[21px] md:text-[18px] text-[16px] leading-[19px] md:leading-6 md:text-gray-600 md:font-normal font-medium text-black mb-2">
                  Nobody Offers Seamless WordPress Development Services Like We Do
              </p>
              <p className="md:text-sm text-[13px] md:text-black text-gray-800 leading-6">
                Regardless of whether you’re building an eCommerce website or an on-demand website, you need an ideal content management system to take care of all the tedious tasks. That’s why our solid WordPress development services are here to make your day. From generic to custom WordPress development, we offer all WordPress-specific services. Find out more below.

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

        {/* Choice Cards */}
        <div className="mt-20">
          <div className="container mx-auto md:px-28 px-4">
            <div className="relative w-full">
              <h6 className="uppercase text-[13px] text-center text-[#005e7c]">
                Your Choice of Weapon
              </h6>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 h-[2px] rounded-xl w-28 bg-[#005e7c]"></div>
              <h6 className="uppercase md:text-[26px] text-[#212529] text-lg font-bold text-center pt-3 mb-8">
                Take Your Business Higher with our End-to-end Digital Solutions
              </h6>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-1 mt-10">
              {choiceCardData.map((item, index) => (
                <ChoiceCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>

      
        <Process  />

      
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
