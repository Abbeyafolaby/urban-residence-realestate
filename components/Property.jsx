import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import {FaBed, FaBath} from 'react-icons/fa'
import { BiBuildingHouse} from 'react-icons/bi'
import { GoVerified } from 'react-icons/go'
import millify from "millify";
import img from '../public/images/house.jpeg'

const Property = ({ property: { coverPhoto,  price, rentFrequency, rooms, title, baths, area, isVerified, externalID,id} }) => {
    const [savedProperty, setSavedProperty] = useState(false)

    const saveProperty = async () => {
        setSavedProperty(true)
        await updateDoc(propertyRef, {
            savedProperty: arrayUnion({
                id: id,
                externalID: externalID,
                title: title,
                coverPhoto: coverPhoto.url,
                price: price,
                rentFrequency: rentFrequency,
                rooms: rooms,
                baths: baths,
                area: area,
                isVerified: isVerified
            })
        })
    }

    return (
        <div>
            <div className='bg-white shadow-md'>
                <div className='relative flex items-center justify-center h-auto w-full cursor-pointer'>
                <Link href={`/PropertyDetails/${externalID}`} passHref>
                    <Image src={coverPhoto ? coverPhoto.url : img} alt='/' width={400} height={280} className='scale-95 hover:scale-100 ease-in duration-500'/>
                </Link>
            </div>
            <div className='px-5 py-4'>
                <div className='flex items-center pb-2'>
                    <div className='pr-3 text-[#0eafef]'>{isVerified && <GoVerified />}</div>
                    <div className='text-[#00afef] text-l font-bold'>NGN {millify(price)}{rentFrequency && `/${rentFrequency}`}</div>
                </div>

                <hr />
                <div className='grid grid-cols-3 gap-3 py-3'>
                    <div className='mx-auto text-gray-500'>
                        <FaBed className='inline mr-1'/> {rooms}
                    </div>
                    <div className='mx-auto text-gray-500'>
                        <FaBath className='inline mr-1'/> {baths}
                    </div>
                    <div className='mx-auto text-gray-500'>
                        <BiBuildingHouse className='inline mr-1'/> {millify(area)} sqft
                    </div>
                </div>
                <hr />
                <div className='flex justify-between items-center pt-2'>
                <div className='pb-2 font-bold'>
                    {title.length > 34 ? `${title.substring(0, 34)}...` : title}
                </div>
                </div>
            </div>
        </div>
        </div>
    )

    // <Link href={`/property/${externalID}`} passHref>
    //     {title}
    // </Link>
}

export default Property