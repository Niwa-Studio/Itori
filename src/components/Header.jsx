import React from "react";
import logoImage from "../assets/icons/logo-image.png";
import coffee from "../assets/icons/coffee.svg";
import enter from "../assets/icons/enter.svg";
import help from "../assets/icons/help.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mx-auto flex justify-between pt-10 lg:container">
      <div className="flex items-center gap-5">
        <img src={logoImage} alt="" className="h-10 w-10" />
        <Link to="/" className="text-4xl font-semibold">
          ITORI
        </Link>
      </div>
      <nav className="flex items-center gap-5">
        <div className="flex gap-5 px-2">
          <img src={coffee} alt="" />
          <Link to="/products">Products</Link>
        </div>
        <div className="flex gap-5 px-2">
          <img src={enter} alt="" />
          <Link to="/login">Login</Link>
        </div>
        <div className="flex gap-5 px-2">
          <img src={help} alt="" />
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
