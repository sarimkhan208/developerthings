import React from 'react'

export const SuccessfullBox = () => {
  return (
    <div className="flex h-[40px] w-[250px] laptop:w-[400px] rounded-md bg-green-100 border overflow-hidden ">
        <div className='w-[5px] bg-green-500 ' ></div>
        <div className='px-[10px] flex items-center ' >
            <div className='text-gray-600 text-[14px] font-[500] ' >🥳 We accepted your form, we will it this soon!</div>
        </div>
    </div>
  )
}
