import "../styles/CustomerPage.css";
import { CustomerCard } from "../Components/CustomerReviewsCard";
export const CustomerSect = () => {
  return (
    <section id="Customer-Section" className="Customer-Section">
      <h1>Customer Feedbacks</h1>
      <h5>Crafted from soft, breathable fabric, they provide cozy fit.</h5>
      <CustomerCard />
      <button className="Customer-Section-Btn">view more!</button>
    </section>
  );
};
