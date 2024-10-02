import React from 'react';
import './Project.css'
export default function Projects() {
  return (
    <div className='container p-3 mt-3'>
      <div className="row">
        {/* Left Column: Text Section */}
        <div className="col-lg-6 col-md-12 text-left">
          <h1 className='mt-2 fw-bold'style={{lineHeight:"4rem",fontSize:"40px",color:"#012a4a"}}>Brighten Your Child's <br /> Future with Real-world <br />STEM Skills</h1>
          <p className='fs-5'>
            Try our award-winning virtual programs for kids ages <br /> 6-13 on coding, robotics, and Minecraft for free.
          </p>
          <a href="#">
  <button 
    className='p-3 mt-4 text-white border-0 btn btn-primary' 
    style={{width: "40%", backgroundColor: "#003049",borderRadius:"10px"}}>
    Book a Free Trial Class
  </button>
</a>

        </div>

        {/* Right Column: Images Section */}
        <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center">
          {/* Top Image */}
          <img 
            src="https://theedvolution.com/wp-content/uploads/2020/11/shutterstock_1174707646-scaled-2560x1280.jpg" 
            alt="Top Image" 
            className='mb-1 mt-5' 
            style={{width:"80%",borderRadius:"20px"}} 
          />
          
          {/* Bottom Images */}
          <div className='d-flex justify-content-between w-100'>
            <img 
              src="https://media.istockphoto.com/id/653876434/photo/lovely-little-girl-holding-robot-at-school.jpg?s=612x612&w=0&k=20&c=jyR3_Gc-vWlzTZawP77g6A_DMJ-qoks3MTrVMHYV65o=" 
              alt="Item Image" 
              className='mb-3' 
              style={{width:"48%",borderRadius:"20px"}} 
            />
            <img 
              src="https://st4.depositphotos.com/13768208/39566/i/600/depositphotos_395662064-stock-photo-two-brothers-kids-playing-with.jpg" 
              alt="Item Image" 
              className='mb-3' 
              style={{width:"48%",borderRadius:"20px"}} 
            />
          </div> 
        </div>
        <div className="featured-section mt-5 text-center">
      <h1 className='text-center mt-5 fw-bold fs-2'style={{color:"#030450"}}>Featured By</h1>
      <div className="media-logos mt-5 mb-5">
        <img src="https://www.pngfind.com/pngs/m/38-387699_forbes-logo-png-forbes-logo-white-png-transparent.png" alt="Forbes" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHWye9YgX3IZhEcbJ4zvGM8_uQ9gFqkzyZw&s" alt="The Globe and Mail" />
        <img src="https://planswell.com/wp-content/uploads/2018/08/ctv_logo_color_flat-490x490-1.png" alt="CTV" />
        <img src="https://www.kindpng.com/picc/m/64-648436_wired-magazine-hd-png-download.png" alt="Wired" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mVYhAnZX8pfwSe4mK3GgONdMIRm1durQPTnCYhUwVHbo7gSHCReZiNgD-CAJNqV3t2c&usqp=CAU" alt="Today Parent" style={{backgroundColor:"blue"}}/>
      </div>
    </div>
      </div>
    </div>
  );
}
