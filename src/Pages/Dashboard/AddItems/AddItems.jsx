import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
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

      const menuRes = await axiosSecure.post('/menu', menuItem)
      console.log(menuRes.data)
      if(menuRes.data){
        // show success
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the menu`,
            showConfirmButton: false,
            timer: 1500
          });

      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div className="bg-[#F3F3F3] p-2 md:p-10 font-semibold">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe"
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
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option defaultValue>select category</option>
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
                type="number"
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
              {...register("recipe", { required: true })}
              placeholder="Details"
              className="textarea textarea-bordered textarea-lg w-full mb-5"
            ></textarea>
          </div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />{" "}
          <br />
          <button
            className="btn mt-5 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white"
            type="submit"
          >
            Add Item<ImSpoonKnife></ImSpoonKnife>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
