'use client'

import Image from 'next/image'
import React from 'react'
import {
    tabsData,
    industriesCardData,
    faqs,
    tabsApps
  } from "@/contant/servicesData/progreesiveService/iot-services/page";
import img1 from '@/assets/services/new-globe.webp'
import Process from '@/components/service/process/page'
import Reviews from '@/components/service/reviews/page'
import ServiceTabs from '@/components/service/service-tabs/page'
import ThemeButton from '@/components/ui/ThemeButton'
import Link from 'next/link'
import ServiceIndustriesCard from '@/components/service/service-Industries/page'
import Faq from '@/components/service/faqs/page'
import GetStarted from '@/components/service/get-started/page';

const page = () => {
    const navHeading = [
        { id: "technologies", name: "Technologies" },
        { id: "industires", name: "Industires" },
        { id: "ourProcess", name: "Our Process" },
        { id: "ourWork", name: "Our Work" },
    ]
  
    

    return (
        <>

            <section className='section-one'>
                <div className='container'>
                    <div className='grid grid-cols-12 gap-4 !min-h-[550px]'>
                        
                        <div className='col-span-12 lg:col-span-6 mt-8 lg:text-start text-center flex flex-col justify-center px-4 lg:px-12'>
                            <h1 className='lg:text-3xl text-2xl text-[#212529]  font-bold mb-2.5'>IoT App Development Services</h1>
                            <p className='text-[21px] leading-6 text-gray-600 mb-2'>
                            Internet of Things (IoT) cutting-edge solutions for your business
                            </p>
                            <p className='text-sm leading-6'>
                            The Internet of Things (IoT) is transforming every industry and business on earth. As one of the top IoT app development companies in the US, we offer end-to-end IoT backend and API development solutions for a developing organizations.
                            </p>
                            <div className='mt-12'>
                                <Link href={"/enquire"}>
                                    <ThemeButton>
                                        Contact Us
                                    </ThemeButton>
                                </Link>
                            </div>
                        </div>

                        <div className='col-span-12 lg:col-span-6 p-4 flex items-center justify-center'>
                            <Image src={img1} alt='main-image' className='!h-auto w-[90%]' width={600} height={600} />
                        </div>


                    </div>
                </div>
            </section>

            <section className='section-two relative'>
                <nav className=' bg-gray-100 py-4 mt-10 mb-4 sticky md:top-[72px] top-[60px] z-20 '>
                    <ul className='flex items-center justify-center flex-wrap lg:gap-32 md:gap-x-24 sm:gap-x-12 gap-x-4 gap-y-4'>
                        {navHeading.map(item => (
                            <li key={item.id} id={item.id} className='cursor-pointer md:text-lg text-xs relative group'>
                                {item.name}
                                <span className='absolute -bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300'></span>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ServiceTabs tabsData={tabsData} tabs={tabsApps} />

                <div className='pt-[100px]'>
          <div className='container'>
            <h4 className='md:text-3xl text-xl uppercase font-semibold text-gray-700 mb-3 text-center px-4'>
              iOS Development Solutions that are Versatile and Dynamic for a
              Variety of Industries
            </h4>
            <p className='mb-8 text-center md:text-lg sm:text-base text-sm'>
              We offer three different flexible engagement models that can help
              you take complete control of web development process. Each of our
              models leverages a result-oriented development process.
            </p>

            <div className='flex items-center sm:justify-center justify-around md:gap-2 flex-wrap md:px-8 px-4'>
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
          titile=" That's what our satisfied customers have to say."
        />
            </section>

            <section>
            <Faq
          title="Frequently Asked Questions"
          dis="We have compiled a number of the frequently asked questions (FAQs) from our users Check these Questions for better knowledge of the services and solutions which we are providing to our users."
          faqs={faqs}
        />
            </section>



        </>
    )
}

export default page
