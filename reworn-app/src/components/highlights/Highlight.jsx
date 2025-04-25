import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import shoes from "../../assets/images/shoes.png";
import exclusive from "../../assets/images/exclusive.png";
import exquisite from "../../assets/images/exquisite.png";
import newArrivals from "../../assets/images/newArrivals.png";
function Highlight() {
  return (
    <section id="highlights" className="block mt=[400px]">
      <SectionTitle title="Rrobat e fundit" />
      <div className="grid grid-cols-3 grid-rows-2 px-5 gap-2 max-w-[500px] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] h-auto mx-auto ">
        <Link
          to="/clothes"
          className="relative col-span-1 w-full h-full transition-all duration-300 hover:brightness-50"
        >
          <img
            src={shoes}
            alt="Exclusive Shoes"
            className="w-full h-full object-cover brightness-75"
          />
          <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[14px] sm:text-xl md:text-3xl font-bold ">
            Patike Ekskluzive
          </h3>
        </Link>
        <Link
          to="/clothes"
          className="relative col-span-2 w-full h-full transition-all duration-300 hover:brightness-50"
        >
          <img
            src={exquisite}
            alt="Exquisite Styles & Collections"
            className="w-full h-full object-cover brightness-75"
          />
          <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[14px] sm:text-xl md:text-3xl font-bold">
            Veshje me stile te ndryshme
          </h3>
        </Link>
        <Link
          to="/clothes"
          className="relative col-span-2 w-full h-full transition-all duration-300 hover:brightness-50"
        >
          <img
            src={newArrivals}
            alt="New Arrivals"
            className="w-full h-full object-cover brightness-75"
          />
          <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[14px] sm:text-xl md:text-3xl font-bold">
            Arritjet e reja
          </h3>
        </Link>
        <Link
          to="/clothes"
          className="relative col-span-1 w-full h-full transition-all duration-300 hover:brightness-50"
        >
          <img
            src={exclusive}
            alt="Exclusive Items"
            className="w-full h-full object-cover brightness-75"
          />
          <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[14px] sm:text-xl md:text-3xl font-bold">
            Gjëra Ekskluzive
          </h3>
        </Link>
      </div>
    </section>
  );
}

export default Highlight;
