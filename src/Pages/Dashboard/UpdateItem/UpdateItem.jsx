import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData();

  const { name, category, recipe, price, _id } = item || {};

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset("");
      }
    }
  };
  return (
    <div>
      <SectionTitle heading={"update item"}></SectionTitle>
      <div>
        <div className="bg-[#F3F3F3] p-2 md:p-10 font-semibold">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Recipe name*</span>
              </label>
              <input
                type="text"
                placeholder="Recipe"
                defaultValue={name}
                {...register("name", { required: true })}
                required
                className="input input-bordered w-full "
              />
            </div>
            <div className="md:flex mt-5 gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="dessert">Dessert</option>
                  <option value="soup">Soup</option>
                  <option value="drink">Drink</option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                defaultValue={recipe}
                {...register("recipe", { required: true })}
                placeholder="Details"
                className="textarea textarea-bordered textarea-lg w-full mb-5"
              ></textarea>
            </div>
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
            <br />
            <button
              className="btn mt-5 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white"
              type="submit"
            >
              Update Item<ImSpoonKnife></ImSpoonKnife>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
