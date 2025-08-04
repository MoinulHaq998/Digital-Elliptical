"uee client";

import { Icon } from "@iconify/react";
import React, { useState } from "react";
import websiteLogo from "@/assets/logo/dggg.png";

import Image from "next/image";
import Link from "next/link";
import Enquire from "@/components/partials/Home/enquire";

import {
  mobileDevelopment,
  digitalMarketing,
  webDevelopment,
  progressiveService,
  blockChain,
  process,
  workDrop,
  multiApp,
} from "../../contant/data";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // State for the active dropdown

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close dropdown if it's already open
    } else {
      setActiveDropdown(index); // Open the clicked dropdown
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
   
      <header className='sticky top-0 bg-white  shadow-md z-50 '>
        {/* Desktop Menu  */}
        <div className='hidden lg:block'>
          <div className='header z-50 flex px-10  items-center relative py-4'>
            <div className='w-[22%]'>
              <div className='logo cursor-pointer'>
                <Link href='/'>
                  <Image
                    src={websiteLogo}
                    alt='website logo'
                    height='auto'
                    priority={true}
                    className='w-[200px]'
                  />
                </Link>
              </div>
            </div>
            <div>
              <div className='nav-menu main-menu'>
                <ul className='flex justify-between lg:gap-3 xl:gap-6 relative '>
                  <li
                    className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(0)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Service
                    <Icon
                      icon={
                        activeDropdown === 0
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 0 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 0 && (
                      <div className='absolute  z-50 top-full py-1   -left-24 min-w-[950px]   '>
                        <div className='shadow-xl mega-menu py-6 px-10 border rounded-lg !bg-white'>
                          <div className='grid grid-cols-12'>
                            <div className='col-span-4'>
                              {/* Mobile Development -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setActiveDropdown(null)}
                                  href='/mobile-app-development-services'
                                >
                                  <h6 className='mb-4 gap-1 flex text-[15px] font-bold hover:text-[#005E7C] items-center '>
                                    <Icon
                                      icon='entypo:mobile'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Mobile Development
                                  </h6>
                                </Link>
                                <ul>
                                  {mobileDevelopment.map((item, index) => (
                                    // Ensure item.link is not undefined
                                    <Link
                                      onClick={() => setActiveDropdown(null)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      {" "}
                                      {/* Fallback to '#' if no link */}
                                      <li className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'>
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                              {/* Digital Marketing -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setActiveDropdown(null)}
                                  href='/digital-marketing-services'
                                >
                                  <h6 className='mb-4 gap-1 text-[15px] font-bold hover:text-[#005E7C] flex items-center '>
                                    <Icon
                                      icon='cib:digital-ocean'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Digital Marketing
                                  </h6>
                                </Link>
                                <ul>
                                  {digitalMarketing.map((item, index) => (
                                    <Link
                                      onClick={() => setActiveDropdown(null)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      <li
                                        key={index}
                                        className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'
                                      >
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div className='col-span-4'>
                              {/* Web Development -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setActiveDropdown(null)}
                                  href='/web-development-services'
                                >
                                  <h6 className='mb-4 flex text-[15px] gap-1 font-bold hover:text-[#005E7C] items-center '>
                                    <Icon
                                      icon='mdi:file-code-outline'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Web Development
                                  </h6>
                                </Link>
                                <ul>
                                  {webDevelopment.map((item, index) => (
                                    <Link
                                      onClick={() => setActiveDropdown(null)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      <li
                                        key={index}
                                        className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'
                                      >
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                              {/* Progressive Service -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setActiveDropdown(null)}
                                  href='/progressive-service'
                                >
                                  <h6 className='mb-4 flex gap-1 text-[15px] font-bold hover:text-[#005E7C] items-center '>
                                    <Icon
                                      icon='mdi:tag'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Progressive Service
                                  </h6>
                                </Link>
                                <ul>
                                  {progressiveService.map((item, index) => (
                                    <Link
                                      onClick={() => setActiveDropdown(null)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      <li
                                        key={index}
                                        className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'
                                      >
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className='col-span-4'>
                              {/* BlockChain -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setActiveDropdown(null)}
                                  href='/blockchain-development-services'
                                >
                                  <h6 className='mb-4 flex gap-1 text-[15px] font-bold hover:text-[#005E7C] items-center '>
                                    <Icon
                                      icon='akar-icons:link-chain'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Block Chain
                                  </h6>
                                </Link>
                                <ul>
                                  {blockChain.map((item, index) => (
                                    <Link
                                      onClick={() => setActiveDropdown(null)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      <li
                                        key={index}
                                        className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'
                                      >
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* Second Dropdown */}
                  <li
                    className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(1)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Process
                    <Icon
                      icon={
                        activeDropdown === 1
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 1 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 1 && (
                      <div className='absolute top-full -left-2 pt-1 mega-menu '>
                        <div className='min-w-[240px] bg-white  px-4 py-5 border rounded-lg shadow-xl'>
                          <ul>
                            {process.map((item, index) => (
                              <Link
                                onClick={() => setActiveDropdown(null)}
                                key={index}
                                href={item?.link || "#"}
                              >
                                <li
                                  key={index}
                                  className='flex items-center gap-3 hover:pl-3 duration-300 mb-5'
                                >
                                  <Icon
                                    icon={item.icon}
                                    width='23'
                                    height='23'
                                    className='text-[#01345B]'
                                  />

                                  <span className='text-[15px] mb-0'>
                                    {item.name}
                                  </span>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className='flex items-center cursor-pointer relative'>
                    <Link href='about'>About Us</Link>
                  </li>
                  <li className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(3)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  > 
                  <Link href='case-study'>Work</Link>
                    
                    {/* <Icon
                      icon={
                        activeDropdown === 3
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 3 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 3 && (
                      <div className='absolute top-full -left-2 pt-1 mega-menu'>
                        <div className='min-w-[240px] bg-white border  px-4 py-5 rounded-lg shadow-xl'>
                          <ul>
                            {workDrop.map((item, index) => (
                              <Link
                                onClick={() => setActiveDropdown(null)}
                                key={index}
                                href={item?.link || "#"}
                              >
                                <li
                                  key={index}
                                  className='flex items-center gap-3 hover:pl-3 duration-300 mb-5'
                                >
                                  <Icon
                                    icon={item.icon}
                                    width='20'
                                    height='20'
                                    className='text-[#005E7C]'
                                  />
                                  <span className='text-base mb-0'>
                                    {item.name}
                                  </span>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )} */}
                  </li>
                  <li
                    className='flex items-center cursor-pointer  relative'
                    onMouseEnter={() => setActiveDropdown(4)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Multi Apps
                    <Icon
                      icon={
                        activeDropdown === 4
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 4 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 4 && (
                      <div className='absolute top-full -left-[500px] pt-1 mega-menu'>
                        <div className='min-w-[1100px] h-[85vh] bg-white border grid grid-cols-12  rounded-lg shadow-xl px-8 py-10'>
                          {multiApp.map((item, index) => (
                            <div key={index} className='col-span-3 mb-4 '>
                              <Link
                                onClick={() => setActiveDropdown(null)}
                                key={index}
                                href={item?.link || "#"}
                              >
                                <div className='flex items-center gap-1'>
                                  <Icon
                                    icon={item.icon}
                                    width='18'
                                    height='18'
                                    className='text-[#01345B]'
                                  />
                                  <p className='font-semibold capitalize text-[15px]'>
                                    {item.name}
                                  </p>
                                </div>
                                <div className='flex items-center gap-1 hover:pl-3  duration-300 hover:text-[#005E7C]'>
                                  <Icon
                                    icon='pepicons-pencil:line-x'
                                    width='10'
                                    height='15'
                                    className='!text-black'
                                  />
                                  <p className='font-extralight text-gray-700 text-[14px] capitalize '>
                                    {item.text}
                                  </p>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                  <li className='flex items-center cursor-pointer'>
                    <Link href='new'>Apps</Link>
                  </li>
                  <li
                    className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(5)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Company
                    <Icon
                      icon={
                        activeDropdown === 3
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 5 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 5 && (
                      <div className='absolute top-full -left-[480px] pt-1 mega-menu'>
                        <div className='w-[600px] whitespace-nowrap bg-white border flex  gap-8 px-8 py-8 rounded-lg shadow-xl'>
                          <div className='w-1/2'>
                            <h5 className=' gap-1 flex items-center text-md font-bold'>
                              <Icon
                                icon='material-symbols:ink-pen-rounded'
                                width='22'
                                height='22'
                                className='text-[#01345B]'
                              />
                              Life @ Digital Elliptical
                            </h5>

                            <ul className='mt-4'>
                              <li className='flex items-center gap-1.5 hover:pl-3 duration-300 text-sm'>
                                <Icon
                                  icon='icon-park-solid:handbag'
                                  width='18'
                                  height='18'
                                  className='text-[#01345B]'
                                />
                                <Link href={"/career"}>Career</Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className=' gap-1 flex items-center text-md font-bold'>
                              <Icon
                                icon='ri:shake-hands-fill'
                                width='23'
                                height='23'
                                className='text-[#01345B]'
                              />
                              PartnerShip
                            </h5>

                            <ul className='mt-4'>
                              <li className='flex items-center gap-1.5 hover:pl-3 duration-300 text-sm mb-2.5'>
                                <Icon
                                  icon='fa-solid:laptop-code'
                                  width='18'
                                  height='18'
                                  className='text-[#01345B]'
                                />
                                <Link
                                  onClick={() => setActiveDropdown(null)}
                                  href={"/white-label-partnership-program"}
                                >
                                  White Label Partnership
                                </Link>
                              </li>
                              <li className='flex items-center gap-1.5 hover:pl-3 duration-300 text-sm mb-2.5'>
                                <Icon
                                  icon='fa-solid:retweet'
                                  width='20'
                                  height='20'
                                  className='text-[#01345B]'
                                />
                                <Link
                                  onClick={() => setActiveDropdown(null)}
                                  href={"/referral-program"}
                                >
                                  Raferral Program
                                </Link>
                              </li>
                              <li className='flex items-center gap-1.5 hover:pl-3 duration-300 text-sm mb-2.5'>
                                <Icon
                                  icon='fa6-solid:rocket'
                                  width='18'
                                  height='18'
                                  className='text-[#01345B]'
                                />
                                <Link
                                  onClick={() => setActiveDropdown(null)}
                                  href={"/startup-accelerator-program"}
                                >
                                  Startup Accelarator Program
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className='flex items-center cursor-pointer'>
                    <Link href='blog'>Blogs</Link>
                  </li>
                 
                </ul>
              </div>
            </div>
            
            <div className='absolute right-6'>
              <button onClick={toggleModal} className='py-2 px-3 text-white text-sm bg-[#005e7c] hover:tracking-wider duration-300 rounded-md'>
                Get Free Quote
              </button>
            </div>
            
          </div>
        </div>
        
        {/* Mobile Menu -------------------------------------------- */}
        <div className='lg:hidden block'>
          <div className='flex items-center justify-between px-3 py-4 z-50'>
            {/* Website Logo */}
            <Link href='/'>
            <Image
              src={websiteLogo}
              alt='Website Logo'
              width={2000}
              height={2000}
              className='!h-auto !w-[150px]'
            />
            </Link>

            {/* Hamburger Button */}
            <div className='lg:hidden'>
              <button onClick={toggleMenu} className='focus:outline-none text-[#005e7c]'>
                {/* Hamburger Icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Dropdown Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:hidden mt-4 absolute top-11 left-0 w-full bg-white z-50`}
          >

            <div>
              <div className='nav-menu main-menu'>
                <ul className='block gap-2 relative text-sm py-1 px-6'>
                  <li className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(0)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Service
                    <Icon
                      icon={
                        activeDropdown === 0
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 0 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 0 && (
                      <div className='absolute  z-50 top-full py-1 w-[100%]   '>
                        <div className='shadow-xl mega-menu py-6 px-10 border rounded-lg h-[70vh] overflow-y-auto !bg-white'>
                              {/* Mobile Development -------------------------------------------*/}
                            <div className='md:flex justify-between gap-4'>
                              <div>
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href='/mobile-app-development-services'
                                >
                                  <h6 className='mb-4 gap-1 flex font-bold hover:text-[#005E7C] items-center '>
                                    <Icon
                                      icon='entypo:mobile'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Mobile Development
                                  </h6>
                                </Link>
                                <ul>
                                  {mobileDevelopment.map((item, index) => (
                                    // Ensure item.link is not undefined
                                    <Link
                                      onClick={() => setIsMenuOpen(false)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      {" "}
                                      {/* Fallback to '#' if no link */}
                                      <li className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'>
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                              {/* Digital Marketing -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href='/digital-marketing-services'
                                >
                                  <h6 className='mb-4 gap-1 font-bold hover:text-[#005E7C] flex items-center '>
                                    <Icon
                                      icon='cib:digital-ocean'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Digital Marketing
                                  </h6>
                                </Link>
                                <ul>
                                  {digitalMarketing.map((item, index) => (
                                    <Link
                                      onClick={() => setIsMenuOpen(false)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      <li
                                        key={index}
                                        className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'
                                      >
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                             
                              </div>
                              <div>
                                 {/* Web Development -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href='/web-development-services'
                                >
                                  <h6 className='mb-4 flex gap-1 font-bold hover:text-[#005E7C] items-center '>
                                    <Icon
                                      icon='mdi:file-code-outline'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Web Development
                                  </h6>
                                </Link>
                                <ul>
                                  {webDevelopment.map((item, index) => (
                                    <Link
                                      onClick={() => setIsMenuOpen(false)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      <li
                                        key={index}
                                        className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'
                                      >
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                              {/* Progressive Service -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href='/progressive-service'
                                >
                                  <h6 className='mb-4 flex gap-1 font-bold hover:text-[#005E7C] items-center '>
                                    <Icon
                                      icon='mdi:tag'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Progressive Service
                                  </h6>
                                </Link>
                                <ul>
                                  {progressiveService.map((item, index) => (
                                    <Link
                                      onClick={() => setIsMenuOpen(false)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      <li
                                        key={index}
                                        className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'
                                      >
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                              </div>
                              <div>
                              {/* BlockChain -------------------------------------------*/}
                              <div className='mb-8'>
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href='/blockchain-development-services'
                                >
                                  <h6 className='mb-4 flex gap-1 font-bold hover:text-[#005E7C] items-center '>
                                    <Icon
                                      icon='akar-icons:link-chain'
                                      width='20'
                                      height='20'
                                      className='text-[#01345B]'
                                    />
                                    Block Chain
                                  </h6>
                                </Link>
                                <ul>
                                  {blockChain.map((item, index) => (
                                    <Link
                                      onClick={() => setIsMenuOpen(false)}
                                      key={index}
                                      href={item?.link || "#"}
                                    >
                                      <li
                                        key={index}
                                        className='flex items-center gap-1 hover:pl-3 duration-300 mb-3'
                                      >
                                        <Icon
                                          icon={item.icon}
                                          width='20'
                                          height='20'
                                          className='text-[#01345B]'
                                        />
                                        <span className='text-xs mb-0'>
                                          {item.name}
                                        </span>
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    )}
                  </li>
                  <li className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(1)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Process
                    <Icon
                      icon={
                        activeDropdown === 1
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 1 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 1 && (
                      <div className='absolute top-full -left-2 pt-1 mega-menu '>
                        <div className='min-w-[240px] bg-white  px-4 py-5 border rounded-lg shadow-xl'>
                          <ul>
                            {process.map((item, index) => (
                              <Link
                                onClick={() => setIsMenuOpen(false)}
                                key={index}
                                href={item?.link || "#"}
                              >
                                <li
                                  key={index}
                                  className='flex items-center gap-3 hover:pl-3 duration-300 mb-5'
                                >
                                  <Icon
                                    icon={item.icon}
                                    width='20'
                                    height='20'
                                    className='text-[#005E7C]'
                                  />

                                  <span className='text-sm mb-0'>
                                    {item.name}
                                  </span>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className='flex items-center cursor-pointer '>
                    <Link href='about' onClick={() => setIsMenuOpen(false)}>About Us</Link>
                  </li>
                  <li className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(3)}
                  > 
                  <Link href='case-study' onClick={() => setIsMenuOpen(false)}>Work</Link>
                    
                    {/* <Icon
                      icon={
                        activeDropdown === 3
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 3 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 3 && (
                      <div className='absolute top-full -left-2 pt-1 mega-menu'>
                        <div className='min-w-[240px] bg-white border  px-4 py-5 rounded-lg shadow-xl'>
                          <ul>
                            {workDrop.map((item, index) => (
                              <Link
                                onClick={() => setActiveDropdown(null)}
                                key={index}
                                href={item?.link || "#"}
                              >
                                <li
                                  key={index}
                                  className='flex items-center gap-3 hover:pl-3 duration-300 mb-5'
                                >
                                  <Icon
                                    icon={item.icon}
                                    width='20'
                                    height='20'
                                    className='text-[#005E7C]'
                                  />
                                  <span className='text-base mb-0'>
                                    {item.name}
                                  </span>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )} */}
                  </li>
                  <li className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(4)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Multi Apps
                    <Icon
                      icon={
                        activeDropdown === 4
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 4 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 4 && (
                      <div className='absolute z-50 top-full  pt-1 '>
                        <div className='w-[100%] bg-white border grid grid-cols-12  gap-2 rounded-lg shadow-xl px-8 py-10 h-[60vh] overflow-y-auto '>
                          {multiApp.map((item, index) => (
                            <div key={index} className='col-span-12 sm:col-span-6 md:col-span-4 mb-6 '>
                              <Link
                                onClick={() => setIsMenuOpen(false)}
                                key={index}
                                href={item?.link || "#"}
                              >
                                <div className='flex items-center gap-1'>
                                  <Icon
                                    icon={item.icon}
                                    width='16'
                                    height='16'
                                    className='text-[#01345B]'
                                  />
                                  <p className='font-bold capitalize text-[13px]'>
                                    {item.name}
                                  </p>
                                </div>
                                <div className='flex items-center gap-1 hover:pl-3 duration-300 hover:text-[#005E7C]'>
                                  <Icon
                                    icon='pepicons-pencil:line-x'
                                    width='10'
                                    height='15'
                                    className='!text-black'
                                  />
                                  <p className='font-extralight text-gray-700 text-xs capitalize '>
                                    {item.text}
                                  </p>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                  <li className='flex items-center cursor-pointer '>
                    <Link href='new' onClick={() => setIsMenuOpen(false)}>Apps</Link>
                  </li>
                  <li className='flex items-center cursor-pointer relative'
                    onMouseEnter={() => setActiveDropdown(5)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Company
                    <Icon
                      icon={
                        activeDropdown === 3
                          ? "ci:caret-up-sm"
                          : "ci:caret-down-sm"
                      }
                      width='24'
                      height='24'
                      className={`transition-transform duration-500 ${
                        activeDropdown === 5 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {activeDropdown === 5 && (
                      <div className='absolute top-full  pt-1 '>
                        <div className='w-[100%] whitespace-nowrap bg-white border block md:flex  gap-4 px-8 py-6 md:py-8 rounded-lg shadow-xl'>
                          <div className='w-1/2'>
                            <h5 className=' gap-1 flex items-center text-sm font-bold'>
                              <Icon
                                icon='material-symbols:ink-pen-rounded'
                                width='20'
                                height='20'
                                className='text-[#01345B]'
                              />
                              Life @ Digital Elliptical
                            </h5>

                            <ul className='mt-2 md:mt-4'>
                              <li className='flex items-center gap-1.5 hover:pl-3 duration-300 text-sm'>
                                <Icon
                                  icon='icon-park-solid:handbag'
                                  width='18'
                                  height='18'
                                  className='text-[#01345B]'
                                />
                                <Link href={"/career"} onClick={() => setIsMenuOpen(false)}>Career</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='mt-4 md:mt-0'>
                            <h5 className=' gap-1 flex items-center text-sm font-bold'>
                              <Icon
                                icon='ri:shake-hands-fill'
                                width='20'
                                height='20'
                                className='text-[#01345B]'
                              />
                              PartnerShip
                            </h5>

                            <ul className='mt-2 md:mt-4'>
                              <li className='flex items-center gap-1.5 hover:pl-3 duration-300 text-sm mb-1 md:mb-2.5'>
                                <Icon
                                  icon='fa-solid:laptop-code'
                                  width='18'
                                  height='18'
                                  className='text-[#01345B]'
                                />
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href={"/white-label-partnership-program"}
                                >
                                  White Label Partnership
                                </Link>
                              </li>
                              <li className='flex items-center gap-1.5 hover:pl-3 duration-300 text-sm mb-1 md:mb-2.5'>
                                <Icon
                                  icon='fa-solid:retweet'
                                  width='18'
                                  height='18'
                                  className='text-[#01345B]'
                                />
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href={"/referral-program"}
                                >
                                  Raferral Program
                                </Link>
                              </li>
                              <li className='flex items-center gap-1.5 hover:pl-3 duration-300 text-sm mb-1 md:mb-2.5'>
                                <Icon
                                  icon='fa6-solid:rocket'
                                  width='18'
                                  height='18'
                                  className='text-[#01345B]'
                                />
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href={"/startup-accelerator-program"}
                                >
                                  Startup Accelarator Program
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className='flex items-center cursor-pointer'>
                    <Link href='blog' onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                  </li>                 
                </ul>
              </div>
            </div>
            <div  className='p-3 ml-3'>
              <button onClick={toggleModal} className='py-2 px-3 text-white text-sm bg-[#005e7c] hover:tracking-wider duration-300 rounded-sm'>
                Get Free Quote
              </button>
            </div>

            {/* <nav className='space-y-2'>
              
              <div className='relative'>
                <button
                  onClick={() => toggleDropdown(0)} // Toggle dropdown for Services
                  className='block w-full p-2 rounded hover:bg-gray-200 text-left'
                >
                  Services
                </button>
               
                <div
                  className={`${
                    activeDropdown === 0 ? "block" : "hidden"
                  } absolute left-0 w-full bg-white shadow-md`}
                >
                  <Link href='/mobile-app-development-services'
                    className='block p-2 rounded hover:bg-gray-200'
                    >Mobile App Development</Link>

                  <Link href='/web-development-services'
                    className='block p-2 rounded hover:bg-gray-200'
                    >Web Development</Link>
                 
                  <Link href='/blockchain-development-services'
                    className='block p-2 rounded hover:bg-gray-200'
                    >Blockchain</Link>

                  <Link href='/digital-marketing-services'
                    className='block p-2 rounded hover:bg-gray-200'
                    >Digital Marketing</Link>
                  
                  <Link href='/progressive-service'
                    className='block p-2 rounded hover:bg-gray-200'
                    >Progressive Service</Link>
                  
                </div>
              </div>

              
              <a href='#about' className='block p-2 rounded hover:bg-gray-200'>
                Process
              </a>
              
              
              <a
                href='/about'
                className='block p-2 rounded hover:bg-gray-200'
              >
                About
              </a>

             
              <Link
                href='/case-study'
                className='block p-2 rounded hover:bg-gray-200'
              >
                Work
              </Link>

              
              <Link
                href='/new'
                className='block p-2 rounded hover:bg-gray-200'
              >
                Apps
              </Link>

              
              <a
                href='#contact'
                className='block p-2 rounded hover:bg-gray-200'
              >
                Company
              </a>

             
              <a
                href='/blog'
                className='block p-2 rounded hover:bg-gray-200'
              >
                Blogs
              </a>

              
              <a
                href='#contact'
                className='block p-2 rounded hover:bg-gray-200'
              >
              <button onClick={toggleModal} className='py-2 px-3 text-white text-sm bg-[#005e7c] hover:tracking-wider duration-300 rounded-md'>
                Get Free Quote
              </button>
              
              </a>

            </nav> */}
          </div>
        </div>
      </header>
  


      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  h-[100%]'>
          <div className='bg-white rounded-lg w-full h-[100%]  relative overflow-y-auto' >
            {/* Close Button */}
            <div className='w-full border-b py-2  px-4 flex justify-end items-center'>
            <button
              onClick={toggleModal}
              className='text-gray-500 hover:text-gray-800 text-lg md:text-2xl'> ✖
            </button>
            </div>
            {/* Modal Content */}
            <Enquire />

          </div>
        </div>
      )}



       {/* <div className="">
                <div className="flex items-center justify-between">
                    <h1 className="text-white text-xl font-bold">My Website</h1>

                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
                    <nav className="space-y-2">
                        <a href="#home" className="block text-white hover:bg-blue-700 p-2 rounded">Home</a>
                        <a href="#about" className="block text-white hover:bg-blue-700 p-2 rounded">About</a>
                        <a href="#services" className="block text-white hover:bg-blue-700 p-2 rounded">Services</a>
                        <a href="#contact" className="block text-white hover:bg-blue-700 p-2 rounded">Contact</a>
                    </nav>
                </div>
            </div>  */}
    </>
  );
}

export default Header;