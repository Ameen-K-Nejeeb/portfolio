import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/AMEENn.png'
import user from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>I am a developer from , India with 2+ years of experence </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-emali-input">
            <img src={user} alt="" />
            <input type="email" placeholder='Enter email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">2024 Ameen k Nejeeb. All rights reserved.</div>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
