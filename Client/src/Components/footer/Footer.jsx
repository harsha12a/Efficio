import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="about-section">
        <h2>About Effcio</h2>
        <p>Effcio is a productivity platform designed to help individuals and teams manage their time, tasks, and goals efficiently. With seamless integrations, real-time tracking, and customizable features, Effcio empowers users to stay organized and focused on what matters most.</p>
      </div>
      
     <div className="contact-section">
     <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: support@effcio.com</p>
        <p>Phone: +123 456 789</p>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      
     </div>
         <div className="copyright">
        <p>&copy; 2024 Effcio. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
