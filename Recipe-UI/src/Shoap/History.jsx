import React from 'react';
import Rating from './Rating'
const History = () => {
  const historyUser = [
    { img: 'https://img.freepik.com/free-photo/portrait-young-woman-courier-red-uniform-smiling_140725-151024.jpg', name: 'Alice Johnson', userId: 'A12345B8' },
    { img: 'https://img.freepik.com/free-photo/happy-female-courier-holding-parcel-showing-thumb-up_140725-151037.jpg', name: 'Emma Watson', userId: 'E34567F3' },
    { img: 'https://img.freepik.com/free-photo/front-view-female-courier-yellow-uniform-yellow-cape-holding-food-package-taking-selfie-pink-background-uniform-delivery-work-color-job_140725-34848.jpg?t=st=1741764112~exp=1741767712~hmac=fee4381229ff841d635295c01dabd9c2a0822b314e3c11d227e221f195fbdafc&w=1060', name: 'Grace Hall', userId: 'G56789H5' },
    { img: 'https://img.freepik.com/free-photo/female-delivery-worker-holding-paper-bag-smiling_140725-151039.jpg', name: 'Ivy Clark', userId: 'I78901J7' },
    { img: 'https://img.freepik.com/free-photo/young-woman-holding-parcel-box-delivery-concept_140725-151040.jpg', name: 'Sophia Brown', userId: 'S89012T7' },
    { img: 'https://img.freepik.com/free-photo/female-courier-smiling-holding-delivery-package_140725-151041.jpg', name: 'Olivia Grey', userId: 'O45678P3' },
    { img: 'https://img.freepik.com/free-photo/happy-delivery-woman-holding-food-package_140725-151042.jpg', name: 'Mia Green', userId: 'M23456N1' },
    { img: 'https://img.freepik.com/free-photo/portrait-happy-female-courier-red-uniform_140725-151043.jpg', name: 'Yara Grey', userId: 'Y56789Z3' },
    { img: 'https://img.freepik.com/free-photo/cheerful-delivery-woman-holding-box-showing-thumbs-up_140725-151044.jpg', name: 'Wendy Pink', userId: 'W34567X1' },
    { img: 'https://img.freepik.com/free-photo/female-courier-holding-delivery-bag-smiling_140725-151045.jpg', name: 'Quinn Violet', userId: 'Q67890R5' }
  ];

  return (
    <div className='history-container'>
      <h2 className='history-title'>Delivery Users History</h2>
      <div className='users'>
        {historyUser.map((user, index) => (
          <div key={index} className='user-card'>
            <img src={user.img || 'https://via.placeholder.com/50'} alt={user.name} />
            <h5>{user.name}</h5>
            <p>User ID: {user.userId}</p>
          </div>
        ))}
      </div>
      <Rating/>
    </div>
  );
}
export default History;  