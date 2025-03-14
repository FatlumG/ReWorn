import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Highlight from "../components/highlights/Highlight";
import Popular from "../components/popular/Popular";
import Footer from "../components/footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Highlight />
      <Popular />
      <Footer/>
    </div>
  );
}

export default HomePage;
