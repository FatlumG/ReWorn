import React, { useState } from "react";
import basket from "../../assets/icons/basket.svg";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <ul
        className={`absolute flex flex-col bg-bg-primary w-full h-[100vh] ${
          open ? "top-0 left-0 opacity-100" : "top-0 left-full opacity-50"
        } justify-center lg:flex-row lg:static lg:bg-transparent lg:opacity-100 lg:w-auto lg:h-auto items-center gap-3 font-poppins transition-all duration-500`}
      >
        <li className="cursor-pointer">
          <FaXmark
            className="inline-block lg:hidden relative transition-all duration-150 hover:translate-y-[-3px]"
            onClick={toggle}
          />
        </li>
        <li className="list-none inline-block relative p-3 transition-all duration-150 hover:translate-y-[-3px]">
          <a href="#">Rrobat</a>
        </li>
        <li className="list-none inline-block relative p-3 transition-all duration-150 hover:translate-y-[-3px]">
          <a href="#">Llogaria</a>
        </li>
        <li className="list-none inline-block relative p-3 whitespace-nowrap transition-all duration-150 hover:translate-y-[-3px]">
          <a href="#">Lista e dëshirave</a>
        </li>
        <li className="list-none inline-block relative p-3 transition-all duration-150 hover:translate-y-[-3px]">
          <a href="#" className="flex gap-3">
            <span>Shporta</span>
            <img src={basket} className="basket-icon" alt="Basket Icon" />
          </a>
        </li>
      </ul>
      <FaBars className="cursor-pointer lg:hidden" onClick={toggle} />
    </>
  );
}

export default Navbar;
