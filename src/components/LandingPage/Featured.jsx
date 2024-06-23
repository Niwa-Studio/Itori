import React from "react";
import icedLatte from "../../assets/images/iced-latte-pic.jpg";
import croissant from "../../assets/images/croissant-pic.jpg";
import smoothie from "../../assets/images/smothie-pic.jpg";
import Product from "./Featured/Product";
import left from "../../assets/icons/left-arrow.svg";
import right from "../../assets/icons/right-arrow.svg";

const Featured = () => {
  return (
    <div className="mx-auto my-40 flex flex-col items-center gap-10 lg:container">
      <h1 className="text-3xl font-bold">Featured Products</h1>
      <div className="flex gap-8 self-stretch">
        <img src={left} alt="" />
        <div className="flex flex-1 gap-6">
          <Product name="Latte" imageURL={icedLatte} />
          <Product name="Croissant" imageURL={croissant} />
          <Product name="Smoothie" imageURL={smoothie} />
        </div>
        <img src={right} alt="" />
      </div>
      <p className="text-center text-base">
        At Itori, we're dedicated to bringing you the finest selection of
        handcrafted drinks and delectable treats. Explore our featured products
        and indulge in a world of flavor and quality. Browse Products
      </p>
    </div>
  );
};

export default Featured;
