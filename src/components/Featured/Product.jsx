import React from "react";

const Product = ({ name, imageURL }) => {
  return (
    <div
      className="relative flex h-[550px] flex-1 items-end rounded-lg bg-cover bg-center p-10 text-2xl text-white before:absolute before:inset-0 before:rounded-lg before:bg-overlay-2 before:content-['']"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <span className="z-10">{name}</span>
    </div>
  );
};

export default Product;
