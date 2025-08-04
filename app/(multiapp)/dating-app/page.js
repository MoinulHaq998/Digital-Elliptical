"use client"
import React, { useState } from 'react'
import ThemeButton from '@/components/ui/ThemeButton'


// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/dating/left.webp'
import Right from '@/assets/multi-apps/dating/right.webp'
import Banner from '@/assets/multi-apps/dating/bannar.webp'
import One from '@/assets/multi-apps/dating/one.webp'
import Down from '@/assets/multi-apps/dating/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Twenty from '@/assets/multi-apps/cate/20.webp'
import TwentyOne from '@/assets/multi-apps/cate/21.webp'

import { Icon } from '@iconify/react'

const customer = [
    "Swipe to like/dislike",
    "Dedicated profile",
    "In-app chattingr",
    "Photo/video sharing",
    "Block/Report user",
    "Find matches",
    "Real-time notification",
    "Set dating choices",
];


const faqs = [
    {
      question: "How a dating app would be beneficial to my business?",
      answer: "Launching your dating mobile app is a smart move and it can bring in high revenue thereby helping people find their partners online. You can also display ads and ask users to buy subscriptions to monetize your app."
    },
    {
      question: "How much it would cost to develop a dating app?",
      answer: "The approximate development costs differ with different factors like app platform, app features, app type, app complexity, etc."
    },
    {
      question: "How much time it would take to build my dating app?",
      answer: "The time to build a dating app depends on the app features and functionalities you choose to integrate into your app and app complexity, etc."
    },
    {
      question: "Can track the progress of my app development project?",
      answer: "Yes, you can get regular reports on how your project is progressing through our project manager."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we do offer post-launch support so that you can offer an excellent user experience to your audience."
    }
  ];

