import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/gym/right.png'
import Right from '@/assets/multi-apps/gym/left.png'
import Banner from '@/assets/multi-apps/gym/banner.png'
import One from '@/assets/multi-apps/gym/one1.png'
import Two from '@/assets/multi-apps/gym/two.png'
import Three from '@/assets/multi-apps/food/three.webp'
import Down from '@/assets/multi-apps/food/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Frontend from '@/assets/multi-apps/cate/26.png'
import Backend from '@/assets/multi-apps/cate/27.png'
import Database from '@/assets/multi-apps/cate/28.png'
import Apis from '@/assets/multi-apps/cate/29.png'

const customer = [
  "Customer Support: 24/7 in-app support via chat and email",
  "Ratings and Reviews: Transparent feedback system to ensure quality services.",
  "Favorites List: Save preferred service providers for quick access.",
  "Offline Mode: Access saved details and booking history without an internet connection",

  
];
const driver = [
  "Service Discovery: Browse salons, gyms, spas, and clinics with advanced filters for location, price, ratings, and services. View detailed provider profiles with photos, reviews, and pricing.",
  "Booking System: Book appointments in real-time with instant confirmation, calendar integration, and easy rescheduling or cancellations.",
  "User-Friendly Interface: Enjoy seamless navigation with personalized recommendations and multi-language support.",
  "Secure Payment Options: Make hassle-free payments via credit/debit cards, digital wallets, and UPI, with detailed invoices and transaction history.",
  "Loyalty and Rewards Program: Earn points on bookings for discounts and exclusive deals, with tiered benefits and seasonal promotions.",
  "Provider Dashboard: Service providers can manage schedules, bookings, and customer interactions while tracking performance and updating services.",
  "Notifications and Reminders: Receive real-time alerts for bookings, promotions, and personalized offers.",
  "Service Categories (Beauty & Wellness): Salons provide various beauty services, including haircuts, styling, manicures, and pedicures. Spas specialize in massages, facials, and relaxation treatments for rejuvenation and self-care.",
  "Service Categories (Health & Fitness): Gyms offer memberships, personal training, and group fitness classes to promote physical well-being. Clinics provide general consultations, specialized treatments, and health check-ups for medical needs.",
  
];

