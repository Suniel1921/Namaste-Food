import React from 'react'
import '../resturantCarousel/resturantCarouse.css'

const ResturantCarousel = ({ResturantData}) => {
    return (
        <>
            <div className='container'>
                <div className='resturantCarousel'>
                    <img className='resturantImg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${ResturantData.info.cloudinaryImageId}`} alt="" />
                </div>
            </div>
        </>
    )
}

export default ResturantCarousel