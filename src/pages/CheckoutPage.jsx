import React from "react";
import edit from "../assets/icons/edit.svg";
import productsData from "../data/productsData.js";

const { imageURL, name, price } = productsData[0];

const Product = () => {
  return (
    <div className="flex gap-10 rounded-lg bg-shapes-grey-3 p-5">
      <div className="h-36 w-36">
        <img src={imageURL} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="mb-5 text-2xl font-semibold">{name}</h2>
        <div className="mb-6 flex flex-col gap-2">
          <span className="">1 pcs</span>
          <span>Small - oz | 354.9 ml</span>
        </div>
        <span className="block text-end">₱ {price}</span>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="flex basis-[47%] flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Cart</h1>
        <img src={edit} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <Product />
        <Product />
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <div className="mx-auto mt-[70px] flex gap-8 lg:container">
      <Cart />
      <div className="basis-[53%] outline outline-1"></div>
    </div>
  );
};

export default CheckoutPage;
