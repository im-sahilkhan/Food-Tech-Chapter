import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import AboutUs from './components/about/AboutUs';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import ContactPage from './components/contact/ContactPage';
import ChapterCoordinator from './components/coordinator/ChapterCoordinator';
import Events from './components/events/Events';
import EventsPage from './components/events/EventsPage';
import GatePage from './components/gate/GatePage';
import Footer from './components/footer/Footer';
import './components/navbar/Navbar.css';
import './index.css';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <main className="main-content">
        <div className="content-layout">
          {/* Left Column */}
          <div className="left-column">
            <About />
            <Team />
          </div>

          {/* Right Column */}
          <div className="right-column">
            <ChapterCoordinator />
            <Contact />
          </div>
        </div>

        {/* Full Width Events Section */}
        <Events />
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gate" element={<GatePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


