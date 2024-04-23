import React from 'react'
import Cards from './Cards'

const WebsiteContainer = ({websitesData}) => {
  return (
    <div  className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 placed-ce gap-[20px] laptop:gap-[40px] ' >
      {websitesData.map((el,i)=>(<Cards key={i} isNew={el?.isNew} name={el.name} link={el.link} desc={el.desc} image={el.image} />))}
    </div>
  )
}

export default WebsiteContainer
