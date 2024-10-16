import { React } from "react";
import "./GlassCards.css"; // Make sure to create this CSS file
import visionImage from "../../assets/vision.png";
import missionImage from "../../assets/mission.png";
import goalsImage from "../../assets/goals.png";
import GirlWithBrush from "../../assets/Girls_with_brush.jpeg";

const GlassCards = () => {
  const cardsData = [
    {
      id: 1,
      image: visionImage,
      title: "Vision",
      content:
        "FTV Salon Academy envisions establishing a strong presence nationwide, leveraging a broad network of investors to create mutually beneficial opportunities for both the brand and its affiliates.",
    },
    {
      id: 2,
      image: missionImage,
      title: "Mission",
      content:
        "Partnering with our affiliates, we aim to expand dynamically worldwide by fostering creativity, motivation, and proactive efforts.",
    },
    {
      id: 3,
      image: goalsImage,
      title: "Goal",
      content:
        "At FTV Salon Academy, our mission is to continually advance and expand by offering expert training programs in salon services, encompassing hair styling, makeup artistry, skincare, and more. We emphasize cutting-edge techniques and the latest industry trends to prepare our students for success.",
    },
  ];

  return (
    <div className="container">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <div className="card-content">
            <div className="icon">{card.icon}</div>
            <img src={card.image} alt={card.title} className="card-image"/>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlassCards;
