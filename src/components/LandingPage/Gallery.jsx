import React from "react";
import shop1 from "../../assets/images/gallery-shop.jpg";
import shop2 from "../../assets/images/gallery-shop-2.jpg";
import shop3 from "../../assets/images/gallery-shop-3.jpg";
import Image from "./Gallery/Image";

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
      <div className="flex h-[800px] self-stretch">
        <div className="basis-1/2">
          <Image
            name={"Downtown Branch"}
            imageURL={shop3}
            namePosition={{ y: "end", x: "end" }}
          />
        </div>
        <div className="flex basis-1/2 flex-col">
          <Image
            name={"Seaside Branch"}
            imageURL={shop2}
            namePosition={{ y: "end", x: "start" }}
          />
          <Image
            name={"Mountain View Branch"}
            imageURL={shop1}
            namePosition={{ y: "start", x: "start" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
