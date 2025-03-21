import React from 'react';
import { NavLink } from 'react-router-dom';

const ImageData = ({ detail }) => {
    console.log(detail);

    // Check if detail is undefined or an empty array
    if (!Array.isArray(detail) || detail.length === 0) {
        return;  
    }else{
    
    }

    return (
        <div className='meals'>
            {detail.map((curItem) => (
                <div className='mealImg' key={curItem.idMeal}>
                    <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                    <p>{curItem.strMeal}</p>
                    <NavLink to={`/${curItem.idMeal}`}>
                        <button>View Recipe</button>
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default ImageData;
