import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">InspectnGo</Link>

        {/* Center links */}
        <div className="navbar-links">
        </div>

        {/* Right */}
        <ul className="navbar-right">
          <li><Link to="/partners" className="navbar-link">Partners</Link></li>
          <li><Link to="/about" className="navbar-link">About</Link></li>
          <li><a href="#" className="navbar-link">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
