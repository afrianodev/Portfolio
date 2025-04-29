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
            <h1 className="text-4xl font-bold">About me</h1>
            <p className="para-about para-about1">A dynamic professional based in Mexico with a degree in Film and Television Production. With a lifelong passion for design and technology, I bring four years of hands-on experience in programming, blending creative vision with technical expertise.</p>
            <p className="para-about para-about2">Specialized in both frontend design and backend development, with a strong command of database management and artificial intelligence integration. My insatiable curiosity and commitment to learning drive my ability to tackle complex challenges, delivering innovative and effective solutions. Passionate, resourceful, and results-oriented, I'm always ready to transform ideas into reality.</p>
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