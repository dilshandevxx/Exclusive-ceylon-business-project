"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Using the same images for now, but in reality these should be wide banners
const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="hero-kapruka" 
      style={{ 
        backgroundImage: `url('${heroImages[currentImageIndex]}')`
      }}
    >
      <div className="hero-overlay-gradient"></div>
      <div className="container hero-content-kapruka">
        <div className="hero-text-block">
          <h1 className="hero-title-kapruka fadeInUp">
            Everything on your list <br />
            <span className="serif-font">Delivered like magic.</span>
          </h1>
          <p className="hero-subtitle-kapruka fadeInUp" style={{ animationDelay: '0.2s' }}>
            From gifts to essentials, we bring the season to your doorstep.
          </p>
          <Link href="/items" className="btn-kapruka fadeInUp" style={{ animationDelay: '0.4s' }}>
            Shop Now
          </Link>
        </div>
      </div>
      
      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
}
