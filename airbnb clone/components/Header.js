import React from "react"

function Header() {
    return (
        <header className="head">
            <nav className="flex-row nav--logo">
                <img src={require("./logo.png")} alt="Airbnb logo" />
            </nav>
        </header>
    )
}

export default Header