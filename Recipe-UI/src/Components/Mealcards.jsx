import React from 'react'
import { NavLink } from 'react-router-dom';
 
const Mealcards = ({ detail }) => {
    console.log(detail);

    // Check if detail is undefined or not an array
    if (!Array.isArray(detail) || detail.length === 0){
        return ;
    }

    return (
        <div className='meals'>
            {detail.map((curItem) => (
                <div className='mealImg' key={curItem.idMeal}>
                    <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                    <p>{curItem.strMeal}</p>
                    <NavLink to={`/${curItem.idMeal}`}>
                        <button>Recipe</button>
                    </NavLink>
                </div>
               
            ))}
                 
        </div>
    );
}

export default Mealcards;
