import React from 'react'
import './Hero.css'
import profileimage from '../../../assets/profile.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profileimage} alt="profile" />
        <h1><span>I'am Ameen k Nejeeb,</span>as a python developer</h1>
        <p>Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay</p>
        <div className="hero-action">
            <div className="hero-connect">Connect me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
