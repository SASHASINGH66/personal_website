import './App.css';
import Home from './sections/home'
import Music from './sections/music'
import Experience from './sections/experiences';
import Contact from './sections/contact';
import Project from './sections/projects';


function App() {
  return (
  <div className="App">
    <Home  />
    <Experience  />
    <Project  />
    <Music  />
    <Contact  />
  </div>
  );
}

export default App;
