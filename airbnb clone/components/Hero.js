import React from "react"

function Hero() {
    return (
        <div>
            <img className="hero" src={require("./hero.png")} alt="Hero" />
            <h2 className="hero-text">Online Experiences</h2>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}

export default Hero