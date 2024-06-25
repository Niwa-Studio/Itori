import React from "react";
import Header from "../components/Header";
import login from "../assets/images/about/coffee-shop-img.jpg";
import arrow from "../assets/icons/left-arrow.svg";
import eye from "../assets/icons/eye.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex h-screen flex-col items-stretch">
      <Header />
      <div className="mt-16 flex flex-1">
        <div
          className="basis-7/12"
          style={{
            backgroundImage: `url(${login})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex basis-5/12 flex-col gap-10 pb-20 pe-16 ps-12 pt-10">
          <Link to="/" className="flex gap-5 self-start">
            <img src={arrow} alt="" />
            Back
          </Link>
          <form action="" className="flex flex-col gap-10">
            <h1 className="text-center text-3xl font-semibold">Login</h1>
            <div className="mx-5">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Enter your username..."
                id="username"
                className="mb-5 block w-full rounded-3xl bg-shapes-grey-4 px-7 py-2"
              />
              <label htmlFor="password" className="block">
                Password
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="password"
                  placeholder="Enter your password..."
                  className="w-full rounded-3xl bg-shapes-grey-4 px-7 py-2"
                />
                <img
                  src={eye}
                  alt=""
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <button className="self-center rounded-full bg-[#5C3F32] px-20 py-3 text-[18px] font-semibold italic text-white">
              Login
            </button>
            <div className="h-[2px] w-[270px] self-center bg-black"></div>
            <Link to="/signup" className="self-center">
              Don’t have an account yet? Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
