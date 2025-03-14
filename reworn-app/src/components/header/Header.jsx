import React from "react";
import search from "../../assets/icons/searchIcon.svg";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="relative h-[13vh] flex justify-between items-center px-24 shadow-lg z-50">
      <div className="text text-2xl font-bold">ReWorn</div>
      <div className="search-bar flex items-center border-b-2 border-gray">
        <img src={search} alt="Search Icon" className="p-2 pe-4" />
        <input
          type="text"
          placeholder="Kërko rroba..."
          className="w-[300px] p-2 pe-4 border-0 focus:border-0"
        />
      </div>
      {/* <ul class="navbar">
        <li class="nav-link exit">
          <i id="xmark" class="fa-solid fa-right-to-bracket"></i>
        </li>
        <li class="nav-link">
          <a href="#">Rrobat</a>
        </li>
        <li class="nav-link">
          <a href="#">Llogaria</a>
        </li>
        <li class="nav-link">
          <a href="#">Lista e dëshirave</a>
        </li>
        <li class="nav-link">
          <a href="#" class="basket">
            <span>Shporta</span>
            <img src={basket} class="basket-icon" alt="Basket Icon" />
          </a>
        </li>
      </ul>
      <i id="bars" class="fa-solid fa-bars"></i> */}
      <Navbar />
    </header>
  );
}

export default Header;
