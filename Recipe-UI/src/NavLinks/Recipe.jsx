import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css'
const Recipe = () => {
    const [data, setData] = useState(null);
    const { meal } = useParams();

    const myFun = async () => {
        try {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
            const jsonData = await get.json();
            setData(jsonData.meals ? jsonData.meals[0] : null);
        } catch (error) {
            console.error('Error fetching recipe data:', error);
        }
    };

    useEffect(() => {
        if (meal) {
            myFun();
        }
    }, [meal]);

    return (
        <>
            {!data ? "Not Found" :
                <div className='msge'>
                    <img src={data.strMealThumb} alt={data.strMeal} />
                    <div className='infom'>
                        <h1>Recipe: {data.strMeal}</h1>                       
                        <h3>Instructions:</h3>
                        <p>{data.strInstructions}</p>
                        <button className='btn btn-dark'>{data.strMeal}</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Recipe;
