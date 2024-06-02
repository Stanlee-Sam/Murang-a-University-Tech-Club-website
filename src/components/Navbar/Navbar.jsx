import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>MUTC</h1>
      </div>
      <div className="lists">
        <ul>
          <li>
            <Link className="a" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="a" to="/leadership">
              Leadership
            </Link>
          </li>
          <li>
            <Link className="a" to="/tracks">
              Tracks
            </Link>
          </li>
          <li>
            <Link className="a" to="/events">
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
