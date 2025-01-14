import React from "react";
import './hero.css'
import profile_pic from '../../assets/profile-pic.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-first">
                <img className="profile-pic" src={profile_pic} alt="profile picture" />
                <h1>Hello, I'm Andres, <span>fullstack developer.</span></h1>
            </div>
            <div className="hero-second">
                <p>I am a skilled and passionate full-stack developer with four years of experience delivering innovative and impactful projects.</p>
                <div className="hero-buttons">
                    <a href="https://www.linkedin.com/in/andres-ria%C3%B1o-193003251/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icons" /></a>
                    <a href="https://github.com/afrianodev" target="_blank" rel="noopener noreferrer"><FaGithub className="icons" /></a>
                    <a href="https://drive.google.com/uc?export=download&id=1guidn8v0WF2dVIJ4mn1LobjFQD4Eb2TD" className="my-resume">My resume</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;