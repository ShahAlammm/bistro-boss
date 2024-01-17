import {
  FaAd,
  FaBook,
  FaCalendarAlt,
  FaCreditCard,
  FaEnvelope,
  FaHome,
  FaListAlt,
  FaListUl,
  FaSearch,
  FaShopify,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

  const [isAdmin] = useAdmin();


  return (
    <div className="flex">
      <div className="w-40 md:w-72 min-h-screen bg-[#D1A054]">
        <h1 className="md:text-3xl mt-14 uppercase md:p-5 text-center text-black font-serif font-bold">
          Bistro boss
        </h1>
        <ul className="menu md:text-lg font-serif uppercase md:mt-24">
          {isAdmin ? (
            <ul>
              <li className="text-black">
                <NavLink to="/dashboard/admin">
                  <FaHome className="md:w-7 md:h-10"></FaHome>Admin home
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/addItems">
                  <ImSpoonKnife className="md:w-7 md:h-10"></ImSpoonKnife>add
                  items
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/manageItems">
                  <FaListUl className="md:w-7 md:h-10"></FaListUl>manage items
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/booking">
                  <FaBook className="md:w-7 md:h-10"></FaBook>Manage bookings
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/users">
                  <FaUsers className="md:w-7 md:h-10"></FaUsers>All Users
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="text-black">
                <NavLink to="/dashboard/user">
                  <FaHome className="md:w-7 md:h-10"></FaHome>User Home
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt className="md:w-7 md:h-10"></FaCalendarAlt>
                  reservation
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/paymentHistory">
                  <FaCreditCard className="md:w-7 md:h-10"></FaCreditCard>
                  payment history
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart className="md:w-7 md:h-10"></FaShoppingCart>My
                  Cart
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/review">
                  <FaAd className="md:w-7 md:h-10"></FaAd>add review
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/bookings">
                  <FaListAlt className="md:w-7 md:h-10"></FaListAlt>my booking
                </NavLink>
              </li>
            </ul>
          )}
        </ul>
        {/* Shard  */}
        <div className="divider divider-neutral"></div>
        <ul className="menu md:text-lg font-serif uppercase">
          <li className="text-black">
            <NavLink to="/">
              <FaHome className="md:w-7 md:h-10"></FaHome>Home
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/menu">
              <FaSearch className="md:w-7 md:h-10"></FaSearch>Menu
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/order/salad">
              <FaShopify className="md:w-7 md:h-10"></FaShopify>shop
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/contact">
              <FaEnvelope className="md:w-7 md:h-10"></FaEnvelope>contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
