import { Outlet } from "react-router-dom";
import Banner from "../components/banner";
import BannerImage from "../components/BannerImage";


const Home = () => {
  return (
    <div className="flex flex-col">
      <Banner/>
      <BannerImage/>
      <Outlet/>
    </div>
  );
};

export default Home;