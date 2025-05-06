import React, { useEffect } from "react";
import "./Theme.css";

const themes = [
  {
    src: "src/assets/deartomorrow.jpg",
    title: "DEAR TOMORROW",
    desc: `Every tomorrow is a new beginning for all. It gives us immense potential to start anew, blesses us with unending hope to envision the future we dream of, and provides another chance to forget the regrets we have, to leave the past behind, and to move a step closer to the life we aspire to. With every tomorrow, we can become a little stronger and kinder, creating a new self that can bring even the slightest change to this world.`,
  },
  {
    src: "src/assets/newreality.png",
    title: "UNBOXING NEW REALITY",
    desc: `Unboxing the new reality" is to give way to a new normal where we are not living in the same kind of environment as of a few years ago. We now live in a new reality, so we have to acknowledge the fact that this differs from situation that prevailed prior to the start of the covid crisis. Our theme extends to showcase the new trends in technology, arts, design and other fields.`,
  },
  {
    src: "/assets/example.jpg",
    title: "EXAMPLE THEME",
    desc: ``,
  },
];

const Theme = () => {
  useEffect(() => {
    const themeCards = document.querySelectorAll('.theme-card');

    const options = {
      root: null, 
      threshold: 0.1,  
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const themePhoto = entry.target.querySelector('.theme-photo');
        const themeContent = entry.target.querySelector('.theme-content');
        
        if (entry.isIntersecting) {
          // Element is in the viewport, apply the "slideIn" animations
          themePhoto.style.animation = 'slideInLeft 0.8s ease-out forwards';
          themeContent.style.animation = 'slideInRight 0.8s ease-out forwards';
        } else {
          // Element is out of the viewport, apply reverse animations
          themePhoto.style.animation = 'slideOutLeft 0.8s ease-in forwards';
          themeContent.style.animation = 'slideOutRight 0.8s ease-in forwards';
        }
      });
    }, options);

    themeCards.forEach(card => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="themes-container">
      {themes.map((item, index) => (
        <div className="theme-card" key={index}>
          <div className="theme-photo">
            <img src={item.src} alt={item.title} className="theme-image" />
          </div>
          <div className="theme-content">
            <h2 className="theme-title text-danger">{item.title}</h2>
            <p className="theme-description">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Theme;
