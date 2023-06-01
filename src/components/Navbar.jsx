import React, { useState } from "react";
import Menu from "./ui/Menu";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="">
      <div className="flex items-center justify-between gap-20 px-8 lg:px-14">
        <div className="h-10 w-10 rounded-full bg-white lg:grid lg:h-14 lg:w-14 lg:place-items-center">
          <img
            src="src/assets/shared/logo.svg"
            alt="logo"
            className="lg:h-14"
          />
        </div>
        {/* Mobile */}
        <div
          onClick={() => setOpenMenu(true)}
          className="-mr-6 cursor-pointer p-6 md:hidden"
        >
          <img src="src/assets/shared/icon-hamburger.svg" alt="openMenu" />
        </div>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        {/* Mobile End */}
        <hr className="hidden h-0.5 flex-1 bg-grey/25 lg:block" />
        <ul className="navText -mr-14 hidden gap-8 pr-20 text-white md:flex lg:border lg:border-white/5 lg:bg-gradient-to-r lg:from-black/80 lg:from-10% lg:via-black/20 lg:via-30% lg:to-white/5 lg:to-100% lg:pl-14 lg:pr-32 lg:shadow-[0_4px_30px_rgba(0,0,0,0.1)] lg:backdrop-blur">
          <li className="group relative">
            <div className="absolute inset-x-0.5 bottom-0 h-0.5 bg-white opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>
            <Link to={"/"} className="block py-8">
              <span className="mr-2 hidden font-bold lg:inline">00</span>
              home
            </Link>
          </li>
          <li className="group relative">
            <div className="absolute inset-x-0.5 bottom-0 h-0.5 bg-white opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>

            <Link to={"/destination"} className="block py-8">
              <span className="mr-2 hidden font-bold lg:inline">01</span>
              destination
            </Link>
          </li>
          <li className="group relative">
            <div className="absolute inset-x-0.5 bottom-0 h-0.5 bg-white opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>

            <Link to={"/crew"} className="block py-8">
              <span className="mr-2 hidden font-bold lg:inline">02</span>
              crew
            </Link>
          </li>
          <li className="group relative">
            <div className="absolute inset-x-0.5 bottom-0 h-0.5 bg-white opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>

            <Link to={"/technology"} className="block py-8">
              <span className="mr-2 hidden font-bold lg:inline">03</span>
              technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
