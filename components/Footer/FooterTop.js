import Image from 'next/image'
import React from 'react'
import Form from '../Form/Form'


function FooterTop() {
    return (
        <section className='bg-gradient-map'>
            <div className='container'>
                <div className='w-[70%] mx-auto pt-20 pb-10 text-[#212529]'>
                    <div className='flex items-center gap-3 mb-3'>
                        <Image src="/assets/images/footer/customer.webp" alt="message icon" width={50} height={40} />
                        <h3 className='font-bold  text-2xl md:text-3xl'>
                            Drop us a line
                        </h3>
                    </div>
                    <p className='mb-8'>Stay Ahead of Competition with an Intuitive Mobile App for Your Business</p>

                    <Form />

                </div>
            </div>
        </section>
    )
}

export default FooterTop
