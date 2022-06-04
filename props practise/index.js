import React from "react"
import ReactDOM from "react-dom/client"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke 
                joke="Whom did I do last night?"
                punch="Your mom"
            />
            <Joke 
                joke="Blah blah blah"
                punch="Blah"
            />
            <Joke 
                joke="Fade is the best initiator"
                punch="No lol"
            />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)