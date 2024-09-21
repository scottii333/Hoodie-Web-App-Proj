import { HeaderSect } from "./assets/Components/Header.jsx";
import { FooterSect } from "./assets/Components/Footer.jsx";
import { HomeSect } from "./assets/Pages/HomePage.jsx";
import { BenefitSect } from "./assets/Components/Benefits.jsx";
import { AboutSect } from "./assets/Pages/AboutPage.jsx";
import { NewArrival } from "./assets/Pages/NewArrival.jsx";
import { HoodieInfoSect } from "./assets/Components/HoodieInfo.jsx";
import { CustomerSect } from "./assets/Pages/CustomerPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";

const router = createBrowserRouter([
  {
    path: "/Hoodie-Web-App-Proj/",
    element: (
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
    ),
  },
  {
    path: "/Hoodie-Web-App-Proj/Products",
    element: (
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
    ),
  },

  {
    path: "/Hoodie-Web-App-Proj/Reviews",
    element: (
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
    ),
  },
  {
    path: "/Hoodie-Web-App-Proj/Contact",
    element: (
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
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
