import React from "react";
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
    <div
      className="relative flex flex-wrap justify-center gap-5 p-8 mb-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${GirlWithBrush})`,
      }}
    >
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="relative flex flex-col items-center w-[90%] max-w-xs md:max-w-sm p-5 h-90 text-center bg-white/20 border border-white/30 rounded-lg shadow-lg transition-transform transform hover:rotate-y-6 hover:rotate-x-3"
        >
          <img src={card.image} alt={card.title} className="w-16 h-16 rounded-lg mb-2" />
          <h3 className="mt-[-1rem] text-2xl md:text-3xl font-medium text-pink-500 transition-transform hover:scale-105">
            {card.title}
          </h3>
          <p className="mt-4 text-white text-base md:text-lg leading-relaxed">
            {card.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GlassCards;
