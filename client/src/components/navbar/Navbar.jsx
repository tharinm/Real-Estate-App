import "./navbar.scss";
import brandLogo from "../../assets/homeestate.png";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="">
          <img src={brandLogo} alt="logo" className="brand-logo" />
        </a>
        <a href="/">Home </a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
