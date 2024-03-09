import React, { useEffect, useState } from 'react';
import Shimmer from '../shimmer/Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resData, setResData] = useState(null);
    const { resId } = useParams();

    const resMenu = async () => {
        try {
            const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            const datas = await res.json();
            setResData(datas.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        resMenu();
    }, []);

    if (resData === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, expectationNotifiers, avgRating, totalRatings, sla } = resData.cards[0]?.card?.card?.info;
    const itemCards = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    return (
        <>
            <div className='container'>
                <div className="resContainer">
                    <div className='left'>
                        <h3>{name}</h3>
                        <p>{cuisines.join(",")}</p>
                        <div className='diliveryImg'>
                            {/* Include your delivery image component here */}
                        </div>
                    </div>
                    <div className="right">
                        <div className='rating'>
                            <h3>{avgRating}</h3>
                            <hr />
                            <h3>{totalRatings}+ rating</h3>
                        </div>
                    </div>
                </div>
                <div className='dashedUnderline'></div>
                <div className='time'>
                    <h3>{sla.minDeliveryTime} - {sla.maxDeliveryTime} MINS</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
            </div>

            <div className='menuContainer'>
                {itemCards.map((item) => (
                    <div className='time containerres' key={item.card.info.id}>
                        <div className='content'>
                            <div className='leftres'>
                                <p>{item.card.info.name}</p>
                                <p>Rs{item.card.info.price}</p>
                            </div>
                            <p>{item?.card?.info.description}</p>
                            <hr />
                        </div>
                        <div className='addToCart rightres'>
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RestaurantMenu;
