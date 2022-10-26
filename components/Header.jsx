import React from "react";
import {
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiOutlineUser,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import NavBar from "./NavBar";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="hidden md:block border-b border-black/30 sticky top-0 left-0 z-50 bg-white">
        <header className="flex container mx-auto p-5 items-center justify-between">
          <div className="flex cursor-pointer items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="26"
              viewBox="0 0 640 480"
              className="mr-2"
            >
              <path fill="#f93" d="M0 0h640v160H0z"></path>
              <path fill="#fff" d="M0 160h640v160H0z"></path>
              <path fill="#128807" d="M0 320h640v160H0z"></path>
              <g transform="matrix(3.2 0 0 3.2 320 240)">
                <circle r="20" fill="#008"></circle>
                <circle r="17.5" fill="#fff"></circle>
                <circle r="3.5" fill="#008"></circle>
                <g id="d">
                  <g id="c">
                    <g id="b">
                      <g id="a" fill="#008">
                        <circle
                          r=".875"
                          transform="rotate(7.5 -8.748 133.493)"
                        ></circle>
                        <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z"></path>
                      </g>
                      <use
                        height="480"
                        width="640"
                        href="#a"
                        transform="rotate(15)"
                      ></use>
                    </g>
                    <use
                      height="480"
                      width="640"
                      href="#b"
                      transform="rotate(30)"
                    ></use>
                  </g>
                  <use
                    height="480"
                    width="640"
                    href="#c"
                    transform="rotate(60)"
                  ></use>
                </g>
                <use
                  height="480"
                  width="640"
                  href="#d"
                  transform="scale(-1) rotate(-60)"
                ></use>
                <use
                  height="480"
                  width="640"
                  href="#d"
                  transform="scale(-1) rotate(60)"
                ></use>
              </g>
            </svg>
            IN ₹
          </div>
          <div>
            <img src="/logo_mk.webp" alt="Michael Kors Logo" className="h-6" />
          </div>
          <div className="inline-flex text-gray-600">
            <HiOutlineSearch className="w-7 h-7 mr-3 hover:text-gray-500 cursor-pointer" />
            <HiOutlineLocationMarker className="w-7 h-7 mr-3 hover:text-gray-500 cursor-pointer" />
            <HiOutlineUser className="w-7 h-7 mr-4 hover:text-gray-500 cursor-pointer" />
            <HiOutlineShoppingBag className="w-7 h-7 hover:text-gray-500 cursor-pointer" />
          </div>
        </header>
        <NavBar />
      </div>
      <div className="bg-white p-3 flex items-center justify-between sticky top-0 left-0 z-50">
        <div className="w-[50px]">
          <GiHamburgerMenu className="w-6 h-6" />
        </div>
        <div>
          <img src="/logo_mk.webp" alt="Michael Kors Logo" className="h-4" />
        </div>
        <div className="inline-flex">
          <HiOutlineSearch className="w-6 h-6 mr-3 hover:text-gray-500 cursor-pointer" />
          <HiOutlineShoppingBag className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Header;
