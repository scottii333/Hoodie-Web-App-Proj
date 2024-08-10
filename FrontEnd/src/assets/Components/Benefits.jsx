import "../styles/Benefits.css";
import CODImage from "../Images/cod.png";
import CSImage from "../Images/cs.png";
import QualityImage from "../Images/quality.png";

export const BenefitSect = () => {
  return (
    <section className="Benefit-Section-Parent">
      <div className="Splendid-Benefit-Sect">
        <img src={CODImage} style={{ minWidth: "2rem", maxWidth: "3.5rem" }} />
        <h2>Delivery</h2>
        <h5>Cash on Delivery option is available</h5>
      </div>
      <div className="Splendid-Benefit-Sect">
        <img src={CSImage} style={{ minWidth: "2rem", maxWidth: "3.5rem" }} />
        <h2>Service</h2>
        <h5>Your satisfaction is our priority.</h5>
      </div>
      <div className="Splendid-Benefit-Sect">
        <img
          src={QualityImage}
          style={{ minWidth: "2rem", maxWidth: "3.5rem" }}
        />
        <h2>Qualtiy</h2>
        <h5>We ensure top-notch quality in every item we sell.</h5>
      </div>
    </section>
  );
};
