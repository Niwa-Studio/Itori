import React from "react";

const Customer = ({ title, message, name, imageURL }) => {
  return (
    <div className="flex w-10/12 items-center gap-10 even:flex-row-reverse">
      <div className="flex h-max w-8/12 flex-col gap-5 bg-shapes-grey-3 p-10">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-base">{message}</p>
        <h3 className="self-end text-2xl font-semibold">- {name}</h3>
      </div>
      <div className="w-4/12">
        <img
          src={imageURL}
          alt=""
          className="aspect-square rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Customer;
