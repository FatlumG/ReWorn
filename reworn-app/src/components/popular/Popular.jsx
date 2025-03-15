import React from "react";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import girl1 from "../../assets/clothes/girl1.png";
import girl2 from "../../assets/clothes/girl2.png";
import girl3 from "../../assets/clothes/girl3.png";
import girl4 from "../../assets/clothes/girl4.png";

function Popular() {
  return (
    <section className="px-1 md:px-24 h-auto">
      <SectionTitle title="Popular this week" />
      <div className="grid grid-cols-4 gap-10 h-auto place-items-center">
        <div className="relative text-center col-span-4 md:col-span-2 xl:col-span-1 max-w-[300px]">
          <img src={girl1} alt="Girl 1" />
          <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          <Button
            type="button"
            className="font-semibold mt-2"
            children="+ Shto në shportë"
          />
        </div>
        <div className="relative text-center col-span-4 md:col-span-2 xl:col-span-1 max-w-[300px]">
          <img src={girl2} alt="Girl 2" />
          <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          <Button
            type="button"
            className="font-semibold mt-2"
            children="+ Shto në shportë"
          />
        </div>
        <div className="relative text-center col-span-4 md:col-span-2 xl:col-span-1 max-w-[300px]">
          <img src={girl3} alt="Girl 3" />
          <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          <Button
            type="button"
            className="font-semibold mt-2"
            children="+ Shto në shportë"
          />
        </div>
        <div className="relative text-center col-span-4 md:col-span-2 xl:col-span-1 max-w-[300px]">
          <img src={girl4} alt="Girl 4" />
          <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          <Button
            type="button"
            className="font-semibold mt-2"
            children="+ Shto në shportë"
          />
        </div>
      </div>
    </section>
  );
}

export default Popular;
