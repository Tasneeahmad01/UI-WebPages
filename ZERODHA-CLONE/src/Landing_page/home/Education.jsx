import React from 'react'

function Education() {
  return (
    <div className='container'>
      <div className="row">
     <div className="col-6">
     <a href="">
    <img src="https://zerodha.com/static/images/index-education.svg" alt="" className="mt-5"/>
    </a>
     </div>
     <div className="col-6">
      <h3 className='mt-5' style={{color:"#666666"}}>Free and open market education</h3>
      <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
      <a href="https://zerodha.com/varsity/" className='text-decoration-none fw-bold'>Versity &nbsp;<i className="fa-solid fa-arrow-right-long pr-5"></i></a>
      <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
      <a href="https://zerodha.com/varsity/" className='text-decoration-none fw-bold'>TradingQ&A &nbsp;<i className="fa-solid fa-arrow-right-long pr-5"></i></a>
     </div>
      </div>
      
    </div>
    
   
  );
}

export default Education