import React from 'react';
import './Service.css'; // You can link to an external CSS file if needed

const servicesData = [
  {
    title: 'Web Development',
    description: 'Build and maintain websites using modern technologies like HTML, CSS, JavaScript, and React.',
    icon: '🌐'
  },
  {
    title: 'Mobile App Development',
    description: 'Develop mobile applications for Android and iOS platforms using React Native and Flutter.',
    icon: '📱'
  },
  {
    title: 'Backend Development',
    description: 'Create secure and scalable server-side applications using Node.js, Express, and databases like MongoDB.',
    icon: '💻'
  },
  {
    title: 'Data Science',
    description: 'Analyze and interpret complex data using Python, R, and machine learning libraries.',
    icon: '📊'
  },
  {
    title: 'Cloud Computing',
    description: 'Leverage cloud services like AWS, Azure, and Google Cloud to build scalable and cost-effective solutions.',
    icon: '☁️'
  },
  {
    title: 'Cybersecurity',
    description: 'Implement security measures to protect your applications from cyber threats and vulnerabilities.',
    icon: '🔐'
  },
  {
    title: 'DevOps',
    description: 'Automate and streamline the software development lifecycle using CI/CD, Docker, and Kubernetes.',
    icon: '🚀'
  },
  {
    title: 'Blockchain Development',
    description: 'Develop decentralized applications and smart contracts using blockchain technologies like Ethereum.',
    icon: '⛓️'
  },
  
];

const Service = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our Programming Services</h2>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
