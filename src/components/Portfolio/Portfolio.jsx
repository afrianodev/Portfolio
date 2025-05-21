import React from "react";
import './portfolio.css'
import portfolioInfo from "./portfolio_data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio mt-16">
            <div className="h-[0.25px] w-[75%] bg-white mb-8 sm:mb-16"></div>
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <div className="grid grid-cols-1 p-2 sm:p-8 gap-6">
                {portfolioInfo.map((work, index)=> {
                    return <div className="flex items-center px-1 py-3 sm:p-3 border-zinc-600 rounded-lg select-none" key={index}>
                                <a href={work.w_url} target="_blank" className="flex justify-end flex-1">
                                    <img src={work.w_img} className="rounded-lg transition-transform duration-300 hover:scale-[105%] w-[80%]" alt={work.description}/>
                                </a>
                                <div className="w-1/2 flex flex-col h-full justify-between items-start gap-1 sm:gap-4 p-0 md:p-6">
                                    <h3 className="text-3xl text-[#007EA7] font-medium title-works">{work.w_name}</h3>
                                    <p className="p-2 text-xs sm:text-base">{work.description}</p>
                                    <div>
                                        <p className="font-bold text-[#007EA7]">Techs:</p>
                                        <p>{work.techs}</p>
                                    </div>
                                    <div className="flex gap-2 sm:gap-4">
                                        <a href={work.github} target="_blank"><div className="flex flex-col items-center">
                                            <FaGithub className="text-[#007EA7]" />
                                            <p className="text-base">Repository</p>
                                        </div></a>
                                        <a href={work.w_url} target="_blank"><div className="flex flex-col items-center">
                                            <FaExternalLinkAlt className="text-[#007EA7]" />
                                            <p className="text-base">Live DEMO</p>
                                        </div></a>
                                    </div>
                                </div>
                            </div>
                })}
            </div>
        </div>
    )
}

export default Portfolio