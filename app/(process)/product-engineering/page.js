import React from "react";
import Envisage from "@/assets/process/product-engineering/Envisage.webp";
import Excogitate from "@/assets/process/product-engineering/Excogitate.webp";
import Estimate from "@/assets/process/product-engineering/estimate.webp";
import Engage from "@/assets/process/product-engineering/engage.webp";
import Evaluate from "@/assets/process/product-engineering/Evaluate.webp";
import Image from "next/image";
export default function page() {
  const data = [
    {
      image: Envisage,
      name: "Envisage",
      head1: "Brain storming",
      dis1: "Digital Elliptical team will perform an in-depth study of the system in conjunction with the customer to ensure that the client's vision and the project are clearly sketched out",
      head2: "Market research",
      dis2: "After gaining a thorough knowledge of the system via numerous brainstorming sessions, the team will perform market research that includes industry trends and competition analysis. This will aid in determining the systems future scope",
      head3: "Feasibility report",
      dis3: "The feasibility study will allow the client to understand the technical side of the system. The report will be comprised of the technical and the system architecture.",
      count: "01",
    },
    {
      image: Excogitate,
      name: "Excogitate",
      head1: "Risks and mitigation",
      dis1: "The team will set out all conceivable hazards and their related mitigation measures based on the market research.",
      head2: "SWOT analysis",
      dis2: "The SWOT analysis will be a consolidated report of the strengths, weaknesses, opportunities, and threats of the system based on the conducted market research.",
      count: "02",
    },
    {
      image: Estimate,
      name: "Estimate",
      head1: "Estimate",
      dis1: "After gaining the complete understanding of the system, the scope of work will be documented which will be comprised of detailed explanation of the modules and sub modules of the system.",
      head2: "Execution road map",
      dis2: "Based on the documented scope of work, the project manager will divide the entire execution of the system into cycles which will be delivered to the client.",
      count: "03",
    },
    {
      image: Engage,
      name: "Engage",
      head1: "Development based on cycles",
      dis1: "The development team will begin the execution of each cycle while keeping the road map in mind.",
      head2: "Cycle review",
      dis2: "Post completion of each cycle, the development team will unit test the features that are developed as a part of the cycle.",
      head3: "Beta version release",
      dis3: "The cycle's beta version will be released.",
      count: "04",
    },

    {
      image: Evaluate,
      name: "Evaluate",
      head1: "Beta version review ",
      dis1: "Providing a quality assurance checklist for system design and development.",
      head2: "Alpha version development",
      dis2: "The team will improve the system to get it suitable for launch based on the evaluation and comments..",
      count: "05",
    },
  ];
  return (
    <div>
      <div className='w-[80%] mx-auto h-[40vh] flex flex-col justify-center gap-4 items-center'>
        <h1 className='lg:text-[40px] text-[30px] text-nowrap leading-[48px] font-semibold text-center'>
          Product Engineering
        </h1>
        <p className='text-center lg:w-[72%] w-full leading-[22.5px]  lg:text-[15px] lg:ml-0 -mt-2 text-[13px]'>
          Cutting-edge product engineering solutions, optimizing design,
          development, and manufacturing processes for innovation and market
          success.
        </p>
      </div>

      <div className='w-full h-fit'>
        {data.map((val, idx) => (
           <div  key={idx} className='w-[80%] h-fit  mb-24 mt-4 fixed-cost mx-auto flex lg:flex-row flex-col'>
           <div className='lg:w-[50%] w-[100%] '>
             <div className='w-[100%] overflow-hidden z-10 -mt-10  h-[100%] mx-auto'>
               <Image
                 src={val.image}
                 alt=''
                 className='object-cover transition-all ease-linear duration-400  z-10 lg:p-4 p-0 overflow-hidden w-[100%] h-[100%]'
               />
             </div>
           </div>
           <div className='lg:w-[50%] w-[100%]  relative z-40'>
             <div className='!w-[160px] h-[150px] bg-white z-40 absolute -top-14 lg:-left-14  -left-4   '>
               <h1 className='text-stoke text-[120px] leading-[144px] font-semibold text-[#ffffff]'>
                 {val.count}
               </h1>
             </div>
             <div className='w-full h-full  flex transition-all z-30 ease-linear duration-200 card-shadow cursor-pointer rounded-lg border-dashed border-2 border-[#2C5F7D]'>
               <div className='w-[75%]  lg:ml-28 lg:mt-0 ml-4 mt-16'>
                 <div className={`group ${val.dis3 ? "mt-8" : "lg:mt-24"}`}>
                   <h1 className='text-[#212529] transition-all ease-linear  cursor-pointer duration-200 text-[40px] leading-[48px] font-semibold'>
                     {val.name}
                   </h1>
                   <span className='bg-[#2C5F7D] w-[80px] group-hover:w-[180px] block h-[4px] transition-all ease-linear duration-300'></span>
                 </div>
  
                 <div>
                   <div className='flex gap-2  items-center mt-4'>
                     <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
                     <h6 className='text-[#212529] text-[14px] leading-[21px] font-semibold'>
                       {val.head1}
                     </h6>
                   </div>
                   <p className='text-[14px] leading-[21px] text-[#212529] mt-4'>
                     {val.dis1}
                   </p>
                 </div>
                 <div>
                   <div className='flex gap-2  items-center mt-8'>
                     <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
                     <h6 className='text-[#212529] text-[14px] leading-[21px] font-semibold'>
                       {val.head2}
                     </h6>
                   </div>
                   <p className='text-[14px] leading-[21px] text-[#212529] mt-4'>
                     {val.dis2}
                   </p>
                 </div>
                 <div>
                   {val.dis3 && (
                     <div className='flex gap-2  items-center mt-8'>
                       <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
                       <h6 className='text-[#212529] text-[14px] leading-[21px] font-semibold'>
                         {val.head3}
                       </h6>
                     </div>
                   )}
  
                   <p className='text-[14px] mb-4 leading-[21px] text-[#212529] mt-4'>
                     {val.dis3}
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
}
