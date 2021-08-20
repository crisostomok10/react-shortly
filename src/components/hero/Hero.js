import React from 'react'
import './Hero.css'
import heroImg from "../../images/illustration-working.svg"

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <div className="hero-header">
                    More than just shorter links
                </div>
                <div className="hero-body">
                    Build your brand's recognition and get detailed
                    insights on how your links are performing.
                </div>
                <div><button className="hero-btn">Get Started</button></div>
            </div>  
            <div className="hero-right">
                <div className="hero-image"><img src={heroImg} alt="" /></div>
            </div>
        </div>
    )
}

export default Hero
