import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"
const Cards = ({name,link,image,desc}) => {
  return (
    
    <div className='card cursor-pointer font-montserret border rounded-lg overflow-hidden ' >
        <Link to={link} target='_blank' >
        <div className='h-[200px] w-[100%] overflow-hidden border-b  ' ><img className='h-[100%] w-[100%] hover:scale-110 ease-in-out duration-300' src={image} alt='image' /> </div>
        <div className='p-[20px]  ' >
            <h3 className='text-[18px] font-[600] text-gray-900 mb-[10px] ' >{name}</h3>
            <p className='text-[15px] font-[500] text-gray-500 mb-[20px] ' >{desc}</p>
            <button className='w-[100%] rounded-md hover:bg-white hover:text-primary hover:border-primary hover:border ease-in-out duration-300 bg-primary text-white font-[500] text-[14px] py-[4px] ' >Try Now!</button>
        </div>
        </Link>
    </div>
  )
}

export default Cards
