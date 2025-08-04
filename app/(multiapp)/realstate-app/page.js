"use client"
import React, { useState } from 'react'
import ThemeButton from '@/components/ui/ThemeButton'


// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/real/left.webp'
import Right from '@/assets/multi-apps/real/right.webp'
import Banner from '@/assets/multi-apps/real/bannar.webp'
import One from '@/assets/multi-apps/real/one.webp'
import Down from '@/assets/multi-apps/real/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Eight from '@/assets/multi-apps/cate/8.webp'
import Nine from '@/assets/multi-apps/cate/9.webp'
import Ten from '@/assets/multi-apps/cate/10.webp'
import Eleven from '@/assets/multi-apps/cate/11.webp'
import Twelve from '@/assets/multi-apps/cate/12.webp'
import { Icon } from '@iconify/react'


const customer = [
    "Search",
    "Property Information",
    "Sell or Rent",
    "Agent Information",
    "Maps",
    "Comparison",
    "Support",
];

const faqs = [
    {
        question: "How much it would cost to develop a real estate mobile app?",
        answer: "The cost of building a real estate app depends on the app complexity, app features, functionalities, tech-stack, etc."
    },
    {
        question: "How much time it would take to build a real estate app?",
        answer: "It entirely depends on whether you choose custom or ready-made solutions, features and functionalities you wish to integrate into your app, etc."
    },
    {
        question: "How can my business benefit from a real estate mobile app?",
        answer: "You can get multiple benefits for your real estate business upon launching your mobile app. As the app has appealing UX/UI, amazing navigation, responsiveness, etc which boosts user engagements to help reach out to more potential customers."
    },
    {
        question: "Will you provide post-launch support for my real estate app?",
        answer: "Yes, we will provide post-launch support so that your real estate app remains fully functional."
    },
    {
        question: "Can I ask for modifications to my app after it goes live?",
        answer: "Certainly. We do the modifications as suggested to your app even after it goes live."
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
                            <h1 className='font-extrabold text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px]'>On-Demand Real Estate App Development Solutions</h1>
                            <p className='text-[20px] lg:text-[22px]'>Elevate your real-estate business through interactive real estate app development solutions to offer a user-oriented experience. Amplify your business effectively with responsive solutions.
                            </p>
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
                                Real Estate App Development Solutions

                            </h2>
                            <p className='text-[19px] text-justify'>
                                Real estate mobile app solutions have helped accelerate property transactions by nearly 400%. The stakeholders can simply shop for their dream properties through a few swipes and clicks through their smartphones while sitting on the couch. It is possible through innovative real estate mobile app development which is why most real estate business owners are investing in mobile app solutions to connect real estate agents, buyers, and sellers.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Robust on-demand real estate app to meet the present & future property needs of all stakeholders
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Nowadays, real estate app development services are helping real estate businesses meet the needs of all stakeholders (sellers, real estate agents, and buyers) to help them make property buying and selling easier.
                                <br /><br />
                                At, Digital Elliptical Enterprise Solutions, we assist sellers and buyers re-imagine their dream properties. We offer full-fledged mobile app development solutions that allow buyers to search for a place they like and agents move towards closing deals in a given time. Our talented crew of real estate app developers helps you turn your idea into a responsive real estate app that boosts conversions.
                                <br /><br />
                                We help you design the prototype of the app and help you get a fair idea of the working model in earlier stages. We understand the fact that a real estate platform can help you get a competitive edge over others and boost your online presence. Hence, we combine creativity and technology to help grab different opportunities available in the market through iOS or Android app development solutions. We integrate the latest technology to help your business grow.
                                <br /><br />
                                We can help you leverage custom or white label real estate app development solutions to meet individual business needs.
                                <br /><br />
                                As a mobile app company for a real estate business, our motive is to help our clients help people buy their dream properties and allow agents to engage in hassle-free property dealing. We understand the fact that buying or selling properties is a lifetime decision and people invest a lot of money before making any decision. Hence, we allow your real estate business let buyers, sellers, and agents sail through a smooth buying and selling process for properties of their choice.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Real estate App Development Solutions- Helping people buy and sell properties in real-time
                            </h2>
                            <p className='text-[19px] text-justify'>
                                It is important to offer convenient platforms and services that people can trust to rent, buy or sell properties. Thankfully, real estate mobile app development services are helping people accomplish their purpose and let your real estate business gain success
                                <br /><br />
                                A real estate app helps you offer round-the-clock services to people without being physically present to offer support. You can show the property of their choice through images, virtual tours, and video galleries to help them get a fair idea of the property, and nearby locations. This is possible through GPS features that are integrated into your real estate app.
                                <br /><br />
                                The smart features based on technologies like AR/VR, IoT, AI, and ML on your app are quite useful to customers to buy and sell properties. With smart search options based on different criteria, property search has been simplified for users.
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
                                Connect buyers and sellers on a single app for transparent and faster decision making for property dealings
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Being a trusted real estate app development company, Digital Elliptical Enterprise Solutions, we create a premium mobile app for your real estate business. We offer both Android and iOS app development solutions to help you reach a wider audience.
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
                                <Image src={Eight} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Real Estate App for Realtors</h3>
                            <p className="text-sm">
                                Launch your high-end Realtor App to manage leads to your brokerage along with your properties</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Nine} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Real Estate App for Builder/Contractors
                            </h3>
                            <p className="text-sm">
                                Simplify your routine processes and get higher deal conversions and maintain transparency in all property dealings through a real estate app.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Ten} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Real Estate App for Mortgage companies
                            </h3>
                            <p className="text-sm">
                                Help clients find the precise mortgage loan, offer expert advice, and integrate a mortgage calculator to offer a seamless user experience through a real estate app.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Eleven} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Real Estate App for Construction firms</h3>
                            <p className="text-sm">
                                Increase collaboration, help clients view your upcoming and existing projects to choose the property of their choice with a user-friendly app
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Twelve} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Real Estate App for Agents and Brokers
                            </h3>
                            <p className="text-sm">
                                Manage your brokerage fees, display available properties effectively, manage clients’ bookings and reach out to a wide customer base.
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
                                    User Panel
                                </h4>
                                <p className='text-[19px]'>
                                    Riders’ app helps riders book, track, and schedule their rides
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
                            <div className='flex justify-center md:justify-end'>
                                <Image src={One} alt='one' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
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
                                Dashboard
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Properties

                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Profiles
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Leads and Sales
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                        </div>
                        <div className='lg:col-span-2 flex justify-center'>
                            <Image src={Down} alt='down' height={2000} width={2000} className='w-full max-w-[800px]' />
                        </div>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Revenue

                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Subscriptions

                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Analytics Report
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Marketing
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
                        Accelerate Your Business With Our Agile Multi-Service Booking App Solutions
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
