import React from "react";
import './proj_comp.css'

export default function Proj(props){
    return(
        <div class="proj">
        <h1>{props.header}</h1>
        <h2>{props.description}</h2>
        </div>
    )
}