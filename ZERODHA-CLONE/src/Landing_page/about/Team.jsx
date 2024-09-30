import React, { useState } from 'react';

function Team() {
  // State to manage the visibility of each person's bio
  const [showBio, setShowBio] = useState([false, false, false, false, false, false]);

   const toggleBio = (index) => {
    setShowBio(prevState =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  // Array of people with their image src and bio
  const people = [
    { 
      h5:"Nikhil Kamath",
      src: "https://zerodha.com/static/images/Nikhil.jpg", bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." ,
    p:"Co-founder & CFO"
    },
    {
      h5:"Dr.Kailash Nadh",
      src: "https://zerodha.com/static/images/Kailash.jpg",
     bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day." ,
      p:"CTO",
    },
    
    { 
      h5:"Venu Madhav",
      src: "https://zerodha.com/static/images/Venu.jpg",
     bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.", 
    p:"COO"
    },
    { 
      h5:"Hanan Delvi",
      src: "https://zerodha.com/static/images/Hanan.jpg",
     bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.",
     p:"CCO" 
    },
    {
      h5:"Seema Patil",
       src: "https://zerodha.com/static/images/Seema.jpg", bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
     p:"Director"  

    },
    {
     h5:"Karthik Rangappa", 
    src: "https://zerodha.com/static/images/karthik.jpg", bio: "Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography." ,
    p:"CTO"  
    }
  ];

  return (
    <>
        <div className="container">
        <div className="row mt-4">
          <h2 className="text-center hero-heading">People</h2>
        </div>
        <div className="row main-container mt-4">
         
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img src="https://zerodha.com/static/images/nithin-kamath.jpg" alt="" className="rounded-circle" style={{ width: "290px",marginLeft:"50%" }} />
            <h5 className="mt-3 text-center founder">Nitin Kamath</h5>
            <p className="founder fs-7 text-gray">Founder, CEO</p>
          </div>
  
          <div className="col-md-8 mt-5 lh-lg" style={{paddingLeft:"15%"}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br />hurdles he faced during his decade-long stint as a trader. Today, <br />Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee <br /> (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on 
          <a href="https://nithinkamath.me/" className="text-decoration-none"> Homepage</a> / <a href=""className="text-decoration-none">TradingQnA</a> / <a href=""className="text-decoration-none">Twitter</a></p>
          </div>
        </div>
{/* TEAMS IMG BIO */}
        <div className="row"style={{marginTop:"10%"}}>
          {people.map((person, index) => (
            <div key={index} className="col-md-4 d-flex flex-column align-items-center mb-5">
              <img
                src={person.src}
                alt={`Person ${index + 1}`}
                className="rounded-circle"
                style={{ width: '230px' }}
              />
              <h5 className="mt-4 fs-5">{person.h5}</h5>
              <p>{person.p}</p>
              <a href="#" style={{ color: "#666666" }} onClick={(e) => { e.preventDefault(); toggleBio(index); }}>
                Bio
                <i className="fa-solid fa-angle-down p-2"></i>
              </a>
              {showBio[index] && (
                <p className="p-4">
                  {person.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
