import React, { useEffect, useState } from "react";
import "./accordion.scss";

const HorizontalAccordion = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  useEffect(() => {
    const res = window.innerWidth <= 768 ? 0 : 2;
    setActiveIndex(res);
  }, []);

  return (
    <div className="accordion" data-aos="fade-right" data-aos-duration="3000">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${index === activeIndex ? "active" : ""}`}
          style={item.style?.container}
          onClick={() => setActiveIndex(index)}
        >
          <div className="accordion-title" style={item.style?.title}>
            <div className="accordionHeaderContainer">
              {item.icon}
              <div>{item.title}</div>
            </div>
          </div>
          <div className="accordion-content" style={item.style?.content}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalAccordion;
