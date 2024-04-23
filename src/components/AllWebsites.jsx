import React from 'react'
import WebsiteContainer from './WebsiteContainer'
import { CSSstyle, UIComponentsWebsites, aiGeneratedComponent, aiTools, animations, background, carouselsAndSlider, codeScreenshot, color, icons } from '../data'

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AllWebsites = () => {
  return (
    <div className='w-[95%] laptop:w-[80%] mx-auto font-montserret py-[50px] ' >
        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] ' >Pre-Built UI Components</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={UIComponentsWebsites}/>

        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >AI Generated Components</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={aiGeneratedComponent}/>

        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >Your Webiste Animation</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={animations}/>

        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >Your Website Carousels & Sliders</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={carouselsAndSlider}/>

        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >Your Website Color Palletes</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={color}/>

        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >Icons</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={icons}/>

        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >CSS Styling</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={CSSstyle}/>


        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >Your Webiste Background</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={background}/>


        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >Code Screenshots</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={codeScreenshot}/>


        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >AI Tools</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={aiTools}/>

        <div className='h-[40px] flex flex-col tablet:flex-row tablet:justify-between my-[20px] font-montserret pt-[30px] bg-transparent border-t ' >
          <div className='text-gray-600 font-[400] mb-[20px] tablet:mb-0 text-center tablet:text-left ' >coded with ❤️ © Sarim Khan</div>
          <div className='flex justify-center laptop:justify-start gap-[20px] laptop:gap-[15px] text-gray-600 text-[18px] ' >
            <div><Link to='https://twitter.com/SARimCASM' > <FaXTwitter /></Link></div>
            <div><Link to='https://www.linkedin.com/in/sarim-khan-40a446233/' > <FaLinkedinIn /></Link></div>
            <div><Link to='https://www.instagram.com/sarimkhan7275/' > <FaInstagram /></Link></div>
          </div>
        </div>

        
    </div>
  )
}

export default AllWebsites
