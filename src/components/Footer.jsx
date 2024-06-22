import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto flex justify-between border-t-2 border-black pb-36 pt-9 lg:container">
      <div className="flex gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <div className="flex flex-col gap-5">
            <span>Our Coffee</span>
            <span>Our Story</span>
            <span>Our Mission</span>
            <span>Our Values</span>
            <span>Itori Team</span>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-semibold">Connect With Us</h2>
          <div className="flex flex-col gap-5">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Tiktok</span>
          </div>
        </div>
      </div>
      <div>
        <span className="block text-right">
          © 2024 Itori Coffee Shop. All rights reserved.
          <br />| Designed by Niwa Studio
        </span>
      </div>
    </div>
  );
};

export default Footer;
