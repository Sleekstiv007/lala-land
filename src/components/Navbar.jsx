import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute top-0 w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">Lala Land</h1>
      <HiOutlineMenu
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="pt-8 flex flex-col w-full items-center justify-center ">
          <li className="font-bold text-xl p-8">Destination</li>
          <li className="font-bold text-xl p-8">Reservation</li>
          <li className="font-bold text-xl p-8">Home</li>
          <li className="font-bold text-xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
