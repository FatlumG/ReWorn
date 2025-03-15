import React from "react";
import search from "../../assets/icons/searchIcon.svg";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="relative h-[13vh] bg-bg-primary flex justify-between items-center px-10 px-sm-20 shadow-lg z-50 font-poppins">
      <div className="text text-2xl font-bold">ReWorn</div>
      <div className="search-bar hidden sm:flex items-center border-b-2 border-gray">
        <img
          src={search}
          alt="Search Icon"
          className="p-2 pe-4 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Kërko rroba..."
          className="w-[300px] p-2 pe-4 outline-none bg-bg-primary"
        />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
