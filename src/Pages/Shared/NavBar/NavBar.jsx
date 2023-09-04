import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-slate-900 text-slate-200 px-6">
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
        <Link to="/">
          <button className="btn btn-outline btn-success btn-sm">login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
