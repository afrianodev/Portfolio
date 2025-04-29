import React from "react";
import './portfolio.css'
import portfolioInfo from "./portfolio_data";

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <p>Click in any project to see the live demo.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-8 gap-2">
                {portfolioInfo.map((work, index)=> {
                    return <div className="flex items-center p-3 border-[0.25px] border-zinc-600 rounded-lg select-none" key={index}>
                                <a href={work.w_url} target="_blank" className="w-1/2"><img src={work.w_img} className="rounded-lg transition-transform duration-300 hover:scale-[105%]"/></a>
                                <div className="w-1/2">
                                    <p className="text-center text-lg text-[#324099]">{work.w_name}</p>
                                    <p className="text-center p-2 text-sm">{work.description}</p>
                                    <div>

                                    </div>
                                </div>
                            </div>
                })}
            </div>
        </div>
    )
}

export default Portfolio