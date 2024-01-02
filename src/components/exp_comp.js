import React from "react";
import "./exp_comp.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

// export default function Exp({info}){
//     return (
//         <div className='exp'>
//         <h1 id="pos">{info.position}</h1>
//         <h2 id="date">{info.date}</h2>
//         <div className="border"></div>
//         </div>
//     )
// }

export default function Exp({ props }) {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div className="header" onClick={() => setFlip(!flip)}>
        <h2 id="date">{props.date}</h2>
        <h3 id="company">{props.company}</h3>
        <br />
        <br />
      </div>
      <div className="desc" onClick={() => setFlip(!flip)}>
        <h1 id="pos">{props.position}</h1>
        <br />
      </div>
    </ReactCardFlip>
  );
}
