import React from 'react'
import Image from 'next/image'
import Contactimg from '../public/images/contact.jpg'

const Contact = () => {
  return (
    <div className='md:flex md:py-6 md:pb-9'>
        <div>
            <Image src={Contactimg} alt=''/>
        </div>
        <div className='py-8 px-6 md:w-2/5 md:ml-14'>
            <h1 className='text-2xl text-[#0eafef] text-center pb-3 md:text-left md:text-3xl'>Send us a message</h1>
            <p className='text-slate-800 text-center pb-4 md:text-left'>Our experts and developers would love to contribute their expertise and insights and help you today.</p>
        <form>
            <div className='grid sm:grid-cols-2 gap-4 w-full'>
                <div>
                    <input type="text" placeholder='Your Name (Required)' required className='bg-transparent w-full py-2 px-4 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
                </div>
                <div className='pt-4 sm:pt-0'>
                    <input type="email" placeholder='Your Email (Required)' required className='bg-transparent w-full py-2 px-4 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
                </div>
            </div>
            <div className='pt-4'>
                <textarea cols="24" rows="4" placeholder='Message' className='bg-transparent py-2 px-4 rounded-sm w-full shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></textarea>
            </div>
            <div className='pt-4'>
                <button className='bg-transparent py-2 px-4 rounded-md bg-[#00afef] text-white shadow-md w-full'>Send Message</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Contact