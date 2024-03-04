import "./navbar.styles.css";
import Logo from "../logo/mj-high-resolution-logo-transparent.png";
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = () => {
  function scrollFunction() {
    let e = document.getElementById("hero");
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }
  return (
    <nav className="nav poppins-regular">
      <div className="nav-child logo">
        <a href=".heroContainer">
          <img src={Logo} alt="Logo" width={80} onClick={scrollFunction} />
        </a>
      </div>
      <div className="nav-child menu">
        <span>Menu</span>
        <Hamburger
          label="Show Menu"
          size={24}
          onToggle={(toggled) => {
            if (toggled) {
              //open menu
            } else {
              // close a menu
            }
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
