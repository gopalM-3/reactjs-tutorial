import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function Header() {
    return (
        <div className="center">
            <img src={require("./naruto.png")} alt="Profile pic" />
            <h3 className="font">Uzumaki Naruto</h3>
            <p className="des">Shinobi from the hidden leaf</p>
            <small className="font">naruto.uzumaki</small>
            <div><button>Email</button></div>
        </div>
    )
}

function Body() {
    return (
        <div>
            <h3 className="font">About</h3>
            <p className="font">Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
            <h3 className="font">Interests</h3>
            <p className="font">Ramen</p>
        </div>
    )
}

function Footer() {
    return (
        <small className="center font footer">Gopal Dev. All rights reserved.</small>
    )
}

function Page() {
    return (
        <div className="main">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)