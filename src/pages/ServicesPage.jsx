import React from 'react';
import './ServicesPage.css';

const services = [
  {
    title: 'Hair Styling',
    description: 'Our expert stylists provide a variety of haircuts and styles to suit your preferences, using the latest trends and techniques.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CpR8TL2VMbitV9CP_qd6vmKC8k43SvUQpA&s',
  },
  {
    title: 'Makeup Services',
    description: 'Enhance your beauty with our professional makeup services, tailored for every occasion.',
    img: 'path_to_makeup_services_image',
  },
  {
    title: 'Nail Care',
    description: 'Pamper yourself with our nail care services, including manicures, pedicures, and nail art.',
    img: 'path_to_nail_care_image',
  },
  {
    title: 'Facial Treatments',
    description: 'Experience rejuvenating facial treatments with personalized skincare solutions.',
    img: 'path_to_facial_treatments_image',
  },
  {
    title: 'Massage and Wellness',
    description: 'Relax and unwind with our massage therapies, designed to relieve stress and promote wellness.',
    img: 'path_to_massage_wellness_image',
  },
  {
    title: 'Virtual Consultation & Styling Suggestions',
    description: 'Get expert styling advice through virtual consultations from the comfort of your home.',
    img: 'path_to_virtual_consultation_image',
  },
  {
    title: 'Hair and Skin Analysis (AI-Powered)',
    description: 'Leverage AI technology for customized hair and skin treatments tailored to your needs.',
    img: 'path_to_ai_analysis_image',
  },
  {
    title: 'Bridal Services',
    description: 'Our bridal services ensure you look stunning on your special day, with customized hair and makeup packages.',
    img: 'path_to_bridal_services_image',
  },
  {
    title: 'Loyalty Program & Rewards',
    description: 'Join our loyalty program and earn rewards with every visit.',
    img: 'path_to_loyalty_program_image',
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.img} alt={service.title} className="service-image" />
            <div className="service-info">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
