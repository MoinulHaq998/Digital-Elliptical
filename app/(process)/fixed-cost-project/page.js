import React from "react";
import Debug from "@/assets/process/fixed-cost-project/debug.webp";
import Discuss from "@/assets/process/fixed-cost-project/discuss.webp";
import Define from "@/assets/process/fixed-cost-project/define.webp";
import Design from "@/assets/process/fixed-cost-project/design.webp";
import Develop from "@/assets/process/fixed-cost-project/develop.webp";
import Deploy from "@/assets/process/fixed-cost-project/deploy.webp";
import Image from "next/image";
export default function page() {
  const data = [
    {
      image: Discuss,
      name: "Discuss",
      head1: "Establish Contact",
      dis1: "Create a connection Our initial conversation is used to develop a shared interest.",
      head2: "Recognize the concept/idea",
      dis2: "By understanding your business, we can tackle any of the projects and do it justice.",
      head3: "On a granular level, refine the concept.",
      dis3: "The amount of detail examined in a model where the process is determined.",
      head4:
        "Finalize the user journey, business model, and concept's future phases.",
      dis4: "The project's concept is investigated and developed.",
      count1: "1",
    },
    {
      image: Define,
      name: "Define",
      head1: "Make a detailed statement of work (SOW).",
      dis1: "A thorough scope document will convey the tale of the work we want to perform and will improve our connection.",
      head2: "Acceptance of the Project",
      dis2: "Giving the project the go-ahead to go onto the development phase.",
      head3: "Allocation to a Team",
      dis3: "Organizing the required human resource efforts and work distribution.",
      head4: "Project Kick-Off",
      dis4: "The launch meeting is a crucial part of organising your web development project.",
      count2: "2",
    },
    {
      image: Design,
      name: "Design",
      head1: "Wireframing/Blueprint Sketches",
      dis1: "We develop a rough visual representation of a website's foundation.",
      head2: "Iterations",
      dis2: "At various phases, the product is tested and assessed, and necessary adjustments are made.",
      head3: "UI/UX Development",
      dis3: "Our design aids in gaining customer trust and encouraging them to Utilize your app.",
      head4: "Iterations",
      dis4: "A continuous process of developing and polishing a website.",
      count1: "3",
    },
    {
      image: Develop,
      name: "Develop",
      head1: "Milestone Based Development",
      dis1: "Development based on Milestones Every project has phases and milestones, and we make sure that we meet the objectives at each step before moving on to the next.",
      head2: "Review",
      dis2: "We work hard to evaluate our project in order to make it a huge success.",
      head3: "Beta version release",
      dis3: "To develop a better version, we collect input from the team and test it.",
      head4: "Internal QA Cycles",
      dis4: "After the first release, examine user comments and data.",
      count2: "4",
    },

    {
      image: Debug,
      name: "Debug",
      head1: "First Review",
      dis1: "Providing a website design and development quality assurance checklist.",
      head2: "Alpha Version Development",
      dis2: "Only internal users are allowed to do this task.",
      head3: "Second Review",
      dis3: "We verify that the program is error-free before moving on to the deployment phase.",
      count1: "5",
    },
    {
      image: Deploy,
      name: "Deploy",
      head1: "Packages for Annual Maintenance",
      dis1: "Our low-cost annual maintenance plan gives you a lot of flexibility.",
      head2: "Digital Marketing Packages for Basics",
      dis2: "Our Online Marketing Packages provide the best value for money when it comes to increasing traffic and attracting new customers.",
      count2: "6",
    },
  ];
  return (
    //     <div>
    //     <div className='w-[80%] mx-auto h-[40vh] flex flex-col justify-center gap-4 items-center'>
    //       <h1 className='lg:text-[40px] text-[30px] text-nowrap leading-[48px] font-semibold text-center'>
    //         Fixed Cost Process
    //       </h1>
    //       <p className='text-center lg:w-[72%] w-full leading-[22.5px]  lg:text-[15px] lg:ml-0 -mt-2 text-[13px]'>
    //         This Fixed Cost Model assists you in determining the precise ultimate
    //         cost of your project. The more you plan for your business, the better
    //         the results will be.
    //       </p>
    //     </div>

    //     <div className='w-full h-full'>
    //       {data.map((val, idx) => (
    //         <div className='w-[80%] h-full mx-auto flex lg:flex-row flex-col '>
    //           <div
    //             className={`lg:w-[100%] w-[100%] h-full  flex  justify-center items-center ${
    //               idx % 2 === 0
    //                 ? "lg:flex-row flex-col"
    //                 : "lg:flex-row-reverse flex-col"
    //             }`}
    //           >
    //             <div className='lg:w-[50%] w-[100%]  h-full lg:mb-0 '>
    //               <div className='w-[100%] overflow-hidden z-10 -lg:mt-10   h-[100%] mx-auto'>
    //                 <Image
    //                   src={val.image}
    //                   alt=''
    //                   className='object-cover lg:hover:scale-100 hover:scale-[1.4] transition-all ease-linear duration-300 cursor-pointer
    //                 lg:scale-[0.9] scale-[1.2] opacity-[.5] hover:opacity-[50] z-10 lg:p-4 p-0 overflow-hidden w-[100%] h-[100%]'
    //                 />
    //               </div>
    //             </div>

    //             <div
    //               className={`lg:w-[50%] h-full  p-8 w-[100%]
    //               ${idx % 2 === 0 ? "ml-0 border-L" : "lg:ml-0  border-R"}`}
    //             >
    //               <div className='lg:w-[100%] w-[100%]  h-[90vh] relative z-40'>
    //                 {val.count1 && (
    //                   <div className='w-[40px] lg:block hidden h-[40px] p-3 bg-[#01345b] z-45 absolute rounded-[30px] -top-14 lg:-left-14'>
    //                     <h1 className='text-[25px] leading-[18px] font-semibold text-[#ffffff]'>
    //                       {val.count1}
    //                     </h1>
    //                   </div>
    //                 )}
    //                 {val.count2 && (
    //                   <div className='w-[40px] lg:block hidden h-[40px] p-3 bg-[#01345b] z-45 absolute rounded-[30px] -top-14 lg:left-[100%]'>
    //                     <h1 className='text-[25px] leading-[18px] font-semibold text-[#ffffff]'>
    //                       {val.count2}
    //                     </h1>
    //                   </div>
    //                 )}

    //                 <div className='w-full h-full flex transition-all z-30 ease-linear duration-200 '>
    //                   <div className='w-[100%]  lg:ml-25 lg:mt-16 ml-3 mt-2'>
    //                     <div
    //                       className={`group ${val.dis3 ? "mt-8" : "lg:mt-14"}`}
    //                     >
    //                       <h1 className='text-[#212529] transition-all ease-linear  cursor-pointer duration-200 text-[40px] leading-[48px] font-semibold'>
    //                         {val.name}
    //                       </h1>
    //                       <span className='bg-[#2C5F7D] w-[80px] group-hover:w-[180px] block h-[4px] transition-all ease-linear duration-300'></span>
    //                     </div>

    //                     <div>
    //                       <div className='flex gap-2  items-center mt-4'>
    //                         <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
    //                         <h6 className='text-[#212529] text-[14px] leading-[21px] font-semibold'>
    //                           {val.head1}
    //                         </h6>
    //                       </div>
    //                       <p className='text-[14px] leading-[21px] text-[#212529] mt-4'>
    //                         {val.dis1}
    //                       </p>
    //                     </div>
    //                     <div>
    //                       <div className='flex gap-2  items-center mt-8'>
    //                         <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
    //                         <h6 className='text-[#212529] text-[14px] leading-[21px] font-semibold'>
    //                           {val.head2}
    //                         </h6>
    //                       </div>
    //                       <p className='text-[14px] leading-[21px] text-[#212529] mt-4'>
    //                         {val.dis2}
    //                       </p>
    //                     </div>
    //                     <div>
    //                       {val.dis3 && (
    //                         <div className='flex gap-2  items-center mt-8'>
    //                           <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
    //                           <h6 className='text-[#2f363c] text-[14px] leading-[21px] font-semibold'>
    //                             {val.head3}
    //                           </h6>
    //                         </div>
    //                       )}

    //                       <p className='text-[14px] mb-4 leading-[21px] text-[#212529] mt-4'>
    //                         {val.dis3}
    //                       </p>
    //                     </div>
    //                     <div>
    //                       {val.dis4 && (
    //                         <div className='flex gap-2  items-center mt-8'>
    //                           <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
    //                           <h6 className='text-[#212529] text-[14px] leading-[21px] font-semibold'>
    //                             {val.head4}
    //                           </h6>
    //                         </div>
    //                       )}
    //                       <p className='text-[14px] mb-4 leading-[21px] text-[#212529] mt-4'>
    //                         {val.dis4}
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    <div>
      <div className='w-[80%] mx-auto h-[40vh] flex flex-col justify-center gap-4 mb-6 items-center'>
        <h1 className='lg:text-[40px] text-[30px] text-nowrap leading-[48px] font-semibold text-center'>
          Fixed Cost Process
        </h1>
        <p className='text-center lg:w-[72%] w-full leading-[22.5px]  lg:text-[15px] lg:ml-0 -mt-2 text-[13px]'>
          This Fixed Cost Model assists you in determining the precise ultimate
          cost of your project. The more you plan for your business, the better
          the results will be.
        </p>
      </div>

      <div className='w-full h-full'>
        {data.map((val, idx) => (
          <div
          key={idx} // Added key prop here
          className='w-[80%] lg:h-[90vh] h-fit mx-auto flex lg:flex-row md:flex-row flex-col'
          >
      <div
        className={`lg:w-[100%] w-[100%] h-full fixed-cost flex justify-center items-center ${
          idx % 2 === 0
            ? "lg:flex-row md:flex-row flex-col"
            : "lg:flex-row-reverse md:flex-row-reverse flex-col"
        }`}
      >
        <div className='lg:w-[50%] !h-[100%] w-[100%] flex justify-center'>
          <div className='w-[100%] z-10 lg:mt-0 mt-10 p-6 h-[100%] mx-auto'>
            <Image
              src={val.image}
              alt=''
              className='object-contain z-10 transition-all ease-linear duration-400 lg:p-4 p-0 overflow-hidden w-[100%] h-[100%]'
            />
          </div>
        </div>

        <div
          className={`w-[100%] h-full lg:w-[50%] lg:mb-0 mb-4 ${
            idx % 2 === 0 ? "border-L" : "border-R"
          }`}
        >
          <div className='lg:w-[100%] w-[100%] h-full relative z-40'>
            {val.count1 && (
              <div className='lg:block hidden w-[40px] h-[40px] p-3 bg-[#01345b] z-45 absolute rounded-[30px] -top-5 -left-6'>
                <h1 className='text-[25px] leading-[18px] font-semibold text-[#ffffff]'>
                  {val.count1}
                </h1>
              </div>
            )}
            {val.count2 && (
              <div className='w-[40px] lg:block hidden h-[40px] p-3 bg-[#01345b] z-45 absolute rounded-[30px] -top-7 left-[100%]'>
                <h1 className='text-[25px] leading-[18px] font-semibold text-[#ffffff]'>
                  {val.count2}
                </h1>
              </div>
            )}

            <div className='w-full h-full flex transition-all z-30 ease-linear duration-200'>
              <div
                className={`w-[100%] ${
                  idx % 2 === 0 ? "lg:ml-10" : "lg:ml-24"
                } lg:mt-0 ml-3 mt-16`}
              >
                <div className={`groupml-0 ${val.dis3 ? "mt-8" : "lg:mt-24"}`}>
                  <h1 className='text-[#212529] transition-all ease-linear cursor-pointer duration-200 text-[40px] leading-[48px] font-semibold'>
                    {val.name}
                  </h1>
                  <span className='bg-[#2C5F7D] w-[80px] group-hover:w-[180px] block h-[4px] transition-all ease-linear duration-300'></span>
                </div>

                <div>
                  <div className='flex gap-2 items-center mt-4'>
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
                  <div className='flex gap-2 items-center mt-8'>
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
                    <div className='flex gap-2 items-center mt-8'>
                      <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
                      <h6 className='text-[#2f363c] text-[14px] leading-[21px] font-semibold'>
                        {val.head3}
                      </h6>
                    </div>
                  )}

                  <p className='text-[14px] mb-4 leading-[21px] text-[#212529] mt-4'>
                    {val.dis3}
                  </p>
                </div>
                <div>
                  {val.dis4 && (
                    <div className='flex gap-2 items-center mt-8'>
                      <span className='bg-[#2C5F7D] w-[30px] block h-[3px]'></span>
                      <h6 className='text-[#212529] text-[14px] leading-[21px] font-semibold'>
                        {val.head4}
                      </h6>
                    </div>
                  )}
                  <p className='text-[14px] mb-4 leading-[21px] text-[#212529] mt-4'>
                    {val.dis4}
                  </p>
                </div>
              </div>
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