import React from 'react';

const Classes = () => {
  return (
    <div className="features-section text-center py-5">
      <h2 className='mt-3 m-4 fs-2 fw-bold' style={{ color: "#023e8a" }}>
        Project-Based Curriculum, Live Classes <br />& Real-Time Instruction
      </h2>
      <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
        Our virtual classes will have your kid engaged for hours, even after the session ends. Kids and parents love us. <br />
        Here's what makes the difference:
      </p>

      <div className="container px-5 ">  
        <div className="row mt-4 bg-white justify-content-center g-4">
          {/* Expert facilitators */}
          <div className="col-md-4 d-flex flex-column align-items-center "style={{width:"250px",height:"250px",paddingInline:"20px",backgroundColor:"#f6fff8"}}>
            <div className="feature-icon mb-2">
              <img src="https://static.vecteezy.com/system/resources/previews/043/212/849/non_2x/a-group-of-individuals-standing-together-within-a-circular-formation-create-a-minimalist-emblem-symbolizing-friendliness-and-comfort-free-vector.jpg" alt="Expert Facilitators" 
              style={{width:"60px",borderRadius:"50%"}}/>
            </div>
            <h5 className='fw-bold'>Expert facilitators</h5>
            <p className="text-center lh-lg text-muted mt-2"style={{ fontSize: "12px"}}>
              Maker Mentors fuel and hone your kid's natural ability, guiding them further in the world of STEM. They help your child develop logical thinking, not just a set of commands.
            </p>
          </div>

          {/* Personalized classes */}
          <div className="col-md-4 d-flex flex-column align-items-center mx-3"style={{backgroundColor:"#f6fff8",width:"250px",height:"250px",paddingInline:"20px"}}>
            <div className="feature-icon mb-3">
              <img src="https://as2.ftcdn.net/v2/jpg/04/22/02/09/1000_F_422020964_bBMHLYH8J15xkvG2PVG4CqtmmototpBL.jpg" alt="Personalized Classes" style={{width:"150px",borderRadius:"50%"}}/>
            </div>
            <h5 className='fw-bold'>Personalized classes</h5>
            <p className="text-center lh-lg text-muted mt-2"style={{ fontSize: "12px"}}>
              Instructor-led, personalized virtual classes that keep kids motivated and inspired to build new coding skills every week.
            </p>
          </div>

          {/* Engaging curriculum */}
          <div className="col-md-4 d-flex flex-column align-items-center "style={{backgroundColor:"#f6fff8",width:"250px",height:"250px",paddingInline:"20px"}}>
            <div className="feature-icon mb-3" >
              <img src="https://as2.ftcdn.net/v2/jpg/06/78/04/79/1000_F_678047982_tLaN0zRs7SG6Kkx7T5I4K8nAsh5ZiDdo.jpg" alt="Engaging Curriculum" style={{width:"90px",borderRadius:"50%"}}/>
            </div>
            <h5 className='fw-bold'>Engaging curriculum</h5>
            <p className="text-center lh-lg text-muted mt-2" style={{ fontSize: "12px" }}>
              Regardless of their experience level, our classes will help your child navigate and thrive in the digital <br />world with confidence and skill.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
