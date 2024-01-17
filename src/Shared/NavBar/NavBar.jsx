import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const {cart} = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Order
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            onClick={handleLogOut}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Sign Out
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            to="/login"
            onClick={handleLogOut}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            LogIn
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-40 text-gray-200 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-serif uppercase">
            BISTRO BOSS
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <p className="uppercase text-indigo-500 font-serif font-semibold">{user?.displayName}</p>
        <Link to="/dashboard/cart" className="indicator">
          <span className="indicator-item badge badge-secondary">
            +{cart.length}
          </span>
          <button className="btn btn-ghost">
            <FaShoppingCart className="w-10 h-6"></FaShoppingCart>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
