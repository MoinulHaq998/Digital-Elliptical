import React from "react";
import Link from "next/link";
import Blog1 from "@/assets/google-store/building-construction/big.png";

import Blog4 from "@/assets/blog-assets/images/CRM-ERP-what_s-the-connection-01.webp";
import Blog5 from "@/assets/blog-assets/images/blog-7.webp";
import Blog6 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog7 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";
import Blog8 from "@/assets/blog-assets/images/blog-9.webp";
import Blog9 from "@/assets/blog-assets/images/poor data and cause blog DE-01.webp";
import Image from "next/image";

const page = () => {
  const blogData = [
    {
    image: Blog5,    
    title: "5 ways how gen ai is set to revolutionize the financial industry",
    createdAt: "23-05-2024",
    category: "Artificial Intelligence",
    link: "/artificial-intelligence",
    },
    {
      image: Blog6,    
      title: "Explporing the rise of digital currency in a tech-driven world",
      createdAt: "21-05-2024",
      category: "Crypto currency",
      link: "/crypto-currency-blog",
    },
    {
      image: Blog4,    
      title: "CRM + ERP: What's the connection?",
      createdAt: "21-05-2024",
      category: "CRM + ERP",
      link: "/crm-erp",
    },
    {
      image: Blog8,    
      title: "The Evolving Cyber Threat Landscape",
      createdAt: "26-05-2024",
      category: "Cyber Security",
      link: "/cyber-security",
    },
    {
      image: Blog7,    
      title: "A Guide on how to develop low-cost business app",
      createdAt: "24-05-2024",
      category: "Low Cost Business",
      link: "/low-cost-business",
    },
    {
      image: Blog9,    
      title: "Why poor data quality can become a cost hazard",
      createdAt: "24-05-2024",
      category: "Poor Data Quality",
      link: "/poor-data-quality",
    },
      
  ];
 

  return (
    <div>
      <div className='text-center  bg-[#152331] text-white py-14'>
        <h1 className='text-[30px] md:text-[50px] '> Blogs</h1>
        <p className='text-[16px] md:text-[20px] '>Industry Insights & Trends</p>
      </div>
      <div className='flex justify-center items-center py-8'>
        <div className='w-[80%] lg:p-8 md:p-4 p-0'>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            
            {blogData.map((blog, idx) => (
            <Link href={blog.link || "#"} key={idx}>
              <div key={idx} className='w-full group hover:shadow-lg duration-300 ease-in-out my-4 overflow-hidden bg-white'>
                <div className='relative'>
                  <Image
                    src={blog.image}
                    alt='blog image'
                    className='!w-full !h-[100%] object-cover'
                    width={500}
                    height={500}
                  />
                  <div className='absolute top-0 left-0 w-full h-full duration-300 ease-in-out group-hover:bg-primary group-hover:bg-opacity-10'></div>
                  
                </div>
                <div className='flex items-center justify-between px-4 py-4'>
                  <div className='flex items-center gap-2'>   
                    <h4 className='text-sm text-gray-600 pr-3 border-r'>
                        {blog.category}
                    </h4>
                    
                    <p className='text-sm text-gray-600'>{blog.createdAt}</p>
                  </div>
                  
                </div>
                <div className=' px-4 pb-6'>
                  <h4 className='font-bold mb-1 text-gray-800'>{blog.title}</h4>
                  
                </div>
              </div>
            </Link>
            ))}
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;