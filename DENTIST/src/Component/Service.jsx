import React from 'react';
import './Service.css'; 

const services = [
  {
    id: 1,
    title: "Teeth Cleaning",
    description: "Professional cleaning of teeth to remove plaque and tartar.",
    image: "https://media.istockphoto.com/id/1157958093/photo/girl-in-dental-office.webp?b=1&s=170667a&w=0&k=20&c=DjzZs_STT-NVYmD3VIvlUP1lJpzcbUAykR1ixUqqM9s=",
    link: "/teeth-cleaning"
  },
  {
    id: 2,
    title: "Tooth Filling",
    description: "Filling cavities and repairing minor tooth fractures.",
    image: "https://media.istockphoto.com/id/1274268020/photo/hygienist-examining-patient-with-dental-mirror-and-probe.jpg?s=612x612&w=0&k=20&c=HqGfCdUUkA_Kxp_05_9TkI8oPC-p-I70vecP3ge6n_k=",
    link: "/tooth-filling" 
  },
  {
    id: 3,
    title: "Braces & Aligners",
    description: "Orthodontic treatment to align and straighten teeth.",
    image: "https://media.istockphoto.com/id/1342074294/photo/unrecognizable-female-patient-holding-invisible-braces-or-trainer-panorama.webp?b=1&s=170667a&w=0&k=20&c=IJIV1Ld8XPFnQ0cAoa0jxgw93fr7kFgeFeD7xv7k1D8=",
    link: "/braces-aligners"  
  },
  {
    id: 4,
    title: "Laser Deep Cleaning",
    description: "High-class treatment in modern prestigious dental clinic provided by experienced dentists.",
    image: "https://media.istockphoto.com/id/1187341832/photo/high-class-treatment-in-prestigious-dental-clinic.jpg?s=612x612&w=0&k=20&c=nf35Ewxfl2KQGM0CFNeCMvD8w1yeUoKjkNEbeld0zRE=",
    link: "/laser-deep-cleaning"  
  },
  {
    id: 5,
    title: "Laser Gum & Surgery",
    description: "Patient looking in hand mirror while dentist removing tartar between her teeth assisted by nurse and dentist.",
    image: "https://media.istockphoto.com/id/1445836611/photo/female-undergoing-interdental-cleaning-procedure-performed-by-dental-hygienist.jpg?s=612x612&w=0&k=20&c=uejYR1Q0M1oGirvfLvM_kz8LJnEaeaPVR7E8Nrj5qEs=",
    link: "/laser-gum-surgery"  
  },
  {
    id: 6,
    title: "Laser Teeth Whitening",
    description: "Young woman female dentist in medical glasses and mask treating teeth of male & female patients.",
    image: "https://media.istockphoto.com/id/886879444/photo/professional-dentist-with-patient-in-hospital.jpg?s=612x612&w=0&k=20&c=QmNMrm9QneqQnf8AMwgEA6AXoQENZH3MjAYacChrDXg=",
    link: "/laser-teeth-whitening"  
  },
];

const Service = () => {
  return (
    <div className="dental-service">
      <hr style={{ marginTop: "20px" }} />
      <h4>Our Dental Services</h4>
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="https://www.hufriedygroup.com/en/best-in-practice-learning-hub"><button>Read More</button></a>
          </div>
        ))}
      </div>
      <div className="video-section">
        <iframe width="900" height="450" src="https://www.youtube.com/embed/-BYlU-GswYE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="author-bio-section-thumbnail" data-author-slug="yolanda-smith">
        <div className="authorImage">
          <img src="https://d2jx2rerrg6sh3.cloudfront.net/pics/team2/yolanda-smith.jpg" alt="Yolanda Smith" />
        </div>
        <div className="authorInfo">
          <p>Written by</p>
          <h3><a href="https://www.news-medical.net/medical/authors/yolanda-smith">Yolanda Smith</a></h3>
          <p>Yolanda graduated with a Bachelor of Pharmacy at the University of South Australia and has experience working in both Australia and Italy. She is passionate about how medicine, diet and lifestyle affect our health and enjoys helping people understand this. In her spare time she loves to explore the world and learn about new cultures and languages.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
