import "../styles/CartPopUp.css";
import PropTypes from "prop-types";

export const CartPopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="Cart-PopUp-Container">
      <div className="Cart-Popup-Content">
        <span className="Close-Button" onClick={onClose}>
          &times;
        </span>
        <h2>Your Cart</h2>
        {/* Add cart items or other content here */}
        <p>No items in cart.</p>
      </div>
    </div>
  );
};

CartPopUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
