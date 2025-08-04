import React from 'react'
import ThemeButton from '@/components/ui/ThemeButton'


// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/e-commerce/left.webp'
import Right from '@/assets/multi-apps/e-commerce/right.webp'
import Banner from '@/assets/multi-apps/e-commerce/bannar.webp'
import One from '@/assets/multi-apps/e-commerce/one.webp'
import Down from '@/assets/multi-apps/e-commerce/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'

const about = [
    "Customized Solutions",
    "Secure Transactions",
    "User-Friendly Interface",
    "Scalability",
    "Mobile Optimization",
    "Integration Capabilities",
    "Ongoing Support",
];

function page() {
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
                            <h1 className='font-extrabold text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>On-Demand e-commerce Delivery App Development Solutions</h1>
                            <p className='text-[20px] lg:text-[22px]'>We Help Your Food Business Go Online With The Finest Mobile & Web App Development for Restaurant</p>
                            <div>
                                <ThemeButton>Contact us</ThemeButton>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[230px] xl:w-[250px] absolute top-[250px] right-[50px]' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <Image src={Banner} alt='banner' height={2000} width={2000} className='w-full max-w-[1200px]' />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[65%] mx-auto">
                        <div className='mb-12'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                E-Commerce App Development Solutions</h2>
                            <p className='text-[19px] text-justify'>
                                Expert e-commerce app development service creating innovative, user-friendly apps for seamless online shopping experiences. Customizable solutions, secure transactions, and intuitive designs drive business growth. Maximize your digital storefront today!</p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Get Your E-Commerce App</h2>
                            <p className='text-[19px] text-justify'>
                                Leading e-commerce app development service, where we transform your vision into a thriving online business. With our expertise and dedication, we create innovative, user-friendly apps that provide seamless shopping experiences for your customers.
                                <br /><br />
                                Our team of skilled developers understands the evolving e-commerce landscape and stays up-to-date with the latest trends and technologies. We leverage this knowledge to build custom solutions tailored to your specific business requirements. Whether you are a startup or an established brand, we have the tools and expertise to take your online store to new heights.
                                <br /><br />
                                Security is a top priority for us. We employ robust encryption protocols, secure payment gateways, and stringent authentication methods to ensure safe transactions and protect sensitive customer data. Trust and reliability are key pillars of our service, and we leave no stone unturned in providing a secure platform for your customers to shop with confidence.
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
                                E-Commerce App Solutions- Make Your E-Commerce App More Simple</h2>
                            <p className='text-[19px] text-justify'>
                                We understand that every business is unique, and our e-commerce app development service reflects this understanding. Our solutions are fully customizable, allowing you to create a personalized brand identity and deliver a tailored shopping experience to your customers. From intuitive navigation and search functionalities to seamless integration with inventory management systems and third-party tools, we provide a comprehensive package to streamline your operations.
                                <br /><br />
                                Design is at the core of our app development process. We create visually appealing and intuitive interfaces that captivate your customers and keep them engaged. By optimizing the user experience and incorporating responsive design principles, we ensure your app looks and performs flawlessly across devices, including smartphones, tablets, and desktops.
                                <br /><br />
                                Ready to maximize your digital storefront? Partner with us for e-commerce app development that drives business growth, enhances customer satisfaction, and sets you apart from the competition. Contact us today to discuss your project and embark on the journey to e-commerce success.
                            </p>
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
                                    Our e-commerce app development service offers tailor-made solutions to meet your specific business needs.                                </p>
                                <div className="mt-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {about.slice(0, 7).map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-2">
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
                                Tailored Solutions
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Seamless Experience
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Robust Security
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                        </div>
                        <div className='lg:col-span-2 flex justify-center'>
                            <Image src={Down} alt='down' height={2000} width={2000} className='w-full max-w-[800px]' />
                        </div>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Scalable Architecture
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Efficient Integration
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Reliable Support
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <h2 className="text-center text-[28px] mb-16">
                        Ways to Boost Your Business using Our Food Delivery App Solutions
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

        </div>
    )
}

export default page
