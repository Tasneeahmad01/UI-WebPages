import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const HedLine = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center bg-white fs-5">
        <div style={{ fontFamily: "Open Sans, sans-serif",color:"#505050" }}> 
          <p>This is the official page where you can share all your queries, feedback, raise refund requests, or seek any other help that you may require to effectively use or enquire about BYKID'S learning programs.</p>
          <p>To raise a complaint, kindly refer to our <a href="" className=''>Complaints Resolution</a> page instead.</p>
          <p>Our dedicated team will check and address your questions within the next 24 hours. This is our promise!</p>
          <p>You will be assigned a ticket regarding the query that you raise. You can quote the same ticket number in case you call our helpline number for the same query. At BYKID'S, we strive to address and resolve issues in the shortest possible time and in the most seamless way. Every question you have is very valuable to us and our focus is to resolve it through this portal. Hence, we request you to route all your concerns through this official portal.</p>
        </div>
      </div>
    </div>
  );
};

export default HedLine;
