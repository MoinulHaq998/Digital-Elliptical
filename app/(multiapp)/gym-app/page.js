import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/gym/left.png'
import Right from '@/assets/multi-apps/gym/right.png'
import Banner from '@/assets/multi-apps/gym/banner.png'
import One from '@/assets/multi-apps/gym/one.png'
import Two from '@/assets/multi-apps/gym/two.png'
import Three from '@/assets/multi-apps/food/three.webp'
import Down from '@/assets/multi-apps/food/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'

const customer = [
  "Hire Professional Chefs: Book skilled chefs for private dinners, events, or regular meal preparations.",
  "Customizable Menus: Collaborate with chefs to design menus that align with your taste and dietary needs.",
  "Interactive Cooking Classes: Learn directly from experts through live or pre-recorded sessions.",
  "Event Catering: Simplify event planning with professional catering services for any occasion.",
  "Flexible Payment Options: Enjoy secure and convenient payment methods.",
  
];
const driver = [
  "Community Support: Join groups, share progress, and connect with like-minded individuals for encouragement and accountability.",
  "Workout Library: A rich collection of video tutorials and instructional content for every fitness level and goal.",
  "Fitness Assessments: Periodic assessments to evaluate progress and adjust fitness plans accordingly.",
  "Daily Reminders: Smart reminders to encourage workouts, hydration, and healthy eating habits.",
  "Integration with Devices: Sync data with devices like Fitbit, Garmin, and Apple Watch for seamless activity tracking.",
  "Offline Mode: Download workouts and meal plans for use without an internet connection.",
  
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
              <Image src={Left} alt='left' height={2000} width={2000} className='hidden  lg:block w-[300px] lg:w-[350px] 2xl:w-[400px] absolute top-[140px] left-[-100px]' />
            </div>
            <div className="grid place-content-center gap-6 text-center col-span-4">
              <h1 className='font-extrabold text-[#212529] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>On-Demand Fitness App Development Solutions</h1>
              <p className='text-[20px] text-[#212529] lg:text-[22px]'>Your Personalized Fitness Companion</p>
              <div>
                <ThemeButton>Contact us</ThemeButton>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[250px] xl:w-[300px] absolute top-[0px] right-[-50px]' />
            </div>
          </div>
          <div className='text-center'>
            <Image src={Banner} alt='banner' height={2000} width={2000} className='w-full p-4' />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[65%] mx-auto mb-12">
            <div className='mb-12'>
              <h2 className='text-[30px] text-[#212529] font-semibold mb-5'>
                Fitness App Development Solutions
              </h2>
              <p className='text-[16px] md:text-[19px] text-[#212529] text-justify'>
                This fitness app empowers users to achieve their health and wellness goals through personalized guidance, innovative tools, and a supportive community. Whether you are a beginner starting your fitness journey or a seasoned athlete aiming to maintain peak performance, the app provides the resources and motivation needed to stay on track.
              </p>
            </div>
            <h6 className="text-[30px] text-[#212529] font-semibold mb-5">Key Features</h6>
                        <ul className="tracking-wider text-gray-800  text-justify leading-6  space-y-2">
                          <li><span className="font-semibold">Personalized Workout Plans: </span> 
                              Tailor-made workout routines designed to match individual fitness levels, goals, and schedules.
                          </li>
                          <li><span className="font-semibold">Nutrition Tracking: </span> 
                              Comprehensive food logging and meal planning tools to help users maintain a balanced diet.
                          </li>
                          <li><span className="font-semibold">Progress Tracking: </span>
                              Detailed analytics and visual progress reports for weight, measurements, calories burned, and more.
                          </li>
                          <li><span className="font-semibold">Virtual Training Sessions: </span> 
                              Access to live or pre-recorded sessions led by certified fitness trainers.
                          </li>
                          <li><span className="font-semibold">Customizable Goals: </span> 
                              Set short-term and long-term fitness goals, from weight loss to muscle gain.
                          </li>
                          <li><span className="font-semibold">Activity Tracking: </span> 
                              Monitor steps, heart rate, and calories burned with integration to wearable devices like smartwatches.
                          </li>
                          <li><span className="font-semibold">Workout Categories: </span> 
                              A wide range of fitness activities, including yoga, strength training, cardio, Pilates, and HIIT (High-Intensity Interval Training).
                          </li>
                          <li><span className="font-semibold">Challenges & Rewards: </span> 
                              Participate in fitness challenges and earn rewards to keep motivation high.
                          </li>
                        </ul>
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
            <div className="grid md:grid-cols-2 xl:gap-6 items-center">
              <div>
                <h4 className='text-[35px] text-[#212529] font-bold mb-6'>
                  Challenges Addressed
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
      </section>

      <section className='my-20'>
        <div className="container">
          <div className="lg:w-[90%] mx-auto">
            <div className="grid md:grid-cols-2 xl:gap-8 items-center">
              <div>
                <Image src={One} alt='three' height={2000} width={2000} className='' />
              </div>
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Technology & Design
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] pr-8'>
                  This app is built using the latest technologies to deliver a robust and intuitive user experience. The front end is developed with Flutter, offering a sleek and responsive interface for both iOS and Android users. The backend is designed for scalability, ensuring fast and reliable performance. The user interface is visually appealing and easy to navigate, enabling users to focus on their fitness journey without distractions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='my-20'>
        <div className="container">
          <div className="lg:w-[90%] mx-auto">
            <div className="grid md:grid-cols-2 xl:gap-8 items-center">
             
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Why Choose This App? 
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] pr-8'>
                  This app stands out in the crowded fitness app market due to its user-centric approach. With features that cater to all aspects of fitness, from workouts to mental well-being, it is more than an app—it’s a lifestyle partner. The blend of technology, expert advice, and community support makes it the ultimate tool for anyone serious about their fitness goals.</p>
              </div>
              <div>
                <Image src={Two} alt='three' height={2000} width={2000} className='w-[50%] max-w-[500px]' />
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
                <Image src={One} alt='three' height={2000} width={2000} className='' />
              </div>
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Conclusion:
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] pr-8'>
                  This app is committed to revolutionizing the way people approach fitness and well-being. By combining innovative technology, personalized solutions, and a supportive ecosystem, it helps users unlock their full potential and live healthier, happier lives. Whether you’re setting out on a new fitness journey or striving to push your limits, this app is here to guide you every step of the way.</p>
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
                Customer Management
                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
              </div>
              <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                Customer Management
                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
              </div>
              <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                Customer Management
                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
              </div>
            </div>
            <div className='lg:col-span-2 flex justify-center'>
              <Image src={Banner} alt='down' height={2000} width={2000} className='w-full max-w-[800px]' />
            </div>
            <div>
              <div className='flex flex-col gap-3'>
                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                  Customer Management
                  <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                </div>
                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                  Customer Management
                  <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                </div>
                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                  Customer Management
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
            Ways to Boost Your Business using Our Fitness App Solutions
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
