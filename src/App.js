import "./App.css";
import Home from "./sections/home";
import Music from "./sections/music";
import Experiences from "./sections/experiences";
import Contact from "./sections/contact";
import Project from "./sections/projects";
import Reading from "./sections/reading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/music" element={<Music />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <Home  />
    <Experiences  />
    <Project  />
    <Music  />
    <Reading  />
    <Contact  /> */}
    </div>
  );
}

export default App;
