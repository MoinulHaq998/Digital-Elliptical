'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import featureImage from "@/assets/apps/app-detail/food-delivery/01.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "@/assets/apps/01.webp"
import img2 from "@/assets/apps/02.webp"
import img3 from "@/assets/apps/dummy/mob1.png"
import img4 from "@/assets/apps/dummy/mob2.png"
import featureImg1 from "@/assets/apps/dummy/img-1.webp"
import accImg1 from "@/assets/apps/dummy/img-2.png"
import accImg2 from "@/assets/apps/dummy/img-3.webp"
import accImg3 from "@/assets/apps/dummy/img-4.webp"
import accImg4 from "@/assets/apps/dummy/img-5.webp"
import accImg5 from "@/assets/apps/dummy/img-6.webp"
import tabImg1 from "@/assets/apps/dummy/img-8.webp"
import cardImg from "@/assets/apps/dummy/img-9.webp"
import dashapp from "@/assets/apps/dummy/dashapp.png"

import flexWheeler1 from "@/assets/success-stories/flex-wheeler/l-01.webp"
import flexWheeler2 from "@/assets/success-stories/flex-wheeler/1-03.webp"
import flexWheeler3 from "@/assets/success-stories/flex-wheeler/1-05.webp"
import flexWheeler4 from "@/assets/success-stories/flex-wheeler/1-06.webp"
import avGlobal1 from "@/assets/success-stories/av-global/1-01.webp";
import avGlobal2 from "@/assets/success-stories/av-global/1-03.webp";
import avGlobal3 from "@/assets/success-stories/av-global/1-05.webp";
import aidora1 from "@/assets/success-stories/aidora/1-03.webp";
import aidora2 from "@/assets/success-stories/aidora/1-04.webp";
import aidora3 from "@/assets/success-stories/aidora/1-05.webp";
import aidora4 from "@/assets/success-stories/aidora/1-06.webp";
import betlab1 from "@/assets/success-stories/betlab/1-03.webp";
import betlab2 from "@/assets/success-stories/betlab/1-04.webp";
import betlab3 from "@/assets/success-stories/betlab/1-05.webp";
import betlab4 from "@/assets/success-stories/betlab/1-06.webp";
import whychoose from "@/assets/apps/dummy/whychoose.webp";



import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import MarqueeComponent from '@/components/ui/Marquee';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import TabMenu from '@/components/partials/Apps/TabMenu';
// import { Marquee } from '@/components/shared/Marquee';


