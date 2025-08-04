"use client"; // Add this line at the top
import Blog5 from "@/assets/blog-assets/images/blog-7.webp";
import Blog6 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog8 from "@/assets/blog-assets/images/blog-9.webp";
import Blog7 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";
import Blog9 from "@/assets/blog-assets/images/poor data and cause blog DE-01.webp";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const cardsData = [
  {
    id: 1,
    image: Blog9,
    title: "Why poor data quality can become a cost hazard",
    description: "Read More ➜",
    link: "/poor-data-quality",
    
  },
  {
    id: 2,
    image: Blog6,
    title: "Explporing the rise of digital currency in a tech-driven world",
    description: "Read More ➜",
    link: "/crypto-currency-blog",
    
  },
  {
    id: 3,
    image: Blog8,
    title: "The Evolving Cyber Security Threat Landscape",
    description: "Read More ➜",
    link: "/cyber-security",
  },
  {
    id: 4,
    image: Blog7,
    title: "A Guide on how to develop low-cost business app",
    description: "Read More ➜",
    link: "/low-cost-business",
  },
];

const TabCard = () => {
  return (
    <div className="container mt-16">
      {/* Header */}
      <h1 className="text-center text-4xl font-bold mb-2 text-gray-800 uppercase">
        Our Blogs
      </h1>
      <p className="text-center text-base mb-9 text-gray-500">
        Industry Insights & Trends
      </p>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-[100%] mx-auto mt-8 gap-6">
        {/* Left Section: Image */}
        <div className="lg:w-2/3 w-full overflow-hidden">
          <div className=" p-6 rounded-md">
           
              <div className=" shadow-md rounded-md">
                <Image
                  src= {Blog5}
                  alt='img'
                  className="object-cover w-full h-full "
                />
                <div className="py-8  p-4">
                  <h3 className="font-semibold text-xl leading-5 text-gray-800">
                  5 ways how gen ai is set to revolutionize the financial industry
                  </h3>
                  <Link href='artificial-intelligence'>
                  <p className="text-blue-500 mt-2 text-sm font-medium ">
                  Read More ➜
                  </p></Link>
                </div>
              </div>
           
          </div>
        </div>
        {/* Right Section: Tabs */}
        <div className="lg:w-1/3 w-full p-1 ">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="p-2 mx-1 my-6 cursor-pointer flex items-center gap-3  hover:-ml-2 hover:mr-2  rounded-md 
              transition-all ease-in-out duration-600 shadow-md  hover:border-r-4  hover:border-[#005e7c]  bg-white  
              hover:shadow-lg "
            >
              {/* Image */}
              <div className="relative flex-shrink-0 ">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={70}
                  height={70}
                  className="object-cover w-20 h-14 sm:w-18 sm:h-12 md:w-20 md:h-14 rounded-md"
                />
              </div>

              {/* Content */}
              <div className="flex-1 px-1 py-2">
                <h3 className="font-medium sm:text-md text-gray-800 text-sm">
                  {card.title}
                </h3>
                <Link href={card.link}>
                <p className="text-blue-500 mt-1 text-xs">{card.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabCard;

// const TabCard = () => {
//   const [activeTab, setActiveTab] = useState(1); // Default active tab

//   const handleTabClick = (id) => {
//     setActiveTab(id);
//   };

//   return (
//     <div className='container mt-16'>
//       {/* Header */}
//       <h1 className='text-center text-4xl font-bold mb-2 text-gray-800 uppercase'>
//         Our Blogs
//       </h1>
//       <p className='text-center text-base mb-9 text-gray-500'>
//         Industry Insights & Trends
//       </p>

//       {/* Main Content */}
//       <div className='flex flex-col lg:flex-row w-[100%] mx-auto mt-8 gap-8 '>
//         {/* Left Section: Image */}
//         <div className='lg:w-2/3 w-full  overflow-hidden '>
//           <div className='bg-[#fcfcfc] border border-gray-100 rounded-md shadow-lg p-6'>
//             <div>
//               <Image
//                 src={
//                   cardsData.find((card) => card.id === activeTab)?.image || ""
//                 }
//                 alt='Active Tab'
//                 className='object-cover w-full h-full '
//               />
//             </div>
//             <div className='mt-6'>
//               <h3 className='font-semibold text-xl leading-5 text-gray-800'>
//                 {cardsData.find((card) => card.id === activeTab)?.title || ""}
//               </h3>
//               <p className='text-blue-500 mt-2 text-sm font-medium'>
//                 {cardsData.find((card) => card.id === activeTab)?.description ||
//                   ""}
//                   </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Tabs */}
//         <div className='lg:w-1/3 w-full p-1 '>
//           {cardsData.map((card, idx) => (
            
//             <div
//             key={card.id}
//             className={`p-3 mx-2 my-4 cursor-pointer flex items-center gap-3 rounded-md transition-all ease-in-out duration-300
//               ${card.id === activeTab
//                 ? "shadow-md border-r-4  border-[#005e7c] bg-gray-50" // Active tab styling
//                 : "shadow-md border-r-4  border-transparent bg-white hover:shadow-md hover:border-gray-100"
//               }`}
//             onClick={() => handleTabClick(card.id)}
//           >
//             {/* Image */}
//             <div className='relative flex-shrink-0'>
//               <Image
//                 src={card.image}
//                 alt={card.title}
//                 width={70}
//                 height={70}
//                 className='object-cover  w-18 h-14 sm:w-14 sm:h-10 md:w-16 md:h-12 '
//               />
//             </div>
          
//             {/* Content */}
//             <div className='flex-1 px-1'>
//               <h3 className='font-medium sm:text-md text-gray-800  text-sm'>
//                 {card.title}
//               </h3>
//               <p className='text-blue-500 mt-1 text-xs '>
//                 {card.description}
//               </p>
//             </div>
//           </div>
          
//           ))}
//         </div>
//       </div>

    
//     </div>
//   );
// };

// import BlogCard from "@/components/shared/BlogCard";
// import React from "react";
// import blogImage1 from "@/assets/blog-assets/images/advanced-chemotherapy-01.webp"
// import blogImage1 from "@/assets/blog-assets/images/mob application-01.webp";
// import blogImage2 from "@/assets/blog-assets/images/common B2B marketing automation mistakes to avoid-01.webp";
// import blogImage3 from "@/assets/blog-assets/images/poor data and cause blog DE-01.webp";
// import blogImage4 from "@/assets/blog-assets/images/6 Reasons Why Agile Results in Better Software-01.webp";

// const Blog = () => {
//   return (
//     <div className='mt-16 container'>
//       <h1 className='text-center text-4xl mb-2'>Our Blog</h1>
//       <p className='text-center text-base mb-9'>Industry Insights & Trends</p>

//       <div className='grid grid-cols-12 gap-4'>
//         <div className='md:col-span-3 col-span-12'>
//           <BlogCard
//             date={"14-06-2024"}
//             img={blogImage1}
//             title={"Mobile App Development"}
//             desc={"Top 10 Mobile App Development frameworks in 2024"}
//           />
//         </div>
//         <div className='md:col-span-3 col-span-12'>
//           <BlogCard
//             date={"25-10-2024"}
//             img={blogImage2}
//             title={"B2B Marketing automation"}
//             desc={"Common b2b marketing automation mistakes to avoid"}
//           />
//         </div>
//         <div className='md:col-span-3 col-span-12'>
//           <BlogCard
//             date={"25-10-2024"}
//             img={blogImage3}
//             title={"Poor Data Quality"}
//             desc={"Why poor data quality can become a cost hazard"}
//           />
//         </div>
//         <div className='md:col-span-3 col-span-12'>
//           <BlogCard
//             date={"25-10-2024"}
//             img={blogImage4}
//             title={"Agile Software development"}
//             desc={"6 Reasons Why Agile Results in Better Software"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;