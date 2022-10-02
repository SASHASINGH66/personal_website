import React from 'react';
import {useState} from 'react';
import './reading_comp.css';


const Readingcomp = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="reading-component">
      <div className="read">
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h1 id="book-title">{props.title}    </h1>
        </div>
        <div>

        {isHovering && <h2 className="read" id="book-desc">{props.desc_book}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Readingcomp;