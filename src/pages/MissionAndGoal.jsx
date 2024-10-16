import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MissionAndGoal.css';

const MissionAndGoal = () => {
  return (
    <div>
     
      <Header />

      {/* Page content with title and timeline */}
      <div className="mission-goal-content">
       
        <div className="header-container mt-14"> 
          <h1 className="page-heading overflow-hidden">Mission and Goals</h1>
        </div>


        {/* Timeline content */}
        <div className="timeline-content">
          <div className="timeline">
            <div className="container mission">
              <div className="text-box">
                <div className="section-header">
                  <h2 className="section-heading overflow-hidden">Our Mission</h2>
                  <span className="icon">🎯</span>
                </div>
                <p>
                  We aim at building an International quality Beauty and Wellness training academies in India by using the experience of Fashion TV. It has its presence in 190+ countries and is truly a leader of the Beauty and Wellness Industry. F Salon Academies will be one of its kind academies in India. We will be focusing on providing supreme quality training and placements to our students through our state-of-the-art teaching programs and institutes. We will be developing an in-house Student Salon in every academy that will provide appropriate cosmetology training, practical knowledge, practice and the minutest of know-hows of International salon standards to our Students.
                </p>
                <span className="left-container-arrow"></span>
              </div>
            </div>

            <div className="container vision">
              <div className="text-box">
                <div className="section-header">
                  <h2 className="section-heading overflow-hidden">Vision</h2>
                  <span className="icon">🔭</span>
                </div>
                <p>
                  Our vision is to make India a hub for skilled Beauty and Wellness professionals who can meet the growing demands and standards of professionals in this Industry, by abiding and fulfilling International standards. FTV believes in creating an adequate, responsive and up-to-date learning environment for aspiring makeup artists, salon specialists, nail artists, dieticians, ayurveda enthusiasts, spa therapists and nutritionists to learn and acquire the skills needed to pursue a career in the beauty and wellness industry.
                </p>
                <span className="right-container-arrow"></span>
              </div>
            </div>

            <div className="container aim">
              <div className="text-box">
                <div className="section-header">
                  <h2 className="section-heading overflow-hidden">Aim</h2>
                  <span className="icon">🚀</span>
                </div>
                <p>
                  We aim to build one of its kind, versatile and student-friendly Beauty and Wellness Academies with knowledge-rich learning experience. We aspire to provide our students with beautician courses, training faculty and the latest equipment. This will enable an opportunity for them to be thoroughly prepared for the world of the Beauty and Wellness Industry. We aim to utilize and follow FTv’s glamour and beliefs respectively, in order to provide our students access to International beauty events and Fashion weeks and land them as celebrity makeup artists in Milan, New York, Tokyo, London Fashion weeks.
                </p>
                <span className="left-container-arrow"></span>
              </div>
            </div>

            <div className="container future-goal">
              <div className="text-box">
                <div className="section-header">
                  <h2 className="section-heading overflow-hidden">Future Goal</h2>
                  <span className="icon">🌟</span>
                </div>
                <p>
                  Our future goal is to continuously innovate and adapt to the latest trends and technologies in the Beauty and Wellness industry. We aspire to expand our academies internationally and collaborate with global beauty leaders to provide unparalleled training and opportunities to our students. We aim to position ourselves as a premier institute recognized globally for excellence in beauty education and training.
                </p>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      {/* <Footer /> */}
    </div>
  );
};

export default MissionAndGoal;
