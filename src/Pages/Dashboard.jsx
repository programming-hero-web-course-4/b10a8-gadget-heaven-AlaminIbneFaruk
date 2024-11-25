import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const Dashboard = () => {
  return (
    <div>
        <div className="flex justify-center bg-purple-600 py-6 pb-20">
          <div className="text-center text-white">
          <div className="max-w-4xl">
            <Heading title="Dashboard" subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"/>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                `btn btn-outline rounded-full btn-primary bg-white ${
                  isActive ? "btn-active" : "hover:btn-active"
                }`
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/dashboard/wishlist"
              className={({ isActive }) =>
                `btn btn-outline rounded-full btn-primary bg-white ${
                  isActive ? "btn-active" : "hover:btn-active"
                }`
              }
            >
              Wishlist
            </NavLink>
          </div>
        </div>
        </div>
        <div className="p-10">
          <Outlet/>
        </div>
    </div>
  );
};

export default Dashboard;