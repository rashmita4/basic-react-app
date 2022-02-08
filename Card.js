import React from "react"

export default function Card(props) {
   /* let badgeText
    if(props.openSpots===0){
        badgeText="Sold Out"
    }
    else if(props.location==="Online"){
        badgeText="Online"
    }
    let badgeValue
    if(badgeText===null){
        badgeValue=false
    }
    else {
        badgeValue=true
    }*/
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props.location)
    return (
        

        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.car.coverImg} className="card--image" />
            <div className="card--stats">
                <img src="star.jpg" className="card--star" />
                <span>{props.car.rating}</span>
                <span className="gray">({props.car.reviewcount}) • </span>
                <span className="gray">{props.car.country}</span>
            </div>
            <p>{props.car.title}</p>
            <p><span className="bold">From {props.car.price}</span> / person</p>
        </div>
    )
}