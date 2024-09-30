import React from 'react';
import './Choose.css';

const teamMembers = [
  {
    name: "Dr. John Doe",
    position: "Lead Dentist",
    bio: "Dr. John Doe has over 20 years of experience in general and cosmetic dentistry. He is committed to providing the highest quality dental care and improving the smiles of his patients.",
    imgSrc: "https://media.istockphoto.com/id/183823722/photo/doctor-writing-orders.webp?b=1&s=170667a&w=0&k=20&c=qPy9ah6V_4Jh221BARJIpDqH9EZeTxQB7AeJiTR9u7Y="
  },
  {
    name: "Dr. Jane Smith",
    position: "Orthodontist",
    bio: "Dr. Jane Smith specializes in orthodontics and has a passion for creating beautiful, straight smiles. She uses the latest technology to provide effective and comfortable treatment.",
    imgSrc: "https://media.istockphoto.com/id/497375631/photo/smiling-dentist.webp?b=1&s=170667a&w=0&k=20&c=I7mz8vGh-tcJIpmsw1JpvTtx_WAXN3WjWbVcI8maBjE="
  },
  {
    name: "Dr. Emily Brown",
    position: "Periodontist",
    bio: "Dr. Emily Brown focuses on the prevention and treatment of gum disease. Her expertise helps in maintaining overall oral health and preventing serious dental issues.",
    imgSrc: "https://media.istockphoto.com/id/494237577/photo/dentist-with-patient.webp?b=1&s=170667a&w=0&k=20&c=uMIspBBcITdvqS3urDrzbf4a_u04yvqlVdD0aaxpRk4="
  },
  {
    name: "Dr. Michael Lee",
    position: "Oral Surgeon",
    bio: "Dr. Michael Lee is skilled in performing complex oral surgeries. He provides comprehensive care for patients requiring surgical intervention.",
    imgSrc: "https://media.istockphoto.com/id/465157650/photo/dentist-surgery.webp?b=1&s=170667a&w=0&k=20&c=vCqV8Z0zlhI9ynuvpV306ulEVNN8xMm9UA-beeKFRXc="
  },
  {
    name: "Dr. Lisa White",
    position: "Pediatric Dentist",
    bio: "Dr. Lisa White specializes in pediatric dentistry, offering gentle and caring treatment for children and adolescents.",
    imgSrc: "https://media.istockphoto.com/id/672576136/photo/portrait-of-female-dentist-she-standing-at-her-office-and-she-has-beautiful-smile.webp?b=1&s=170667a&w=0&k=20&c=FOnjefgzcaF0f-dpwm1fo6MMy99ZsAyRlCQt7PslC24="
  },
  {
    name: "Dr. David Green",
    position: "Prosthodontist",
    bio: "Dr. David Green is an expert in the restoration and replacement of teeth. He works with dental prosthetics to enhance patients' smiles.",
    imgSrc: "https://media.istockphoto.com/id/1050706756/photo/portrait-of-male-dentist.jpg?s=612x612&w=0&k=20&c=vEBeEBu1VRQs3P86sjzAfJAfNag0twcbOVgf_jI7blE="
  },
  
];

const ChooseUs = () => {
  return (
    <div className="choose-us">
      <header className="about-header">
        <h1>Choose Treatment Dr.</h1>
        <p>Welcome to our dental practice! We are dedicated to providing exceptional dental care to our patients.<br/> Meet our skilled team and learn more about our services.<br/>
In English
Preventive dentistry is dental care that helps to maintain good oral health.
        </p>
      </header>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.imgSrc} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <h2 style={{textAlign:"center"}}>Our Services</h2>
      <section className="services-section">
        <ul>
          <li>General Dentistry</li>
          <li>Cosmetic Dentistry</li>
          <li>Orthodontics</li>
          <li>Teeth Whitening</li>
          <li>Preventive Care</li>
          <li>Implant Dentistry</li>
          <li>Sedation Dentistry</li>
          <li>Gum Disease Treatment</li>
          <li>Emergency Dental Care</li>
        </ul>
        <ul>
          <li>General Dentistry</li>
          <li>Cosmetic Dentistry</li>
          <li>Orthodontics</li>
          <li>Teeth Whitening</li>
          <li>Preventive Care</li>
          <li>Implant Dentistry</li>
          <li>Sedation Dentistry</li>
          <li>Gum Disease Treatment</li>
          <li>Emergency Dental Care</li>
        </ul>
        <ul>
          <li>General Dentistry</li>
          <li>Cosmetic Dentistry</li>
          <li>Orthodontics</li>
          <li>Teeth Whitening</li>
          <li>Preventive Care</li>
          <li>Implant Dentistry</li>
          <li>Sedation Dentistry</li>
          <li>Gum Disease Treatment</li>
          <li>Emergency Dental Care</li>
        </ul>
      </section>
    </div>
  );
}

export default ChooseUs;
