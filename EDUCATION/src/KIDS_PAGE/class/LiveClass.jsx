import React from 'react';

function LiveClass() {
  return (
    <div className='container'>
      <div className="row mt-5 p-2" style={{ backgroundColor: "#F3F4F7" }}>
        <h2 className='text-center mb-5'>Students and parents love Codingal</h2>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center mb-4">
            <iframe 
              width="100%" 
              height="220" 
              src="https://www.youtube.com/embed/YIC967Fnb-U?si=V9ZaEetkwCboFAzd" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
            <h3>Lylia</h3>
            <p>Grade 5</p>
            <p>Codingal Student</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center mb-4">
            <iframe 
              width="100%" 
              height="220" 
              src="https://www.youtube.com/embed/fv9YUg4BcXU?si=tv5WG7RvUdUiRRT-" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
            <h3>Ummiya</h3>
            <p>Grade 4</p>
            <p>Codingal Student</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center mb-4">
            <iframe 
              width="100%" 
              height="220" 
              src="https://www.youtube.com/embed/fv9YUg4BcXU?si=tv5WG7RvUdUiRRT-" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
            <h3>Taniya</h3>
            <p>Grade 7</p>
            <p>Codingal Student</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="https://www.codingal.com/register/?course=coding&utm_medium=homepage-course-card">
            <button className='btn btn-warning p-3 fw-bold mt-3 mb-4' style={{ width: "250px" }}>Try a Free lesson</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LiveClass;
