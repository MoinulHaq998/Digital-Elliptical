import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
// Dummy images (Replace with actual image paths)

import authorImage from "@/assets/testimonial/prf1.webp"; // Replace with the author's image path
import Blog1 from "@/assets/blog-assets/images/blog-7.webp";
import Blog2 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog3 from "@/assets/blog-assets/images/blog-9.webp";
import Blog4 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";
import Blog5 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";

import banner from "@/assets/blog-assets/back.jpg";

const BlogPage = () => {
  return (
    <div>
      <div className="relative text-center bg-[#152331] text-white h-[60vh]">
            {/* Background Image */}
            <Image
              src={banner}
              alt="Web Development Banner"
              className="object-cover w-full h-full"
              layout="fill"
              priority
            />
            
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-20 flex flex-col items-center justify-center px-4">
              {/* Heading */}
              <h1 className="text-[22px] md:text-[32px] lg:text-[40px] font-bold mb-4 tracking-wide leading-tight">
                Low Cost Business
              </h1>
              
              {/* Date Button */}
              <button className="bg-[#005e7c] text-[14px] md:text-[16px] px-3 py-1 rounded-md">
                Business
              </button>
            </div>
      </div>

      <div className='container mx-auto p-6 lg:p-12'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Main Content */}
          <div className='lg:w-2/3 text-justify'>
            <h2 className=' text-xl md:text-3xl font-semibold capitalize text-gray-800 mt-8 mb-4'>
              A Guide on how to develop low-cost business app
            </h2>
              <p className='text-lg md:text-xl flex justify-start gap-3 items-center  text-gray-700 mt-4 mb-6'>
              <Icon  icon='mdi:calendar'/>June 24 2024 <Icon  icon='mdi:eye-outline'/>156</p>
            <Image
              src={Blog5}
              alt='Blog Featured'
              className='object-cover w-full'
            />
            <div className='mt-6'>
            
              <p className='text-gray-700 leading-7 mt-4'>
                In an ever-changing world, there are countless smartphone applications accessible for nearly every purpose. It is the reason why the mobile app development business is always growing. In this digital age, investing in a mobile app may be a lucrative prospect for entrepreneurs and company owners.
              </p>
              <p className='text-gray-700 leading-7 mt-4'>
                According to statistics, in 2024, around 27.8 billion applications will be downloaded from Google Play. However, only 8.3 billion downloads were made through the Apple App Store. These figures might help you determine the popularity of the rapidly expanding mobile app sector.
              </p>
              <p className='text-gray-700 leading-7 mt-4'>
                This tutorial will educate you about every aspect of mobile app development. Furthermore, you will learn about the benefits of investing in mobile app development for company owners. So, without further ado, let dive into the realm of mobile app development.
              </p>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                MOBILE APP DEVELOPMENT
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                Mobile app development is the process of generating mobile apps to run on our phones. From the standpoint of an entrepreneur, designing a mobile app entails more than just leveraging technical talents.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                While creating a mobile app, one must combine well-researched concepts, planning, and other details. If you create an app for your company and use your name, keep in mind that there will be a lot at stake.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                If the App does not function properly or fails to meet expectations, your company reputation and investment may suffer. As a result, you must prepare to simplify your app development job while creating an app.
              </p>

              

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Let us discuss a few steps you must follow while developing a mobile app to get the desired results.
              </h2>
              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-2'>
                IDEA CONCEPTUALIZATION
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                Let use WhatsApp as an example to further grasp the concept. WhatsApp was originally designed as an internet chat service that allowed users to stay connected without incurring any expenses.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                However, more features were introduced throughout time to improve the Apps engagement and attractiveness. If we assess the Apps concept in this scenario, we can conclude that the App we are now using is an improved version of the traditional messaging App for mobile devices.
              </p>
              <p className='text-gray-700 leading-7 mt-4'>
                To use the traditional App for mobile texting, you must have a cellular network and pay a fee. However, there is no need to invest any money to utilize WhatsApp. This is the reason why people like to use it.
              </p>
              <p className='text-gray-700 leading-7 mt-4'>
                An important thing you might notice in this example is that two main factors might help the app idea succeed. One is the exceptional technological integration, and the second is the scalable rendition of a conventional app.
              </p>
             
              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                RESEARCHING AND FINALIZING THE IDEA 
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                Before finishing a concept, conduct thorough research and go outside the box to assess your target audience. Furthermore, you must pay attention to tiny aspects and determine the goal of your App. While researching your concept, you must identify your rivals in the market and assess their Apps weaknesses and strengths.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                Researching the market and competition may also help you better grasp your intended audience. After conducting adequate research, you may analyze the app industry and narrow down your App ideas. At this stage, you must understand the relevant component of your App in order to proceed.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
              The first thing you need to know is your apps value proposition. Furthermore, you must define your apps unique selling feature. For example, let us discuss your favorite social networking app, Instagram. Instagram has a function that turned your smartphone photographs into squares. This notion was excellent, and it contributed to the success of the App.
              </p>


              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
        DEVELOPING APP STRATEGY
      </h2>
      <p className="text-gray-700 leading-7 mt-4">
        If you have shortlisted your ideas and are clear about your target audience, you should start working on the technicalities. If you want to focus on the technicalities of your app strategy, you will need 360˚ feature-based information about your App.
      </p>
      <p className="text-gray-700 leading-7 mt-4">
        For example, you must finalize the name of your App, the user flow based on your audience, and the Apps functionalities. You can divide the Apps functionalities into two main categories. The first is business-centric, and the second is customer-centric. If you want the mobile App to help your business get high reach and connectivity with your audience, you should consider specifying these features.
      </p>

      {/* DESIGNING THE APP */}
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
        DESIGNING THE APP
      </h2>
      <p className="text-gray-700 leading-7 mt-4">
        If you want your App to be successful, you will need to get into the Apps details. Moreover, you will also need to work on different aspects of the App. An important thing that you should keep in mind is developing an efficient app design so that you attract your audience.
      </p>
      <p className="text-gray-700 leading-7 mt-4">
        You can easily interact with the users intricately when you have an elaborative, intricating, and well-sought app design. However, during the design phase, you must ensure that the added functionalities in your app work for Android and iOS.
      </p>

      {/* PROTOTYPING YOUR APP */}
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
        PROTOTYPING YOUR APP
      </h2>
      <p className="text-gray-700 leading-7 mt-4">
        Prototyping is an essential step in the app development process. Developing prototypes mean combining all the ideas and transforming them into a functional app. The benefit of creating a prototype is that it helps you present your idea to the Apps audience and mobile phone users.
      </p>
      <p className="text-gray-700 leading-7 mt-4">
        Moreover, it also helps in analyzing the positive points and aspects of the App. A prototype can assist you in evaluating every part of your App and help make improvements. After developing the prototype, you can share it with your quality assurance team to look for logical and functional bugs.
      </p>

      {/* DEVELOPING YOUR APP */}
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
        DEVELOPING YOUR APP
      </h2>
      <p className="text-gray-700 leading-7 mt-4">
        After finalizing and specifying all the minor and significant technicalities, you can start working on developing your App. You can use your prototype to develop an upgraded version of your App while omitting all the loopholes and bugs.
      </p>

      {/* LAUNCHING THE APP */}
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
        LAUNCHING THE APP
      </h2>
      <p className="text-gray-700 leading-7 mt-4">
        After a lot of brainstorming, research, and prototyping, you will be able to develop an error-free app. However, keep in mind that even launching the App needs proper planning, management, and scheduling.
      </p>

      {/* REGULARLY UPDATING THE APP */}
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
        REGULARLY UPDATING THE APP
      </h2>
      <p className="text-gray-700 leading-7 mt-4">
        To improve the audiences engagement with your App and enhance its performance, you must keep coming up with better functional updates. You can keep innovating and enhancing your App to provide better-enhance features to the users while maintaining the core functionality of the App.
      </p>

      {/* PROMOTING YOUR APP */}
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
        PROMOTING YOUR APP
      </h2>
      <p className="text-gray-700 leading-7 mt-4">
        This step does not have to do anything with the app development process. However, efficiently promoting your App can make it highly successful. Keep in mind that developing and implementing a good marketing strategy can help you avoid losing your App in the collection of other apps.
      </p>
      <p className="text-gray-700 leading-7 mt-4">
        Therefore, there are numerous things that you can do that will add up to the strategy of channeling your App and your target audience. The first thing you can do is to promote your App on social media platforms like Instagram, Twitter, and Facebook. You can also prioritize the platforms that your target audience uses.
      </p>
      <p className="text-gray-700 leading-7 mt-4">
        You can also publish the latest and unique features of your App on the review sites. This way, you will be able to catch the attention of the potential target audience. You can also consider collaborating with bloggers, influencers, and social media persons to give your App the right push.
      </p>
      <p className="text-gray-700 leading-7 mt-4">
        You can also post about your App on PreApps, a site for publishing apps in their early development phase. These websites help the apps grow among the target audience. Another thing you can do is try another store like Amazon App store, SlideMe, Opera Mobile Store, etc.
      </p>
      <p className="text-gray-700 leading-7 mt-4">
        Just work on optimizing your results and improving your SEO by adding keywords and meta descriptions that can help your App get a better ranking on the app store. We hope that these points will help you efficiently promote your App. Moreover, by following these procedures, you will also be able to attract your targeted audience.
      </p>

      {/* BOTTOM LINE */}
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
        BOTTOM LINE
      </h2>
      <p className="text-gray-700 leading-7 mt-4">
        You might be confused by the procedures and tasks involved in establishing an app for your business. However, these stages are critical for developing an effective app. It is true that while designing an app, every business owner wants to guarantee that it performs effectively in the digital media. Furthermore, they hope that the App successfully reaches its intended audience.
      </p>

      <p className="text-gray-700 leading-7 mt-4">
        As a result, you must keep an eye on all critical app development and administration details. Furthermore, the method might help you rethink your mobile app marketing strategy and growth. Essential parts of designing and distributing your App to earn income may also assist you keep track of how much money you make while developing the App.
      </p>
              
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:w-1/3 space-y-8'>
            {/* Author Section */}
            <div className='bg-white  p-3  text-center'>
              <Image
                src={authorImage}
                alt='Author'
                width={150}
                height={150}
                className='rounded-full mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-gray-800'>Maria Ash</h3>
              <p className='text-md text-gray-600 mt-2'>
                Maria Ash is a Community Manager at The Team Freelance, a
                rapidly growing Top Web and Mobile App Development Company in
                the USA and the Middle East.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='text-[28px] text-center font-semibold text-gray-800 mb-4'>
                Subscribe to Our Newsletter
              </h3>
              <form>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='w-full border border-gray-300 rounded-md p-2 mb-4'
                />
                <button
                  type='submit'
                  className='text-gray-800 border border-gray-800 w-full py-2 rounded-md font-medium hover:bg-[#152331] hover:text-white'
                >
                  SUBSCRIBE TO OUR NEWSLETTER
                </button>
              </form>
            </div>

            {/* Popular Posts */}
            <div className=' p-4 '>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Popular Posts
              </h3>

              <ul className='space-y-4'>
                <li className='flex items-center gap-4'>
                  <Image
                    src={Blog1}
                    alt='Post 1'
                    width={60}
                    height={60}
                    className='object-cover'
                  />
                  <div>
                    <h4 className='text-sm font-semibold text-gray-800'>
                      Cross-Platform Hybrid Mobile App Development: Everything
                      You Need To Know
                    </h4>
                    <p className='text-xs text-gray-500 mt-1'>
                      September 6, 2021
                    </p>
                  </div>
                </li>
                <li className='flex items-center gap-4'>
                  <Image
                    src={Blog2}
                    alt='Post 2'
                    width={60}
                    height={60}
                    className=' object-cover'
                  />
                  <div>
                    <h4 className='text-sm font-semibold text-gray-800'>
                      Top Mobile Application Development Trends To Look Out For
                      in 2021
                    </h4>
                    <p className='text-xs text-gray-500 mt-1'>
                      September 6, 2021
                    </p>
                  </div>
                </li>
                <li className='flex items-center gap-4'>
                  <Image
                    src={Blog3}
                    alt='Post 3'
                    width={60}
                    height={60}
                    className=' object-cover'
                  />
                  <div>
                    <h4 className='text-sm font-semibold text-gray-800'>
                      MEAN Stack VS MERN Stack: Which Full Stack Web App
                      Development Framework Should You Go For?
                    </h4>
                    <p className='text-xs text-gray-500 mt-1'>
                      September 6, 2021
                    </p>
                  </div>
                </li>
                <li className='flex items-center gap-4'>
                  <Image
                    src={Blog4}
                    alt='Post 4'
                    width={60}
                    height={60}
                    className='object-cover'
                  />
                  <div>
                    <h4 className='text-sm font-semibold text-gray-800'>
                      Cross-Platform Hybrid Mobile App Development: Everything
                      You Need To Know
                    </h4>
                    <p className='text-xs text-gray-500 mt-1'>
                      September 6, 2021
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

// import React from "react";
// import Blog from "@/assets/google-store/building-construction/big.png";
// import Logo from "@/assets/logo/de-logo.webp";
// import Image from "next/image";

// const page = () => {
//   const blogData = [
//     {
//       title: "Artificial Intelligence",
//       dis: "5 ways how gen ai is set to revolutionize the financial industry",
//       createdAt: "23-05-2024",
//       category: "Technology",
//     },
//     {
//       title: "Artificial Intelligence",
//       dis: "5 ways how gen ai is set to revolutionize the financial industry",
//       createdAt: "23-05-2024",
//       category: "Technology",
//     },
//     {
//       title: "Artificial Intelligence",
//       dis: "5 ways how gen ai is set to revolutionize the financial industry",
//       createdAt: "23-05-2024",
//       category: "Technology",
//     },
//     {
//       title: "Artificial Intelligence",
//       dis: "5 ways how gen ai is set to revolutionize the financial industry",
//       createdAt: "23-05-2024",
//       category: "Technology",
//     },
//     {
//       title: "Artificial Intelligence",
//       dis: "5 ways how gen ai is set to revolutionize the financial industry",
//       createdAt: "23-05-2024",
//       category: "Technology",
//     },
//     {
//       title: "Artificial Intelligence",
//       dis: "5 ways how gen ai is set to revolutionize the financial industry",
//       createdAt: "23-05-2024",
//       category: "Technology",
//     },
//     {
//       title: "Artificial Intelligence",
//       dis: "5 ways how gen ai is set to revolutionize the financial industry",
//       createdAt: "23-05-2024",
//       category: "Technology",
//     },
//     {
//       title: "Artificial Intelligence",
//       dis: "5 ways how gen ai is set to revolutionize the financial industry",
//       createdAt: "23-05-2024",
//       category: "Technology",
//     },
//   ];

//   return (
//     <div>
//       <div className='text-center bg-[#152331] text-white  py-14'>
//         <h1 className='text-[50px] '>Digital Elliptical Blogs</h1>
//         <p className='text-[20px] '>Industry Insights & Trends</p>
//       </div>
//       <div className='flex justify-center items-center py-8'>
//         <div className='w-[80%] lg:p-8 md:p-4 p-0'>
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
//             {blogData.map((blog, idx) => (
//               <div
//                 key={idx}
//                 className='w-full border shadow-lg rounded-xl overflow-hidden bg-white'
//               >
//                 <div className='relative'>
//                   <Image
//                     src={Blog}
//                     alt='blog image'
//                     className='!w-full !h-48 object-cover'
//                     width={500}
//                     height={500}
//                   />
//                   <div className='absolute top-0 left-0 w-full h-full bg-primary bg-opacity-10'></div>
//                   <h2 className='absolute top-4 right-4 bg-white rounded-md text-[13px] text-[#005e7c] tracking-[0.4px] leading-[19.5px] px-[12px] py-[2px]'>
//                     {blog.category}
//                   </h2>
//                 </div>
//                 <div className='flex items-center justify-between px-4 py-3 border-b-2'>
//                   <div className='flex items-center gap-2'>
//                     <Image
//                       src={Logo}
//                       alt='de-logo'
//                       width={100}
//                       height={100}
//                       className='!h-9 !w-9'
//                     />
//                     <h4 className='text-sm font-semibold'>
//                       Digital Elliptical
//                     </h4>
//                   </div>
//                   <div>
//                     <p className='text-sm text-gray-600'>{blog.createdAt}</p>
//                   </div>
//                 </div>

//                 <div className='min-h-[140px] px-4 py-3'>
//                   <h4 className='font-bold mb-1 text-gray-800'>{blog.title}</h4>
//                   <p className='text-sm text-gray-600'>{blog.dis}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;