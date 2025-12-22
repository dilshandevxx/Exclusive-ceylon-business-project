
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-logo">Exclusive Ceylon</h3>
            <p className="footer-text">
              Curating the best travel gear for your adventures. 
              Explore the world with comfort and style.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="#new">New Arrivals</a></li>
              <li><a href="#offers">Gifts & Offers</a></li>
              <li><a href="#popular">Most Popular</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">Email: hello@exclusiveceylon.com</p>
            <p className="footer-text">Phone: +1 234 567 890</p>
            <p className="footer-text">123 Adventure Lane, Wanderlust City</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">FB</a>
              <a href="#" className="social-icon" aria-label="Instagram">IG</a>
              <a href="#" className="social-icon" aria-label="Twitter">TW</a>
            </div>
            <p className="footer-subtext">Join our community of travelers.</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Exclusive Ceylon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
