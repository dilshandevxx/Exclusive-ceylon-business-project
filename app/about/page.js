
export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div className="about-content-page">
        <div className="about-text-column">
          <h1 className="section-title" style={{ textAlign: 'left', marginLeft: 0, left: 0, transform: 'none' }}>Our Journey</h1>
          <p className="about-description">
            We are passionate travelers dedicated to finding the best gear for your adventures. 
            From the bustling streets of Tokyo to the quiet corners of the Alps, we understand 
            what makes a trip special. Our collection is curated to enhance your travel vibe, 
            bringing you quality, style, and utility.
          </p>
          <p className="about-highlight">
            "Travel is the only thing you buy that makes you richer."
          </p>
          <div style={{ marginTop: '2rem' }}>
             <p className="about-description">
               Founded in 2023, TravelFinds started as a small blog sharing travel tips. 
               Today, we help thousands of explorers find the right equipment for their journeys.
             </p>
          </div>
        </div>
        <div className="about-image-column">
             <img src="/images/hero-2.jpg" alt="About Us" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </div>
  );
}
