import "../styles/HoodieInfo.css";
import HoodieInfoImg from "../Images/ImgMarble.png";
export const HoodieInfoSect = () => {
  return (
    <div className="Hoodie-Info-Bg">
      <h1 className="Hoodie-Info-Bg-h1">Oversized</h1>
      <h3 className="Hoodie-Info-Bg-h3">Splendid Ivory Hoodie</h3>
      <div className="Hoodie-Info-Image">
        <img src={HoodieInfoImg} style={{ width: "100%" }}></img>
      </div>
    </div>
  );
};
