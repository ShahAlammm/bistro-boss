import img from "../../assets/others/authentication2.png";
import imgBg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const LogIn = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then(() => {
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Log In</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${imgBg})` }}
        className="hero min-h-screen bg-base-200"
      >
        <div
          style={{ backgroundImage: `url(${imgBg})` }}
          className="shadow-2xl p-10"
        >
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm font-semibold">
              <h1 className="text-5xl text-center p-3 font-bold">Login now!</h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    onBlur={handleCaptcha}
                    placeholder="Fill the Captcha"
                    className="input input-bordered"
                    required
                  />
                  {/* <button className="btn btn-outline btn-error btn-xs mt-3">
                    validate
                  </button> */}
                </div>
                <div className="form-control mt-5">
                  <input
                    disabled={disabled}
                    type="submit"
                    value="Sign in"
                    className="btn bg-[#D1A054B2] text-white"
                  />
                </div>
              </form>
              <p className="text-center text-[#D1A054B2] font-bold">
                <Link to={"/signup"}>New here? Create a New Account</Link>
              </p>
              <p className="text-center font-semibold">Or sign in with</p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
