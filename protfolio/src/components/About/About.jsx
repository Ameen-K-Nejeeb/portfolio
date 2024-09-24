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
                        <p>React JS</p> <hr style={{width:"35%"}} />
                        <p>JavaScript</p> <hr style={{width:"30%"}} />
                        <p>Python</p> <hr style={{width:"45%"}} />
                        <p>Django</p> <hr style={{width:"45%"}} />
                        
                    </div>
                </div>

            </div>
        </div>


    <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS</p>
        </div>

        <hr />

        <div className="about-achievement">
            <h1>19+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>

        <hr />

        <div className="about-achievement">
            <h1>2+</h1>
            <p>HAPPY CLIENTS</p>
        </div>

    </div>


    </div>
  )
}

export default About
