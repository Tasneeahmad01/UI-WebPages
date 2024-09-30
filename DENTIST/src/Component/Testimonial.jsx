import React from 'react';
import './Testimonals.css';

const testimonials = [
  {
    name: "Alice Johnson",
    feedback: "The service was fantastic! I'm very happy with the results and will definitely return.",
    imgSrc: "https://media.istockphoto.com/id/172388456/photo/professional-and-friendly.webp?b=1&s=170667a&w=0&k=20&c=w8kvFhKsMMz7rkKNnZxEYiIWJk2SRJacT6e1DJcq_XQ=",
  },
  {
    name: "Bob Smith",
    feedback: "Great experience! The staff was friendly and professional.",
    imgSrc: "https://media.istockphoto.com/id/1147579064/photo/healthcare-and-medicine-concept.webp?b=1&s=170667a&w=0&k=20&c=oUJcMDWjfSvBmoxLCyP7afi5ZhKnvcaVPN2jqomv6iM=",
  },
  {
    name: "Charlie Brown",
    feedback: "I had an amazing experience. The team went above and beyond to ensure I was comfortable.",
    imgSrc: "https://media.istockphoto.com/id/1147578995/photo/healthcare-and-medicine-concept.webp?b=1&s=170667a&w=0&k=20&c=_mePU0YvZlHC-1FRZwhTyJzEyF2MF7KJ1na4_1DurPU=",
  },
  {
    name: "Charlie Brown",
    feedback: "I had an amazing experience. The team went above and beyond to ensure I was comfortable.",
    imgSrc: "https://media.istockphoto.com/id/1147580332/photo/healthcare-and-medicine-concept.webp?b=1&s=170667a&w=0&k=20&c=5hFHEY6XdqGqtZZthgQJnI9K57TsDOaIPYLp9l5sXS4=",
  },
  {
    name: "Charlie Brown",
    feedback: "I had an amazing experience. The team went above and beyond to ensure I was comfortable.",
    imgSrc: "https://media.istockphoto.com/id/1411381078/photo/portrait-of-young-male-nurse-in-hospital.webp?b=1&s=170667a&w=0&k=20&c=DPdfq20_Abb38kDFcPxxKRrO7I1Sa85xpky2aJG6AIo=",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <>
      <div className="main">
        <div className="middle">
          <span>TESTIMONIALS</span>
          <h1>What Members Are Saying</h1>
        </div>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) =>(
            <div key={index} className='testimonials-card'>
              <img src={testimonial.imgSrc} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <h5>{testimonial.feedback}</h5>
            </div>
          ))}
        </div>
      </div>
<h3 className='H3'>Services</h3>
      <table>
         <tbody>
        <tr>
          <td>Scaling and Polishing</td>
          <td>Consultation</td>
          <td>Cosmetic Dentistry</td>
        </tr>
        <tr>
          <td>Root Canal</td>
          <td>Braces</td>
          <td>Artificial Teeth</td>
        </tr>
        <tr>
          <td>Gum Surgery</td>
          <td>Dentures</td>
          <td>Extraction</td>
        </tr>
        <tr>
          <td>Dental Implants</td>
          <td>Veneers</td>
          <td>Bleaching</td>
        </tr>
        <tr>
          <td>Teeth Whitening</td>
          <td>Ceramic Crowns</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div>
      <h3 className='H3'>Timing</h3>
      <table>
         <tbody>
          <tr>
            <th>Day</th>
            <th>Time</th>
          </tr>
        <tr>
          <td>Monday</td>
          <td>08:00 AM - 05:00 PM</td>
          
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>08:00 AM - 05:00 PM</td>
          
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>08:00 AM - 05:00 PM</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>08:00 AM - 05:00 PM</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>08:00 AM - 02:00 PM</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td style={{color:"red", textAlign:"start"}}>Closed</td>
        </tr>
        <tr>
          <td>Saunday</td>
          <td>08:00 AM - 05:00 PM</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
}

export default Testimonials;
