import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import girl1 from "../../assets/clothes/girl1.png";
import girl2 from "../../assets/clothes/girl2.png";
import girl3 from "../../assets/clothes/girl3.png";
import girl4 from "../../assets/clothes/girl4.png";

function Popular() {
  return (
    <section className="px-1 md:px-24 h-auto">
      <SectionTitle title="Popular this week" />
      <div className="grid grid-cols-4 gap-10 h-auto place-items-center">
        <Card image={girl1} alt="Girl 1" descr="Lorem ipsum dolor sit amet." />
        <Card image={girl2} alt="Girl 2" descr="Lorem ipsum dolor sit amet." />
        <Card image={girl3} alt="Girl 3" descr="Lorem ipsum dolor sit amet." />
        <Card image={girl4} alt="Girl 4" descr="Lorem ipsum dolor sit amet." />
      </div>
    </section>
  );
}

export default Popular;
