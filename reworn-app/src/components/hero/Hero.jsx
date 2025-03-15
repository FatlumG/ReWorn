import React from "react";
import HeroButton from "./HeroButton";
import navyBlue from "../../assets/images/navyBlue.png";

function Hero() {
  return (
    <section className="grid grid-cols-7 h-[87vh] place-items-center">
      <div className="hero-content col-span-7 sm:col-span-4 w-full h-full flex flex-col justify-center items-start px-2 md:px-10 bg-bg-secondary">
        <div className="w-full py-[20px] px-[40px] text-white flex flex-col gap-2">
          <h1 className="w-full text-[2.5rem] font-bold leading-[44px]">
            Ndaj ngrohtësinë, Merr rroba falas sot!
          </h1>
          <p className="w-full mt-5 text-lg">
            Ju prezantojmë me koleksionin më të ri të rrobave tona!
          </p>
          <HeroButton />
        </div>
      </div>
      <div className="hidden col-span-3 w-full h-full sm:flex justify-center items-center bg-light-blue">
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
