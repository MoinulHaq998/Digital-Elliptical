import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

// Dummy images (Replace with actual image paths)
import authorImage from "@/assets/testimonial/prf2.webp"; // Replace with the author's image path
import Blog1 from "@/assets/blog-assets/images/blog-7.webp";
import Blog2 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog3 from "@/assets/blog-assets/images/blog-9.webp";
import Blog4 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";
import Blog5 from "@/assets/blog-assets/images/poor data and cause blog DE-01.webp";
import Blog6 from "@/assets/blog-assets/images/poor data and cause blog DE-02.webp";
import Blog7 from "@/assets/blog-assets/images/poor data and cause blog DE-03.webp";
import Blog8 from "@/assets/blog-assets/images/poor data and cause blog DE-04.webp";


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
        Poor Data Quality
        </h1>
        

        {/* Date Button */}
        <button className='bg-[#005e7c] text-[12px] md:text-[14px] px-4 py-2 rounded-md'>
          Data Science
        </button>
      </div>
      </div>

       <div className='container mx-auto p-6 lg:p-12'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Main Content */}
            <div className='lg:w-2/3 text-justify'>
              <h2 className=' text-xl md:text-3xl font-semibold capitalize text-gray-800 mt-8 mb-4'>
                Why poor data quality can become a cost hazard
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
                  As data becomes the new engine for global business, data quality becomes increasingly important. There is no doubt that raw data is valuable; but, a system is required to refine and sustain its quality.
                </p>
                <p className='text-gray-700 leading-7 mt-4'>
                  Poor data quality can have a substantial impact on enterprises, organizations, and individuals alike. Inaccurate, incomplete, or inconsistent data can result in poor decision-making, operational inefficiencies, and damaged consumer experiences. The cost of poor data quality extends beyond financial losses, including reputational harm, missed opportunities, and regulatory violations.
                </p>
                <p className='text-gray-700 leading-7 mt-4'>
                  There are numerous approaches to determine the value. Forbes reports that organizations with poor data quality can lose up to $3.1 trillion in the US alone, or 20% of their value. But the million-dollar question is, why does poor data quality cost so much money?
                </p>
  
                <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                  Poor data quality wastes everyone’s time
                </h2>
                <p className='text-gray-700 leading-6 mt-4'>
                  Unmanaged data wastes a lot of time in every department, including data scientists, engineers, and salesmen. According to Gartner, poor data quality reduces labor productivity by up to 20%.
                </p>
                <Image
                src={Blog6}
                alt='Blog Featured'
                className='object-cover w-full mt-3'
              />
  
                <p className='text-gray-700 leading-7 mt-4'>
                  The diagram above displays the average difference between each role after implementing a sophisticated data quality automation solution. So, one of the most typical issues that businesses have is that after their data sets are created, they are recopied and distributed to other interconnected teams. As a result, one of the most significant challenges for any data-driven company is getting the appropriate data to the right people at the right time.
                </p>
  
                <p className='text-gray-700 leading-7 mt-4'>
                  Organizations can use data quality automation to work on data that is ready to use when it arrives. Decision-makers can make everyday decisions without waiting for their facts to become validated and actionable.
                </p>
  
  
                <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                  Poor data quality leads to poor analytics
                </h2>
                
                <p className='text-gray-700 leading-7 mt-4'>
                  Poor data quality is a primary obstacle to effective and accurate analytics. The phrase garbage in, garbage out is often used to describe the direct impact of poor data quality on analytical outcomes. Here is how poor data quality leads to poor analytics:
                </p>

                <ul className='list-disc space-y-4 text-gray-700 ml-4 mt-4'>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Inaccurate Insights: </strong>  If the data used for analytics is inaccurate, incomplete, or outdated, the insights generated from the analysis will be equally flawed. Incorrect data can lead to erroneous conclusions and misinformed decisions. 
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Bias and Misrepresentation: </strong> Poor data quality can introduce biases into the analysis, skewing the results and leading to misrepresentations of the actual situation. Biased data can perpetuate unfair or discriminatory outcomes, affecting various aspects of an organizations operations. 
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Unreliable Predictions: </strong> Predictive analytics heavily relies on historical data to forecast future trends and outcomes. If historical data is of poor quality, the predictive models will be less reliable and may fail to accurately forecast future events. 
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Inconsistent Reports: </strong> When data quality is inconsistent, it becomes challenging to create standardized and reliable reports. Decision-makers might receive conflicting reports from different sources, making it difficult to draw meaningful conclusions. 
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Increased Uncertainty: </strong> Poor data quality introduces uncertainty and doubt into the decision-making process. Stakeholders may lose confidence in the analytics and become hesitant to base critical decisions on the insights derived from the data. 
                </li>

                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Wasted Resources: </strong> Data analytics requires time, effort, and resources. If the data used for analysis is of poor quality, all the resources invested in the analytics process may go to waste, yielding minimal value or potentially misleading results
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Poor Data Visualization: </strong> Data visualization is a powerful tool for presenting complex information in a digestible manner. However, poor data quality can lead to misleading visualizations that convey inaccurate information, hindering effective communication.  
                </li>
                </ul>

                <Image
                src={Blog7}
                alt='Blog Featured'
                className='object-cover w-full mt-3'
              />

                <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                  Poor data quality ruins customer experience
                </h2>
                
                <p className='text-gray-700 leading-7 mt-4'>
                  Poor data quality can certainly degrade the consumer experience. Customer experience is an important aspect in the success of any business, and data can help you analyze, personalize, and improve that experience. When data quality is compromised, it can have various negative consequences for the consumer experience.
                </p>

                <ul className='space-y-4 text-gray-700  mt-4'>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Inaccurate Personalization: </strong>  Data quality concerns can result in erroneous client profiles and preferences. As a result, businesses may struggle to create individualized experiences, resulting in irrelevant recommendations and offers that do not appeal to clients. 
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Misguided Customer Communication: </strong> Poor data quality might lead to erroneous contact information or communication choices. This can result in customers receiving irrelevant or untimely messages, generating aggravation and possibly driving them away.
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Inaccurate Personalization: </strong> In customer service interactions, accurate and up-to-date data is essential for efficient issue resolution and personalized support. When agents have incomplete or incorrect customer information, it can lead to longer resolution times and unsatisfactory customer service experiences. 
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Lost Trust and Credibility: </strong> When customers encounter errors in their interactions with a company, it erodes their trust and confidence in the brand. Repeated instances of poor data quality can lead customers to question the organizations reliability and credibility. 
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Missed Opportunities to Delight Customers: </strong> Accurate data enables businesses to identify opportunities to surprise and delight customers. However, poor data quality may prevent businesses from recognizing such moments and providing exceptional experiences. 
                </li>

                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Impact on Customer Loyalty and Retention: </strong> A negative customer experience resulting from poor data quality can lead to customer churn. Dissatisfied customers are more likely to seek alternatives and switch to competitors who can better meet their needs. 
                </li>
                <li>
                  <strong className='text-lg   capitalize mb-2 text-gray-800 mt-8'>
                  Reputation Damage: </strong> Poor data quality issues can become public, especially in cases of data breaches or improper data handling. Such incidents can severely damage a companies reputation and brand image, deterring potential.
                </li>
                </ul>

                <Image
                src={Blog8}
                alt='Blog Featured'
                className='object-cover w-full mt-3'
              />
  
                
                
                <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Don’t lose valuable resources, time, and money 
                </h2>
                <p className='text-gray-700 leading-7 mt-4'>
                Finally, poor data quality results in lost money, missed opportunities, and inaccurate situational analysis. To avoid all of this, companies must emphasize data quality management and engage in data quality initiatives as soon as possible.
                </p>
  
                <p className='text-gray-700 leading-7 mt-4'>
                Investing in strategies to streamline data collecting and processing can yield significant returns. When your data is fully automated and appropriately processed, companies can find the right path and acquire momentum through increased revenue sources.
                </p>
  
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mt-8">
                Start with DIGITAL ELLIPTICAL - Keep your data clean :
                </h2>
                <p className="text-gray-700 leading-7 mt-4">
                Organizations want high-quality data to function optimally; this will assist them in staying informed, increasing efficiency, and maximizing overall revenue.
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
