"use client";

import ThemeButton from "@/components/ui/ThemeButton";
import Image from "next/image";
import React from "react";
import Process from "@/components/service/process/page";
import {tabsData,industriesCardData,faqs,tabsApps} from "@/contant/servicesData/blockChain/blockchain-development-services/page";
import GetStarted from "@/components/service/get-started/page";
import Reviews from "@/components/service/reviews/page";
import ServicesTab from "@/components/service/service-tabs/page";
import ServiceIndustriesCard from "@/components/service/service-Industries/page";
import Faq from "@/components/service/faqs/page";
import Img1 from "@/assets/services/block-chain/1.svg";
import Img2 from "@/assets/services/block-chain/2.svg";
import Img3 from "@/assets/services/block-chain/3.svg";
import Img4 from "@/assets/services/block-chain/4.svg";

import Link from "next/link";

function page() {
 
  const navHeading = [
    { id: "technologies", name: "Technologies" },
    { id: "industires", name: "Industires" },
    { id: "ourProcess", name: "Our Process" },
    { id: "ourWork", name: "Our Work" },
  ];

  const navBar = [
    { id: "1", name: "Smart Contract", link: "/smart-contract" },
    { id: "2", name: "dAppps", link: "/dApps" },
    { id: "3", name: "Crypto Currency", link: "/crypto-currency" },
  ];

  const data = [
    {
      image: Img1,
      name: "Services for Resilient Blockchain Development.",
      head1:
        "Take advantage of our specialists' bespoke blockchain development.",
      dis1: "Digital Elliptical is a forward-thinking blockchain development firm that specializes in cryptocurrency creation, wallet development, smart contract development, and multichain/hyper ledger development. Our expert blockchain developers offer complete help to organizationss, brands, and startups interested in leveraging blockchain technology for digital transformation.",
      count1: "1",
    },
    {
      image: Img2,
      name: "Development of Smart Contracts",
      head1:
        "With our smart contract blockchain development services, you can pave the way for the future of digital transactions.",
      dis1: "Powered by blockchain technology, smart contracts are the future. Insanely accurate, secure, transparent and efficient, smart contracts redefine the ways through which you execute transactions. Make use of the most reliable technological implementation for your banking, real estate, healthcare, retail or any other business venture today.",
      count2: "2",
    },
    {
      image: Img3,
      name: "Development Services for dApps",
      head1:
        "Take Advantage of P2P Technology's Potential for Your Apps",
      dis1: "It's all about safety, security, and performance when it comes to decentralized application services. When blockchain technology is used to power the functioning of your dApps, it not only eliminates the need for a central authority or location, but it also provides a host of other advantages such as transparency, dependability, speed, security, and more. Get a one-of-a-kind dApp produced by the most reputable dApps development business, such as us.",
      count1: "3",
    },
    {
      image: Img4,
      name: "Development of Cryptocurrencies",
      head1:
        "Our one-of-a-kind cryptocurrency application development services make cryptocurrency trading simple.",
      dis1: "Get an application created and pushed out to startle your target segment at a time when the world is still coming to terms with what cryptocurrencies are. Our experts will walk you through the process of creating a cryptocurrency app for your company. We also come as a leading crypto-wallet development firm with the finest Blockchain frameworks..",
      count2: "4",
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
          <h1 className='text-[30px] font-bold'>Blockchain</h1>
          <p className=''>
          This Fixed Cost Model helps you to know exactly the final cost of your project. The more <br></br> planning you do for your business, the better outcome you will get.</p>
          <div className='mt-6'>
            
          </div>
        </div>
      </section>

      <section className='section-two relative'>

        <div className='w-full  h-full '>
          {data.map((val, idx) => (
            <div key={idx} className='w-[80%] lg:h-[90vh] h-fit  mx-auto flex lg:flex-row md:flex-row  flex-col '>
              <div
                className={`lg:w-[100%]  w-[100%] h-full  flex justify-center items-center ${
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
                      className='object-contain z-10 lg:p-4 p-0 overflow-hidden w-[100%] h-[100%]'
                    />
                  </div>
                </div>

                <div
                  className={`w-[100%] h-full lg:w-[50%] lg:mb-0 mb-4
                  `}
        
                >
                  <div className='lg:w-[100%] w-[100%] h-full relative  px-1'>
                 

                    <div className='w-full h-full  flex transition-all  ease-linear duration-200 '>
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

      
        <div className='pt-[100px]'>
          <div className='container'>
            <h4 className='md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4'>
            For Businesses, Dynamic Blockchain Solutions
            Across Many Industry Sections
            </h4>
            <p className='mb-8 text-center md:text-lg sm:text-base text-sm'>
            Several businesses across multiple industry sections have received end-to-end enterprise web development & design services from us. in major industries, our web solutions have delighted enterprises and end-users, including:
            </p>

            <div className='flex items-center sm:justify-center justify-around flex-wrap  px-4'>
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

       


         <Process  />

         <Reviews
          titile="We've Created Some Incredible Solutions. Take A Look At Some Of Our Previous Projects!"
          dis='Are You Having Trouble Making A Decision? Examine Our Most Recent Projects, Assess Our Capabilities As A Top Development Firm, And Make An Educated Decision Right Now.'
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
