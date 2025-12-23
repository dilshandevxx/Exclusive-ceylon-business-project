
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column brand-column">
            <h3 className="footer-logo">Exclusive Ceylon</h3>
            <p className="footer-text">
              Curating the best travel gear and Sri Lankan artifacts for your adventures. 
              Experience the authentic essence of Ceylon.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i> FB</a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i> IG</a>
              <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i> TW</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><a href="/latest-arrivals">New Arrivals</a></li>
              <li><a href="/special-offers">Special Offers</a></li>
              <li><a href="/travelers-choice">Travelers' Choice</a></li>
              <li><a href="/search?q=gifts">Gift Ideas</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/shipping">Shipping Policy</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-column newsletter-column">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="footer-text">Subscribe for exclusive offers and new arrivals.</p>
            <form className="footer-newsletter">
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Exclusive Ceylon. All rights reserved.</p>
          <div className="payment-methods">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
