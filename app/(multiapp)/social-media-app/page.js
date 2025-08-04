"use client"
import React, { useState } from 'react'
import ThemeButton from '@/components/ui/ThemeButton'


// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/social/left.webp'
import Right from '@/assets/multi-apps/social/right.webp'
import Banner from '@/assets/multi-apps/social/bannar.webp'
import One from '@/assets/multi-apps/social/one.webp'
// import Down from '@/assets/multi-apps/social/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Five from '@/assets/multi-apps/cate/5.webp'
import Six from '@/assets/multi-apps/cate/6.webp'
import Seven from '@/assets/multi-apps/cate/7.webp'
import { Icon } from '@iconify/react'

const customer = [
    "Profile",
    "Publish Content",
    "Login/Sign Up",
    "Edit/ Delete Content",
    "Create Groups",
    "Add & Search Friend",
    "Chat",
    "Newsfeed",
];

const faqs = [
    {
        question: 'How a social media app would benefit my business?',
        answer: 'Today, all users are inclined toward using smartphones and technology. Among all other apps, social networking apps are the most trending ones. So, investing in social media apps can help you launch a platform that helps brands gain recognition and help individuals connect with others across the world to have a great social networking experience.'
    },
    {
        question: 'How long will it take to build my social media app?',
        answer: 'The time taken to build a social media app depends on whether you want to develop the basic or advanced version of the app. Also, other factors that determine the overall app development time are the experience of the developer, features and functionalities, tech-stack, and platform.'
    },
    {
        question: 'How much it would cost to build a social media app?',
        answer: 'Just like the app development time, the development cost depends on different factors like app complexity, features, business idea, etc.'
    },
    {
        question: 'Do you provide post-launch support?',
        answer: 'Yes. We offer post-launch support for your social media app so that your app users enjoy uninterrupted services.'
    },
    {
        question: 'What are the advanced features you will include in the social networking app?',
        answer: 'Some of the advanced features that we would integrate into your app are live streaming, a news feed, in-app chat, in-app calling, profile customization, etc.'
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
                            <h1 className='font-extrabold text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px]'>On-Demand Social Media App Development Solutions</h1>
                            <p className='text-[20px] lg:text-[22px]'>We Help Your Food Business Go Online With The Finest Mobile & Web App Development for Restaurant</p>
                            <div>
                                <ThemeButton>Contact us</ThemeButton>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[230px] xl:w-[250px] absolute top-[200px] right-[50px]' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Image src={Banner} alt='banner' height={2000} width={2000} className='w-full max-w-[1200px]' />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[65%] mx-auto">
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Social Media App Development Solutions
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Streamline the interaction method for people across the world through responsive and simple social media app development solutions. Social media platforms are an integral part of connecting brands with their target audience. Our compatible social media app solutions are developed to work on multiple platforms.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Switch To Feature-rich Social Media Apps And Connect With The World
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Get ready to help your target audience engage on social media platforms and connect to more and more people across the world. Today, social media platforms are helping enterprises and brands interact with their customers.
                                <br /><br />
                                The opportunity for brands to come closer to their potential audience through social media platforms has encouraged them to invest in on-demand social media app development and understand their needs and preferences better. Digital Elliptical Enterprise Solutions offers comprehensive white label social media app development solutions to meet their individual business needs. We help brands launch powerful social media apps that engage global audiences effectively.
                                <br /><br />
                                We believe in enhancing conversations for brands and businesses in real-time. Making the most of social media apps can help brands generate more revenues and grab future opportunities that take their business to a new level.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Social Media App Development Solutions
                            </h2>
                            <p className='text-[19px] text-justify'>
                                This is the time when people want to interact with others across the world. The social media apps let them connect instantly and share their opinions and experiences with others to improve their social life. Today, brands are aware of “social life” on social media and hence work closely with social media app development company that can offer curated solutions for the social networking app development process to get productive apps.
                                <br /><br />
                                Most entrepreneurs and businesses want to expand their business network and enhance credibility, boost conversion, and improve customer service and brand loyalty through social media apps.
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
                                Custom Social Media App To Connect, Interact and Convert
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Being a reliable mobile app development service in the USA, Digital Elliptical Enterprise Solutions offers custom social media app development solutions to cater to modern business requirements. We help you launch social media apps that enable users to experience exceptional social networking across the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Five} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Social Media App For Start-ups</h3>
                            <p className="text-sm">
                                Turn to a responsive social media app to enter the social media world and earn maximum ROI. Help your start-up get a profitable start.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Six} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Social Media App For Entrepreneurs
                            </h3>
                            <p className="text-sm">
                                Do not miss out on your loyal customer base. Interact with them to expand your business. Launch your social media app to reach more new customers and retain the old ones by interacting with them regularly to boost user engagement.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Seven} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Social Media App For Organizations / Established Businesses</h3>
                            <p className="text-sm">
                                Care for your existing customer base while adding new ones to your brand network. Gain more credibility as you grow to beat the competition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 xl:gap-8 items-center">
                            <div>
                                <h4 className='text-[37px] font-bold mb-6'>
                                    Customer App
                                </h4>
                                <p className='text-[19px]'>
                                    The customer app helps users create and manage their content effectively on social media app :
                                </p>
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
                            <div className='flex justify-end'>
                                <Image src={Right} alt='right' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 2xl:gap-8 items-center">
                            <div>
                                <Image src={One} alt='one' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
                            </div>
                            <div>
                                <h4 className='text-[37px] font-bold mb-6'>
                                    About App
                                </h4>
                                <p className='text-[19px]'>
                                    Partner with us for our EV Spot App Development Solutions and contribute to the growth of the electric vehicle industry. Provide EV owners with a seamless, efficient, and sustainable charging experience through our innovative app. Contact us today to embark on your journey into the world of EV charging app development.
                                </p>
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
                                Dashboard
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
                            <Image src={One} alt='one' height={2000} width={2000} className='w-full max-w-[800px]' />
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
                    <h2 className="text-center text-[20px] mb-16">
                        Integrate technology to build an engaging and secure EV-Spot app platform through on-demand EV-Spot app development solutions
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
