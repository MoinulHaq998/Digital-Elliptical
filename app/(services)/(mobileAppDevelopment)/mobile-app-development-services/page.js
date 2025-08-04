"use client";

import ThemeButton from "@/components/ui/ThemeButton";
import Image from "next/image";
import React from "react";
import {
  tabsData,
  industriesCardData,
  faqs,
  tabsApps,
  solution,
} from "@/contant/servicesData/mobileAppDevelopment/mobile-app-development-services/page";
import Process from "@/components/service/process/page";
import Solution from "@/components/service/solution/page";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import Faq from "@/components/service/faqs/page";
import Reviews from "@/components/service/reviews/page";
import ServicesTab from "@/components/service/service-tabs/page";
import icon1 from "@/assets/services/service-icon/android.svg";
import icon2 from "@/assets/services/service-icon/ios.svg";
import icon3 from "@/assets/services/service-icon/wearable-app.svg";
import icon4 from "@/assets/services/service-icon/hybird-app.svg";
import GetStarted from "@/components/service/get-started/page";
import Link from "next/link";

function page() {
  const navHeading = [
    { id: "technologies", name: "Technologies" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
    { id: "ourWork", name: "Our Work" },
  ];
 
  const solution = [
    {
      img: icon1,
      title: "Android App",
      desc: "Use a feature-rich Android app developed with new frameworks and technologies to target mobile consumers on the world's most popular mobile platform.",
    },
    {
      img: icon2,
      title: "IOS App",
      desc: "Launch an engaging iOS mobile app with the aid of our specialists, who will develop an intuitive app using agile techniques and contemporary technology..",
    },
    {
      img: icon3,
      title: "Wearable App",
      desc: "Using our knowledge and experience, develop and deploy a mobile app for the Apple iWatch or any other iOS or Android-based wearable device.",
    },
    {
      img: icon4,
      title: "Hybrid App",
      desc: "Launch a cross-platform hybrid mobile app and expand your business boundaries by leveraging our expertise in cutting-edge technology.",
    },
  ];

  const navBar = [
    { id: "1", name: "iOS", link: "/ios-app-development-services" },
    { id: "2", name: "Android", link: "/android-app-development-services" },
    { id: "3", name: "React", link: "/react-app-development-services" },
    { id: "4", name: "Ionic", link: "/ionic-app-development-services" },
    { id: "5", name: "Flutter", link: "/flutter-app-development-services" },
    { id: "6", name: "Cross Platform", link: "/cross-platform-app-development-services" },
  ];


  return (
    <>
      <section>
        <nav className='bg-gray-100 shadow-lg py-2  md:top-[72px] top-[60px] z-20 '>
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
          <h1 className='text-xl md:text-[30px] font-bold'>MOBILE DEVELOPMENT</h1>
          <p className='text-md md:text-lg'>
            Providing Mobile App Development Services to Businesses and Startups
          </p>
          <div className='mt-6'>
            <ThemeButton>Contact Us</ThemeButton>
          </div>
        </div>
      </section>

      <section className='section-two relative'>
        <nav className='bg-gray-100 py-4 mt-10 mb-4 sticky md:top-[72px] top-[60px] z-20 '>
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

        <Solution
          title="Launch an Intuitive Web Solution Without Any Hassle"
          head="Digital Elliptical"
          solution={solution}
        />

        <ServicesTab tabsData={tabsData} tabs={tabsApps} />

        <div className='pt-[100px]'>
          <div className='container'>
            <h4 className='md:text-3xl text-xl uppercase font-semibold text-[#212529] mb-3 text-center px-4'>
            Industries We Serve

            </h4>
            <p className='mb-8 text-center md:text-lg sm:text-base text-sm'>
            We have had the pleasure of working with a variety of sectors, addressing key challenges and delighting end customers with our engaging mobile apps.


            </p>

            <div className='flex items-center sm:justify-center justify-around  flex-wrap px-4'>
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
          heading='Begin your iPhone application development journey today!'
          description='Get in contact with one of our specialists right now.'
          buttonText='Get Started'
          link='/enquire'
        />

        <Process  />

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
