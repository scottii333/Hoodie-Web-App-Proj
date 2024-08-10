import "../styles/Footer.css";
import FooterLogo from "../Images/Greeting.png";

export const FooterSect = () => {
  return (
    <footer>
      <section>
        <div>
          <ul>
            <li>Term and Conditions</li>
            <li>Policy</li>
            <li>Shipping</li>
          </ul>
        </div>
        <img
          src={FooterLogo}
          style={{ minWidth: "10rem", maxWidth: "15rem" }}
        />
        <div>
          <ul>
            <li>Term and Conditions</li>
            <li>Policy</li>
            <li>Shipping</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
