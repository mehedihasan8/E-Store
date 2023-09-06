import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../../Hooks/useCard";

const NavBar = () => {
  const product = useCard();
  // const product = [1];
  return (
    <div className=" md:flex justify-between items-center py-4 bg-slate-900 text-slate-200 px-6 sticky top-0 z-10">
      <div className=" text-center ">
        <Link>
          <h1 className="font-bold text-[27px] mb-4 md:mb-0">Local E-Store</h1>
        </Link>
      </div>

      {/* 
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
        
        */}

      <ul className=" md:flex gap-x-8 justify-center items-center text-center font-semibold text-lg ">
        <li>
          <Link className="hover:text-red-400" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-400" to="/">
            Shop
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-400" to="/order">
            Order
          </Link>
        </li>
        <li>
          <Link to="/order">
            <div className="indicator mt-3">
              <span className="indicator-item badge bg-[#fbbd23]">
                +{product?.length || 0}
              </span>
              <button className="px-2">
                <FaShoppingCart className="text-2xl" />
              </button>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="py-2 px-4 mb-4 md:mb-0  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-2/4 md:w-full text-center transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
              login
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
