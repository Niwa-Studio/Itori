import React from "react";

const Product = ({ product: { name, imageURL, price } }) => {
  return (
    <div className="col-span-3">
      <div>
        <img
          src={imageURL}
          alt=""
          className="aspect-square rounded-t-lg object-cover"
        />
      </div>
      <div className="bg-shapes-grey-4 flex flex-col items-center rounded-b-lg">
        <div className="flex flex-col items-center p-5 pb-0">
          <h2 className="mb-2 text-2xl font-semibold">{name}</h2>
          <span>PHP {price}</span>
        </div>
        <button className="text-font-green self-stretch p-5 font-bold italic">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Product;
