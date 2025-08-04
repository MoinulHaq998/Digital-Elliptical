import React from "react";
import Ideation from "@/assets/process/talent_on_demand_svg/ideation.svg";
import Identification from "@/assets/process/talent_on_demand_svg/identification.svg";
import Initialization from "@/assets/process/talent_on_demand_svg/Initialization.svg";
import Interation from "@/assets/process/talent_on_demand_svg/interation.svg";
import Inspection from "@/assets/process/talent_on_demand_svg/inspection.svg";
import Introduction from "@/assets/process/talent_on_demand_svg/introduction.svg";

import Image from "next/image";
export default function page() {
  const data = [
    {
      Img: Ideation,
      name: "Ideation",
      contentHed1: "Establish Contact",
      contentDis1:
        "Our initial conversation is used to develop a shared interes",
      contentHed2: "Establish Contact",
      contentDis2:
        "We can take on any job and do it right if we understand your business.",
    },
    {
      Img: Identification,
      name: "Identification",
      contentHed1: "Identify Resources",
      contentDis1:
        "O We possess strong commitment with the ability to contribute expertise.",
      contentHed2: "assemble the team and toolchains",
      contentDis2:
        "To kick-start the project, we identify technocrats and their duties",
    },
    {
      Img: Initialization,
      name: "Initialization",
      contentHed1: "Deploy the Team",
      contentDis1:
        "Our crew is capable of overcoming unanticipated obstacles..",
      contentHed2: "Kick-start the Project:",
      contentDis2:
        "The launch phase establishes the foundation for your product's success",
    },
    {
      Img: Interation,
      name: "Iterations",
      contentHed1: "Make the Team's Necessary Skill Changes",
      contentDis1:
        " Our objective is to provide you with the tools you need to stand out from the crowd and succeed.",
      contentHed2: "Learn, Grow, and Lead a Team",
      contentDis2:
        "As a result, you'll have a better relationship and a higher chance of succeeding undraw_site_content_ihgn",
    },
    {
      Img: Inspection,
      name: "Inspection",
      contentHed1: "Project Management:",
      contentDis1: "Managing the entire project to ensure its completion.",
      contentHed2: "Quality Assurance",
      contentDis2:
        "Providing a website design and development quality assurance checklist.",
    },
    {
      Img: Introduction,
      name: "Introduction",
      contentHed1: "Launch:",
      contentDis1:
        "The project's alpha version will be released during the Go Live phase.",
      contentHed2: "Annual Maintenance Packages",
      contentDis2:
        "Our low-cost annual maintenance plan gives you a lot of flexibility.",
      contentHed3: "Basic Digital Marketing Packages",
      contentDis3:
        "Our Online Marketing Packages provide the best value for money when it comes to increasing traffic and attracting new customers.",
    },
  ];
  return (
    <>
      <div className='w-[100%] h-full'>
        <div className='w-[80%] mx-auto h-[40vh] flex flex-col justify-center gap-4 items-center'>
          <h1 className='lg:text-[40px] text-[30px] text-nowrap leading-[48px] font-semibold text-center'>
            Talent On Demand
          </h1>
          <p className='text-center lg:w-[72%] w-full leading-[22.5px]  lg:text-[15px] lg:ml-0 -mt-2 text-[13px]'>
            Our Talent on Demand approach enables you to bring in top developers
            to your in-house team, guaranteeing that the product matches your
            specifications.
          </p>
        </div>

        <>
          {data.map((val, idx) => (
           <div key={idx} className='w-full h-fit flex  lg:mt-0 -mt-12 justify-center items-center'>
           <div
             className={`lg:w-[90%] w-[100%] h-fit flex fixed-cost justify-center items-center ${
               idx % 2 === 0
                 ? "lg:flex-row flex-col"
                 : "lg:flex-row-reverse flex-col"
             }`}
           >
             <div className='lg:w-[50%] w-[100%] h-full'>
               <div className='w-[100%] h-[100%] mx-auto p-8'>
                 <Image
                   src={val.Img}
                   alt=''
                   className='object-contain transition-all ease-linear duration-300   p-4 w-[100%] h-[100%]'
                 />
               </div>
             </div>
             <div
               className={`lg:w-[50%]  w-[100%]
             ${idx % 2 === 0 ? "ml-0" : "lg:ml-20 "}`}
             >
               <div className='flex flex-col justify-center items-center '>
                 <h1 className='text-[#212529] text-[40px] leading-[28px] font-semibold'>
                   {val.name}
                 </h1>
                 <div className='bg-[#EFEFEF] w-[80%] h-fit p-6 rounded-lg border-l-[3px] border-gray-600 flex mt-8'>
                   <div className='w-full'>
                     <span className='text-[16px] leading-[-22px] text-[#212529] font-semibold'>
                       {val.contentHed1} :{" "}
                     </span>
                     <span className='text-[14px] flex-wrap text-[#212529]'>
                       {val.contentDis1}
                     </span>
                   </div>
                 </div>
                 <div className='bg-[#EFEFEF] w-[80%] h-fit p-6 rounded-lg border-l-[3px] border-gray-600 flex mt-4'>
                   <div className='w-full'>
                     <span className='text-[16px] leading-[-22px] text-[#212529] font-semibold'>
                       {val.contentHed2} :{" "}
                     </span>
                     <span className='text-[14px] text-[#212529]'>
                       {val.contentDis2}
                     </span>
                   </div>
                 </div>

                 {val.contentHed3 && (
                   <div className='bg-[#EFEFEF] w-[80%] h-fit p-6 rounded-lg border-l-[3px] border-gray-600 flex mt-4'>
                     <div className='w-full'>
                       <span className='text-[16px]  leading-[-22px] text-[#212529] font-semibold'>
                         {val.contentHed3} :{" "}
                       </span>
                       <span className='text-[14px] flex-wrap text-[#212529]'>
                         {val.contentDis3}
                       </span>
                     </div>
                   </div>
                 )}
               </div>
             </div>
           </div>
         </div>
          ))}
        </>
      </div>
    </>
  );
}
