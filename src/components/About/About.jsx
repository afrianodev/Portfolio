import React from "react";
import './about.css';

const About = () => {
    return ( 
        <div id="about" className="about">
            <h1 className="text-4xl font-bold">About me</h1>
            <p className="para-about para-about1">I'm a full-stack developer based in Mexico with a background in Film and Television Production. I've combined my creative roots with technical expertise to build intuitive, scalable web applications. </p>
            <p className="para-about para-about2">Driven by curiosity and a commitment to continuous learning, I thrive on transforming complex challenges into innovative, user-centered solutions.</p>
            <div className="skills">
                <h2 className="text-xl font-semibold">Skills</h2>
                <div className="p-2 flex flex-wrap justify-center gap-4 sm:gap-8">
                    <div className="flex flex-col items-center w-[auto] sm:w-[90px]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/react-logo.webp' className="w-[30px] sm:w-[50px]" alt="react logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">React</p>
                    </div>
                    <div className="flex flex-col items-center w-[auto] sm:w-[90px]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/js-logo.webp' className="w-[30px] sm:w-[50px]" alt="javascript logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">JavaScript</p>
                    </div>
                    <div className="flex flex-col w-[auto] sm:w-[90px] items-center">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/nodejs-logo.webp' className="w-[30px] sm:w-[50px]" alt="nodeJS logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">NodeJS</p>
                    </div>
                    <div className="flex flex-col items-center w-[auto] sm:w-[90px]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/express-logo.webp' className="w-[50px] sm:w-[70px]" alt="express.js logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">Express.js</p>
                    </div>
                    <div className="flex flex-col items-center w-[auto] sm:w-[90px]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/mongoDB.webp' className="w-[30px] sm:w-[40px]" alt="html logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">MongoDB</p>
                    </div>
                    <div className="flex flex-col items-center w-[auto] sm:w-[90px]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/tailwind-logo.webp' className="w-[40px] sm:w-[50px]" alt="tailwind logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">Tailwind</p>
                    </div>
                    <div className="flex flex-col items-center w-[auto] sm:w-[90px]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/python-logo.webp' className="w-[30px] sm:w-[50px]" alt="adobe logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">Python</p>
                    </div>
                    <div className="flex flex-col items-center w-[auto] sm:w-[90px]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/fastapi.webp' className="w-[40px] sm:w-[60px]" alt="adobe logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">FastAPI</p>
                    </div>
                    <div className="flex flex-col items-center w-[auto] sm:w-[90px]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center">
                            <img src='/adobe-logo.webp' className="w-[30px] sm:w-[50px]" alt="adobe logo" />
                        </div>
                        <p className="text-xs sm:text-base text-center">Adobe Creative<br/> Studio</p>
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default About