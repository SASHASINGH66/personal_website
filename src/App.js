import './App.css';
import Home from './sections/home'
import Music from './sections/music'
import Experiences from './sections/experiences';
import Contact from './sections/contact';
import Project from './sections/projects';
import Reading from './sections/reading';



function App() {
  return (
  <div className="App">
    <Home  />
    <Experiences  />
    <Project  />
    <Music  />
    <Reading  />
    <Contact  />

  </div>
  );
}

export default App;
