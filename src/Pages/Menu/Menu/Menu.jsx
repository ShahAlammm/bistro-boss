import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Menu = () => {
  const {menu} = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover bgImg={img} title="our menu"></Cover>
      <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
      {/* Offer */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert */}
      <MenuCategory items={desserts} coverImg={dessertImg} title="dessert"></MenuCategory>
      {/* Pizza */}
      <MenuCategory items={pizza} coverImg={pizzaImg} title="pizza"></MenuCategory>
      {/* Dessert */}
      <MenuCategory items={salad} coverImg={saladImg} title="salad"></MenuCategory>
      {/* soup */}
      <MenuCategory items={soup} coverImg={soupImg} title="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
