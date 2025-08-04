import { Icon } from '@iconify/react';
import React from 'react';
import Image from 'next/image';
import Health from '@/assets/industries/health.svg'
import RealState from '@/assets/industries/real-estate.svg'
import Cart from '@/assets/industries/cart.svg'
import Automaintenance from '@/assets/industries/automotive.svg'
import Education from '@/assets/industries/education.svg'
import Entertainment from '@/assets/industries/entertainment.svg'
function Industries() {
  const cards = [
    {
      icon: Health,
      title: 'Health Care',
      description: 'Schedule daily workout, check fitness, and provide immediate patient care solutions with digital healthcare services.',
      background: "bg-[url('/assets/images/industries/health.webp')]",
    },
    {
      icon: RealState,
      title: 'Real Estate',
      description: 'With one digital platform, you can easily list properties, compare them, and find quick and safe home purchasing options.',
      background: "bg-[url('/assets/images/industries/real-state.webp')]",
    },
    {
      icon:Cart,
      title: 'Retail & eCommerce',
      description: 'Increase conversion rates and develop brands that people love by unlocking the full potential of merchants and ecommerce shops.',
      background: "bg-[url('/assets/images/industries/ecommerce.webp')]",
    },
    {
      icon:Automaintenance,
      title: 'Automaintenance',
      description: 'Improve visibility and business success by improving customer happiness with linked autonomous cars and smart mobility services that reinvent mobility.',
      background: "bg-[url('/assets/images/industries/automotive.webp')]",
    },
    {
      icon: Education,
      title: 'Education',
      description: 'With an eLearning management system, you may get online sessions to in-classroom instruction and digital solutions that make the learning experience difficult.',
      background: "bg-[url('/assets/images/industries/education.webp')]",
    },
    {
      icon: Entertainment,
      title: 'Entertainment',
      description: 'With digital entertainment solutions, provide live streaming, online chatting, social networking, and more all on one platform.',
      background: "bg-[url('/assets/images/industries/entertainment.webp')]",
    },
  ];

  return (
    <section className='my-20'>
      <div className='container'>
        <h1 className='text-center font-semibold text-[#212529] md:text-4xl text-2xl mb-2 uppercase'>
        Industries We Serve
        </h1>
        <p className='text-center md:text-base text-sm mb-9'>
        We&apos;ve had the pleasure of working with a variety of sectors, addressing keychallenges and delighting end<br></br> customers with our engaging mobile apps.
        </p>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`neonCard cursor-pointer bg-white rounded-lg h-[300px] border shadow-sm hover:shadow-lg transition-shadow p-[45px] 
                relative overflow-hidden group`}
            >
              {/* Background Image on Hover */}
              <div
                className={`absolute inset-0 ${card.background} bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>

              {/* Card Content */}
              <div className='relative z-10'>
                <div className='text-6xl w-[15%] mb-4'>
                  <Image src={card.icon} alt='' width={40} className='w-full' />
                </div>
                <h3 className='text-[25px] font-bold mb-2 text-primary'>
                  {card.title}
                </h3>
                <p className='text-gray-700 text-[14px]'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
