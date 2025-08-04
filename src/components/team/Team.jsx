import React from 'react';
import lead1 from '../../assets/atif.jpeg';
import lead2 from '../../assets/shadab.jpg';
import captain1 from '../../assets/atif.jpeg';
import captain2 from '../../assets/shadab.jpg';

const Team = () => {
  const leads = [
    {
      name: "Mr. Rashid Imran Ahmad Khan",
      role: "Chapter Lead",
      image: lead1,
      description: "Assistant Professor at Centre for Food Science and Technology, Aligarh Muslim Unviersity, guiding its vision with passion and expertise. With their strong academic background and commitment to student growth, they play a pivotal role in organizing impactful events and fostering a vibrant learning community in the field of food technology."
    },
    {
      name: "Miss Sadaf Ahmad",
      role: "Chapter Lead",
      image: lead2,
      description: "Miss Sadaf Ahmad is a dynamic and dedicated chapter lead who brings a strong sense of purpose and creativity to the team. With her keen interest in food technology and commitment to student development, she plays a vital role in planning and executing events that inspire learning, leadership, and innovation."
    }
  ];

  const captains = [
    {
      name: "Mohammad Sahil Khan",
      role: "Chapter Captain",
      image: captain1,
      description: "Mohammad Sahil Khan, the Chapter Captain, is a passionate and proactive student committed to driving student engagement and fostering a collaborative environment within the food technology community. His dedication and organizational skills play a key role in coordinating impactful events and initiatives for the chapter."
    },
    
  ];

  return (
    <>
      {/* Chapter Leads */}
      <section id="teams" className="content-section">
        <h2 className="section-title">Chapter Leads</h2>
        <div className="leads-container">
          {leads.map((lead, index) => (
            <div key={index} className="lead-card">
              <div className="lead-avatar">
                <img src={lead.image} alt={lead.name} />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">{lead.name}</h3>
                <span className="lead-role">{lead.role}</span>
                <p className="lead-description">{lead.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter Captains */}
      <section className="content-section">
        <h2 className="section-title">Chapter Captains</h2>
        <div className="leads-container">
          {captains.map((captain, index) => (
            <div key={index} className="lead-card">
              <div className="lead-avatar">
                <img src={captain.image} alt={captain.name} />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">{captain.name}</h3>
                <span className="lead-role">{captain.role}</span>
                <p className="lead-description">{captain.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team; 