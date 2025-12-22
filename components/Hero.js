"use client";
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="hero" 
      style={{ 
        backgroundImage: `url('${heroImages[currentImageIndex]}')`
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="hero-badge fadeInUp" style={{ animationDelay: '0.1s' }}>Est. 2023</span>
        <h1 className="hero-title fadeInUp" style={{ animationDelay: '0.3s' }}>
          Travel smart. <br />
          Carry tradition. <br />
          <span className="text-accent">Live prepared.</span>
        </h1>
        <p className="hero-subtitle fadeInUp" style={{ animationDelay: '0.5s' }}>
          Premium travel essentials, traditional items, wallets & belts — made for everyday journeys.
        </p>
        <div className="hero-buttons fadeInUp" style={{ animationDelay: '0.7s' }}>
          <a href="#items" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
        
        {/* Slider Indicators */}
        <div className="slider-indicators fadeInUp" style={{ animationDelay: '0.9s' }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`slider-indicator ${index === currentImageIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
