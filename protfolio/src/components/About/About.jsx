import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-section">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I am experienced Frontend and Backend development with over decade of professional in the final time</p>
                    <p>My passion is web development and I am very interested to creat this type of web appication </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p> <hr style={{width:"50%"}} />
                        <p>HTML & CSS</p> <hr style={{width:"50%"}} />
                        <p>HTML & CSS</p> <hr style={{width:"50%"}} />
                        <p>HTML & CSS</p> <hr style={{width:"50%"}} />
                        
                    </div>
                </div>

            </div>
        
        </div>
      
    </div>
  )
}

export default About
