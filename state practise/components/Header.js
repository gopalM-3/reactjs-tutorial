import React from "react"

function Header(props) {
    return (
        <div>
            <h3>Current user: {props.uname}</h3>
        </div>
    )
}

export default Header