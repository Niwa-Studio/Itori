import React from "react";

const Product = ({ imageURL }) => {
  return (
    <div>
      <img src={imageURL} alt="" />
      <div>
        <div>
          <h2>Espresso</h2>
          <span>PHP 0.00</span>
        </div>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Product;
