import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#f0f0f0] pt-14">
      <div className="w-[450px]">
        <h1 className="pb-12">GET IN TOUCH</h1>
        <p>
          Any questions? Let us know in store at 8th floor, 379 Hudson St, New
          York, NY 10018 or call us on (+1) 96 716 6879
        </p>
        <div className="flex">
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestSquare />
          <FaGooglePlusG />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};
