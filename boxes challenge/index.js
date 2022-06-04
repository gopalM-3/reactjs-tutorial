import React from "react"
import ReactDOM from "react-dom/client"
import boxes from "./components/boxes"
import "./index.css"
import Box from "./components/Box"

function Page() {
    // UNIFIED STATE
    const [squares, setSquares] = React.useState(boxes)
    function handleClick(id) {
        setSquares(prevSquare => {
            return prevSquare.map((square) => square.id === id ? {...square, on: !square.on} : square)
        })
    }
    const boxArray = squares.map(item => {
        return <Box
            key={item.id}
            item={item}
            toggle={handleClick}
        />
    })
    return (
        <div>
            {boxArray}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)