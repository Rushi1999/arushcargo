import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import heroTruck from "../assets/hero-truck.jpg";
import {
  FaTruck,
  FaMotorcycle,
  FaHome,
  FaMapMarkedAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroTruck} alt="Cargo Transport" />
        <div className="hero-overlay">
           <p>Delivery hai?
         </p>
          <h1>#Hum kar denge</h1>
         
          <div className="hero-buttons">
            <Link to="/booking" className="btn-primary">
              Book Now
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="steps-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <FaMapMarkedAlt size={40} color="#2563eb" />
            <h3>Select Locations</h3>
            <p>Enter pickup & drop locations, goods weight & type.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <FaClock size={40} color="#2563eb" />
            <h3>Choose Vehicle</h3>
            <p>Select the right vehicle for your goods.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <FaCheckCircle size={40} color="#2563eb" />
            <h3>Submit & Confirm</h3>
            <p>We receive your request and contact you quickly.</p>
          </div>
        </div>
      </section>

      {/* Services / Vehicles */}
      <section className="services-section">
        <h2>Our Vehicles</h2>
        <div className="services-container">
          <div className="service-card">
            <FaMotorcycle size={40} color="#2563eb" />
            <h3>2 Wheeler</h3>
            <p>Small parcels & light goods.</p>
          </div>
          <div className="service-card">
            <FaTruck size={40} color="#2563eb" />
            <h3>4 Wheeler</h3>
            <p>Medium-sized deliveries & furniture.</p>
          </div>
          <div className="service-card">
            <FaHome size={40} color="#2563eb" />
            <h3>Heavy Truck</h3>
            <p>Large goods up to 70 tons.</p>
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="features-section">
        <h2>Why Choose ArushCargo?</h2>
        <div className="features-container">
          <div className="feature-card">
            <FaCheckCircle size={35} color="#2563eb" />
            <p>Safe & Secure Delivery</p>
          </div>
          <div className="feature-card">
            <FaClock size={35} color="#2563eb" />
            <p>Quick Booking Process</p>
          </div>
          <div className="feature-card">
            <FaMapMarkedAlt size={35} color="#2563eb" />
            <p>Wide Service Coverage</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
