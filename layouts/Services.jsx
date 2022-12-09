import React from 'react'
import { BiBuildingHouse } from "react-icons/bi";
import { GiShakingHands} from "react-icons/gi";
import { AiOutlineRise } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";


const Services = () => {
  return (
    <>
        <h1 className='pl-10 text-3xl tracking-widest font-normal text-[#00afef] md:text-center'>Services We Offer</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-6 px-10'>
            <div className='bg-slate-800 rounded-lg p-4'>
              <GiNotebook className='text-4xl text-[#0eafef] m-auto' />
              <div className='text-center'>
                <p className='text-[#0eafef] text-lg'>Sell your home</p>
                <p className='text-white'>We sell your home at the best market price.</p>
              </div>
            </div>
            <div className='bg-slate-800 rounded-lg p-4'>
              <RiUserSettingsLine className='text-4xl text-[#0eafef] m-auto' />
              <div className='text-center'>
                <p className='text-[#0eafef] text-lg'>Get legal services</p>
                <p className='text-white'>Expert legal help for all related property items..</p>
              </div>
            </div>
            <div className='bg-slate-800 rounded-lg p-4'>
              <BsBuilding className='text-4xl text-[#0eafef] m-auto' />
              <div className='text-center'>
                <p className='text-[#0eafef] text-lg'>Home loans</p>
                <p className='text-white'>We offer you free consultancy to get a loan.</p>
              </div>
            </div>
            <div className='bg-slate-800 rounded-lg p-4'>
              <BiBuildingHouse className='text-4xl text-[#0eafef] m-auto' />
              <div className='text-center'>
                <p className='text-[#0eafef] text-lg'>Free evaluation</p>
                <p className='text-white'>We do a free evaluation to be sure you want to start selling</p>
              </div>
            </div>
            <div className='bg-slate-800 rounded-lg p-4'>
              <AiOutlineRise className='text-4xl text-[#0eafef] m-auto' />
              <div className='text-center'>
                <p className='text-[#0eafef] text-lg'>Marketing presentation</p>
                <p className='text-white'>We do all marketing materials with our specialists.</p>
              </div>
            </div>
            <div className='bg-slate-800 rounded-lg p-4'>
              <GiShakingHands className='text-4xl text-[#0eafef] m-auto' />
              <div className='text-center'>
                <p className='text-[#0eafef] text-lg'>Home inspection</p>
                <p className='text-white'>We will do the home inspection for you.</p>
              </div>
            </div>
            
        </div>
    </>
  )
}

export default Services