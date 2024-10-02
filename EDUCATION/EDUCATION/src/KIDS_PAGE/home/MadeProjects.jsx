import React from 'react';

function MadeProject() {
  return (
    <div className='container p-4 mt-4'> {/* Adjusted margin-top here */}
      {/* Header Section */}
      <div className="row mt-5" style={{ backgroundColor: "#f6fff8", border: "3px solid #edede9", borderRadius: "30px", padding: '5px' }}>
        <h1 className='text-center mt-5 fw-bold' style={{ lineHeight: "4rem", color: "#00509d" }}>
          Join Thousands of Parents who Trust <br /> MakerKids to Teach Their Children <br /> Real-World STEM Skills
        </h1>

        {/* First Section: Coding */}
        <div className="col-lg-6 col-md-12">
          <h1 className='fw-bold' style={{ lineHeight: "3.5rem", color: "#023e8a" }}>
            Coding
          </h1>
          <p className='lh-lg'>
            Learning to code is one of the most valuable skills you can acquire in today’s digital age. It opens doors to a wide range of career opportunities in fields like software development, data science, artificial intelligence, and web development. Starting with the basics of programming languages such as Python, JavaScript, or HTML allows you to develop problem-solving and logical thinking skills. As you progress, you can build websites, mobile apps, and even complex systems. Coding fosters creativity, enabling you to turn ideas into reality. The best way to start learning is by practicing small projects and gradually tackling more advanced challenges.
          </p>
          <button className='p-3 mt-2 text-blue border-0 btn btn-primary fw-900' style={{ width: "50%", backgroundColor: "#ffb703", color: "#003566", borderRadius: "10px" }}>
            Book a Free Trial Class
          </button>
        </div>

        <div className="col-lg-6 col-md-12 text-center">
          <img 
            src="https://as2.ftcdn.net/v2/jpg/05/10/54/59/1000_F_510545953_2K6ODk3opReiepVcaWMufZ4diKCddmyF.jpg" 
            alt="Educational Activities" 
            style={{ width: '100%', borderRadius: '10px' }} 
            className="mb-5 mt-5"     
          />
        </div>

        {/* Second Section: Creative Thinking */}
        <div className="col-lg-6 col-md-12 text-center">
          <img 
            src="https://media.istockphoto.com/id/1280863302/photo/young-asian-teen-enjoy-with-toy-car-workshop.jpg?s=612x612&w=0&k=20&c=pnicRIKmDuHWqFG_NlQ1HvWOq30uVrmGzgZ2uat9TVU=" 
            alt="Educational Activities" 
            style={{ width: '100%', borderRadius: '10px' }} 
            className="mb-5 mt-5"     
          />
        </div>

        <div className="col-lg-6 col-md-12" style={{ paddingLeft: "50px" }}>
          <h1 className='mt-5 m-4 fw-bold' style={{ lineHeight: "3.5rem", color: "#023e8a" }}>
            Robotics
          </h1>
          <p className='lh-lg'>
            Robotics is an exciting field that combines engineering, computer science, and artificial intelligence to design and build robots capable of performing tasks autonomously or semi-autonomously. It involves programming robots to sense their environment, make decisions, and carry out actions to achieve specific goals. Robotics has applications in various industries, including manufacturing, healthcare, agriculture, and space exploration. Learning robotics equips you with skills in mechanical design, coding, electronics, and problem-solving.
          </p>
          <a href="https://aigolearning.org/ai-coding-class-for-kids/">
            <button className='p-3 mt-4 text-blue border-0 btn btn-primary fw-900' style={{ width: "50%", backgroundColor: "#ffb703", color: "#003566", borderRadius: "10px" }}>
              Book a Free Trial Class
            </button>
          </a>
        </div>

        {/* Third Section: Problem Solving */}
        <div className="col-lg-6 col-md-12">
          <h1 className='mt-5 m-4 fw-bold' style={{ lineHeight: "3.5rem", color: "#023e8a" }}>
            MineCrafts
          </h1>
          <p className='lh-lg'>
            Minecraft is a popular sandbox video game that allows players to explore and build in a blocky, procedurally generated 3D world. It combines creativity, survival, and adventure, offering endless possibilities. In Creative Mode, players have unlimited resources to build anything they can imagine, from simple houses to massive cities. In Survival Mode, players gather resources, craft tools, and build shelters while fending off monsters like zombies and creepers.
          </p>
          <button className='p-3 mt-4 text-blue border-0 btn btn-primary fw-900' style={{ width: "50%", backgroundColor: "#ffb703", color: "#003566", borderRadius: "10px" }}>
            Book a Free Trial Class
          </button>
        </div>

        <div className="col-lg-6 col-md-12 text-center">
          <img 
            src="https://www.shutterstock.com/shutterstock/photos/772350907/display_1500/stock-photo-thailand-december-the-young-asian-boy-is-creating-his-land-by-the-minecraft-creation-the-772350907.jpg" 
            alt="Educational Activities" 
            style={{ width: '90%', borderRadius: '10px' }} 
            className="mb-5 mt-5"     
          />
        </div>
      </div>
    </div>
  );
}

export default MadeProject;
