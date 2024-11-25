import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar bg-purple-600 sticky top-0 z-20 rounded-t-lg">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
          <Link to="/statistics">Statistics</Link>
      </li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul>
    </div>
    <Link className="text-xl font-bold text-base-100">Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white text-base">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
          <Link to="/statistics">Statistics</Link>
      </li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
    <Link to='/dashboard/cart'>
    <MdOutlineShoppingCart className="btn-circle bg-white h-10 w-10 p-2"/>
    </Link>
    <Link to='/dashboard/wishlist'>
    <CiHeart className="btn-circle bg-white h-10 w-10 p-2"/>
    </Link>
  </div>
</div>
  );
};

export default Navbar;