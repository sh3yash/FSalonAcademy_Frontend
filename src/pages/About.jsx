import React from "react";

import "./AboutPage.css"; // Ensure this points to your updated CSS file
import girl_modal from "../assets/girl_with_lipstick.png";
import GlassCards from "../components/GlassCard/GlassCard";

const About = () => {
  return (
    <div style={{ background: "white" }}>
      <div className="about__us__header ">
        <h1>About Us</h1>
      </div>
      <div className="about-us-container">
        {/* Section 1: Image on the left and text on the right */}
        <div className="about-section">
          <div className="about-image">
            <img
              className="image-one"
              src="https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo="
              alt="Salon Academy Image 1"
            />
            <img
              className="image-two"
              src="https://st2.depositphotos.com/1005833/6084/i/450/depositphotos_60842961-stock-photo-makeup-artist-applies-eye-shadow.jpg"
              alt="Salon Academy Image 2"
            />
          </div>
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Welcome to FTV Salon Academy, where we blend creativity,
              expertise, and passion to help aspiring beauty professionals reach
              their full potential. Our academy is dedicated to providing
              comprehensive education in the beauty industry, offering a range
              of courses designed to hone your skills and unlock your artistic
              potential. Whether you're passionate about hair styling, makeup
              artistry, or nail design, our curriculum is tailored to give you
              both practical experience and theoretical knowledge.
            </p>
            <p style={{marginTop: "20px"}}>
              At Salon Academy, we believe that beauty is an ever-evolving industry, and
              we strive to stay ahead of the latest trends and techniques. Our
              expert instructors are seasoned professionals who have years of
              experience in their respective fields and are committed to
              mentoring students through personalized instruction and hands-on
              training. From mastering the art of precision cutting to creating
              flawless makeup looks for every occasion, our academy equips
              students with the tools and confidence they need to succeed in
              this competitive industry.
            </p>
          </div>
        </div>
      </div>
      <div className="about-us-container-1">
        <div className="about-section-1">
          <div className="about-text-1">
            <h2>Key Values</h2>

            <ul style={{ listStyleType: "none", padding: 0 }}>
              {[
                "Customer-centric experience focused on personalized services.",
                "Upholding professionalism with high standards of quality.",
                "Commitment to innovation through cutting-edge technology.",
                "Emphasizing convenience with easy-to-use digital solutions.",
                "Delivering top-tier quality services for beauty and wellness.",
                "Promoting sustainability with eco-friendly practices.",
                "Continuous improvement to stay ahead of industry trends.",
                "Fostering community relationships and a welcoming environment.",
              ].map((value, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "justify",
                    marginBottom: "10px",
                    marginLeft: "20px"
                  }}
                >
                  <span style={{ color: "#ea2ea2", marginRight: "10px" }}>
                    &#10003;
                  </span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-image-1">
            <img
              className="image-one-1"
              src="https://st2.depositphotos.com/1005833/6084/i/450/depositphotos_60842961-stock-photo-makeup-artist-applies-eye-shadow.jpg"
              alt="Salon Academy Image 1"
            />
            <img
              className="image-two-1"
              src="https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo="
              alt="Salon Academy Image 2"
            />
          </div>
        </div>
      </div>

      <div className="about-us-container-2">
        <div className="additional-section">
          <div className="additional-text">
            <h3>Why Choose Us?</h3>
            <p>
              Our unique approach to beauty education combines hands-on training
              with the latest technology to provide an unparalleled learning
              experience. With a focus on individual growth and industry
              readiness, we ensure that our students leave with the skills and
              confidence needed to excel in their careers.
            </p>
          </div>
          <div className="additional-image">
            <img
              src={girl_modal}
              alt="Additional Image"
              className="additional-image"
            />
          </div>
        </div>
      </div>
      <GlassCards />
    </div>
  );
};

export default About;
