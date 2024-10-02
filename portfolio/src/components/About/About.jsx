import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profilees.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div class Name="about-section">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>


            <div className="about-right">
                <div className="about-para">
                    <p>I am experienced Frontend and Backend development with over decade of professional in the final time</p>
                    <p>Hi, I'm Ameen, a 17-year-old tech enthusiast passionate about Python, machine learning, and AI. I love creating simple, impactful projects and experimenting with new technologies. Outside of coding, I’m dedicated to fitness, balancing my intellectual and physical growth. Welcome to my site, where I share my journey in tech and beyond!

</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"> <p>React JS</p> <hr style={{width:"42%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"34%"}} /></div>
                    <div className="about-skill"><p>Python</p> <hr style={{width:"48%"}} /> </div>
                    <div className="about-skill"> <p>Django</p> <hr style={{width:"44%"}} /></div>      
                    <div className="about-skill"> <p>AI & ML</p> <hr style={{width:"9%"}} /></div>                    
                </div>

            </div>
        </div>


    <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS</p>
        </div>

        <hr />

        <div className="about-achievement">
            <h1>9+</h1>
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
