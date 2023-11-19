import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover bgImg={coverImg} title={title}></Cover>}
      <section className="mb-24 mt-24">
        <div className="grid lg:grid-cols-2 gap-10 p-2">
          {items?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-12">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MenuCategory;
