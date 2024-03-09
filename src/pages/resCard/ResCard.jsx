import React, { useEffect, useState } from 'react';
import cardData from '../../data/Card/Card';
import '../resCard/rescard.css';
import Shimmer from '../../components/shimmer/Shimmer';
import { Link } from 'react-router-dom';

const ResCard = () => {
    const [topRatedData, setTopRatedData] = useState([]);
    // const [topRatedData, setTopRatedData] = useState(cardData);
    // console.log('top rated data is : ', topRatedData)
    const [searchText, setSearchText] = useState("");
    console.log('top rated data ', topRatedData)

    const filterTopRatedData = () => {
        const filterData = topRatedData.filter((ratedData) => ratedData.info.avgRating > 4);
        setTopRatedData(filterData)
    }

    const fetchSwiggyData = async () => {
        try {
            const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            // console.log(res)
            const resdata = await res.json();
            console.log('res', resdata)
            setTopRatedData(resdata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            console.log('res data is : ',resdata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.name)

        } catch (error) {
            console.log(error)

        }

    }
    useEffect(() => {
        fetchSwiggyData();
    }, [])

    //shimmer effect (conditional rendering)
    // if(topRatedData.length === 0){
    //     return <div><Shimmer/></div>
    // }

    return topRatedData.length === 0 ? <Shimmer /> : (
        <div className="contain">

            <h2>Restaurants with online food delivery in Bangalore</h2>
            <div className='searchTopRatedBtn'>
                <button onClick={filterTopRatedData}>Top Rated Restaurants</button>
                <div>
                    <input value={searchText} onChange={(e) => {setSearchText(e.target.value)}} type="search" name="search" id="" />
                    <button onClick={()=>{
                        console.log(searchText)
                        const filterSearchData = topRatedData.filter((searchData)=> searchData?.info?.name.includes(searchText))                        
                        // const filterSearchData = topRatedData.filter((searchData)=> searchData.data.info.name.includes(searchText))
                        setTopRatedData(filterSearchData)
                    }} >Search</button>
                </div>
            </div>

            {topRatedData && (
                <div className='cardContainer'>
                    {topRatedData.map((data) => (
                        <Link className='cardData' key={data.info.id} to={'resturant/'+ data.info.id}>
                        <div className='cardDatass' >
                            <img className='cardImg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}`} alt="" />

                            <h3>{data.info.name.substring(0, 30)}</h3>
                            <div className='rating_and_time'>
                                <h4>{data.info.avgRating}</h4>
                                <h4>{data.info.sla.slaString}Mins</h4>
                            </div>
                            <p>{data.info.cuisines.join(',')}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );

};

export default ResCard;
