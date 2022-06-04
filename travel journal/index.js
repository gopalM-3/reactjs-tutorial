import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./components/data"

function Page() {
    const cards = data.map((item) => {
        return <Card
            item={item}
        />
    })
    return (
        <div>
            <Header />
            <div className="body">
                {cards}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)