import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
      <Navbar/>
      <div className="min-h-[calc(100vh-300px)]"><Outlet/></div>
      </div>
      <Footer></Footer>      
    </div>
  );
};

export default MainLayout;