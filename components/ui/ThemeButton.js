import React from 'react'

function ThemeButton({children}) {
    return (
        <button
            className='
        group
        relative
        px-6 
        py-2 
        text-lg
        font-medium 
        overflow-hidden
        transition-all
        duration-300
      '
        >
            {/* Background overlay */}
            <div className='absolute inset-y-0 left-0 w-1/2 bg-primary transition-all duration-500 ease-in-out group-hover:w-full' />

            {/* Text container with split colors */}
            <span className='relative z-10 inline-flex font-semibold text-[15px] uppercase'>
                <span className=' text-white'>{children.toString().slice(0, Math.ceil(children.toString().length / 2))}</span>
                <span className=' text-black group-hover:text-white transition-colors duration-300'>
                    {children.toString().slice(Math.ceil(children.toString().length / 2))}
                </span>
            </span>
        </button>
    )
}

export default ThemeButton
