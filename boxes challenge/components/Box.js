import React from "react"

function Box(props) {
    /*
    **DONE USING DERIVED STATE**
    const [square, setSquare] = React.useState(props.item)
    function handleClick() {
        setSquare(prevState => {
            return {
                ...prevState,
                on: !prevState.on
            }
        })
    }
    */
    return (
        <div className={`box fill-${props.item.on}`} onClick={() => props.toggle(props.item.id)}></div>
    )
}

export default Box