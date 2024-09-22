import logo from "../Images/Logo.png";
import cart from "../Images/cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";
import { CartPopUp } from "./CartPopUp";

export const HeaderSect = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="Header-Parent-div">
      <header>
        <Link
          to="/Hoodie-Web-App-Proj/"
          onClick={() => scrollToSection("Home-Section")}
        >
          <img
            className="Header-Logo"
            src={logo}
            alt="Logo"
            style={{ height: "2.5rem" }}
          />
        </Link>
        <nav className="Header-Navbar">
          <Link
            to="/Hoodie-Web-App-Proj/"
            onClick={() => scrollToSection("Home-Section")}
          >
            <button>Home</button>
          </Link>
          <Link
            to="/Hoodie-Web-App-Proj/Products"
            onClick={() => scrollToSection("NewArrival-Section")}
          >
            <button>Products</button>
          </Link>
          <Link
            to="/Hoodie-Web-App-Proj/Reviews"
            onClick={() => scrollToSection("Customer-Section")}
          >
            <button>Reviews</button>
          </Link>
          <Link
            to="/Hoodie-Web-App-Proj/Contact"
            onClick={() => scrollToSection("Customer-Section")}
          >
            <button>Contact</button>
          </Link>

          {/* <Link to="/Hoodie-Web-App-Proj/Admin">
            <button>Admin</button>
          </Link> */}
        </nav>

        <button className="Cart-Btn" onClick={toggleCart}>
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

      <CartPopUp isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};
