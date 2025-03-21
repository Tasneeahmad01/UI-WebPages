import React from 'react'
import { NavLink } from 'react-router-dom';

const Food = () => {
    const images = [
        
            {
                img: "https://img.freepik.com/premium-photo/delicious-seafood-with-spicy-sos-mediterranean-fine-cuisine_482257-24530.jpg?w=1060",
                price: "230",
                recipe: "Mediterranean Seafood Dish"
            },
            {
                img: "https://img.freepik.com/free-photo/raw-chicken-fillet-with-garlic-pepper-rosemary-wooden-chopping-board_1150-37788.jpg?t=st=1741674517~exp=1741678117~hmac=b3abd1b958b5762d698b96bdfa5894bb1fdd709e8d37195ec0b2ed94082d8c65&w=1060",
                price: "150",
                recipe: "Raw Chicken Fillet with Garlic & Rosemary"
            },
            {
                img: "https://img.freepik.com/premium-photo/baked-chicken-festive-dinner-christmas-table-setting_392895-40790.jpg?w=1060",
                price: "200",
                recipe: "Baked Chicken Festive Dinner"
            },
            {
                img: "https://img.freepik.com/premium-photo/grilled-chicken-served-with-vegetables_482257-24533.jpg?w=1060",
                price: "300",
                recipe: "Grilled Chicken with Vegetables"
            },
            {
                img: "https://img.freepik.com/premium-photo/chicken-nuggets-plate-souse-white-background-studio-shot_1048944-24322557.jpg?w=1060",
                price: "180",
                recipe: "Chicken Nuggets with Sauce"
            },
            {
                img: "https://img.freepik.com/premium-photo/sushi-set-with-salmon-tuna_482257-24535.jpg?w=1060",
                price: "400",
                recipe: "Salmon and Tuna Sushi Set"
            },
            {
                img: "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10658.jpg?t=st=1741674601~exp=1741678201~hmac=b7dc79f8cd7426fba275cbd7f0307506162d8f3c007fd89964e0af66915cb1cc&w=1060",
                price: "250",
                recipe: "Asian-Style Baked Chicken Wings"
            },
            {
                img: "https://img.freepik.com/premium-photo/fresh-diet-salad-bowl-isolated-white_70216-9274.jpg?w=1060",
                price: "120",
                recipe: "Fresh Vegetable Salad Bowl"
            }
        
        
    ];

    const purchase = (item) => {
        alert(`You have purchased the item for ₹${item.price} with recipe: ${item.recipe}`);
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {images.map((item, index) => (
                <div key={index} style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
                    <img src={item.img} alt={`Food item ${index + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                    <h2 style={{fontSize:"25px"}}>Price: ₹{item.price} </h2>
                    <p>{item.recipe}</p>
                    <NavLink to ={`/form`}>
                    <button onClick={() => purchase(item)} style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Buy Now</button>
                    </NavLink>
                </div>
            ))}
        </div>
    );
}

export default Food;
