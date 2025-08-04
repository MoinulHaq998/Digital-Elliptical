import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/law/left.png'
import Right from '@/assets/multi-apps/law/right1.png'
import Banner from '@/assets/multi-apps/law/banner.png'
import One from '@/assets/multi-apps/law/one.png'
import Two from '@/assets/multi-apps/law/two.png'
import Laptop from '@/assets/multi-apps/law/laptop.png'
import Three from '@/assets/multi-apps/food/three.webp'

import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Frontend from '@/assets/multi-apps/cate/26.png'
import Backend from '@/assets/multi-apps/cate/27.png'
import Database from '@/assets/multi-apps/cate/28.png'
import Apis from '@/assets/multi-apps/cate/29.png'

const customer = [
  "Real-Time Notifications: Updates on case progress, deadlines, and lawyer availability.",
  "Secure Data Handling: End-to-end encryption to protect sensitive user information.",
  "Offline Access: View downloaded case documents and templates without internet access.",
  "Customizable Profiles: For lawyers, law firms, and users to showcase their expertise and preferences.",

  
];
const driver = [
  "Legal Document Templates: Access predefined templates for contracts, agreements, and affidavits with customizable fields to meet specific needs.",
  "Lawyer Directory: Easily find lawyers based on expertise, location, and ratings, with direct communication via chat, call, or video conferencing.",
  "Case Management: Securely store case files, track timelines and milestones, and receive automated reminders for hearings and deadlines.",
  "Legal Consultation Services: Get on-demand legal advice from verified professionals with flexible appointment scheduling and transparent pricing.",
  "Knowledge Hub: Explore a library of legal articles, FAQs, and case studies, along with updates on laws, regulations, and court rulings.",
  "Payment Integration: Make secure transactions for legal services with built-in invoice generation for user records.",
  "Multi-Language Support: Use the app in multiple languages to accommodate diverse users.",
  "User-Friendly Dashboard: Manage activities, updates, and pending tasks in a centralized dashboard with analytics and reports for legal professionals.",
  
  
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
              <Image src={Left} alt='left' height={2000} width={2000} className='hidden lg:block w-[300px] lg:w-[350px] 2xl:w-[400px] absolute top-[200px] left-[0px]' />
            </div>
            <div className="grid place-content-center gap-6 text-center col-span-4">
              <h1 className='font-extrabold text-[#212529] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>
                On-Demand Law App Development Solutions</h1>
              <p className='text-[20px] text-[#212529] lg:text-[22px]'>Platform to access Legal Assistance, Manage Cases</p>
              <div>
                <ThemeButton>Contact us</ThemeButton>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Right} alt='right' height={2000} width={2000} className='hidden opacity-80 lg:block w-[200px] lg:w-[300px] absolute top-[] right-[0px]' />
            </div>
          </div>
          <div className='text-center'>
            <Image src={Banner} alt='banner' height={2000} width={2000} className='w-full' />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[80%] mx-auto">
            <div className='mb-12'>
              <h2 className='text-[30px] text-[#212529] font-semibold mb-5'>
                Law App Development Solutions
              </h2>
              <p className='text-[16px] md:text-[19px] text-[#212529] text-justify'>
              The Law App is a comprehensive solution designed to facilitate legal services for individuals and organizations. It offers users an intuitive platform to access legal assistance, manage cases, and stay updated with legal developments. The app integrates modern technology to ensure accessibility, efficiency, and reliability in the legal domain.
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
                <div className='flex justify-end'>
                  <Image src={Two} alt='two' height={2000} width={2000} className='w-[70%] max-w-[600px] p-1' />
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
                React Native for a seamless user experience across Android and iOS.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex justify-center items-center">
                <Image src={Backend} alt='expextation' width={2000} height={2000} className='w-[70px]' />

              </div>
              <h3 className="text-[20px] font-bold mb-2">Backend
              </h3>
              <p className="text-sm">
              Laravel for robust and scalable backend services.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex justify-center items-center">
                <Image src={Database} alt='expextation' width={2000} height={2000} className='w-[70px]' />

              </div>
              <h3 className="text-[20px] font-bold mb-2">Database</h3>
              <p className="text-sm">
                MySQL for secure and efficient data management. 
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex justify-center items-center">
                <Image src={Apis} alt='expextation' width={2000} height={2000} className='w-[70px]' />

              </div>
              <h3 className="text-[20px] font-bold mb-2">APIs</h3>
              <p className="text-sm">
                Integration with payment gateways and third-party services for extended functionality.
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
                <Image src={One} alt='one' height={2000} width={2000} className='w-[100%]  mr-6' />
              </div>
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
                <Image src={Two} alt='two' height={2000} width={2000} className='w-[60%] max-w-[600px] p-1' />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      
      {/* <section className='my-20'>
        <div className="container">
          <div className="lg:w-[90%] mx-auto">
            <div className="grid md:grid-cols-2 xl:gap-8 items-center">
              <div>
                <Image src={Two} alt='three' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
              </div>
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Why Choose the LAW APP?
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] pr-8 text-justify'>
                The LAW APP stands out for its simplicity, security, and comprehensiveness in addressing legal needs. It bridges the gap between individuals and legal professionals, making the legal process accessible and manageable for everyone.</p>
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
            <div className='lg:col-span-2 flex justify-center '>
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
            Ways to Boost Your Business using Our Law App Solutions
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
