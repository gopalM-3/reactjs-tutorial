import React from "react"
import ReactDOM from "react-dom/client"
import Notif from "./components/Notif"

function Page() {
    return (
        <Notif />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)