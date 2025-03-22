import React, { useState } from "react";
import Card from "../Card";
import girl1 from "../../assets/clothes/girl1.png";
import Filter from "./Filter";

function Clothes() {
  const [sort, setSort] = useState(["Më të rejat", "Më të vjetrat"]);
  const [gender, setGender] = useState(["Dy gjinitë", "Meshkuj", "Femra"]);
  const [color, setColor] = useState([
    "Të gjitha",
    "E Bardhë ⬜",
    "E Zezë ⬛",
    "E Hirit ⬜⬛",
    "E Kuqe 🟥",
    "E Kaltër 🟦",
    "E Gjelbër 🟩",
    "E Vjollcë 🟪",
    "E Verdhë 🟨",
    "E Portokalltë 🟧",
    "E Kaftë 🟫",
  ]);
  const [size, setSize] = useState([
    "Të gjitha",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
  ]);
  const [category, setCategory] = useState([
    "Të gjitha",
    "Kapele",
    "Veshje",
    "Kepucë",
  ]);
  const [season, setSeason] = useState([
    "Të gjitha",
    "Pranverë",
    "Verë",
    "Vjeshtë",
    "Dimër",
  ]);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-4 px-3 mt-10">
        <Filter filterName="Rendit sipas 🔽" choices={sort} />
        <Filter filterName="Gjinia 🔽" choices={gender} />
        <Filter filterName="Ngjyra 🔽" choices={color} />
        <Filter filterName="Madhësa 🔽" choices={size} />
        <Filter filterName="Kategoria 🔽" choices={category} />
        <Filter filterName="Sezoni 🔽" choices={season} />
      </div>
      <div className="grid grid-cols-4 gap-y-16 p-14 pt-10 h-auto place-items-center">
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
