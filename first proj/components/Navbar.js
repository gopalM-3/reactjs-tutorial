import React from "react"

function Navbar() {
    return (
        <header className="head">
            <nav className="navBar">
                <img src={require("./logo.png")} alt="React logo" />
                <h2 className="left">ReactFacts</h2>
                <h3 className="right">React Course - Project 1</h3>
            </nav>
        </header>
    )
}

export default Navbar