const Murammat = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const accordionItems = [
        {
            title: "Access ride comfort options",
            content: "Explore ride options for a comfortable journey.",
            image: img3,
        },
        {
            title: "Get estimated trip cost",
            content: "Access the estimated trip cost for all vehicle options and book the vehicle that fits your budget.",
            image: accImg3,
        },
        {
            title: "Contact the driver",
            content: "Easily connect with your driver for seamless communication.",
            image: accImg2,
        },
        {
            title: "Track driver location",
            content: "Track your driver's location in real-time for better coordination.",
            image: accImg4,
        },
        {
            title: "Use multiple payment options",
            content: "Pay conveniently using a variety of payment options.",
            image: accImg5,
        },
    ];
    return (
        <div className="md:flex mt-6">
            <div className="sm:w-6/12 flex items-center justify-center  rounded-3xl overflow-hidden sm:p-5 p-2" >
                {
                    activeIndex !== null && (
                        <Image
                            src={accordionItems[activeIndex].image}
                            alt={accordionItems[activeIndex].title}
                            className="max-w-full rounded-3xl h-auto transition-all duration-300 ease-in-out"
                            width={2000}
                            height={2000}
                        />
                    )
                }
            </div>
            <div className="sm:w-1/2 px-4 py-6">
                {accordionItems.map((item, index) => (
                    <div key={index} className={`border-b mb-3 border-gray-300 ${activeIndex === index ? "border-2 rounded-xl bg-gray-50" : " bg-white"}`}>
                        {/* Accordion Header */}
                        <button
                            className={`w-full text-left px-4 pt-4 pb-4 flex justify-between items-center focus:outline-none `}
                            onClick={() => handleAccordionClick(index)}
                        >
                            <span className="text-lg font-semibold">{item.title}</span>
                            <span>
                                <Icon icon={activeIndex === index ? "bitcoin-icons:caret-up-outline" : "bitcoin-icons:caret-down-outline"} width="24" height="24" />
                            </span>
                        </button>

                        {/* Accordion Content */}
                        {activeIndex === index && (
                            <div className="text-start px-4 text-sm font-semibold pb-5 text-gray-700">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
                <Link href={"#"}>
                    <h5 className='text-start pl-4 text-primary pt-3 flex items-center gap-1'>
                        More Features <Icon icon="ph:caret-double-right-bold" width="14" height="14" />
                    </h5>
                </Link>
            </div>
        </div>
    )
}
const FlexWheeler = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const flexWheelerAccordionItems = [
        {
            title: "How to accept a ride request",
            content: "To accept a ride request, simply tap on the 'Accept' button once a rider's request appears on your screen.",
            image: flexWheeler1,
        },
        {
            title: "How to track rider location",
            content: "You can track your rider's location in real-time through the app, ensuring you arrive at the correct pickup point.",
            image: flexWheeler2,
        },
        {
            title: "How to set your availability",
            content: "You can set your availability in the app by switching between 'Online' and 'Offline' status at any time.",
            image: flexWheeler3,
        },
        {
            title: "How to navigate during a ride",
            content: "The app provides real-time navigation to help you reach the rider’s destination without any hassle.",
            image: flexWheeler4,
        },

    ];
    return (
        <div className="sm:flex mt-6">
            <div className="sm:w-6/12 flex items-center justify-center  rounded-3xl overflow-hidden sm:p-5 p-2" >
                {
                    activeIndex !== null && (
                        <Image
                            src={flexWheelerAccordionItems[activeIndex].image}
                            alt={flexWheelerAccordionItems[activeIndex].title}
                            className="max-w-full rounded-3xl h-auto transition-all duration-300 ease-in-out"
                            width={2000}
                            height={2000}
                        />
                    )
                }
            </div>
            <div className="sm:w-1/2 md:px-4 px-3 py-6">
                {flexWheelerAccordionItems.map((item, index) => (
                    <div key={index} className={`border-b mb-3 border-gray-300 ${activeIndex === index ? "border-2 rounded-xl bg-gray-50" : " bg-white"}`}>
                        {/* Accordion Header */}
                        <button
                            className={`w-full text-left px-4 pt-4 pb-4 flex justify-between items-center focus:outline-none `}
                            onClick={() => handleAccordionClick(index)}
                        >
                            <span className="text-lg font-semibold">{item.title}</span>
                            <span>
                                <Icon icon={activeIndex === index ? "bitcoin-icons:caret-up-outline" : "bitcoin-icons:caret-down-outline"} width="24" height="24" />
                            </span>
                        </button>

                        {/* Accordion Content */}
                        {activeIndex === index && (
                            <div className="text-start px-4 text-sm font-semibold pb-5 text-gray-700">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
                <Link href={"#"}>
                    <h5 className='text-start pl-4 text-primary pt-3 flex items-center gap-1'>
                        More Features <Icon icon="ph:caret-double-right-bold" width="14" height="14" />
                    </h5>
                </Link>
            </div>
        </div>
    )
}
const AvGlobe = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const avGlobeAccordionItems = [
        {
            title: "How to accept a ride request",
            content: "To accept a ride request, simply tap on the 'Accept' button once a rider's request appears on your screen.",
            image: avGlobal1,
        },
        {
            title: "How to track rider location",
            content: "You can track your rider's location in real-time through the app, ensuring you arrive at the correct pickup point.",
            image: avGlobal2,
        },
        {
            title: "How to set your availability",
            content: "You can set your availability in the app by switching between 'Online' and 'Offline' status at any time.",
            image: avGlobal3,
        },

    ];
    return (
        <div className="sm:flex mt-6">
            <div className="sm:w-6/12 flex items-center justify-center  rounded-3xl overflow-hidden sm:p-5 p-2" >
                {
                    activeIndex !== null && (
                        <Image
                            src={avGlobeAccordionItems[activeIndex].image}
                            alt={avGlobeAccordionItems[activeIndex].title}
                            className="max-w-full rounded-3xl h-auto transition-all duration-300 ease-in-out"
                            width={2000}
                            height={2000}
                        />
                    )
                }
            </div>
            <div className="sm:w-1/2 md:px-4 px-3 py-6">
                {avGlobeAccordionItems.map((item, index) => (
                    <div key={index} className={`border-b mb-3 border-gray-300 ${activeIndex === index ? "border-2 rounded-xl bg-gray-50" : " bg-white"}`}>
                        {/* Accordion Header */}
                        <button
                            className={`w-full text-left px-4 pt-4 pb-4 flex justify-between items-center focus:outline-none `}
                            onClick={() => handleAccordionClick(index)}
                        >
                            <span className="text-lg font-semibold">{item.title}</span>
                            <span>
                                <Icon icon={activeIndex === index ? "bitcoin-icons:caret-up-outline" : "bitcoin-icons:caret-down-outline"} width="24" height="24" />
                            </span>
                        </button>

                        {/* Accordion Content */}
                        {activeIndex === index && (
                            <div className="text-start px-4 text-sm font-semibold pb-5 text-gray-700">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
                <Link href={"#"}>
                    <h5 className='text-start pl-4 text-primary pt-3 flex items-center gap-1'>
                        More Features <Icon icon="ph:caret-double-right-bold" width="14" height="14" />
                    </h5>
                </Link>
            </div>
        </div>
    )
}
const Aidora = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const aidoraAccordionItems = [
        {
            title: "How to accept a ride request",
            content: "To accept a ride request, simply tap on the 'Accept' button once a rider's request appears on your screen.",
            image: aidora1,
        },
        {
            title: "How to track rider location",
            content: "You can track your rider's location in real-time through the app, ensuring you arrive at the correct pickup point.",
            image: aidora2,
        },
        {
            title: "How to set your availability",
            content: "You can set your availability in the app by switching between 'Online' and 'Offline' status at any time.",
            image: aidora3,
        },
        {
            title: "How to set your availability",
            content: "You can set your availability in the app by switching between 'Online' and 'Offline' status at any time.",
            image: aidora4,
        },

    ];
    return (
        <div className="sm:flex mt-6">
            <div className="sm:w-6/12 flex items-center justify-center  rounded-3xl overflow-hidden sm:p-5 p-2" >
                {
                    activeIndex !== null && (
                        <Image
                            src={aidoraAccordionItems[activeIndex].image}
                            alt={aidoraAccordionItems[activeIndex].title}
                            className="max-w-full rounded-3xl h-auto transition-all duration-300 ease-in-out"
                            width={2000}
                            height={2000}
                        />
                    )
                }
            </div>
            <div className="sm:w-1/2 md:px-4 px-3 py-6">
                {aidoraAccordionItems.map((item, index) => (
                    <div key={index} className={`border-b mb-3 border-gray-300 ${activeIndex === index ? "border-2 rounded-xl bg-gray-50" : " bg-white"}`}>
                        {/* Accordion Header */}
                        <button
                            className={`w-full text-left px-4 pt-4 pb-4 flex justify-between items-center focus:outline-none `}
                            onClick={() => handleAccordionClick(index)}
                        >
                            <span className="text-lg font-semibold">{item.title}</span>
                            <span>
                                <Icon icon={activeIndex === index ? "bitcoin-icons:caret-up-outline" : "bitcoin-icons:caret-down-outline"} width="24" height="24" />
                            </span>
                        </button>

                        {/* Accordion Content */}
                        {activeIndex === index && (
                            <div className="text-start px-4 text-sm font-semibold pb-5 text-gray-700">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
                <Link href={"#"}>
                    <h5 className='text-start pl-4 text-primary pt-3 flex items-center gap-1'>
                        More Features <Icon icon="ph:caret-double-right-bold" width="14" height="14" />
                    </h5>
                </Link>
            </div>
        </div>
    )
}
const BetLab = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const betLabAccordionItems = [
        {
            title: "How to accept a ride request",
            content: "To accept a ride request, simply tap on the 'Accept' button once a rider's request appears on your screen.",
            image: betlab1,
        },
        {
            title: "How to track rider location",
            content: "You can track your rider's location in real-time through the app, ensuring you arrive at the correct pickup point.",
            image: betlab2,
        },
        {
            title: "How to set your availability",
            content: "You can set your availability in the app by switching between 'Online' and 'Offline' status at any time.",
            image: betlab3,
        },
        {
            title: "How to set your availability",
            content: "You can set your availability in the app by switching between 'Online' and 'Offline' status at any time.",
            image: betlab4,
        },

    ];
    return (
        <div className="sm:flex mt-6">
            <div className="sm:w-6/12 flex items-center justify-center  rounded-3xl overflow-hidden sm:p-5 p-2" >
                {
                    activeIndex !== null && (
                        <Image
                            src={betLabAccordionItems[activeIndex].image}
                            alt={betLabAccordionItems[activeIndex].title}
                            className="max-w-full rounded-3xl h-auto transition-all duration-300 ease-in-out"
                            width={2000}
                            height={2000}
                        />
                    )
                }
            </div>
            <div className="sm:w-1/2 md:px-4 px-3 py-6">
                {betLabAccordionItems.map((item, index) => (
                    <div key={index} className={`border-b mb-3 border-gray-300 ${activeIndex === index ? "border-2 rounded-xl bg-gray-50" : " bg-white"}`}>
                        {/* Accordion Header */}
                        <button
                            className={`w-full text-left px-4 pt-4 pb-4 flex justify-between items-center focus:outline-none `}
                            onClick={() => handleAccordionClick(index)}
                        >
                            <span className="text-lg font-semibold">{item.title}</span>
                            <span>
                                <Icon icon={activeIndex === index ? "bitcoin-icons:caret-up-outline" : "bitcoin-icons:caret-down-outline"} width="24" height="24" />
                            </span>
                        </button>

                        {/* Accordion Content */}
                        {activeIndex === index && (
                            <div className="text-start px-4 text-sm font-semibold pb-5 text-gray-700">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
                <Link href={"#"}>
                    <h5 className='text-start pl-4 text-primary pt-3 flex items-center gap-1'>
                        More Features <Icon icon="ph:caret-double-right-bold" width="14" height="14" />
                    </h5>
                </Link>
            </div>
        </div>
    )
}
function FoodDelivery() {
    const [selectedTab, setSelectedTab] = useState("Murammat");

    const appData = [
        {
            title: "Startups",
            des: "Organize tasks and manage small teams effectively",
            img: ""
        },
        {
            title: "Corporate Offices",
            des: "Enhance productivity in large-scale operations with task delegation and team collaboration.",
            img: ""
        },
        {
            title: "Freelancers",
            des: "Streamline client projects and communication with an intuitive task and deadline management system.",
            img: ""
        },
    ]

    const techStackData = [
        {
          title: "Frontend",
          description: "Flutter (for mobile) and React.js (for web).",
          icon: "🚀", // Replace with actual icons if available
        },
        {
          title: "Backend",
          description: "Node.js with MongoDB for real-time updates and data storage.",
          icon: "⚙️",
        },
        
      ];
  

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-10">
                <div className="flex justify-center md:w-8/12 mb-4 md:mb-0">
                    <div className="relative">
                        <Image src={featureImage} alt='feature-img' width={2000} height={2000} className='w-full max-w-xs md:max-w-xl' />
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 md:text-left">
                    <h1 className="md:text-6xl text-4xl font-bold text-black md:mb-4">Local Vibes</h1>
                    <p className="md:text-xl  mb-4">Your Ultimate Office Management Solution</p>
                    
                    <div className='mb-4'>
                        <Swiper
                            direction="vertical" // Set the direction to vertical
                            className="mySwiper"
                            style={{ height: '30px' }} // Adjust the height as needed
                            autoplay={{
                                delay: 1000, // Delay between transitions (in milliseconds)
                                disableOnInteraction: false, // Autoplay will not stop on user interaction
                            }}
                            loop={true} // Enables infinite looping
                            modules={[Autoplay]} // Include the Autoplay module
                        >
                            <SwiperSlide>
                                <Image src={img1} alt='feature-img' width={2000} height={2000} className='h-6 w-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={img2} alt='feature-img' width={2000} height={2000} className='h-6 w-auto' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* <ul className="text-gray-600 text-sm space-y-1 mb-6">
                        <li>✔️ Free server installation</li>
                        <li>✔️ Free app submission</li>
                    </ul> */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <button className="border border-blue-600 text-blue-600 px-10 py-3 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:shadow-lg">
                            Get a demo
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-10 py-3 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:shadow-lg">
                            Free guidebook
                        </button>
                    </div>
                </div>        
            </div>

            <div className='container md:mt-12 mt-8'>
                <div className='md:flex items-center justify-center  '>
                    <div className='md:px-12 px-5 md:mb-0 mb-8'>
                        <h6 className='text-4xl font-bold mb-1'>Introducing our</h6>
                        <h6 className='text-4xl font-bold mb-2 text-primary '>Local Vibes</h6>
                        <p className=' tracking-wider text-[#454545] font-serif text-[15px] mb-3'>
                            Local Vibes is a comprehensive office management app designed to streamline operations, enhance collaboration, and boost productivity within workplaces. With its user-friendly interface and powerful features. 
                        </p>
                        <p className=' tracking-wider text-[#454545] font-serif text-[15px] mb-3'>
                            Local Vibes caters to businesses of all sizes, offering tailored solutions to meet the diverse needs of modern offices.
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Image src={featureImg1} alt='' height={2000} width={2000} className='w-[100%] h-auto' />
                    </div>
                         
                </div>
            </div>

            <div className='container md:mt-24 mt-12 text-center'>
                <h5 className='text-[32px] font-bold'>
                    Top features of the Uber Clone
                </h5>

                <div className="flex items-center justify-center mt-6">
                    <div className="flex flex-wrap justify-center border border-gray-300 sm:rounded-full rounded-lg p-1">
    <button
      className={`px-4 py-2 rounded-full transition-all duration-500 ease-in-out m-1 ${selectedTab === "Murammat"
        ? "bg-primary text-white"
        : "bg-white text-black"
        }`}
      onClick={() => setSelectedTab("Murammat")}
    >
      Murammat
    </button>

    <button
      className={`px-4 py-2 rounded-full transition-all duration-500 ease-in-out m-1 ${selectedTab === "Flex Wheeler"
        ? "bg-primary text-white"
        : "bg-white text-black"
        }`}
      onClick={() => setSelectedTab("Flex Wheeler")}
    >
      Flex Wheeler
    </button>

    <button
      className={`px-4 py-2 rounded-full transition-all duration-500 ease-in-out m-1 ${selectedTab === "AV Globe"
        ? "bg-primary text-white"
        : "bg-white text-black"
        }`}
      onClick={() => setSelectedTab("AV Globe")}
    >
      AV Globe
    </button>

    <button
      className={`px-4 py-2 rounded-full transition-all duration-500 ease-in-out m-1 ${selectedTab === "Aidora"
        ? "bg-primary text-white"
        : "bg-white text-black"
        }`}
      onClick={() => setSelectedTab("Aidora")}
    >
      Aidora
    </button>

    <button
      className={`px-4 py-2 rounded-full transition-all duration-500 ease-in-out m-1 ${selectedTab === "BetLab"
        ? "bg-primary text-white"
        : "bg-white text-black"
        }`}
      onClick={() => setSelectedTab("BetLab")}
    >
      BetLab
    </button>
                    </div>
                </div>

                <div className="mt-4">
                    {selectedTab === "Murammat" && <Murammat />}
                    {selectedTab === "Flex Wheeler" && <FlexWheeler />}
                    {selectedTab === "AV Globe" && <AvGlobe />}
                    {selectedTab === "Aidora" && <Aidora />}
                    {selectedTab === "BetLab" && <BetLab />}
                    {/* <Rider />
                    <Driver /> */}
                </div>
            </div>

            <div className="container md:mt-12 mt-20">
                <div className="md:flex items-center justify-center gap-8">
                {/* Text Section */}
                    <div className="md:px-12 px-4 md:mb-0 mb-8 md:w-[70%]">
                        <h6 className="text-3xl font-bold mb-6 text-primary">Key Features</h6>
                        <ul className="tracking-wider text-gray-700 font-serif text-base leading-6 space-y-2 pl-3">
    <li><span className="font-semibold">Task Management:</span> 
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Create, assign, and monitor tasks with deadlines.</li>
            <li>Real-time updates on task progress and completion.</li>
            <li>Prioritization options to focus on high-impact tasks.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Employee Management:</span> 
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Maintain detailed employee profiles, including roles, departments, and contact details.</li>
            <li>Attendance tracking with biometric or manual inputs.</li>
            <li>Leave and holiday management for streamlined approvals.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Communication Hub:</span>
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Instant messaging for internal communication.</li>
            <li>Group chats and project-based communication channels.</li>
            <li>Notifications and alerts to keep everyone informed.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Meeting and Scheduling:</span> 
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Calendar integration for seamless meeting scheduling.</li>
            <li>Room booking system with availability status.</li>
            <li>Automated reminders and follow-ups for meetings.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Document Management:</span> 
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Secure storage for office documents and records.</li>
            <li>Categorization for easy access and sharing.</li>
            <li>Version control to track document revisions.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Expense and Budget Management:</span> 
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Track office expenses and generate detailed reports.</li>
            <li>Set budgets for departments or projects.</li>
            <li>Approvals for expense claims directly within the app.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Project Management:</span> 
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Define project goals, milestones, and deadlines.</li>
            <li>Assign roles and monitor team performance.</li>
            <li>Generate progress reports with visual dashboards.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Office Resource Management:</span> 
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Inventory tracking for office supplies.</li>
            <li>Request and approval system for resources.</li>
            <li>Real-time status updates on available resources.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Performance Analytics:</span> 
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Insights into team productivity and efficiency.</li>
            <li>Detailed analytics for task, project, and resource usage.</li>
            <li>Exportable reports to aid decision-making.</li>
        </ul>
    </li>
    <li><span className="font-semibold">Customization and Branding:</span>
        <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Customize the app interface to reflect your company’s branding.</li>
            <li>Flexible modules that adapt to your business processes.</li>
            <li>Multilingual support for global teams.</li>
        </ul>
    </li>
</ul>

                    </div>
                {/* Image Section */}
                    <div className="flex items-center justify-center md:w-[30%]">
                                        <Image
                                        src={dashapp}
                                        alt="Dashboard App"
                                        height={2000}
                                        width={2000}
                                        className="w-full h-auto rounded-2xl shadow-md hover:scale-105 transform transition-all duration-300"
                                        />
                    </div>
                </div>
            </div>

            <div className='mt-24 bg-primary bg-opacity-5 min-h-[100vh] w-full'>
                <div className="pt-20">
                    <h2 className='text-center text-4xl font-bold '>
                        Manage the platform, in one place
                    </h2>

                    <div className='mt-12'>
                        <TabMenu />
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 container py-14">
                <div className="mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                    Technology Stack
                </h2>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
          {techStackData.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
                </div>
                </div>
            </div>

            <div className='mt-12'>
                <div className="container md:py-12">
                    <h4 className='text-3xl font-bold text-primary text-center '>
                    Why Local Vibes?</h4>
            
                    <div className='mt-10'>
                        <div className='container md:mt-12 mt-10'>
                            <div className='md:flex items-center justify-center gap-8'>
                                <div className='flex items-center justify-center w-full md:w-1/2'>
                                    <Image src={featureImg1} alt='' height={2000} width={2000} className='w-[100%] h-auto px-2' />
                                </div>
                                <div className='md:w-1/2 px-2'>
                                <p className="tracking-wider text-gray-700 font-serif text-base leading-7 space-y-3 pl-4 list-disc">
                                    Local Vibes isn’t just an office management app; it’s a productivity powerhouse. 
                                    It empowers businesses to achieve more with less effort by automating everyday operations, fostering collaboration, and offering insightful analytics.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-12'>
    <div className="container md:py-12">
        <h4 className='text-3xl font-bold text-primary text-center mb-6'>
            Challenges Addressed
        </h4>

        <div className='mt-10'>
            <div className='container md:mt-12 mt-10'>
                <div className='md:flex items-center justify-center gap-6'>
                    <div className='md:w-1/2 px-1'>
                        <div className='space-y-4'>
                            <div className='p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500 ease-in-out group hover:scale-105'>
                                <h6 className='text-lg font-semibold mb-1 text-gray-700 group-hover:text-primary'>
                                    Inefficient Communication
                                </h6>
                                <p className="tracking-wider text-gray-700 font-serif text-base leading-6">
                                    Eliminated bottlenecks with a centralized communication hub.
                                </p>
                            </div>

                            <div className='p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500 ease-in-out group hover:scale-105'>
                                <h6 className='text-lg font-semibold mb-1 text-gray-700 group-hover:text-primary'>
                                    Manual Task Tracking
                                </h6>
                                <p className="tracking-wider text-gray-700 font-serif text-base leading-6">
                                    Automated task assignments and progress tracking.
                                </p>
                            </div>

                            <div className='p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500 ease-in-out group hover:scale-105'>
                                <h6 className='text-lg font-semibold mb-1 text-gray-700 group-hover:text-primary'>
                                    Resource Mismanagement
                                </h6>
                                <p className="tracking-wider text-gray-700 font-serif text-base leading-6">
                                    Introduced real-time inventory and resource tracking.
                                </p>
                            </div>

                            <div className='p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500 ease-in-out group hover:scale-105'>
                                <h6 className='text-lg font-semibold mb-1 text-gray-700 group-hover:text-primary'>
                                    Scattered Data
                                </h6>
                                <p className="tracking-wider text-gray-700 font-serif text-base leading-6">
                                    Integrated all office operations into a single platform for better accessibility.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-full md:w-1/2'>
                        <Image src={whychoose} alt='Illustration of challenges addressed' height={2000} width={2000} className='w-full h-auto rounded-xl shadow-lg mt-2 md:mt-0' />
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
      
            <div className='md:mt-24 mt-14'>
                <div className="container">
                    <h2 className='text-center md:text-4xl text-3xl font-bold '>
                    Use Cases
                    </h2>
                    <div className='grid grid-cols-12 gap-6 mt-8'>
                        {
                            appData.map((item, idx) => (
                                <div key={idx} className='md:col-span-4 col-span-12'>
                                    <div className='border bg-gray-50 rounded-xl h-[360px] relative px-6 py-6 overflow-hidden'>
                                        <h4 className='text-xl font-bold'>
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.des}
                                        </p>

                                        <div className='flex items-center gap-3 mt-5'>
                                            <button className="px-4 py-2 rounded-md duration-500 border-[1px] border-black hover:bg-primary hover:text-white group flex items-center hover:border-white gap-1">
                                                <Icon icon="basil:app-store-outline" width="20" height="20" className="text-primary group-hover:text-white duration-200" />
                                                Download
                                            </button>
                                            
                                        </div>
                                        <div className='absolute -bottom-36 -right-8 duration-700' >
                                            <Image
                                                src={cardImg}
                                                alt="card-image"
                                                width={2000}
                                                height={2000}
                                                className='h-80 w-auto hover:scale-105 -rotate-[10deg] hover:-rotate-[15deg] duration-300'
                                            />
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='container md:mt-12 mt-8'>
                <div className='w-full max-w-6xl mx-auto'>
                    <MarqueeComponent />
                </div>
            </div>

        </div>
    )
}

export default FoodDelivery
