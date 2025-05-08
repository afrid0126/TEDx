import React from "react";
import './Team.css';
import { useEffect, useState,useRef } from "react";


const teamData1 = [
  {
    section: "Organizers",
    members: [
      {
        name: "M Gandhi Prakash",
        role: "Organiser",
        image: "TEDx/assets/2024/Organisers/gandhi.jpg",
      },
      {
        name: "T Chethana Choudary",
        role: "Co-Organizer",
        image: "TEDx/assets/2024/Organisers/chethana.jpg",
      },
      {
        name: "G Lalith Aditya",
        role: "Executive Director",
        image: "TEDx/assets/2024/Organisers/Aditya.jpg",
      },
    ],
  },
  {
    section: "Design Team",
    members: [
      {
        name: "K S Gokul",
        role: "Director",
        image: "TEDx/assets/2024/Designers/gokul.jpg",
      },
      {
        name: "Jagadeesh Nallabothula",
        role: "Co-Director",
        image: "TEDx/assets/2024/Designers/jagadesh.jpg",
      },
      {
        name: "Buchupalli Pujitha",
        role: "Member",
        image: "TEDx/assets/2024/Designers/pujitha.jpg",
      },
    ],
  },
  {
    section:"Editorial and Documentation Team",
members:[
  {
   name:"Reethika Sreeja",
   role:"Director",
   image:"TEDx/assets/2024/Editorial/sreeja.jpg",
  },
  {
    name:"Vaishnavi",
    role:"Co-Director",
    image:"TEDx/assets/2024/Editorial/vaishnavi.jpg",
  },
  {
    name:"Deepika Shalini",
    role:"Member",
    image:"TEDx/assets/2024/Editorial/Deepika.jpg",
  },
  {
    name:"Meka Bhavya Sree",
    role:"Member",
    image:"TEDx/assets/2024/Editorial/bhavya.jpg",
      },  

]
  },
  {
    section:"Finance and Sponsorship Team",
    members:[
      {
        name: "G sai Harshith",
        role: "Director",
        image: "TEDx/assets/2024/Sponsorship/harshith.png",
      },
      {
        name: "Jaswanth",
        role: "Co-Director",
        image: "TEDx/assets/2024/Sponsorship/jaswanth.jpg",
      },
    ]
  },
  {
section:"Logistics Team",
members:[
  {
    name: "K Rohith Reddy",
    role: "Director",
    image: "TEDx/assets/2024/Logistics/rohith.jpg",

  },
  {
    name: "C Sainadh Reddy",
    role: "Co-Director",
    image: "TEDx/assets/2024/Logistics/sainadh.jpg",
  },
  {
    name:"Rajavardhan Reddy",
    role:"Member",
    image:"TEDx/assets/2024/Logistics/Raju.jpg",
  },
  {
    name:"Deepak",
    role:"Member",
    image:"TEDx/assets/2024/Logistics/deepak11.jpg",
  }
]
  },
  {
    section:"Public Relations Team",
    members:[
      {
        name: "M Sumana Sree",
        role: "Director",
        image: "TEDx/assets/2024/PublicRelations/Sumana.jpeg",
      },
      {
        name: "G R S Spandana",
        role: "Member",
        image: "TEDx/assets/2024/PublicRelations/spandana.jpg",
      },
      {
        name: "R Yashika Reddy",
        role: "Member",
        image: "TEDx/assets/2024/PublicRelations/Yashika.jpg",
      },
      {
        name: "G R Sri Nihitha",
        role: "Member",
        image: "TEDx/assets/2024/PublicRelations/Nihitha.png",
      },
      {
        name: "L Akshitha",
        role: "Member",
        image: "TEDx/assets/2024/PublicRelations/Akshitha.jpg",

      },
    ] 
  },
  {
    section:"Publicity and Marketing Team",
    members:[
      {
        name: "A Supraja",
        role: "Director",
        image: "TEDx/assets/2024/PandmTeam/Supraja.jpg",
      },
      {
        name: "M Gayathri",
        role: "Member",
        image: "TEDx/assets/2024/PandmTeam/gayathri.jpg",
      },
      {
        name: "Mythreyi Mahanandigiri",
        role: "Member",
        image: "TEDx/assets/2024/PandmTeam/mythri.jpg",
      },
      {
        name: "Katika Sailu",
        role: "Member",
        image: "TEDx/assets/2024/PandmTeam/sailu.jpg",
      },
      {
        name: "M S Faiza Anjum",
        role: "Member",
        image: "TEDx/assets/2024/PandmTeam/faiza.jpg",
      },
    ]
  },
  {
    section: "Speaker and Guest Care Team",
    members:[
      {
        name:"M Neha",
        role: "Director",
        image: "TEDx/assets/2024/SG/Neha_.jpg",
      },
      {
        name: "Narla Haritha",
        role: "Co-Director",
        image: "TEDx/assets/2024/SG/haritha.jpg",
      },
      {

        name: "Bhuma Mounika",
        role: "Co-Director",
        image: "TEDx/assets/2024/SG/mounika.jpg",
      },
    ]
  },
  {
    section:"Technical Team",
    members:[
      {
        name:"Sanjay Raj",
        role :"Director",
        image:"TEDx/assets/2024/TechnicalTeam/sanjay.jpg",

      },
      {
        name:"Avinash Golla",
        role :"Co-Director",
        image:"TEDx/assets/2024/TechnicalTeam/Avinash.jpg"
      },
      {
        name:"Y Hari Priya",
        role :"Member",
        image:"TEDx/assets/2024/TechnicalTeam/HariPriya.jpg"
      },
      {
        name:"Qazi Mosa",
        role :"Member",
        image:"TEDx/assets/2024/TechnicalTeam/Mosa.png"
      },
    ]
  },
];
const teamData2 = [
  {
    section: "Organizers",
    members: [
      {
        name: "Bandaru Sasira",
        role: "Organiser",
        image: "TEDx/assets/2023/Organisers/sasira.jpg",
      },
      {
        name: "Pathapadu Mani Aryani",
        role: "Co-Organizer",
        image: "TEDx/assets/2023/Organisers/mani aryani.jpg",
      },
      {
        name: "G. Naga Sowgandhi",
        role: "Executive Director",
        image: "TEDx/assets/2023/Organisers/sowgandhi.jpg",
      },
    ]
  },
  {
    section: "Design Team",
    members: [
      {
        name: "Madri Prajwala",
        role: "Director",
        image: "TEDx/assets/2023/Desiginers/Prajwala.jpg",
      },
      {
        name: "Kuruva Uday Chandra",
        role: "Director",
        image: "TEDx/assets/2023/Desiginers/uday.jpeg",
      },
      {
        name: "MD.Sami Rahaman",
        role: "Co-Director",
        image: "TEDx/assets/2023/Desiginers/SAMI.jpg",
      },
      {
        name:"Shaik Mohammad Adil",
        role:"Co-Director",
        image: "TEDx/assets/2023/Desiginers/mohamad.jpg",
      }
    ],
  },
  {
    section: "Editorial Team",
    members: [
      {
        name: "Somala Poornima Saranya",
        role: "Director",
        image: "TEDx/assets/2023/Editorial/saranya.jpeg",
      },
      {
        name: "Chukka Hema",
        role: "Director",
        image: "TEDx/assets/2023/Editorial/hema.jpg",
      },
      {
        name: "Manta Sai Vaishnavi",
        role: "Member",
        image: "TEDx/assets/2023/Editorial/vaishnavi.jpg",
      },
      {
        name:"Asthanaditta supraja",
        role:"Member",
        image: "TEDx/assets/2023/Editorial/SUPRAJA.jpg",
      }
    ],
  },
  {
    section: "Finance and Sponsorship Team",
    members: [
      {
        name: "C V Harshavardhan",
        role: "Director",
        image: "TEDx/assets/2023/Sponsorship/Harsha.jpg",
      },
      {
        name: "G Lalith Aditya",
        role: "Co-Director",
        image: "TEDx/assets/2024/Organisers/Aditya.jpg",
      },
      {
        name: "Abinavya Mudimela",
        role: "Member",
        image: "TEDx/assets/2023/Sponsorship/Abinavya.jpg",
      },
    ],
  },
  {
    section: "Logistics Team",
    members: [
      {
        name: "Midde Gandhi Prakash",
        role: "Director",
        image: "TEDx/assets/2023/Logistics/gandhi.jpg",
      },
      {
        name: "S.Jananada Bhushanam",
        role: "Member",
        image: "TEDx/assets/2023/Logistics/Bhushanam.jpg",
      },
      {
        name: "Katakam Niharika",
        role: "Member",
        image: "TEDx/assets/2023/Logistics/Niharika.jpg",
      },
    ],
  },
  {
    section: "Public Relational Team",
    members: [
      {
        name: "D.jahnavi",
        role: "Director",
        image: "TEDx/assets/2023/publicRelations/jahnavi_.jpg",
      },
      {
        name: "Shreya",
        role: "Director",
        image: "TEDx/assets/2023/publicRelations/Shreya.jpg",
      },
      {
        name: "Shaik mohammed khateeb",
        role: "Member",
        image: "TEDx/assets/2023/publicRelations/mohammad.jpg",
      },
    ],
  },
  {
    section: "Speakers and Guest Team ",
    members: [
      {
        name: "Kota Amog",
        role: "Director",
        image: "TEDx/assets/2023/SG/kota.jpeg",
      },
      {
        name: "Sudhireddy sai Bhavana",
        role: "Director",
        image: "TEDx/assets/2023/SG/S.Sai Bhavana.jpg",
      },
      {
        name: "charitha Gangireddy",
        role: "Co-Director",
        image: "TEDx/assets/2023/SG/Chaitra.jpg",
      },
      {
        name: "K. Lakshmi Sarojini",
        role: "Co-Director",
        image: "TEDx/assets/2023/SG/Lakshmi Sarojini.jpg",
      },
    ],
  },
  {
    section: "Technical Team",
    members: [
      {
        name: "Gajula Nomika",
        role: "Director",
        image: "TEDx/assets/2023/TechnicalTeam/Nomika.jpeg",
      },
      {
        name: "Ediga Subash Goud",
        role: "Co-Director",
        image: "TEDx/assets/2023/TechnicalTeam/Subash goud.jpg",
      },
      {
        name: "T Chethana Choudary",
        role: "Co-Director",
        image: "TEDx/assets/2023/TechnicalTeam/Chethana.jpg",
      },
      {
        name: "Medam Neha",
        role: "Co-Director",
        image: "TEDx/assets/2023/TechnicalTeam/Medam Neha_.jpg",
      },
    ],
  },
];

const Team = () => {
  const [animate, setAnimate] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="team-container">
      <section className="team-section">
        <h2 className="team-title">TEDx 2024 Team</h2>
        {teamData1.map((team, sectionIndex) => (
          <div key={team.section}>
            <h3 className="team-category">{team.section}</h3>
            <div className="team-grid">
              {team.members.map((member, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className={`team-card ${animate ? "animate-in" : ""}`}
                  style={{
                    "--i": (idx % 3) - 1,
                    position: animate ? "relative" : "absolute",
                    left: animate ? "auto" : "50%",
                    top: animate ? "auto" : "50%",
                    transform: animate
                      ? undefined
                      : "translate(-50%, -50%) scale(0.2)",
                    transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
                  }}
                >
                  <img src={member.image} alt={member.name} className="team-img" />
                  <div className="team-caption">
                    <div className="team-name">{member.name}</div>
                    <div className="team-role">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Repeat similar for 2023 team */}
    </div>
  );
};

