import React from "react";

function HeroButton() {
  return (
    <button className="relative inline-block border-0 align-middle text-lg mt-6 bg-transparent cursor-pointer w-64 h-auto group">
      <span className="relative w-12 h-14 bg-transparent border border-white rounded-full transition-all duration-500 ease-in group-hover:w-full flex items-center justify-center">
        <span className="absolute w-4 h-[2px] bg-transparent left-2 transition-all duration-900 ease-in group-hover:translate-x-[10px]">
          <span className="absolute top-[-4.6px] right-0.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45"></span>
        </span>
      </span>
      <span className="absolute top-0 left-2.5 right-0 bottom-0 py-3 ml-7 text-white font-bold text-center uppercase text-[15px] leading-[34px] transition-all duration-900 ease-in-out">
        Merr Rroba Falas
      </span>
    </button>
  );
}

export default HeroButton;
