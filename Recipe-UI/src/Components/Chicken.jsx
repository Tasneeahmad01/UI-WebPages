import React, { useState } from 'react'
import Mealcards from './Mealcards';
import './Chicke.css'
import Food from '../NavLinks/Food'


const Mainpage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("")

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const myFun = async () => {
        if (search === "") {
            setMsg("Please Enter Something")
            setData(null)
        } else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();

            if (jsonData.meals) {
                setData(jsonData.meals)
                setMsg("")
            } else {
                setData(null)
                setMsg("Sorry,👨🏻‍💻 Data not found")
            }
        }
    }

    return (
        <>
            <h1 className='head ' style={{ marginTop: "50px" }}>FOOD RECIPE APP</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input type='text' placeholder='Enter Chicken Dish' onChange={handleInput} />
                    <button onClick={myFun}>Search</button>
                </div>
                <h4 className='msg mt-3 mb-3'>{msg}</h4>
                <div>
                    {data && <Mealcards detail={data} />}
                </div>
            </div>
            <Food />
            
        </>
    )
}

export default Mainpage
