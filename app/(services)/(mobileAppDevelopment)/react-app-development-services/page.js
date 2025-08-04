"use client";

import Image from "next/image";
import React from "react";
import img1 from "@/assets/services/react-app-bg.webp";
import img2 from "@/assets/services/new-r.svg";
import Process from "@/components/service/process/page";
import {
  choiceCardData,
  industriesCardData,
  faqs,
} from "@/contant/servicesData/mobileAppDevelopment/react-app-development-services/page";
import Reviews from "@/components/service/reviews/page";
import ThemeButton from "@/components/ui/ThemeButton";
import Link from "next/link";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import ChoiceCard from "@/components/service/choice-card/page";
import Faq from "@/components/service/faqs/page";
import GetStarted from "@/components/service/get-started/page";
import icon1 from "@/assets/services/service-icon/1.svg";
import icon2 from "@/assets/services/service-icon/2.svg";
import icon3 from "@/assets/services/service-icon/3.svg";
import icon4 from "@/assets/services/service-icon/4.svg";
import icon5 from "@/assets/services/service-icon/5.svg";
import icon6 from "@/assets/services/service-icon/6.svg";
import icon7 from "@/assets/services/service-icon/7.svg";

const ReactAPP = () => {
  const navHeading = [
    { id: "technologies", name: "Weapon" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
    { id: "ourWork", name: "Our Work" },
  ];

  const point = [
    {
      img: icon1,
      title: "Client-focused development",
      desc: " By tailoring them to their unique company requirements, we are the ones who offer our clients the greatest online, mobile, and Blockchain solutions ever.",
    },
    {
      img: icon2,
      title: "Team of Dedicated Developers",
      desc: "Each of our projects is given to a cost-effective specialised team that not only ensures quality but also offers our esteemed clients unmatched support and satisfaction.",
    },
    {
      img: icon3,
      title: "Backups of data",
      desc: " Regular backup has allowed us to remain operational in the difficult circumstances. We diligently preserve backups of customer projects so that we can react to catastrophes as soon as possible.",
    },
    {
      img: icon4,
      title: "Delivery of high-quality goods",
      desc: "We are committed to offering our customers high-quality items that satisfy all of their project requirements while offering the best prices available in the market.",
    },
    {
      img: icon5,
      title: "Development that is flexible",
      desc: " In order to deliver a top-notch, carefully constructed product, we employ an Agile Development process.",
    },
    {
      img: icon6,
      title: "Excellent Assistance",
      desc: " We are always accessible to help our clients in whatever manner we can at every stage of the project. Our technical staff puts in a lot of effort to make sure the finished product lives up to customer expectations.",
    },
    {
      img: icon7,
      title: "Data Security",
      desc: "By agreeing to an NDA, our company provides the maximum protection for all of your personal information. We provide top-notch products to our wealthy clients while maintaining anonymity.",
    },
  ];

  return (
    <>
      {/* hero Section */}
      <section className="section-one">
      <div className='container'>
          <div className='grid grid-cols-12 gap-4 !min-h-[550px] mt-10 md:mt-0'>
            <div className='col-span-12 lg:col-span-6 lg:text-start text-center flex flex-col justify-center px-1 lg:px-12 md:px:6'>
              <h1 className='lg:text-3xl md:text-2xl text-[#212529] text-[19px]  font-bold mb-2.5'>
                React Native Application Development
              </h1>

              <p className='md:text-sm text-[13px] md:text-black text-gray-800 leading-6'>
                Being a premier React Native app development company, we ensure
                your app is the most stable, sturdy and scalable in the market.
                Our React Native app development services offer you an app that
                functions faster, incurs less expenses and probably has the best
                user experience among its niche in the market. We leverage the
                benefits of React Native application development to help SMEs &
                Enterprises equally. Our React Native mobile app developers
                engage in discussion to understand your business needs.
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
                alt='main-image'
                className='!h-auto w-[75%]'
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

        <div className="pt-[100px] ">
          <div className="container">
            <h4 className="md:text-3xl text-xl uppercase font-semibold text-[#212529] mb-3 text-center px-4">
              iOS Development Solutions that are Versatile and Dynamic for a
              Variety of Industries
            </h4>
            <p className="mb-8 text-center md:text-lg sm:text-base text-sm">
              We offer three different flexible engagement models that can help
              you take complete control of web development process. Each of our
              models leverages a result-oriented development process.
            </p>

            <div className="flex items-center sm:justify-center justify-around md:gap-4 flex-wrap md:px-8 px-4">
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

        <div className="container ">
          <div className="grid grid-cols-12 gap-4 mb-4 justify-center !h-full">
            <div className="col-span-12 lg:col-span-6 p-4">
              <Image
                src={img2}
                alt="main-image"
                className="!h-[60%] w-full mt-20"
                width={2000}
                height={2000}
              />
            </div>
            <div className='col-span-12 lg:col-span-6 lg:text-start text-[#212529] text-center flex flex-col justify-center px-4 lg:px-6'>
              <h1 className='lg:text-3xl text-2xl   font-bold mb-2.5'>
                Digital Elliptical Enterprise Solutions - A leading React Native
                App Development Company
              </h1>

              <p className='text-sm leading-6'>
                We guarantee that your project will be the most reliable,
                strong, and scalable on the market as a leading React Native app
                development company. As We React We guarantee that your project
                will be the most reliable, strong, and scalable on the market as
                a leading React Native app development company. Our React Native
                app development services provide you with a software that
                operates more quickly, uses less resources, and arguably
                provides the greatest user experience in its market segment.
                </p>
                <p className="text-sm leading-6 mt-4">
                 We use the advantages of React Native application
                development to support both SMEs and Enterprises. To better
                understand your companies demands, our React Native mobile app
                developers have a conversation with you.
              </p>
              <div className='mt-12'>
                <Link href={"/enquire"}>
                  <ThemeButton>Contact Us</ThemeButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EDF2F7] py-20">
          <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
  <div className="md:col-span-6 bg-transparent p-6 rounded-2xl">
    <h6 className="text-xl md:text-3xl text-[#212529] font-bold mb-2">
      Our Unique Selling Points
    </h6>
    <p className="text-sm md:text-base">
      We are regarded as one of the best app development companies
      because of the services we provide.
    </p>
  </div>
  {point.map((item, index) => (
    <div
      key={index}
      className="md:col-span-6 flex flex-col md:flex-row items-center px-4 md:px-8 py-4 rounded-2xl bg-white"
    >
      <div className="mb-4 md:mb-0">
        <Image
          src={item.img}
          alt="images"
          width={500}
          height={500}
          className=" w-16 h-16 md:w-20 md:h-20"
        />
      </div>
      <div className="md:col-span-6 p-4 md:p-6 rounded-2xl">
        <h6 className="text-xl md:text-2xl text-[#212529] font-bold mb-1">
          {item.title}
        </h6>
        <p className="text-sm">{item.desc}</p>
      </div>
    </div>
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
};

export default ReactAPP;
