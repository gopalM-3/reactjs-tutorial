import React from "react"

function Card(props) {
    return (
        <div className="flex-row">
            <img src={require(`../components/${props.item.img}`)} alt={props.item.alt} />
            <div className="flex-column">
                <h6>Located in {props.item.country}</h6>
                <h3>{props.item.place}</h3>
                <p>{props.item.desc}</p>
            </div>
        </div>
    )
}

export default Card