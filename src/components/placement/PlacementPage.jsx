import React from 'react';
import './PlacementPage.css';
import alumni from '../../assets/Alumni.pdf';

const PlacementPage = () => {
  const psuCompanies = [
    { name: "Food Corporation of India (FCI)", location: "New Delhi", website: "https://fci.gov.in" },
    { name: "National Dairy Development Board (NDDB)", location: "Anand, Gujarat", website: "https://www.nddb.coop" },
    { name: "Agricultural and Processed Food Products Export Development Authority (APEDA)", location: "New Delhi", website: "https://apeda.gov.in" },
    { name: "Marine Products Export Development Authority (MPEDA)", location: "Kochi, Kerala", website: "https://mpeda.gov.in" },
    { name: "Tea Board of India", location: "Kolkata, West Bengal", website: "https://teaboard.gov.in" },
    { name: "Coffee Board of India", location: "Bangalore, Karnataka", website: "https://coffeeboard.gov.in" },
    { name: "Spices Board of India", location: "Kochi, Kerala", website: "https://indianspices.com" },
    { name: "Central Warehousing Corporation (CWC)", location: "New Delhi", website: "https://cewacor.nic.in" }
  ];

  const mncCompanies = [
    { name: "Nestlé India", location: "Gurgaon, Haryana", website: "https://www.nestle.in" },
    { name: "Coca-Cola India", location: "Gurgaon, Haryana", website: "https://www.coca-colaindia.com" },
    { name: "PepsiCo India", location: "Gurgaon, Haryana", website: "https://www.pepsicoindia.co.in" },
    { name: "Kraft Heinz India", location: "Mumbai, Maharashtra", website: "https://www.kraftheinzcompany.com" },
    { name: "Unilever India", location: "Mumbai, Maharashtra", website: "https://www.hul.co.in" },
    { name: "Danone India", location: "Mumbai, Maharashtra", website: "https://www.danone.in" },
    { name: "Mars India", location: "Mumbai, Maharashtra", website: "https://www.mars.com" },
    { name: "Kellogg India", location: "Mumbai, Maharashtra", website: "https://www.kelloggs.in" },
    { name: "General Mills India", location: "Mumbai, Maharashtra", website: "https://www.generalmills.com" },
    { name: "Mondelez India", location: "Mumbai, Maharashtra", website: "https://www.mondelezinternational.com" }
  ];

  const privateCompanies = [
    { name: "Britannia Industries", location: "Kolkata, West Bengal", website: "https://www.britannia.co.in" },
    { name: "ITC Limited", location: "Kolkata, West Bengal", website: "https://www.itcportal.com" },
    { name: "Amul (GCMMF)", location: "Anand, Gujarat", website: "https://www.amul.com" },
    { name: "Mother Dairy", location: "New Delhi", website: "https://www.motherdairy.com" },
    { name: "Parle Products", location: "Mumbai, Maharashtra", website: "https://www.parleproducts.com" },
    { name: "Haldiram's", location: "Nagpur, Maharashtra", website: "https://www.haldiram.com" },
    { name: "Bikanervala", location: "New Delhi", website: "https://www.bikanervala.com" },
    { name: "MTR Foods", location: "Bangalore, Karnataka", website: "https://www.mtrfoods.com" },
    { name: "Gits Food Products", location: "Pune, Maharashtra", website: "https://www.gitsfood.com" },
    { name: "Saffola", location: "Mumbai, Maharashtra", website: "https://www.saffola.com" },
    { name: "Dabur India", location: "Ghaziabad, Uttar Pradesh", website: "https://www.dabur.com" },
    { name: "Marico Limited", location: "Mumbai, Maharashtra", website: "https://www.marico.com" },
    { name: "Godrej Consumer Products", location: "Mumbai, Maharashtra", website: "https://www.godrejcp.com" },
    { name: "Emami Limited", location: "Kolkata, West Bengal", website: "https://www.emamiltd.in" },
    { name: "Tata Consumer Products", location: "Mumbai, Maharashtra", website: "https://www.tataconsumer.com" }
  ];

  return (
    <div className="placement-page-container">
      {/* Hero Section */}
      <section className="placement-hero">
        <div className="placement-hero-content">
          <h1 className="placement-title">Training & Placement Assistance</h1>
          <p className="placement-subtitle">
            Connect with leading companies in the food technology sector
          </p>
          <p className="placement-description">
            Access internship opportunities and placement assistance with top PSUs, MNCs, and private sector companies in the food industry.
          </p>
        </div>
      </section>

      {/* Internship Section */}
      <section className="internship-section">
        <div className="internship-header">
          <h2>Internship Opportunities</h2>
          <p>Gain hands-on experience with industry leaders</p>
        </div>
        
        <div className="internship-card">
          <div className="internship-content">
            <div className="internship-icon">🎯</div>
            <h3>Food Technology Internships</h3>
            <p>
              Apply for internships with leading food companies, research institutions, and government organizations. 
              Gain practical experience in food processing, quality control, research & development, and production management.
            </p>
          </div>
          <div className="internship-actions">
            <a 
              href="https://forms.gle/heUYQMZorAh2vHkF6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="register-btn"
            >
              📝 Register
            </a>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="placement-section">
        <div className="placement-header">
          <h2>Placement Opportunities</h2>
          <p>Explore career opportunities with leading food sector companies</p>
        </div>

        {/* PSUs Table */}
        <div className="company-table-section">
          <h3>Public Sector Undertakings (PSUs)</h3>
          <div className="table-container">
            <table className="company-table">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Location</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {psuCompanies.map((company, index) => (
                  <tr key={index}>
                    <td>{company.name}</td>
                    <td>{company.location}</td>
                    <td>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MNCs Table */}
        <div className="company-table-section">
          <h3>Multinational Companies (MNCs)</h3>
          <div className="table-container">
            <table className="company-table">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Location</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {mncCompanies.map((company, index) => (
                  <tr key={index}>
                    <td>{company.name}</td>
                    <td>{company.location}</td>
                    <td>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Private Sector Table */}
        <div className="company-table-section">
          <h3>Private Sector Companies</h3>
          <div className="table-container">
            <table className="company-table">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Location</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {privateCompanies.map((company, index) => (
                  <tr key={index}>
                    <td>{company.name}</td>
                    <td>{company.location}</td>
                    <td>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="alumni-section">
        <div className="alumni-header">
          <h2>Our Alumni</h2>
          <p>Meet our successful graduates and their achievements</p>
        </div>
        
        <div className="alumni-card">
          <div className="alumni-content">
            <div className="alumni-icon">🎓</div>
            <h3>Alumni Success Stories</h3>
            <p>
              Discover the inspiring journeys of our food technology graduates who have successfully 
              established themselves in various sectors of the food industry. From research and development 
              to quality control, production management, and entrepreneurship - our alumni are making 
              significant contributions to the food technology sector.
            </p>
            <div className="alumni-features">
              <div className="feature-item">
                <span className="feature-icon">🏆</span>
                <span>Successful Placements</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💼</span>
                <span>Diverse Career Paths</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌍</span>
                <span>Global Opportunities</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <span>Entrepreneurial Ventures</span>
              </div>
            </div>
          </div>
          <div className="alumni-pdf-container">
            <h4>Alumni Directory & Success Stories</h4>
            <div className="pdf-viewer">
              <iframe
                src={alumni}
                width="100%"
                height="500"
                title="Alumni Directory"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementPage;
