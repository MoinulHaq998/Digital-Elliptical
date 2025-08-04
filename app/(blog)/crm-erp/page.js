import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
// Dummy images (Replace with actual image paths)
 // Replace with the main blog image path
import authorImage from "@/assets/testimonial/prf2.webp";
import Blog1 from "@/assets/blog-assets/images/blog-7.webp";
import Blog2 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog3 from "@/assets/blog-assets/images/blog-9.webp";
import Blog4 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";
import Blog5 from "@/assets/blog-assets/images/CRM-ERP-what_s-the-connection-01.webp";
import Blog6 from "@/assets/blog-assets/images/CRM-ERP-what_s-the-connection-02.webp";
import Blog7 from "@/assets/blog-assets/images/CRM-ERP-what_s-the-connection-03.webp";
import banner from "@/assets/blog-assets/back.jpg";

const BlogPage = () => {
  return (
    <div>
      <div className='relative text-center bg-[#152331] text-white h-[60vh]'>
            {/* Background Image */}
            <Image
              src={banner}
              alt="Web Development Banner"
              className='object-cover w-full h-full'
              layout="fill"
              priority
            />
            
            {/* Overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-primary bg-opacity-20 flex flex-col items-center justify-center px-4'>
              {/* Heading */}
              <h1 className='text-[22px] md:text-[32px] lg:text-[40px] font-bold mb-4 tracking-wide leading-tight'>
              CRM + ERP
              </h1>
              
              {/* Date Button */}
              <button className='bg-[#005e7c] text-[14px] md:text-[16px] px-3 py-1 rounded-md'>
                Software Engineering
              </button>
            </div>
      </div>

      <div className='container mx-auto p-6 lg:p-12'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Main Content */}
          <div className='lg:w-2/3 text-justify'>
          <h2 className=' text-xl md:text-3xl font-semibold capitalize text-gray-800 mt-8 mb-4'>
              CRM + ERP: What is the connection?
              </h2>
              <p className='text-lg md:text-xl flex justify-start gap-3 items-center  text-gray-700 mt-4 mb-6'>
              <Icon  icon='mdi:calendar'/>June 23 2024 <Icon  icon='mdi:eye-outline'/>156</p>
            <Image
              src={Blog5}
              alt='Blog Featured'
              className='object-cover w-full'
            />
            <div className='mt-6'>
            
              <p className='text-gray-700 leading-7'>
                Enterprise resource planning (ERP) and customer relationship management (CRM) are two different procedures, although both aim to enhance an organizations overall efficiency and usefulness. Integrating the two saves a significant amount of time, money, and energy by automating operations, gathering and displaying relevant information in real time, and making other key operational improvements. Finally, these digital solutions provide commercial benefits that allow you to give a better product and brand experience before, during, and after each consumer transaction.
              </p>
              <p className='text-gray-700 leading-7 mt-4'>
                In this piece, we will look at each of these processes and explain why combining them may be quite helpful for merchants.
              </p>


              <p className='text-gray-700 leading-7 mt-4'>
              <span className='font-semibold'>CRM: </span> CRM stands for Customer Relationship Management. It is a technology for managing all your company relationships and interactions with current and potential customers. A CRM system helps businesses stay connected to customers, streamline processes, and improve profitability. It typically includes features for tracking interactions, managing sales pipelines, customer support, marketing automation, and storing contact information. By using a CRM, businesses can better analyze customer data and interactions, which can lead to more personalized service and improved customer satisfaction.
              </p>

              <Image
              src={Blog6}
              alt='Blog Featured'
              className='object-cover w-full mt-2'
            />

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Benefits of CRM:
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                CRM, or Customer Relationship Management, is a system that helps companies in managing and analyzing customer interactions across the customer lifecycle, with the purpose of strengthening customer relationships, generating sales growth, and maintaining clients.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
              <span className='font-semibold'>ERP: </span> ERP stands for Enterprise Resource Planning. It is a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations. An ERP system can also include enterprise performance management, software that helps plan, budget, predict, and report on an organization’s financial results. ERP systems tie together a multitude of business processes and enable the flow of data between them, thereby ensuring that every department in a company can access and rely on the same up-to-date information for their specific needs.
              </p>

              <Image
              src={Blog7}
              alt='Blog Featured'
              className='object-cover w-full mt-2'
            />

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Benefits of ERP:
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
              In today fast-paced and ever-changing business environment, firms are continuously looking for methods to simplify processes, increase efficiency, and drive development. ERP systems have emerged as a game changer in this area. From small startups to major corporations, businesses across all industries are realizing the benefits of deploying ERP systems.
              </p>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                What’s the difference?
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                Individually, both of these tasks have the same purpose: to assist your company grow more lucrative. However, they concentrate on distinct aspects of your organization. An ERP platform decreases the resources (time, money, effort, etc.) necessary for your essential business activities, whereas CRM enhances sales volume through improved customer management. When used effectively, they may have a multiplier impact, giving your retail organization with the knowledge and operational efficiency it requires to remain competitive.
              </p>

              

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Integrate or Implement?
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                Whether you connect independent CRM and ERP solutions or use an ERP platform with built-in CRM capability, making their processes work together is critical. However, merging various systems might cause compatibility issues. Because different aspects of your business and software programs grow at different speeds, integrated components that work effectively now may no longer work several years later. As a result, many merchants prefer ERP packages that already incorporate CRM features. These all-in-one solutions have an obvious advantage: you do not have to worry about compatibility issues between modules built by different software suppliers.
              </p>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Conclusion:
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                When two important processes, such as ERP and CRM, operate nearly totally independently of one another, maintaining consistent operations and communication to support successful decision-making can be difficult. For merchants seeking a genuinely comprehensive picture of their consumers and how they interact with their business, accurate and up-to-date information is critical.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                Implementing an ERP platform with CRM capability built-in is a significant investment, but it can dramatically revolutionize your day-to-day and long-term operations through data-driven choices and workflows. Choose an ERP platform that is specifically developed for retail, as well as an installation partner who understands both the product and your sector.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                Contact Systems to learn more about how ERP technologies help retailers increase profitability from inside.
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