import React from "react";
import { Link } from "react-router-dom";
export default function Menu({ openMenu, setOpenMenu }) {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-10 w-[65vw] max-w-[20rem] ${
        openMenu ? "translate-x-0" : "translate-x-full"
      } border border-white/10 bg-gradient-to-b from-black/80 from-10% via-black/30 via-30% to-white/5 to-100% shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur duration-200 ease-in-out`}
    >
      <div
        onClick={() => setOpenMenu(false)}
        className="ml-auto w-fit cursor-pointer p-6"
      >
        <img
          src="/src/assets/shared/icon-close.svg"
          alt="closeMenu"
          className=""
        />
      </div>

      <ul className="navText mt-4 text-white">
        <li>
          <Link to={"/"} className="block p-4 px-6">
            <span className="mr-2 font-bold">00</span>
            home
          </Link>
        </li>
        <li>
          <Link to={"/destination"} className="block p-4 px-6">
            <span className="mr-2 font-bold">01</span>
            destination
          </Link>
        </li>
        <li>
          <Link to={"/crew"} className="block p-4 px-6">
            <span className="mr-2 font-bold">02</span>
            crew
          </Link>
        </li>
        <li>
          <Link to={"/technology"} className="block p-4 px-6">
            <span className="mr-2 font-bold">03</span>
            technology
          </Link>
        </li>
      </ul>
    </div>
  );
}
