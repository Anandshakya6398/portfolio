"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Navbar = () => {
  const [isScroll, setISScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setISScroll(true);
      } else {
        setISScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`select-none w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white " : ""
        } `}
      >
        <a href="#home">
          <h4 className="text-4xl font-Cedarville_Cursive">Portfolio</h4>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-xl bg-opacity-50 "
          } `}
        >
          <li>
            <a
              href="#top"
              className="font-Cedarville_Cursive hover:text-blue-600 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-Cedarville_Cursive hover:text-blue-600"
            >
              About Me
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#skills"
              className="font-Cedarville_Cursive hover:text-blue-600"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="font-Cedarville_Cursive hover:text-blue-600"
            >
              Projects
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#contact"
              className="font-Cedarville_Cursive hover:text-blue-600"
            >
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <button>
            <Image src={assets.moon_icon} alt="" className="w-5" />
          </button> */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 hover:bg-blue-200 duration-300 rounded-full ml-4 font-Cedarville_Cursive"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
        {/* -------------mobile menu ---------------- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-60 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className="font-Outfit" onClick={closeMenu}>
              Home
            </a>{" "}
          </li>
          <li>
            <a href="#about" className="font-Outfit" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            {" "}
            <a href="#skills" className="font-Outfit" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="font-Outfit" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            {" "}
            <a href="#contact" className="font-Outfit" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
