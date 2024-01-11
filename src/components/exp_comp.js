import React from "react";
import "./exp_comp.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useEffect } from "react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a delay to simulate loading time, you can adjust this based on your needs
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Clear the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);
  return (
    <div className={`moving-component ${isVisible ? "visible" : ""}`}>
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
    </div>
  );
}
