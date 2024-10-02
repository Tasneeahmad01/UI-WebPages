import React from 'react';

function CodingClass() {
  return (
    <div className='container mt-5 p-4' >
      <div className="row" style={{backgroundColor:"#f6fff8"}}>
        {/* Left Column: Text Section */}
        <div className="col-lg-6 col-md-12">
          <h2 className='mt-5 m-4 fs-2 fw-bold' style={{ lineHeight: "3.5rem", color: "#023e8a" }}>
            We're Not Just Another Coding Class for Kids
          </h2>
          <p className='lh-lg'>
            Each Makerkids class is embedded with lessons that help <br />your child develop confidence, social skills, resilience <br />and a love for technology.
          </p>
          
          <button className='p-3 mt-4 text-blue border-0 btn btn-primary fw-900' style={{ width: "40%", backgroundColor: "#ffb703", color: "#003566", borderRadius: "10px" }}>
            Book a Free Trial Class
          </button>
        </div>
        
        {/* Right Column: Image Section */}
        <div className="col-lg-6 col-md-12 text-center">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/013/999/621/non_2x/a-boy-chatting-with-his-friends-on-computer-free-vector.jpg" 
            alt="Educational Activities" 
            style={{ width: '80%',borderRadius:'10px' }} 
            className="mb-5 mt-5"     
          />
        </div>
      </div>
    </div>
  );
}

export default CodingClass;
