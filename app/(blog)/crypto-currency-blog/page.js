import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
// Dummy images (Replace with actual image paths)

import authorImage from "@/assets/testimonial/prf1.webp"; // Replace with the author's image path
import Blog1 from "@/assets/blog-assets/images/blog-7.webp";
import Blog2 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog3 from "@/assets/blog-assets/images/blog-9.webp";
import Blog4 from "@/assets/blog-assets/images/A Guide on how to develop low-cost business app-01.webp";
import Blog5 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-01.webp";
import Blog6 from "@/assets/blog-assets/images/crypto-currency-blogs-DE-02.webp";
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
                Crypto Currency
              </h1>
              
              {/* Date Button */}
              <button className='bg-[#005e7c] text-[14px] md:text-[16px] px-3 py-1 rounded-md'>
                Trading
              </button>
            </div>
      </div>

      <div className='container mx-auto p-6 lg:p-12'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Main Content */}
          <div className='lg:w-2/3 text-justify'>
            <h2 className=' text-xl md:text-3xl font-semibold capitalize text-gray-800 mt-8 mb-4'>
              Exploring the rise of digital currency in a tech-driven world
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
                The first digital money, Bitcoin, was launched in 2009. Despite operational inefficiencies and security concerns, digital currencies have grown in popularity as a payment mechanism on the worldwide scale. Over time, usage and investment in digital currencies have increased significantly, pushing governments and central banks to investigate the prospect of incorporating digital currencies alongside traditional fiat currencies.
              </p>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                What is digital currency?
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
              Digital money is currency that exists purely in computer form, without a physical equivalent such as coins or banknotes. There are several sorts of digital currencies, including Virtual Currency and Central Bank Digital Currency (CBDC). Unlike traditional currencies, digital currency runs entirely within computer networks, allowing for digital trades.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                The existence of digital money is supported by extremely efficient databases and digital storage devices, which are managed by either centralized or decentralized organizations. Its functioning is comparable to that of traditional currencies like as banknotes and coins. While several central banks are investigating the possibility of developing their own CBDC, certain communities and countries remain suspicious and restrict its usage. Furthermore, authority over digital currencies varies: some are managed by centrally located organizations such as a central bank, and others are totally decentralized, with no one body in charge of distribution and regulation.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                Virtual money is a type of digital currency that is not regulated by a central bank. It is not issued or regulated by a central body. Cryptocurrency, a sort of virtual money, uses cryptographic techniques to safeguard digital asset transactions over peer-to-peer networks and decentralized systems. Cryptocurrency transactions are controlled and recorded using blockchain, a decentralized system dispersed over several computers.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                In contrast, Central Bank Digital money (CBDC) symbolizes a country official money in digital form. CBDCs, unlike decentralized cryptocurrencies, are controlled and regulated by the country monetary authority.
              </p>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Advantages of using digital currency :
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                Using digital currency offers several advantages in today financial landscape:
              </p>

              <ul className='space-y-6 text-gray-700  mt-4 list-disc pl-4'>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4 '>
                  Lower Transaction Costs:</strong> Digital currencies often have lower transaction fees compared to traditional banking systems and credit card companies, especially for international transactions.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Speed and Accessibility:</strong> Transactions with digital currencies can be completed faster than traditional bank transfers, especially across borders. They are also accessible to anyone with an internet connection, reaching unbanked populations.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Security:</strong> Digital currencies leverage cryptographic techniques, making transactions secure and reducing the risk of fraud.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Transparency:</strong> Many digital currencies operate on blockchain technology, which provides a transparent and immutable transaction ledger, reducing the possibility of manipulation and increasing trust.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Decentralization:</strong> Digital currencies can be decentralized, meaning they are not controlled by a single entity, such as a central bank, which can protect against inflation and other economic manipulations
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Innovation and Integration:</strong> Digital currencies are at the forefront of financial technology innovation, offering new ways to integrate payment systems with the internet and other technological advancements.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                    Financial Inclusion:</strong> Digital currencies can provide financial services to people who are excluded from the traditional banking system due to lack of access or high costs.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Programmability</strong> Some digital currencies are programmable, allowing for the creation of smart contracts and automated systems that can execute transactions under specific conditions
                </li>
              </ul>

              <p className='text-gray-700 leading-7 mt-4'>
                These advantages are driving the growing adoption of digital currencies and their integration into the broader financial ecosystem.
              </p>
              <p className='text-gray-700 leading-7 mt-4'>
                While digital currencies offer numerous benefits, they also come with several downsides that users and businesses should consider:
              </p>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                Downsides of using digital currency
              </h2>

              <ul className='space-y-6 text-gray-700  mt-4 list-disc  pl-4'>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Volatility: </strong> Digital currencies can be highly volatile, with the value of coins like Bitcoin experiencing rapid and unpredictable changes. This volatility can pose a risk for both investment and use as a stable medium of exchange.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Security Risks:</strong> Although digital currencies use advanced cryptographic security, they are still susceptible to hacking and theft. Digital wallets and exchanges have been targets of high-profile security breaches.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Regulatory Uncertainty: </strong> The regulatory environment for digital currencies is still evolving, with different countries having varying approaches. This can lead to uncertainty for businesses and individuals regarding compliance and legal standing.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Limited Acceptance: </strong> Digital currencies are not universally accepted as a form of payment, and users may find it challenging to use them for everyday transactions or convert them to traditional currencies.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Irreversible Transactions: </strong> Unlike credit card payments, which can be disputed and reversed, digital currency transactions are typically irreversible, increasing the risk of loss due to fraud or mistakes
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Lack of Consumer Protections: </strong>  There are fewer consumer protections for digital currency users compared to traditional banking systems. If a digital wallet is lost or a user falls victim to a scam, there may be no recourse to recover the funds.

                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Environmental Concerns: </strong> Some digital currencies, like Bitcoin, require significant computational power for mining and transaction verification processes, leading to concerns about their environmental impact due to high energy consumption.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Technical Barriers: </strong> The use of digital currencies requires a certain level of technical knowledge, which can be a barrier to entry for some individuals and businesses.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                  Market Saturation: </strong> With the proliferation of numerous digital currencies, the market can become saturated, making it difficult for users to choose which currency to adopt and for businesses to decide which ones to accept.
                </li>
                <li>
                  <strong className='text-lg font-bold capitalize mb-2 text-gray-800 mt-4'>
                    Potential for Illegal Activities: </strong> The anonymity and borderless nature of digital currencies can make them attractive for illegal activities, such as money laundering and purchasing illicit goods, which can lead to increased scrutiny from law enforcement agencies.
                </li>
              </ul>

              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                There Are Some Points of Crypto Currency ( PROS & CONS )
              </h2>

              <Image
              src={Blog6} 
              alt='Blog Featured'
              className='object-cover w-full mt-2'
            />
              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
                How do international bodies see digital currency? 
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
                International organizations have varying viewpoints on digital money, with governments throughout the world reacting differently to the usage of cryptocurrencies. For example, nations such as Singapore and Switzerland have emerged as major cryptocurrency centers, encouraging the growth and development of cryptocurrency enterprises within their borders. On the other side, certain countries, including as India, China, and South Korea, have decided to prohibit cryptocurrencies or cryptocurrency-related activity. In contrast, numerous European governments and the United States are taking a more nuanced approach, attempting to find a balance between fostering financial innovation and mitigating possible dangers through cryptocurrency regulation.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
              According to the Bank of International Settlements, digital currency is an asset represented in digital form that has monetary properties. This means it may be changed into a sovereign currency and is issued by an institution in charge of exchanging digital money for cash.
              </p>

              <p className='text-gray-700 leading-7 mt-4'>
                According to the European Central Bank, digital currency is an uncontrolled kind of digital money that is often issued and managed by its developers. It is used and approved by a certain virtual community.
              </p>
              <p className='text-gray-700 leading-7 mt-4'>
                The US Department of Treasury defines virtual money as a means of trade that has no legal tender status in any country. While it functions similarly to cash in certain nations, it does not have all of the characteristics of a true currency.
              </p>


              <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mt-8'>
              Final Take: At least 80% of central banks are currently researching this technology.  
              </h2>
              <p className='text-gray-700 leading-7 mt-4'>
              Users of cryptocurrencies believe that digital currencies will be the future of money. While digital currencies have grown in popularity over the years, there are still certain concerns about using cryptocurrencies as money, as previously indicated. Recently, some nations, like China, have prohibited the usage of cryptocurrencies, resulting in massive price fluctuation. China has already started testing its state-regulated digital currency (CBDCs), and the national banks of various nations are looking at incorporating blockchain technology into their financial systems, which might affect the way people see digital money in the future.
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