import "./navbar.styles.css";
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = () => {
  return (
    <nav className="nav poppins-regular">
      <div className="nav-child logo">Logo</div>
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
