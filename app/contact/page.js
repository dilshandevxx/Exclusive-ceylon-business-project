
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us | Exclusive Ceylon',
  description: 'Get in touch with Exclusive Ceylon for all your inquiries.',
};

export default function ContactPage() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We'd love to hear from you. Here's how you can reach us.</p>
        </div>

        <div className={styles.contentWrapper}>
          {/* Contact Information */}
          <div className={styles.infoColumn}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Address</span>
              <p className={styles.infoValue}>
                123 Temple Road,<br />
                Colombo 07, Sri Lanka
              </p>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <p className={styles.infoValue}>
                <a href="mailto:hello@exclusiveceylon.com">hello@exclusiveceylon.com</a>
              </p>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <p className={styles.infoValue}>
                <a href="tel:+94112345678">+94 11 234 5678</a>
              </p>
            </div>
            
            <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Working Hours</span>
                <p className={styles.infoValue}>Mon - Fri: 9am - 6pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formColumn}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input type="text" id="subject" className={styles.input} placeholder="How can we help?" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" className={styles.textarea} placeholder="Write your message here..." required></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className={styles.mapSection}>
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.51576479636!2d79.7865241773099!3d6.921922576115984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1703667104838!5m2!1sen!2sus" 
             className={styles.iframe} 
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </div>
    </div>
  );
}
