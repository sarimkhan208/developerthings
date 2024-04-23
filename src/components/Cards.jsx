import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./card.css";

const Cards = ({ name, link, image, desc,isNew }) => {
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
    <div className='h-[350px] font-montserret bg-white laptop:h-[450px] rounded-lg overflow-hidden border ' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} >
      <Link to={link} target='_blank' >
        <div className='w-[100%] h-[40%] border-b relative ' >
          <img className='w-[100%] h-[100%] object-fill ' src={image} alt={name} />
          <span className={`text-[10px] tracking-wider font-[500] bg-red-500 py-[4px] px-[8px] rounded-full text-white absolute top-2 right-2 ${isNew?'block':'hidden'} `} >New</span>
        </div>

        <div className='p-[10px] flex flex-col justify-between h-[60%] ' >
          <div>
            <h3 className=' text-[14px] laptop:text-[18px] font-[600] text-black mb-[10px] ' >{name}</h3>
            <p className='text-[12px] laptop:text-[15px] font-[500] text-gray-500 mb-[20px] '>{desc}</p>
          </div>

          <div>
            <button className='w-[100%] rounded-md hover:bg-white hover:text-primary hover:border-primary hover:border ease-in-out duration-300 bg-primary text-white font-[500] text-[14px] py-[8px] ' >Try Now!</button>
          </div>

        </div>

      </Link>
    </div>
  );
};

export default Cards;
