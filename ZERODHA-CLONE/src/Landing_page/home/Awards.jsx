import React from 'react';

function Awards() {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-md-5">
          <img src="https://www.acnnewswire.com/topimg/650.jpg" alt="Awards" className="img-fluid" />
        </div>
        <div className="col-md-6 ms-md-5 mt-5">  
          <h1>Largest Stock Broker in India</h1> 
          <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>  
          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Stocks</p></li>
                <li><p>Mutual Funds</p></li> 
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>Bonds</p></li>
                <li><p>Commodities</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>
          </div>
          <a href="https://zerodha.com/media" ><img className='mt-5' src="https://zerodha.com/static/images/press-logos.png" style={{width:"90%",padding:"0 auto", height:"50px"}}/></a>
        </div>
      </div>    
    </div>
  );
}

export default Awards;
