import React from 'react';

const Testimonials = () => {
  return (
    <div className="container position-relative">
      {/* Background Image */}
      <img
        src="https://png.pngtree.com/background/20210709/original/pngtree-tech-line-background-simple-technology-business-picture-image_938267.jpg"
        alt="Background"
        style={{ width: '100%', height: '100vh', objectFit: 'cover', zIndex: '-1', position: 'absolute'}}
      />

      {/* Overlay Content */}
      <div className="text-center my-5" style={{ zIndex: '1', position: 'relative', color: 'white' }}>
        <h2 className="lh-lg mt-5">
          Join Thousands of Parents Who Trust <br /> MakerKids to Teach Their Children <br /> Real-World STEM Skills
        </h2>
        <span className="btn btn-warning mt-3 p-3" style={{ color: "#003566", backgroundColor: "#ffb703", border: "none" }}>
          Book a Free Trial Class
        </span>
      </div>

      {/* Carousel Section */}
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" style={{ zIndex: '1', position: 'relative' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center flex-wrap">
              {/* Card 1 */}
              <div className="card text-center p-4 mx-2" style={{ flex: '0 1 300px', margin: '10px' }}>
                <p className='lh-lg'>"Kids come in here not knowing what they can do and they leave with a phenomenal amount of self-confidence and capability."</p>
                <div className='d-flex gap-3'>
                  <img src="https://www.glee.co.uk/wp-content/uploads/2019/12/James-Smith-webprofile.jpg" alt="" style={{ width: "50px", borderRadius: "50%", height: "50px", objectFit: "cover" }} />
                  <h6 className='mt-3'>Road Fitzsimmons-Frey</h6>
                </div>
                <p className='border-bottom'>Parent</p>
                <div className="star-rating">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card text-center p-4 mx-2" style={{ flex: '0 1 300px', margin: '10px' }}>
                <p className='lh-lg'>"Kids come in here not knowing what they can do and they leave with a phenomenal amount of self-confidence and capability."</p>
                <div className='d-flex gap-3'>
                  <img src="https://www.glee.co.uk/wp-content/uploads/2019/12/James-Smith-webprofile.jpg" alt="" style={{ width: "50px", borderRadius: "50%", height: "50px", objectFit: "cover" }} />
                  <h6 className='mt-3'>John Doe</h6>
                </div>
                <p className='border-bottom'>Parent</p>
                <div className="star-rating">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card text-center p-4 mx-2" style={{ flex: '0 1 300px', margin: '10px' }}>
                <p className='lh-lg'>"Kids come in here not knowing what they can do and they leave with a phenomenal amount of self-confidence and capability."</p>
                <div className='d-flex gap-3'>
                  <img src="https://www.glee.co.uk/wp-content/uploads/2019/12/James-Smith-webprofile.jpg" alt="" style={{ width: "50px", borderRadius: "50%", height: "50px", objectFit: "cover" }} />
                  <h6 className='mt-3'>Jane Smith</h6>
                </div>
                <p className='border-bottom'>Parent</p>
                <div className="star-rating">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Additional carousel items would go here */}
        </div>

{/* Carousel Controls */}
<button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
      </div>
    </div>
  );
};

export default Testimonials;
