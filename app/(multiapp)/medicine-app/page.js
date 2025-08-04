"use client"
import React, { useState } from 'react'
import ThemeButton from '@/components/ui/ThemeButton'


// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/medicine/left.webp'
import Right from '@/assets/multi-apps/medicine/right.webp'
import Banner from '@/assets/multi-apps/medicine/bannar.webp'
import One from '@/assets/multi-apps/medicine/one.webp'
import Down from '@/assets/multi-apps/medicine/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Eight from '@/assets/multi-apps/cate/8.webp'
import Nine from '@/assets/multi-apps/cate/9.webp'
import Ten from '@/assets/multi-apps/cate/10.webp'
import Eleven from '@/assets/multi-apps/cate/11.webp'
import { Icon } from '@iconify/react'


const customer = [
    "Advanced Login Dashboard",
    "Profile Management System",
    "Interactive Home Screen",
    "Simple Menu",
    "Maps",
    "Easy Checkout Options",
    "Drug List Filter",
];

const faqs = [
    {
        question: 'How much it would cost to build a medicine delivery app?',
        answer: 'The medicine delivery cost solely depends on different factors like fixed/hourly rates of development, app design, app complexity, platform you wish to launch your app on, etc.'
    },
    {
        question: 'How long will it take to build my medicine delivery app?',
        answer: 'The time taken to build a medicine delivery app depends on the features you wish to integrate into the app, the complexity of the app, whether you need a custom or ready-made solution, etc.'
    },
    {
        question: 'Which platform should I choose to launch my app - Android or iOS?',
        answer: 'Well, if you are looking to target a huge customer base, then launch your medicine delivery app on both platforms.'
    },
    {
        question: 'Do you offer post-launch support for the app?',
        answer: 'Yes, we do offer post-launch support for your medicine delivery app so that it runs flawlessly.'
    },
    {
        question: 'Can you do modifications to my app post-launch?',
        answer: 'Certainly. We can modify your app post-launch as per the changes required like adding new features etc.'
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
                            <Image src={Left} alt='left' height={2000} width={2000} className='hidden lg:block w-[160px] lg:w-[180px] 2xl:w-[200px] -rotate-12 absolute top-[100px] left-[50px]' />
                        </div>
                        <div className="grid place-content-center gap-6 text-center col-span-4">
                            <h1 className='font-extrabold text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px]'>On-Demand Medicine Delivery App Development Solutions</h1>
                            <p className='text-[20px] lg:text-[22px]'>Help your pharmacy or medicine delivery business integrate medicine delivery app development solutions to allow users to browse through and order medicines and get delivered to their doorstep.</p>
                            <div>
                                <ThemeButton>Contact us</ThemeButton>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[230px] xl:w-[250px] absolute top-[250px] right-[50px]' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Image src={Banner} alt='banner' height={2000} width={2000} className='w-[75%] max-w-[1200px]' />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[65%] mx-auto">
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Medicine Delivery App Development Solutions
                            </h2>
                            <p className='text-[19px] text-justify'>
                                The majority of pharmacies and medicine delivery companies are turning to the development of medication delivery apps in response to the on-demand desire to have medications delivered to the door with only a few taps on smartphones. So that your pharmacy does not lose out on potential customers wishing to order medications online, we assist you in launching a strong medication delivery app.</p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Meet The increasing On-Demand Medicine Delivery Needs To Offer an Improved User Experience
                            </h2>
                            <p className='text-[19px] text-justify'>
                                To reach a large customer base, the majority of pharmacy stores nowadays are expanding their services online. You may construct a great interface with drug delivery app development to enhance user experience and keep current customers.
                                <br /><br />
                                At Digital Elliptical Enterprise Solutions, we assist you in bringing convenience to your company and customers while preventing lengthy lines at your pharmacy. We assist you in catering to the modern, tech-savvy consumers who are making online transactions. Our talented team of programrs creates scalable medication apps that are designed to make it simple for your customers to find and buy products around-the-clock.
                                <br /><br />
                                We assist you with white label medicine app creation services to increase on-demand because we recognise the significance of the medicine app for your business.</p>
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
                                Offer Seamless Medicine Delivery Services Through technology-driven Medicine App Delivery Solutions
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Digital Elliptical Enterprise Solutions, a reputable mobile app development company in the USA, works to offer medication delivery apps that make it simple for you to supply medications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Eight} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Medicine Delivery App for Independent Stores</h3>
                            <p className="text-sm">
                                To make your pharmacy stand out from the competition, launch your medication delivery app. By using on-demand pharmaceutical app development services, you can give your consumers real-time updates.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Nine} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Medicine Delivery App/Pharmacy app for Pharmacy Chains
                            </h3>
                            <p className="text-sm">
                                Manage chain of pharmacies through a single app and eliminate the medicine delivery hurdles.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Ten} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Medicine Ordering Application for Aggregators
                            </h3>
                            <p className="text-sm">
                                Through a powerful app, connect with a variety of pharmacies to sell medication in bulk and handle order monitoring.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Eleven} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Medicine Delivery App To Bring Customers And Local Pharmacies Under One Roof</h3>
                            <p className="text-sm">
                                Connect the customers within a specific location with the nearest pharmacy based on different criteria like timings, availability of medicines, etc
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 xl:gap-8 items-center">
                            <div className='flex'>
                                <Image src={One} alt='one' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
                            </div>
                            <div>
                                <h4 className='text-[37px] font-bold mb-6'>
                                    Customer Panel
                                </h4>
                                <p className='text-[19px]'>
                                    A user-friendly app that helps customers track and manage their orders easily
                                </p>
                                <div className="mt-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {customer.slice(0, 7).map((feature, index) => (
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
                                Interactive Profile
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Delivery-Area Management System

                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                SMS Assimilation

                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Time Management System
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                One-Click Help
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                        </div>
                        <div className='lg:col-span-2 flex justify-center'>
                            <Image src={Down} alt='down' height={2000} width={2000} className='w-full max-w-[800px]' />
                        </div>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Order & Transaction History

                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Deep Insights & Reports

                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Email Promotions System
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Social Media System
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Payment Tracking System
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
                        Meet The Modern Needs of The Logistics and Transportation Industry Through Tech-driven Solutions
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
