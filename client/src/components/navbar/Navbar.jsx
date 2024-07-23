import "./navbar.scss";
import brandLogo from "../../assets/homeestate.png";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="">
          <img src={brandLogo} alt="logo" className="brand-logo" />
        </a>
        <a href="/" className="nav_link">
          Home
        </a>
        <a href="/" className="nav_link">
          About
        </a>
        <a href="/" className="nav_link">
          Contact
        </a>
        <a href="/" className="nav_link">
          Agents
        </a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">
          Sign Up
        </a>
        <div className="menu-icon">
          <RxHamburgerMenu width={"20px"}/>
        </div>
        <div className="menu">
          <a href="/" className="nav_link">
            Home
          </a>
          <a href="/" className="nav_link">
            About
          </a>
          <a href="/" className="nav_link">
            Contact
          </a>
          <a href="/" className="nav_link">
            Agents
          </a>
          <a href="/" className="nav_link">
            Sign In
          </a>
          <a href="/" className="nav_link">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
