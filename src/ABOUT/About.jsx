import React from 'react';
import AnimatedText from './AnimatedText';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-block">
        <AnimatedText>
          About <span className="red-text fs-5">TED</span>
        </AnimatedText>
        <p>
          <span className="highlight-red">TED</span> (Technology, Entertainment, Design) is a non-profit media organization that posts international talks online for free distribution under the slogan <span className="highlight">"Ideas change everything"</span>. <br /><br />
          TED covers almost all topics – from science to business to global issues – in more than 100 languages. It hosts talks that share unique ideas about almost everything under the sun, from business ventures to cooking techniques. A suite of short, carefully prepared talks, demonstrations and performances that are idea-focused, and cover a wide range of subjects to foster learning, inspiration and wonder – and provoke conversations that matter.
        </p>
      </div>

      <div className="about-block">
        <AnimatedText>
          About <span className="red-text fs-5">TEDx</span>
        </AnimatedText>
        <p>
          In the spirit of <span className="highlight">"ideas change everything"</span>, <span className="highlight-red">TEDx</span> event is a local gathering where live TED-like talks and performances are shared with the community. <span className="highlight-red">TEDx</span> events are fully planned and coordinated independently, on a community-by-community basis. <br /><br />
          The content and design of each <span className="highlight-red">TEDx</span> event is unique and developed independently, but all of them have features in common. <br /><br />
          <span className="highlight-red">TEDx</span> Organizers are not hosting events for political reasons, monetary reward or personal gain. They are doing so because they truly believe in the power of ideas to change the world. <span className="highlight-red">TEDx</span> events are open source, local and community-driven that inspire innovation, thought leadership and visionary insight.
        </p>
      </div>

      <div className="about-block">
        <AnimatedText>
          About <span className="red-text fs-5">TEDxGPREC</span>
        </AnimatedText>
        <p>
          <span className="highlight-red">TEDxGPREC</span> is an independently organized TEDx event, which aims to bring to its stage, ideas worth spreading from all over India. <span className="highlight-red">TEDxGPREC</span> talks will encapsulate ideas around the theme, expanding concepts, ideas, and enhancements that will motivate, inspire, and introduce transformative topics to the audience. <br /><br />
          Our event will follow the TED format – with a pinch of Indian culture and our own added secret sauce – that takes the form of multiple sessions, each including several speakers who talk about the interesting ideas.
        </p>
      </div>
    </section>
  );
};

export default About;
