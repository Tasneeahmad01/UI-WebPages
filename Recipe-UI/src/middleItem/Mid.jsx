import React from 'react';
import { NavLink } from 'react-router-dom';
import './Mid.css';

const items = [
  {
    img: 'https://img.freepik.com/free-photo/view-tasty-food-from-around-world_23-2151596620.jpg?t=st=1741494873~exp=1741498473~hmac=dcdc1bd96456ce0aa9bbe5859c88aafc7f7739f5dfe4dc11c5247a0b2ff72a24&w=740',
    name: 'Chicken Burger'
  },
  {
    img: 'https://img.freepik.com/premium-photo/delicious-pizza-top-view-closeup_162831-70.jpg?w=1060',
    name: 'Chicken Pizza'
  },
  {
    img: 'https://media.istockphoto.com/id/172182515/photo/french-fries.jpg?s=612x612&w=0&k=20&c=6ORQY2oLGw38CV88sX59ahdFFatNXVpMADPQJoNNKRk=',
    name: 'French Fry'
  }
];

const Mid = () => (
  <div className='container'>
    <div className='cards'>
      <h2>Best Delivered<br/><span>Categories</span></h2>
      <p>Here are some of our best distributed <br />categories. If you want, you can order <br />from here.</p>   
    </div>
    <div className='order'>
      {items.map(({ img, name }) => (
        <div className='order-item' key={name}>
          <img src={img} alt={name} />    
          <h2>{name}</h2>
          <NavLink to="/form">
          <button>Order Now <i className="fa-solid fa-angle-right"></i>
          </button>
          </NavLink>
        </div>
      ))}
    </div>
  </div>
);

export default Mid;
