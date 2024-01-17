import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import DashCart from "../Pages/Dashboard/DashCart/DashCart";
import PrivateRouts from "./PrivateRouts";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRout from "./AdminRout";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouts>
        <Dashboard></Dashboard>
      </PrivateRouts>
    ),
    children: [
      {
        path: "cart",
        element: <DashCart></DashCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // Admin use only
      {
        path: "addItems",
        element: (
          <AdminRout>
            <AddItems></AddItems>
          </AdminRout>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRout>
            <ManageItem></ManageItem>
          </AdminRout>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRout>
            <AllUsers></AllUsers>
          </AdminRout>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRout>
            <UpdateItem></UpdateItem>
          </AdminRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/menu/${params.id}`),
      },
    ],
  },
]);
export default router;
