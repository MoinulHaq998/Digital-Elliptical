"use client"
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Project1 from '@/assets/new/project1.png'
import Project2 from '@/assets/new/project2.png'
import Project3 from '@/assets/new/project3.png'
import Project4 from '@/assets/new/project4.png'
import Project5 from '@/assets/new/project5.png'
import murammat1 from '@/assets/new/project6.png'
import flexWheeler from '@/assets/success-stories/flex-wheeler/1-04.webp'
import avGlobal from "@/assets/success-stories/av-global/1-04.webp";


const page = () => {
  const tabs = [
    {
      id: 1,
      label: "Trending Product",
      content: [
        { title: "CHEF DASH", description: "Your Personal Culinary Companion", image: murammat1, bg: "#f7cd63", link: "/chef-dash", },
        { title: "DINE DIRECT", description: "Revolutionizing the Food Ordering Experience", image: flexWheeler, bg: "#8edc55", link: "/dine-direct", },
        { title: "Fitness App", description: "Your Personalized Fitness Companion", image: avGlobal, bg: "#f7cd63", link: "/fitness",},
        { title: "GROCERY GATE", description: " Your One-Stop Solution for All Grocery Needs", image: Project1, bg: "#8edc55", link: "/grocery-gate", },
        { title: "JET STREAM", description: "One-stop solution for Discovering, Booking, and Managing Services ", image: Project2, bg: "#f7cd63", link: "/jet-stream",  },
        { title: "Kitchen Connect", description: "Designed to Revolutionize Restaurant and Kitchen Management", image: Project3, bg: "#8edc55", link: "/kitchen-connect", },
        { title: "LAW APP", description: " Platform to access Legal Assistance, Manage Cases", image: Project4, bg: "#f7cd63", link: "/law", },
        { title: "Local Vibes", description: "Your Ultimate Office Management Solution", image: Project5, bg: "#8edc55", link: "/local-vibes",  },
        { title: "SKY RESERVE", description: "Your Trusted Travel Companion", image: Project1, bg: "#f7cd63", link: "/sky-reserve", },
        { title: "Style Mart", description: "Your All-in-One E-Commerce Platform", image: Project3, bg: "#8edc55", link: "/style-mart", },
      ],
    },
    {
      id: 2,
      label: "Crypto & NFT",
      content: [
        { title: "CHEF DASH", description: "Your Personal Culinary Companion", image: murammat1, bg: "#f7cd63", link: "/chef-dash", },
        { title: "DINE DIRECT", description: "Revolutionizing the Food Ordering Experience", image: flexWheeler, bg: "#8edc55", link: "/dine-direct", },
        { title: "Fitness App", description: "Your Personalized Fitness Companion", image: avGlobal, bg: "#f7cd63", link: "/fitness",},
        { title: "GROCERY GATE", description: " Your One-Stop Solution for All Grocery Needs", image: Project3, bg: "#8edc55", link: "/grocery-gate", },
        { title: "JET STREAM", description: "One-stop solution for Discovering, Booking, and Managing Services ", image: Project2, bg: "#f7cd63", link: "/jet-stream",  },
        { title: "Kitchen Connect", description: "Designed to Revolutionize Restaurant and Kitchen Management", image: Project3, bg: "#8edc55", link: "/kitchen-connect", },
      ],
    },
    {
      id: 3,
      label: "Food & Restaurant",
      content: [
        { title: "LAW APP", description: " Platform to access Legal Assistance, Manage Cases", image: Project3, bg: "#f7cd63", link: "/law", },
        { title: "Local Vibes", description: "Your Ultimate Office Management Solution", image: Project2, bg: "#8edc55", link: "/local-vibes",  },
        { title: "SKY RESERVE", description: "Your Trusted Travel Companion", image: Project3, bg: "#f7cd63", link: "/sky-reserve", },
      ],
    },
    {
      id: 4,
      label: "Grocery Laundry",
      content: [
        { title: "Local Vibes", description: "Your Ultimate Office Management Solution", image: Project2, bg: "#8edc55", link: "/local-vibes",  },
        { title: "SKY RESERVE", description: "Your Trusted Travel Companion", image: Project3, bg: "#f7cd63", link: "/sky-reserve", },
        { title: "Style Mart", description: "Your All-in-One E-Commerce Platform", image: Project3, bg: "#8edc55", link: "/style-mart", },
      ],
    },
    {
      id: 5,
      label: "Doctor Pharmacy",
      content: [
        { title: "JET STREAM", description: "One-stop solution for Discovering, Booking, and Managing Services ", image: Project2, bg: "#f7cd63", link: "/jet-stream",  },
        { title: "Kitchen Connect", description: "Designed to Revolutionize Restaurant and Kitchen Management", image: Project3, bg: "#8edc55", link: "/kitchen-connect", },
        { title: "LAW APP", description: " Platform to access Legal Assistance, Manage Cases", image: Project3, bg: "#f7cd63", link: "/law", },
        
      ],
    },
    {
      id: 6,
      label: "Online Classes",
      content: [
        { title: "CHEF DASH", description: "Your Personal Culinary Companion", image: murammat1, bg: "#f7cd63", link: "/chef-dash", },
        { title: "DINE DIRECT", description: "Revolutionizing the Food Ordering Experience", image: flexWheeler, bg: "#8edc55", link: "/dine-direct", },
        { title: "Fitness App", description: "Your Personalized Fitness Companion", image: avGlobal, bg: "#f7cd63", link: "/fitness",},
        
      ],
    },
    {
      id: 7,
      label: "OTT Music",
      content: [
        { title: "Kitchen Connect", description: "Designed to Revolutionize Restaurant and Kitchen Management", image: Project3, bg: "#8edc55", link: "/kitchen-connect", },
        { title: "LAW APP", description: " Platform to access Legal Assistance, Manage Cases", image: Project3, bg: "#f7cd63", link: "/law", },
        { title: "Local Vibes", description: "Your Ultimate Office Management Solution", image: Project2, bg: "#8edc55", link: "/local-vibes",  },
        
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  // Refs for Swiper instance and buttons
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <section className="my-10">
      <div className="container">
        <div className="relative">
          {/* Swiper Tabs */}
          <div className="px-4">
          <div className="border rounded-full mb-10 shadow-md px-2">
          <Swiper
          spaceBetween={6}
          slidesPerView={5}
          breakpoints={{
            1240: {
              slidesPerView: 6,
              spaceBetween: 3,
            },  
            1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
          }}
          navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
          }}
          onInit={(swiper) => {
          swiperRef.current = swiper; // Assign Swiper instance to ref
          }}
          >
          {tabs.map((tab) => (
            <SwiperSlide key={tab.id}>
              <button
                className={`relative capsule-hover transition-all duration-500 ease-in-out text-md font-semibold p-2 m-2 rounded-full overflow-hidden
                ${activeTab === tab.id ? "active text-white shadow-md" : "text-gray-600 bg-white hover:shadow-md"}`}
                onClick={() => setActiveTab(tab.id)}
                >
                <span className="relative z-10">{tab.label}</span>
                <div
                  className={`absolute bottom-0 left-0 right-0 top-0 rounded-full bg-[#005e7c] transition-transform duration-400 ease-[cubic-bezier(0.4, 0, 0.2, 1)]`}
                ></div>
              </button>

            </SwiperSlide>
          ))}
          </Swiper>
          </div>
          </div>
         
          {/* Dynamic Content */}
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tabs
              .find((tab) => tab.id === activeTab)
              .content.map((card, index) => (
                <Link href={card.link || "#"} key={index}>
                <div
                  key={index}
                  className={`p-5 h-52 rounded-2xl flex justify-between overflow-hidden group relative`}
                  style={{ backgroundColor: card.bg }}
                >
                  <div className="pe-4 max-w-[55%]">
                    <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                    <p className="font-[500]">{card.description}</p>
                  </div>
                  <div className="w-[155px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={2000}
                      height={2000}
                      className="w-[155px] object-cover rounded-lg mb-4 absolute bottom-[-20px] group-hover:scale-110 transition duration-500 ease-in-out"
                    />
                  </div>
                </div>
                </Link>
              ))}
          </div>
          <div className="flex justify-between mt-4">
          {/* Swiper Navigation left  */}
          <div
            ref={prevButtonRef}
            className="swiper-button-prev absolute top-[10px] left-[-18px] cursor-pointer text-[#e7e7e7]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon icon="uim:angle-left" width={40} height={40} />
          </div>
          <div
            ref={nextButtonRef}
            className="swiper-button-next absolute top-[10px] right-[-18px] cursor-pointer text-[#e7e7e7]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon icon="uim:angle-right" width={40} height={40} />
          </div>
        </div>
        </div>

        {/* Swiper Navigation Icon */}
       
      </div>
    </section>
  );
};

export default page;
