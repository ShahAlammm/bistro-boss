import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const logIn = location.pathname.includes("login") || location.pathname.includes("signup")
  return (
    <div>
      {logIn || <NavBar></NavBar>}
      <Outlet></Outlet>
      {logIn || <Footer></Footer>}
    </div>
  );
};

export default Main;
