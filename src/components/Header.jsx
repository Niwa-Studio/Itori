import React from "react";
import logoImage from "../assets/icons/logo-image.png";
import coffee from "../assets/icons/coffee.svg";
import enter from "../assets/icons/enter.svg";
import help from "../assets/icons/help.svg";

const Header = () => {
  return (
    <header className="mx-auto flex justify-between pt-10 lg:container">
      <div className="flex items-center gap-5">
        <img src={logoImage} alt="" className="h-10 w-10" />
        <h1 className="text-4xl font-semibold">ITORI</h1>
      </div>
      <nav className="flex items-center gap-5">
        <div className="flex gap-5 px-2">
          <img src={coffee} alt="" />
          <a href="/">Products</a>
        </div>
        <div className="flex gap-5 px-2">
          <img src={enter} alt="" />
          <a href="/">Login</a>
        </div>
        <div className="flex gap-5 px-2">
          <img src={help} alt="" />
          <a href="/">About</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
