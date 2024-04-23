import React, { useRef } from 'react'
import { BsArrowDown } from "react-icons/bs";
const FirstComponent = ({ onButtonClick }) => {

  const containerRef = useRef(null);

  
  return (
    <div className='flex flex-col-reverse laptop:flex-row font-montserret  ' >
      <div className='w-[100%] laptop:w-[50%] flex justify-center items-center ' >
        <div className='w-[90%] laptop:w-[80%] mx-auto' >
          <h1 className='font-[500] text-[16px] laptop:text-[20px] text-gray-500 ' >Welcome to Developer Things! Discover tools and inspiration for frontend projects. Elevate designs with box shadows, animations, and more. Join our community and unleash your creativity today!</h1>
          <button onClick={onButtonClick} className='rounded-lg  mt-[30px] bg-primary text-white px-[20px] py-[8px] text-[16px] font-[500] flex items-center gap-[10px] ' >Explore More <span className='text-white font-[500] ' >{<BsArrowDown />}</span></button>
        </div>
      </div>
      
      <div className='w-[100%] laptop:w-[50%] ' >
        <div className='h-[400px] ' >
            <img className='w-[100%] h-[100%] object-contain ' src='/intro-image.png' alt="img" />
        </div>
      </div>
    </div>
  )
}

export default FirstComponent
