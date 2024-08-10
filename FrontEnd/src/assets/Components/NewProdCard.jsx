import "../styles/NewProdCard.css";
import { NewArrivalProducts } from "../Data/NewProdData";

export const NewProdCard = () => {
  return (
    <div className="New-Prod-Container">
      {NewArrivalProducts.map((product) => (
        <div className="New-Prod-Card" key={product.id}>
          <div className="New-Prod-Bg">
            <img src={product.prodImage} style={{ width: "100%" }} />
          </div>
          <h2>{product.prodName}</h2>
          <h3 style={{ maxWidth: "15rem", minWidth: "10rem" }}>
            {product.prodDescription}
          </h3>
          <p>{`₱ ${product.prodPrice}`}</p>
        </div>
      ))}
    </div>
  );
};
