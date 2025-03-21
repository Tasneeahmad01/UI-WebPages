import React from 'react';
 

function Fetch(props) {
  
  return (
    
    <div
      className="card align-items-center"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "5px",
      }}
    >
      <img
        src={props.imgsrc}
        alt="Series Poster"
        className="card-img"
        style={{ width: "250px", height: "200px" }}
      />
      <div className="card_info">
        <span className="card_title">{props.title}</span>
        <h3 className="series-name">{props.name}</h3>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-dark">Watch Now</button>
        </a>
      </div>
      <br /><br />
      <div>
      <h1>Strat</h1>
      </div>
    </div>
   
  );
}

export default Fetch;
