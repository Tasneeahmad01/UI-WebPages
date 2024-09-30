import React from 'react';
import './CardImage.css';

const Card = ({ image, title, gradeRange, activities, lessons, duration, description, outcomes }) => {
  return (
    <div className="card"> 
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body p-2"> {/* Reduced padding */}
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-1"> {/* Reduced margin-bottom */}
          <span className="info "><i class="fa-solid fa-graduation-cap p-1" style={{color:"#FF5A43",fontSize:"15px"}}></i>{gradeRange}</span>
          <span className="info "><i class="fa-regular fa-file p-1" style={{color:"#FF5A43",fontSize:"15px"}}></i>{activities}</span>
          <span className="info "><i class="fa-solid fa-book-open p-1" style={{color:"#FF5A43",fontSize:"15px"}}></i>{lessons}</span>
          <span className="info "><i class="fa-regular fa-clock p-1" style={{color:"#FF5A43",fontSize:"15px"}}></i>{duration} months</span>
        </p>
        <p className="description mb-1">{description}</p> {/* Reduced margin-bottom */}
        <h6 className="mb-1 mt-3 learn">Learning Outcomes:</h6> 
        <ul className="learning-outcomes list-unstyled mt-1">
          {outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
        <a className="download text-center">Download Curriculum <i className="fa-solid fa-download"></i></a>
        <a href="https://www.codingal.com/register/?course=coding&utm_medium=homepage-course-card" className='free fw-bold mt-1 mb-2'>Try a Free lesson</a> 
      </div>
    </div>
  );
};

export default Card;