function FoodDelivery() {
  return (
    <>

      <section
        className="multi-apps-bg bg-no-repeat bg-center bg-cover h- w-full py-20 relative overflow-hidden"
      >
        <div className="container">
          <div className="grid lg:grid-cols-6 gap-4">
            <div className="col-span-1">
              <Image src={Left} alt='left' height={2000} width={2000} className='hidden opacity-90 lg:block w-[240px] lg:w-[300px] 2xl:w-[500px] absolute top-[240px] left-[-0px]' />
            </div>
            <div className="grid place-content-center gap-6 text-center col-span-4">
              <h1 className='font-extrabold text-[#212529] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>
                On-Demand Jet Stream App Development Solutions</h1>
              <p className='text-[20px] text-[#212529] lg:text-[22px]'>One-stop solution for Discovering, Booking, and <br></br> Managing Services</p>
              <div>
                <ThemeButton>Contact us</ThemeButton>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Right} alt='right' height={2000} width={2000} className='hidden opacity-80 lg:block w-[200px] xl:w-[250px] absolute top-[] right-[0px]' />
            </div>
          </div>
          <div className='text-center'>
            <Image src={Banner} alt='banner' height={2000} width={2000} className='w-full p-10' />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[65%] mx-auto">
            <div className='mb-12'>
              <h2 className='text-[30px] text-[#212529] font-semibold mb-5'>
              Jet Stream App Development Solutions
              </h2>
              <p className='text-[16px] md:text-[19px] text-[#212529] '>
              The Jet Stream App is a one-stop solution for discovering, booking, and managing services from various establishments like salons, gyms, spas, and clinics. Designed with a user-centric approach, the app bridges the gap between service providers and customers, ensuring a seamless experience for both parties. Its modern interface and robust features make it a go-to platform for health, beauty, and wellness services.
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
                <Image src={Two} alt='one' height={2000} width={2000} className='w-[80%]  mr-6' />
              </div>
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                Key Features
                </h4>
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-4">
                    {driver.slice(0, 9).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className="bg-gradient-to-r from-[#005e7c] to-[#0096c7] text-white font-bold rounded-full py-1 px-2  flex items-center justify-center shadow-md ">
                          {`0${index + 1}`}
                        </div>
                        <span className="text-md text-[#005e7c] font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      

      <section>
        <div className="container">
          
          <div className='lg:w-[90%] mx-auto flex flex-col md:flex-row md:items-center gap-4 xl:gap-52 bg-[#005e7c38] p-6 rounded-md mb-12'>
            <div>
              <h3 className='text-[18px] md:text-[25px] xl:text-[30px] mb-1'>
                Choose A Highly-Scalable App Development
              </h3>
              <p className='text-[15px]'>Solution For Your Apps Business</p>
            </div>
            <div>
              <ThemeButton>Contact us</ThemeButton>
            </div>
          </div>
          
        </div>
      </section>

      {/* <section className='my-20'>
        <div className="container">
          <div className="lg:w-[80%] mx-auto">
            <div className="grid md:grid-cols-2 xl:gap-8 items-center">
              <div>
                <h4 className='text-[35px] text-[#212529] font-bold mb-6'>
                  Target Audience
                </h4>
                
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-4">
                    {driver.slice(0, 7).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-4 ">
                        <div className="bg-gradient-to-r from-[#005e7c] to-[#0096c7] text-white font-bold rounded-full py-1 px-2 flex items-center justify-center shadow-md ">
                          {`0${index + 1}`}
                        </div>
                        <span className="text-lg text-[#005e7c] font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex justify-end'>
                <Image src={Two} alt='two' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='my-20 text-[#212529]'>
        <div className="container">
          <h4 className='text-[35px] text-[#212529] font-bold mb-16 text-center'>
            Technology Stack
          </h4>
          <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex justify-center items-center">
                <Image src={Frontend} alt='expextation' width={2000} height={2000} className='w-[70px]' />

              </div>
              <h3 className="text-[20px] font-bold mb-2">Frontend</h3>
              <p className="text-sm">
                Flutter for a unified experience on Android and iOS platforms.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex justify-center items-center">
                <Image src={Backend} alt='expextation' width={2000} height={2000} className='w-[70px]' />

              </div>
              <h3 className="text-[20px] font-bold mb-2">Backend
              </h3>
              <p className="text-sm">
              Laravel for scalable and secure backend operations.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex justify-center items-center">
                <Image src={Database} alt='expextation' width={2000} height={2000} className='w-[70px]' />

              </div>
              <h3 className="text-[20px] font-bold mb-2">Database</h3>
              <p className="text-sm">
                MySQL for efficient data handling and management.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex justify-center items-center">
                <Image src={Apis} alt='expextation' width={2000} height={2000} className='w-[70px]' />

              </div>
              <h3 className="text-[20px] font-bold mb-2">APIs</h3>
              <p className="text-sm">
                Integration with payment gateways, location services, and third-party tools for added functionality.
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
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Additional Features
                </h4>
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-4">
                    {customer.slice(0, 7).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className="bg-gradient-to-r from-[#005e7c] to-[#0096c7] text-white font-bold rounded-full py-1 px-2 flex items-center justify-center shadow-md ">
                          {`0${index + 1}`}
                        </div>
                        <span className="text-md text-[#005e7c] font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <Image src={One} alt='one' height={2000} width={2000} className='w-[100%]  ' />
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className='bg-[#005e7c] text-[#212529] py-10'>
        <div className="container">
          <div className="grid lg:grid-cols-4 items-center">
            <div className='flex flex-col gap-3'>
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
            <div className='lg:col-span-2 flex justify-center '>
              <Image src={Banner} alt='down' height={2000} width={2000} className='w-full max-w-[800px] p-2' />
            </div>
            <div>
              <div className='flex flex-col gap-3'>
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

      <section className='my-20 text-[#212529]'>
        <div className="container">
          <h2 className="text-center text-[28px] mb-16">
            Ways to Boost Your Business using Our Jet Stream App Solutions
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
    </>
  )
}

export default FoodDelivery
