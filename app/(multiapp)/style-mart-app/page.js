import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/mart/left.png'
import Right from '@/assets/multi-apps/mart/right.png'
import Banner from '@/assets/multi-apps/mart/banner.png'
import One from '@/assets/multi-apps/mart/one.png'
import Two from '@/assets/multi-apps/mart/two.png'
import Laptop from '@/assets/multi-apps/mart/laptop.png'
import Three from '@/assets/multi-apps/food/three.webp'

import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'


const customer = [
  "Inefficient Communication: Eliminated bottlenecks with a centralized communication hub.",
  "Manual Task Tracking: Automated task assignments and progress tracking.",
  "Resource Mismanagement: Introduced real-time inventory and resource tracking.",
  "Scattered Data: Integrated all office operations into a single platform for better accessibility.",
];
const driver = [
  "User-Centric Design: Easy navigation with a visually appealing and responsive interface. Efficient search and filter options for a seamless shopping experience.",
  "Convenient Payment Options: Multiple payment modes, including mobile wallets, card payments, and cash on delivery.",
  "Real-Time Order Tracking: Stay informed about your order status, from placement to delivery.",
  "Groceries & Healthcare: A complete selection of groceries, including fresh produce and packaged items, along with trusted pharmacy essentials for everyday health needs.",
  "Beauty & Fresh Produce: Explore premium beauty and makeup products, as well as fresh, seasonal, and organic fruits delivered to your doorstep.",
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
              <Image src={Left} alt='left' height={2000} width={2000} className='hidden lg:block w-[350px] lg:w-[400px] 2xl:w-[500px] absolute top-[40px] left-[-150px]' />
            </div>
            <div className="grid place-content-center gap-6 text-center col-span-4">
              <h1 className='font-extrabold text-[#212529] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>On-Demand Style Mart App Development Solutions</h1>
              <p className='text-[20px] text-[#212529] lg:text-[22px]'>Your All-in-One E-Commerce Platform</p>
              <div>
                <ThemeButton>Contact us</ThemeButton>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[250px] xl:w-[300px] absolute top-[0px] right-[-50px]' />
            </div>
          </div>
          <div className='text-center p-10'>
            <Image src={Banner} alt='banner' height={2000} width={2000} className='w-full p-20' />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[65%] mx-auto">
            <div className='mb-12'>
              <h2 className='text-[26px] md:text-[30px] text-[#212529] font-semibold mb-5'>
                Style Mart  App Development Solutions
              </h2>
              <p className='text-[16px] md:text-[19px] text-[#212529] text-justify'>
                Style Mart is an innovative e-commerce application designed to simplify shopping and deliver an exceptional online experience. Offering a wide range of products, the app caters to diverse customer needs across multiple categories. Whether 
                you are looking for daily groceries, quality skincare products, or fresh fruits, Style Mart has it all.
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
                <Image src={One} alt='one' height={2000} width={2000} className='w-[100%]  pr-6' />
              </div>
              <div className="md:mb-0 mb-8 ">
              <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-4'>
                Key Features
                </h4>
                <p> Style Mart stands out for its versatility and commitment to quality. It provides:</p>
                
                <div className="mt-4">
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
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Technology & Design
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529]  '>
                Style Mart is powered by cutting-edge technology to ensure reliable and secure operations. The application is developed using Flutter for its frontend, ensuring a consistent and smooth experience across both Android and iOS platforms. A robust backend infrastructure supports the app’s functionality, enabling quick and efficient processing of user requests and data.</p>
              </div>
              <div>
                <Image src={Two} alt='one' height={2000} width={2000} className='w-[80%]  mr-6' />
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
                  Conclusion
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] pr-8 text-justify'>
                  Style Mart redefines online shopping with its extensive product range, user-friendly features, and seamless technology integration. As a one-stop solution for all your shopping needs, Style Mart is poised to transform the e-commerce landscape, delivering convenience and quality at your fingertips.</p>
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
              <Image src={Laptop} alt='down' height={2000} width={2000} className='w-full max-w-[600px] p-2' />
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
            Ways to Boost Your Business using Our Style Mart App Solutions
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
