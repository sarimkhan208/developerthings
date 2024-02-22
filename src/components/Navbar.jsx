import React from 'react'
import {BsStars} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='bg-white h-[80px] border-b border-gray-200 flex justify-center items-center font-montserret gap-x-[5px] ' >
        <div className='text-[26px] text-primary ' ><BsStars/></div>
        <div className='text-[24px] laptop:text-[30px] font-[600] text-primary ' >Developer Things. . .</div>
    </div>
  )
}

export default Navbar
