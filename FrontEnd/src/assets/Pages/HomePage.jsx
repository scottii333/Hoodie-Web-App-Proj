import "../styles/Home.css";
import HomeSplendidImg from "../Images/HomeImg.png";
import HomeSplendidH1 from "../Images/Greeting.png";

export const HomeSect = () => {
  return (
    <div id="Home-Section" className="Home-Section">
      <div className="Home-Section-Img">
        <div className="Home-Greeting">
          <div className="Home-Greeting-H1">
            <img
              src={HomeSplendidH1}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <button>Products 🛒</button>
        </div>
        <div className="Home-Splendid-Img">
          <img
            src={HomeSplendidImg}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
