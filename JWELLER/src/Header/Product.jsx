import React, { useState } from 'react';
import './Product.css';

const jewelryItems = [
  {
    id: 1,
    name: 'Gold Necklace',
    description: 'A stunning gold necklace perfect for any occasion.',
    price: '250',
    image: 'https://media.istockphoto.com/id/178568519/photo/wedding-gold-jewelry.webp?b=1&s=612x612&w=0&k=20&c=JpPTEpSk5KkreyNO4GBTHNDAtn1kWlgBtYAGwEp9xws=',
  },
  {
    id: 2,
    name: 'Diamond Ring',
    description: 'A beautiful diamond ring that sparkles with elegance.',
    price: '500',
    image: 'https://media.istockphoto.com/id/831124838/photo/jewelry-in-the-shop-window-gold-rings-with-diamonds-copy-space.jpg?s=612x612&w=0&k=20&c=7jf21UG51WrgPvtOQskIuuVWPQE3tUEqrWGswGexcxs=',
  },
  {
    id: 3,
    name: 'Silver Earrings',
    description: 'Elegant silver earrings that add a touch of class.',
    price: '100',
    image: 'https://media.istockphoto.com/id/618971536/photo/macro-jewelry.jpg?s=612x612&w=0&k=20&c=b_o2TWM9yoTPq6KQyDH1nhJnJdT4eal0m1BGRGqGH5w=',
  },
  {
    id: 4,
    name: 'Pearl Bracelet',
    description: 'A classic pearl bracelet for timeless beauty.',
    price: '150',
    image: 'https://media.istockphoto.com/id/489814234/photo/gold-silver-rings-and-chains.jpg?s=612x612&w=0&k=20&c=611jYpjTmic6U4ML16tFQ2dYf0iK-D7TuuW4xBOWHWM=',
  },
  {
    id: 5,
    name: 'Gold Bangle',
    description: 'A chic gold bangle for everyday wear.',
    price: '300',
    image: 'https://media.istockphoto.com/id/91836904/photo/pearl.jpg?s=612x612&w=0&k=20&c=P4ZabvSyeQ_LihFA6ijyPtFnZ0O6mO38kqTZzmhmR-4=',
  },
  {
    id: 6,
    name: 'Ruby Necklace',
    description: 'A luxurious ruby necklace that stands out.',
    price: '600',
    image: 'https://media.istockphoto.com/id/897188874/photo/jewelry-on-background.jpg?s=612x612&w=0&k=20&c=2PEu44EcX_JOWHs-iT65tTGAJ9zqWOcrC-9FSrI7BhE=',
  },
  {
    id: 7,
    name: 'Emerald Earrings',
    description: 'Beautiful emerald earrings for a pop of color.',
    price: '200',
    image: 'https://media.istockphoto.com/id/950416910/photo/earrings-of-gold-with-diamonds-and-amethyst.jpg?s=612x612&w=0&k=20&c=AYQPTBmp8qnqOK5tO6TAJayaikkP-2o9cH0M0rekros=',
  },
  {
    id: 8,
    name: 'Sapphire Ring',
    description: 'An exquisite sapphire ring for elegance.',
    price: '450',
    image: 'https://media.istockphoto.com/id/623421832/photo/gold-ring-earrings-and-chains.jpg?s=612x612&w=0&k=20&c=OYjVq0Q2SO2yVUC37P_lrkqU-K_gmC4cMYjxUIgG098=',
  },
  {
    id: 9,
    name: 'Opal Pendant',
    description: 'A mesmerizing opal pendant for charm.',
    price: '350',
    image: 'https://media.istockphoto.com/id/651574660/photo/raw-amethyst-rock-with-crystal-ametist.jpg?s=612x612&w=0&k=20&c=2PjtLRFbQmkzpRNa7U8FswCTxsnN5JSXGktEjqqp8mI=',
  },
  {
    id: 10,
    name: 'Turquoise Bracelet',
    description: 'A vibrant turquoise bracelet for style.',
    price: '175',
    image: 'https://media.istockphoto.com/id/1059697466/photo/fancy-designer-golden-bracelet-for-woman-fashion-gold-plated-jewelry-closeup-image-on-black.jpg?s=612x612&w=0&k=20&c=I6zqKfN6sS48RP9dKUTfobKsfJW8IT2-NTwxok1Mj9o=',
  },
  {
    id: 11,
    name: 'Amethyst Earrings',
    description: 'Stunning amethyst earrings for any event.',
    price: '220',
    image: 'https://media.istockphoto.com/id/1221765625/photo/earrings.jpg?s=612x612&w=0&k=20&c=cfV63L_zVMaxjaaBVRUfPGxO09wj7mbicX8oYKrKGiw=',
  },
  {
    id: 12,
    name: 'Citrine Necklace',
    description: 'A delightful citrine necklace for sunny days.',
    price: '380',
    image: 'https://media.istockphoto.com/id/1135998124/photo/earrings-ring-jewelry-diamonds-with-and-gemstone-emerald-ruby-and-sapphire.jpg?s=612x612&w=0&k=20&c=9VYV7Ci2bA7jz9sBZwzcBgp3VO0o8nTxkF3KEvXWbPc=',
  },
  {
    id: 13,
    name: 'Aquamarine Ring',
    description: 'A beautiful aquamarine ring with elegance.',
    price: '400',
    image: 'https://media.istockphoto.com/id/179711551/photo/the-beauty-wedding-ring.jpg?s=612x612&w=0&k=20&c=LhsNGLdCJeFS8lHZFPOEv97gGfc5xelBhtuygG0gN6c=',
  },
  {
    id: 14,
    name: 'Garnet Bracelet',
    description: 'A lovely garnet bracelet for a bold look.',
    price: '280',
    image: 'https://media.istockphoto.com/id/1543939335/photo/elegant-jewelry-set-jewellery-set-with-gemstones-jewelry-accessories-collage-product-still.jpg?s=612x612&w=0&k=20&c=9feWNcnRWrAAItZ7iq6dYPRV633dEoSCgt3tkQMC90o=',
  },
  {
    id: 15,
    name: 'Topaz Earrings',
    description: 'Dazzling topaz earrings for special occasions.',
    price: '240',
    image: 'https://media.istockphoto.com/id/618435430/photo/decorative-accessories.jpg?s=612x612&w=0&k=20&c=ITTNVRW5L0gTVQZkFjAr3hbtT4sFmR6p-pCHlAn2yQU=',
  },
  {
    id: 16,
    name: 'Peridot Necklace',
    description: 'A refreshing peridot necklace for everyday wear.',
    price: '320',
    image: 'https://media.istockphoto.com/id/491352312/photo/gold-earrings-and-pendant-in-shape-of-salamander.jpg?s=612x612&w=0&k=20&c=w_VaZHU1vE4rewfBgJFtNNTqix_epY9SeZdUKOi09R4=',
  },
  {
    id: 17,
    name: 'Jade Ring',
    description: 'A classic jade ring with an antique finish.',
    price: '430',
    image: 'https://media.istockphoto.com/id/469099714/photo/gold-necklace-with-gems-isolated.jpg?s=612x612&w=0&k=20&c=8bMr3HrAgWnD6YaXRf0ywjB-SHi51woMbJd3M-cu1AA=',
  },
  {
    id: 18,
    name: 'Onyx Bracelet',
    description: 'An elegant onyx bracelet for a sophisticated look.',
    price: '190',
    image: 'https://media.istockphoto.com/id/1304063320/photo/stylish-ornaments-for-sale-on-glass-shelves-of-bijouterie-boutique.jpg?s=612x612&w=0&k=20&c=3_xAO2I4Sw1DGuix7SEn9cKo5VjKqhLLdS-ym-xlbNY=',
  },
  {
    id: 19,
    name: 'Moonstone Earrings',
    description: 'Charming moonstone earrings for a magical appeal.',
    price: '260',
    image: 'https://media.istockphoto.com/id/494080812/photo/handmade-jewelry-bracelets.jpg?s=612x612&w=0&k=20&c=nwv2WW1Gv_qWy3EEgH_KNe5DY0jgX3v8fAZz2p2a4nQ=',
  },
  {
    id: 20,
    name: 'Tourmaline Necklace',
    description: 'A unique tourmaline necklace for a distinctive style.',
    price: '420',
    image: 'https://media.istockphoto.com/id/1457096183/photo/elegant-jewelry-set-jewellery-set-with-gemstones-jewelry-accessories-collage-product-still.jpg?s=612x612&w=0&k=20&c=s6z_MHWR8fmi2aVtlKfmXT3FStd3Hj4LHGs3cE-5B9A=',
  },
  {
    id: 21,
    name: 'Amber Ring',
    description: 'A warm amber ring for a natural look.',
    price: '210',
    image: 'https://media.istockphoto.com/id/1946072956/photo/a-selection-of-traditional-jewelry-and-ceramics-displayed-at-a-souk-vendor-in-tangier-morocco.jpg?s=612x612&w=0&k=20&c=QlHfYmBVsVJ0mnt3_FPBpLqNXGAcof03QfTxL3AGIbg=',
  },
  {
    id: 22,
    name: 'Lapis Earrings',
    description: 'Stunning lapis earrings for a royal appearance.',
    price: '230',
    image: 'https://media.istockphoto.com/id/467247910/photo/silver-earrings.jpg?s=612x612&w=0&k=20&c=j_0CoimiFfU2eZLWxQ4skcgKcQX5BicsOY2GcpBw56Q=',
  },
  {
    id: 23,
    name: 'Coral Bracelet',
    description: 'A vibrant coral bracelet for a fresh look.',
    price: '180',
    image: 'https://media.istockphoto.com/id/532413049/photo/ornaments-on-display-indian-handicrafts-fair-at-kolkata.jpg?s=612x612&w=0&k=20&c=0qi_HpJ_xWkMJnT7xn3sMk6_vtFoO3_pnZ0TBFz0mMQ=',
  },
  {
    id: 24,
    name: 'Jasper Necklace',
    description: 'A unique jasper necklace for a bold statement.',
    price: '390',
    image: 'https://media.istockphoto.com/id/1307395766/photo/image-of-bracelet-white-background.jpg?s=612x612&w=0&k=20&c=vIItBqPyKAz6fEqcpq7NRSSpR1PRaTnPV19-t1c8gTg=',
  }
];


function Product() {
  return (
    <div className="jewelry-section">
      <h2 className='Heading Tenor' style={{color:"#a8c059"}}>"Our Jewelry Product"</h2>
      <div className="jewelry-grid">
        {jewelryItems.map((item) => (
          <div key={item.id} className="jewelry-card">
            <img src={item.image} alt={item.name} className="jewelry-image" />
            <div className="jewelry-details">
              <h3 style={{color:"brown"}}>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">$ {item.price}</p>
              <a href="/add"><button className="add-to-cart">Add to Cart</button></a>
              
            </div>
          </div>
        ))}
      </div>
      <div className='more-item'>
      <a href="https://www.bluestone.com/jewellery/rings.html">
      <button className='Item'>More Item...</button>
      </a>
      </div>
    </div>
  );
}

export default Product;