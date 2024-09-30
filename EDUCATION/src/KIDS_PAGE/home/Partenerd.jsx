import React from 'react';

function Partenerd() {
  return (
    <div className="container">
      <div className="row bg-white mt-5">
        <h2 className='mt-3 p-2 fw-bold text-center' style={{color:"#0023f3"}}>Partnered with the Best</h2>
        <h6 className='text-center text-muted fs-5 lh-lg'>
          Maker kids has partnered with world-class organizations to deliver <br />our exceptional programs.
        </h6>

        {/* Responsive image row */}
        <div className='d-flex flex-wrap justify-content-center align-items-center mt-5'>
          <div className="col-6 col-sm-4 col-md-2 text-center mb-3">
            <img 
              src="https://img.freepik.com/premium-photo/google-logo-is-shown-white-background_1315971-725.jpg?w=740" 
              alt="Google Logo" 
              style={{ width: "100%", maxWidth: "150px", height: "auto" }} 
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center mb-3">
            <img 
              src="https://www.shareicon.net/data/128x128/2017/06/22/887560_logo_512x512.png" 
              alt="Twitter Logo" 
              style={{ width: "100%", maxWidth: "150px", height: "auto" }} 
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center mb-3">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/020/190/468/non_2x/intel-logo-intel-icon-free-free-vector.jpg" 
              alt="Intel Logo" 
              style={{ width: "100%", maxWidth: "150px", height: "auto" }} 
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center mb-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/720px-Arduino_Logo.svg.png" 
              alt="Arduino Logo" 
              style={{ width: "100%", maxWidth: "100px", height: "auto" }} 
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center mb-3">
            <img 
              src="https://imageio.forbes.com/blogs-images/kateoflahertyuk/files/2019/06/firefox-logo-horizontal-lockup-1200x448.png?height=26&width=71&fit=bounds" 
              alt="Firefox Logo" 
              style={{ width: "100%", maxWidth: "150px", height: "auto" }} 
            />
          </div>
          <div className="col-6 col-sm-4 col-md-2 text-center mb-3">
            <img 
              src="https://developer.microsoft.com/_devcom/images/logo-ms-social.png" 
              alt="Microsoft Logo" 
              style={{ width: "100%", maxWidth: "150px", height: "auto" }} 
            />
          </div>
          {/* yaha se  */}
          <div className='container mt-5'>
  <div className='row justify-content-center bg-white'>
    <div className='col-lg-8 col-md-10 col-sm-12' style={{ backgroundColor: "#023e8a", borderRadius: "20px",width:"900px", height: "360px", padding: '0 25px' }}>
      <h1 className='mt-5 text-center' style={{ lineHeight: "60px", color: "#fff" }}>
        Try our Award-winning Virtual Programs <br />for Kids Ages 6-13 on Coding, Robotics <br /> and MineCraft for Free
      </h1>
      <div className="text-center">
        <button className='btn-warning p-3 m-4 fw-bold' style={{ borderRadius: "10px" }}>Book a Free Trial Class</button>
      </div>
    </div>
  </div>
</div>


          {/* tak */}
        </div>
        
      </div>
    </div>
  );
}

export default Partenerd;
