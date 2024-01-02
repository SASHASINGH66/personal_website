import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-class">
      <div className="link">
        <Link className="link" to="/" style={{ textDecoration: "none" }}>
          home
        </Link>
      </div>
      <div className="link">
        <Link
          className="link"
          to="/experience"
          style={{ textDecoration: "none" }}
        >
          experience{" "}
        </Link>
      </div>
      <div className="link">
        <Link
          className="link"
          to="/projects"
          style={{ textDecoration: "none" }}
        >
          projects{" "}
        </Link>
      </div>
      <div className="link">
        <Link className="link" to="/music" style={{ textDecoration: "none" }}>
          music{" "}
        </Link>
      </div>
      <div className="link">
        <Link className="link" to="/reading" style={{ textDecoration: "none" }}>
          reading{" "}
        </Link>
      </div>
      <div className="link">
        <Link className="link" to="/contact" style={{ textDecoration: "none" }}>
          contact{" "}
        </Link>
      </div>
    </div>
  );
}
