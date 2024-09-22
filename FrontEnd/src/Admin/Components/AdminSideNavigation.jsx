import "../styles/AdminSideNavigation.css";
import { Link } from "react-router-dom";
import DashboardIcon1 from "../Images/1.png";
import ProductIcon2 from "../Images/2.png";
import OrderIcon3 from "../Images/3.png";
import ShippingIcon4 from "../Images/4.png";
import MessageIcon5 from "../Images/5.png";
import AdminLogo from "../Images/Logo.png";

export const AdminSideNavigation = () => {
  return (
    <div className="Admin-Side-Container">
      <img src={AdminLogo} style={{ width: "4rem" }} />
      <hr className="beige-line" />
      <div className="Admin-Side-Buttons">
        <Link to="Dashboard">
          <button>
            <img src={DashboardIcon1} style={{ width: "1.5rem" }} /> Dashboard
          </button>
        </Link>
        <Link to="Products">
          <button>
            <img src={ProductIcon2} style={{ width: "1.5rem" }} /> Products
          </button>
        </Link>
        <Link to="Orders">
          <button>
            <img src={OrderIcon3} style={{ width: "1.5rem" }} />
            Orders
          </button>
        </Link>
        <Link to="Shipping">
          <button>
            <img src={ShippingIcon4} style={{ width: "1.5rem" }} />
            Shipping
          </button>
        </Link>
        <Link to="Messages">
          <button>
            <img src={MessageIcon5} style={{ width: "1.5rem" }} />
            Messages
          </button>
        </Link>
      </div>
    </div>
  );
};
