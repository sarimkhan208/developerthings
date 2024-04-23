import React from 'react'
import WebsiteContainer from './WebsiteContainer'
import { CSSstyle, UIComponentsWebsites, aiGeneratedComponent, aiTools, animations, background, carouselsAndSlider, codeScreenshot, color, icons } from '../data'

const AllWebsites = () => {
  return (
    <div className='w-[95%] laptop:w-[80%] mx-auto font-montserret py-[50px] ' >
        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] ' >Pre-Built UI Components</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={UIComponentsWebsites}/>

        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >AI Generated Components</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={aiGeneratedComponent}/>

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


        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >Your Webiste Animation</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={animations}/>


        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >Code Screenshots</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={codeScreenshot}/>


        <h1 className='text-[25px] laptop:text-[40px] font-[600] text-[#263238] mt-[80px] ' >AI Tools</h1>
        <hr className='mb-[30px] mt-[10px] ' />
        <WebsiteContainer websitesData={aiTools}/>

        
    </div>
  )
}

export default AllWebsites
