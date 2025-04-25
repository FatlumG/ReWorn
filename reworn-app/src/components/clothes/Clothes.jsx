import React, { useState } from "react";
import Card from "../Card";
import Filter from "./Filter";
import clothes from "../../data";

function Clothes({ search }) {
  const [selectedSort, setSelectedSort] = useState("Më të rejat");
  const [selectedGender, setSelectedGender] = useState("Dy gjinitë");
  const [selectedColor, setSelectedColor] = useState("Të gjitha");
  const [selectedSize, setSelectedSize] = useState("Të gjitha");
  const [selectedCategory, setSelectedCategory] = useState("Të gjitha");
  // const [searchPut, setSearchPut] = useState(search);

  const filteredClothes = clothes.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGender =
      selectedGender === "Dy gjinitë" || item.gender === selectedGender;

    const matchesColor =
      selectedColor === "Të gjitha" || item.color === selectedColor;

    const matchesSize =
      selectedSize === "Të gjitha" || item.size === selectedSize;

    const matchesCategory =
      selectedCategory === "Të gjitha" || item.category === selectedCategory;

    return (
      matchesSearch &&
      matchesGender &&
      matchesColor &&
      matchesSize &&
      matchesCategory
    );
  });

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-4 px-3 mt-10">
        <Filter
          filterName="Rendit sipas 🔽"
          choices={["Më të rejat", "Më të vjetrat"]}
          onSelect={(value) => setSelectedSort(value)}
        />
        <Filter
          filterName="Gjinia 🔽"
          choices={["Dy gjinitë", "Meshkuj", "Femra"]}
          onSelect={(value) => setSelectedGender(value)}
        />
        <Filter
          filterName="Ngjyra 🔽"
          choices={[
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
          ]}
          onSelect={(value) => setSelectedColor(value)}
        />
        <Filter
          filterName="Madhësia 🔽"
          choices={["Të gjitha", "S", "M", "L", "XL", "XXL", "XXXL"]}
          onSelect={(value) => setSelectedSize(value)}
        />
        <Filter
          filterName="Kategoria 🔽"
          choices={["Të gjitha", "Kapele", "Veshje", "Kepucë"]}
          onSelect={(value) => setSelectedCategory(value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-y-16 p-14 pt-10 h-auto place-items-center">
        {filteredClothes.map((item) => (
          <Card
            image={item.src}
            alt="Clothing"
            descr={item.name}
            category={item.category}
            color={item.color}
            gender={item.gender}
            size={item.size}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Clothes;
