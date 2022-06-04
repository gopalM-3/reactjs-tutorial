import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/Data"

function Page() {
    const cards = data.map(item => {
        return <Card 
                    pic={item.pic}
                    picName={item.picName}
                    rating={item.rating}
                    count={item.count}
                    country={item.country}
                    title={item.title}
                    price={item.price}
                    /*  
                        you can also just put {...item} (... is the spread operator in JS) 
                            or
                        put item={item} & change the properties in the component from props.<property> to props.item.<property>
                    */
                />
    })
    return (
        <div>
            <Header />
            <Hero />
            <div className="flex-row">
                {cards}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)