function page() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null); // Collapse the active FAQ if clicked again
        } else {
            setActiveIndex(index); // Expand the selected FAQ
        }
    };

    return (
        <div>

            <section
                className="multi-apps-bg bg-no-repeat bg-center bg-cover h- w-full py-20 relative overflow-hidden"
            >
                <div className="container">
                    <div className="grid lg:grid-cols-6 gap-4">
                        <div className="col-span-1">
                            <Image src={Left} alt='image' height={2000} width={2000} className='hidden lg:block w-[160px] lg:w-[180px] 2xl:w-[200px] -rotate-12 absolute top-[100px] left-[50px]' />
                        </div>
                        <div className="grid place-content-center gap-6 text-center col-span-4">
                            <h1 className='font-extrabold text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px]'>Dating App Development
                            </h1>
                            <p className='text-[20px] lg:text-[22px]'>Let people share their feelings and thoughts through your dating app. Help users find their perfect match by investing in feature-rich dating app development services. Earn higher revenues by connecting people of similar interests.
                            </p>
                            <div>
                                <ThemeButton>Contact us</ThemeButton>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Image src={Right} alt='image' height={2000} width={2000} className='hidden lg:block w-[230px] xl:w-[250px] absolute top-[250px] right-[50px]' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Image src={Banner} alt='image' height={2000} width={2000} className='w-[75%] max-w-[1200px]' />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="lg:w-[65%] mx-auto">
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Dating App Development Solutions
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Dating apps assist people find their soulmates and companions online in todays busy world when we are unable to make in-person relationships. To locate people with similar interests or learn about their hobbies, likes, dislikes, etc., you can peruse thousands of profiles.
                                <br /><br />
                                Not only can dating apps facilitate online dating, but they also facilitate weddings. Many business owners are eager to launch their dating applications and are looking forward to on-demand dating app development solutions to help people connect, engage, and find their match.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Allow people to connect and engage with like-minded people and build strong relationships via dating apps
                            </h2>
                            <p className='text-[19px] text-justify'>
                                People can interact with each other through dating apps to find love and form relationships.
                                <br /><br />
                                Online dating apps are assisting people in meeting others who share their interests when everyone wants to have a mate with whom they can share things.
                                <br /><br />
                                If you are considering breaking into the lucrative online dating market, Digital Elliptical Enterprise Solutions can assist you in getting user-centric solutions that let people interact over a safe and interesting platform.
                                <br /><br />
                                In order to create a strong app for both the iOS and Android platforms, we offer custom and white label dating mobile app solutions. You may establish premium dating apps with the assistance of our team of dating app developers, who have in-depth understanding of UX/UI design, dating app development, backend development, and QA.
                                <br /><br />
                                We provide dating apps that enable you to monetize the app through in-app purchases, membership fees, etc.
                                <br /><br />
                                We make sure the dating app has all the necessary features, like spam filtering, date planner, private messaging, and much more. We are skilled at developing dating app solutions that satisfy your company requirements.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Dating App Development Solutions- Allow people to share their thoughts and connect on a secure platform
                            </h2>
                            <p className='text-[19px] text-justify'>
                                The conversation about the relationship economy is expanding quickly, and online platforms are becoming more popular than face-to-face interactions. Before deciding to meet someone in person, dating apps enable users to connect with others who share their interests online.
                                <br /><br />
                                Finding the ideal match used to be difficult, but dating apps have made it simpler to browse through several profiles. Entrepreneurs that want to enter the lucrative dating app market can do so. As a result, we assist clients in creating dating apps with the highest ROI.
                                <br /><br />
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-[90%] mx-auto flex flex-col md:flex-row md:items-center gap-4 xl:gap-52 bg-[#005e7c38] p-6 rounded-md mb-12'>
                        <div>
                            <h3 className='text-[18px] md:text-[25px] xl:text-[30px] mb-1'>
                                Choose A Highly-Scalable App Development
                            </h3>
                            <p className='text-[15px]'>Solution For Your Restaurant Business</p>
                        </div>
                        <div>
                            <ThemeButton>Contact us</ThemeButton>
                        </div>
                    </div>
                    <div className="lg:w-[65%] mx-auto">
                        <div className='mb-12'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Let people meet their perfect partners without any location barriers
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Being a dependable dating app development company, Digital Elliptical Enterprise Solutions, offer result-oriented mobile app development services in the USA that help people discover a new way of falling in love and meet their reliable partner.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-20'>
                <div className="container">
                    <div className="lg:w-1/2 mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
                            <div className="flex flex-col items-center">
                                <div className="mb-4 flex justify-center items-center">
                                    <Image src={Twenty} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                                </div>
                                <h3 className="text-[20px] font-bold mb-2">Dating Apps for Entrepreneurs
                                </h3>
                                <p className="text-sm">
                                    Launch your feature-rich dating app to help people find like-minded people and their partners
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="mb-4 flex justify-center items-center">
                                    <Image src={TwentyOne} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                                </div>
                                <h3 className="text-[20px] font-bold mb-2">Dating Apps for Start-ups
                                </h3>
                                <p className="text-sm">
                                    Get started with the fresh idea of launching a dating app to allow thousands of people to connect over your app and earn high revenues
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-20'>
                <div className="container">
                    <div className="lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 xl:gap-8 items-center">
                            <div className='flex justify-center md:justify-start'>
                                <Image src={One} alt='image' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
                            </div>
                            <div>
                                <h4 className='text-[37px] font-bold mb-6'>
                                    User Panel
                                </h4>
                                <div className="mt-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {customer.slice(0, 8).map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-4 ">
                                                <div className="bg-[#005e7c38] border border-[#061c2438] font-bold rounded-full py-1 px-2 flex items-center justify-center">
                                                    {`0${index + 1}`}
                                                </div>
                                                <span className="text-lg text-[#005e7c] font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#005e7c] py-10'>
                <div className="container">
                    <div className="grid lg:grid-cols-4 items-center">
                        <div className='flex flex-col gap-4'>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Revenue Tracking
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Membership level management
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Menu and Page Management
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Moderators
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                        </div>
                        <div className='lg:col-span-2 flex justify-center'>
                            <Image src={Down} alt='image' height={2000} width={2000} className='w-full max-w-[800px]' />
                        </div>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Content Moderation
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Custom Content Pages
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Feature Access Management
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Multilingual Support
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-20'>
                <div className="container">
                    <h2 className="text-center text-[20px] md:text-[30px] mb-16">
                        Integrate technology to build an engaging and secure dating app platform through on-demand dating app development solutions
                    </h2>
                    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Agreement} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Agreement</h3>
                            <p className="text-sm">
                                To begin, we will give you a Proposal and Sample. If you decide to acquire our services, you will be provided a contract to sign. At the time of signing, a 50% down payment will be required.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Cutomization} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Customization & Branding
                            </h3>
                            <p className="text-sm">
                                Our Designers will first give you an improved model of our product that incorporates your logo and colors. Minor layout adjustments will be made if necessary.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Setup} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Launch & Setup</h3>
                            <p className="text-sm">
                                In the next stage, our staff will build up a server and email you the application to trial. Following your approval, the program will be submitted to all of the appropriate App Stores for review.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Assistance} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Assistance</h3>
                            <p className="text-sm">
                                You will be needed to release the other 50% cash once the app is live in app stores, and we will transmit the Entire Code with License. If necessary, our team will explain to you how to access the building
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="container text-center">
                    <h2 className='text-[28px] font-bold uppercase mb-10'>
                        Frequently Asked Questions
                    </h2>
                    {/* First FAQ Section */}
                    <div className="lg:w-[75%] mx-auto" >
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-t border-gray-300 border-b overflow-hidden py-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left py-3 px-4 text-xl font-bold focus:outline-none flex items-center justify-between"
                                >
                                    <h3 className="font-bold">{faq.question}</h3>
                                    <Icon icon="basil:caret-right-solid" width="24" height="24" />
                                </button>

                                {/* Content visibility based on activeIndex */}
                                <div
                                    className={`transition-all duration-300 bg-gray-100 ease-in-out ${activeIndex === index ? 'max-h-[200px] p-4' : 'max-h-0 p-0'
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

        </div>
    )
}

export default page
