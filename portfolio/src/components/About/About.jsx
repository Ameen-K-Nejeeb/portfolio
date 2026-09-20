import React, { useState, useEffect } from "react";
import "./About.css";

import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profilees.svg";
import Services_Data from "../../assets/services_data";

const About = () => {
    const [experienceYears, setExperienceYears] = useState(0);

    useEffect(() => {
        const startYear = 2023;
        const currentYear = new Date().getFullYear();

        setExperienceYears(Math.max(currentYear - startYear, 0));
    }, []);

    const totalProjects = Services_Data.length;

    const skills = [
    { name: "Python, Django & DRF", progress: "w-85" },
    { name: "React.js & Redux Toolkit", progress: "w-80" },
    { name: "JavaScript", progress: "w-80" },
    { name: "Database Management", progress: "w-75" },
    { name: "Firebase & Firestore", progress: "w-75" },
    { name: "Git & GitHub", progress: "w-80" },
];

    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-section">
                <div className="about-left">
                    <img
                        src={profile}
                        alt="Profile"
                        className="floating-img"
                    />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am Ameen K Nejeeb, a self-driven Full-Stack
                            Developer passionate about building practical,
                            user-focused web applications. My primary
                            technologies include Python, Django, Django REST
                            Framework, React.js, and JavaScript.
                        </p>

                        <p>
                            I started my coding journey during my school years
                            and have continuously developed my skills through
                            hands-on projects and structured learning. My
                            experience includes developing REST APIs,
                            authentication systems, database-driven
                            applications, responsive user interfaces, and
                            role-based platforms.
                        </p>

                        <p>
                            I have worked on projects such as LearnLoop,
                            OLX Marketplace, Blog App, Gym Management API,
                            and FRIDAY RETREATS. I enjoy solving problems,
                            learning new technologies, and improving my
                            development practices through real-world projects.
                        </p>

                        <p>
                            My goal is to become a highly skilled software
                            engineer by strengthening my backend architecture,
                            frontend development, database design, and
                            problem-solving abilities.
                        </p>
                    </div>

                    <div className="about-skills">
                        {skills.map((skill, index) => (
                            <div className="about-skill" key={index}>
                                <p>{skill.name}</p>

                                <div className="skill-bar">
                                    <hr className={skill.progress} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>{experienceYears}+</h1>
                    <p>YEARS LEARNING & BUILDING</p>
                </div>

                <hr />

                <div className="about-achievement">
                    <h1>{totalProjects}+</h1>
                    <p>PROJECTS DEVELOPED</p>
                </div>

                <hr />

                <div className="about-achievement">
                    <h1>100%</h1>
                    <p>COMMITMENT TO LEARNING</p>
                </div>
            </div>
        </div>
    );
};

export default About;