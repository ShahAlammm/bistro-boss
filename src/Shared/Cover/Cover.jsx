import { Parallax } from "react-parallax";

const Cover = ({ bgImg, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bgImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[600px] md:px-48 md:py-32">
        <div className="hero-overlay bg-[#15151599] bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
