"use client";

import ThemeButton from "@/components/ui/ThemeButton";
import Image from "next/image";
import React from "react";
import Process from "@/components/service/process/page";
import { tabsData,industriesCardData,faqs,solution,tabsApps} from "@/contant/servicesData/webDevelopment/web-development-services/page";
import Reviews from "@/components/service/reviews/page";
import Solution from '@/components/service/solution/page'
import GetStarted from "@/components/service/get-started/page";
import ServicesTab from "@/components/service/service-tabs/page";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import Faq from "@/components/service/faqs/page";

import Discuss from "@/assets/services/1.svg";
import Define from "@/assets/services/2.svg";
import Design from "@/assets/services/3.svg";
import PWA from "@/assets/services/pwa.svg";
import Word from "@/assets/services/5.svg";
import Deploy from "@/assets/services/deploy.svg";
import Link from "next/link";

function page() {


  
 
  const navHeading = [
    { id: "technologies", name: "Technologies" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
    { id: "ourWork", name: "Our Work" },
  ];

  const navBar = [
    { id: "1", name: "Full Stack", link: "/full-stack-website" },
    { id: "2", name: "Ecommerce", link: "/ecommerce-website" },
    { id: "3", name: "Wordpress", link: "/wordpress-website" },
    { id: "4", name: "Magento", link: "/magento-web" },
    { id: "5", name: "Progressive Web", link: "/progressive-web-application" },
    { id: "6", name: "Desktop Application", link: "/desktop-based-application" },
  ];

  const data = [
    {
      image: Discuss,
      name: "Full Stack Web Development Services",
      head1:
        "With our all-inclusive web development solutions, you can put your company on the fast track to success.",
      dis1: "Digital Elliptical is a top-rated Node.JS development firm in the United States that provides a full range of web development services. Our Node.JS web developers offer turnkey services to assist you in launching a website, web app, or custom solutionutilizingcutting-edge technology.",
      count1: "1",
    },
    {
      image: Define,
      name: "Professional eCommerce Development Services",
      head1:
        "With the aid of our professionals, you may create your own eCommerce website.",
      dis1: "Digital Elliptical provides dependable, strong, and scalable eCommerce development services as a professional CMS and eCommerce development firm. To provide end-to-end Magento development, Shopify development, and WordPress development solutions, our experienced team of eCommerce and CMS development professionals follows best development techniques.",
      count2: "2",
    },
    {
      image: Design,
      name: "Magento Development",
      head1:
        "With Magento Web Development, you can give your ecommerce website the flexibility it deserves.",
      dis1: "If you're new to eCommerce web development, you're undoubtedly unaware of Magento's incredible features. Magento 2 development has everything you need to make your eCommerce website stand out from the crowd, from fast-loading pages and SEO-friendly features to configurable functionality and comprehensive reporting tools. On top of that, you'll require our high-quality Magento development services.",
      count1: "3",
    },
    {
      image: PWA,
      name: "Services for the development of progressive web applications",
      head1:
        "Delight your users with a mobile experience that is both straightforward and user-friendly.",
      dis1: "Tech startups, multinational corporations, and large-scale organizationss may all benefit from Digital Elliptical's comprehensive progressive web app development services. Our progressive developers create and build progressive web apps that provide your prospects and target audiences a near-native experience.",
      count2: "4",
    },

    {
      image: Word,
      name: "Wordpress Development",
      head1:
        "Nobody does it better than us when it comes to seamless WordPress development.",
      dis1: "Whether you're creating an eCommerce site or an on-demand site, you'll need a good content management system to handle all of the tiresome duties. That's why we've put up a list of good WordPress development services to brighten your day. We provide all WordPress-related services, from generic to custom WordPress development. Find out more in the sections below.",
      count1: "5",
    },
    {
      image: Deploy,
      name: "CMS(Content Management System)",
      head1:
        "Target your Potential Clients on Elite Apple Devices with an iOS mobile app",
      dis1: "Being one of the leading iOS app development companies in USA and the Middle East, Digital Elliptical provides end-to-end iOS app development services. Our expert team of iPhone app developers follow best mobile app development practices to come up with intuitive iOS apps.",
      count2: "6",
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
          <h1 className='text-[30px] font-bold'>WEB DEVELOPMENT</h1>
          <p className=''>
            Custom Web Development Services for Forward-thinking Businesses
          </p>
          <div className='mt-6'>
           
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

       <Solution title='QUICKLY AND EASILY ESTABLISH AN INTUITIVE WEB SOLUTION' head='Digital Elliptical' solution={solution}/>

        <div className='w-full  h-full '>
          {data.map((val, idx) => (
            <div key={idx} className='w-[80%] lg:h-[90vh] h-fit  mx-auto flex lg:flex-row md:flex-row  flex-col '>
              <div
                className={`lg:w-[100%]  w-[100%] h-full fixed-cost flex justify-center items-center ${
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
                      className='object-contain  hover:scale-[0.9] transition-all ease-linear duration-300 cursor-pointer 
                           scale-[0.7] opacity-[.5] hover:opacity-[50] z-10 lg:p-4 p-0 overflow-hidden w-[100%] h-[100%]'
                    />
                  </div>
                </div>

                <div
                  className={`w-[100%] h-full lg:w-[50%] lg:mb-0 mb-4
          ${idx % 2 === 0 ? "border-L" : "border-R"}`}
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
        
        <ServicesTab tabsData={tabsData} tabs={tabsApps} />

      
        <div className='pt-[100px]'>
          <div className='container'>
            <h4 className='md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4'>
            Industries We Serve
            </h4>
            <p className='mb-8 text-center md:text-lg sm:text-base text-sm'>
            We have provided end-to-end enterprise web development and design services to a variety of companies in a variety of industries. Our online solutions have wowed businesses and end-users in a variety of sectors, including:
            </p>

            <div className='flex items-center sm:justify-center justify-around md:gap-6 flex-wrap md:px-20 px-4'>
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
          heading="Improve Your Web Development Projects"
          description="Get in contact with our web development professionals right away"
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
  );
}

export default page;
