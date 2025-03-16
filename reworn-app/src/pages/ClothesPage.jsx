import React from "react";
import Header from "../components/header/Header";
import Clothes from "../components/clothes/Clothes";
import Footer from "../components/footer/Footer";
function ClothesPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Clothes/>
      <Footer />
    </div>
  );
}

export default ClothesPage;
