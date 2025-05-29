import React from 'react';
import './index.css';
import Mid from './middleItem/Mid' 
import { NavLink } from 'react-router-dom';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_waGxF23cvFNZbvaL7PQhFrLnaLZZcDpgw&s',
  'https://c4.wallpaperflare.com/wallpaper/529/413/206/food-hamburger-fast-food-junk-food-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/443/406/532/5c1c925cd8929-wallpaper-preview.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimxUEKLJ851WU1Wo70zIowrOe1eAxwGHfdA&s',
  'https://img.freepik.com/premium-photo/top-view-seafood-mixed-grilled-such-as-fish-squid-prawns-mussels_43263-670.jpg?w=740',
  'https://img.freepik.com/premium-photo/delicious-seafood-with-spicy-sos-mediterranean-fine-cuisine_482257-24530.jpg?w=1060'
];
const stats = [
  { number: '24', text: 'Awesome seafood varieties available' },
  { number: '98KG', text: 'Seafood delivered this month' },
  { number: '162', text: 'Happy customers served' },
  { number: '3', text: 'Award-winning quality certifications' }
];

const products = [
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_waGxF23cvFNZbvaL7PQhFrLnaLZZcDpgw&s', title: 'Shrim Pizza', desc: 'Delicious grilled shrimp' },
  { img: 'https://c4.wallpaperflare.com/wallpaper/529/413/206/food-hamburger-fast-food-junk-food-wallpaper-preview.jpg', title: 'Butter Burger', desc: 'Fresh crab delight' },
  { img: 'https://c4.wallpaperflare.com/wallpaper/443/406/532/5c1c925cd8929-wallpaper-preview.jpg', title: 'Smoked Chilli Burger', desc: 'Smoked salmon slices' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimxUEKLJ851WU1Wo70zIowrOe1eAxwGHfdA&s', title: 'White Butter Sandwhich', desc: 'Spicy seafood mix' }
];

const HomePage = () => (
  <div>
    <header className="header">
      <h1>Seafood straight from the ocean</h1>
      <p>Delicious, fresh, and high-quality seafood delivered straight to your home.</p>
      <NavLink to="/form">
      <button>BUY NOW</button>
      </NavLink>
    </header>
    <section className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Seafood ${index + 1}`} />
      ))}
    </section>
    

    <section className="stats-section">
      {stats.map(({ number, text }) => (
        <div key={number}>
          <h2>{number}</h2>
          <p>{text}</p>
        </div>
      ))}
    </section>

    <section className="products-section">
      {products.map(({ img, title, desc }) => (
        <div key={title} className="product-card">
          <img src={img} alt={title} />
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      ))}
    </section>
 <Mid/>
  </div>
);

export default HomePage;
