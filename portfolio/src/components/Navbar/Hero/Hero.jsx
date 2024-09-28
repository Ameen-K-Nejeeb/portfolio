import React from 'react'
import './Hero.css'
import profileimage from '../../../assets/profilee.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileimage} alt="profile" />
        <h1><span>I'am Ameen k Nejeeb,</span> python developer</h1>
        <p>"You are the average 5 people you Hang around"</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' > Connect me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
