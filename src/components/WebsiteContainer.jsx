import React from 'react'
import Cards from './Cards'

const WebsiteContainer = ({websitesData}) => {
  return (
    <div  className='grid laptop:grid-cols-3 grid-cols-1 gap-[20px] laptop:gap-[40px] ' >
      {websitesData.map((el,i)=>(<Cards name={el.name} link={el.link} desc={el.desc} image={el.image} />))}
    </div>
  )
}

export default WebsiteContainer
