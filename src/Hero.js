import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I'm [Your Name]</h1>
      <p>A passionate [Your Profession/Role]</p>
      <a href="#projects" className="cta-button">View My Work</a>
    </section>
  );
}

export default Hero;