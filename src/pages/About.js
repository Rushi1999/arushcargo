import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <h2>About ArushCargo</h2>
      <p>
        ArushCargo is a reliable cargo booking service for transporting goods of any size – from 1kg to 70 tons.  
        Our mission is to provide fast, safe, and convenient vehicle booking solutions for businesses and individuals.
      </p>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>Wide range of vehicles for all types of goods</li>
        <li>Easy online booking with location selection</li>
        <li>Instant notifications to our admin team</li>
        <li>Focus on safety and customer satisfaction</li>
      </ul>

      <h3>Our Vision</h3>
      <p>
        To simplify logistics and make cargo transport accessible, transparent, and stress-free for everyone.
      </p>
    </div>
  );
};

export default About;
