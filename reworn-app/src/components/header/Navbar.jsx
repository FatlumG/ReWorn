import React from "react";
import basket from "../../assets/icons/basket.svg";

function Navbar() {
  return (
    <ul className="flex items-center gap-10">
      <li className="cursor-pointer">
        <i id="xmark" className="fa-solid fa-right-to-bracket"></i>
      </li>
      {/* after: contents-[''] h-[2px] w-0 absolute left-0 -bottom-1 transition-all bg-bg-secondary */}
      <li className="list-none inline-block relative ">
        <a href="#">Rrobat</a>
      </li>
      <li className=" list-none inline-block relative ">
        <a href="#">Llogaria</a>
      </li>
      <li className=" list-none inline-block relative ">
        <a href="#">Lista e dëshirave</a>
      </li>
      <li className=" list-none inline-block relative ">
        <a href="#" className="flex gap-3">
          <span>Shporta</span>
          <img src={basket} className="basket-icon" alt="Basket Icon" />
        </a>
      </li>
    </ul>
    //   <i id="bars" class="fa-solid fa-bars"></i>
  );
}

export default Navbar;
