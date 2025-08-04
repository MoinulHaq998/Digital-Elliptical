import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import { Marquee } from '../shared/Marquee'
import Dmc from "@/assets/banner/dmca.png";
import Image from "next/image";

function FooterBottom() {
    return (
        <footer className='pt-10 z-1 bg-white'>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Services Section */}
                    <div>
                        <h6 className='text-lg font-semibold text-[#474747] mb-4'>Services</h6>
                        <ul className='space-y-2'>
                            {[
                                { text: "Mobile App Development", href: "/mobile-app-development-services" },
                                { text: "Web Development", href: "/web-development-services" },
                                { text: "Blockchain", href: "/blockchain-development-services" },
                                { text: "Digital Marketing", href: "/digital-marketing-services" },
                                { text: "Progressive Service", href: "/progressive-service" },
                            ].map((item, index) => (
                                <li key={index} className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                    <Link href={item.href}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className='pt-4'>
                            <h6 className='text-lg font-semibold text-[#474747] mb-4'>Multi App Services</h6>
                            <ul className='space-y-2'>
                                {[
                                    { text: "Food Delivery App", href: "/food-delivery-app" },
                                    { text: "Social Media App", href: "/social-media-app" },
                                    { text: "Fitness App", href: "/fitness-app" },
                                    { text: "News Blog App", href: "/news-app" },
                                    { text: "Stock Investment App", href: "/stock-app" },
                                    { text: "Medicine Delivery App", href: "/medicine-app" },
                                    { text: "E-Commerce App", href: "/e-commerce-app" },
                                    { text: "Music Stream App", href: "/music-app" },
                                    { text: "E-Learning App", href: "/learning-app" },
                                ].map((item, index) => (
                                    <li key={index} className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                        <Link href={item.href}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Process Section */}
                    <div>
                        <h6 className='text-lg font-semibold text-[#474747] mb-4'>Process</h6>
                        <ul className='space-y-2'>
                            {[
                                { text: "Fixed Cost Project", href: "/fixed-cost-project" },
                                { text: "Talent On Demand", href: "/talent-on-demand" },
                                { text: "Product Engineering", href: "/product-engineering" },
                            ].map((item, index) => (
                                <li key={index} className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                    <Link href={item.href}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>

                        {/* Work Section */}
                        <div className='pt-4'>
                            <h6 className='text-lg font-semibold text-[#474747] mb-4'>Work</h6>
                            <ul className='space-y-2'>
                                {[
                                    { text: "Ev Spot", href: "/ev-spot" },
                                    { text: "Social Media App", href: "/social-media-app" },
                                    { text: "Home Service", href: "/home-service" },
                                    { text: "Medicine Delivery", href: "/medicine-delivery" },
                                    { text: "News Blog", href: "/news-blog" },
                                    { text: "Hair Saloon", href: "/hair-saloon" },
                                    { text: "Online Quiz", href: "/online-quiz" },
                                    { text: "Real State", href: "/real-state" },
                                    { text: "eLearning", href: "/e-learning" },
                                    { text: "Food Delivery", href: "/food-delivery" },
                                    { text: "Online Dating", href: "/online-dating" },
                                ].map((item, index) => (
                                    <li key={index} className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                        <Link href={item.href}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Company Section */}
                    <div>
                        <h6 className='text-lg font-semibold text-[#474747] mb-4'>Company</h6>
                        <ul className='space-y-2'>
                            {[
                                { text: "About", href: "/about" },
                                { text: "Blogs", href: "/blog" },
                                { text: "Careers", href: "/career" },
                                { text: "Enquire Now", href: "/enquire" },
                            ].map((item, index) => (
                                <li key={index} className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                    <Link href={item.href}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                        {/* Partnership */}
                        <div className='pt-4'>
                            <h6 className='text-lg font-semibold text-[#474747] mb-4'>Partnership</h6>
                            <ul className='space-y-2'>
                                {[
                                    { text: "White Label Partnership Program", href: "/white-label-partnership-program" },
                                    { text: "Referral Program", href: "/referral-program" },
                                    { text: "Startup Accelerator Program", href: "/startup-accelerator-program" },
                                ].map((item, index) => (
                                    <li key={index} className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                        <Link href={item.href}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Website Section */}
                        <div className='pt-4'>
                            <h6 className='text-lg font-semibold text-[#474747] mb-4'>Website</h6>
                            <ul className='space-y-2'>
                                {[
                                    { text: "Ecommerce Website", href: "/ecommerce-website" },
                                    { text: "Education Website", href: "/education-website" },
                                    { text: "Tech Website", href: "/tech-website" },
                                    { text: "Real Estate Website", href: "/real-estate-website" },
                                    { text: "See More", href: "/see-more" },
                                ].map((item, index) => (
                                    <li key={index} className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                        <Link href={item.href}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Contact Section */}
                    <div>
                        <h6 className='text-lg font-semibold text-[#474747] mb-4'>CONTACT US</h6>
                        <ul className='space-y-2'>
                            <li className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                <Link href="/contact">+1 (234) 279-7590</Link>
                            </li>
                            <li className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                <Link href="/contact">+92 330 2387597</Link>
                            </li>
                            <li className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                <Link href="/contact">info@digitalelliptical.com</Link>
                            </li>
                            <li className='transition transform hover:translate-x-2 hover:text-primary text-[13px]'>
                                <Link href="/contact">Address: Farah Heights Gulberg Block 10 FB Area. Karachi, Pakistan.</Link>
                            </li>
                        </ul>

                        <Link target="_blank" href="https://www.digitalelliptical.com/website/images/Company-Profile.pdf">
                        <button className='flex items-center mt-3 bg-[#02263129] transition-all duration-300 ease-out group hover:bg-primary text-primary hover:text-white py-1 px-6 rounded-md'>
                            <Icon
                            icon="fluent:document-pdf-20-regular" width="40" height="40"
                            className='transition-transform duration-300'
                            />
                            <span className='font-bold flex items-center'>
                            <div className='w-[2px] h-6 mx-2 bg-primary transition-all duration-300 group-hover:bg-white'></div>
                            Company Profile
                            </span>
                        </button>
                        </Link>
                        

                        <div className='mt-5'>
                            <h6 className='text-lg text-[#474747] font-bold mb-4'>Social Media</h6>

                            {/* Grid of Icons */}
                            <div className='flex items-center gap-4 mb-4'>
                                {[
                                    { title: "Facebook", icon: "fa-brands:facebook-f", href: "" },
                                    { title: "Email", icon: "fa-solid:envelope", href: "" },
                                    { title: "Twitter", icon: "fa-brands:twitter", href: "" },
                                ].map((item, index) => (
                                    <Link key={index} href={item.href} passHref>
                                        <div className='w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 transition duration-300 hover:bg-primary group'>
                                            <Icon icon={item.icon} className='text-xl text-[#474747] group-hover:text-white' />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className='flex items-center gap-4'>
                                {[
                                    { title: "LinkedIn", icon: "fa-brands:linkedin-in", href: "" },
                                    { title: "Instagram", icon: "fa-brands:instagram", href: "" },
                                    { title: "Skype", icon: "fa-brands:skype", href: "" },
                                ].map((item, index) => (
                                    <Link key={index} href={item.href} passHref>
                                        <div className='w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 transition duration-300 hover:bg-primary group'>
                                            <Icon icon={item.icon} className='text-lg text-[#474747] group-hover:text-white' />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-3 block md:flex items-center justify-between '>
                    {/* Logo Section */}
                    <div className='flex justify-center items-center '>
                        <p className='text-[13px] text-center md:text-left'>
                            ©2019-2025 Digital Elliptical, All rights reserved. 
                            <span><Link href="/privacy-policy" className='text-primary mx-1'>Privacy Policy</Link> | 
                            <Link href="/terms-condition" className='text-primary mx-1'>Terms & Condition</Link></span>
                        </p>
                    </div>
                    {/* Marquee Section */}
                    <div className='w-full md:w-[40%] md:mx-2 '>
                        <Marquee />
                    </div>
                    <div className='  w-full md:w-[10%] '>
                        <Link target="_blank" href="https://www.dmca.com/compliance/digitalelliptical.com">
                            <Image
                            src={Dmc}
                            alt="website logo"
                            height={40}
                            width={100}
                            priority={true}
                            className='w-auto'
                            />
                        </Link>
                    </div>

                    
                </div>
                {/* Text Section */}
                

            </div>
        </footer>
    )
}

export default FooterBottom
