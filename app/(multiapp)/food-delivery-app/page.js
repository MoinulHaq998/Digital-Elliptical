import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/food/left.webp'
import Right from '@/assets/multi-apps/food/right.webp'
import Banner from '@/assets/multi-apps/food/bannar.webp'
import One from '@/assets/multi-apps/food/one.webp'
import Two from '@/assets/multi-apps/food/second.webp'
import Three from '@/assets/multi-apps/food/three.webp'
import Down from '@/assets/multi-apps/food/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'

const customer = [
  "Nearby Restaurants",
  "Social Media Login",
  "Push Notifications",
  "Ratings and Reviews",
  "Coupon Management",
  "inApp payments",
  "Tracking order",
];
const driver = [
  "Order management",
  "Realtime Tracking",
  "Settings",
  "Delivery information",
  "Realtime Requests",
  "Profile",
  "Order history",
];
const partner = [
  "Manage Orders",
  "Payment history",
  "Order history",
  "Realtime Requests",
  "Menu Management",
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
              <Image src={Left} alt='left' height={2000} width={2000} className='hidden lg:block w-[350px] lg:w-[400px] 2xl:w-[500px] absolute top-[240px] left-[-150px]' />
            </div>
            <div className="grid place-content-center gap-6 text-center col-span-4">
              <h1 className='font-extrabold text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>On-Demand Food Delivery App Development Solutions</h1>
              <p className='text-[20px] lg:text-[22px]'>We Help Your Food Business Go Online With The Finest Mobile & Web App Development for Restaurant</p>
              <div>
                <ThemeButton>Contact us</ThemeButton>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[300px] xl:w-[350px] absolute top-[] right-[-50px]' />
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
                Food Delivery App Development Solutions
              </h2>
              <p className='text-[19px] text-justify'>
                Serve your consumers through an On-Demand Food Delivery App to maintain a competitive edge. With a personalized food delivery Mobile app development services, you can get your food delivery service off the ground. Our programrs ensure that you have the greatest meal delivery software in town. Let us demonstrate to you, single-vendor and multi-vendor food delivery platforms.
              </p>
            </div>
            <div className='mb-16'>
              <h2 className='text-[30px] font-semibold mb-5'>
                Get Food Delivery at Your Doorstep
              </h2>
              <p className='text-[19px] text-justify'>
                The idea of meal delivery begun with the humble beginnings of a takeaway facility. Telephones were later introduced, which made it easier for eateries to receive phone calls for meal delivery.
                <br /><br />
                The use of mobile and desktop applications has revolutionized the creation of meal delivery apps today. Digital Elliptical Enterprise Solution helps customers with the development of and dual meal delivery apps. Our apps make it simple for your on-demand companies to grow.
                <br /><br />
                We can assist you with developing Zomato as a meal delivery app, with all of the simple to complex features needed to allow your clients to make personalized meals with a single click.

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
                Food Delivery App Solutions- Make Your Food Order More Simple
              </h2>
              <p className='text-[19px] text-justify'>
                Since the release of Food delivery app development services , the old technique has been drastically transformed. Your customers can have their meals delivered to them from their residence, workplace, where they are with an on-demand food delivery app.
                <br /><br />
                According to a recent study from the worldwide business Nielsen, about 60% of US phone users own a smartphone, and a rising percentage of such users rely on their mobile phone with everything from driving instructions to shopping, education to banking, and pleasure to meals.
                <br /><br />
                Another research company, Single Platform, found that 81% of mobile users employ a best food delivery app development company to find nearby eateries in their survey. If you want to combine the power of android app development with a very well customer interaction business model, you have come to the perfect place.              </p>
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
                  Customer App
                </h4>
                <p className='text-[19px]'>
                  A Customer Application is created to make it simple for clients to order meal delivery by exploring numerous restaurants and menus.
                </p>
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-4">
                    {customer.slice(0, 7).map((feature, index) => (
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
      <section className='my-20'>
        <div className="container">
          <div className="lg:w-[80%] mx-auto">
            <div className="grid md:grid-cols-2 xl:gap-8 items-center">
              <div>
                <h4 className='text-[37px] font-bold mb-6'>
                  Driver App
                </h4>
                <p className='text-[19px]'>
                  A Driver Application with amazing design and the user is designed to accept or disapprove restaurant delivery orders depending on availability.</p>
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-4">
                    {driver.slice(0, 7).map((feature, index) => (
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
                <Image src={Three} alt='three' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
              </div>
              <div>
                <h4 className='text-[37px] font-bold mb-6'>
                  Partner App
                </h4>
                <p className='text-[19px]'>
                  Customers meal delivery orders can be accepted or canceled using a restaurant partner app. The software also allows you to turn on and off- menu items based on their availability.</p>
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-4">
                    {partner.slice(0, 5).map((feature, index) => (
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
                Customer management
                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
              </div>
              <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                Menu and timing
                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
              </div>
              <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                Restaurants management
                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
              </div>
            </div>
            <div className='lg:col-span-2 flex justify-center'>
              <Image src={Down} alt='down' height={2000} width={2000} className='w-full max-w-[800px]' />
            </div>
            <div>
              <div className='flex flex-col gap-4'>
                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                  Customer management
                  <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                </div>
                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                  Menu and timing
                  <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                </div>
                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                  Restaurants management
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
    </>
  )
}

export default FoodDelivery
