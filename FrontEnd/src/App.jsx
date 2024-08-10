import { HeaderSect } from "./assets/Components/Header.jsx";
import { FooterSect } from "./assets/Components/Footer.jsx";
import { HomeSect } from "./assets/Pages/HomePage.jsx";
import { BenefitSect } from "./assets/Components/Benefits.jsx";
import { AboutSect } from "./assets/Pages/AboutPage.jsx";
import { NewArrival } from "./assets/Pages/NewArrival.jsx";
import { HoodieInfoSect } from "./assets/Components/HoodieInfo.jsx";
import { CustomerSect } from "./assets/Pages/CustomerPage.jsx";
import "./assets/styles/App.css";
export const App = () => {
  return (
    <main>
      <HeaderSect />
      <HomeSect />
      <BenefitSect />
      <AboutSect />
      <NewArrival />
      <HoodieInfoSect />
      <CustomerSect />
      <FooterSect />
    </main>
  );
};
