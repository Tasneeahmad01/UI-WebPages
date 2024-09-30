import React, { useState } from 'react';
import './Gallery.css';

const jewelryItems = [
  {
    id: 1,
    name: 'Crystal Choker',
    description: 'A delicate crystal choker that shines in the light.',
    price: '120',
    image: 'https://media.istockphoto.com/id/636469136/photo/fashion-diamond-pendant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=VbM-CD1u7JzMlTmvfi3MA4peDStG7f9jmq4ZpnzsPZM=',
  },
  {
    id: 2,
    name: 'Obsidian Band',
    description: 'An elegant obsidian band ring for a bold statement.',
    price: '250',
    image: 'https://media.istockphoto.com/id/466385662/photo/rock-crystal.jpg?s=612x612&w=0&k=20&c=4Xx-zgc3aW6lODyLamI3xUEI_S01eg432LdFC5qpUQY=',
  },
  {
    id: 3,
    name: 'Amber Pendant',
    description: 'A warm amber pendant that adds a touch of elegance.',
    price: '175',
    image: 'https://media.istockphoto.com/id/179543584/photo/indian-style-jewelry-set-necklace-and-earrings.jpg?s=612x612&w=0&k=20&c=1C3vJfuxvJF8GMUiqDwCM5HWQvBwZwP15Vu5-hN_K8A=',
  },
  {
    id: 4,
    name: 'Sapphire Studs',
    description: 'Chic sapphire studs to brighten any outfit.',
    price: '300',
    image: 'https://media.istockphoto.com/id/1046434684/photo/bracelet-with-charms-selective-focus-beauty-and-fashion.jpg?s=612x612&w=0&k=20&c=6RYfI8FAOqIQJWe3UrAe-KppRGwHuxHtGt-wMaiiSDE=',
  },
  {
    id: 5,
    name: 'Garnet Bracelet',
    description: 'A vibrant garnet bracelet for a fresh look.',
    price: '180',
    image: 'https://media.istockphoto.com/id/1472742513/photo/elegant-jewelry-set-jewellery-set-with-gemstones-jewelry-accessories-collage-product-still.jpg?s=612x612&w=0&k=20&c=2Hm9iEzT3s66bSImVBxop0_rJRnwiJF5i1Lx7J4EY8U=',
  },
  // Add more items if needed
];

const JewelrySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="jewelry-section">
      <h2 className="Heading Tenor" style={{ color: "#a8c059"}}>"Jewelry Gallery"</h2>
      <div className="jewelry-grid">
        {jewelryItems.map((item) => (
          <div key={item.id} className="jewelry-card">
            <img
              src={item.image}
              alt={item.name}
              className="jewelry-image"
              onClick={() => handleImageClick(item)}
            />
            <div className="jewelry-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">&#8377; {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="modal-image"
            />
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <p className="price">&#8377; {selectedItem.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JewelrySection;
