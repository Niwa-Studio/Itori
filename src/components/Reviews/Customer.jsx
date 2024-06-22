import React from "react";

const Customer = ({ title, message, name, imageURL }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
        <h3>{name}</h3>
      </div>
      <img src={imageURL} alt="" />
    </div>
  );
};

export default Customer;
