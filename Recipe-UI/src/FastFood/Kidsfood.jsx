import React, { useState } from 'react';
// import './Kidsfood.css';

const Kidsfood = () => {
    const [showAll, setShowAll] = useState(false);
    
  const Kidsimage = [
  {
    img: "https://sagourmetfoodco.com.au/wp-content/uploads/2021/07/SAGFC-Blog-1080-x720-Young-child-eating-junk-food.jpg",
    heading: "Kids Love Fast Food!",
    caption: "A happy child enjoying a delicious burger and fries – the ultimate fun meal."
  },
  {
    img: "https://img.freepik.com/premium-psd/fast-food-photography-png_946288-41555.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740",
    heading: "Pizza Time Delight",
    caption: "A little boy smiles wide with cheesy pizza in his hands – a bite of joy!"
  },
  {
    img: "https://img.freepik.com/premium-psd/fast-food-photography-png_1198941-24307.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740",
    heading: "Burger Feast Fun",
    caption: "Excited kids enjoying juicy burgers at a fast food table – pure happiness!"
  },
  {
    img: "https://img.freepik.com/premium-photo/cute-little-girl-eats-cake-sakotis-new-year-merry-christmas-background_73110-12649.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740",
    heading: "Fry-Day Celebration",
    caption: "Crispy fries and big smiles – a child's favorite snack combo!"
  },
  {
    img: "https://img.freepik.com/free-photo/high-angle-boy-pouring-milk-cereals_23-2148355222.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740",
    heading: "Tasty Treat Break",
    caption: "A young girl enjoying nuggets and ketchup – snack time is the best time."
  },
  {
    img: "https://img.freepik.com/free-photo/students-having-lunch-canteen_23-2149402918.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740",
    heading: "Fast Food Fun Day",
    caption: "Boys cheering with burgers and soda – fun-filled moments captured."
  },
  {
    img: "https://img.freepik.com/premium-photo/group-children-sit-eagerly-table-each-holding-plate-vegetable-snacks-that-they-helped_1106939-76585.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740",
    heading: "Smiles and Snacks",
    caption: "Child giggling with ketchup on cheeks – signs of a good meal!"
  },
  {
    img: "https://thumbs.dreamstime.com/b/happy-teenagers-together-eating-fast-food-junk-food-obesity-unhealthy-meal-concept-happy-teenagers-together-eating-fast-food-114742911.jpg",
    heading: "Cheesy Happiness",
    caption: "A mouthful of pizza and laughter – childhood favorites in a slice."
  },
  {
    img: " https://img.freepik.com/free-photo/medium-shot-girl-eating-fries_23-2148910414.jpg?semt=ais_hybrid&w=740",
    heading: "Snack Time Joy",
    caption: "Kids enjoying fast food outdoors – messy and magical moments."
  },
  {
    img: "https://img.freepik.com/free-photo/various-snack-fruit-oil-wooden-table_1252-627.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740",
    heading: "Lunchbox Fast Food",
    caption: "Burgers packed to go, but enjoyed with giggles in the park!"
  }
];

    const displayedImages = showAll ? Kidsimage : Kidsimage.slice(0, 4);

    return (
        <div className='Main-container'>
            {displayedImages.map((item, index) => (
                <div key={index} className="Card-container">
                    <img src={item.img} alt={item.heading} className="Card-image" />
                    <div className="Card-content">
                        <h2 className="Card-title">{item.heading}</h2>
                        <p className="Card-caption">{item.caption}</p>
                    </div>
                </div>
            ))}
            <button 
                className="btn btn-danger mt-3 p-2 fs-5" 
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Show Less" : "Show All"}
            </button>
        </div>
    );
}

export default Kidsfood;
