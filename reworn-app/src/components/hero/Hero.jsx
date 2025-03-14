import React from "react";
import heroBg from "../../assets/backgrounds/heroBg.svg";
import HeroButton from "./HeroButton";
import navyBlue from "../../assets/images/navyBlue.png";

function Hero() {
  return (
    <section className="grid grid-cols-7 h-[59vh] place-items-center">
      <div className="hero-content col-span-4 w-full h-full flex flex-col justify-center items-start px-10 bg-bg-secondary">
        <div className="hero-action w-[70%] py-[20px] px-[40px] text-white">
          <h1 className="text-[3.3rem] font-bold leading-[60px]">
            Ndaj ngrohtësinë, Merr rroba falas sot!
          </h1>
          <p className="mt-5 text-lg">
            Ju prezantojmë me koleksionin më të ri të rrobave tona!
          </p>
          <HeroButton />
        </div>
      </div>
      <div className="hero-image col-span-3 w-full h-full flex justify-center items-center bg-green">
        <div className="circle"></div>
        <img
          src={navyBlue}
          alt="Fashion model"
          style={{ height: "87vh" }}
          className="p-10 h-full w-max-[auto]"
        />
      </div>
    </section>
  );
}

export default Hero;

// const styles = {
//   backgroundImage: `url(${heroBg})`,
// };
