import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='bg-slate-800 text-[#fff] md:flex md:justify-around md:items-center md:py-6 lg:items-center lg:justify-around'>
            <div className='mb-4 py-4 px-7'>
                <h1 className='text-[#00afef] text-2xl'>About us</h1>
                <p className='py-4'>WpResidence is committed to delivering a high level of expertise, customer service, and attention to detail to the marketing and sales of luxury real estate, and rental properties.</p>
            </div>
            <div className='px-7'>
                <h1 className='text-[#00afef] text-2xl'>Contact us</h1>
                <ul className='py-4'>
                    <li className='py-2 cursor-pointer hover:text-[#00afef] w-[18rem]'>99 Brooklyn Professional Center Newyork NY 18231 USA</li>
                    <li className='py-2 cursor-pointer hover:text-[#00afef]'>Email: emmi34.et@gmail.com</li>
                    <li className='py-2 cursor-pointer hover:text-[#00afef]'>Phone: +234 814 432 6164</li>
                </ul>
            </div>
        </div>
        <div className='text-sm text-center bg-slate-900 py-4 text-white'>&copy;2022. Powered by Rapid API (Bayut API). Developed by Chef Abbey👨🏾‍🍳
        </div>
    </>
  )
}

export default Footer