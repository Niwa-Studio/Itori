import React from "react";
import productsImages from "../assets/images/products/productURLs.js";
import Product from "../components/ProductsPage/Product";

const ProductsPage = () => {
  return (
    <section className="mb-40 mt-16 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">Products</h1>
      <p>
        Discover our exceptional range of handcrafted beverages and delicious
        treats, each made with the finest ingredients and a passion for quality.
      </p>
      <div className="self-stretch">
        <div className="mx-auto w-max">
          <button className="rounded-t-3xl bg-shapes-grey-3 px-24 py-3">
            Coffees
          </button>
          <button className="rounded-t-3xl px-24 py-3">Pastries</button>
          <button className="rounded-t-3xl px-24 py-3">Others</button>
        </div>
        <div className="flex flex-col gap-20 bg-shapes-grey-3 p-16">
          <div>
            <h2 className="text-2xl font-semibold">Espresso Drinks</h2>
            <div>
              <Product />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
