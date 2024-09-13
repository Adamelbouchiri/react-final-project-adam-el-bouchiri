import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { objContext } from "../../../App";

export const SignUp = () => {
  const navigate = useNavigate();
  let { obj, setObj } = useContext(objContext);

  return (
    <div className="py-20 px-40">
      <h1 className="text-4xl">Create Account</h1>
      <h1 className="text-xl font-light pb-5">Your Personal Details</h1>
      <h1 className="text-l font-light pb-2">First Name</h1>
      <input
        onChange={(e) => {
          setObj({ ...obj, firstName: e.target.value });
        }}
        type="text"
        className="border outline-none p-2 w-3/4 mb-2"
        placeholder="Enter Your FirstName"
      />
      <h1 className="text-l font-light pb-2">Last Name</h1>
      <input
        onChange={(e) => {
          setObj({ ...obj, lastName: e.target.value });
        }}
        type="text"
        className="border outline-none p-2 w-3/4 mb-2"
        placeholder="Enter Your LastName"
      />
      <h1 className="text-l font-light pb-2">Email</h1>
      <input
        onChange={(e) => {
          setObj({ ...obj, email: e.target.value });
        }}
        type="text"
        className="border outline-none p-2 w-3/4 mb-2"
        placeholder="Enter Your Email"
      />
      <h1 className="text-l font-light pb-2">Password</h1>
      <input
        onChange={(e) => {
          setObj({ ...obj, password: e.target.value });
        }}
        type="text"
        className="border outline-none p-2 w-3/4 mb-2"
        placeholder="Enter Your Password"
      />
      <button
        onClick={() => navigate("/account")}
        className="block mt-5 py-3 px-10 text-l rounded bg-black text-white"
      >
        Create Account
      </button>
    </div>
  );
};
