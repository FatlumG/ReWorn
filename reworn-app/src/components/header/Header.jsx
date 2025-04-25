import React from "react";
import search from "../../assets/icons/searchIcon.svg";
import Navbar from "./Navbar";
import InputField from "../InputField";
// import clothes from "../../data.json";

function Header({ searchValue, inputValue }) {
  const handleInputChange = (e) => {
    searchValue(e.target.value); // Update search value using passed searchValue function
  };
  return (
    <header className="relative h-[13vh] bg-bg-primary flex justify-between items-center px-10 sm:px-20 shadow-lg z-50 font-poppins">
      <div className="text text-2xl font-bold text-primary">ReWorn</div>
      <div className="search-bar hidden sm:flex items-center border-b-2 border-gray">
        <img
          src={search}
          alt="Search Icon"
          className="p-2 pe-4 cursor-pointer"
        />
        <InputField
          type="text"
          placeholder="Kërko rroba..."
          inputClass="outline-none bg-bg-primary"
          className="w-full p-2 pe-4"
          parentClass="w-[300px] p-2 pe-4 outline-none"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
