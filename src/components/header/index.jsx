import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"; // Importando o componente Link do React Router

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/" }, 
    { id: 2, text: "Cats", path: "/cats" },
    { id: 3, text: "News", path: "/news" },
    { id: 4, text: "HP", path: "/hp" }
  ];

  return (
    <>
      <div className="bg-black flex justify-between items-center h-16 max-w-[1540px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-white">The Cats Site</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-[#3b82f6] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link to={item.path}>{item.text}</Link> 
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#3b82f6] m-4">
            CATS
          </h1>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#3b82f6] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
