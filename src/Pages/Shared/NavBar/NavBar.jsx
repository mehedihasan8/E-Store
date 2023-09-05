import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../../Hooks/useCard";

const NavBar = () => {
  const product = useCard();
  // const product = [1];
  return (
    <div className="navbar bg-slate-900 text-slate-200 px-6 sticky top-0 z-10">
      <div className="navbar-start">
        <Link className="font-bold text">Local E-Store</Link>
      </div>
      <div className="navbar-end flex gap-x-8 ">
        <Link className="hover:text-red-400" to="/">
          Home
        </Link>
        <Link className="hover:text-red-400" to="/">
          Shop
        </Link>
        <Link className="hover:text-red-400" to="/order">
          Order
        </Link>
        <Link to="/order">
          <div className="indicator mt-3">
            <span className="indicator-item badge bg-[#fbbd23]">
              +{product?.length || 0}
            </span>
            <button className="px-2 py-1">
              <FaShoppingCart className="text-2xl" />
            </button>
          </div>
        </Link>
        <Link to="/">
          <button className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full text-center transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
            login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
