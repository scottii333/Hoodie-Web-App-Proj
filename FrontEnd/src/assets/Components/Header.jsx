import logo from "../Images/Logo.png";
import cart from "../Images/cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css";

export const HeaderSect = () => {
  return (
    <div className="Header-Parent-div">
      <header>
        <img
          className="Header-Logo"
          src={logo}
          alt="Logo"
          style={{ height: "2.5rem" }}
        />
        <nav className="Header-Navbar">
          <button>New Arrivals</button>
          <button>Products</button>
          <button>Blogs</button>
          <button>Contact</button>
        </nav>

        <button className="Cart-Btn">
          <img
            src={cart}
            alt="Cart"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </button>
        <button className="Hamburger-Btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </header>
    </div>
  );
};
