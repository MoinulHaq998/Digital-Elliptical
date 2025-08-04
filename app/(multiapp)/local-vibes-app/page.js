import ThemeButton from '@/components/ui/ThemeButton'
import React from 'react'

// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/vibes/left.png'
import Right from '@/assets/multi-apps/vibes/right.png'
import Banner from '@/assets/multi-apps/vibes/banner1.png'
import One from '@/assets/multi-apps/vibes/one.png'
import Two from '@/assets/multi-apps/vibes/two.png'
import Three from '@/assets/multi-apps/food/three.webp'
import Down from '@/assets/multi-apps/vibes/down.png'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Frontend from '@/assets/multi-apps/cate/26.png'
import Backend from '@/assets/multi-apps/cate/27.png'
import Database from '@/assets/multi-apps/cate/28.png'
import Apis from '@/assets/multi-apps/cate/29.png'

const customer = [
  "Inefficient Communication: Eliminated bottlenecks with a centralized communication hub.",
  "Manual Task Tracking: Automated task assignments and progress tracking.",
  "Resource Mismanagement: Introduced real-time inventory and resource tracking.",
  "Scattered Data: Integrated all office operations into a single platform for better accessibility.",
];
const driver = [
  "Task Management: Create, assign, and track tasks with deadlines, priorities, and real-time updates.",
  "Employee Management: Maintain employee profiles, track attendance, and manage leaves and holidays.",
  "Communication Hub: Enable instant messaging, group chats, and real-time notifications.",
  "Meetings & Scheduling: Integrate calendars, book meeting rooms, and set automated reminders.",
  "Document Management: Store, categorize, and track document versions securely.",
  "Expense & Budgeting: Monitor office expenses, set budgets, and approve claims seamlessly.",
  "Project Management: Define goals, assign roles, track milestones, and generate reports.",
  "Performance Analytics: Gain insights into productivity, track usage, and export reports.",
  "Customization & Branding: Personalize interface, support multiple languages, and adapt to business needs.",
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
              <h1 className='font-extrabold text-[#212529] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]'>On-Demand Local Vibes App Development Solutions</h1>
              <p className='text-[20px] text-[#212529] lg:text-[22px]'>Your Ultimate Office Management Solution</p>
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
              Local Vibes  App Development Solutions
              </h2>
              <p className='text-[16px] md:text-[19px] text-[#212529] text-justify'>
                Local Vibes is a comprehensive office management app designed to streamline operations, enhance collaboration, and boost productivity within workplaces. With its user-friendly interface and powerful features, Local Vibes caters to businesses of all sizes, offering tailored solutions to meet the diverse needs of modern offices.
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
                    <div>
                      <Image src={Two} alt='one' height={2000} width={2000} className='w-[100%]  mr-6' />
                    </div>
                  </div>
                </div>
              </div>
      </section>

      {/* <section>
        <div className="container">
          <div className="lg:w-[65%] mx-auto">
            <div className='mb-12'>
            <h6 className="text-[30px] text-[#212529] font-semibold mb-5">Key Features</h6>
              <ul className="tracking-wider text-gray-700  text-base leading-6 space-y-2 ">
                <li><span className="text-[19px] text-[#212529] font-semibold">Task Management:</span> 
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Create, assign, and monitor tasks with deadlines.</li>
                        <li>Real-time updates on task progress and completion.</li>
                        <li>Prioritization options to focus on high-impact tasks.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Employee Management:</span> 
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Maintain detailed employee profiles, including roles, departments, and contact details.</li>
                        <li>Attendance tracking with biometric or manual inputs.</li>
                        <li>Leave and holiday management for streamlined approvals.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Communication Hub:</span>
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Instant messaging for internal communication.</li>
                        <li>Group chats and project-based communication channels.</li>
                        <li>Notifications and alerts to keep everyone informed.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Meeting and Scheduling:</span> 
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Calendar integration for seamless meeting scheduling.</li>
                        <li>Room booking system with availability status.</li>
                        <li>Automated reminders and follow-ups for meetings.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Document Management:</span> 
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Secure storage for office documents and records.</li>
                        <li>Categorization for easy access and sharing.</li>
                        <li>Version control to track document revisions.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Expense and Budget Management:</span> 
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Track office expenses and generate detailed reports.</li>
                        <li>Set budgets for departments or projects.</li>
                        <li>Approvals for expense claims directly within the app.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Project Management:</span> 
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Define project goals, milestones, and deadlines.</li>
                        <li>Assign roles and monitor team performance.</li>
                        <li>Generate progress reports with visual dashboards.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Office Resource Management:</span> 
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Inventory tracking for office supplies.</li>
                        <li>Request and approval system for resources.</li>
                        <li>Real-time status updates on available resources.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Performance Analytics:</span> 
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Insights into team productivity and efficiency.</li>
                        <li>Detailed analytics for task, project, and resource usage.</li>
                        <li>Exportable reports to aid decision-making.</li>
                    </ul>
                </li>
                <li><span className="text-[19px] text-[#212529] font-semibold">Customization and Branding:</span>
                    <ul className="list-disc pl-4 space-y-1 mt-2">
                        <li>Customize the app interface to reflect your company’s branding.</li>
                        <li>Flexible modules that adapt to your business processes.</li>
                        <li>Multilingual support for global teams.</li>
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className='my-24 text-[#212529]'>
          <div className="container ">
            <h4 className='text-[35px] text-[#212529] font-bold mb-12 text-center'>
              Technology Stack
            </h4>
            <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex justify-center items-center">
                  <Image src={Frontend} alt='expextation' width={2000} height={2000} className='w-[70px]' />
  
                </div>
                <h3 className="text-[20px] font-bold mb-2">Frontend</h3>
                <p className="text-sm">
                  Flutter (for mobile) and React.js (for web).
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex justify-center items-center">
                  <Image src={Backend} alt='expextation' width={2000} height={2000} className='w-[70px]' />
  
                </div>
                <h3 className="text-[20px] font-bold mb-2">Backend
                </h3>
                <p className="text-sm">
                  Node.js with MongoDB for real-time updates and data storage.
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
                      <Image src={One} alt='one' height={2000} width={2000} className='w-[100%]  mr-6' />
                    </div>
                    <div>
                      <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                        Challenges Addressed
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
            <div className="grid md:grid-cols-2 2xl:gap-8 items-center">
              <div>
                <h4 className='text-[30px] md:text-[37px] text-[#212529] font-bold mb-6'>
                  Why Local Vibes?
                </h4>
                <p className='text-[16px] md:text-[19px] text-[#212529] pr-8 text-justify'>
                  Local Vibes isn’t just an office management app; it’s a productivity powerhouse. It empowers businesses to achieve more with less effort by automating everyday operations, fostering collaboration, and offering insightful analytics.</p>
              </div>
              <div>
                <Image src={Two} alt='one' height={2000} width={2000} className='w-[100%]  mr-6 p-5' />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      

      
{/* 
      <section className='my-20'>
        <div className="container">
          <div className="lg:w-[80%] mx-auto">
            <div className="grid md:grid-cols-2 xl:gap-8 items-center">
              <div className='flex justify-end'>
                <Image src={Two} alt='two' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
              </div>
              <div>
                <h4 className='text-[35px] text-[#212529] font-bold mb-6'>
                  Use Cases
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
              <Image src={Down} alt='down' height={2000} width={2000} className='w-full max-w-[500px] p-4' />
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
            Ways to Boost Your Business using Our Local Vibes App Solutions
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
