import React from "react";
import logo from "../assets/images/logo.png"

import { PiUserCircleLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const NavBar = () => {
  return (
    <div className="flex items-center p-6 justify-between bg-white sticky top-0 z-50 shadow">
      <img src={logo} alt="" />
      <ul className="flex justify-center gap-9 items-center">
        <li className="hover:text-red-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">Shop</li>
        <li className="hover:text-red-500 cursor-pointer">sales</li>
        <li className="hover:text-red-500 cursor-pointer">Features</li>
        <li className="hover:text-red-500 cursor-pointer">Blog</li>
        <li className="hover:text-red-500 cursor-pointer">About</li>
        <li className="hover:text-red-500 cursor-pointer">Account</li>
      </ul>
      <div className="flex ps-6 items-center gap-6">
        <span className="text-3xl cursor-pointer">
          <PiUserCircleLight />
        </span>
        <span className="text-3xl cursor-pointer">
          <HiOutlineShoppingBag />
        </span>
      </div>
    </div>
  );
};
