import "../styles/AdminMain.css";
import { Outlet } from "react-router-dom";
import { AdminSideNavigation } from "../Components/AdminSideNavigation";

export const AdminMain = () => {
  return (
    <div className="Admin-Main-Section">
      <div className="Admin-Main-Side-Navbar">
        <AdminSideNavigation />
      </div>
      <div className="Admin-Main-Section-Pages">
        <Outlet />
      </div>
    </div>
  );
};
