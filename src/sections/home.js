import React from "react";
import './home.css'

function Home() {
    return (
      <div className="home-section">
        <header className="App-header">
          <div className="text">
          <p className='hi'>
            heyyy, i'm sasha. 
          </p>
          
          <p className = 'passions'>
            i like music, running, coffee, and using tech for social good!
          </p>
          </div>
         
          <img src={require("./homepage.jpg")} className="mypic" alt="my_pic" />
        </header>
      
  
      </div>
    );
  }
  
  export default Home;
  