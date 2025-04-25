import React, { useState } from "react";
import Header from "../components/header/Header";
import Clothes from "../components/clothes/Clothes";
import Footer from "../components/footer/Footer";
function ClothesPage() {
  const [inputValue, setInputValue] = useState(""); // Maintain inputValue state

  // Function to update inputValue
  const handleSearchChange = (value) => {
    setInputValue(value);
  };
  return (
    <div className="overflow-x-hidden">
      <Header searchValue={handleSearchChange} inputValue={inputValue} />
      <Clothes search={inputValue} />
      <Footer />
    </div>
  );
}

export default ClothesPage;
