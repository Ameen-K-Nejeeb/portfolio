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
                    <p>I am Ameen K Nejeeb, a passionate and self-driven developer with a strong focus on Python, machine learning, and web development. With experience in building projects using React, Django, and other modern technologies, I love transforming ideas into functional applications. My journey in tech started with curiosity, and over time, I have worked on various projects, from personal websites to AI-based applications. I am always eager to learn new technologies and refine my problem-solving skills while staying up to date with the latest trends in the tech world.

Beyond coding, I am deeply committed to fitness and bodybuilding, maintaining a disciplined workout routine to push my limits both mentally and physically. I believe that the same dedication and consistency required for building strength apply to coding—continuous improvement and persistence lead to mastery. I also enjoy participating in tech competitions, innovation challenges, and sports like shot put. My goal is to create impactful solutions that merge technology with real-world applications while also inspiring others to pursue both intellectual and physical excellence.

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
