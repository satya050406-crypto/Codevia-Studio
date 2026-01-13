import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MouseFollower from './components/MouseFollower';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesLanding from './pages/ServicesLanding';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="app">
        <MouseFollower />
        <div className="tech-blob" style={{ top: '10%', left: '5%' }}></div>
        <div className="tech-blob" style={{ bottom: '10%', right: '5%', background: 'var(--secondary-glow)' }}></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesLanding />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
