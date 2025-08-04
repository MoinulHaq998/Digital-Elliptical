"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useParams and useRouter
import mobile1 from "@/assets/success-stories/donation/DONATION-01.png";
import mobile2 from "@/assets/success-stories/investment/1-01.png";
import mobile3 from "@/assets/success-stories/ecommerce-store/1-01.png";
import flexWheeler from "@/assets/success-stories/flex-wheeler/1-02.webp";
import avGlobal from "@/assets/success-stories/av-global/1-02.webp";
import aidora from "@/assets/success-stories/services/services-01.png";
import garment from "@/assets/success-stories/garment/1-01.webp";
import left from "@/assets/success-stories/mask-left.svg";
import right from "@/assets/success-stories/mask-right.svg";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { name: "All", _id: 1 },
  { name: "Dashboard", _id: 2 },
  { name: "Apps", _id: 3 },
  { name: "Websites", _id: 4 },
];

const tabsData = [
  {
    img: garment,
    head: "GARMENTS STORE",
    tabs: "Websites",
    btn: "Website Application Development",
    dis: "The Garments Store is an online platform offering a wide range of men's and women's apparel, accessories, and customized collections. With an emphasis on quality, affordability, and trendiness, the store aims to provide customers with an easy and enjoyable shopping experience. The platform includes features like a sleek dashboard for the admin, a user-friendly website, and mobile apps designed for seamless shopping.",   
    slug: "garment-store",
    bgColor: "#3e464d",
  },
  {
    img: mobile2,
    head: "Investment Store",
    tabs: "Apps",
    btn: "Mobile Application Development",
    dis: "The Investment Store is a robust platform designed to simplify and streamline investment opportunities for users. This platform offers a range of financial products and investment solutions while delivering an intuitive user experience. The project focuses on providing a secure, scalable, and user-friendly system, integrating innovative features tailored to meet the needs of modern investors.",
    slug: "investment-store",
    bgColor: "#284481",
  },
  {
    img: mobile3,
    head: "E-Commerce Store",
    tabs: "Apps",
    btn: "Mobile Application Development",
    dis: "The E-Commerce Store is an online platform offering a diverse selection of products from various categories. With a user-friendly interface and seamless navigation, the platform allows customers to explore products, make secure purchases, and track their orders. The website and mobile apps are designed to ensure an optimal shopping experience, with a comprehensive admin dashboard to manage all operations.",
    slug: "e-commerce-store",
    bgColor: "#a39492",
  },
  {
    img: flexWheeler,
    head: "Ride Projects:",
    tabs: "Websites",
    btn: "Website Application Development",
    dis: "Our Ride Projects aim to create a seamless and efficient ride-hailing platform, designed to connect riders with drivers in real time. The goal was to build a highly functional and user-friendly application, which integrates a rider app, driver app, and an admin dashboard to facilitate smooth operations for both customers and operators.",
    slug: "ride-projects",
    bgColor: "#00b2ac",
  },
  {
    img: mobile1,
    head: "Donation Project",
    tabs: "Apps",
    btn: "Mobile Application Development",
    dis: "The Donation Project aimed to create a digital platform where donors and recipients could connect seamlessly. The goal was to build an intuitive application and website that facilitated donations, tracked campaigns, and managed both donor and recipient accounts effectively. Our comprehensive approach included designing a user-friendly interface, robust admin dashboard, and scalable backend systems.",
    slug: "donation-project",
    bgColor: "#091f1b",
  },
  {
    img: avGlobal,
    head: "Auction Project:",
    tabs: "Websites",
    btn: "Website Application Development",
    dis: "Our Auction Project was designed to transform how users interact with auctions by creating a seamless platform for online bidding and selling. With advanced features tailored for administrators, users, and riders, the solution aimed to bring simplicity and efficiency to the auctioning experience.",
    slug: "auction-project",
    bgColor: "#f09019",
  },
  {
    img: aidora,
    head: "Services Project",
    tabs: "Dashboard",
    btn: "Dashboard Design",
    dis: "The Services Project aimed to revolutionize the way users access and manage on-demand services. Our objective was to create a multi-faceted platform catering to customers, vendors, and managers while providing administrators with powerful tools for oversight. The project included mobile applications for end-users, vendors, and managers, as well as a robust admin dashboard for platform management.",
    slug: "services-project",
    bgColor: "#001837",
  },

];

