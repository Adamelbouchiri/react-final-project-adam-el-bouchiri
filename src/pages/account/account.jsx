import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { objContext } from "../../App";

export const Account = () => {
  const navigate = useNavigate();
  let { obj, setObj } = useContext(objContext);

  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState(false);

  const checkPass = (value) => {
    if (value !== obj.password) {
      setPass(false);
    } else {
      setPass(true);
    }
  };

  const checkEmail = (value) => {
    if (value !== obj.email) {
      setEmail(false);
    } else {
      setEmail(true);
    }
  };

  const checkSignIn = () => {
    if (pass === true && email === true) {
      alert("M3alam");
    } else {
      alert("Wa Khouna");
    }
  };

  return (
    <div className="flex p-20 gap-10 justify-center">
      <div className="border border-gray-300 p-3 w-[600px]">
        <h1 className="text-3xl tracking-widest ">New Customer</h1>
        <h1 className="text-l font-bold text-gray-500">Register Account</h1>
        <p className="leading-7 text-gray-500 pb-5">
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </p>
        <button
          onClick={() => navigate("/signUp")}
          className="block mt-5 py-3 px-10 text-l rounded bg-black text-white"
        >
          Continue
        </button>
      </div>
      <div className="border border-gray-300 p-3 w-[600px]">
        <h1 className="text-3xl tracking-widest ">Returning Customer</h1>
        <h1 className="text-l font-bold text-gray-500">
          I am a returning customer
        </h1>
        <span className="text-gray-300 pt-5 block">Email</span>
        <input
          onChange={(e) => {
            checkEmail(e.target.value);
          }}
          type="text"
          className="border outline-none p-2 w-full"
          placeholder="Enter Your Email"
        />
        <span className="text-gray-300 pt-5 block">Password</span>
        <input
          onChange={(e) => {
            checkPass(e.target.value);
          }}
          type="password"
          className="border outline-none p-2 w-full"
          placeholder="Enter Your Password"
        />
        <span className="text-gray-500 ps-2 cursor-pointer duration-300 hover:text-red-500 block">
          Forgot Your Password ?
        </span>
        <button
          onClick={() => checkSignIn()}
          className="block mt-5 py-3 px-10 text-l rounded bg-black text-white"
        >
          Sign-In
        </button>
      </div>
    </div>
  );
};
