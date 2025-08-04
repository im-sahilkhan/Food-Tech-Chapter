import React from 'react';
import event1 from "../../assets/cs_workshop.jpg"

const Events = () => {
  const events = [
    {
      title: "Webinar on Trends in Food Processing",
      date: "August 19, 2025",
      location: "Online",
      image: event1,
      type: "Webinar",
      detailsUrl: "#",
      description: "Explore the latest advancements and automation in food processing technologies.."
    },
    {
      title: "GATE XE – FT Prep Session: Strategy & Tips",
      date: "July 19, 2025",
      location: "Online",
      attendees: 80,
      image: event1,
      type: "Online Session",
      detailsUrl: "#",
      description: "Learn how to prepare smartly for GATE Food Tech with top scorers and mentors."
    },
    {
      title: "Internship Talk with Industry Experts",
      date: "July 19, 2025",
      location: "Online",
      attendees: 80,
      image: event1,
      type: "Online Session",
      detailsUrl: "#",
      description: "Learn how to prepare smartly for GATE Food Tech with top scorers and mentors."
    },
  ];

  return (
    <div className="events-full-width">
      <section id="events" className="content-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-list">
          {events.map((event, idx) => (
            <div className="event-card" key={idx}>
              <div className="event-image-container">
                <img src={event.image} alt={event.title} className="event-image" />
                <span className="event-type">{event.type}</span>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <span className="event-meta-item">📅 {event.date}</span>
                  <span className="event-meta-item">📍 {event.location}</span>
                  <span className="event-meta-item">👥 {event.attendees} attendees</span>
                </div>
                <a href={event.detailsUrl} className="event-link">Register Here &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events; 