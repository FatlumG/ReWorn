import React from "react";
import Card from "../Card";
import girl1 from "../../assets/clothes/girl1.png";
function Clothes() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-y-16 p-14 pt-20 h-auto place-items-center">
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
        <Card image={girl1} alt="Clothing" descr="Lorem ispum dolor." />
      </div>
    </div>
  );
}

export default Clothes;
