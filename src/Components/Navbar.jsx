import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex text-gray-500 justify-between items-center h-24 px-4">
      <h1 className=" text-3xl text-[#00df9a] font-bold">REACT.</h1>
      <div className=" flex items-center">
        <ul className=" hidden md:flex px-10">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Services</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className=" block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? " fixed left-0 top-0 w-[40%] h-full  bg-white dark:bg-gray-900 border-r border-r-gray-600 ease-in-out duration-500"
              : " fixed left-[-100%]"
          }
        >
          <h1 className=" text-3xl text-[#00df9a] font-bold m-4">REACT.</h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Services</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
