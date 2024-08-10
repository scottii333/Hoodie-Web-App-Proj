import "../styles/CustomerCard.css";
import { CustomerDataReviews } from "../Data/CustomerData";
export const CustomerCard = () => {
  return (
    <div className="Customer-Cards">
      {CustomerDataReviews.map((customer) => (
        <div className="Customer-Card" key={customer.id}>
          <img
            src={customer.customerImg}
            style={{ minWidth: "5rem", maxWidth: "6rem", borderRadius: "50%" }}
          />
          <h4>{customer.customerName}</h4>
          <p>{customer.customerReviews}</p>
          <h5>{customer.customerStar}</h5>
        </div>
      ))}
    </div>
  );
};
