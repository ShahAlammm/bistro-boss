import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-background bg-fixed text-white">
      <div className="bg-slate-600 bg-opacity-60 pt-2">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div  className="md:flex justify-center items-center pb-20 pt-12 px-36 gap-10">
        <div>
          <img src={featuredImg} />
        </div>
        <div>
          <p className="text-lg">March 20, 2023</p>
          <p className="uppercase text-xl">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-gray-200 mt-12">order now</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
