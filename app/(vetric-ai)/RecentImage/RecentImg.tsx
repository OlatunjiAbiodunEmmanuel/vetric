import React from 'react'
import SectionHeading from './SectionHeading'
import ImageSlider from './ImageSlider'

const RecentImg = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-950'>
      <SectionHeading heading='Explore Our Recent Image'/>
      <div className='w-[90%] md:w-[80%] mx-auto mt-16'>
      <ImageSlider/>
      </div>
      </div>
  )
}

export default RecentImg