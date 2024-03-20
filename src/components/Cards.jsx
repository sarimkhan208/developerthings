import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./card.css";

const Cards = ({ name, link, image, desc }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderDescription = () => {
    const words = desc.split(' ');
    if (words.length <= 7 || expanded) {
      return desc;
    }
    return words.slice(0, 7).join(' ') + '...';
  };

  return (
    <div style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} className='card h-auto rounded-xl cursor-pointer font-montserret overflow-hidden' >
      
        <div className='h-[130px] laptop:h-[200px] w-[100%] overflow-hidden border-b' ><img className='h-[100%] w-[100%] hover:scale-110 ease-in-out duration-300' src={image} alt='image' /> </div>
        <div className='p-[7px] laptop:p-[20px] bg-white  ' >
          <h3 className=' text-[14px] laptop:text-[18px] font-[600] text-black mb-[10px] ' >{name}</h3>
          <p className='block laptop:hidden text-[12px] laptop:text-[15px] font-[500] text-gray-500 mb-[20px] ' >{renderDescription()}{desc.split(' ').length > 7 && (
            <button onClick={toggleExpanded} className='font-[500] text-[14px] py-[4px] focus:outline-none' >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}</p>
          <p className='laptop:block hidden text-[15px] font-[500] text-gray-500 mb-[20px] '>{desc}</p>
          
          <Link to={link} target='_blank' ><button className='w-[100%] rounded-md hover:bg-white hover:text-primary hover:border-primary hover:border ease-in-out duration-300 bg-primary text-white font-[500] text-[14px] py-[4px] ' >Try Now!</button></Link>
        </div>
      
    </div>
  );
};

export default Cards;
