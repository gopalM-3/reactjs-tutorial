import React from "react"

function Joke(props) {
    return (
        <div>
            <h1>{props.joke}</h1>
            <h3>{props.punch}</h3>
            <hr />
        </div>
    )
}

export default Joke