import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../Chef-service/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <div className="bg-black my-24">
        <h1 className="text-4xl text-slate-300 text-center font-serif p-10 lg:p-20">Call us : 01660166344</h1>
      </div>
      <Recommends></Recommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
