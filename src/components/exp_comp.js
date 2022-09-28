import React from "react";
import './exp_comp.css'

export default function Exp(props){
    return (
        <div>
        <h1>{props.position}</h1>
        <h2>{props.date}</h2>
        </div>
    )
}