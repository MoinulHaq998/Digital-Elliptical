import Image from 'next/image';
import React from 'react'


export default function page({head,title,solution}) {
  return (
    <div>
        <div className='container mt-16 '>
                <p className='text-center  text-xs mb-1 tracking-wider  text-gray-700 uppercase'>
                 {head}
                </p>
                <h4 className='uppercase font-bold mx-auto text-[#212529]  text-3xl text-center mb-2'>
                  {title}
                </h4>
                <div className='grid grid-cols-12 mt-2 '>
                  {solution.map((data, idx) => (
                    <div
                      key={idx}
                      className='col-span-12 md:col-span-3 cursor-pointer flex flex-col items-center group relative overflow-hidden'
                    >
                      {/* Image with scale animation on hover */}
                      <Image
                        src={data.img}
                        alt='main-image'
                        className='scale-75 transition-transform duration-500 ease-in-out '
                      />
                      {/* group-hover:scale-105 */}
      
                      <h4 className='text-xl  font-bold mt-0 text-center text-[#212529] transition-all  duration-300 ease-in-out group-hover:text-[#005E7C]'>
                        {data.title}
                      </h4>
      
                      {/* Paragraph with slide-in effect from the top */}
                      <p className='text-center  mt-2 opacity-0 h-full md:h-[40vh] -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
                        {data.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
    </div>
  )
}
