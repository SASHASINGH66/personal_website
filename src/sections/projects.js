import React from "react";
import Proj from "../components/proj_comp";
import './projects.css'

export default function Project(){
    return (
        <div className="projects-section">
        <h1 id="head">my projects</h1>
        <div className="kids">
        <Proj header="epilepsy detection" description="used tensorflow, numpy, and scikit learn to 
        develop machine learning models which 
        predicted the likelihood of a patient having a 
        seizure using electroencephalography data"  />
        <Proj header="library management system" description="used python-SQL connectivity to develop a 
        database program which kept track of
        books in a library"  />
        <Proj header="hog dice game" description="programmed a dice game in which two 
        players alternate turns trying to be the 
        first to end up with some number of total 
        points"  />
        <Proj header="autocorrect and typing speed" description="Developed a program which 
        implemented autocorrect and measured typing 
        speed using abstraction, recursion, string 
        and list manipulation"  />
        </div>
        </div>
    )
}