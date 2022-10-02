import React from "react";
import "./experience.css"
import Exp from "../components/exp_comp"

function Experience(){
    return(
    <div className="experiences-section">
    
    <h1 id="myexp">my experiences</h1>
    <Exp position="software developer at codebase" date="september 2022-present"  />
    <Exp position="software engineer intern at wayu health" date="august-october 2021"  />
    <Exp position="president of interact club at delhi public school, vasant kunj" date="march 2021-april 2021"  />
    <Exp position="founder, lead editor of environmental magazine at delhi public school, vasant kunj" date="march 2020-april 2022"  />
    </div>
    )
}

export default Experience;