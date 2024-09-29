import React from "react";
import './about.css';
import reactLogo from '../../assets/react-logo.svg';
import javascriptLogo from '../../assets/js-logo.svg';
import nodeJSLogo from '../../assets/nodejs-logo.svg';
import expressLogo from '../../assets/express-logo.svg';
import postgresqlLogo from '../../assets/postgresql-logo.svg';
import htmllLogo from '../../assets/html-logo.svg';
import cssLogo from '../../assets/css-logo.svg';
import bootstrapLogo from '../../assets/bootstrap-logo.svg';
import tailwindlLogo from '../../assets/tailwind-logo.svg';
import adobeLogo from '../../assets/adobe-logo.png';


const About = () => {
    return (
        <div id="about" className="about">
            <h1>About me</h1>
            <p className="para-about para-about1">My full name is Andres Riaño, based in Mexico. I hold a degree in Film and Television Production, with a lifelong passion for design and computers, also I have programming knowledge. For nearly four years I have fully immersed myself in this fascinating field.</p>
            <p className="para-about para-about2">I am very curious and always eager to learn. I put a lot of passion into everything I do, and when I encounter an obstacle, I always find a solution.</p>
            <div className="about-bottom">
                <div className="bottom-left">
                    <div className="work-experience">
                    <h2>Work Experience</h2>
                        <div className="work-1">
                            <h3>FullStack Developer</h3>
                            <p><a href="https://neomarketcorporation.com/" target="_blank">NeoMarket</a> | Apr 2022 - Actual</p>
                            <p>Designing and creating deliverables according to each client's requirements.</p>
                        </div>
                        <div className="work-1">
                            <h3>Web Designer</h3>
                            <p><a href="https://gbmcomunicaciones.com/" target="_blank" rel="noopener noreferrer">GBM comunicaciones</a> | Jul 2018 - Feb 2022</p>
                            <p>I was responsible for designing and animating projects according to client requirements.</p>
                        </div>
                    </div>
                </div>
                <div className="divisor-ver-line">
                </div>
                <div className="bottom-center">
                    <h2>Education</h2>
                    <div className="education-1">
                        <h3>Film and TV production</h3>
                        <p>Bachelors degree</p>
                        <p>By Taller 5 | Jun 2013 - Jul 2016</p>
                    </div>
                    <div className="education-1">
                        <h3>Fullstack Bootcamp</h3>
                        <p>By Angela Yu | Nov 2023</p>
                    </div>
                    <div className="education-1">
                        <h3>React - Complete course</h3>
                        <p>By Academind | Nov 2023</p>
                    </div>
                </div>
                <div className="divisor-ver-line">
                </div>
                <div className="bottom-right">
                    <h2>Languages</h2>
                    <ul>
                        <li>English | <span>Fluent</span></li>
                        <li>Spanish | <span>Native</span></li>
                        <li>German | <span>Basic</span></li>
                    </ul>
                </div>
            </div>
            <div className="skills">
                <h2>Stack</h2>
                <div className="skills-lines">
                    <div className="stack-l1">
                        <div className="stack-div">
                            <img src={reactLogo} width='50' alt="react logo" />
                            <p>React</p>
                        </div>
                        <div className="stack-div">
                            <img src={javascriptLogo} width='50' alt="javascript logo" />
                            <p>JavaScript</p>
                        </div>
                        <div className="stack-div">
                            <img src={nodeJSLogo} width='50' alt="nodeJS logo" />
                            <p>NodeJS</p>
                        </div>
                        <div className="stack-div">
                            <img src={expressLogo} width='50' alt="express.js logo" />
                            <p>Express.js</p>
                        </div>
                        <div className="stack-div">
                            <img src={postgresqlLogo} width='50' alt="postgresql logo" />
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                    <div className="stack-l2">
                        <div className="stack-div">
                            <img src={htmllLogo} alt="html logo" width='50' />
                            <p>HTML</p>
                        </div>
                        <div className="stack-div">
                            <img src={cssLogo} alt="css logo" width='50' />
                            <p>CSS</p>
                        </div>
                        <div className="stack-div">
                            <img src={bootstrapLogo} alt="bootstrap logo" width='50' />
                            <p>Bootstrap</p>
                        </div>
                        <div className="stack-div">
                            <img src={tailwindlLogo} alt="tailwind logo" width='50' />
                            <p>Tailwind</p>
                        </div>
                        <div className="stack-div">
                            <img src={adobeLogo} alt="adobe logo" width='50' />
                            <p className="adobe-studio">Adobe Creative<br/> Studio</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default About