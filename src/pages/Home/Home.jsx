import React, { Suspense, lazy } from 'react'
import Carousel from '../../components/carousel/Carousel'
import '../Home/home.css'
import carouselData from '../../data/carouselData/Carousel'
import ResturantCarousel from '../../components/resturantCarousel/ResturantCarousel'
import Resturants from '../../data/resturants/Resturants';
import ResCard from '../resCard/ResCard'
import UserClass from '../../components/classbasedfunction/UserClass'
import useOnlineStatus from '../../utils/useOnlineStatus'

const Home = () => {

    const Test = lazy(()=> import ('../lazyLoading/Test'));



    const onlineStatus =  useOnlineStatus();
    if(onlineStatus === false) return (
        <h3>Opps ! Look like you are offline ! please connecte your internet</h3>
    )

  return (
    <>

    {/* <Suspense fallback={<h2>Testing ....</h2>}>
    <Test/>
    </Suspense> */}


    {/* <UserClass name={"logins"} location={"Gaushala-Nepal"}/> */} 
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