import React from 'react'
import {BsStars} from 'react-icons/bs'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-white fixed top-0 w-[100%]  h-[80px] mb-[120px] border-b border-gray-200 flex justify-between items-center font-montserret gap-x-[5px] px-[10px] laptop:px-[20px] ' >
        <div></div>
        <div>
          <Link to={'/'} >
            <div className='text-[18px] laptop:text-[30px] font-[600] flex justify-center items-center gap-[5px] text-primary ' >
              <div className='text-[16px] laptop:text-[24px] ' ><BsStars/></div>
              <div> Developer Things. . .</div>
            </div>
          </Link>
        </div>
        {/* <div className='text-[20px] laptop:text-[30px] font-[600] flex justify-center items-center text-primary ' >
          <div className='text-[18px] laptop:text-[24px] text-primary ' ><BsStars/></div>Developer Things. . .</div> */}
        <div className='text-[20px] text-gray-600 ' ><Link to='/your-suggestion' ><HiOutlineDotsVertical /></Link> </div>
    </div>
  )
}

export default Navbar
