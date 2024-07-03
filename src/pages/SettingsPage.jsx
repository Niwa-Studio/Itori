import React from "react";
import edit from "../assets/icons/edit.svg";

const Detail = ({ col1, col2 }) => {
  return (
    <div className="grid grid-cols-12">
      <span className="col-span-2 text-[18px]">{col1}</span>
      <span className="col-span-6 col-start-4 text-[18px] text-[#6C6C6C]">
        {col2}
      </span>
      <div className="col-span-3 flex justify-end">
        {col1 == "Password" ? <span>Reset Password</span> : <img src={edit} />}
      </div>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="mb-24 mt-16">
      <h1 className="mx-auto mb-10 text-3xl font-semibold lg:container">
        Settings
      </h1>
      <div className="bg-shapes-grey-3 py-10">
        <div className="mx-auto lg:container">
          <h2 className="mb-6 text-2xl font-semibold">Account</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5 rounded-lg bg-shapes-grey-4 p-10">
              <Detail col1={"First Name"} col2={"Shino"} />
              <Detail col1={"Last Name"} col2={"Yamamoto"} />
              <Detail
                col1={"Shipping Address"}
                col2={"274 Sakura Blossom Lane, Moonlit Gardens, Serenity City"}
              />
            </div>
            <div className="flex flex-col gap-5 rounded-lg bg-shapes-grey-4 p-10">
              <Detail col1={"Username"} col2={"shino45_"} />
              <Detail col1={"Password"} col2={"********"} />
            </div>
            <div className="flex flex-col gap-5 rounded-lg bg-shapes-grey-4 p-10">
              <span>Account Deletion</span>
              <div className="flex justify-between">
                <span className="text-[#6C6C6C]">
                  This action is irreversible and will result in the permanent
                  loss of all your data
                </span>
                <span className="text-font-cancelled">Delete Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
