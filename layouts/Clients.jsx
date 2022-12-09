import React from 'react'
import Image from 'next/image'
import team1 from '../public/images/team-1.jpg'
import team2 from '../public/images/team-2.jpg'
import team3 from '../public/images/team-3.jpg'
import team4 from '../public/images/team-4.jpg'
import team5 from '../public/images/team-5.jpg'
import team6 from '../public/images/team-6.jpg'

const Clients = () => {
  return (
    <>
        <h1 className='pl-10 text-3xl tracking-widest font-normal text-[#00afef] md:text-center'>Clients Feedbacks</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-6 px-10'>
            <div className='block bg-slate-800 p-10 rounded-lg md:flex shadow-inner'>
                <Image src={team1} alt='' className='rounded-full w-20 h-20 m-auto mb-3.5'/>
                <div className='pl-0 md:pl-5 text-center md:text-left'>
                    <p className='text-xl font-bold text-[#00afef]'>Abdulganiyu Olaniyi <br/><span className='text-sm font-normal italic'>happy seller</span></p>
                    <p className='text-[#fff] text-sm pt-1'>The sale went smoothly, and we just closed on an ideal new place we're excited to call home.</p>
                </div>
            </div>
            <div className='block bg-slate-800 p-10 rounded-lg md:flex'>
                <Image src={team2} alt='' className='rounded-full w-20 h-20 m-auto mb-3.5'/>
                <div className='pl-0 md:pl-5 text-center md:text-left'>
                    <p className='text-xl font-bold text-[#00afef]'>Abdulwahab Yahaya<br/><span className='text-sm font-normal italic'>Developer</span></p>
                    <p className='text-[#fff] text-sm pt-1'>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication.</p>
                </div>
            </div>
            <div className='block bg-slate-800 p-10 rounded-lg md:flex'>
                <Image src={team3} alt='' className='rounded-full w-20 h-20 m-auto mb-3.5'/>
                <div className='pl-0 md:pl-5 text-center md:text-left'>
                    <p className='text-xl font-bold text-[#00afef]'>Modesty Ejeh <br/><span className='text-sm font-normal italic'>Excellent team! 🏆</span> </p>
                    <p className='text-[#fff] text-sm pt-1'>We hired the WP Estate team as our buyer agent because they are specifically trained in Short Sale & Foreclosure.</p>
                </div>
            </div>
            <div className='block bg-slate-800 p-10 rounded-lg md:flex'>
                <Image src={team4} alt='' className='rounded-full w-20 h-20 m-auto mb-3.5'/>
                <div className='pl-0 md:pl-5 text-center md:text-left'>
                    <p className='text-xl font-bold text-[#00afef]'>Samuel Afolabi <br/> <span className='text-sm font-normal italic'>Happy buyer</span></p>
                    <p className='text-[#fff] text-sm pt-1'>As I move forward to now BUY my next house, I am extremely certain Residence will be the right partner to help me.</p>
                </div>
            </div>
            <div className='block bg-slate-800 p-10 rounded-lg md:flex'>
                <Image src={team5} alt='' className='rounded-full w-20 h-20 m-auto mb-3.5'/>
                <div className='pl-0 md:pl-5 text-center md:text-left'>
                    <p className='text-xl font-bold text-[#00afef]'>Violet Fireflies<br/> <span className='text-sm font-normal italic'>Devloper</span></p>
                    <p className='text-[#fff] text-sm pt-1'>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication.</p>
                </div>
            </div>
            <div className='block bg-slate-800 p-10 rounded-lg md:flex'>
                <Image src={team6} alt='' className='rounded-full w-20 h-20 m-auto mb-3.5'/>
                <div className='pl-0 md:pl-5 text-center md:text-left'>
                    <p className='text-xl font-bold text-[#00afef]'>Sanchez Parelta <br/> <span className='text-sm font-normal italic'>Happy Buyer</span></p>
                    <p className='text-[#fff] text-sm pt-1'>His professionalism, personality, attention to detail, responsiveness and his ability to close the deal was Outstanding</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Clients