import React from "react";
import { FaLinkedin, FaYoutube, FaGithub, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white flex flex-wrap justify-between items-center px-3 py-4">
      <Link to="/RupeshPF" className="text-red-700 font-bold text-2xl">
        Rupesh.
      </Link>{" "}
      <div className="flex gap-4 items-center text-xl ">
        <Link to="https://www.linkedin.com/in/rupesh-kumar-4b1359282/">
          <FaLinkedin className="cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:scale-210   duration-300" />
        </Link>

        <Link to="https://www.youtube.com/channel/UCBg7kkPJrdDk1_oZC3ae2Wg">
          <FaYoutube className="cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:scale-210   duration-300" />
        </Link>

        <Link to="https://github.com/rupesh21CS19">
          <FaGithub className="cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:scale-210   duration-300" />
        </Link>
      </div>
      <div className="flex gap-2 text-xl items-center m-auto my-3 sm:m-0 sm:my-0 sm:text-lg ">
        <FaHeart className="text-red-700" />
        Created by Rupesh.
      </div>
    </div>
  );
};

export default Footer;
