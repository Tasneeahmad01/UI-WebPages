import React from 'react';

function RequestPage() {
  return (
    <div className='container  mt-3 '>
      <div className="row bg-white">
        {/* Left Column: Image Section */}
        <div className="col-lg-6 col-md-12 text-center">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/015/449/979/non_2x/internet-cafe-of-young-people-playing-games-workplace-use-a-laptop-talking-and-drinking-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg" 
            alt="Educational Activities" 
            style={{ width: '150%', }}
            className="img-fluid mb-5"     
          />
        </div>
        
        {/* Right Column: Text Section */}
        <div className="col-lg-6 col-md-12">
          <h2 className='mt-5 m-4 fs-2 fw-bold'style={{lineHeight:"3.5rem",color:"#023e8a"}}>
            Give Your Child the Chance to Become an Innovator, Innovator on the Entrepreneur of Tomorrow
          </h2>
          <p className='lh-lg'>
            Some of the world's greatest innovators like Steve Jobs, Bill Gates, and Elon Musk were exposed to technology while they were kids.
          </p>
          <p className='lh-lg'>
            A positive exposure to STEM can have a tremendous impact on your child's future. Studies show that kids decide as early as age 7 whether they will even consider a career in STEM. Our expert facilities help foster the positive experiences that allow children to delve deeper into the world of science, technology, engineering, and mathematics as they grow older.
          </p>
          <button className='p-3 mt-4 text-white border-0 btn btn-primary' style={{width: "40%", backgroundColor: "#003049",borderRadius:"10px"}}>Book a Free Trial Class</button>
        </div>
      </div>
    </div>
  );
}

export default RequestPage;
