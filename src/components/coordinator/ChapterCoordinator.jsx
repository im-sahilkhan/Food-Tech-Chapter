import React from 'react';
import './ChapterCoordinator.css';
import coordinator from '../../assets/mohd_danish.jpg';

const ChapterCoordinator = () => {
  return (
    <section className="coordinator-section">
      <div className="coordinator-card">
        <h3 className="coordinator-title">Chapter Coordinator</h3>
        <div className="coordinator-avatar" aria-label="Coordinator avatar">
          <img src={coordinator} alt="Coordinator avatar" />
        </div>
        <h4 className="coordinator-name">Dr. Mohammad Danish</h4> 
        <span className="coordinator-role">Chapter Coordinator</span>
        <p className="coordinator-description">
          Dr. Mohammad Danish, our Chapter Coordinator, brings invaluable guidance and academic insight to the team. His mentorship and support play a crucial role in shaping the chapter's vision, ensuring its activities align with educational excellence and industry relevance in the field of food technology.
        </p>
      </div>
    </section>
  );
};

export default ChapterCoordinator; 