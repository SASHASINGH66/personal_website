import React from "react";
import './proj_comp.css'

export default function Proj(props){
    return(
        <div className='Proj1'>
        <h1 id="head_comp">{props.header}</h1>
        <h2 id="desc_comp">{props.description}</h2>
        </div>
    )
}