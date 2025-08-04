"use client";

import img1 from "@/assets/services/Flutterappdevelopment.svg";
import Image from "next/image";
import React from "react";
import Process from "@/components/service/process/page";
import {
  tabsData,
  
  choiceCardData,
  industriesCardData,
  faqs,
  tabsApps,
} from "@/contant/servicesData/mobileAppDevelopment/flutter-app-development-services/page";
import Reviews from "@/components/service/reviews/page";
import ServicesTab from "@/components/service/service-tabs/page";
import ThemeButton from "@/components/ui/ThemeButton";
import Link from "next/link";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import ChoiceCard from "@/components/service/choice-card/page";
import Faq from "@/components/service/faqs/page";
import GetStarted from "@/components/service/get-started/page";

const Flutter = () => {
  const navHeading = [
    { id: "technologies", name: "Technologies" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
    { id: "ourWork", name: "Our Work" },
  ];

  return (
    <>
      {/* hero Section */}
      <section className="section-one">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 !min-h-[550px] mt-10 md:mt-0">
            <div className="col-span-12 lg:col-span-6 lg:text-start text-center flex flex-col justify-center px-1 lg:px-12 md:px:6">
              <h1 className="lg:text-3xl md:text-2xl text-[#212529] text-[19px] text-nowrap font-bold mb-2.5">
                Flutter App Development
              </h1>
              <p className="lg:text-[21px] md:text-[18px] text-[16px] leading-[19px] md:leading-6 md:text-gray-600 md:font-normal font-medium text-black mb-2">
                Discover Why Flutter Is Popular Throughout the World for App
                Development.
              </p>
              <p className="md:text-sm text-[13px] md:text-black text-gray-800 leading-6">
                First of all, Flutter does away with the requirement to create
                separate apps for various mobile operating systems. It follows
                that Flutter application development cuts down on both costs and
                time to market. The Flutter framework distinguishes out thanks
                to its wonderful support network and straightforward development
                procedures. Our Flutter app development services will follow.
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
                Use Our End-to-end Digital Solutions To Grow Your Business.
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

        <div className="pt-[100px]">
          <div className="container">
            <h4 className="md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4">
              iOS Development Solutions that are Versatile and Dynamic for a
              Variety of Industries
            </h4>
            <p className="mb-8 text-center md:text-lg sm:text-base text-sm">
              We offer three different flexible engagement models that can help
              you take complete control of web development process. Each of our
              models leverages a result-oriented development process.
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
          heading="Begin your iPhone application development journey today!"
          description="Get in contact with one of our specialists right now."
          buttonText="Get Started"
          link="/enquire"
        />

        <Process />

        <Reviews
          head="CASE STUDY"
          titile="That’s What Our Happy Clients Say"
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
};

export default Flutter;
