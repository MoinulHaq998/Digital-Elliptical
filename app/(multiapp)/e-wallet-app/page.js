"use client"
import React, { useState } from 'react'
import ThemeButton from '@/components/ui/ThemeButton'


// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/wallet/left.webp'
import Right from '@/assets/multi-apps/wallet/right.webp'
import Banner from '@/assets/multi-apps/wallet/bannar.webp'
import One from '@/assets/multi-apps/wallet/one.webp'
// import Second from '@/assets/multi-apps/wallet/second.webp'
import Down from '@/assets/multi-apps/wallet/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Sixteen from '@/assets/multi-apps/cate/16.webp'
import Seventeen from '@/assets/multi-apps/cate/17.webp'
import Eighteen from '@/assets/multi-apps/cate/18.webp'
import Nineteen from '@/assets/multi-apps/cate/19.webp'
import { Icon } from '@iconify/react'


const customer = [
    "Pay Bills",
    "User Registration",
    "Money Transfer",
    "Add Balance",
    "Split Bills",
    "Transaction History",
    "Accept Payment",
    "POS Integration",
];


const faqs = [
    {
      question: "Can you please tell me about digital wallets?",
      answer: "Digital wallets or e-Wallet apps allow your customers to store money after they register with your app. They can link their credit/debit card or any other payment modes to store money. They can use the money stored into their e-wallets to make payments for any services or products they buy."
    },
    {
      question: "How much time it would take to build an e-wallet app?",
      answer: "The time for e-wallet app development entirely depends on a couple of factors like testing, features, MVP, functionalities, etc."
    },
    {
      question: "How much do I need to invest to build a digital/e-wallet app?",
      answer: "The e-wallet development cost depends on multiple factors like development time, app features, the complexity of the app, etc."
    },
    {
      question: "Can I update my e-wallet app post-launch?",
      answer: "Sure. We can help you update your app to ensure that you get desired results to serve your end-users efficiently."
    },
    {
      question: "Do you offer post-launch support services?",
      answer: "Yes. We do offer support post-app launch so that you do not face any issues with app functioning."
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
                            <h1 className='font-extrabold text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px]'>E-Wallet App development
                            </h1>
                            <p className='text-[20px] lg:text-[22px]'>Integrate E-Wallet App development services to integrate secure and easy digital payments. Modernise financial transactions with an adaptable digital wallet software to give your consumers a simple way to conduct online transactions.
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
                                E-wallet App Development Solutions
                            </h2>
                            <p className='text-[19px] text-justify'>
                                You can provide your users with an omnichannel experience by using an e-wallet or digital wallet app. The feature-rich E-Wallet app hasrevolutionizedonline transactions for both consumers and companies. It serves as a digital alternative to cards, cash, and online banking. There are several ways to pay with the digital wallet. Customers can use various coupons for discounts, cash in on reward points, earn loyalty points, etc. With Digital Wallet app development options, making payments remotely is more flexible and convenient.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Utilize secure alternatives to various payment ways with simple E-Wallet smartphone apps.

                            </h2>
                            <p className='text-[19px] text-justify'>
                                The way that online purchases were once conducted has changed with the emergence of E-Wallet smartphone apps. Businesses and customers are using it to move beyond the idea of making online payments via credit cards, net banking, etc.
                                <br /><br />
                                For iOS, Android, and wearables, Digital Elliptical Enterprise Solutions, a seasoned provider of digital wallet app development, offers feature-rich and safe E-Wallet mobile apps. With the aid of our capable e-wallet application development services, you can manage your finances, pay your bills, and conduct safe transactions.
                                <br /><br />
                                We create superior online payment apps with the aid of our talented E-Wallet app developers. We work hard to provide e-wallet app solutions that are fully functioning and meet the most recent industry standards. We employ modern technologies and methods that are appropriate for small and large businesses.
                                <br /><br />
                                At Digital Elliptical Enterprise Solutions, we deliver custom e-wallet app development solutions to initiate cashless payment options for both customers and businesses. We offer e-wallet app solutions that are compatible with Android and iOS platforms so that businesses can expand and reach a wider customer base.
                                <br /><br />
                                Our tech team is efficient in coding modern wallet apps with impeccable features like a secure payment gateway, login screen, change password, and many more. To help you stay ahead in the competition we integrate the latest payment technologies like iBeacon, Bluetooth, NFC, QR code configuration, etc that makes your app reliable and fast.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Utilize technology to improve the effectiveness of digital payment methods using e-wallet app development services.F
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Digital payments and e-Wallets have been gaining popularity across all age groups for a long now. People can engage in safe and contactless payment thanks to the many advantages of e-wallets. They can monitor internet transactions. The E-wallet can be connected to bank accounts and credit cards as payment options. The E-Wallet payment mechanism allows for worldwide remittances in a variety of currencies and automatically generates invoices and cash memos.
                                <br /><br />
                                Today, grocery stores, retailers, taxi drivers, logistics companies, e-commerce companies, etc. all use digital wallet apps. These wallets are quite simple to use and assist both businesses and customers in getting the most out of it.
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
                                Build a secure platform for seamless payment transactions online
                            </h2>
                            <p className='text-[19px] text-justify'>
                                As a reputable E-Wallet App development firm, Digital Elliptical Enterprise Solutions develops premium custom E-Wallet apps that let customers and companies conduct safe and easy financial transactions.
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
                                <Image src={Sixteen} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">E-Wallet App for Food Industry
                            </h3>
                            <p className="text-sm">
                                Add the E-Wallet feature to your app to process receipts and invoices more quickly. Manage food orders, monitor deliveries, and monitor payments and refunds to merchants.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Seventeen} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">E-Wallet App for Banks & Financial Institution
                            </h3>
                            <p className="text-sm">
                                To facilitate financial transfers, safe payments, and improved digital services, use the e-wallet app.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Eighteen} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">E-Wallet App for Retail and e-commerce
                            </h3>
                            <p className="text-sm">
                                Launch an e-wallet software to speed up checkout for your store, increase conversions, and decrease shopping cart abandonment.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Nineteen} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">E-Wallet App for Hospitality and Travel
                            </h3>
                            <p className="text-sm">
                                Make an e-wallet application to enable quick check-in and check-out. Enable secure money sending and receiving.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 xl:gap-8 items-center">
                            <div className='flex justify-center md:justify-start'>
                                <Image src={One} alt='one' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
                            </div>
                            <div>
                                <h4 className='text-[37px] font-bold mb-6'>
                                User Panel
                                </h4>
                                <p className='text-[19px]'>
                                The user panel helps users to book the car of their choice and calculate fares etc.
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
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#005e7c] py-10'>
                <div className="container">
                    <div className="grid lg:grid-cols-4 items-center">
                        <div className='flex flex-col gap-4'>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                            Manage Users
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                            Users Data Control
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                            Default Admin Panel
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                            Real-Time Analytics
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                        </div>
                        <div className='lg:col-span-2 flex justify-center'>
                            <Image src={Down} alt='down' height={2000} width={2000} className='w-full max-w-[800px]' />
                        </div>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                New Offers

                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                Add/Block Users

                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                Revenue Management
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                Reporting
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
                    Integrate a digital wallet payment system to promote secure transactions
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
