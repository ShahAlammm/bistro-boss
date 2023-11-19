import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

const Cart = ({ item }) => {
  const { image, name, recipe, price, _id } = item || {};
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();

  const { user } = useAuth();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added cart successfully .",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="mb-24 m-auto">
      <div className="card rounded-none  lg:w-96 bg-[#F3F3F3] shadow-xl shadow-cyan-600">
        <figure>
          <img src={image} className="w-full " />
        </figure>
        <p className="absolute right-0 bg-slate-900 mr-4 mt-4 px-2 text-white">
          ${price}
        </p>
        <div className="cart-body items-center text-center px-2 h-60">
          <h2 className="cart-title text-xl text-slate-500">{name}</h2>
          <p>{recipe}</p>
          <div className="cart-actions pb-10">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-0 text-orange-400 border-b-4  mt-12"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
