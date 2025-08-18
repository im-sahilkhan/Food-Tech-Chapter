import React from 'react';
import './EventsPage.css';
import event1 from '../../assets/cs_workshop.jpg';
import event2 from '../../assets/cs_workshop.jpg';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Webinar on Trends in Food Processing",
      date: "August 19, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Online (Zoom)",
      category: "Webinar",
      status: "Upcoming",
      image: event1,
      description: "Explore the latest advancements and automation in food processing technologies. Learn about cutting-edge innovations and industry best practices.",
      registerUrl: "https://forms.google.com/example1"
    },
    {
      id: 2,
      title: "GATE XE – FT Prep Session: Strategy & Tips",
      date: "July 19, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Online (Google Meet)",
      category: "Online Session",
      status: "Registration Open",
      image: event2,
      description: "Learn how to prepare smartly for GATE Food Tech with top scorers and mentors. Get expert tips and strategies for success.",
      registerUrl: "https://forms.google.com/example2"
    },
    {
      id: 3,
      title: "Internship Talk with Industry Experts",
      date: "July 19, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Jamia Hamdard University, Room 201",
      category: "Career Session",
      status: "Registration Open",
      image: event1,
      description: "Connect with industry professionals and learn about internship opportunities in food technology. Get insights into career paths and industry requirements.",
      registerUrl: "https://forms.google.com/example3"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming':
        return '#059669';
      case 'Registration Open':
        return '#DC2626';
      case 'Full':
        return '#6B7280';
      default:
        return '#6B7280';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Webinar':
        return '#4F46E5';
      case 'Online Session':
        return '#DC2626';
      case 'Career Session':
        return '#059669';
      case 'Workshop':
        return '#EA580C';
      case 'Competition':
        return '#BE185D';
      default:
        return '#6B7280';
    }
  };

  // Scroll to the event if a hash is present
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, []);

  return (
    <div className="events-page-container">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1 className="events-title">Events & Activities</h1>
          <p className="events-subtitle">
            Join us for exciting food technology events, workshops, and networking opportunities.
          </p>
          <p className="events-description">
            Stay updated with the latest in food technology through our diverse range of events designed 
            to enhance your skills, expand your network, and advance your career in the field.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="events-list-section">
        <div className="events-header">
          <h2>Upcoming Events</h2>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} id={`event-${event.id}`} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-status" style={{ backgroundColor: getStatusColor(event.status) }}>
                  {event.status}
                </div>
                <div className="event-category" style={{ backgroundColor: getCategoryColor(event.category) }}>
                  {event.category}
                </div>
              </div>

              <div className="event-content">
                <div className="event-header">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <div className="event-date">
                      <span className="meta-icon">📅</span>
                      {event.date}
                    </div>
                    <div className="event-time">
                      <span className="meta-icon">⏰</span>
                      {event.time}
                    </div>
                    <div className="event-location">
                      <span className="meta-icon">📍</span>
                      {event.location}
                    </div>
                  </div>
                </div>

                <p className="event-description">{event.description}</p>

                <div className="event-actions">
                  <a 
                    href={event.registerUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="register-btn"
                  >
                    Register Here
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage; 