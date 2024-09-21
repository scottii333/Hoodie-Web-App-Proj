import "../styles/About.css";
import { AboutProductPreview } from "../Data/ProductPreviewData";

export const AboutSect = () => {
  return (
    <div className="Product-Parent-Container">
      <div className="Product-Preview-Container">
        {AboutProductPreview.map((product) => (
          <img
            key={product.id}
            src={product.prodImage}
            className="Product-About-Image"
          />
        ))}
      </div>
    </div>
  );
};
