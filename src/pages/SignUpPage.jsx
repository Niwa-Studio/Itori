import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/left-arrow-white.svg";
import eye from "../assets/icons/eye.svg";
import signup from "../assets/images/about/coffee-shop-exterior-img.jpg";

const SignUpPage = () => {
  return (
    <div
      className="relative flex h-screen items-start justify-center before:absolute before:inset-0 before:-z-0 before:content-normal before:bg-overlay-2"
      style={{
        backgroundImage: `url(${signup})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Link
        to="/login"
        className="fixed left-16 top-10 flex items-center gap-5 text-white"
      >
        <img src={arrow} alt="" />
        Back
      </Link>
      <div className="relative mt-24 flex flex-col gap-10 bg-white p-20">
        <h1 className="text-center text-3xl font-bold">Create Account</h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div>
              <label className="mb-3 block" htmlFor="firstName">
                First Name
              </label>
              <input
                className="rounded-full bg-shapes-grey-4 px-7 py-2"
                type="text"
                id="firstName"
                placeholder="Enter your first name..."
              />
            </div>
            <div>
              <label className="mb-3 block" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="rounded-full bg-shapes-grey-4 px-7 py-2"
                type="text"
                id="lastName"
                placeholder="Enter your last name..."
              />
            </div>
          </div>
          <div>
            <label htmlFor="useName" className="mb-3 block">
              Username
            </label>
            <input
              className="w-full rounded-full bg-shapes-grey-4 px-7 py-2"
              type="text"
              id="useName"
              placeholder="Enter your username..."
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-3 block">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full rounded-full bg-shapes-grey-4 px-7 py-2"
                type="text"
                id="password"
                placeholder="Enter your password..."
              />
              <img
                src={eye}
                alt=""
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        <button className="rounded-full bg-[#5C3F32] py-4 text-[18px] font-semibold italic text-white">
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
