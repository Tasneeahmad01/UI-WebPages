import React from 'react';


const Reviews = () => {
  const products = [
    {
      img: "https://static.ffx.io/images/$zoom_0.252%2C$multiply_0.3492%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/bf745fec280e15aa4258fc892037533bb4e46fa0",
      title: "This freshly hatted restaurant is exciting and delicious, but there’s one missing ingredient",
      descrip: "This opening from last spring is flying way under the radar. And we’re the ones losing out."
    },
    {
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Delicious Italian Pasta with a twist of herbs and cheese",
      descrip: "Authentic pasta with rich tomato sauce, fresh basil, and melted parmesan cheese served hot."
    },
    {
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      title: "Tasty Burger with crispy fries and a fresh salad",
      descrip: "Juicy burger served with golden fries and a refreshing side salad, making it a perfect combo meal."
    },
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
      title: "Refreshing Fruit Salad with honey and nuts",
      descrip: "A healthy fruit salad drizzled with honey and topped with crunchy nuts for added texture and flavor."
    },
    {
      img: "https://images.pexels.com/photos/1619025/pexels-photo-1619025.jpeg",
      title: "Traditional Pizza with loaded cheese and herbs",
      descrip: "A mouth-watering pizza topped with mozzarella cheese, fresh herbs, and a blend of spices."
    },
    {
      img: "https://images.pexels.com/photos/3681640/pexels-photo-3681640.jpeg",
      title: "Chocolate Dessert with cream and cherries on top",
      descrip: "Rich chocolate cake layered with whipped cream and topped with cherries, perfect for sweet cravings."
    },
    {
      img: "https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg",
      title: "Steak with sautéed veggies and butter sauce",
      descrip: "Grilled steak served with sautéed vegetables and a side of creamy butter sauce for extra flavor."
    },
    {
      img: "https://images.pexels.com/photos/1171170/pexels-photo-1171170.jpeg",
      title: "Homemade Pancakes with maple syrup and fruits",
      descrip: "Fluffy pancakes topped with fresh fruits and drizzled with maple syrup, making it a delightful breakfast."
    },
    {
      img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      title: "Exotic Sushi Platter with wasabi and soy sauce",
      descrip: "Fresh sushi rolls served with spicy wasabi, tangy soy sauce, and pickled ginger slices."
    }
  ];

  return (
    <div className="reviews-container">
      <h1 className="title">Reviews</h1>
      <div className="reviews-wrapper">
        {products.map((item, index) => (
          <div key={index} className="review-card">
            <img src={item.img} alt={item.title} className="review-img" />
            <div className="review-content">
              <h5 className="review-title">{item.title}</h5>
              <p className="review-descrip">{item.descrip}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='text-center btn btn-danger'>Show more</button>
    </div>
  );
};

export default Reviews;
