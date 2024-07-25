import "./navbar.scss";
import brandLogo from "../../assets/homeestate.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

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
        <a href="/" className="sign">
          Sign In
        </a>
        <a href="/" className="register sign">
          Sign Up
        </a>
        <div className="menu-icon">
          {open ? (
            <MdOutlineClose
              color={open ? "white" : "black"}
              onClick={() => setOpen((prev) => !prev)}
            />
          ) : (
            <RxHamburgerMenu
              color={open ? "white" : "black"}
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>
        <div className={open ? "menu active" : "menu disable-menu"}>
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
