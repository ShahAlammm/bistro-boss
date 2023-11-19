import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const DashCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxios();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subHeading={"My Cart"}
      ></SectionTitle>
      <div className="m-auto">
        <div className="flex justify-evenly">
          <h2 className="text-3xl">Total Items: {cart.length}</h2>
          <h2 className="text-3xl">Total Price: {totalPrice}$</h2>
          <button className="btn bg-[#D1A054] text-slate-800">pay</button>
        </div>
        <div>
          <div className="overflow-x-auto rounded-xl mt-6">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-[#D1A054] text-slate-800 ">
                <tr>
                  <th>#</th>
                  <th>Item Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id} className="font-semibold">
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squire w-12 h-12">
                            <img src={item.image} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.name}
                      <br />
                    </td>
                    <td>{item.price}$</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCart;
