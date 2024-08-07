import React from "react";
import { useState } from "react";
import Product from "../components/ProductsPage/Product";
import products from "../data/productsData.js";

const categoryTypes = {
  coffees: ["Espresso Drinks", "Iced Coffees"],
  pastries: ["Pastries & Snacks", "Sandwiches & Wraps"],
  others: ["Tea Selection", "Smoothies and Fresh Juices"],
};

const ProductsPage = () => {
  const [category, setCategory] = useState("coffees");

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  const types = categoryTypes[category];

  return (
    <section className="mb-40 mt-16 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">Products</h1>
      <p>
        Discover our exceptional range of handcrafted beverages and delicious
        treats, each made with the finest ingredients and a passion for quality.
      </p>
      <div className="self-stretch">
        <div className="mx-auto w-max">
          <button
            className={
              "rounded-t-3xl px-24 py-3 text-[16px] " +
              (category === "coffees" ? "bg-shapes-grey-3" : "")
            }
            onClick={() => handleCategoryChange("coffees")}
          >
            Coffees
          </button>
          <button
            className={
              "rounded-t-3xl px-24 py-3 text-[16px] " +
              (category === "pastries" ? "bg-shapes-grey-3" : "")
            }
            onClick={() => handleCategoryChange("pastries")}
          >
            Pastries
          </button>
          <button
            className={
              "rounded-t-3xl px-24 py-3 text-[16px] " +
              (category === "others" ? "bg-shapes-grey-3" : "")
            }
            onClick={() => handleCategoryChange("others")}
          >
            Others
          </button>
        </div>
        <div className="flex flex-col gap-20 bg-shapes-grey-3 p-16">
          <div className="mx-auto lg:container">
            <h2 className="mb-5 text-2xl font-semibold">{types[0]}</h2>
            <div className="grid grid-cols-12 gap-x-5 gap-y-10">
              {products.map((product) => {
                return (
                  product.type === types[0] && (
                    <Product key={product.id} product={product} />
                  )
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="mb-5 text-2xl font-semibold">{types[1]}</h2>
            <div className="grid grid-cols-12 gap-x-5 gap-y-10">
              {products.map((product) => {
                return (
                  product.type === types[1] && (
                    <Product key={product.id} product={product} />
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
