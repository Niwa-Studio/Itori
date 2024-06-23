import React from "react";

const Image = ({ imageURL, name, namePosition }) => {
  return (
    <div
      className={`relative flex h-full items-${namePosition.y} justify-${namePosition.x} bg-cover bg-center p-10 text-2xl text-white before:absolute before:inset-0 before:rounded-lg before:bg-overlay-2 before:content-['']`}
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <span className="z-10 font-semibold">{name}</span>
    </div>
  );
};

export default Image;
