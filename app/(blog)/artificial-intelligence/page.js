import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
// Dummy images (Replace with actual image paths)

import authorImage from "@/assets/testimonial/prf.jpg"; // Replace with the author's image path
import Blog1 from "@/assets/blog-assets/images/blog-7.webp";
import Blog2 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog3 from "@/assets/blog-assets/images/blog-9.webp";
import Blog4 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";
import Blog5 from "@/assets/blog-assets/images/blog-7.webp";
import Blog6 from "@/assets/blog-assets/images/blog-6.webp";
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
                Artificial Intelligence
              </h1>
      
              {/* Date Button */}
              <button className='bg-[#005e7c] text-[14px] md:text-[16px] px-3 py-1 rounded-md'>
                Technology
              </button>
            </div>
      </div>

      <div className='container mx-auto p-6 lg:p-12'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Main Content */}
          <div className='lg:w-2/3 text-justify'>
          <h2 className=' text-xl md:text-3xl font-semibold capitalize text-gray-800 mt-8 mb-4'>
                5 ways how gen ai is set to revolutionize the financial industry
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
              The financial industry is on the cusp of a transformation, with generative AI leading the charge. Here are five ways this innovative technology is poised to make waves:
              </p>

              <ul className='list-inside space-y-6 text-gray-700  mt-4'>
                <li>
                  <strong className='text-lg md:text-xl font-bold capitalize mb-2 text-gray-800 mt-8'>
                    1. Enhanced Personalization in Customer Service:</strong><br></br> Generative AI can create highly personalized experiences for customers by analyzing their past interactions and preferences. This means more tailored financial advice, product recommendations, and customer support that feels uniquely individual.
                </li>
                <li>
                  <strong className='text-lg md:text-xl font-bold capitalize mb-2 text-gray-800 mt-8'>
                    2. Smarter Fraud Detection and Prevention:</strong><br></br> By learning from transaction data, generative AI can identify patterns indicative of fraudulent activity. It can then generate models to predict and prevent future attempts, safeguarding both the financial institutions and their clients.
                </li>
                <li>
                  <strong className='text-lg md:text-xl font-bold capitalize mb-2 text-gray-800 mt-8'>
                    3. Efficient Algorithmic Trading:</strong><br></br> Generative AI can analyze vast datasets to predict market trends and generate trading algorithms. This leads to more efficient and profitable trading strategies that can outperform human traders.
                </li>
                <li>
                  <strong className='text-lg md:text-xl font-bold capitalize mb-2 text-gray-800 mt-8'>
                    4. Automated Financial Management and Advisory:</strong><br></br> AI can now generate personalized investment portfolios and financial plans for individuals, taking into account their goals, risk tolerance, and financial situations. This automation makes financial advisory accessible to a broader audience.
                </li>
                <li>
                  <strong className='text-lg md:text-xl font-bold capitalize mb-2 text-gray-800 mt-8'>
                    5. Improved Risk Assessment and Management:</strong><br></br> 
                    Generative AI can simulate various economic scenarios and generate risk models that help financial institutions better understand potential risks and devise strategies to mitigate them.
                </li>
              </ul>

              <p className='text-gray-700 leading-7 mt-4'>
                As generative AI continues to evolve, its impact on the financial industry is expected to grow, 
                leading to more innovative solutions and reshaping the way we think about finance.  
              </p>

              <Image
              src={Blog6}
              alt='Blog Featured'
              className='object-cover w-full mt-2'
            />

              <p className='text-gray-700 leading-7 mt-4'>
                Generative AI has rapidly acquired appeal, establishing itself as a revolutionary force 
                around the world. Banking is at the vanguard of the industry significant transition, 
                embracing the promise of Gen AI to rethink established models and modernize banking 
                operations. According to Goldman Sachs, generative AI has the potential to deliver a $7 
                trillion boost in global GDP and a 150% rise in productivity growth over the next decade. 
                As a result, Generative AI is most likely still the trendiest topic in the corporate world, 
                and it is likely to continue that way.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                So, what exactly does Gen AI mean for banks?  Banks and financial organizations that use 
                Gen AI early on can better predict consumer expectations, create hyper-personalized user 
                journeys, detect fraud in real time, optimize internal operations, and automate customer 
                care. This wealth of benefits is driving banks and financial institutions to jumpstart 
                their digital transformation journeys and adopt Gen AI into their daily operations.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                Let look at how Gen AI is predicted to transform established banking models.
              </p>


              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Creates meaningful, hyper-personalized user journeys to meet customer needs:
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                For starters, Gen AI collects and analyzes data unlike any other. It enables banks to 
                use data to make insight-driven decisions and recognize changing client patterns and 
                expectations. This enables banks to examine how they might improve their services across 
                several touchpoints to better fulfill the needs of their consumers. This new wave of AI 
                also enables banks to create hyper-personalized user journeys via suggestive marketing 
                and product suggestions based on consumer behavior patterns.
              </p>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Transforms and automates banking operations for greater productivity:
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
              Generative AI will also make a substantial contribution to how banks run their middle- 
              and back-office processes. Automating repetitive operations such as data entry and 
              transaction processing can effectively reduce costs, increase productivity, and allow 
              banks to focus more on innovation. Tools like ChatGPT and other LLM set the tone here, 
              demonstrating how Gen AI natural language capabilities for extracting insights from 
              unstructured data can improve bank client engagement through conversational chatbots 
              and virtual assistants.
              </p>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Innovation leads to structural changes in job roles and the emergence of new occupations:
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                It is interesting to note that many Gen AI tools may have an impact on the nature of some 
                existing vocations and occupations by partially automating tasks associated with such roles. 
                AI and innovation will also lead to the creation of new jobs and have far-reaching repercussions 
                for the expansion of human capital in banks. It will necessitate upskilling and reskilling 
                a significant portion of the current workforce, as well as the establishment of new positions 
                and departments.
                <br></br>Gen AI has also helped banks mitigate the danger of fraudulent activity with early 
                threat identification capabilities. Traditional models frequently struggle to keep up with 
                fraud activities that are getting increasingly complicated and sophisticated. Gen AI, on the 
                other hand, uses synthetic data to constantly improve its detection algorithms, allowing 
                banks to identify and avoid suspicious conduct more efficiently.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                Despite its enormous promise to transform the finance and banking industries, generative AI 
                faces its own set of obstacles and constraints. There may be ongoing worries regarding 
                responsible AI use and establishing data privacy boundaries. There is a risk of unintended 
                disclosure or misuse of sensitive information, such as personal identification numbers, 
                account balances, and transaction history. Financial institutions must implement appropriate 
                protections to secure client data and preserve trust in their AI systems. Furthermore, the 
                numerical precision of generative AI in banking is something to be wary of. Generative AI 
                models should strive for the maximum accuracy feasible, as wrong but confident answers to 
                concerns about taxes or financial health could result in serious
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                When used correctly, Gen AI is developing as an unstoppable force, with its importance expanding 
                dramatically across industries such as healthcare, insurance, banking, and many more. Banking 
                leaders must consider Gen AI position alongside blockchain, Big Data, Web3, open banking, and 
                other disruptive technologies when developing their strategy and objectives. Bank long-term 
                roadmaps must reflect how these technologies, when applied in the correct combinations, may 
                effectively transform fundamental business activities while also contributing to the global 
                banking industry growth.
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