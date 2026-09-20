import React from "react";
import "./Hero.css";

import profileimage from "../../../assets/profilee.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img
                src={profileimage}
                alt="Profile"
                className="hero-img-animate"
            />

            <h1 className="hero-text-animate">
                <span>I'm Ameen K Nejeeb,</span> Full-Stack Developer
            </h1>

            <p className="hero-text-animate delay-1">
                "You are the average of the 5 people you hang around."
            </p>

            <div className="hero-action hero-text-animate delay-2">
                <div className="hero-connect">
                    <AnchorLink
                        className="anchor-link"
                        offset={50}
                        href="#contact"
                    >
                        Connect with me
                    </AnchorLink>
                </div>

                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    );
};

export default Hero;