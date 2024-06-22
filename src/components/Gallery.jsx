import React from "react";
import shop1 from "../assets/images/gallery-shop.jpg";
import shop2 from "../assets/images/gallery-shop-2.jpg";
import shop3 from "../assets/images/gallery-shop-3.jpg";

const Gallery = () => {
  return (
    <div className="my-20 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="text-base">
          Explore the essence of Itori through our captivating gallery, where
          every image tells a story of our love for coffee and community.
        </p>
      </div>
      <div>
        <img src={shop3} alt="" />
        <div>
          <img src={shop2} alt="" />
          <img src={shop1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
