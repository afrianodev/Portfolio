import React from "react";
import './about.css';
import reactLogo from '../../assets/react-logo.svg';
import javascriptLogo from '../../assets/js-logo.svg';
import nodeJSLogo from '../../assets/nodejs-logo.svg';
import expressLogo from '../../assets/express-logo.svg';
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
                    </div>
                    <div className="stack-l2">
                        <div className="stack-div">
                            <img src='https://i.imgur.com/cDg5xM8.png' alt="html logo" width='30' />
                            <p>MongoDB</p>
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