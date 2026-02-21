import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const phrases = [
    "A Passionate Data Analyst",
    "A Self-Learning Full Stack Developer",
    "An AI Enthusiast Developer"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [phrases.length]);

  return (
    <section className="hero">
      <h1>Hi, I'm Ranjith</h1>
      <p>{phrases[currentPhraseIndex]}</p>
    </section>
  );
}

export default Hero;