const CaseStudyPage = () => {
  const { slug } = useParams(); // Extract slug from the URL
  const router = useRouter(); // Initialize useRouter
  const [activeTab, setActiveTab] = useState("All");
  const [filteredData, setFilteredData] = useState(tabsData); // State for filtered data

  // Find the item by slug
  const findBySlug = (slug) => {
    return tabsData.find((item) => item.slug === slug);
  };

  // Update filtered data based on slug or active tab
  useEffect(() => {
    if (slug) {
      const item = findBySlug(slug);
      if (item) {
        setFilteredData([item]); // Show only the item with the matching slug
      } else {
        router.push("/404"); // Redirect to 404 if slug is invalid
      }
    } else {
      // If no slug, filter data based on active tab
      setFilteredData(
        activeTab === "All"
          ? tabsData
          : tabsData.filter((data) => data.tabs === activeTab)
      );
    }
  }, [slug, activeTab, router]);

  return (
    <div className="w-full h-fit ">
      <div className="w-full h-fit mb-14 pb-2 bg-[#152331]">
        <div className="py-20">
          {/* Main Heading */}
          <h1 className="text-white font-extrabold text-center tracking-wide">
            <span className="block text-[20px] md:text-[30px] lg:text-[35px] leading-tight lg:leading-[1.2]">
              App and Software Design
            </span>
            <span className="block text-[20px] md:text-[25px] lg:text-[30px] mt-2 leading-tight lg:leading-[1.5] text-gray-100 font-light">
              Success Stories
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-200 text-center text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed lg:leading-8 mt-6 w-[90%] lg:w-[70%] mx-auto">
            Here’s a small sample of our team’s work on mobile apps, custom web
            apps, and business software. See how we’ve helped folks manage
            enterprise software initiatives, grow revenue, and create memorable
            user experiences.
          </p>
        </div>
      </div>
      

      <div className="container">
        {/* Laptop Tabs */}

        <div className='hidden lg:block'>
          <div className="w-full flex justify-center items-center flex-wrap my-3">
            <div className="relative flex justify-center items-center bg-[#005e7c] pb-1 md:pb-2 rounded-lg md:rounded-xl">
              {tabs.map((tab, index) => (
                <button
                  key={tab._id}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center transition-all duration-100 ease-in-out text-[18px] lg:text-[20px] md:font-semibold
                    ${
                      activeTab === tab.name
                        ? "bg-[#152331] text-white rounded-lg md:rounded-xl"
                        : "text-white"
                    }`}
                >
                  {index !== 0 && (
                    <Image
                      src={left}
                      alt="left"
                      className="w-[50px] lg:w-[100%] object-contain "
                    />
                  )}
                  <div className="px-6 lg:px-9 xl:px-12  pt-1 ">
                    {tab.name}
                  </div>
                  {index !== tabs.length - 1 && (
                    <Image
                      src={right}
                      alt="right"
                      className="w-[50px] lg:w-[100%] object-contain "
                    />
                  )} 
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile Tabs */}
        <div className='lg:hidden block'>
          <div className="w-full flex justify-center items-center flex-wrap my-3">
            <div className="relative flex justify-center items-center bg-[#005e7c] pb-1 md:pb-2 rounded-lg md:rounded-xl">
              {tabs.map((tab, index) => (
                <button
                  key={tab._id}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center  text-[12px] xm:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] md:font-semibold
                    ${
                      activeTab === tab.name
                        ? "bg-[#152331] text-white rounded-lg md:rounded-xl"
                        : "text-white"
                    }`}
                >
                  
                  {activeTab === tab.name && index !== 0 && (
                    <Image
                      src={left}
                      alt="left"
                      className="w-[18px] sm:w-[40px] lg:w-[100%] object-contain "
                    />
                  )}
                  <div className="px-3  sm:px-8  lg:px-12  py-1 sm:py-2 lg:py-2 ">
                    {tab.name}
                  </div>
                  {activeTab === tab.name && index !== tabs.length - 1 && (
                    <Image
                      src={right}
                      alt="right"
                      className="w-[18px] sm:w-[40px] lg:w-[100%] object-contain"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Data */}
        <div className="w-full h-fit mb-10 py-4 px-2">
          {filteredData.length > 0 ? (
            filteredData.map((item, idx) => (
              <div  className={`w-[98%] h-fit mx-auto mb-6  rounded-2xl`}
                key={idx}
                style={{ backgroundColor: item?.bgColor }}
              >
                <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col flex-wrap lg:p-0 md:p-4 p-2">
                  <div className="lg:w-[50%] md:w-[100%] w-[100%] h-fit lg:p-12 p-4 lg:text-start text-center">
                    <div className="mb-6">
                      <button className="hidden">{item.tabs}</button>
                      <button className=" px-6 py-2 bg-black bg-opacity-[0.1] text-white font-semibold rounded-full">
                        {item.btn}
                      </button>
                    </div>
                    
                    <h1 className="lg:text-[48px] md:text-[42px] text-[36px] mb-6 lg:leading-[57.6px] md:leading-[45.6px] leading-[37.6px] tracking-[-1.5px] text-white">
                      {item.head}
                    </h1>
                    <p className="lg:text-[14px] md:text-[12px] text-[15px] lg:leading-[27px] md:leading-[24px] leading-[20px] lg:mt-0 md:mt-0 -mt-4 mb-6 text-white">
                      {item.dis}
                    </p>
                    <Link href={`/case-study/${item.slug}`}>
                    <button
                      key={idx}
                      className={`bg-white px-12 py-2 mt-2 mb-4 rounded-lg`}
                      style={{ color: item?.bgColor }}
                    >
                      Case Study
                    </button>
                    
                    </Link>
                    
                  </div>
                  <div className="lg:w-[50%] md:w-[100%] w-[100%]  h-fit mt-6 ">
                    <Image
                      src={item.img}
                      alt=""
                      className="w-full  object-contain overflow-hidden pr-2"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;




// <div className="w-full flex justify-center items-center flex-wrap my-3">
// <div className="relative  flex justify-center items-center bg-gradient-to-t from-[#4637bb] to-[#152331] border-b-4 border-[#4637bb] rounded-2xl ">
//   {tabs.map((tab, index) => (
//     <button
//       key={tab._id}
//       onClick={() => setActiveTab(tab.name)}
//       className={`relative px-4  md:px-10 lg:px-16  py-2  md:py-3 text-[14px]  md:text-[20px]  md:font-semibold transition-all duration-500 ease-in-out 
//         ${
//           activeTab === tab.name
//             ? "bg-[#152331] text-white rounded-b-2xl duration-500"
//             : "bg-gradient-to-t from-[#4637bb] to-[#162b41] text-white rounded-t-xl"
//         } 
//         first:rounded-l-2xl last:rounded-r-2xl`}
//     >
//       {tab.name} 
//     </button>
//   ))}
// </div>
// </div>

  // {
  //   img: garment,
  //   head: "National Trench Safety",
  //   tabs: "Web App Development",
  //   dis: "When offering trench and traffic safety equipment rentals to customers, NTS structures rental agreements and payment terms that are often tough to keep track of. The NTS WorkZone web-app provides a one-stop customer view with data pulled from the Infor ERP. Designli provided a Dedicated Product Team to rebuild and modernize the previous, outdated portal",   
  //   slug: "garment-store",
  //   bgColor: "#59e6e9",
  // },
  // {
  //   img: mobile3,
  //   head: "Cabin Time",
  //   tabs: "Mobile App Development",
  //   dis: "NovusWay Ministries operates youth summer camps that provide transformative religious experiences. With Cabin Time, campers can take those teachings home with them, building their faith in the comfort of their own home for the rest of the year.",
  //   slug: "#",
  //   bgColor: "#413246",
  // },
  // {
  //   img: mobile2,
  //   head: "Eume",
  //   tabs: "Mobile App Development",
  //   dis: "When facing life’s challenges, sometimes all you need is someone to talk to who has been through a similar experience. The Eume app is exactly this, creating a world where everyone has a Friend.",
  //   slug: "#",
  //   bgColor: "#1d4b4a",
  // },
  // {
  //   img: flexWheeler,
  //   head: "Behind the Knife",
  //   tabs: "Web App Development",
  //   dis: "Behind the Knife isn't just the #1 surgery podcast in the United States. It's an entire online learning platform – complete with custom mobile app – with premium content for surgeons of all skill levels.",
  //   slug: "#",
  //   bgColor: "#00b2ac",
  // },
  // {
  //   img: avGlobal,
  //   head: "1MAC Anesthesia",
  //   tabs: "Web App Development",
  //   dis: "1MAC revolutionized how facilities hire anesthesia providers. With the 1MAC web, iPhone, and Android platform, facilities can fill open positions with qualified practitioners in record speed, and anesthesia providers can harness the platform’s ability to negotiate contracts and view market pay trends",
  //   slug: "#",
  //   bgColor: "#05070d",
  // },
  // {
  //   img: mobile1,
  //   head: "Paidback",
  //   tabs: "Mobile App Development",
  //   dis: "Get revenge on your debt. Paidback motivates users to payoff debt faster with sophisticated debt payoff calculators and exclusive partnerships. The app also keeps users motivated through connections to friends and other people who are paying back debt. Brought from Vision to Version 1 (and beyond) with the Designli team.",
  //   slug: "#",
  //   bgColor: "#CE282E",
  // },
  // {
  //   img: aidora,
  //   head: "Virtuosity",
  //   tabs: "Dashboard Design",
  //   dis: "Virtuosity is a virtual leadership development coach at your fingertips. Both B2B and B2C, this app is sold primarily to higher learning institutions and government entities throughout Canada",
  //   slug: "#",
  //   bgColor: "#eebd08",
  // },
  // {
  //   img: design2,
  //   head: "MEO Continuity",
  //   tabs: "Dashboard Design",
  //   dis: "For large enterprises, disruptions to the supply chain are inevitable… and hugely disruptive. Business Continuity Planning (BCP) is a cornerstone for how intelligent organizations prepare for, respond to, and recover from unexpected events. MEO Continuity is the premier software + service combination that addresess this need..",
  //   slug: "#",
  //   bgColor: "#6d0bd6",
  // },
  // {
  //   img: design3,
  //   head: "AskIris",
  //   tabs: "Dashboard Design",
  //   dis: "What if every hospital supply closet was organized as systematically as an IKEA? Thanks to this healthcare mobile application, medical professionals can find what they need when they need it.",
  //   slug: "#",
  //   bgColor: "#f09019",
  // },
  

// <button
//   key={tab._id}
//   onClick={() => setActiveTab(tab.name)}
//   className={`px-16 py-3 rounded-md text-[16px] font-medium transition-all shadow-xl duration-300 ease-in-out 
//     ${
//       activeTab === tab.name
//         ? "bg-white text-[#005e7c]"
//         : "bg-[#005e7c] text-white"
//     } 
//     hover:bg-white hover:text-[#005e7c]`}
// >
//   {tab.name}
// </button>