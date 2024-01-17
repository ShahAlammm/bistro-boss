import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const {menu} = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  return (
    <section className="mb-24">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-10 p-2">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-12">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
