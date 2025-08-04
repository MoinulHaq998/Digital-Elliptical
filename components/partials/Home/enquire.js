import Image from "next/image";
import React from 'react'
import QrCode from "@/assets/banner/qr_code.webp";
import Contact from "@/assets/banner/contact.webp";
import Form from '../../Form/Form'
import { Icon } from "@iconify/react";

const enquire = () => {

    return (
        <div className='flex flex-wrap justify-between gap-2 p-6 w-full max-w-6xl mx-auto bg-white'>
              {/* QR Code Section */}
              <div className=' md:w-[20%] md:h-[30%] hidden md:flex justify-center'>
                <Image src={QrCode} alt="message icon" className='w-[80%]' />
              </div>

              <div className='w-full md:w-[50%]'>
                <div className='w-full'>
                  <div>
                    <h1 className='text-[30px] flex font-semibold text-[#212529]'> 
                      <Icon icon='bi:chat' className='text-[#212529] m-2'/>
                      Let’s talk!</h1>
                    <p className='text-[#212529] text-sm ml-2'>
                      We’d love to hear what you are working on. Drop us a note here
                      and we’ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Form Section */}
                <div className='w-full py-2'>
                  <Form />
                </div>
              </div>
              {/* Contact Info Section */}
              <div className='w-full md:w-[20%] md:block flex justify-between mt-2 text-left'>
                 <Image src={Contact} alt="message icon" className='md:w-[100%] w-[50%]'  />              
                <div className='text-sm px-4 py-4 space-y-4'>
                  <p><span className='font-semibold'>Phone:</span><br></br> +92 330 2387597</p>
                  <p><span className='font-semibold'>Sales:</span><br></br> sales@digitalelliptical.com</p>
                  <p><span className='font-semibold'>Career:</span><br></br> hr@digitalelliptical.com</p>
                </div>
              </div>
        </div>
    )
}

export default enquire
