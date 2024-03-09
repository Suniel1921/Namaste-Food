import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import '../Home/home.css'
import carouselData from '../../data/carouselData/Carousel'
import ResturantCarousel from '../../components/resturantCarousel/ResturantCarousel'
import Resturants from '../../data/resturants/Resturants';
import ResCard from '../resCard/ResCard'
import UserClass from '../../components/classbasedfunction/UserClass'

const Home = () => {

  return (
    <>
    <UserClass name={"logins"} location={"Gaushala-Nepal"}/>
    <div className='container'>
    <h2>What's on your mind?</h2>      
        <div className='carouselCategory'> 
        {
            carouselData.map((data)=>(
                <Carousel key={data.id} carouselDatas={data}/>
            ))
        }
        </div>
            <h2> Top restaurant chains in Bangalore</h2>
        <div className='resturantCarouseData'> 
                  
            {
                Resturants.map((ResturantData)=>(
                    <ResturantCarousel key={ResturantData.info.id} ResturantData = {ResturantData} />
                ))
            }
        </div>

        <div className='resCardContainer'>
        <ResCard/>
        </div>
    </div>
    </>
    
  )
}

export default Home