import React from 'react';
import './Veg.css'
import Kidsfood from './Kidsfood'
const Middleitem = () => {
  const recipe = [
    { img: 'https://img.freepik.com/premium-photo/little-girl-with-hamburger-fizzy-drink-french-fries_88340-4512.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740' },
    { img: 'https://img.freepik.com/free-photo/little-cute-girl-eating-fast-food-sandwich-with-fries-orange-juice-cafe-fast-food-concept_169016-4719.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740' },
    { img: 'https://img.freepik.com/free-photo/kid-eating-burger-home_23-2148914532.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740' },
    { img: 'https://img.freepik.com/premium-photo/happy-children-pizzeria_236854-6998.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740' },
    { img: 'https://img.freepik.com/premium-photo/little-girl-eating-hamburger-outdoor-cafe_88340-4754.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740' },
    { img: 'https://img.freepik.com/free-photo/girls-eating-pizza_23-2148124853.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740' },
    { img: 'https://img.freepik.com/free-photo/medium-shot-friends-eating-fast-food-funny-way_23-2150347881.jpg?ga=GA1.1.1993347776.1743145076&semt=ais_hybrid&w=740' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="head fs-2 mt-5 italic p-2 " style={{ color: "#588157",backgroundColor:"#a3b18a" }}>
        Kid's Eating Junk Food
      </h1>      
      <div className="setup">
        {recipe.map((item, index) => (
          <div key={index} className="circle-img">
            <img 
              src={item.img} 
              alt={`recipe-${index}`} 
            />
          </div>
        ))}
      </div>
      <Kidsfood/>
    </div>
  );
};

export default Middleitem;
