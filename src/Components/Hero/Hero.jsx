import React from 'react';
import "./Hero.css"
import Header from "../Header/Header";

const Hero = () => {
  return (
        <div className="hero">
          <div className="left-h">
          <Header/>
          {/* The best add */}
          <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in the town</span>
          </div>
          {/* Hero Heading */}
          <div className="hero-text">
            <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
            </div>
            <div>
            <span>Ideal Body
            </span>
            </div>
            <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest.</span></div>
          </div>
          </div>
          <div className="right-h">Right Side</div>
        </div>
  )
}

export default Hero