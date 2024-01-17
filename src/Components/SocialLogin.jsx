import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  const handleGoogle = () => {
  googleSignIn().then((res) => {
    const userInfo = {
        email: res.user.email,
        name: res.user.displayName,
      };
      axiosPublic.post("/users", userInfo).then(() => {
      });
      navigate('/')
    });
  };
  return (
    <div>
      <div className="divider w-2/3 m-auto"></div>
      <div className="flex justify-center gap-10 mt-6">
        <button
          onClick={handleGoogle}
          className="btn btn-circle bg-[#D1A054B2]"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-circle bg-[#D1A054B2]">
          <FaGithub></FaGithub>
        </button>
        <button className="btn btn-circle bg-[#D1A054B2]">
          <FaFacebookF></FaFacebookF>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
