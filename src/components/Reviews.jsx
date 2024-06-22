import React from "react";
import Customer from "./Reviews/Customer";
import reviewsData from "../data/reviewsData.js";

const Reviews = () => {
  return (
    <div className="mx-auto my-20 flex flex-col items-center gap-10 lg:container">
      <h1 className="text-3xl font-bold">Our Customer Say</h1>
      <div className="flex flex-col items-center gap-10">
        {reviewsData.map((review) => {
          return (
            <Customer
              key={review.id}
              name={review.name}
              title={review.title}
              message={review.message}
              imageURL={review.imageURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
