import React from "react";

const Rating = () => {
  const starRatings = [5, 4, 3, 2, 1];

  return (
    <div className="rating-container">
      <div className="left-section">
        <h4>Customer review</h4>
        <div className="d-flex align-items-center">
          {[...Array(3)].map((_, i) => <span key={i} className="fa fa-star checked"></span>)}
          <span className="fa fa-star-half"></span>
          <p style={{ marginLeft: "10px" }}>4.7 out of 5</p>
        </div>
        <p>3 global ratings</p>

        {starRatings.map((star, index) => (
          <div key={index} className="rating-row">
            <span>{star} star</span>
            <progress value={star === 5 ? 67 : star === 4 ? 33 : 0} max="100"></progress>
            <span>{star === 5 ? "67%" : star === 4 ? "33%" : "0%"}</span>
          </div>
        ))}
        <hr />

        <h5>Review this product</h5>
        <p>Share your thoughts with other customers</p>
        <button className="Btn">Write a product review</button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h6>Top reviews from India</h6>
        <p className="part">There are 0 reviews and 0 ratings from India</p>

        <h5>Top reviews from other countries</h5>
        <div className="review">
          <i className="fa-solid fa-user-tie"></i>
          <span>MVT</span>
        </div>
        <p>
          <strong>
            {[...Array(3)].map((_, i) => <span key={i} className="fa fa-star checked"></span>)}
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </strong> It is great. Gives all types of templates for timelines etc.
        </p>
        <p>Reviewed in the United States on 23 September 2015</p>
        <p><strong>Verified Purchase</strong></p>
        <p>It is great. Gives all types of templates for timelines etc. I use it weekly in my classroom.</p>
        <p><a href="#">Report</a></p>
      </div>
    </div>
  );
};

export default Rating;
