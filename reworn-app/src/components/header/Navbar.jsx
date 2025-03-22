import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <ul
        className={`absolute flex flex-col bg-bg-primary w-full h-[100vh] ${
          open ? "top-0 left-0 opacity-100" : "top-0 left-full opacity-50"
        } justify-center text-primary lg:flex-row lg:static lg:bg-transparent lg:opacity-100 lg:w-auto lg:h-auto items-center gap-3 font-poppins transition-all duration-500`}
      >
        <li className="cursor-pointer">
          <FaXmark
            className="inline-block lg:hidden relative transition-all duration-150 hover:translate-y-[-3px]"
            onClick={toggle}
          />
        </li>
        <li className="list-none inline-block relative p-3 transition-all duration-150 cursor-pointer hover:translate-y-[-3px]">
          <ScrollLink to="highlights" smooth={true} duration={500}>
            Rrobat
          </ScrollLink>
        </li>
        <li className="list-none inline-block relative p-3 whitespace-nowrap transition-all duration-150 cursor-pointer hover:translate-y-[-3px]">
          <ScrollLink to="latest" smooth={true} duration={500}>
            Të fundit
          </ScrollLink>
        </li>
        <li className="list-none inline-block relative p-3 whitespace-nowrap transition-all duration-150 cursor-pointer hover:translate-y-[-3px]">
          <RouterLink to="/clothes">Të gjitha</RouterLink>
        </li>
        <li className="list-none inline-block relative p-3 transition-all duration-150 cursor-pointer hover:translate-y-[-3px]">
          <ScrollLink to="footer" smooth={true} duration={1000}>
            Kontakti
          </ScrollLink>
        </li>
      </ul>
      <FaBars className="cursor-pointer lg:hidden" onClick={toggle} />
    </>
  );
}

export default Navbar;
