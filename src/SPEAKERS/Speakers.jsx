import React from 'react';
import './Speaker.css';

const speakers = [
  {
    name: "Sahithi Mannar",
    title: "Psychologist",
    image: "src/assets/Speakers/Medha.jpg",
    links: {
      twitter: "https://x.com/samajeeva?t=HcGR-STjgdshqwz83UmS3A&s=08",
      linkedin: "https://www.linkedin.com/in/sahithi-mannar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/sama.jeeva?igsh=MWMxemphZHk4ZjNmZw==",
    },
  },
  // Add more speakers here as needed
];

const Speakers = () => {
  return (
    <section className="speakers-section" id="carousel_8a8b">
      <h1 className="title">Speakers - 2024</h1>
      <div className="speakers-list">
        {speakers.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <img src={speaker.image} alt={speaker.name} className="speaker-img" />
            <div className="speaker-info">
              <h4 className="speaker-name">{speaker.name}</h4>
              <h6 className="speaker-title">{speaker.title}</h6>
              <div className="social-icons">
                <a href={speaker.links.twitter} target="_blank" rel="noopener noreferrer">
                  <img src="/images/5968958-57821ba9.png" alt="Twitter" />
                </a>
                <a href={speaker.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src="/images/13266142-1e897741.png" alt="LinkedIn" />
                </a>
                <a href={speaker.links.instagram} target="_blank" rel="noopener noreferrer">
                  <img src="/images/1384031-b82328f9.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
