import React from 'react'
import '../carousel/carousel.css'

const Carousel = ({carouselDatas}) => {
  return (
    <>
        <div className='carouselContainer'>
            <div className='carouselData'>
            <img className='restoCategory' src={` https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${carouselDatas.imageId}`}  alt="" /> 
            </div>
        </div>
    </>
  )
}

export default Carousel