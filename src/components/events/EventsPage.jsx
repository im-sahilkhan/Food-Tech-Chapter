import React from 'react';
import './EventsPage.css';
import event1 from '../../assets/cs_workshop.jpg';
import event1_speaker1 from '../../assets/shadab.jpg';
import event1_speaker2 from '../../assets/atif.jpeg';
import event2 from '../../assets/cs_workshop.jpg';
import event2_speaker1 from '../../assets/shadab.jpg';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Cybersecurity Workshop: Ethical Hacking Fundamentals",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Jamia Hamdard University, Room 301",
      category: "Workshop",
      status: "Upcoming",
      image: event1,
      description: "Learn the fundamentals of ethical hacking through hands-on workshops covering penetration testing, vulnerability assessment, and security best practices.",
      speakers: [
        {
          name: "Dr. Rajesh Kumar",
          title: "Senior Security Consultant",
          company: "CyberSec Solutions",
          image: event1_speaker1,
        },
        {
          name: "Priya Sharma",
          title: "Penetration Tester",
          company: "SecureNet Technologies",
          image: event1_speaker2,
        }
      ]
    },
    {
      id: 2,
      title: "Capture The Flag (CTF) Competition",
      date: "March 22, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Jamia Hamdard University, Computer Lab",
      category: "Competition",
      status: "Registration Open",
      image: event2,
      description: "Test your cybersecurity skills in our annual CTF competition! Solve challenges across web security, cryptography, forensics, and reverse engineering.",
      speakers: [
        {
          name: "Amit Patel",
          title: "CTF Organizer",
          company: "Jamia Hamdard Chapter",
          image: event2_speaker1
        }
      ]
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
      case 'Workshop':
        return '#4F46E5';
      case 'Competition':
        return '#DC2626';
      case 'Panel Discussion':
        return '#059669';
      case 'Training':
        return '#EA580C';
      case 'Career Fair':
        return '#BE185D';
      default:
        return '#6B7280';
    }
  };

  return (
    <div className="events-page-container">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1 className="events-title">Events & Activities</h1>
          <p className="events-subtitle">
            Join us for exciting cybersecurity events, workshops, competitions, and networking opportunities.
          </p>
          <p className="events-description">
            Stay updated with the latest in cybersecurity through our diverse range of events designed 
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
            <div key={event.id} className="event-card">
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

                <div className="event-details">
                  <div className="detail-section">
                    <h4>Speakers</h4>
                    <div className="speakers-grid">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="speaker-card">
                          <div className="speaker-image">
                            <img src={speaker.image} alt={speaker.name} />
                          </div>
                          <div className="speaker-info">
                            <h5>{speaker.name}</h5>
                            <p>{speaker.title}</p>
                            <p className="speaker-company">{speaker.company}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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