
export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-content">
        <div className="about-text">
          <h2 className="about-title">Our Journey</h2>
          <p className="about-description">
            We are passionate travelers dedicated to finding the best gear for your adventures. 
            From the bustling streets of Tokyo to the quiet corners of the Alps, we understand 
            what makes a trip special. Our collection is curated to enhance your travel vibe, 
            bringing you quality, style, and utility.
          </p>
          <p className="about-highlight">
            "Travel is the only thing you buy that makes you richer."
          </p>
        </div>
        <div className="about-image-wrapper">
             {/* Using one of the hero images for now as a showcase */}
            <div className="about-image-placeholder">
                <img src="/images/hero-2.jpg" alt="About Us" className="about-img" />
            </div>
        </div>
      </div>
    </section>
  );
}
