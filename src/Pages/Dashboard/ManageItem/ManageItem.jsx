import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const axiosSecure = useAxios();
  const {menu, refetch} = useMenu();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Manage all item"
        subHeading="hurry up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto rounded-xl">
          <table className="table w-full">
            {/* head */}
            <thead className="uppercase font-semibold bg-[#D1A054]">
              <tr>
                <th></th>
                <th>item Image</th>
                <th>item Name</th>
                <th>Price</th>
                <th>update</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squire w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-md bg-[#D1A054]">
                        <FaEdit className="text-white text-xl"></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
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
  );
};

export default ManageItem;
