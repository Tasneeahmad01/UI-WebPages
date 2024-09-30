import React from 'react'
export default function Hero() {
  return (
    <div className='container p-5 mt-5 text-center'>
      <div className="row text-center ">
        <img src="https://zerodha.com/static/images/landing.png" alt="Item Image"  className='mb-5' style={{width:"90%"}}/>
        <h1 className='mt-5'>Invest in everything</h1>
        <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary p-2 mt-4 fs-5' style={{width:"20%" ,margin:"0 auto"}}>Signup Now</button>
      </div>  
    </div>
  )
}
