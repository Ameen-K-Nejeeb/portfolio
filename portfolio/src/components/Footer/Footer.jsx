import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/AMEENn.png';
import user from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Logo" className="footer-logo" />
          <p>I am a passionate developer from Kerala, India, dedicated to building responsive and powerful web applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt="user" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr className="footer-divider" />
      
      <div className="footer-bottom">
        <div className="footer-bottom-left">© 2026 Ameen K Nejeeb. All rights reserved.</div>
        <div className="footer-bottom-right">
          <p className="footer-link">Terms of Service</p>
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;