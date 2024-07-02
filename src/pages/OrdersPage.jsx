import React, { useState } from "react";
import filter from "../assets/icons/filter.svg";
import edit from "../assets/icons/edit.svg";
import arrowdown from "../assets/icons/arrow-down.svg";
import arrowup from "../assets/icons/arrow-up.svg";
import preparingIcon from "../assets/icons/preparing.svg";
import deliveredIcon from "../assets/icons/delivered.svg";
import cancelledIcon from "../assets/icons/cancelled.svg";
import shippingIcon from "../assets/icons/shipping.svg";

const statuses = {
  preparing: {
    bgcolor: "preparing",
    color: "font-preparing",
    icon: preparingIcon,
    text: "Preparing",
  },
  shipping: {
    bgcolor: "shipping",
    color: "font-shipping",
    icon: shippingIcon,
    text: "Shipping",
  },
  cancelled: {
    bgcolor: "cancelled",
    color: "font-cancelled",
    icon: cancelledIcon,
    text: "Cancelled",
  },
  delivered: {
    bgcolor: "delivered",
    color: "font-delivered",
    icon: deliveredIcon,
    text: "Delivered",
  },
};

const Status = ({ status: { bgcolor, color, icon, text } }) => {
  const backgroundColor = "bg-" + bgcolor;
  const fontColor = "text-" + color;

  return (
    <div
      className={`flex min-w-[210px] justify-center gap-[10px] rounded-full px-5 py-2 ${backgroundColor}`}
    >
      <img src={icon} alt="" />
      <span className={`text-[18px] ${fontColor}`}>{text}</span>
    </div>
  );
};

const Product = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-24">
        <span>1 pcs</span>
        <span>N/A</span>
        <span>Small - 12 oz | 354.9 ml</span>
      </div>
      <span>₱ 0.00</span>
    </div>
  );
};

const Order = ({ status, order, datetime }) => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div className="flex flex-col gap-10 rounded-lg bg-shapes-grey-3 px-10 py-7">
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <Status status={status} />
          <span>Order #65758 | Espresso, Croissant, Muffins</span>
        </div>
        <div className="flex items-center gap-10">
          <span>June 21, 2024 | 1:28 pm</span>
          <img src={arrowdown} alt="" />
        </div>
      </div>

      <div className="h-px bg-black"></div>
      <div>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

const OrdersPage = () => {
  return (
    <div className="mx-auto mb-10 mt-16 lg:container">
      <div className="mb-10 flex justify-between">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <div className="flex items-center gap-5">
          <img src={filter} alt="" />
          <img src={edit} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <span>Today</span>
          <div className="flex flex-col gap-5">
            <Order status={statuses.preparing} />
            <Order status={statuses.shipping} />
            <Order status={statuses.delivered} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span>Yesterday</span>
          <div className="flex flex-col gap-5">
            <Order status={statuses.delivered} />
            <Order status={statuses.cancelled} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
