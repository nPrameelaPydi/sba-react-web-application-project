import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link className="navLink" to="/">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/quiz">
            Quiz
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/scoreboard">
            Scoreboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
