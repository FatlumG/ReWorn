import React from "react";
import Button from "./Button";

function Card({ image, alt, descr }) {
  return (
    <div className="relative text-center col-span-4 md:col-span-2 xl:col-span-1 max-w-[300px]">
      <img src={image} alt={alt} className="w-full h-80 object-cover" />
      <p className="mt-2">{descr}</p>
      <Button
        type="button"
        className="font-semibold mt-2"
        children="+ Shto në shportë"
      />
    </div>
  );
}

export default Card;
