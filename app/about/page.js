import React from 'react'
import Image from 'next/image'

// Images
import Stream from '@/assets/about/about_1.svg'
import Talent from '@/assets/about/about_2.svg'
import Proven from '@/assets/about/about_3.svg'
// Award Images
import award1 from '@/assets/about/awards/circle1.webp'
import award2 from '@/assets/about/awards/circle2.webp'
import award3 from '@/assets/about/awards/circle3.webp'
import ThemeButton from "@/components/ui/ThemeButton";
import { Icon } from '@iconify/react'
import AboutVedio from '@/components/partials/about/aboutVedio/page'
function page() {
  return (
    <div>
      <section>
        <div className='container'>
          <div className='text-center my-20'>
            <h1 className='text-[30px] font-bold mb-2'>Provider of full-cycle software development services</h1>
            <p className='text-[18px]'>give a high standard of service to our clients, we&apos;ve established a robust team of software engineers, designers, quality assurance professionals, and project managers.</p>
          </div>
        </div>
      </section>
      <section className='bg-[#fafafa] pt-32 pb-20'>
        <div className='container'>
          <h2 className='text-center text-[28px] font-bold mb-12'>
            What You Can Expect from Digital Elliptical
          </h2>
          <div className='grid md:grid-cols-3 gap-16 text-center'>
            {/* Streamlined Processes */}
            <div className='flex flex-col text-[#212529] items-center'>
              <div className='mb-4 flex justify-center items-center'>
                <Image src={Stream} alt='expextation' width={70} height={70} />

              </div>
              <h3 className='text-[22px] mb-2'>Streamlined processes</h3>
              <p className='text-sm'>
                Employees are more efficient when the workflow is more efficient.
                Our method ensures high-quality work, automates the software
                delivery pipeline, and boosts team morale.
              </p>
            </div>

            {/* Talented People */}
            <div className='flex flex-col text-[#212529] items-center'>
              <div className='mb-4 flex justify-center items-center'>
                <Image src={Talent} alt='expextation' width={70} height={70} />
              </div>
              <h3 className='text-[22px] mb-2'>Talented people</h3>
              <p className='text-sm'>
                We seek for outstanding multi-dimensional individuals and invest in them by providing one of the cities most comprehensive career mentorship and training programs.
              </p>
            </div>

            {/* Proven Technologies */}
            <div className='flex flex-col text-[#212529] items-center'>
              <div className='mb-4 flex justify-center items-center'>
                <Image src={Proven} alt='expextation' width={70} height={70} />
              </div>
              <h3 className='text-[22px] mb-2'>Streamlined processes</h3>
              <p className='text-sm'>
                Our efforts have yielded software that meets the CISQ code quality criteria. It is safe, easy to maintain, efficient, and dependable. It is simple to expand with trustworthy software.
              </p>
            </div>
          </div>
        </div>
      </section>



      <AboutVedio/>


      <section className='py-20'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-[#212529] text-justify'>
            <div>
              <h2 className='text-[48px]  font-bold mb-4'>Our Vision</h2>
              <p className='text-[15px]'>
                To become a global leader in the field of information technology by offering cutting-edge site design, mobile app development, and internet marketing services that will propel our clients businesses forward. We strive to develop brands that shoot high and climb the business to tremendous heights by rewarding our clients trust and happiness. Businesses may quickly decrease their operating costs and uncover genuine company potential thanks to full-fill our edge.
              </p>
            </div>
            <div>
              <h2 className="text-[48px] font-bold mb-4">Our Mission</h2>
              <p className="text-[15px]">
                Digital Elliptical is a leading web design and mobile app development firm that works with clients ranging from small businesses to major corporations to create online and mobile-enabled apps. We are known for utilizing the strength of our knowledge and talents to create profitable, flourishing, engaging, and simple-to-use applications. We exclusively work with the best iOS, Android, and web app developers, so you can outsource your project and obtain a high-quality result.
              </p>
            </div>
          </div>

        </div>
      </section>

      
      <section className="bg-[#f5f5f5] py-20">
        <div className="container">

          <div className="grid md:grid-cols-2 gap-12">
            <div className="grid place-content-center gap-8">
              <h2 className="text-3xl text-[#212529] font-bold mb-4">Creating world-class experiences, forming a vision, and delivering software</h2>
              <p className="text-[16px] text-[#212529] leading-6">
                Working with Digital Elliptical has had a long-term positive influence on our capacity to innovate and execute quickly. There is a great focus on not simply doing what you ask for by the personnel there.
              </p>
              <div>
              <ThemeButton>
              Contact Us
              </ThemeButton>
                
              </div>
            </div>

            <div className='grid place-content-center gap-5'>
              <div className='bg-white p-6 sm:p-8 relative'>
                <h2 className="text-xl sm:text-3xl text-[#212529] font-bold mb-2 sm:mb-4">Responsive Design</h2>
                <span className="text-[40px] sm:text-[70px] font-semibold text-[#f1f1f1] absolute right-4 sm:right-[30px] top-[5px] sm:top-[-10px]">
                  01
                </span>
                <p className="text-[16px] sm:text-[15px] text-[#212529] mt-4 sm:mt-8 ms-0">
                  We develop web pages and websites that are easy to navigate on every screen size, regardless of resolution.
                </p>
              </div>
              <div className='bg-white p-6 sm:p-8 relative'>
                <h2 className="text-xl sm:text-3xl text-[#212529] font-bold mb-2 sm:mb-4">Easy to Customize</h2>
                <span className='text-[40px] sm:text-[70px] font-semibold text-[#f1f1f1] absolute right-4 sm:right-[30px] top-[5px] sm:top-[-10px]'>02</span>
                <p className="text-[16px] sm:text-[15px] text-[#212529] mt-4 sm:mt-8 ms-0">
                  Customers may simply tailor their requirements and applications to meet their own needs.
                </p>
              </div>
              <div className='bg-white p-6 sm:p-8 relative'>
                <h2 className="text-xl sm:text-3xl text-[#212529] font-bold mb-2 sm:mb-4">Excellent Performance</h2>
                <span className='text-[40px] sm:text-[70px] font-semibold text-[#f1f1f1] absolute right-4 sm:right-[30px] top-[5px] sm:top-[-10px]'>03</span>
                <p className="text-[16px] sm:text-[15px] text-[#212529] mt-4 sm:mt-8 ms-0">
                  A user will be more happy with your website if it runs well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='py-10'>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-[40px] text-[#212529] font-bold mb-10'>
                Awards & Recognition
              </h3>
              <div className='flex items-center gap-12'>
                <Image src={award1} alt='award img' width={2000} height={2000} className='w-[90px] grayscale hover:grayscale-0 scale-100 hover:scale-125 transition-all duration-500 ease-out ' />
                <Image src={award2} alt='award img' width={2000} height={2000} className='w-[90px] grayscale hover:grayscale-0 scale-100 hover:scale-125 transition-all duration-500 ease-out ' />
                <Image src={award3} alt='award img' width={2000} height={2000} className='w-[90px] grayscale hover:grayscale-0 scale-100 hover:scale-125 transition-all duration-500 ease-out ' />
              </div>
            </div>
            <div>
              <div className='grid grid-cols-2 gap-10 mt-16 mb-16'>
                <div className='flex items-center justify-center flex-col'>
                  <h4 className='flex items-center text-3xl text-[#212529]  mb-1 font-bold'>
                    112 <Icon icon="ic:sharp-plus" width="24" height="24" className='font-bold' />
                  </h4>
                  <h4 className='text-2xl text-primary'>Engineers</h4>
                </div>
                <div className='flex items-center justify-center flex-col'>
                  <h4 className='flex items-center text-3xl text-[#212529] mb-1 font-bold'>
                    520 <Icon icon="ic:sharp-plus" width="24" height="24" className='font-bold' />
                  </h4>
                  <h4 className='text-2xl text-primary'>Project Delivered to Clients</h4>
                </div>

                <div className='flex items-center justify-center flex-col'>
                  <h4 className='flex items-center text-3xl text-[#212529] mb-1 font-bold'>
                    655 <Icon icon="ic:sharp-plus" width="24" height="24" className='font-bold' />
                  </h4>
                  <h4 className='text-2xl text-primary'>Customers worldwide</h4>
                </div>
                <div className=' min-w-32 max-w-72 text-center count_head  px-6 py-10  text-white'>
                  <h4 className='text-4xl'>
                    Inspired By Our Vision
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
