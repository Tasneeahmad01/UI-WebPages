import React from 'react';

const Team = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row align-items-center bg-white">
        <div className="col-lg-6 col-md-5">
          <img
            alt="Codingal teachers"
            src="https://fastly.codingal.com/images/locale-images/us/teachers/teachers1.png?auto=webp&amp;optimize=medium&amp;width=1080"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-md-7 text-center text-md-start">
          <h2 className='fw-bold fs-2' style={{color:"#000",lineHeight:"45px"}}>Learn coding from the <span style={{textDecoration:"underline",textDecorationColor:"orange"}}>experienced teachers. </span>Our hand-picked coding teachers ensure the best learning experience.</h2>
          
          <div className="row justify-content-center justify-content-md-start mb-4 bg-white">
  <div className="col-6 col-md-3 mt-2 mx-1" style={{ backgroundColor: "#FFEDEB",padding: "20px", textAlign: "center", flex: "1 1 0" }}>
    <h4 className="fs-bold" style={{color:"#000"}}>🎓 300+</h4>
    <p className='fw-700'>Graduate IT instructors from India</p>
  </div>
  <div className="col-6 col-md-3 mt-2 mx-1" style={{ backgroundColor: "#FFEDEB", padding: "20px", textAlign: "center", flex: "1 1 0" }}>
    <h4 className="fs-bold" style={{color:"#000"}}>👨‍💻 10+</h4>
    <p className='fw-700 fs-6'>Years coding experience</p>
  </div>
  <div className="col-6 col-md-3 mt-2 mx-1" style={{ backgroundColor: "#FFEDEB", padding: "20px", textAlign: "center", flex: "1 1 0" }}>
    <h4 className="fs-bold"style={{color:"#000"}}>👩 91%</h4>
    <p className='fw-700 fs-5'>Female teachers</p>
  </div>
  <div className="col-6 col-md-3 mt-2 mx-1" style={{ backgroundColor: "#FFEDEB",padding: "20px", textAlign: "center", flex: "1 1 0" }}>
    <h4 className="fs-bold" style={{color:"#000"}}>💻 10+</h4>
    <p className='fw-700 fs-5'>Coding languages</p>
  </div>
</div>

          <div className='gap-3 d-flex'>
          <button className="btn btn-lg mb-5" style={{border:"1px solid red"}}>see more reviews</button>
          <button className="btn btn-danger mb-5 btn-lg">Try a free lesson</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
