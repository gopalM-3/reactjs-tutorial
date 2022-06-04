import React from "react"

function Card(props) {
    return (
        <div className="flex-column body">
            <img className="card-img" src={require(`../components/${props.pic}`)} alt={props.picName} />
            <div className="card-text">
                <div><small>&#9733; {props.rating} ({props.count})&#183;{props.country}</small></div>
                <div><small>{props.title}</small></div>
                <small>From <b>Rs. {props.price}</b>/person</small>
            </div>
        </div>
    )
}

export default Card