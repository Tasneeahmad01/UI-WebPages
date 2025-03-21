import React from 'react';
import './Chicke.css'
const UserRecipe = () => {
  const recipe = [
    { img: 'https://i.guim.co.uk/img/media/68a706e616cce073b03b8009e5425cc59e9e703d/0_705_2792_2416/master/2792.jpg?width=465&dpr=1&s=none&crop=none' },
    { img: 'https://media.istockphoto.com/id/1457876584/photo/portrait-of-a-young-woman-cooking-food-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=JKFlovKfUNGtug_n5GOfCsq3_7IUBNVzhF34egX_mDQ=' },
    { img: 'https://www.shutterstock.com/image-photo/smiling-young-woman-apron-stand-260nw-1660546072.jpg' },
    { img: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg' },
    { img: 'https://www.shutterstock.com/image-photo/smiling-young-attractive-woman-cooking-260nw-1708181929.jpg' },
    { img: 'https://www.shutterstock.com/shutterstock/photos/1930302533/display_1500/stock-photo-professional-beautiful-happy-young-woman-is-blogging-for-her-kitchen-channel-about-healthy-living-1930302533.jpg' },
    { img: 'https://cdn2.stylecraze.com/wp-content/uploads/2014/09/15-Easy-Indian-Vegetarian-Dinner-Recipes-You-Will-Love.jpg.webp' },
    { img: 'https://img.etimg.com/thumb/113933858/113933858.jpg?height=746&width=420&resizemode=76&imgsize=1480105' }
  ];
  return (
    <div >
      <h2 className='text-center mt-5 mb-4'>Recipes Yuser</h2>
      <div className='setup'>
      {recipe.map((item, index) => (
        <div key={index} className='recipe'>
          <img 
            src={item.img} 
            alt={`recipe-${index}`} 
           
          />
        </div>
       
      ))}
       </div>
    </div>
  );
};

export default UserRecipe;
