import React from "react";
import edit from "../assets/icons/edit.svg";

const Detail = ({ col1, col2 }) => {
  return (
    <div className="grid grid-cols-12">
      <span className="col-span-2 text-[18px]">{col1}</span>
      <span className="col-span-8 col-start-4 text-[18px] text-[#6C6C6C]">
        {col2}
      </span>
      <img src={edit} alt="" className="justify-self-end" />
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="mt-16">
      <h1 className="mx-auto mb-10 text-3xl font-semibold lg:container">
        Settings
      </h1>
      <div className="bg-shapes-grey-3">
        <div className="mx-auto lg:container">
          <h2 className="text-2xl font-semibold">Account</h2>
          <div>
            <Detail col1={"First Name"} col2={"Shino"} />
            <Detail col1={"Last Name"} col2={"Yamamoto"} />
            <Detail
              col1={"Shipping Address"}
              col2={"274 Sakura Blossom Lane, Moonlit Gardens, Serenity City"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
