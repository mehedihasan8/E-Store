import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../../Hooks/useCard";

const NavBar = () => {
  const product = useCard();
  // const product = [1];
  return (
    <div className="navbar bg-slate-900 text-slate-200 px-6 sticky top-0 z-10">
      <div className="navbar-start">
        <Link className="font-bold">Local E-Store</Link>
      </div>
      <div className="navbar-end flex gap-x-8 font-semibold">
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
          <button className="btn btn-outline btn-success btn-sm">login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
