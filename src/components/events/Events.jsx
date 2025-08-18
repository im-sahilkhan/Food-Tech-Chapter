import React from 'react';
import { Link } from 'react-router-dom';
import event1 from "../../assets/cs_workshop.jpg"

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Webinar on Trends in Food Processing",
      date: "August 19, 2025",
      image: event1,
      type: "Webinar",
      detailsUrl: "/events#event-1",
      description: "Explore the latest advancements and automation in food processing technologies.."
    },
    {
      id: 2,
      title: "GATE XE – FT Prep Session: Strategy & Tips",
      date: "July 19, 2025",
      image: event1,
      type: "Online Session",
      detailsUrl: "/events#event-2",
      description: "Learn how to prepare smartly for GATE Food Tech with top scorers and mentors."
    },
    {
      id: 3,
      title: "Internship Talk with Industry Experts",
      date: "July 19, 2025",
      image: event1,
      type: "Online Session",
      detailsUrl: "/events#event-3",
      description: "Learn how to prepare smartly for GATE Food Tech with top scorers and mentors."
    },
  ];

  return (
    <div className="events-full-width">
      <section id="events" className="content-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-list">
          {events.map((event) => (
            <Link to={event.detailsUrl} className="event-link" key={event.id}>
              <div className="event-card">
              <div className="event-image-container">
                <img src={event.image} alt={event.title} className="event-image" />
                <span className="event-type">{event.type}</span>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <span className="event-meta-item">📅 {event.date}</span>
                  <span className="event-meta-item">ℹ️ {event.description}</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events; 