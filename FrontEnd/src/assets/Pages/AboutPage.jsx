import "../styles/About.css";
import AboutImg1 from "../Images/img1.png";
import AboutImg2 from "../Images/img2.png";
import AboutImg3 from "../Images/img3.png";
import AboutInsta from "../Images/insta.png";
import AboutFb from "../Images/fb.png";
import AboutTiktok from "../Images/tiktok.png";
export const AboutSect = () => {
  return (
    <section className="About-Section">
      <div className="About-Images">
        <img
          src={AboutImg1}
          style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}
        />
      </div>
      <div className="About-Greeting">
        <h2>Lorem ipsum dolor si amet</h2>
        <p>
          A hoodie business specializes in designing, producing, and selling
          various styles of hoodies, It often focuses on creating unique
        </p>
        <button>Discover more!</button>
        <div className="About-SocialMedia">
          <img src={AboutInsta} style={{ height: "1.5rem" }} />
          <img src={AboutFb} style={{ height: "1.5rem" }} />
          <img src={AboutTiktok} style={{ height: "1.5rem" }} />
        </div>
      </div>
      <div className="About-Images">
        <img
          src={AboutImg2}
          style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}
        />
      </div>
      <div className="About-Images">
        <img
          src={AboutImg3}
          style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}
        />
      </div>
    </section>
  );
};
