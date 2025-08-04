import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/sky/right.png'
import Right from '@/assets/multi-apps/sky/left.png'
import Banner from '@/assets/multi-apps/sky/banner.png'
import One from '@/assets/multi-apps/sky/one.png'
import Two from '@/assets/multi-apps/sky/two.png'
import Laptop from '@/assets/multi-apps/sky/laptop.png'
import Three from '@/assets/multi-apps/food/three.webp'


import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Frontend from '@/assets/multi-apps/cate/26.png'
import Backend from '@/assets/multi-apps/cate/27.png'

const customer = [
  "My Bookings: Keep track of all your reservations, including flights, hotels, and activities.",
  "Flight Booking: Compare and book flights from a wide range of airlines with real-time pricing and availability.",
  "Hotel Reservations: Choose from thousands of hotels worldwide with detailed reviews, photos, and amenities.",
  "Car Rentals: Find and book car rentals for your destination with flexible options to suit your needs.",
  "Activity and Tour Bookings: Discover and reserve activities, tours, and experiences.",
  "Real-Time Notifications: Get updates on flight status, hotel check-ins, and car rental on your device.",
  "Currency Converter: Integrated tools to help you calculate expenses in your preferred currency while traveling internationally.",
  "Language Support: Multi-language support for users from different regions around the world.",
];
const driver = [
  "Search and Filter Options: Advanced search capabilities to find the best deals on flights, hotels, and activities.",
  "Secure Payment Gateway: Supports multiple payment options, including credit cards, e-wallets, and net banking, ensuring secure transactions.",
  "Interactive Maps: In-app maps to explore destinations, find nearby attractions, and get directions.",
  "24/7 Customer Support: Dedicated support to assist users with booking modifications, cancellations, and other queries.",
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
              <Image src={Left} alt='left' height={2000} width={2000} className='hidden lg:block w-[350px] lg:w-[400px] 2xl:w-[500px] absolute top-[140px] left-[-150px]' />
            </div>
            <div className="grid place-content-center gap-6 text-center col-span-4">
              <h1 className='font-extrabold text-[#212529] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>On-Demand Sky Reserve App Development Solutions</h1>
              <p className='text-[20px] text-[#212529] lg:text-[22px]'>Your Trusted Travel Companion</p>
              <div>
                <ThemeButton>Contact us</ThemeButton>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[250px] xl:w-[300px] absolute top-[0px] right-[-50px]' />
            </div>
          </div>
          <div className='text-center'>
            <Image src={Banner} alt='banner' height={2000} width={2000} className='w-full' />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[65%] mx-auto">
            <div className='mb-12'>
              <h2 className='text-[30px] text-[#212529] font-semibold mb-5'>
                Sky Reserve  App Development Solutions
              </h2>
              <p className='text-[16px] md:text-[19px] text-[#212529] text-justify'>
                Sky Reserve is a comprehensive travel app designed to make planning, booking, and managing trips seamless and stress-free. From flights and hotels to car rentals and activity reservations, Sky Reserve caters to every aspect of your travel needs. Whether you’re planning a business trip, a family vacation, or a solo adventure, Sky Reserve ensures convenience and efficiency at your fingertips.
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
                  Key Features
                </h4>
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-4">
                    {customer.slice(0, 8).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div
                          className="bg-gradient-to-r from-[#005e7c] to-[#0096c7] text-white font-semibold rounded-full py-1 px-2 flex items-center justify-center shadow-md ">
                          {`0${index + 1}`}
                        </div>
                        <span className="text-md text-[#005e7c] font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <Image src={One} alt='one' height={2000} width={2000} className='w-[100%]  pr-6' />
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
              <p className='text-[15px]'>Solution For Your Restaurant Business</p>
            </div>
            <div>
              <ThemeButton>Contact us</ThemeButton>
            </div>
          </div>
          
        </div>
      </section>

      <section className='my-20'>
          <div className="container">
            <div className="lg:w-[80%] mx-auto">
              <div className="grid md:grid-cols-2 2xl:gap-8 items-center">
                <div>
                  <Image src={Two} alt='one' height={2000} width={2000} className='w-[100%]  mr-6' />
                </div>
                <div>
                  <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                    User Experience Highlights
                  </h4>
                  <div className="mt-8">
                    <div className="grid grid-cols-1 gap-4">
                      {driver.slice(0, 7).map((feature, index) => (
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
                
              </div>
            </div>
          </div>
      </section>

      {/* <section className='my-20'>
        <div className="container">
          <div className="lg:w-[80%] mx-auto">
            <div className="grid md:grid-cols-2 2xl:gap-8 items-center">
              
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                Technology & Design
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] '>
                  Sky Reserve leverages state-of-the-art technology to deliver a seamless and efficient user experience. The frontend is developed using Flutter, ensuring smooth performance across Android and iOS platforms. The backend infrastructure is built to handle high user traffic, providing real-time updates and secure data management. With a modern and intuitive user interface, Sky Reserve offers effortless navigation for travelers of all types.</p>
              </div>
              <div>
                <Image src={One} alt='one' height={2000} width={2000} className='w-[100%]  pr-6' />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      

      

      {/* <section className='my-20'>
        <div className="container">
          <div className="lg:w-[80%] mx-auto">
            <div className="grid md:grid-cols-2 2xl:gap-8 items-center">
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Conclusion
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] pr-8 text-justify'>
                  Sky Reserve redefines the way people plan and manage their travels by combining functionality, reliability, and innovation. With its extensive range of features and user-centric design, SKY RESERVE is the ultimate travel companion, empowering users to explore the world with ease and confidence.</p>
              </div>
              <div>
                <Image src={Two} alt='one' height={2000} width={2000} className='w-[100%]  mr-6' />
              </div>
            </div>
          </div>
        </div>
      </section> */}

     


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
            <div className='lg:col-span-2 flex justify-center'>
              <Image src={Laptop} alt='down' height={2000} width={2000} className='w-full max-w-[800px] p-1' />
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
            Ways to Boost Your Business using Our Sky Reserve App Solutions
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
