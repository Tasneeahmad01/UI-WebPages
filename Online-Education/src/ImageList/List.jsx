import React, { useState } from 'react';

const List = ({ people }) => {
  const [clickedImage, setClickedImage] = useState('');

  const show = (newImage) => {
    setClickedImage(newImage);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className='containers'>
            <img src={image} alt={name} className='img' onClick={() => show(image)} />
            <div className='d-flex gap-5'>
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
          </div>
        );
      })}

      {clickedImage && (
        <div className='popup'>
          <img src={clickedImage} alt='Clicked' />
        </div>
      )}
    </>
  );
};

export default List;
