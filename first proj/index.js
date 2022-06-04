import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Navbar from "./components/Navbar"
import Content from "./components/Body"
import Footer from "./components/Footer"

function Page() {
    return (
        <div>
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)