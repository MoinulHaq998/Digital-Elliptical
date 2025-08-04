import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/dine/left.png'
import Right from '@/assets/multi-apps/dine/right.png'
import Banner from '@/assets/multi-apps/dine/banner.png'
import One from '@/assets/multi-apps/dine/one.png'
import Two from '@/assets/multi-apps/dine/two.png'
import Three from '@/assets/multi-apps/food/three.webp'
import Laptop from '@/assets/multi-apps/dine/laptop.png'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'

const customer = [
  "Diverse Restaurant Selection: Order from a wide range of eateries, from local favorites to fine dining.",
  "Seamless Navigation: Enjoy a user-friendly interface for easy browsing and ordering.",
  "Real-Time Tracking: Monitor your order’s progress from kitchen to doorstep.",
  "Smart Recommendations: Get personalized dish and restaurant suggestions.",
  "Multiple Payment Options: Pay via cards, mobile wallets, or cash on delivery.",
  "Exclusive Deals: Access special discounts and meal offers.",
  "Advanced Search & Filters: Find food by cuisine, price, ratings, or delivery time.",
  "Customer Reviews: Make informed choices with ratings and feedback.",
  "Pre-Order & Scheduling: Plan meals with scheduled deliveries.",
  "Multi-Language Support: Accessible in various languages for wider reach.",
  "Restaurant & Delivery Management: Tools for restaurants to manage orders and deliveries efficiently.",
  
];
const driver = [
  "Convenience: Order anytime, anywhere with just a few clicks.",
  "Diversity: Choose from a plethora of cuisines and restaurants",
  "Quality Assurance: Partnered with trusted and highly-rated restaurants.",
  "Reliability: Dependable delivery services with real-time tracking.",
  
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
              <Image src={Left} alt='left' height={2000} width={2000} className='hidden lg:block w-[150px] opacity-80 lg:w-[250px] 2xl:w-[500px] absolute top-[160px] left-[-10px]' />
            </div>
            <div className="grid place-content-center gap-6 text-center col-span-4">
              <h1 className='font-extrabold text-[#212529] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>On-Demand Dine Direct App Development Solutions</h1>
              <p className='text-[20px] text-[#212529] lg:text-[22px]'>Revolutionizing the Food Ordering Experience</p>
              <div>
                <ThemeButton>Contact us</ThemeButton>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[200px] xl:w-[350px] opacity-80 absolute top-[0px] right-[-30px]' />
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
                Dine Direct App Development Solutions
              </h2>
              <p className='text-[16px] md:text-[19px] text-[#212529] text-justify'>
                Dine Direct is an innovative food delivery and restaurant aggregation platform designed to connect food enthusiasts with their favorite restaurants. Whether you are craving a gourmet meal, a quick snack, or a family dinner, DINE-DIRECT provides seamless access to an array of cuisines and dining options from multiple restaurants at your fingertips.
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
                      <Image src={Two} alt='one' height={2000} width={2000} className='w-[70%]  p-6' />
                    </div>
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
            <div className="grid md:grid-cols-2 xl:gap-8 items-center">
              <div>
                <h4 className='text-[35px] text-[#212529] font-bold mb-6'>
                  Why Choose Dine-Direct?
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
                <Image src={One} alt='two' height={2000} width={2000} className='w-[100%] max-w-[800px]' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='my-20'>
        <div className="container">
          <div className="lg:w-[90%] mx-auto">
            <div className="grid md:grid-cols-2 xl:gap-8 items-center">
              <div>
                <Image src={Two} alt='three' height={2000} width={2000} className='w-[40%] max-w-[600px]' />
              </div>
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Vision and Mission 
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] pr-8'>
                  Dine Direct aims to simplify and elevate the food ordering experience by bridging the gap between food lovers and their favorite dining spots. Our mission is to provide convenience, variety, and reliability to every customer, ensuring that quality meals are just a tap away.</p>
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
              <Image src={Laptop} alt='down' height={2000} width={2000} className='w-full max-w-[800px] p-2' />
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
            Ways to Boost Your Business using Our Dine Direct App Solutions
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
