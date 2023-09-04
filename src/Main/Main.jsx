import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
