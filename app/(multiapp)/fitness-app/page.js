import React from 'react'
import ThemeButton from '@/components/ui/ThemeButton'


// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/fitness/left.webp'
import Right from '@/assets/multi-apps/fitness/right.png'
import Banner from '@/assets/multi-apps/fitness/bannar.webp'
import One from '@/assets/multi-apps/fitness/one.webp'
import Down from '@/assets/multi-apps/fitness/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'

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
                            <h1 className='font-extrabold text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px]'>Fitness App Development
                            </h1>
                            <p className='text-[20px] lg:text-[22px]'>Make exercises revolutionary with a cutting-edge fitness app. For best results, keep track of your progress, establish objectives, access workouts, and get customized training programs.
                            </p>
                            <div>
                                <ThemeButton>Contact us</ThemeButton>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[270px] xl:w-[320px] absolute top-[0px] right-[-60px]' />
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
                                Fitness App Development Solutions

                            </h2>
                            <p className='text-[19px] text-justify'>
                                In order to create the best fitness programs, Digital Elliptical Software House strives to offer the best services. Thanks to our expertise and passion for health and fitness, we help businesses in the fitness industry take advantage of mobile technology to offer inspiring and effective training experiences.
                                <br /><br />
                                Our talented team of developers is aware of the unique challenges and requirements that the fitness industry must meet. Whether you are a fitness studio, a personal trainer, or a wellness coach, we have the know-how to create a customized fitness app that suits your specific requirements. We work together with you to understand the objectives of your business and develop an app that captures your brands essence while offering a seamless user experience
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
                                You Can Easily Connect with your Trainer in This App
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Through our app, enjoy smooth communication with your personal trainer. Maintain motivation, get help right now, and easily keep track of your progress. personalizedsupport is available right at your fingertips to improve your fitness journey.
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
                                    In This App
                                </h4>
                                <p className='text-[19px]'>
                                    In the fast-paced world of fitness, having a dedicated app is essential to keep users engaged and motivated. Our fitness app development services provide a comprehensive solution to create a cutting-edge fitness application tailored to your specific needs. From personalized workout plans and nutrition tracking to community engagement and progress monitoring, our app development team leverages the latest technologies to deliver a seamless user experience.
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
                            <Image src={Down} alt='down' height={2000} width={2000} className='w-full max-w-[800px]' />
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
                        Integrate technology to build an engaging and secure Fitness app platform through on-demand Fitness app development solutions
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
