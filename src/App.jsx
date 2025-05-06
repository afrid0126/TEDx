import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HOME/Home.jsx';
import Performers from './PERFORMERS/Performers.jsx';
import Speakers from './SPEAKERS/Speakers.jsx';
import Team from './TEAM/Team.jsx';
import About from './ABOUT/About.jsx';
import Contacts from './Contacts.jsx';
import Theme from './Theme.jsx';
import Header from './HOME/Header.jsx';

const App = () => {
  const headerstyle = {
    alignItems: "left",
    justifyContent: "left",
    margin: "0%",
    padding: "0%", // Corrected this line
  };

  return (
    <div>
      <Router>
        <Header style={headerstyle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/performers" element={<Performers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
