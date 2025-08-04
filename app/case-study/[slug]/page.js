"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import img1 from '@/assets/success-stories/detail/1.png'
import icon1 from '@/assets/success-stories/detail/icon1.png'
import icon2 from '@/assets/success-stories/detail/icon2.png'
import img2 from '@/assets/success-stories/detail/tablet.png'
import img3 from '@/assets/success-stories/detail/mobile.png'


import Faq from "@/components/service/faqs/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useParams, useRouter } from "next/navigation";
import { findBySlug } from "./constants";

const Page = () => {
    const { slug } = useParams()
    const router = useRouter()
    const [data, setData] = useState(null);
    console.log(slug);

    useEffect(() => {
        const findItem = findBySlug(slug)
        if (!findItem) router.back();
        setData(findItem)
    }, [slug])

    // const technologies = [
    //     'Flutter',
    //     'NodeJS',
    //     'AngularJS',
    //     'Loopback'
    // ];

    // const products = [
    //     {
    //         number: "1",
    //         name: "WorkZone",
    //         subtitle: "customer portal development.",
    //         description: "A comprehensive interface that seamlessly integrates customer service with advanced technology. Integrating directly with NTS's ERP system offers customers a live one-stop dashboard to view contracts, schedule equipment pickups, and manage charges. This empowers them with unparalleled oversight and control over their rentals. This application has transformed how NTS handles trench and traffic safety equipment rentals, increasing customer satisfaction with its simplicity and transparency.",
    //         features: [
    //             "Real-time data on rental status and payments",
    //             "Augmented self-service capabilities empower customers",
    //             "Enhanced user interface for straightforward data manipulation"
    //         ],
    //         imageUrl: img1
    //     },
    //     {
    //         number: "2",
    //         name: "RADR",
    //         subtitle: "mobile tracking application.",
    //         description: (
    //             <>
    //                 RADR answers NTS’s operational inefficiencies and pain points by replacing paper-based processes with an intuitive digital workflow. It is a transformative tool that streamlines yard operations by offering real-time updates, digital signature capture, and the flexibility to adjust agreements on the fly.
    //                 <br />
    //                 <br />
    //                 This innovative solution enables efficient management of rental contracts with a high level of convenience. Using tablet devices, salespeople and warehouse staff can quickly update the contract status and capture customer signatures, no matter where they are.
    //                 <br />
    //                 <br />
    //                 Even in the most remote construction sites, this system ensures smooth and seamless management of rental contracts, enabling accurate and efficient capture of all necessary information.
    //             </>
    //         ),
    //         features: [
    //             "GPS-based equipment tracking",
    //             "Real-time status updates",
    //             "Inventory management system"
    //         ],
    //         imageUrl: img1
    //     },
    //     {
    //         number: "3",
    //         name: "JobBox",
    //         subtitle: "field service application.",
    //         description: "An integrated solution for field service management and coordination...",
    //         features: [
    //             "Job scheduling and dispatch",
    //             "Digital documentation",
    //             "Real-time communication"
    //         ], 
    //         imageUrl: img1
    //     }
    // ];

    console.log(data?.cardDescription)
    console.log(data)

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null); // Collapse the active FAQ if clicked again
        } else {
            setActiveIndex(index); // Expand the selected FAQ
        }
    };

    return (
        

        <div className='container bg-white'>

            <section className="my-16">
                <div className="w-full md:w-[95%] mx-auto">
                    <div className="py-10 rounded-2xl" style={{ backgroundColor: data?.bgColor }} >
                        <div className="md:w-[70%] mx-auto px-4 text-center">
                            <h1 className="md:text-4xl text-2xl font-bold text-white mb-2">{data?.heading}</h1>
                            <p className="text-white md:text-lg text-md">{data?.description}</p>
                            <div className="flex justify-center">
                                <Image src={data?.first} alt="img" width={2000} height={2000} className="w-[100%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container">
                    <div className=" mx-auto space-y-8 md:p-8  p-4">
                        <div className="text-center mb-12">
                            <h2 className="md:text-4xl text-2xl font-bold mb-4">{data?.fourHeading}</h2>
                            <p className="text-lg text-gray-600" style={{ whiteSpace: 'pre-line' }}>
                                {data?.fourDescription} 
                            </p>
                            {data?.foreDescription?.map((item, index) => (
                                <p key={index} className="text-gray-600 md:text-lg text-sm my-6">
                                    {item.para}
                                </p>
                            ))}
                        </div>
                        <div className=" gap-10 items-center">
                            <div className="">
                                <Image
                                    src={data?.third}
                                    alt="img"  height={2000} className="w-[100%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container">
                    <div className=" text-white rounded-2xl" style={{ backgroundColor: data?.bgColor }}>
                        <div className="md:px-20 px-4 mx-auto space-y-8 p-8">
                            <h2 className="text-[32px] font-bold text-center mb-12">
                                {data?.fiveHeading}
                            </h2>
                            <div className="space-y-6 text-center text-lg leading-relaxed mb-1" style={{ whiteSpace: 'pre-line' }}>
                                {data?.fiveDescription}
                            </div>
                            <div className="space-y-6 text-center text-lg leading-relaxed mb-1" style={{ whiteSpace: 'pre-line' }}>
                                {data?.fiveDescription1}
                            </div>
                            <div className="space-y-6 text-center text-lg leading-relaxed mb-1" style={{ whiteSpace: 'pre-line' }}>
                                {data?.fiveDescription2}
                            </div>
                            <div className="space-y-6 text-center text-lg leading-relaxed mb-1" style={{ whiteSpace: 'pre-line' }}>
                                {data?.fiveDescription3}
                            </div>
                            <div className="space-y-6 text-center text-lg leading-relaxed mb-1" style={{ whiteSpace: 'pre-line' }}>
                                {data?.fiveDescription4}
                            </div>
                            <div className="text-center">
                                <a href="#"
                                    className="inline-block px-8 py-3 bg-coral-500 bg-white text-black rounded-lg hover:bg-coral-600 transition-colors"
                                >
                                    Visit ntsafety.com
                                </a>
                            </div>

                        </div>
                        <div className="py-6 px-4 bg-[white]/30  rounded-b-2xl">
                            <div className="flex flex-wrap items-center justify-center gap-6">
                                <span className="font-bold">Technologies used:</span>
                                {data?.technologies.map((item, index) => (
                                    <span className="px-4 py-2  font-bold rounded-md"
                                        key={index}
                                        style={{ backgroundColor: data?.bgColor }}>
                                        {item.tech}
                                    </span>
                                ))}
                                {/* {technologies.map((tech) => (
                                    <span className="px-4 py-2  font-bold rounded-md"
                                        key={tech}
                                        style={{ backgroundColor: data?.bgColor }}>
                                        {tech}
                                    </span>
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" text-white md:py-10 h-full py-2 md:px-6 px-1 my-16"
            style={{ backgroundColor: data?.bgColor }}>
                <div>
                    {/* Swiper Container */}
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1} // Default for small screens
                        
                        autoplay={{ 
                            delay: 3000, // 5 seconds between slides
                            disableOnInteraction: false, // Keeps autoplay running even when user interacts
                            
                        }}
                        breakpoints={{
                            1024: { slidesPerView: 1, },
                        }}
                        modules={[Autoplay]}
                        className="swiper-container h-[100%]"
                    >
                        {/* Swiper Slides */}
                        {[data?.slider1, data?.slider2, data?.slider3, data?.slider4].map((image, idx) => (
                            <SwiperSlide key={idx} >
                                <div className="relative rounded-lg  overflow-hidden">
                                
                                {/* Image */}
                                <Image
                                    src={image}
                                    alt={`Project ${idx + 1}`}
                                    width={2000}
                                    height={2000}
                                    className="w-full h-full object-cover"
                                />
                                </div>
                            </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </section>

            <section className="my-16 ">
                <div className="container text-center">
                    <h2 className='md:text-[28px] text-[25px] font-bold uppercase mb-10'>
                        Frequently Asked Questions
                    </h2>
                    {/* First FAQ Section */}
                    <div className="lg:w-[75%] mx-auto" >
                        {data?.faqs.map((faq, index) => (
                            <div key={index} className="border-t border-gray-300 border-b overflow-hidden py-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left py-3 px-4 md:text-xl text-md font-bold focus:outline-none flex items-center justify-between"
                                >
                                    <h3 className="font-bold">{faq.question}</h3>
                                    <Icon icon="basil:caret-right-solid" width="24" height="24" />
                                </button>

                                {/* Content visibility based on activeIndex */}
                                <div
                                    className={`transition-all md:text-[16px] mx-4 text-sm duration-300 bg-gray-100 text-start ease-in-out ${activeIndex === index ? 'max-h-[200px] p-4' : 'max-h-0 p-0'
                                        }`}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second FAQ Section */}
                </div>
            </section>




            {/* <section className="mb-12">
                <div className="container">
                    <div className="rounded-3xl bg-gray-200 p-8 md:p-12 lg:px-16 lg:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                       
                        <div className="w-full">
                            <h2 className="text-3xl md:text-[48px] leading-10 md:leading-[60px] font-bold text-gray-900 mb-4">
                                {data?.secHeading}
                            </h2>
                            {data?.secDescription?.map((item, index) => (
                                <p key={index} className="text-gray-700 text-lg mb-6">
                                    {item.para}
                                </p>
                            ))}
                            <div className="relative w-full">
                            <Image
                                src={data?.second}
                                alt="Portal Screenshot"
                                width={2000}
                                height={2000}
                                className="rounded-lg"
                            />
                        </div>
                        </div>

                      
                       
                    </div>
                </div>
            </section> */}

            {/* <section className="mb-12">
                <div className="container">
                    <div className="bg-[#005e7c] text-white rounded-3xl p-6 md:p-12">
                        <h2 className="text-[30px] md:text-[48px] font-bold text-white mb-8">
                           
                            <span>{data?.thirdHeading}</span>
                        </h2>
                        <p className="text-lg mb-12 text-gray-300">
                            {data?.thirdDescription}
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#2d2d4b] p-6 rounded-3xl">
                                <div className="mb-8">
                                    <Image src={icon1} alt="img" width={2000} height={2000} className="w-16 mb-2" />
                                    <h3 className="text-[32px] font-semibold">{data?.cardHeading}</h3>
                                </div>
                                <p className="text-gray-300 text-lg whitespace-pre-line	">
                                    {data?.cardDescription}
                                </p>
                            </div>
                          
                            <div className="bg-[#2d2d4b] p-6 rounded-3xl">
                                <div className="mb-8">
                                    <Image src={icon2} alt="img" width={2000} height={2000} className="w-16 mb-2" />
                                    <h3 className="text-[32px] font-semibold">{data?.cardTwoHeading}</h3>
                                </div>
                                <p className="text-gray-300 text-lg whitespace-pre-line">
                                {data?.cardTwoDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="mb-12">
                <div className="container">
                    <div className="bg-gray-200 rounded-[40px] p-6 md:p-20">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                {data?.sixHeading}
                            </h2>

                            <p className="text-gray-700 text-md md:text-lg leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                                {data?.sixDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="mb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        {products.map((product, index) => (
                            <React.Fragment key={index}>
                                <div className="space-y-6 mb-20 bg-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12 lg:p-20 rounded-3xl">
                                    <div className="order-2 md:order-1">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                                            Product {product.number}:{' '}
                                            <span className="text-[#005e7c]">{product.name}</span>
                                        </h2>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#005e7c] mt-4 mb-6">
                                            {product.subtitle}
                                        </h3>

                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                                            {product.description}
                                        </p>

                                        <div className="space-y-4">
                                            <h4 className="text-xl font-semibold">Features:</h4>
                                            <ul className="space-y-3">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-start space-x-2">
                                                <span className="text-gray-300">•</span>
                                                <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="order-1 md:order-2 relative">
                                        <div className="w-[100%] md:w-[600px]">
                                            <Image
                                                src={product.imageUrl}
                                                alt={`${product.name} interface`}
                                                width={2000}
                                                height={2000}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>  */}

        </div>
    );
};

export default Page;