import React, { useState } from "react";
import { navLinks } from "@/constants/values";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex w-full max-w-7xl mx-auto py-6 justify-between items-center navbar">
      <img
        src="/assets/logo.svg"
        alt="Hoobank Logo"
        className="w-[124px] h-[32px]"
      />
      <ul className="hidden sm:flex list-none justify-end items-center flex-1">
        {navLinks.map((link, index) => {
          return (
            <li
              key={link.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="flex sm:hidden flex-1 justify-end items-center">
        <img
          src={toggleMenu ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="Mobile Sidebar"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggleMenu((oldToggle) => !oldToggle)}
        />
        <div
          className={`absolute top-20 right-0 ${
            toggleMenu ? "flex" : "hidden"
          } p-6 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-black-gradient`}
        >
          <ul className="flex-col list-none justify-end items-center flex-1">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={link.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
