import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

function Page() {
    const [uname, setUname] = React.useState("Joe")
    function butClick() {
        setUname("Peter")
    }
    return (
        <div>
            <Header 
                uname={uname}
            />
            <Body 
                uname={uname}
            />
            <button onClick={butClick}>Click!</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)