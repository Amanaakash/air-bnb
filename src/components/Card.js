import React from 'react'
import person from "../img/person.png"
import starLogo from "../img/star.png"

export default function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`../images/${props.img}`} className="card--image" alt="person"/>
            <div className="card--stats">
                <img src={starLogo} className="card--star" alt="starlogo"/>
                <span>{props.rating}</span>
                <span className='gray'>{props.reviewCount} • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}