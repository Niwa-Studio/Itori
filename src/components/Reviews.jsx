import React from "react";
import Customer from "./Reviews/Customer";
import alex from "../assets/images/alex-pic.jpg";

const Reviews = () => {
  return (
    <div className="mx-auto my-20 flex flex-col items-center gap-10 lg:container">
      <h1 className="text-3xl font-bold">Our Customer Say</h1>
      <div>
        <Customer
          title={"Best Coffee in Town!"}
          message={
            "“I absolutely love Itori Coffee Shop! The ambiance is perfect for both working and relaxing. The baristas are incredibly friendly, and the coffee is always top-notch. Their latte art is a lovely touch, and the pastries are always fresh and delicious. I highly recommend trying their seasonal specials. Itori is my go-to spot for coffee!“"
          }
          name={"Alex P."}
          imageURL={alex}
        />
      </div>
    </div>
  );
};

export default Reviews;
