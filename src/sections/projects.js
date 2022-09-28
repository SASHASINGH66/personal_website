import React from "react";
import "./projects.css"
import Proj from '../components/proj_comp'

function Project(){
    return (
    <div className="projects-section">
    <h1 id="proj">my projects</h1>
    <div className="projs">
    <Proj header="epilepsy detection" description="sed tensorflow, numpy, and scikit learn to
        develop machine learning models which
        predicted the likelihood of a patient having a 
        seizure using electroencephalography data" />
    <Proj header="library management" description="used python-SQL connectivity to develop a 
        database program which kept track of 
        books in a library"  />
    <Proj header="hog dice game" description="programmed a dice game in which two 
        players alternate turns trying to be the 
        first to end up with some number of total 
        points"  />
    <Proj header="hog dice game" description="programmed a dice game in which two 
        players alternate turns trying to be the 
        first to end up with some number of total 
        points"  />
    </div>
    </div>)
}

export default Project;