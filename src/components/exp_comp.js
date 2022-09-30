import React from "react";
import './exp_comp.css'

export default function Exp(props){
    return (
        <div className='exp'>
        <h1 id="pos">{props.position}</h1>
        <h2 id="date">{props.date}</h2>
        <div className="border"></div>
        </div>
    )
}