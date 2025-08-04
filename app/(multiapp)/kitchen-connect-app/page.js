import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/kitchen/left1.png'
import Right from '@/assets/multi-apps/kitchen/right.png'
import Banner from '@/assets/multi-apps/kitchen/banner.png'
import One from '@/assets/multi-apps/kitchen/one.png'
import Two from '@/assets/multi-apps/kitchen/two.png'
import Three from '@/assets/multi-apps/food/three.webp'
import Laptop from '@/assets/multi-apps/kitchen/laptop.png'
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
  "Tailored dining experiences with personalized services.",
  "Access to professional, verified chefs ensuring premium quality",
  "Convenient real-time booking and scheduling.",
  "A wide range of cuisines and dietary-specific options.",
  
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
              <Image src={Left} alt='left' height={2000} width={2000} className='hidden lg:block w-[230px] lg:w-[270px] 2xl:w-[400px] absolute top-[240px] left-[-20px]' />
            </div>
            <div className="grid place-content-center gap-6 text-center col-span-4">
              <h1 className='font-extrabold text-[#212529] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>
                On-Demand Kitchen Connect  App Development Solutions</h1>
              <p className='text-[20px] text-[#212529] lg:text-[22px]'>
                Designed to Revolutionize Restaurant and Kitchen Management</p>
              <div>
                <ThemeButton>Contact us</ThemeButton>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[300px] xl:w-[350px] absolute top-[10px] right-[-80px]' />
            </div>
          </div>
          <div className='text-center'>
            <Image src={Banner} alt='banner' height={2000} width={2000} className='w-full' />
          </div>
        </div>
      </section>

      <section className='my-20'>
      
        <div className="container">
          <div className="lg:w-[90%] mx-auto">
            <div className="grid md:grid-cols-2 2xl:gap-8 items-center">
              <div>
                <h4 className='text-[37px] text-primary  font-bold mb-6'>
                  Kitchen Connect  App Development Solutions
                </h4>
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-4">
                    <p className='text-[16px] md:text-[19px] text-[#212529] '>
                      Kitchen Connect  Connect is a dynamic and versatile application designed to revolutionize restaurant and kitchen management. It offers a seamless blend of features tailored for restaurant owners, staff, and customers, ensuring an exceptional dining and operational experience. Below is a detailed overview of the apps key features and functionalities:
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image src={One} alt='one' height={2000} width={2000} className='w-[100%]  mr-6' />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section>
        <div className="container">
          <div className="lg:w-[65%] mx-auto mb-12">
              <h6 className="text-[37px] text-primary  font-bold mb-6">Core Features of Kitchen Connect</h6>
              <ul className="tracking-wider text-gray-700 text-[16px] md:text-[19px] leading-7 space-y-3  text-justify">
                <li><span className="font-semibold">Order Management:</span> The app provides a comprehensive order management system. Restaurant owners can easily track and manage incoming orders, including online orders, dine-in orders, and takeaway requests. This feature ensures smooth operations and enhances customer satisfaction.
                </li>
                <li><span className="font-semibold">Dine-In Requests:</span> Kitchen Connect simplifies the dine-in experience by allowing customers to make table reservations directly through the app. Restaurants can accept, decline, or schedule requests based on availability, improving table turnover efficiency.
                </li>
                <li><span className="font-semibold">Add Restaurant:</span> The app supports multi-restaurant functionality, enabling users to add and manage multiple restaurant profiles. Each profile includes essential details such as name, location, menu, and contact information, providing a centralized management solution.
                </li>
                <li><span className="font-semibold">Dine-In Service:</span>  Restaurants can efficiently manage their dine-in services by monitoring table occupancy, taking orders directly from the table, and ensuring real-time communication between the kitchen and serving staff.
                </li>
                <li><span className="font-semibold">Product Management:</span> Managing the menu is effortless with the product management feature. Restaurants can add, edit, or remove items, categorize them, and set prices, images, and descriptions. This ensures an up-to-date menu for customers.
                </li>
                <li><span className="font-semibold">Special Offers and Discounts:</span> Attract more customers by creating and managing special offers, discounts, and combo deals. Restaurants can specify validity periods and conditions for each offer, promoting customer engagement and loyalty.
                </li>
                <li><span className="font-semibold">Working Hours Management:</span> Kitchen Connect allows restaurants to define their operational hours for different days of the week. This feature also supports holiday scheduling, ensuring accurate availability information for customers.
                </li>
                <li><span className="font-semibold">Reports and Analytics:</span> Restaurant owners can access detailed reports on sales, revenue, and customer preferences. This data helps in making informed business decisions and improving overall performance.
                </li>
                <li><span className="font-semibold">Staff Management:</span> Manage your team effectively by assigning roles, tracking performance, and monitoring attendance. The app supports different user roles, including admin, manager, chef, and waiter.
                </li>
                <li><span className="font-semibold">Notifications and Alerts:</span> Stay updated with real-time notifications for new orders, reservations, and customer feedback. Alerts ensure you never miss important updates, enhancing responsiveness.
                </li>
                <li><span className="font-semibold">Multi-Language Support</span>Kitchen Connect supports multiple languages, ensuring accessibility for a diverse audience, including customers and staff.
                </li>
                <li><span className="font-semibold">Customer Feedback and Reviews:</span> Gather valuable insights from customer feedback. Restaurants can respond to reviews and use suggestions to enhance their services.
                </li>
                <li><span className="font-semibold">Payment Integration:</span> The app supports various payment methods, including cash, credit cards, and online payment gateways, providing customers with convenient options.
                </li>
                <li><span className="font-semibold">Delivery and Takeaway:</span> Seamlessly manage delivery and takeaway orders with integrated delivery partner tracking and estimated time of arrival features.
                </li>
                <li><span className="font-semibold">Kitchen Display System (KDS):</span> Streamline kitchen operations with a Kitchen Display System that provides chefs with real-time order details, reducing errors and improving order preparation time.
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
            <div className="grid md:grid-cols-2 2xl:gap-8 items-center">
             
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Why Choose Kitchen Connect?
                </h4>
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-4">
                    <p className='text-[18px] text-[#212529] '>
                      Kitchen Connect is designed to simplify restaurant management while enhancing 
                      the overall dining experience. Its user-friendly interface, robust features, and 
                      adaptability to diverse business needs make it the perfect choice for restaurant 
                      owners looking to scale their operations. By incorporating this app into 
                      your portfolio, you demonstrate a commitment to innovation and excellence in the 
                      restaurant and kitchen management domain.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image src={Two} alt='one' height={2000} width={2000} className='w-[100%]  mr-6' />
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
            Ways to Boost Your Business using Our Kitchen Connect App Solutions
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
