import React from 'react';
import './Add.css';

function Add() {
  const item = {
    image: 'https://media.istockphoto.com/id/178568519/photo/wedding-gold-jewelry.webp?b=1&s=612x612&w=0&k=20&c=JpPTEpSk5KkreyNO4GBTHNDAtn1kWlgBtYAGwEp9xws=',
    name: 'Gold Necklace',
    price: 350
  };

  return (
    <div className="container">
      <div className="card">
        <img src={item.image} alt={item.name} className="card-img" />
        <div className="card-content">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-price">&#8377;{item.price}</p>
          <button className="card-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Add;
