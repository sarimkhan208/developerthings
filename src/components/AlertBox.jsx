import React from 'react'
import {ImCross } from "react-icons/im";

export const AlertBox = () => {
  return (
    <div className="flex h-[40px] w-[250px] laptop:w-[400px] rounded-md bg-red-50 border overflow-hidden ">
        <div className='w-[5px] bg-red-500 ' ></div>
        <div className='flex items-center px-[10px] gap-x-[5px] ' >
            <div className='text-red-600  ' ><ImCross /></div>
            <div className='text-gray-600 text-[14px] font-[500] ' >Please fill all details</div>
        </div>
    </div>
  )
}
