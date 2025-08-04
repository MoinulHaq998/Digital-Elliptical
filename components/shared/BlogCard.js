import React from 'react'

import logo from "@/assets/logo/de-logo.webp"
import Image from 'next/image'

function BlogCard({img, title, desc, date}) {
    return (
        <div className='w-full border rounded-xl overflow-hidden'>
            <div className='relative'>
                <Image src={img} alt="blog image" className='!w-full !h-48' width={500} height={500} />
                <div className='absolute top-0 left-0 w-full h-full bg-primary bg-opacity-10'></div>
            </div>
            <div className='flex items-center justify-between px-4 py-3 border-b-2'>
                <div className='flex items-center gap-2'>
                    <Image src={logo} alt='de-logo' width={100} height={100} className='!h-9 !w-9' />
                    <h4 className='text-sm'>Digital Elliptical</h4>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>{date}</p>
                </div>
            </div>

            <div className='min-h-[140px] px-4 py-3'>
                <h4 className='font-bold mb-1'>{title}</h4>
                <p className='text-sm text-gray-600'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default BlogCard
