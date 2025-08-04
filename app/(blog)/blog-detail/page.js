import React from "react";
import Image from "next/image";

// Dummy images (Replace with actual image paths)
import authorImage from "@/assets/testimonial/prf.jpg"; // Replace with the author's image path
import Blog1 from "@/assets/blog-assets/images/blog-7.webp";
import Blog2 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog3 from "@/assets/blog-assets/images/blog-9.webp";
import Blog4 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";

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
          WEB DEVELOPMENT
        </h1>
        
        {/* Subheading */}
        <p className='text-[14px] md:text-[18px] lg:text-[20px] font-medium mb-6 leading-relaxed max-w-[600px]'>
          Online Marketplace App Development Guide Before You Startup
        </p>

        {/* Date Button */}
        <button className='bg-[#005e7c] text-[12px] md:text-[14px] px-4 py-2 rounded-sm shadow-lg hover:bg-[#34b334] transition-all duration-300'>
          September 6, 2021
        </button>
      </div>
      </div>

      <div className='container mx-auto p-6 lg:p-12'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Main Content */}
          <div className='lg:w-2/3'>
            <Image
              src={Blog1}
              alt='Blog Featured'
              className='object-cover w-full'
            />
            <div className='mt-6'>
              <p className='text-gray-700 leading-7'>
                Commercial centers are as of now not inseparable from the packed
                roads on end of the week mornings. Individuals  run to a
                typical any longer. Nor do they stand by in line to buy their
                favored items and administrations on bargains. With online
                commercial center application improvement consistently either a
                deal or a happy event with individuals purchasing things they
                required, did not require, felt indiscreet to purchase, and the
                sky is the limit from there.
              </p>
              <p className='text-gray-700 leading-7 mt-4'>
                From handpicking ranch new vegetables and food to physically
                evaluating attire and apparel, we have come to getting them
                conveyed at doorsteps and giving them a shot for all intents and
                purposes through AR and VR advancements. Online commercial
                centers are the current fury, and their noticeable quality has
                expanded further since the beginning of the worldwide pandemic.
              </p>
              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                What Is A Marketplace?
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                Imagine a business complex in your local that has numerous shops
                across assorted classifications, items, and administrations. At
                the point when you visit these buildings, you are allowed to go
                to any shop and buy your favored items. The equivalent applies
                to shopping centers and shopping roads too.<br></br> Presently,
                envision a similar shopping center on the web. What you will see
                is a commercial center - an online stage that offers items,
                brands, and administrations for you to look over. There are
                shops from various sellers and brands and you have astonishing
                alternatives to browse.<br></br> Besides, these brands are
                likewise rivaling their arrangements and limits to get you to
                buy from their shops. This is actually whats really going on
                with a commercial center. To get to these commercial centers,
                you either utilize a site or an application. The last is
                acquiring fame nowadays.
              </p>
              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Key Statistics
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                Before we understand more about marketplace development, lets
                have a look at some key statistics to get to know the market
                conditions better.
              </p>
              <ul className='text-gray-700 leading-7 mt-1 list-disc ml-6'>
                <li>eCommerce sales topped over $4tn in the year 2020.</li>
                <li>Amazons profits grew by around 80% in the same time.</li>
                <li>
                  Over 3.4bn people across the world purchase products and
                  services from the eCommerce sector.
                </li>
                <li>eBay has over 1bn active listings on its platform.</li>
                <li>
                  On an average day, over 2 billion transactions happen on eBay.
                </li>
              </ul>
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