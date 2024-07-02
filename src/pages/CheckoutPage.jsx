import React from "react";
import edit from "../assets/icons/edit.svg";
import truck from "../assets/icons/truck.svg";
import paypal from "../assets/icons/paypal-logo-img.png";
import productsData from "../data/productsData.js";

const { imageURL, name, price } = productsData[0];

const Product = () => {
  return (
    <div className="flex gap-10 rounded-lg bg-shapes-grey-3 p-5">
      <div className="h-36 w-36">
        <img src={imageURL} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="mb-5 text-2xl font-semibold">{name}</h2>
        <div className="mb-6 flex flex-col gap-2">
          <span className="">1 pcs</span>
          <span>Small - oz | 354.9 ml</span>
        </div>
        <span className="block text-end">₱ {price}</span>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="flex basis-[47%] flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Cart</h1>
        <img src={edit} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <Product />
        <Product />
      </div>
    </div>
  );
};

const OrderSummary = () => {
  return (
    <div className="flex min-h-[840px] flex-1 flex-col gap-10 rounded-lg bg-shapes-grey-3 px-10 py-16">
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl font-semibold">Payment Method</h1>
        <div className="flex flex-col gap-5">
          <button className="bg-shapes-grey-4">
            <label
              htmlFor="COD"
              className="flex cursor-pointer justify-between px-7 py-5"
            >
              <div className="flex gap-5">
                <img src={truck} alt="" />
                Cash On Delivery
              </div>
              <input type="radio" name="payment" id="COD" />
            </label>
          </button>
          <button className="bg-shapes-grey-4">
            <label
              htmlFor="paypal"
              className="flex cursor-pointer justify-between px-7 py-5"
            >
              <div className="flex gap-5">
                <img src={paypal} alt="" className="w-6 rounded-full" />
                Paypal
              </div>
              <input type="radio" name="payment" id="paypal" />
            </label>
          </button>
        </div>
      </div>
      <div>
        <h2 className="mb-7 text-2xl font-semibold">Order Summary</h2>
        <div className="mb-10 flex flex-col gap-5">
          <div className="flex justify-between">
            <span>Subtotal &#40;2 items&#41;</span>
            <span>₱ 0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span>₱ 0.00</span>
          </div>
          <div className="h-px bg-black"></div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>₱ 0.00</span>
          </div>
        </div>
        <button className="w-full rounded-full bg-shapes-tertiary py-4 text-[18px] font-bold italic text-white">
          Place Order
        </button>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <div className="mx-auto mt-[70px] flex gap-8 lg:container">
      <Cart />
      <OrderSummary />
    </div>
  );
};

export default CheckoutPage;
