import React, { useEffect } from 'react';
import './AboutUs.css';
import team1 from '../../assets/mohd_danish.jpg';
import team2 from '../../assets/rashid_ahmad.jpg';
import team3 from '../../assets/sadaf_ahmad.png';
import team4 from '../../assets/sahil_khan.jpg';


const AboutUs = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "We embrace creativity and forward-thinking approaches to drive meaningful progress in food technology, education, and career development.",
      icon: "🚀"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of working together—bringing students, educators, and industry professionals into a shared space to grow, learn, and succeed.",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do—from hosting events to curating resources—to empower students to reach their full potential.",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "Honesty, transparency, and ethical conduct guide all our actions and decisions, ensuring a trustworthy and reliable platform for our community.",
      icon: "🛡️"
    },
    {
      title: "Learning",
      description: "We foster a culture of continuous learning, encouraging curiosity, critical thinking, and knowledge-sharing across all levels of academic and professional growth.",
      icon: "📚"
    },
    {
      title: "Community",
      description: "We are committed to building a strong, inclusive, and supportive community that uplifts every member and creates lasting connections.",
      icon: "🌍"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Mohammad Danish",
      role: "Chapter Coordinator",
      email: "mohddanish.chem@zhcet.ac.in",
      image: team1,
      description: "Dr. Mohammad Danish, our Chapter Coordinator, brings invaluable guidance and academic insight to the team. His mentorship and support play a crucial role in shaping the chapter's vision, ensuring its activities align with educational excellence and industry relevance in the field of food technology."
    },
    {
      name: "Mr. Rashid Imran Ahmad Khan",
      role: "Chapter Lead",
      email: "riakhan.fst@amu.ac.in",
      image: team2,
      description: "Assistant Professor at Centre for Food Science and Technology, Aligarh Muslim Unviersity, guiding its vision with passion and expertise. With their strong academic background and commitment to student growth, they play a pivotal role in organizing impactful events and fostering a vibrant learning community in the field of food technology."
    },
    {
      name: "Miss Sadaf Ahmad",
      role: "Chapter Lead",
      email: "sahmad.dp@amu.ac.in",
      image: team3,
      description: "Miss Sadaf Ahmad is a dynamic and dedicated chapter lead who brings a strong sense of purpose and creativity to the team. With her keen interest in food technology and commitment to student development, she plays a vital role in planning and executing events that inspire learning, leadership, and innovation."
    },
    {
      name: "Mohammad Sahil Khan",
      role: "Chapter Captain",
      image: team4,
      email: "sahilkhanconnect@gmail.com",
      description: "Mohammad Sahil Khan, the Chapter Captain, is a passionate and proactive student committed to driving student engagement and fostering a collaborative environment within the food technology community. His dedication and organizational skills play a key role in coordinating impactful events and initiatives for the chapter."
    },
    
  ];

  // Handle scroll to team section when page loads with hash
  useEffect(() => {
    if (window.location.hash === '#team') {
      const teamSection = document.getElementById('team');
      if (teamSection) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          teamSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
          We are a student-led initiative committed to bridging the gap between academics and industry for Food Technology students. Our platform serves as a central hub for organizing technical events, sharing placement and internship opportunities, and providing curated resources for GATE and career preparation. Rooted in a passion for innovation and growth, we strive to build a strong, informed, and empowered student community.
          </p>
          <p className="about-description">
            Founded in August 2025
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
            Our mission is to empower Food Technology students by bridging the gap between academics and industry through curated events, career opportunities, and GATE preparation resources. We aim to foster a collaborative community driven by learning, innovation, and professional growth.
            </p>
          </div>
          
          <div className="vision-card">
            <div className="card-icon">🔮</div>
            <h3>Our Vision</h3>
            <p>
            To become a leading student-driven platform that fosters innovation, industry exposure, and academic excellence within the food technology domain—preparing students to become future-ready professionals who can contribute meaningfully to the global food ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="core-values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="team-intro">
          Our dedicated team of dedicated group of Food Technology students and mentors working together to empower peers through innovation, collaboration, and industry-focused initiatives.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
                <p className="team-email">📧 {member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 