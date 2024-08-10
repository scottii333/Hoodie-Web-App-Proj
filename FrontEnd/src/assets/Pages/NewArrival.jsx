import "../styles/NewArrival.css";
import { NewProdCard } from "../Components/NewProdCard";
export const NewArrival = () => {
  return (
    <section className="NewArrival-Section">
      <h2 style={{ fontSize: "3rem", marginTop: "5rem", marginBottom: "5rem" }}>
        New Arrivals
      </h2>
      <div className="NewArrival-Card-Section">
        <NewProdCard />
        <button className="NewArrival-Card-Btn">Products </button>
      </div>
    </section>
  );
};
