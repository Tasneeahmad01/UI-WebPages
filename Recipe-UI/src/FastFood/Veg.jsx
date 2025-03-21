import React, { useState } from 'react'
import ImageData from './ImageData'
import './Veg.css'
 
const Veg = () => {
    const [vegItem, setVegItem] = useState(null);
    const [search, setSearch] = useState("");
    const [showData, setShowData] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const myFun = async () => {
        if (search === "") {
            setShowData("Please Enter Something");
            setVegItem(null);
        } else {
            try {
                const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
                const jsonData = await get.json();
                if (jsonData.meals) {
                    setVegItem(jsonData.meals);
                    setShowData("");
                } else {
                    setShowData("Sorry, Data Not Found");
                    setVegItem(null);
                }
            } catch (error) {
                setShowData("Failed to fetch data");
                setVegItem(null);
            }
        }
    }

    return (
        <>
            <h1 className='head' style={{ marginTop: "50px" }}>VEGE RECIPE APP</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input 
                        type='text' 
                        placeholder='Enter Vege Dish' 
                        onChange={handleInput}
                        value={search}
                    />
                    <button onClick={myFun} style={{ backgroundColor: "#eefc69",color:"brown"}}>Search</button>
                </div>
                <h4 className='msg'>{showData}</h4>
                <div>
                    <ImageData detail={vegItem} />
                </div>
            </div>
        </>
    )
}

export default Veg;
