import React, { useEffect, useState } from 'react'

const useResturantMenu = (resId) => {
    const [resData, setResData] = useState(null);
    useEffect(() => {
        resMenu();
    }, []);

    const resMenu = async () => {
        try {
            const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            const datas = await res.json();
            setResData(datas.data);
        } catch (error) {
            console.log(error);
        }
    }
    return resData;

    

}

export default useResturantMenu